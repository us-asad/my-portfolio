import Link from "next/link";
import styled from "styled-components";
import { Facebook, Github, Twitter, YouTube } from "./AllSvg.jsx";
import data from "data";

const { themes: { darkTheme } } = data; 

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  &>*:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line= styled.span`
  width: 2px;
  height: 8rem;
  background: ${({clicked}) => clicked ? darkTheme.text : darkTheme.body}
`;

export default function SocialIcons({ clicked }) { 
  return (
    <Icons>
      <div>
        <a href="https://github.com/UAsad99" target="_blank">
          <Github width={25} height={25} fill={clicked ? darkTheme.text : darkTheme.body} />
        </a>
      </div>
      <div>
        <a href="https://github.com/UAsad99" target="_blank">
          <Twitter width={25} height={25} fill={clicked ? darkTheme.text : darkTheme.body} />
        </a>
      </div>
      <div>
        <a href="https://github.com/UAsad99" target="_blank">
          <Facebook width={25} height={25} fill={clicked ? darkTheme.text : darkTheme.body} />
        </a>
      </div>
      <div>
        <a href="https://github.com/UAsad99" target="_blank">
          <YouTube width={25} height={25} fill={clicked ? darkTheme.text : darkTheme.body} />
        </a>
      </div>
      <Line clicked={clicked} />
    </Icons>
  );
}