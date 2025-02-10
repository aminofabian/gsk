import { notFound } from "next/navigation";
import { Metadata } from "next";
import { db } from "@/lib/db";
import { format } from "date-fns";

interface EventPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const event = await db.event.findUnique({
    where: { slug: params.slug },
  });

  if (!event) {
    return {
      title: "Event Not Found | GSK",
    };
  }

  return {
    title: `${event.title} | GSK Events`,
    description: event.description,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  console.log("[EVENT_PAGE] Attempting to fetch event with slug:", params.slug);
  
  try {
    // First, let's check if we can find any events
    const allEvents = await db.event.findMany({
      select: { id: true, title: true, slug: true }
    });
    console.log("[EVENT_PAGE] All available events:", allEvents);

    const event = await db.event.findUnique({
      where: { 
        slug: params.slug,
      },
      include: {
        attendees: true,
        organizers: true,
      },
    });

    console.log("[EVENT_PAGE] Database query result:", event);

    if (!event) {
      console.log(`[EVENT_PAGE] Event not found with slug: ${params.slug}`);
      console.log("[EVENT_PAGE] Available slugs:", allEvents.map(e => e.slug).join(", "));
      notFound();
    }

    // Add a banner for past events
    const isPastEvent = new Date(event.endDate) < new Date();

    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {isPastEvent && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-yellow-700">
                This event has already taken place.
              </p>
            </div>
          )}
          <h1 className="text-4xl font-bold text-[#003366] mb-4">{event.title}</h1>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Date & Time</h3>
                <p className="text-gray-600">
                  {format(event.startDate, "PPP")} - {format(event.endDate, "PPP")}
                </p>
                <p className="text-gray-600">
                  {format(event.startDate, "p")} - {format(event.endDate, "p")}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Venue</h3>
                <p className="text-gray-600">{event.venue}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">Description</h3>
              <p className="text-gray-600 whitespace-pre-wrap">{event.description}</p>
            </div>

            {event.objectives.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2">Learning Objectives</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {event.objectives.map((objective: string, index: number) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {event.speakers.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Speakers</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {event.speakers.map((speaker: string, index: number) => (
                      <li key={index}>{speaker}</li>
                    ))}
                  </ul>
                </div>
              )}

              {event.moderators.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Moderators</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {event.moderators.map((moderator: string, index: number) => (
                      <li key={index}>{moderator}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-700">CPD Points</h3>
                  <p className="text-gray-600">{event.cpdPoints} points</p>
                </div>
                <div className="text-right">
                  <h3 className="font-semibold text-gray-700">Registration Fee</h3>
                  <p className="text-gray-600">
                    Members: KES {event.memberPrice?.toLocaleString() ?? "Free"}
                    <br />
                    Non-Members: KES {event.nonMemberPrice?.toLocaleString() ?? "Free"}
                  </p>
                </div>
              </div>

              {event.registrationDeadline && (
                <p className="text-sm text-gray-500">
                  Registration deadline: {format(event.registrationDeadline, "PPP")}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("[EVENT_PAGE] Error fetching event:", error);
    notFound();
  }
} 