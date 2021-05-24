import '../assets/css/global.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import { store, persistor } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'

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
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Route>
          <Component {...pageProps} />
        </Route>
      </PersistGate>
    </Provider>
  )
}
