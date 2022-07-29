/* eslint-disable no-undef */
import { GetUserType } from '../type' 

const userState = {
	user: {
		'status': null,
		'message': '',
		'body': {
			'email': '',
			'firstName': '',
			'lastName': '',
			'createdAt': '',
			'updatedAt': '',
			'id': ''
		}
	}
}

const UserReducer = (state = userState, action) => {

	switch (action.type) {
	case GetUserType.GETUSER_SUCCESS:
		return {
			user: action.payload
		}
	case GetUserType.GETUSER_FAIL:
		return state
	default:
		return state
	}
}

export default UserReducer