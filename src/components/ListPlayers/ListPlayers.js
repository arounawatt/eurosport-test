import React, { useEffect, useState } from 'react';
import _get from "lodash/get";
import axios from 'axios';

import "./ListPlayers.scss";
import PlayerCard from '../PlayerCard/PlayerCard';

const ListPlayers = () => {

  const [players, setPlayers] = useState(null);
  const [error, setError] = useState(null);

  const getPlayers = () => {
    axios.get("https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json").then(
      ({data}) => {
        setPlayers(_get(data, "players", []));
      },
      () => {
        setError(true);
      }
    );
  };

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <div className="ListPlayers">
      {players && players.map( player => (
        <PlayerCard key={_get(player, "data.rank")} item={player} />
      ))}
      {error && (
        <span> A error occur. please check your connection or retry later</span>
      )}
    </div>
  );
};

export default ListPlayers;