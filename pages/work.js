import { useEffect, useRef } from "react";
import Head from "next/head";
import { getWorkPageData } from "services";
import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { YinYang } from "components/AllSvg.jsx";
import { WorkCard } from "components";
import { SocialIcons, PowerButton, Logo, BigTitle } from "subcomponents";
import { darkTheme, mediaQueries } from "data";

const Box = styled(motion.div)`
  background-color: ${({theme}) => theme.body};
  position: relative;
  display: flex;
  height: ${({worksLength}) => worksLength < 2 ? 100 : worksLength * 60}vh;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  ${mediaQueries(50)`
    left:calc(8rem + 15vw);
  `};

  ${mediaQueries(40)`
    top: 30%;
    left:calc(6rem + 15vw);
  `};

  ${mediaQueries(40)`
    left:calc(2rem + 15vw);
  `};

  ${mediaQueries(25)`
    left:calc(1rem + 15vw);
  `};
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;

  ${mediaQueries(40)`
    width:60px;
    height:60px;   
    
    svg{
      width:60px;
      height:60px;
    }
  `};

  ${mediaQueries(25)`
    width:50px;
    height:50px;

    svg{
      width:50px;
      height:50px;
     }
  `};
`;

const NotFoundTitle = styled.h1`
	font-size: 35px;
	font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  color: #fff;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

export default function Work({ data }) {
  const ref = useRef(null);
  const yinyang = useRef(null);

  const { workData, workPageTitle } = data;

  useEffect(() => {
    let element = ref.current;

    const handleRotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      yinyang.current.style.transform = `rotate(-${window.pageYOffset}deg)`;
    };

    window.addEventListener("scroll", handleRotate);
    
    return () => window.removeEventListener("scroll", handleRotate);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title>{workPageTitle}</title>
      </Head>
      <Box
        worksLength={workData.length}
        key="work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <Logo theme="dark" />
        <PowerButton />
        <SocialIcons theme="dark" />
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {workData.length 
          	? workData.map(data => <WorkCard key={data.id} data={data} />)
          	: <NotFoundTitle>no works yet</NotFoundTitle>
          }
        </Main>
        <BigTitle text="work" top="10%" right="20%" />
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </Rotate>
      </Box>
    </ThemeProvider>
  );
};

export async function getServerSideProps() {
  const data = await getWorkPageData();

  return {
    props: {
      data
    }
  }
}
