import React from 'react'
import styled from 'styled-components'

const Footer = () => {
	return (
		<FooterLabel>
			<ParagraphLabel>Copyright 2020 Argent Bank</ParagraphLabel>
		</FooterLabel>
	)  
}

const FooterLabel = styled.footer`
    display: flex;
    justify-content: center;
    border-top: 2px solid #ccc;
    padding: 2rem 0 1.5rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    position: fixed;
`
const ParagraphLabel = styled.p`
    margin: 0;
    padding: 0;
`

export default Footer