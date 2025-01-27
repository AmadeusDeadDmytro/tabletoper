import React from "react";
import { observer } from "mobx-react-lite";
import S from "./styled";
import SC from "@/styled/common-styled";
import GameCard from "./components/GameCard";
import ParticleCanvas from "./components/ParticleCanvas";
import appStoreCtx from "@/store/appStore";
import Drawer from "@/components/Drawer";

const HomePage = observer(() => {
	const [activeTab, setActiveTab] = React.useState(0);
	const { games } = React.useContext(appStoreCtx);

	return (
		<>
			<S.Container>
				<SC.Flex h="flex-start" gap="0">
					<S.Tab id="0" active={activeTab.toString()} onClick={() => setActiveTab(0)}>
						Create
					</S.Tab>
					<S.Tab id="1" active={activeTab.toString()} onClick={() => setActiveTab(1)}>
						Join
					</S.Tab>
				</SC.Flex>
				<S.Content>
					{activeTab === 0 && games.map((game) => <GameCard key={game.id} game={game} />)}
					{activeTab === 1 && <span>Join Table</span>}
				</S.Content>
				<ParticleCanvas />
				<Drawer disable />
			</S.Container>
		</>
	);
});

export default HomePage;
