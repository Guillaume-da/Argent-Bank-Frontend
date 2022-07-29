import { combineReducers } from 'redux'
import UserReducer from './UserReducer'
import UserErrorReducer from './UserErrorReducer'

export const appReducer = combineReducers({
	currentUser: UserReducer,
	error: UserErrorReducer
})

const rootReducer = (state, action) => {
	if (action.type === 'USER_LOGOUT') {
		return appReducer(undefined, action)
	}
	
	return appReducer(state, action)
}

export default rootReducer