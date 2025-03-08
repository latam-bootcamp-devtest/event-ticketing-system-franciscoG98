'use client'

import EventsData from "@/utils/mockData";
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from "react";

const BookEventPage = () => {

  const initialState = {
    eventId: '',
    customerName: '',
    ticketQuantity: 0,
    // bookedTicket??
    totalPrice: 0
  }

  const [bookedTicket, setBookedTicket] = useState(initialState)

  const pathname = usePathname()
  const eventID = pathname.slice(6)
  const event = EventsData.filter(e => e.eventId === parseInt(eventID))

  // @fix: pending
  // disable quantity + when mqax
  // POST /tickets
  // success or failure message based on the API response.

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target

    // @fix:  I got somthing going on here, handleChange not working
    // setBookedTicket(...prev, e.target.name: e.target.value)
    // setBookedTicket(...bookedTicket, name: value)

  }

  return (
    <div className="flex flex-col w-96 mx-auto mt-24 p-12 rounded-xl border 4order-gray-600 justify-center gap-12 items-center">
      <Link className="absolute top-6 left-6 text-2xl font-semibold hover:underline" href={`/event/${eventID}`}>Back to Event</Link>

      <h1 className="font-bold text-center text-4xl">You are boooking for {event[0].eventName}</h1>


      <form action="" className="flex flex-col gap-2 justify-center">
        <span className="text-lg">Available Tickets: {event[0].availableTickets}</span>

        <fieldset className="flex items-center gap-4">
          <label>Name</label>
          <input
            name="customerName"
            type="text"
            className="bg-slate-200 text-black p-2 rounded-lg text-center"
            value={bookedTicket.customerName}
            onChange={(e) => handleChange(e)}
          />
        </fieldset>

        <fieldset className="flex items-center gap-4">
          <label>Tickets to Book</label>
          <input
            name="ticketQuantity"
            type="number"
            className="bg-slate-200 text-black p-2 rounded-lg text-center"
            value={bookedTicket.ticketQuantity}
            onChange={(e) => handleChange(e)}
            min={0}
            max={event[0].availableTickets}
          />
        </fieldset>

        <span>Total price: {bookedTicket.ticketQuantity * event[0].ticketPrice}</span>

        <button onClick={() => alert('pending handle submit')} className="flex w-fit mx-auto rounded-xl px-4 py-2 bg-green-600">
          Buy
        </button>
      </form>

    </div>
  )
}

export default BookEventPage