import { useEffect, useRef } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { YinYang } from "components/AllSvg.jsx";
import { SocialIcons, PowerButton, Logo, BigTitle, WorkCard } from "components";
import data, { darkTheme, mediaQueries } from "data";

const Box = styled(motion.div)`
  background-color: ${({theme}) => theme.body};
  position: relative;
  display: flex;
  height: 370vh;
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

export default function Work() {
  const ref = useRef(null);
  const yinyang = useRef(null);

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
    <>
      <Head>
        <title>{data.customTitles.work}</title>
      </Head>
      <ThemeProvider theme={darkTheme}>
        <Box
          key="work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <Logo theme="dark" />
          <PowerButton />
          <SocialIcons theme="dark" />
          <Main ref={ref} variants={container} initial="hidden" animate="show">
            {data.workData.map((data,index) => <WorkCard key={index} data={data} />)}
          </Main>
          <BigTitle text="work" top="10%" right="20%" />
          <Rotate ref={yinyang}>
            <YinYang width={80} height={80} fill={darkTheme.text} />
          </Rotate>
        </Box>
      </ThemeProvider>
    </>
  );
};
