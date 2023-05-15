import { getAllEvents } from '@/data/dummy_data'
import EventList from '@/components/events/EventList';
import EventsSearch from '@/components/events/EventsSearch';
import React from 'react'
import { useRouter } from 'next/router';

export default function EventsPage() {
  const router = useRouter();
  const events = getAllEvents();
  const onSearch = (year:string,month:string) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <div>
    <EventsSearch onSearch={onSearch} />
    <EventList items={events} />
    </div>
  )
}
