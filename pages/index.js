import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { getHomePageData } from "services";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { YinYang } from "components/AllSvg.jsx";
import { Intro } from "components";
import { PowerButton, SocialIcons, Logo } from "subcomponents";
import { mediaQueries } from "data";

const motionHoverConfig = {
  whileHover: {
    scale: 1.1
  },
  whileTap: {
    scale: 0.9
  }
};

const motionAnimationConfig = isYPlusValue => ({
  initial: {
    y: isYPlusValue ? 200 : -200,
    transition: { type: "spring", duration: 1.5, delay: 1 },
  },
  animate: {
    y: 0,
    transition: { type: "spring", duration: 1.5, delay: 1 },
  }
});

const MainContainer = styled(motion.div)`
  background: ${({theme}) => theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }

  h2 {
    ${mediaQueries(40)`
      font-size:1.2em;
    `};

    ${mediaQueries(30)`
      font-size:1em;
    `};
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0) ;
  }
  to {
    transform: rotate(360deg) ;
  }
`;

const Center = styled.button`
  position: absolute;
  top: ${({clicked}) => clicked ? "85%" : "50%"};
  left: ${({clicked}) => clicked ? "92%" : "50%"};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease;

  & > *:first-child {
    animation: ${rotateAnimation} infinite 1.5s linear;
  }
  & > *:last-child {
    display: ${({clicked}) => clicked ? "none" : "inline-block"};
    padding-top: 1rem;
  }

  @media only screen and (max-width: 50em) {
    top: ${({clicked}) => clicked ? "90%" : "50%"};
    left: ${({clicked}) => clicked ? "90%" : "50%"};
    width: ${({clicked}) => clicked ? "80px" : "150px"};
    height: ${({clicked}) => clicked ? "80px" : "150px"};
  }

  @media only screen and (max-width: 30em) {
    width: ${({clicked}) => clicked ? "40px" : "150px"};
    height: ${({clicked}) => clicked ? "40px" : "150px"};
  }
`;

const Contact = styled.a`
  color: ${({clicked, theme}) => clicked ? theme.body : theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const Blog = styled.a`
  color: ${({clicked, theme}) => clicked ? theme.body : theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;
  text-decoration: none;
  cursor: pointer;

  @media only screen and (max-width: 50em) {
    text-shadow: ${({clicked}) => clicked ? "0 0 4px #000" : "none"};
  }
`;

const Work = styled.a`
  color: ${({clicked, theme}) => clicked ? theme.body : theme.text};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  text-decoration: none;
  cursor: pointer;

  @media only screen and (max-width: 50em) {
    text-shadow: ${({clicked}) => clicked ? "0 0 4px #000" : "none"};
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const About = styled.a`
  color: ${({clicked, theme}) => clicked ? theme.body : theme.text};
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`;

const Skills = styled.a`
  color: ${({theme}) => theme.text};
  text-decoration: none;
  cursor: pointer;
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${({clicked}) => clicked ? "50%" : "0%"};
  background-color: #000000;
  height: ${({clicked}) => clicked ? "100%" : "0%"};
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 1;

  ${({clicked}) =>
    clicked
    ? mediaQueries(50)`
        height: 50%;
        right:0;
        width: 100%;
        transition: width 0.5s ease, height 1s ease 0.5s;
    `
    : mediaQueries(50)`
        height: 0;
        width: 0;
    `
  };
`;

export default function Home({ data }) {
  const [clicked, setClicked] = useState(false);
  const [path, setPath] = useState("");

  const { homeData, homePageTitle } = data;

  const handleClick = () => setClicked(!clicked);

  const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "Work" ? "100%" : "-100%"}`,
  };
  const isMobileBreakpoint = typeof window !== "undefined" ? window.matchMedia("(max-width: 50em)").matches : 0;

  return (
    <>
      <Head>
        <title>{homePageTitle}</title>
      </Head> 
      <MainContainer
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={path === "About" || path === "Skills" ? moveY : moveX}
        transition={{ duration: 0.5 }}
      >
        <DarkDiv clicked={clicked} />
        <Container>
          <Logo theme={clicked ? "dark" : "light"} />
          <PowerButton />
          <SocialIcons theme={isMobileBreakpoint ? "light" : clicked ? "dark" : "light"} />
          <Center clicked={clicked}>
            <YinYang
              onClick={() => handleClick()}
              width={isMobileBreakpoint ? (clicked ? 80 : 150) : (clicked ? 120 : 200)}
              height={isMobileBreakpoint ? (clicked ? 80 : 150) : (clicked ? 120 : 200)}
              fill="currentColor"
            />
            <span style={{fontSize: "15px"}}>click here</span>
          </Center>
          <Contact
            clicked={isMobileBreakpoint ? +clicked : 0}
            target="_blank"
            rel="noreferrer"
            href={`mailto:${homeData.email}`}
            title={data.email}
          >
            <motion.h3
              {...motionAnimationConfig(false)}
              {...motionHoverConfig}
            >
              Say hi..
            </motion.h3>
          </Contact>
          <Link href="/blog" passHref>
            <Blog clicked={isMobileBreakpoint ? +clicked : 0} onClick={() => setPath("Blog")}>
              <motion.h2
                {...motionAnimationConfig(false)}
                {...motionHoverConfig}
              >
                Blog
              </motion.h2>
            </Blog>
          </Link>
          <Link href="/work" passHref>
            <Work clicked={+clicked}>
              <motion.h2
                onClick={() => setPath("Work")}
                {...motionAnimationConfig(false)}
                {...motionHoverConfig}
              >
                Work
              </motion.h2>
            </Work>
          </Link>
          <BottomBar>
            <Link href="/about" passHref>
              <About
                onClick={() => setClicked(false)}
                clicked={isMobileBreakpoint ? +false : +clicked}
              >
                <motion.h2
                  onClick={() => setPath("About")}
                  initial={{
                    y: 200,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  animate={{
                    y: 0,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  About.
                </motion.h2>
              </About>
            </Link>
            <Link href="/skills" passHref>
              <Skills>
                <motion.h2
                  onClick={() => setPath("Skills")}
                  {...motionAnimationConfig(true)}
                  {...motionHoverConfig}
                >
                  My Skills.
                </motion.h2>
              </Skills>
            </Link>
          </BottomBar>
        </Container>
        {clicked ? <Intro
            textH1={homeData.introH1Text}
            textH2={homeData.introH2Text}
            textH6={homeData.introH6Text}
            clicked={clicked}
          /> : null}
      </MainContainer>
    </>
  );
};

export async function getStaticProps() {
  const data = await getHomePageData();

  return {
    props: {
      data
    }
  }
}