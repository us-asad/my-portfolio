import Head from "next/head";
import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import data, { lightTheme, mediaQueries } from "data";
import { SocialIcons, PowerButton, Logo, ParticleComponent, BigTitle } from "subcomponents";
import { Design, Develope } from "components/AllSvg.jsx";

const Box = styled(motion.div)`
  background-color: ${({theme}) => theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQueries(50)`
    flex-direction:column;  
    padding:8rem 0;
    height:auto;

    &>*:nth-child(5){
      margin-bottom:5rem;
    }      
  `};

  ${mediaQueries(30)`
    &>*:nth-child(5){
      margin-bottom:4rem;
    }
  `};
`;

const Main = styled(motion.div)`
  background-color: ${({theme}) => theme.body};
  border: 2px solid ${({theme}) => theme.text};
  color: ${({theme}) => theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    color: ${({theme}) => theme.body};
    background-color: ${({theme}) => theme.text};
  }

  ${mediaQueries(60)`
    height: 55vh;
  `};

  ${mediaQueries(50)`
    width: 50vw;
    height: max-content;
  `};
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${mediaQueries(60)`
    font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
    font-size:calc(1em + 2vw);
    margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
    font-size:calc(1em + 1vw);
  `};

  ${mediaQueries(25)`
    font-size:calc(0.8em + 1vw);

    svg{
      width:30px;
      height:30px;
    }
  `};

  ${Main}:hover & {
    & > * {
      fill: ${({theme}) => theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${({theme}) => theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul, p {
    margin-left: 2rem;
  }

  ${Main}:hover & {
    color: ${({theme}) => theme.body};
  }

  ${mediaQueries(50)`
    font-size: calc(0.8em + 1vw);
  `};

  ${mediaQueries(30)`
    font-size:calc(0.7em + 1vw);
  `};

  ${mediaQueries(25)`
    font-size:calc(0.5em + 1vw);
  `};
`;

export default function MySkillsPage() {
  return (
    <>
      <Head>
        <title>{data.customTitles.skills}</title>
      </Head>
      <ThemeProvider theme={lightTheme}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <Logo theme="light" />
          <PowerButton />
          <SocialIcons theme="light" />
          <ParticleComponent theme="light" />
          <Main>
            <Title>
              <Develope width={40} height={40} /> {data.skills.title}
            </Title>
            <Description>
              {data.skills.subtitle}
            </Description>
            <Description>
              <strong>Skills</strong> <br />
              <p>{data.skills.skills}</p>
            </Description>
            <Description>
              <strong>Tools</strong> <br />
              <p>{data.skills.tools}</p>
            </Description>
          </Main>
          <BigTitle text="skills" top="80%" right="30%" />
        </Box>
      </ThemeProvider>
    </>
  );
};
