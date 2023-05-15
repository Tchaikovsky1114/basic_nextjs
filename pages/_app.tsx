import Layout from '@/components/layout/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: any) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}
