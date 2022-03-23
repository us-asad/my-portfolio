import styled from "styled-components";
import { motion } from "framer-motion";
 
const Box = styled(motion.div)`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 65vw;
	height: 55vh;
	display: flex;
	background: linear-gradient(
		to right,
		${({theme}) => theme.body} 50%,
		${({theme}) => theme.text} 50% ) bottom,
		linear-gradient(
		to right,
		${({theme}) => theme.body} 50%,
		${({theme}) => theme.text} 50% ) top;
	background-repeat: no-repeat;
	background-size: 100% 2px;
	border-left: 2px solid ${({theme}) => theme.body};
	border-right: 2px solid ${({theme}) => theme.text};
	z-index: 1;
`;

const SubBox = styled.div`
	width: 50%;
	position: relative;
	display: flex;

	.pic {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 0);
		width: 100%;
		height: auto;
	}
`;

const Text = styled.div`
	font-size: calc(1em + 1.5vw);
	color: ${({theme}) => theme.body};
	padding: 2rem;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	&>*:last-child {
		color: ${({theme}) => `rgba(${theme.bodyRgba},.6)`};
		font-size: calc(.5rem + 1.5vw);
		font-weight: 300;
	}
`;

export default function Intro({ clicked }) {
	return (
		<Box
			initial={{height: 0}}
			animate={{height: "55vh"}}
			transition={{type: "spring", duration: 2, delay: 1}}
		>
			<SubBox>
				<Text>
					<h1>Hi,</h1>
					<h3>I'm UsAsad</h3>
					<h6>I create amazing and also beautiful webapps</h6>
				</Text>
			</SubBox>
			<SubBox>
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{duration: 1, delay: 2}}
				>
					<img
						src="/images/profile.png"
						alt="developer pic"
						className="pic"
					/>
				</motion.div>
			</SubBox>
		</Box>
	);
}