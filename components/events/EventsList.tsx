"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { 
  CalendarDays, 
  MapPin, 
  Users, 
  Clock, 
  Award, 
  FileText, 
  UserCheck,
  Download,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface Event {
  id: string;
  title: string;
  description: string;
  type: "CONFERENCE" | "WORKSHOP" | "SEMINAR" | "MEETING";
  startDate: string;
  endDate: string;
  venue: string;
  objectives: string[];
  cpdPoints: number;
  speakers: string[];
  moderators: string[];
  capacity?: number | null;
  registrationDeadline?: string | null;
  materials?: Record<string, string> | null;
  attendees: Array<{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  }>;
}

export default function EventsList() {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();
  const { data: session } = useSession();

  const handleRegister = async (eventId: string) => {
    if (!session) {
      router.push("/auth/login");
      return;
    }

    try {
      setIsLoading(eventId);
      const response = await fetch("/api/events/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventId }),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
      }

      toast({
        title: "Success",
        description: "Successfully registered for the event",
      });

      fetchEvents();
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to register for event",
        variant: "destructive",
      });
    } finally {
      setIsLoading(null);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events");
      if (!response.ok) throw new Error("Failed to fetch events");
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
      setIsInitialLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const getEventTypeColor = (type: Event["type"]) => {
    const colors = {
      CONFERENCE: "bg-blue-100 text-blue-800 border-blue-200",
      WORKSHOP: "bg-green-100 text-green-800 border-green-200",
      SEMINAR: "bg-purple-100 text-purple-800 border-purple-200",
      MEETING: "bg-orange-100 text-orange-800 border-orange-200",
    };
    return colors[type];
  };

  if (isInitialLoading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white border rounded-lg p-6">
            <Skeleton className="h-8 w-2/3 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-1/4" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {events.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border">
          <p className="text-gray-500">No upcoming events at the moment.</p>
        </div>
      ) : (
        events.map((event) => {
          const isRegistered = event.attendees.some(
            (attendee) => attendee.id === session?.user?.id
          );
          const isExpanded = expandedEvent === event.id;
          const isRegistrationClosed = event.registrationDeadline 
            ? new Date(event.registrationDeadline) < new Date() 
            : false;
          const isFull = event.capacity 
            ? event.attendees.length >= event.capacity 
            : false;

          return (
            <div
              key={event.id}
              className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-[#003366]">
                        {event.title}
                      </h2>
                      <Badge className={getEventTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Badge variant="secondary" className="whitespace-nowrap">
                          <Award className="w-4 h-4 mr-1" />
                          {event.cpdPoints} CPD Points
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Continuing Professional Development Points</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <CalendarDays className="w-5 h-5 mr-2 text-[#003366]" />
                      <span>
                        {format(new Date(event.startDate), "PPP")} - {format(new Date(event.endDate), "PPP")}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2 text-[#003366]" />
                      <span>
                        {format(new Date(event.startDate), "p")} - {format(new Date(event.endDate), "p")}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2 text-[#003366]" />
                      <span>{event.venue}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-2 text-[#003366]" />
                      <span>
                        {event.attendees.length} attendees
                        {event.capacity && ` / ${event.capacity} capacity`}
                      </span>
                    </div>
                    {event.registrationDeadline && (
                      <div className="flex items-center text-gray-600">
                        <FileText className="w-5 h-5 mr-2 text-[#003366]" />
                        <span>
                          Registration deadline: {format(new Date(event.registrationDeadline), "PPP")}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center text-gray-600">
                      <UserCheck className="w-5 h-5 mr-2 text-[#003366]" />
                      <span>{event.speakers.length} speakers</span>
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-6 pt-6 border-t">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Objectives</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {event.objectives.map((objective, index) => (
                            <li key={index}>{objective}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Event Details</h3>
                        <div className="space-y-2 text-gray-600">
                          <p><strong>Speakers:</strong> {event.speakers.join(", ")}</p>
                          <p><strong>Moderators:</strong> {event.moderators.join(", ")}</p>
                          {event.materials && Object.keys(event.materials).length > 0 && (
                            <div>
                              <strong>Materials:</strong>
                              <div className="mt-2 space-y-2">
                                {Object.entries(event.materials).map(([name, url]) => (
                                  <Button
                                    key={name}
                                    variant="outline"
                                    size="sm"
                                    className="w-full"
                                    onClick={() => window.open(url, "_blank")}
                                  >
                                    <Download className="w-4 h-4 mr-2" />
                                    {name}
                                  </Button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex items-center justify-between">
                  <Button
                    onClick={() => setExpandedEvent(isExpanded ? null : event.id)}
                    variant="ghost"
                    className="text-[#003366]"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-2" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-2" />
                        Show More
                      </>
                    )}
                  </Button>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          <Button
                            onClick={() => handleRegister(event.id)}
                            disabled={isLoading === event.id || isRegistered || isRegistrationClosed || isFull}
                            className={`${
                              isRegistered 
                                ? "bg-green-600 hover:bg-green-700"
                                : "bg-[#003366] hover:bg-[#004488]"
                            }`}
                          >
                            {isLoading === event.id ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                Registering...
                              </>
                            ) : isRegistered ? (
                              "Already Registered"
                            ) : isRegistrationClosed ? (
                              "Registration Closed"
                            ) : isFull ? (
                              "Event Full"
                            ) : (
                              "Register Now"
                            )}
                          </Button>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        {isRegistered ? (
                          "You're already registered for this event"
                        ) : isRegistrationClosed ? (
                          "Registration deadline has passed"
                        ) : isFull ? (
                          "Event has reached maximum capacity"
                        ) : (
                          "Click to register for this event"
                        )}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
} 