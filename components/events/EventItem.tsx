import Link from 'next/link'
import React from 'react'
import classes from '../styles/EventItem.module.css'

export default function EventItem({title, image, date, location, id}: any) {

    const humanReadableDate = new Date(date).toLocaleDateString('ko-KR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const formattedAddress = location.replace(', ', '\n')
    const exploreLink = `/events/${id}`
  return (
    <li className={classes.item}>
        <img src={'/' + image } alt="" />
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>

                <div className={classes.date}>
                    <time className={classes.time}>{humanReadableDate}</time>
                </div>

                <div className={classes.address}>
                    <address className={classes.address}>{formattedAddress}</address>
                </div>
                <div className={classes.actions}>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>
        </div>
    </li>
  )
}
