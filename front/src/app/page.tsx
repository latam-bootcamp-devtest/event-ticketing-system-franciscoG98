import EventCard from "@/components/EventCard";
import EventsData from "@/utils/mockData";

export default function Home() {  
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center my-8">Upcoming Events</h1>
      <main className="flex flex-wrap gap-8 items-center">
        {
          EventsData?.map(event => (
            <EventCard
              key={event.eventId}
              id={event.eventId}
              name={event.eventName}
              date={event.eventDate}
              availableTickets={event.availableTickets}
              price={event.ticketPrice}
              image={event.eventImage}
            />
          ))
        }
      </main>
    </div>
  );
}
