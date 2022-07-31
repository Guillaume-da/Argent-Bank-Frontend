import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers/Index.js'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initalState = {
	
}

const config = {
	key: 'root',
	storage,
	blacklist: ['connection'],
}

const persistedReducer = persistReducer(config,rootReducer)

const middleware = [thunk]

const store = createStore(persistedReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))
const Persistor = persistStore(store)
export {Persistor}
export default store