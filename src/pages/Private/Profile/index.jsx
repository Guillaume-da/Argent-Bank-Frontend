import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import Welcome from '../../../components/Welcome'
import styled from 'styled-components'
import { GetUserAction } from '../../../store/actions/UserAction'
import PropTypes from 'prop-types'

const Profile = (props) => {
	const token = (useSelector(state => (state.connection.auth.body.token)) ? useSelector(state => (state.connection.auth.body.token)) : useSelector(state => (state.persistedConnection.auth.body.token)))
	const firstName = useSelector(state => state.user.user.body.firstName)
	const lastName = useSelector(state => state.user.user.body.lastName)
	const {access} = props
	useEffect(() => {
		access(token)
	}, [])

	return(
		<MainLabel>
			<Welcome firstNameValue={firstName} lastNameValue={lastName}/>
			<PageTitle>Accounts</PageTitle>
			<SectionLabel>
				<WrapperDivLabel>
					<TitleLabel>Argent Bank Checking (x8349)</TitleLabel>
					<AmountParagraph>$2,082.79</AmountParagraph>
					<DescriptionParagraph>Available Balance</DescriptionParagraph>
				</WrapperDivLabel>
				<ButtonWrapper>
					<ButtonLabel>View transactions</ButtonLabel>
				</ButtonWrapper>
			</SectionLabel>
			<SectionLabel>
				<WrapperDivLabel>
					<TitleLabel>Argent Bank Savings (x6712)</TitleLabel>
					<AmountParagraph>$10,928.42</AmountParagraph>
					<DescriptionParagraph>Available Balance</DescriptionParagraph>
				</WrapperDivLabel>
				<ButtonWrapper>
					<ButtonLabel>View transactions</ButtonLabel>
				</ButtonWrapper>
			</SectionLabel>
			<SectionLabel>
				<WrapperDivLabel>
					<TitleLabel>Argent Bank Credit Card (x8349)</TitleLabel>
					<AmountParagraph>$184.30</AmountParagraph>
					<DescriptionParagraph>Current Balance</DescriptionParagraph>
				</WrapperDivLabel>
				<ButtonWrapper>
					<ButtonLabel>View transactions</ButtonLabel>
				</ButtonWrapper>
			</SectionLabel>
		</MainLabel>
	)
}

Profile.propTypes = {
	access: PropTypes.func.isRequired,
}

const MainLabel = styled.main`
    flex: 1;
    background-color: #12002b;
    @media (max-width: 720px) {
        padding-bottom: 5rem;
      }
`
const SectionLabel = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    padding: 1.5rem;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 2rem;
    @media (min-width: 720px) {
        flex-direction: row;
      }
`
const WrapperDivLabel = styled.div`
    width: 100%;
    flex: 1;
`
const TitleLabel = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
`
const AmountParagraph = styled.p`
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
`
const DescriptionParagraph = styled.p`
    margin: 0;
`
const ButtonLabel = styled.button`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    @media (min-width: 720px) {
        width: 200px;
      }
`
const ButtonWrapper = styled.div`
    width: 100%;
    flex: 1;
    @media (min-width: 720px) {
        flex: 0;
      }
`
const PageTitle  = styled.h1`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */ 
`

const mapStateToProps = (state) => {
	return {
		user: state,
	}
}

const mapDispatchToProps = (dispatch) => {
	
	return {
		access: (token)=> {
			dispatch(GetUserAction(token))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)