/* eslint-disable react/prop-types */
import { React, useState} from 'react'
import styled from 'styled-components'

const Welcome = (props) => {
	const firstName = props.firstNameValue
	const lastName = props.lastNameValue

	const [isClicked, setIsClicked] = useState(false)

	return (
		<DivLabel>
			{isClicked ? (
				<div>
					<h1>Welcome back</h1>
					<FormLabel>
						<InputLabel type='text' id='newFirstName' name='newFirstName' defaultValue={firstName} placeholder={firstName} ></InputLabel>
						<InputLabel type='text' id='newLastName' name='newLastName' defaultValue={lastName} placeholder={lastName} ></InputLabel>
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

export default Welcome