import styled from "styled-components";
import theme from "@/styled/style-constants";

const { COLORS, OFFSET } = theme;

const AppWrapper = styled.div`
	height: 100vh;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
	padding: ${OFFSET * 4}px;
	display: flex;
	gap: ${OFFSET * 4}px;
	background-color: ${COLORS.DARK};
`;

const Flex = styled.div`
	display: flex;
	justify-content: ${(props) => props.h || "center"};
	align-items: ${(props) => props.v || "center"};
	gap: ${(props) => props.gap || `${OFFSET * 2}px`};
`;

export default {
    AppWrapper,
    Flex
};
