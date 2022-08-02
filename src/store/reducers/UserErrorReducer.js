import { UserActionType } from '../type'

const authError = {
	message: '',
}

const UserErrorReducer = (state = authError, action) => {
	switch (action.type) {
	case UserActionType.GETUSER_FAIL:
		return { message: action.payload }
	case UserActionType.MODIFYUSER_FAIL:
		return { message: action.payload }
	default:
		return state
	}
}

export default UserErrorReducer