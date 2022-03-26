import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  color: #fff;
  font-family: 'Ubuntu Mono', monospace;
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

const NotFoundTitle = styled.h1`
  font-size: 35px;
  font-style: italic;
  color: #fff;
`;

export default function NotFound() {
  return (
    <Box>
      <Head>
        <title>404 | Page Not Found</title>
      </Head>
      <NotFoundTitle>404 | Page Not Found</NotFoundTitle>
      <Link href="/">
        <ATag>Back to Home</ATag>
      </Link>
    </Box>
  );
};
