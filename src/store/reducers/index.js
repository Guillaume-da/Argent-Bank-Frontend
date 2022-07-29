import { combineReducers } from 'redux'
import userReducer from './userReducer'

export const appReducer = combineReducers({
	currentUser: userReducer
})

const rootReducer = (state, action) => {
	if (action.type === 'USER_LOGOUT') {
		return appReducer(undefined, action)
	}
	
	return appReducer(state, action)
}

export default rootReducer