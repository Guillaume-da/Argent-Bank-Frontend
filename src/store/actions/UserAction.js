import axios from 'axios'
import { UserActionType } from '../type'
import 'react-toastify/dist/ReactToastify.css'

/**
 * Allows to fetch user datas from API (firstname and lastname) and dispatch them
 *
 * @param {string} token - The token is received when loging and stocked in the store
 *
 * @version 1.0
 * 
 */
const GetUserAction = (token) => {
	return async (dispatch) => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
		const data = {}
		try {
			const response = await axios.post('http://localhost:3001/api/v1/user/profile', data, config)
			const datas  = response.data
			dispatch({type: UserActionType.GETUSER_SUCCESS, payload: datas })
			
		} catch (error) {
			if (error.response) {
				const { datas } = error.response
				dispatch({
					type: UserActionType.GETUSER_FAIL,
					payload: datas.data.message,
				})
			}
		}
	}
}

/**
 * Allows to modify user datas (firstname and lastname) and dispatch the response server datas
 *
 * @param {object} userState - datas coming form form inputs
 * @param {string} token - The token is received when loging and stocked in the store
 *
 * @author Guillaume
 * @version 1.0
 * 
 */
const ModifyUserAction = (userState, token) => {
	return async (dispatch) => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
		try {
			const response = await axios.put('http://localhost:3001/api/v1/user/profile', userState, config)
			const datas  = response.data
			dispatch({type: UserActionType.MODIFYUSER_SUCCESS, payload: datas })
			
		} catch (error) {
			if (error.response) {
				const { datas } = error.response
				console.log(datas)
			}
		}
	}
}

export { GetUserAction, ModifyUserAction }