import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import NextNProgress from 'nextjs-progressbar'


function MyApp({ Component, pageProps }: AppProps) {
  return <div className='app'>
    <NextNProgress
  color="tomato"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={true}
/>
  <Component {...pageProps} />
  </div>
}

export default MyApp
