import styled from "styled-components";
import theme from "@/styled/style-constants";

const { COLORS, OFFSET } = theme;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	height: 100%;
	width: 50%;
	padding: ${OFFSET * 3}px;
	box-sizing: border-box;
	background-color: ${COLORS.DARK};
	position: fixed;
	right: 0;
	top: 0;
	box-shadow: 0px 2px 8px hsl(0 0% 0% / 35%);
`;

export default {
	Wrapper,
};
