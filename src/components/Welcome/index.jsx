/* eslint-disable react/prop-types */
import { React, useState} from 'react'
import { useDispatch/* , useSelector  */} from 'react-redux'
import { modifyUserName} from '../../features/userName/userNameSlice'
import styled from 'styled-components'

const Welcome = (props) => {
	const firstName = props.firstNameValue
	const lastName = props.lastNameValue

	const [isClicked, setIsClicked] = useState(false)
	
	// const token = useSelector((state) => state.auth.user.body.token)

	const dispatch = useDispatch()

	const onChange = (e) => {
		e.preventDefault()
		console.log('onChange',e)
		
	}

	const onSubmit = (e) => {
		e.preventDefault()
		
		const userData = {
			'firstName': e.target[0].value,
			'lastName': e.target[1].value,
		}
		console.log(userData)
		dispatch(modifyUserName(userData))
	}

	return (
		<DivLabel>
			{isClicked ? (
				<div>
					<h1>Welcome back</h1>
					<form onSubmit={onSubmit} >
						<InputLabel type='text' id='newFirstName' name='newFirstName' defaultValue={firstName} placeholder={firstName} onChange={onChange}></InputLabel>
						<InputLabel type='text' id='newLastName' name='newLastName' defaultValue={lastName} placeholder={lastName} onChange={onChange}></InputLabel>
						<ButtonLabel type='submit'>Save</ButtonLabel>
						<ButtonLabel className="red" onClick={() => setIsClicked(!isClicked)}>Cancel</ButtonLabel>
					</form>
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

export default Welcome