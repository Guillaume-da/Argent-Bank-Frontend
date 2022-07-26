import axios from 'axios'

const API_URL = 'http://localhost:3001/api/v1/user/profile'

// Get user name
const getUserName = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const data = {}

	const response = await axios.post(API_URL, data, config)
	return response.data
}

// Modify user name
const modifyUserName = async (token, userData) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	const response = await axios.put(API_URL, userData, config)
	return response.data
}

const userNameService = {
	getUserName,
	modifyUserName
}

export default userNameService