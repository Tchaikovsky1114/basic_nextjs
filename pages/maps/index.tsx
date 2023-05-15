import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

interface IClient {
  id: string;
  user: string;
}

export default function Maps() {
  const router = useRouter();
  const clients = [
    {id: '1', user: 'max'},
    {id: '2', user: 'emerson'},
    {id: '3', user: 'ethan'},
    {id: '4', user: 'natalie'},
  ]
 
  return (
    <div>
    <h1>maps page</h1>
    <ul>
      {
        clients.map((client) => (
          <li key={client.id}>
            <Link href={{
              pathname: "/maps/[id]",
              query: { id: client.user },
              
            }}>{client.user}</Link>
          </li>
        ))
      }
      
    </ul>
    </div>
  )
}
