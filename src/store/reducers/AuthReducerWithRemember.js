/* eslint-disable no-undef */
import { AuthWithRememberActionType } from '../type' 

const authStateWithRemember = {
	isLoggedIn: false,
	auth: {
		'status': null,
		'message': '',
		'body': {
			'token': ''
		}
	},
}

const AuthReducerWithRemember = (state = authStateWithRemember, action) => {

	switch (action.type) {
	case AuthWithRememberActionType.LOGINWITHREMEMBER_SUCCESS:
		return {
			isLoggedIn: true,
			auth: action.payload,
		}
	
	default:
		return state
	}
}

export default AuthReducerWithRemember