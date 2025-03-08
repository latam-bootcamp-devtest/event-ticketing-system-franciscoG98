import Image from 'next/image'
import Link from "next/link"

const EventCard = ({ id, name, date, availableTickets, price, image }) => {
  return (
    <div className="flex flex-col max-w-[250px] h-[520px] border border-gray-600 rounded-xl p-4 justify-around">
      <Image
        src={image}
        alt={name}
        height={220}
        width={220}
        className="rounded-xl bg-gray-400 text-black text-center"
      />
      <h3 className='text-xl text-center m-2 font-bold'>{name}</h3>

      <div className="flex flex-col my-4 gap-4">
        <span className="font-semibold">Date: {date}</span>
        <span className="font-semibold">Available Tickets: {availableTickets}</span>
        <span className="font-semibold">${price}</span>
      </div>

      <Link href={`/event/${id}`} className="flex w-fit mx-auto rounded-xl px-4 py-2 bg-green-600">
        More Details
      </Link>
    </div>
  )
}

export default EventCard