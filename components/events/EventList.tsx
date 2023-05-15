import React from 'react'
import EventItem from './EventItem'
import classes from '../../styles/EventList.module.css'
export default function EventList({items}:{items:any}) {
  return (
    <ul className={classes.list}>
      {
    items.map((event:any) =>
    <EventItem
      key={event.id}
      id={event.id}
      title={event.title}
      image={event.image} 
      date={event.date}
      location={event.location}
    />
    )}
    </ul>
  )
}
 