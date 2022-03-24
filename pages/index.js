import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Logo, SocialIcons, Intro, PowerButton } from "components";
import { YinYang } from "components/AllSvg.jsx";

const motionHoverConfig = {
  whileHover: {scale: 1.1},
  whileTap: {scale: 0.9}
}

const MainContainer = styled.div`
  background: ${props => props.theme.body}
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,h3,h4,h5,h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  z-index: 1;
`;

const Blog = styled.h2`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;
  cursor: pointer;
  transition: transform .1s;

  &:hover {
    transform: rotate(90deg) translate(-50%, -50%) scale(1.1);
  }

  &:active {
    transform: rotate(90deg) translate(-50%, -50%) scale(.9);
  }
`;

const Work = styled.h2`
  color: ${({theme, clicked}) => clicked ? theme.body : theme.text};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  cursor: pointer;
  transition: transform .1s;

  &:hover {
    transform: translate(-50%, -50%) rotate(-90deg) scale(1.1);
  }

  &:active {
    transform: translate(-50%, -50%) rotate(-90deg) scale(.9);
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  widthL 100%;
  display: flex;
  justify-content: space-evenly;
`;

const BottomBarItem = styled(motion.h2)`
  color: ${({theme, aboutPage, clicked}) => clicked && aboutPage ? theme.body : theme.text};
  z-index: 1;
  cursor: pointer;
`;

const rotateAnimation = keyframes`
  from  {
    transfor: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Center = styled.button`
  position: absolute;
  top: ${({clicked}) => clicked ? 85 : 50}%;
  left: ${({clicked}) => clicked ? 92 : 50}%;
  transform: translate(-50%, -50%);
  border: 0;
  outline: 0;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  &>:first-child {
    animation: ${rotateAnimation} infinite 1.5s linear;
  }

  &>:last-child {
    display: ${({clicked}) => clicked ? "none" : "inline-block"};
    padding-top: 1rem
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${({clicked}) => clicked ? 50 : 0}%;
  height: ${({clicked}) => clicked ? 100 : 0}%;
  z-index: 1;
  background: #000;
  transition: height .5s ease, width 1s ease .5s;
`;

export default function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Head>
        <title>Home | Developer portfolio</title>
      </Head>
      <MainContainer>
        <PowerButton />
        <DarkDiv clicked={clicked} />
        <Container>
          <Logo clicked={clicked} />
          <SocialIcons clicked={clicked} />
          <Center clicked={clicked} onClick={() => setClicked(prev => !prev)}>
            <YinYang width={clicked ? 120 : 200} width={clicked ? 120 : 200} />
            <span>click here</span>
          </Center>
          <Contact href="mailto:usasad99@gmail.com" target="_blank">
            <motion.h2 {...motionHoverConfig} >
              Say hi..
            </motion.h2>
          </Contact>
          <Link href="/blog" passHref>
            <Blog>
              Blog
            </Blog>
          </Link>
          <Link href="/work" passHref>
            <Work clicked={clicked}>
              Work
            </Work>
          </Link>
          <BottomBar>
            <Link href="/about" passHref>
              <BottomBarItem {...motionHoverConfig}  clicked={clicked} aboutPage>
                About.
              </BottomBarItem>
            </Link>
            <Link href="/skills" passHref>
              <BottomBarItem {...motionHoverConfig} >
                My Skills.
              </BottomBarItem>
            </Link>
          </BottomBar>
        </Container>
        {clicked ? <Intro clicked={clicked} /> : null}
      </MainContainer>
    </>
  );
}