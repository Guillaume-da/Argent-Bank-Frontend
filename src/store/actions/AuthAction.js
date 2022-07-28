import axios from 'axios'
import AuthActionType from '../type'

const LoginAuthAction = (userState) => {
	return async (dispatch) => {
		try {
			const response = await axios.post('http://localhost:3001/api/v1/user/login', userState)
			const { data } = response
			dispatch({type: AuthActionType.LOGIN_SUCCESS, payload: data })
		} catch (error) {
			console.log(error)
			dispatch({type: AuthActionType.LOGIN_FAIL, payload: {} })
		}
	}
}

export { LoginAuthAction, AuthActionType}