import { useRouter } from 'next/router';
import React from 'react'

export default function DataId() {
    const router = useRouter();
    const { dateId } = router.query as { dateId: string[] };
    console.log(dateId)
  return (
    <div>{dateId && dateId.map((item) => <h1 key={item}>{item}</h1>)}</div>
  )
}
