import React from "react";
import S from "./styled";

const Drawer = ({ disable }) => {
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "auto";
	}, [open]);

	if (disable) return null;

	return (
		<S.Wrapper>
			<h2>Dragonmaster setup</h2>
		</S.Wrapper>
	);
};

export default Drawer;
