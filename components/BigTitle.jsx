import styled from "styled-components";

const Text = styled.h1`
  position: fixed;
  top: ${({top}) => top};
  left: ${({left}) => left};
  right: ${({right}) => right};
  color: ${({theme}) => `rgba(${theme.textRgba}, 0.1)`};
  font-size: calc(5rem + 5vw);
  text-transform: uppercase;
  z-index: 0;
`;

export default function BigTitle({ top, left, right, text }) {
  return (
    <Text top={top} left={left} right={right}>
      {text}
    </Text>
  );
};
