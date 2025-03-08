'use client'

import EventsData from "@/utils/mockData";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const EventIdPage = () => {

  const pathname = usePathname()

  const eventID = pathname.slice(7)

  const event = EventsData.filter(e => e.eventId === parseInt(eventID))

  return (
    <div className="flex justify-center gap-12 items-center min-h-screen">
      <Link className="absolute top-6 left-6 text-2xl font-semibold hover:underline" href="/">Back to Events</Link>

      <div className="size-[360px] rounded-xl bg-gray-400 text-black text-center">image</div>
      <section className="flex flex-col gap-2">
        <h1 className="font-bold text-center text-4xl">{event[0].eventName}</h1>

        <span className="text-lg">{event[0].eventDate}</span>
        <span className="text-lg">Available Tickets: {event[0].availableTickets}</span>
        <span className="text-xl font-semibold">${event[0].ticketPrice}</span>

        <p>{event[0].eventDescription}</p>

        <Link href={`/book/${event[0].eventId}`} className="flex w-fit mx-auto rounded-xl px-4 py-2 bg-green-600">
          Book Tiket
        </Link>
      </section>
    </div>
  )
}

export default EventIdPage