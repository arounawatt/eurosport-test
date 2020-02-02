import React from 'react';
import _get from "lodash/get";

import "./PlayerCard.scss";

const PlayerCard = ({item}) => {

	if(!item) return "";
	return (
		<div className="PlayerCard">
			<div className="PlayerCard__nameAvatar">
				<div className="PlayerCard__name">
					{`${_get(item, "firstname")} ${_get(item, "lastname")} (${_get(item, "shortname")})`}
					<div className="PlayerCard__country">
						<img className="PlayerCard__countryImg" src={_get(item, "country.picture")} alt="country" />
						{_get(item, "country.code")}
					</div>
				</div>
				<div className="PlayerCard__avatar">
					<img className="PlayerCard__avatarImg" src={_get(item, "picture")} alt="avatar" />
				</div>
			</div>
			<div className="PlayerCard__stats">
					<span className="PlayerCard__statsColumn">
						<span className="PlayerCard__statsLabel">Height (m)</span>
						<span className="PlayerCard__statsValue">{_get(item, "data.height") / 100}</span>
					</span>
					<span className="PlayerCard__statsColumn">
						<span className="PlayerCard__statsLabel">Weight (kg)</span>
						<span className="PlayerCard__statsValue">{(_get(item, "data.weight") / 1000).toFixed()}</span>
					</span>
					<span className="PlayerCard__statsColumn">
						<span className="PlayerCard__statsLabel">Age</span>
						<span className="PlayerCard__statsValue">{_get(item, "data.age")}</span>
					</span>
					<span className="PlayerCard__statsColumn">
						<span className="PlayerCard__statsLabel">Rank</span>
						<span className="PlayerCard__statsValue">{_get(item, "data.rank")}</span>
					</span>
			</div>
			<div className="PlayerCard__winDefeat">
				<span className="PlayerCard__winDefeatColumn">
					<span>
						Win: {_get(item, "data.last").filter( element => element === 1).length}
					</span>
				</span>
				<span className="PlayerCard__winDefeatColumn">
					<span>
						Lost: {_get(item, "data.last").filter( element => element === 0).length}
					</span>
				</span>
			</div>
		</div>
	);
};

PlayerCard.propTypes = {

};

export default PlayerCard;