import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userNameService from './userNameService'

const initialState = {
	userName: '',
	userNameIsError: false,
	userNameIsSuccess: false,
	userNameIsLoading: false,
	userNameMessage: '',
}

// Get user name
export const getUserName = createAsyncThunk(
	'userName',
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.body.token
			return await userNameService.getUserName(token)
		} catch (error) {
			const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Modify user name
export const modifyUserName = createAsyncThunk(
	'userName',
	async (datas, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.body.token
			
			return await userNameService.modifyUserName(token, datas)
		} catch (error) {
			const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const userNameSlice = createSlice({
	name: 'userName',
	initialState,
	reducers: {
		// eslint-disable-next-line no-unused-vars
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUserName.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getUserName.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.userName = action.payload
			})
			.addCase(getUserName.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
	},
})

export const {reset} = userNameSlice.actions
export default userNameSlice.reducer