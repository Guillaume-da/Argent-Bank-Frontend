import { AuthActionType } from '../actions/AuthAction'

const authError = {
	message: '',
}

const UserErrorReducer = (state = authError, action) => {
	switch (action.type) {
	case AuthActionType.REGISTER_FAIL:
		return { message: action.payload }
	case AuthActionType.LOGOUT_FAIL:
		return { message: action.payload }
	case AuthActionType.LOGIN_FAIL:
		return { message: action.payload }
	default:
		return state
	}
}

export default UserErrorReducer