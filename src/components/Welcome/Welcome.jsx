import { React, useState} from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { ModifyUserAction } from '../../store/actions/UserAction'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

/**
 * Allows to show welcom message with the firstname and lastname of user
 *
 * @param {object} props - contains firstname and lastname
 *
 * @return Div containing a form allowing to change firstname and lastname
 * 
 * @version 1.0
 * 
 */
const Welcome = (props) => {
	const {changeName} = props
	const firstName = props.firstNameValue
	const lastName = props.lastNameValue
	const token = useSelector(state => (state.connection.auth.body.token ? state.connection.auth.body.token : state.persistedConnection.auth.body.token))
	
	const [isClicked, setIsClicked] = useState(false)
	const[userState, setUserState] = useState({firstName, lastName})

	const handleNameChange = (event) => {
		if(event.target[0].value === '') {
			toast.error('Please enter your first name')
		}
		if(event.target[1].value === '') {
			toast.error('Please enter your lastname')
		}
	}

	return (
		<DivLabel>
			{isClicked ? (
				<div>
					<h1>Welcome back</h1>
					<FormLabel 
						onSubmit={(event) => {
							event.preventDefault()
							handleNameChange(event)
							if(event.target[0].value.length > 0 && event.target[1].value.length > 0){
								changeName(userState, token)
								toast.success('Name changed successfully')
								setIsClicked(!isClicked)
							}
						}}>
						<InputLabel 
							type='text' 
							id='newFirstName' 
							name='newFirstName' 
							placeholder='Write your first name here'
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
							placeholder='Write your lastname here'
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

Welcome.propTypes = {
	changeName: PropTypes.func.isRequired,
	firstNameValue: PropTypes.string.isRequired,
	lastNameValue: PropTypes.string.isRequired,
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