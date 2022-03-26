import Head from "next/head";
import { getAboutPageData } from "services";
import { motion } from 'framer-motion'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import parse from 'html-react-parser';
import { SocialIcons, PowerButton, Logo, ParticleComponent, BigTitle } from "subcomponents";
import { darkTheme, mediaQueries } from 'data'

const Box = styled(motion.div)`
  background-color: ${({theme}) => theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const floatAnimation = keyframes`
	0% {
		transform: translateY(-10px);
	}
  50% { 
  	transform: translateY(15px) translateX(15px);
  }
  100% {
  	transform: translateY(-10px);
	}
`;

const SpaceMan = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  animation: ${floatAnimation} 4s ease infinite;
	width:20vw;

  img{
    width:100%;
    height:auto;
  }
`;

const Main = styled(motion.div)`
  border: 2px solid ${({theme}) => theme.text};
  color: ${({theme}) => theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  ${mediaQueries(40)`
    width: 60vw;
    height: 50vh;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
  `};

  ${mediaQueries(30)`
    width: 50vw;
    height: auto;
    backdrop-filter: none;
    margin-top:2rem;
  `};

	${mediaQueries(20)`
    padding: 1rem;
    font-size: calc(0.5rem + 1vw);
  `};
`;

export default function About({ data }) {
  const { aboutData, aboutPageTitle } = data;

  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title>{aboutPageTitle}</title>
      </Head>
      <Box
        key='skills'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <Logo theme='dark' />
        <PowerButton />
        <SocialIcons theme='dark' />
        <ParticleComponent theme='dark' />
        <SpaceMan
          initial={{ right: '-20%', top: '100%' }}
          animate={{
            right: '5%',
            top: '10%',
            transition: { duration: 2, delay: 0.5 },
          }}>
            <img src="/images/spaceman.png"  alt="spaceman" />
        </SpaceMan>
        <Main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
        >
          {parse(aboutData.text)}
        </Main>
        <BigTitle text='about' top='10%' left='5%' />
      </Box>
    </ThemeProvider>
  );
}

export async function getServerSideProps() {
  const data = await getAboutPageData();

  return {
    props: {
      data
    }
  }
}