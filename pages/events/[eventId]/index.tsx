import { getEventById } from '@/data/dummy_data';
import { useRouter } from 'next/router'
import React from 'react'
import EventSummary from '@/components/events/EventDetail/EventSummary'
import EventLogistics from '@/components/events/EventDetail/EventLogistics'
import EventContent from '@/components/events/EventDetail/EventContent';

export default function EventDetailPage() {
  const router = useRouter();
  const { eventId } = router.query;
  // find event by id
  const event = getEventById(eventId);
  
  if (!event) {
    return <p>No event found!</p>
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      
    </>
  )
}
