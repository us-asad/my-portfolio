import styled from "styled-components";
import data from "data";

const { themes: { darkTheme } } = data;

const Logo = styled.h1`
	display: inline-block;
	color: ${({clicked}) => clicked ? darkTheme.text : darkTheme.body};
	font-family: "Pacifico", cursive;
	position: fixed;
	left: 2rem;
	top: 2rem;
	z-index: 3;
`;

export default function LogoComponent({ clicked }) {
	return (
		<Logo clicked={clicked}>
			UA
		</Logo>
	);
}