import '../assets/css/global.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css'

const Route = ({ children }) => {
  const isLogin = true
  const router = useRouter()

  useEffect(() => {
    if (!isLogin) {
      router.push('/')
    }
  }, [])

  return (
    <div>
      <div>{children}</div>
    </div>
  )
}

export default function MyApp({ Component, pageProps }) {
  return (
    <Route>
      <Component {...pageProps} />
    </Route>
  )
}
