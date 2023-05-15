import { useRouter } from 'next/router'
import React from 'react'

export default function PriceIdPage() {
    const router = useRouter();
    const { priceId } = router.query;
  return (
    <div>Price Is : {priceId}</div>
  )
}
