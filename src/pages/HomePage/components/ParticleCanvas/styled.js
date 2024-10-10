import styled from "styled-components";

const Canvas = styled.canvas`
	position: fixed;
	pointer-events: none;
	z-index: -1;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
`;

export default {
	Canvas,
};
