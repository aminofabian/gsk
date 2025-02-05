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

      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("type", values.type);
      formData.append("startDate", values.startDate);
      formData.append("endDate", values.endDate);
      formData.append("venue", values.venue);
      formData.append("objectives", JSON.stringify(values.objectives));
      formData.append("cpdPoints", values.cpdPoints.toString());
      formData.append("speakers", JSON.stringify(values.speakers));
      formData.append("moderators", JSON.stringify(values.moderators));
      if (values.capacity) formData.append("capacity", values.capacity.toString());
      if (values.registrationDeadline) formData.append("registrationDeadline", values.registrationDeadline);

      // Handle file uploads
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput && fileInput.files) {
        for (const file of Array.from(fileInput.files)) {
          formData.append("materials", file);
        }
      }

      const response = await fetch(url, {
        method,
        body: formData,
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
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Event Management</h1>
        <Dialog open={open} onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (!isOpen) setSelectedEvent(null);
        }}>
          <DialogTrigger asChild>
            <Button size="lg" className="gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
              Add New Event
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
            <DialogHeader className="space-y-3 mb-6 sticky top-0 bg-white pb-6 border-b z-10">
              <DialogTitle className="text-2xl font-bold">
                {selectedEvent ? 'Edit Event' : 'Create New Event'}
              </DialogTitle>
              <p className="text-muted-foreground">
                Fill in the details below to {selectedEvent ? 'update' : 'create'} an event.
              </p>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-6">
                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">Title</FormLabel>
                        <FormControl>
                          <Input className="h-10" {...field} />
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
                        <FormLabel className="text-sm font-semibold">Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-10">
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
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold">Description</FormLabel>
                      <FormControl>
                        <Textarea className="min-h-[80px] resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">Start Date</FormLabel>
                        <FormControl>
                          <Input type="datetime-local" className="h-10" {...field} />
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
                        <FormLabel className="text-sm font-semibold">End Date</FormLabel>
                        <FormControl>
                          <Input type="datetime-local" className="h-10" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="venue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">Venue</FormLabel>
                        <FormControl>
                          <Input className="h-10" {...field} />
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
                        <FormLabel className="text-sm font-semibold">CPD Points</FormLabel>
                        <FormControl>
                          <Input 
                            type="number"
                            className="h-10"
                            {...field} 
                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                            value={field.value}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="capacity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">Capacity (optional)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number"
                            className="h-10"
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
                        <FormLabel className="text-sm font-semibold">Registration Deadline</FormLabel>
                        <FormControl>
                          <Input 
                            type="datetime-local"
                            className="h-10"
                            value={field.value || ''}
                            onChange={(e) => field.onChange(e.target.value || null)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="objectives"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">Objectives</FormLabel>
                        <FormControl>
                          <Textarea 
                            className="min-h-[80px] resize-none"
                            placeholder="Enter objectives (one per line)"
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
                    name="speakers"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">Speakers</FormLabel>
                        <FormControl>
                          <Textarea 
                            className="min-h-[80px] resize-none"
                            placeholder="Enter speakers (one per line)"
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
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="moderators"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">Moderators</FormLabel>
                        <FormControl>
                          <Textarea 
                            className="min-h-[80px] resize-none"
                            placeholder="Enter moderators (one per line)"
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
                    name="materials"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">Materials</FormLabel>
                        <FormControl>
                          <Input 
                            type="file"
                            multiple
                            onChange={(e) => {
                              // Handle file selection UI only
                              const files = e.target.files;
                              if (!files) return;
                              
                              // You can add preview logic here if needed
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-end pt-4 sticky bottom-0 bg-white pb-2 border-t mt-6 -mx-6 px-6">
                  <Button type="submit" size="lg" className="w-[200px] gap-2">
                    {selectedEvent ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                          <polyline points="17 21 17 13 7 13 7 21" />
                          <polyline points="7 3 7 8 15 8" />
                        </svg>
                        Update Event
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                        Create Event
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-lg border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50">
              <TableHead className="font-semibold">Title</TableHead>
              <TableHead className="font-semibold">Type</TableHead>
              <TableHead className="font-semibold">Start Date</TableHead>
              <TableHead className="font-semibold">End Date</TableHead>
              <TableHead className="font-semibold">Venue</TableHead>
              <TableHead className="font-semibold">CPD Points</TableHead>
              <TableHead className="font-semibold">Speakers</TableHead>
              <TableHead className="font-semibold">Moderators</TableHead>
              <TableHead className="font-semibold">Capacity</TableHead>
              <TableHead className="font-semibold">Attendees</TableHead>
              <TableHead className="font-semibold text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id} className="hover:bg-gray-50/50">
                <TableCell className="font-medium">{event.title}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    {event.type}
                  </span>
                </TableCell>
                <TableCell className="text-gray-600">
                  {format(new Date(event.startDate), "PPp")}
                </TableCell>
                <TableCell className="text-gray-600">
                  {format(new Date(event.endDate), "PPp")}
                </TableCell>
                <TableCell>{event.venue}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10">
                    {event.cpdPoints} points
                  </span>
                </TableCell>
                <TableCell className="max-w-[200px] truncate" title={event.speakers.join(", ")}>
                  {event.speakers.join(", ")}
                </TableCell>
                <TableCell className="max-w-[200px] truncate" title={event.moderators.join(", ")}>
                  {event.moderators.join(", ")}
                </TableCell>
                <TableCell>
                  {event.capacity ? (
                    <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                      {event.capacity} seats
                    </span>
                  ) : (
                    <span className="text-gray-500">Unlimited</span>
                  )}
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                    {event.attendees?.length || 0} registered
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      onClick={() => handleEdit(event)}
                      size="sm"
                      variant="outline"
                      className="h-8 w-8 p-0"
                    >
                      <FaEdit className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => handleDelete(event.id)}
                      size="sm"
                      variant="destructive"
                      className="h-8 w-8 p-0"
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