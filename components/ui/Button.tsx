import React from 'react'
import classes from '../../styles/Button.module.css'
import Link from 'next/link'

interface Props {
    children: React.ReactNode
    link?: string
    onClick?: () => void
}

export default function Button({children,link,onClick}:Props) {


  if(link) {
    return (
      <Link className={classes.btn} href={link}>{children}</Link>
    )
  }

  return <button className={classes.btn} onClick={onClick}>{children}</button>
  
}
