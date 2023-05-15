import { useRouter } from 'next/router'
import React from 'react'

export default function FilteredEventsPage() {
  const router = useRouter();
  const { slug } = router.query as {slug:string[]};

  console.log(slug);
  // export function getFilteredEvents(dateFilter: any) {
  //   const { year, month } = dateFilter;
  //   let filteredEvents = DUMMY_EVENTS.filter((event) => {
  //     const eventDate = new Date(event.date);
  //     return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  //   });
  //   return filteredEvents;
  // }

  return (
    <div>
         <h1>FilteredEventsPage</h1>
    </div>
  )
}
