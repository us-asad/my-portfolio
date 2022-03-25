import styled from "styled-components";
import configDark from "config/particlesjs-config.json";
import configLight from "config/particlesjs-config-light.json";
import Paricles from "react-particles-js";

const Box = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 0;
`;

export default function ParticleComponent({ theme }) {
	return (
		<Box>
			<Paricles style={{position: "absolute", top: 0}} params={theme === "light" ? configLight : configDark} />
		</Box>
	);
}