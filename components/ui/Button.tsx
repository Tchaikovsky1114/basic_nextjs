import React from 'react'
import classes from '../../styles/Button.module.css'
import Link from 'next/link'

interface Props {
    children: React.ReactNode
    link: string
}

export default function Button({children,link}:Props) {
  return (
    <Link className={classes.btn} href={link}>{children}</Link>
  )
}
