import { useRouter } from 'next/router';
import React from 'react'

export default function Menu() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>just Menu page {id}</div>
  )
}
