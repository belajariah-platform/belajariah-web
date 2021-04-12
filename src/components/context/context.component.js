// import { Provider } from 'react-redux'
import { PropTypes } from 'prop-types'
// import { PersistGate } from 'redux-persist/integration/react'

// import { store, persistor } from '../../redux/store'

const Contexts = () => {
  return (
    <div>
      <h1>hello</h1>
    </div>
    // <Provider store={store}>
    //   <PersistGate persistor={persistor}>{children}</PersistGate>
    // </Provider>
  )
}

Contexts.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Contexts
