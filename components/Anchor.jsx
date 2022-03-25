import { useEffect, useRef } from "react";
import styled from "styled-components";
import { AnchorSvg, LinkSvg } from "components/AllSvg.jsx";
import { mediaQueries } from "data";

const Container = styled.div`
  position: relative;

  ${mediaQueries(40)`
    display:none;
  `};
`;

const PreDisplay = styled.div`
  position:absolute;
  top:0;
  right:2rem;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);

  .chain {
    transform: rotate(135deg);
  }
`;

export default function Anchor({ number }) {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowSize = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      const diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      const diffP = (diff * 100) / (bodyHeight - windowSize);

      let a = ref.current.style.transform = `translateY(-${diffP}%)`;
      let b = hiddenRef.current.style.display = window.pageYOffset > 5 ? "none" : "block";
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
        <AnchorSvg width={70} height={70} fill="currentColor" />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(number)].map((_,id) => {
          return (
            <LinkSvg
              key={id}
              style={{ padding: "0.1rem 0" }}
              width={25}
              height={25}
              fill="currentColor"
              className="chain"
            />
          );
        })}
        <AnchorSvg width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  );
};
