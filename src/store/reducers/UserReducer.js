/* eslint-disable no-undef */
import { UserType } from '../type' 

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
	case UserType.GETUSER_SUCCESS:
		return {
			user: action.payload
		}
	case UserType.GETUSER_FAIL:
		return state
	case UserType.MODIFYUSER_SUCCESS:
		return {
			user: action.payload
		}
	default:
		return state
	}
}

export default UserReducer