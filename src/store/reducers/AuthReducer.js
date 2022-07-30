/* eslint-disable no-undef */
import { AuthActionType } from '../type' 

const authState = {
	isLoggedIn: false,
	auth: {
		'status': null,
		'message': '',
		'body': {
			'token': ''
		}
	}
}

const AuthReducer = (state = authState, action) => {

	switch (action.type) {
	case AuthActionType.LOGIN_SUCCESS:
		return {
			isLoggedIn: true,
			auth: action.payload
		}
	case AuthActionType.LOGIN_FAIL:
		return state
	case AuthActionType.USER_LOGOUT:
		return authState
	default:
		return state
	}
}

export default AuthReducer