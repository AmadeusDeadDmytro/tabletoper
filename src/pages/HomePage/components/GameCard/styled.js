import styled from "styled-components";
import theme from "@/styled/style-constants";

const { COLORS, OFFSET } = theme;

const Container = styled.div`
	border-bottom: 1px solid ${COLORS.PRIMARY};
	border-left: 1px solid ${COLORS.PRIMARY};
	margin-top: ${OFFSET * 2}px;
	border-radius: 0 0 0 4px;
	padding: ${OFFSET}px;
	user-select: none;
	width: 100%;
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

export default {
	Container,
	GameDescription,
	GameLogo,
	GameTitle,
	InfoCard,
};