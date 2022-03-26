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

const ATag = styled.a`
  margin-top: 20px;
  font-size: 20px;
  text-decoration: underline;
  cursor: pointer;
`;

export default function NotFound() {
  return (
    <Box>
      <h1>404 | Page Not Found</h1>
      <Link href="/">
        <ATag>Back to Home</ATag>
      </Link>
    </Box>
  );
};
