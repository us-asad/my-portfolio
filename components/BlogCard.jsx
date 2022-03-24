import Link from "next/link";
import styled from "styled-components";

const Box = styled.a`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${({theme}) => theme.text};
  border: 2px solid ${({theme}) => theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0,0,0,.2);
  display: flex;
  flex-direction: column;
  z-index: 5;
  transition: all .3s ease;

  &:hover {
    color: ${({theme}) => theme.body};
    background: ${({theme}) => theme.text};
  }
`;

const ImageComponent = styled.div`
  background-image: ${({src}) => `url(${src})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
  transition: all .3s ease;

  ${Box}:hover & {
    border: 1px solid ${({theme}) => theme.body};
  }
`;

const Title = styled.h3`
  color: inherit;
  padding: .5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${({theme}) => theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${({theme}) => theme.body};
  }
`;

const PaddingX = styled.div`
  padding: .5rem 0;
`;

const Tag = styled.span`
  padding-right: .5rem;
`;

export default function BlogCard(props) {
  const { name, tags, date, imgSrc, link } = props;

  return (
      <Box href={link} target="_blank">
        <ImageComponent src={imgSrc} />
        <Title>{name}</Title>
        <PaddingX>
          {tags.map((tag,index) => (
            <Tag key={index}>#{tag}</Tag>
          ))}
        </PaddingX>
        <PaddingX>
          {date}
        </PaddingX>
      </Box>
  );
}
