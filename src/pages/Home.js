import { React } from 'react'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import styled from 'styled-components'

const Home = () => {
	return (
		<MainLabel>
			<Hero />
			<SectionLabel>
				<TitleLabel>Features</TitleLabel>
				<Feature idValue="Contact"></Feature>
				<Feature idValue="Money"></Feature>
				<Feature idValue="Security"></Feature>
			</SectionLabel>
		</MainLabel>
	)
}

const MainLabel = styled.main`
    flex: 1;
    @media (max-width: 720px) {
        padding-bottom: 5rem;
      }
`
const SectionLabel = styled.section`
    display: flex;
    flex-direction: column;
    @media (min-width: 920px) {
        flex-direction: row;
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

export default Home