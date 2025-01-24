"use client";

import { motion } from "framer-motion";

interface Event {
  title: string;
  date: string;
  location: string;
  points: number;
}

const upcomingEvents: Event[] = [
  {
    title: "Annual Gastroenterology Conference",
    date: "Mar 15-17, 2024",
    location: "Nairobi, Kenya",
    points: 20,
  },
  {
    title: "Endoscopy Workshop",
    date: "Apr 5, 2024",
    location: "Mombasa, Kenya",
    points: 10,
  },
  {
    title: "Research Symposium",
    date: "Apr 20, 2024",
    location: "Virtual",
    points: 8,
  },
];

export default function UpcomingEvents() {
  return (
    <section>
      <h2 className="text-xl font-display font-bold text-gray-900 mb-4">Upcoming Events</h2>
      <div className="bg-white rounded-xl shadow-sm divide-y">
        {upcomingEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={false}
            whileHover={{ backgroundColor: "rgb(249, 250, 251)", x: 2 }}
            className="p-4 transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900 group-hover:text-[#003366] transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <span>{event.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{event.location}</span>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded flex items-center gap-1"
              >
                <span>{event.points}</span>
                <span className="text-blue-600/80">CPD Points</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 