import Link from "next/link";
import styled from "styled-components";

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subtitle = styled.p`
  margin-top: 20px;
  font-size: 20px;
`;

export default function NotFound() {
  return (
    <Box>
      <h1>International Server Error</h1>
      <Subtitle>Please Try Again Later</Subtitle>
    </Box>
  );
};
