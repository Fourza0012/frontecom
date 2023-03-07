import NormalBody from '@/components/Body'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NormalHeader from '../components/Header'
import { Provider } from 'react-redux'
import { store } from '@/apps/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NormalHeader />
      <NormalBody>
        <Component {...pageProps} />
      </NormalBody>
    </Provider>
  )
}
