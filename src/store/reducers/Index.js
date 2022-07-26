import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import AuthReducerWithRemember from './AuthReducerWithRemember'
import AuthErrorReducer from './AuthErrorReducer'
import UserReducer from './UserReducer'
import UserErrorReducer from './UserErrorReducer'

export const appReducer = combineReducers({
	connection: AuthReducer,
	persistedConnection: AuthReducerWithRemember,
	authError: AuthErrorReducer,
	userError: UserErrorReducer,
	user: UserReducer,
})

const rootReducer = (state, action) => {
	if (action.type === 'USER_LOGOUT') {
		return appReducer(undefined, action)
	}
	
	return appReducer(state, action)
}

export default rootReducer