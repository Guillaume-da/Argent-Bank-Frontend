/* eslint-disable no-undef */
import AuthActionType from '../type' 

const userState = {
	isLoggedIn: false,
	user: {
		'status': null,
		'message': '',
		'body': {
			'token': ''
		}
	}
}

const userReducer = (state = userState, action) => {

	switch (action.type) {
	case AuthActionType.LOGIN_SUCCESS:
		return {
			isLoggedIn: true,
			user: action.payload
		}
	case AuthActionType.LOGIN_FAIL:
		return state
	case AuthActionType.USER_LOGOUT:
		return {
			isLoggedIn: false,
			user: {
				'status': null,
				'message': '',
				'body': {
					'token': ''
				}
			}
		}
	default:
		return state
	}

	

}

export default userReducer