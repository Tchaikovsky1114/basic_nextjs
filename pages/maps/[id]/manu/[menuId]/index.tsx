import { useRouter } from 'next/router';
import React from 'react'

export default function UserMenu() {
    const router = useRouter();
    const { menuId } = router.query;
  return (
    <div>menuId: {menuId}</div>
  )
}
