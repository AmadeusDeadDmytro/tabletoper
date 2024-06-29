import React from "react";
import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import userStoreCtx from "@/store/userStore";
import SC from "@/styled/common-styled";
import UnauthenticatedApp from "@/components/UnauthenticatedApp";

const App = observer(() => {
	const { user } = React.useContext(userStoreCtx);

	return (
		<SC.AppWrapper>
			{user ? (
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			) : (
				<UnauthenticatedApp />
			)}
		</SC.AppWrapper>
	);
});
export default App;
