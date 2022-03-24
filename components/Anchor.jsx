import { useRef, useEffect } from "react";
import styled from "styled-components";
import { LinkSvg, AnchorSvg } from "components/AllSvg.jsx";

const Container = styled.div`
	position: relative;
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

const PreDisplay = styled.div`
	position: fixed;
	top: 0;
	right: 2rem;
`;

export default function Anchor({ numbers }) {
	const ref = useRef(null);
	const hiddenRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.pageYOffset;
			const windowSize = window.innerHeight;
			const bodyHeight = document.body.offsetHeight;

			const diff = Math.max(bodyHeight - (scrollPosition + windowSize));
			const diffP = (diff * 100) / (bodyHeight - windowSize);

			ref.current.style.transform = `translateY(${-diffP}%)`;
		
			if(scrollPosition > 5) {
				hiddenRef.current.style.display = "none";
			} else {
				hiddenRef.current.style.display = "block";
			}
		}

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	},[]);

	return (
		<Container>
			<PreDisplay ref={hiddenRef} className="hidden">
				<AnchorSvg width={70} height={70} fill="currentColor" />
			</PreDisplay>
			<Slider ref={ref}>
				{[...Array(25)].map((item,index) => <LinkSvg key={index} width={25} height={25} className="chain" />)}
				<AnchorSvg width={70} height={70} fill="currentColor" />
			</Slider>
		</Container>
	);
}