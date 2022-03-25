import Link from "next/link";
import styled from "styled-components";
import data, { darkTheme, mediaQueries } from "data";

const Logo = styled.h1`
  display: inline-block;
  color: ${({color}) => color === "dark" ? darkTheme.text : darkTheme.body};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  cursor: pointer;

  ${mediaQueries(40)`
    font-size:1.5em;
    left:1rem;
    top:2rem;
  `};
`;

export default function LogoComponent({ theme }) {
  return (
    <Link href="/" passHref>
      <Logo color={theme}>{data.homeLogoName}</Logo>
    </Link>
  );
};
