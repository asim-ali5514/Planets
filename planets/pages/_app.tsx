import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MobNavbar } from '../components/Navbars/MobNavbar'
function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Head>
  <title>Planets</title>
  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
  <MobNavbar/>
   <Component {...pageProps}  /> 
   </>
}
export default MyApp
