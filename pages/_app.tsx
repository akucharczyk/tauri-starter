import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div  className="bg-yellow-400 h-screen"><Component {...pageProps} /></div>
}

export default MyApp
