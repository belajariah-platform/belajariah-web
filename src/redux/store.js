import thunk from 'redux-thunk'
import localStorage from 'redux-persist/lib/storage'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage: localStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))

const persistor = persistStore(store)

export { store, persistor }
