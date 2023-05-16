import EventList from '@/components/events/EventList';
import ResultsTitle from '@/components/events/ResultsTitle';
import { getFilteredEvents } from '@/data/dummy_data';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function FilteredEventsPage() {
  const router = useRouter();
  const { slug } = router.query as {slug:string[]};
  const [events, setEvents] = useState<any>([]);

  useEffect(() => {
    if (slug) {
      const [year, month] = slug;
      const filteredEvents = getFilteredEvents({year, month})
      setEvents(filteredEvents);
    }
  }, [slug])
  console.log(events);
  return (
    <>
      <ResultsTitle date={new Date(parseInt(slug[0]),parseInt(slug[1]))} />
      <EventList items={events} />
    </>
  )
}
