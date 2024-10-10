import styled, { keyframes } from "styled-components";
import theme from "@/styled/style-constants";

const { COLORS, OFFSET } = theme;

const Container = styled.div`
	--border-angle: 0deg;
	box-shadow: 0px 2px 8px hsl(0 0% 0% / 35%);
	border: 0.5rem solid transparent;
	margin-top: ${OFFSET * 2}px;
	border-radius: 12px;
	padding: ${OFFSET}px;
	user-select: none;
	width: 100%;
	background-color: ${COLORS.DARK};
`;

const GameLogo = styled.img`
	width: 200px;
	height: auto;
`;

const GameTitle = styled.div`
	font-size: 1.2rem;
	font-weight: 500;
	color: ${COLORS.LIGHT};
	text-transform: capitalize;
`;

const GameDescription = styled.div`
	margin-top: ${OFFSET}px;
	color: ${COLORS.PRIMARY};
	width: 600px;
	font-style: italic;
`;

const InfoCard = styled.div`
	margin-top: ${OFFSET}px;
	display: flex;
	flex-direction: column;
	width: 100%;
	& span {
		color: ${COLORS.SECONDARY};
	}
	& small {
		color: ${COLORS.SECONDARY};
	}
`;

const PlayButton = styled.span`
	color: ${COLORS.LIGHT};
	cursor: pointer;
	text-decoration: none;
	text-align: center;
	appearance: none;
	display: inline-block;
	text-transform: uppercase;
	letter-spacing: 0.25em;
	&::after {
		content: "";
		box-shadow: 0px 0px 23px 0px ${COLORS.SECONDARY} inset, 0px 0px 8px 0px ${COLORS.PRIMARY};
		transition: opacity 0.3s;

		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		border-radius: 999px;
		opacity: 1;
	}
`;

const PlayButtonWrapper = styled.div`
	margin-top: ${OFFSET * 3}px;
	position: relative;
	width: 100px;
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default {
	Container,
	GameDescription,
	GameLogo,
	GameTitle,
	InfoCard,
	PlayButton,
	PlayButtonWrapper,
};
