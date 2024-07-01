import React from "react";
import { observer } from "mobx-react-lite";
import S from "./styled";
import SC from "@/styled/common-styled";
import GameCard from "./components/GameCard";
import appStoreCtx from "@/store/appStore";

const HomePage = observer(() => {
	const [activeTab, setActiveTab] = React.useState(0);
	const { games } = React.useContext(appStoreCtx);

	return (
		<S.Container>
			<SC.Flex h="flex-start">
				<S.Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>
					Create
				</S.Tab>
				<S.Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
					Join
				</S.Tab>
			</SC.Flex>
			<S.Content>
				{activeTab === 0 ? (
					<>
						{games.map((game) => (
							<GameCard key={game.id} game={game} />
						))}
					</>
				) : (
					<span>Join Table</span>
				)}
			</S.Content>
		</S.Container>
	);
});

export default HomePage;
