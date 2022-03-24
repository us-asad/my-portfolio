import { useState, useEffect } from "react";
import Head from "next/head";
import data from "data";
import styled from "styled-components";
import { Anchor, BlogCard, Logo, SocialIcons, PowerButton } from "components";

const { blogData } = data;

const MainContainer = styled.div`
  background-image: url(/images/blog-bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
`;

const Container = styled.div`
  background: ${({theme}) => `rgba(${theme.bodyRgba},.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

export default function Blog() {
  const [ numbers, setNumbers ] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
  
    setNumbers(parseInt(num));
  },[]);

  return (
    <>
      <Head>
        <title>Blog | Developer portfolio</title>
      </Head>
      <section id="blog">
        <MainContainer>
          <Container>
            <Logo />
            <PowerButton />
            <SocialIcons />
            <Anchor numbers={numbers} />
            <Center>
              <Grid>
                {blogData.map((blog, index) => <BlogCard key={index} {...blog} />)}
              </Grid> 
            </Center>
          </Container>
        </MainContainer>
      </section>
    </>
  );
}