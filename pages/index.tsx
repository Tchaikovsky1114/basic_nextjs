import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { getFeaturedEvents } from '../data/dummy_data'
import EventList from '@/components/events/EventList'

const inter = Inter({ subsets: ['latin',] })

export default function Home() {

  const featuredEvents = getFeaturedEvents();

  return (
    
      <main className={`${styles.main} ${inter.className}`}>
        <h1>NextJs - Home Page</h1>
        <EventList items={featuredEvents} />
      </main>
    
  )
}
