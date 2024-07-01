import styled from "styled-components";
import theme from "@/styled/style-constants";

const { COLORS, OFFSET } = theme;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	color: ${COLORS.PRIMARY};
`;

const Tab = styled.div`
	border: 1px solid ${COLORS.PRIMARY};
	padding: ${OFFSET}px;
	cursor: pointer;
	user-select: none;
	background-color: ${({ active, id }) => (active === id ? COLORS.PRIMARY : "transparent")};
	color: ${(props) => (props.active ? COLORS.LIGHT : COLORS.PRIMARY)};
	&:hover {
		background-color: ${COLORS.SECONDARY};
		color: ${COLORS.LIGHT};
	}
`;

const Content = styled.div`
	margin-top: ${OFFSET * 2}px;
	width: 100%;
`;

export default {
	Container,
	Content,
	Tab,
};
