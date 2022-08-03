import React from 'react'
import styled from 'styled-components'
import backgroundImg from '../../assets/bank-tree.jpeg'

const Hero = () => {
	return (
		<DivLabel>
			<SectionLabel>
				<TitleLabel>Promoted Content</TitleLabel>
				<Text>No fees.</Text>
				<Text>No minimum deposit.</Text>
				<Text>High interest rates.</Text>
				<FinalText>Open a savings account with Argent Bank today!</FinalText>
			</SectionLabel>
		</DivLabel>
	)
}

const DivLabel = styled.div`
    background-image: url(${backgroundImg});
    background-position: 0 -50px;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    position: relative;
    @media (min-width: 920px) {
        height: 400px;
        background-position: 0% 33%;
    }
`
const SectionLabel = styled.section`
    position: relative;
    top: 2rem;
    width: 200px;
    background: white;
    padding: 2rem;
    text-align: left;
    margin: 0 auto;
    @media (min-width: 920px) {
        position: absolute;
        top: 50px;
        right: 50px;
        width: 300px;
        margin: 2rem;
    }    
`
const TitleLabel = styled.h2`
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
const Text = styled.p`
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
    @media (min-width: 920px) {
        font-size: 1.5rem;
    }   
`
const FinalText = styled.p`
    margin-bottom: 0;
    font-size: 0.9rem;
    margin-top: 20px;
    @media (min-width: 920px) {
        font-size: 1.2rem;
    } 
`

export default Hero