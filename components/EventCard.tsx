import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  title: string;
  slug?: string;
  date: string; // ISO date
  location?: string;
  description?: string;
  url?: string;
  image: string; // public image path (starts with /images)
  tags?: string[];
}

const EventCard = ({id, title, image, slug, date, location, description, url, tags}: Props) => {
  return (
    <Link href={`/events/${slug}`} id="event-card">
        <Image src={image} alt={title} width={300} height={300} className="poster" />

        <div className="flex flex-row gap-2">
            <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
            <p className="location">{location}</p>
        </div>
        <p className="title">{title}</p>
        <div className="datetime">
            <div>
                <Image src="/icons/calendar.svg" alt="date" width={14} height={14} />
                <p>{date}</p>
            </div>
        </div>
    </Link>
  )
}

export default EventCard