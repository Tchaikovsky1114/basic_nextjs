import React from 'react'
import classes from '../../styles/EventItem.module.css'
import Button from '../ui/Button'
import DateIcon from '@/public/icons/date-icon'
import AddressIcon from '@/public/icons/address-icon'
import ArrowRightIcon from '@/public/icons/arrow-right-icon'

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
                    <DateIcon />
                    <time className={classes.time}>{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon />
                    <address className={classes.address}>{formattedAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>
                    <span>Explore Event</span>
                    <span className={classes.icon}><ArrowRightIcon /></span>
                    </Button>
            </div>
        </div>
    </li>
  )
}
