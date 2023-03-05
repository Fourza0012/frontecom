import NormalBody from '@/components/Body'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NormalHeader from '../components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NormalHeader />
      <NormalBody>
        <Component {...pageProps} />
      </NormalBody>
    </>
  )
}
