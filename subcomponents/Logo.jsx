import { useState, useEffect } from "react";
import Link from "next/link";
import { getLogoName } from "services";
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
  const [logoName, setLogoName] = useState("");

  useEffect(() => {
    getLogoName()
      .then(res => setLogoName(res))
      .catch(err => console.error("Fetch Logo Name Error: ",err));
  }, []);

  return (
    <Link href="/" passHref>
      <Logo color={theme}>{logoName}</Logo>
    </Link>
  );
};
