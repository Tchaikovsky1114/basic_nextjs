import { useRouter } from 'next/router'
import React from 'react'

export default function Users() {
    const router = useRouter();
    const { id } = router.query as { id: string | undefined };

    
    const loadUserHandler = (username: string = '') => {
      
      // router.replace(`/maps/${id}`)
      router.push({
        pathname:`/maps/${username}/manu`,
        query: {username}
      })
    }

  return (
    <div>
      Users: {id}
      <button onClick={() => loadUserHandler(id)}>{id}</button>
      </div>
  )
}
