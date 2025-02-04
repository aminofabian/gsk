"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

interface Event {
  id: string;
  title: string;
  description: string;
  type: "CONFERENCE" | "WORKSHOP";
  startDate: string;
  endDate: string;
  venue: string;
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

      // Refresh the events list
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
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="space-y-6">
      {events.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No upcoming events at the moment.</p>
        </div>
      ) : (
        events.map((event) => {
          const isRegistered = event.attendees.some(
            (attendee) => attendee.id === session?.user?.id
          );

          return (
            <div
              key={event.id}
              className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-[#003366] mb-2">
                      {event.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    event.type === "CONFERENCE" 
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}>
                    {event.type}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <CalendarDays className="w-5 h-5 mr-2" />
                    <span>
                      {format(new Date(event.startDate), "PPP")} - {format(new Date(event.endDate), "PPP")}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{event.attendees.length} attendees</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    onClick={() => handleRegister(event.id)}
                    disabled={isLoading === event.id || isRegistered}
                    className={`w-full sm:w-auto ${
                      isRegistered 
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-[#003366] hover:bg-[#004488]"
                    }`}
                  >
                    {isLoading === event.id
                      ? "Registering..."
                      : isRegistered
                      ? "Already Registered"
                      : "Register Now"}
                  </Button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
} 