/* eslint-disable react/prop-types */
import { React, useState} from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { ModifyUserAction } from '../../store/actions/UserAction'

const Welcome = (props) => {

	const {changeName} = props
	const firstName = props.firstNameValue
	const lastName = props.lastNameValue
	const token = useSelector(state => (state.connection.auth.body.token ? state.connection.auth.body.token : state.persistedConnection.auth.body.token))
	
	const [isClicked, setIsClicked] = useState(false)
	const[userState, setUserState] = useState({firstName, lastName})

	return (
		<DivLabel>
			{isClicked ? (
				<div>
					<h1>Welcome back</h1>
					<FormLabel 
						onSubmit={(event) => {
							event.preventDefault()
							changeName(userState, token)
							setIsClicked(!isClicked)
						}}>
						<InputLabel 
							type='text' 
							id='newFirstName' 
							name='newFirstName' 
							defaultValue={firstName} 
							placeholder={firstName} 
							onChange={ (event)=> {
								const firstName = event.target.value
								setUserState({ ...userState, ...{ firstName }})
							}} 
						>
						</InputLabel>
						<InputLabel 
							type='text' 
							id='newLastName' 
							name='newLastName' 
							defaultValue={lastName} 
							placeholder={lastName} 
							onChange={ (event)=> {
								const lastName = event.target.value
								setUserState({ ...userState, ...{ lastName }})
							}} 
						>	
						</InputLabel>
						<ButtonLabel type='submit'>Save</ButtonLabel>
						<ButtonLabel className="red" onClick={() => setIsClicked(!isClicked)}>Cancel</ButtonLabel>
					</FormLabel>
				</div>
			) : (
				<div>
					<h1>Welcome back<br />{firstName} {lastName}!</h1>
					<ButtonLabel onClick={() => setIsClicked(!isClicked)}>Edit Name</ButtonLabel>
				</div>
			)}
		</DivLabel>
	)
}
const FormLabel = styled.form`
	display: flex;
	justify-content: center;
	column-gap: 10px;
`

const DivLabel = styled.div`
    color: #fff;
    margin-bottom: 2rem;
`
const ButtonLabel = styled.button`
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    font-weight: bold;
    padding: 10px;
    width: 100px;
`
const InputLabel = styled.input`
    padding: 10px;
`
const mapStateToProps = (state) => {
	return {
		user: state,
	}
}

const mapDispatchToProps = (dispatch) => {
	
	return {
		changeName: (userState, token)=> {
			dispatch(ModifyUserAction(userState, token))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)