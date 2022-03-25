import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Github, Twitter, Facebook, YouTube, Telegram, LinkedIn, DevTo } from "components/AllSvg.jsx";
import data, { darkTheme, mediaQueries } from "data";

const motionAnimationConfig = delay => ({
  initial: {
    transform: "scale(0)"
  },
  animate: {
    scale: [0, 1, 1.5, 1]
  },
  transition: {
    type: "spring",
    duration: 1,
    delay: 1
  }
});

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 10;

  & > *:not(:last-child) {
    margin: 0.5rem 0;

    ${mediaQueries(20)`
      margin: 0.3rem 0;
    `};
  }

  ${mediaQueries(40)`
    left: 1rem;

    svg {
      width:20px;
      height:20px
    }
  `};
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${({color}) => color === "dark" ? darkTheme.text : darkTheme.body};
`;

export default function SocialIcons({ theme }) {
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    setLineWidth(window.matchMedia("(max-width: 40em)").matches)
  },[]);

  const svgStyleConfig = {
    width: 25,
    height: 25,
    fill: theme === "dark" ? darkTheme.text : darkTheme.body
  }

  const getSocialAccounts = () => {
    const socialMediaIcons = ["github", "twitter", "facebook", "youtube", "telegram", "linkedin", "devto"];
    const socialAccountsUrl = data.socialAccounts;

    return socialAccountsUrl.map(({name: accountName, url: accountUrl}) => {
      let icon = null;
      socialMediaIcons.forEach((iconName) => {
        if(accountName.toLowerCase().trim() === iconName.toLowerCase().trim()) {
          icon = iconName;
        }
      });

      return {
        iconName: icon,
        url: accountUrl
      }
    });
  }

  return (
    <Icons>
      {getSocialAccounts()?.map(({iconName, url},index) => {
        if (iconName === null) return null;

        return (
          <motion.div key={index} {...motionAnimationConfig(index === 0 || index === 3 ? 1 : index === 1 ? 1.2 : index === 2 ? 1.4 : 1)} >
            <a rel="noreferrer" target="_blank" href={url} >
              {iconName === "github"
                ? <Github {...svgStyleConfig} />
                : iconName === "youtube"
                ? <YouTube {...svgStyleConfig} />
                : iconName === "twitter"
                ? <Twitter {...svgStyleConfig} />
                : iconName === "facebook"
                ? <Facebook {...svgStyleConfig} />
                : iconName === "telegram"
                ? <Telegram {...svgStyleConfig} />
                : iconName === "linkedin"
                ? <LinkedIn {...svgStyleConfig} />
                : iconName === "devto"
                ? <DevTo {...svgStyleConfig} />
                : iconName
              }
            </a>
          </motion.div>
        );
      })}
      <Line
        initial={{ height: 0 }}
        animate={{ height: lineWidth ? "5rem" : "8rem" }}
        color={theme}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
};
