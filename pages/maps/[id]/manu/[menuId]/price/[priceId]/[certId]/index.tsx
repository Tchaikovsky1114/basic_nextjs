import { useRouter } from 'next/router'
import React from 'react'

export default function CertificationId() {
    const router = useRouter();
    const { certId } = router.query;
  return (
    <div>user Certification Number is: {certId}</div>
  )
}
