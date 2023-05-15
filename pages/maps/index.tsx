import Link from 'next/link'
import React from 'react'

export default function index() {
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
