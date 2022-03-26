import { motion } from "framer-motion";
import styled from "styled-components";
import { mediaQueries } from "data";

const Box = styled(motion.a)`
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  text-decoration: none;
  width: calc(10rem + 15vw);
  height: 20rem;
  border: 2px solid ${({theme}) => theme.text};
  padding: 1rem;
  color: ${({theme}) => theme.text};
  display: flex;
  flex-direction: column;
  z-index: 5;
  cursor: pointer;

  &:hover {
    color: ${({theme}) => theme.body};
    background-color: ${({theme}) => theme.text};
    transition: all 0.3s ease;
  }

  ${mediaQueries(50)`
    width:calc(60vw);
  `};

  ${mediaQueries(30)`
    height:18rem;
  `};

  ${mediaQueries(25)`
    height:14rem;
    padding:0.8rem;
    backdrop-filter: none;
  `};
`;

const ImageComponent = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${mediaQueries(25)`   
    height:70%;
  `};

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;

  ${mediaQueries(40)`
    font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(25)`
    font-size:calc(0.6em + 1vw);
  `};

  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

const HashTags = styled.div`
  padding: 0.5rem 0;

  ${mediaQueries(25)`
    font-size:calc(0.5em + 1vw);
  `};
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;

const Date = styled.span`
  padding: 0.5rem 0;

  ${mediaQueries(25)`
    font-size:calc(0.5em + 1vw);
  `};
`;

const Container = styled(motion.div)``;

const item = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: "spring", duration: 0.5 } },
};

export default function BlogCard({ blog }) {
  const { title, tags, date, image, link } = blog;
  const tagsArr = tags.split(" ")

  return (
    <Container variants={item}>
      <Box target="_blank" href={link}>
        <ImageComponent img={image.url} />
        <Title>{title}</Title>
        <HashTags>
          {tagsArr.map((tag, index) => (
            <Tag key={index}>#{tag}</Tag>
          ))}
        </HashTags>
        <Date>{date}</Date>
      </Box>
    </Container>
  );
};
