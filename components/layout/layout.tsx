import React from 'react'
import MainHeader from '../ui/MainHeader';

interface Props {
    children: React.ReactNode;
}

export default function Layout({children}:Props) {
  return (
    <>
    <MainHeader />
    <main>
        {children}
    </main>
    </>
  )
}
