import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MobNavbar } from '../components/Navbars/MobNavbar'
import { MainNav } from '../components/Navbars/MainNav'
import {InfoContext} from "../components/MainPage"
import {InfoProvider} from "../components/MainPage"
function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Head>
  <title>Planets</title>
  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
  <InfoProvider>
    <MobNavbar/>
    <MainNav />
    <Component {...pageProps}  /> 
  </InfoProvider>
   </>
}
export default MyApp
