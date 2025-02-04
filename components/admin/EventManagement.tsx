"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { EventType } from "@prisma/client";
import { format } from "date-fns";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Event {
  id: string;
  title: string;
  description: string;
  type: EventType;
  startDate: string;
  endDate: string;
  venue: string;
  objectives: string[];
  cpdPoints: number;
  speakers: string[];
  moderators: string[];
  capacity?: number | null;
  registrationDeadline?: string | null;
  materials?: Record<string, any> | null;
  attendees: Array<{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  }>;
}

type FormValues = {
  title: string;
  description: string;
  type: EventType;
  startDate: string;
  endDate: string;
  venue: string;
  objectives: string[];
  cpdPoints: number;
  speakers: string[];
  moderators: string[];
  capacity?: number | null;
  registrationDeadline?: string | null;
  materials?: Record<string, any> | null;
};

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  type: z.nativeEnum(EventType),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  venue: z.string().min(1, "Venue is required"),
  objectives: z.array(z.string()).min(1, "At least one objective is required"),
  cpdPoints: z.number().min(0, "CPD points must be non-negative"),
  speakers: z.array(z.string()),
  moderators: z.array(z.string()),
  capacity: z.number().nullable().optional(),
  registrationDeadline: z.string().nullable().optional(),
  materials: z.record(z.any()).nullable().optional(),
});

export default function EventManagement() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      type: "CONFERENCE" as EventType,
      startDate: "",
      endDate: "",
      venue: "",
      objectives: [],
      cpdPoints: 0,
      speakers: [],
      moderators: [],
      capacity: null,
      registrationDeadline: null,
      materials: null,
    },
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    if (selectedEvent) {
      form.reset({
        title: selectedEvent.title,
        description: selectedEvent.description,
        type: selectedEvent.type,
        startDate: format(new Date(selectedEvent.startDate), "yyyy-MM-dd'T'HH:mm"),
        endDate: format(new Date(selectedEvent.endDate), "yyyy-MM-dd'T'HH:mm"),
        venue: selectedEvent.venue,
        objectives: selectedEvent.objectives,
        cpdPoints: selectedEvent.cpdPoints,
        speakers: selectedEvent.speakers,
        moderators: selectedEvent.moderators,
        capacity: selectedEvent.capacity,
        registrationDeadline: selectedEvent.registrationDeadline,
        materials: selectedEvent.materials,
      });
    } else {
      form.reset({
        title: "",
        description: "",
        type: "CONFERENCE" as EventType,
        startDate: "",
        endDate: "",
        venue: "",
        objectives: [],
        cpdPoints: 0,
        speakers: [],
        moderators: [],
        capacity: null,
        registrationDeadline: null,
        materials: null,
      });
    }
  }, [selectedEvent, form]);

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/admin/events");
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
      toast({
        title: "Error",
        description: "Failed to fetch events",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const url = selectedEvent
        ? `/api/admin/events/${selectedEvent.id}`
        : "/api/admin/events";
      const method = selectedEvent ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error(`Failed to ${selectedEvent ? 'update' : 'create'} event`);

      toast({
        title: "Success",
        description: `Event ${selectedEvent ? 'updated' : 'created'} successfully`,
      });
      setOpen(false);
      setSelectedEvent(null);
      form.reset();
      fetchEvents();
    } catch (error) {
      console.error(`Error ${selectedEvent ? 'updating' : 'creating'} event:`, error);
      toast({
        title: "Error",
        description: `Failed to ${selectedEvent ? 'update' : 'create'} event`,
        variant: "destructive",
      });
    }
  };

  const handleEdit = (event: Event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;

    try {
      const response = await fetch(`/api/admin/events/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete event");

      toast({
        title: "Success",
        description: "Event deleted successfully",
      });
      fetchEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
      toast({
        title: "Error",
        description: "Failed to delete event",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Dialog open={open} onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (!isOpen) setSelectedEvent(null);
        }}>
          <DialogTrigger asChild>
            <Button>Add New Event</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{selectedEvent ? 'Edit Event' : 'Create New Event'}</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.values(EventType).map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date</FormLabel>
                      <FormControl>
                        <Input type="datetime-local" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Date</FormLabel>
                      <FormControl>
                        <Input type="datetime-local" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="venue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Venue</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="objectives"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Objectives (one per line)</FormLabel>
                      <FormControl>
                        <Textarea 
                          value={field.value.join('\n')}
                          onChange={(e) => {
                            const value = e.target.value.split('\n').filter(Boolean);
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cpdPoints"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CPD Points</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          {...field} 
                          onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                          value={field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="speakers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Speakers (one per line)</FormLabel>
                      <FormControl>
                        <Textarea 
                          value={field.value.join('\n')}
                          onChange={(e) => {
                            const value = e.target.value.split('\n').filter(Boolean);
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="moderators"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Moderators (one per line)</FormLabel>
                      <FormControl>
                        <Textarea 
                          value={field.value.join('\n')}
                          onChange={(e) => {
                            const value = e.target.value.split('\n').filter(Boolean);
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="capacity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Capacity (optional)</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          value={field.value || ''}
                          onChange={(e) => {
                            const value = e.target.value ? parseInt(e.target.value) : null;
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="registrationDeadline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Registration Deadline (optional)</FormLabel>
                      <FormControl>
                        <Input 
                          type="datetime-local" 
                          value={field.value || ''}
                          onChange={(e) => field.onChange(e.target.value || null)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="materials"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Materials (JSON format)</FormLabel>
                      <FormControl>
                        <Textarea 
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">{selectedEvent ? 'Update Event' : 'Create Event'}</Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Venue</TableHead>
              <TableHead>CPD Points</TableHead>
              <TableHead>Speakers</TableHead>
              <TableHead>Moderators</TableHead>
              <TableHead>Capacity</TableHead>
              <TableHead>Attendees</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id}>
                <TableCell>{event.title}</TableCell>
                <TableCell>{event.type}</TableCell>
                <TableCell>
                  {format(new Date(event.startDate), "PPp")}
                </TableCell>
                <TableCell>
                  {format(new Date(event.endDate), "PPp")}
                </TableCell>
                <TableCell>{event.venue}</TableCell>
                <TableCell>{event.cpdPoints}</TableCell>
                <TableCell>{event.speakers.join(", ")}</TableCell>
                <TableCell>{event.moderators.join(", ")}</TableCell>
                <TableCell>{event.capacity || "Unlimited"}</TableCell>
                <TableCell>{event.attendees?.length || 0}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => handleEdit(event)}
                      size="sm"
                      variant="outline"
                    >
                      <FaEdit className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => handleDelete(event.id)}
                      size="sm"
                      variant="destructive"
                    >
                      <FaTrash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
} 