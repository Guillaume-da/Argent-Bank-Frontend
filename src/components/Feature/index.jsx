import React from 'react'
import chatIcon from '../../assets/icon-chat.png'
import moneyIcon from '../../assets/icon-money.png'
import securityIcon from '../../assets/icon-security.png'
import styled from 'styled-components'

const Feature = (idValue) => {
	if(idValue.idValue === 'Contact') {
		return (
			<DivLabel>
				<ImgLabel
					src={chatIcon}
					alt="Chat Icon"
					className="feature-icon"
				/>
				<TitleLabel>You are our #1 priority</TitleLabel>
				<ParagraphLabel>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</ParagraphLabel>
			</DivLabel>
		)
	} else if(idValue.idValue === 'Money') {
		return (
			<DivLabel>
				<ImgLabel
					src={moneyIcon}
					alt="Chat Icon"
					className="feature-icon"
				/>
				<TitleLabel>More savings means higher rates</TitleLabel>
				<ParagraphLabel>The more you save with us, the higher your interest rate will be!</ParagraphLabel>
			</DivLabel>
		)
	} else if(idValue.idValue === 'Security') {
		return (
			<DivLabel>
				<ImgLabel
					src={securityIcon}
					alt="Chat Icon"
					className="feature-icon"
				/>
				<TitleLabel>Security you can trust</TitleLabel>
				<ParagraphLabel>We use top of the line encryption to make sure your data and money is always safe.</ParagraphLabel>
			</DivLabel>
		)
	}
}

const DivLabel = styled.div`
    flex: 1;
    padding: 2.5rem;
    text-align: center;
`
const ImgLabel = styled.img`
    width: 100px;
    height: 100px;
    border: 10px solid #00bc77;
    border-radius: 50%;
    padding: 1rem;
`
const TitleLabel = styled.h3`
    color: #222;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    margin-top: 1.2rem;
`
const ParagraphLabel = styled.p`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`

export default Feature