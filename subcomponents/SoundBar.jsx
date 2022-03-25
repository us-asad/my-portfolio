import { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { mediaQueries } from "data";

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 8rem;
  top: 3rem;
  z-index: 10;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }

  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }

  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }

  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }

  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }

  ${mediaQueries(40)`
    left:1rem;
    top:10rem;
  `};
`;

const playAnimation = keyframes`
  0%{
      transform:scaleY(1);
  }
  50%{
      transform:scaleY(2);
  }
  100%{
      transform:scaleY(1);
  }
`;
const Line = styled.span`
  background: ${({theme}) => theme.text};
  border: 1px solid ${({theme}) => theme.body};
  animation: ${playAnimation} 1s ease infinite;
  animation-play-state: ${({click}) => click ? "running" : "paused"};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;

  ${mediaQueries(40)`
    height:0.5rem;
    width:1px;
  `};
`;

export default function SoundBar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(prev => !prev);

    if (!clicked) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  const ref = useRef(null);

  return (
    <Box onClick={() => handleClick()}>
      {[...new Array(5)].map((_,index) => <Line key={index} click={clicked} />)}
      <audio src="/audio/music.mp3" ref={ref} loop />
    </Box>
  );
};
