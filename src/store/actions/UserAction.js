/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import axios from 'axios'
import { UserType } from '../type'
import 'react-toastify/dist/ReactToastify.css'

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
			dispatch({type: UserType.GETUSER_SUCCESS, payload: datas })
			
		} catch (error) {
			if (error.response) {
				const { datas } = error.response
				dispatch({
					type: UserType.GETUSER_FAIL,
					payload: datas.data.message,
				})
			}
		}
	}
}

const ModifyUserAction = (userState, token) => {
	return async (dispatch) => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
		// const data = {}
		try {
			const response = await axios.put('http://localhost:3001/api/v1/user/profile', userState, config)
			const datas  = response.data
			dispatch({type: UserType.MODIFYUSER_SUCCESS, payload: datas })
			
		} catch (error) {
			if (error.response) {
				const { datas } = error.response
				console.log(datas)
			}
		}
	}
}

export { GetUserAction, ModifyUserAction }