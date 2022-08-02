/* eslint-disable no-undef */
import { UserActionType } from '../type' 

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
	case UserActionType.GETUSER_SUCCESS:
		return {
			user: action.payload
		}
	case UserActionType.GETUSER_FAIL:
		return state
	case UserActionType.MODIFYUSER_SUCCESS:
		return {
			user: action.payload
		}
	default:
		return state
	}
}

export default UserReducer