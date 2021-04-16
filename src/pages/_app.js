import { useRouter } from 'next/router'
import '../assets/css/global.css'

export default function MyApp({ Component, pageProps }) {
  // const router = useRouter()
  // const path = router.asPath
  // const isDashboard = path.includes('/dashboard')

  // const Content = () => {
  //   console.log('ok', path, isDashboard)
  //   if (isDashboard) {
  //     return (
  //       <Component {...pageProps} />
  //     )
  //   } else {
  //     router.push('/')
  //     return (
  //       <div>test</div>
  //     )
       return (
         <Component {...pageProps} />
       )
    }
//   }
//   return <div><Content/></div>
// }