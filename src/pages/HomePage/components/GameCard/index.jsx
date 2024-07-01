import React from "react";
import S from "./styled";
import SC from "@/styled/common-styled";
import game1Logo from "@/img/logo_dragonmaster.jpg";

const GameCard = ({ game }) => {
	return (
		<S.Container>
			<SC.Flex v="flex-start">
				<S.GameLogo src={game1Logo} alt="game logo" />
				<div>
					<S.GameTitle>{game.title}</S.GameTitle>
					<S.GameDescription>{game.description}</S.GameDescription>
					<S.InfoCard>
						<div>
							<span>Players:</span> {game.players.min}-{game.players.max}{" "}
							<small>(recommended {game.players.recommended})</small>
						</div>
						<div>
							<span>Play Time:</span> {game.time.min}-{game.time.max} min
						</div>
					</S.InfoCard>
				</div>
			</SC.Flex>
		</S.Container>
	);
};

export default GameCard;
