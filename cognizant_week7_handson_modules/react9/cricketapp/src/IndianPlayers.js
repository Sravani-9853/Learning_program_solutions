import React from 'react';

const IndianPlayers = () => {
  const T20players = ['Kohli', 'Rohit', 'Hardik'];
  const RanjiPlayers = ['Pujara', 'Rahane', 'Saha'];

  const allPlayers = [...T20players, ...RanjiPlayers];

  const evenPlayers = allPlayers.filter((_, index) => index % 2 === 0);
  const oddPlayers = allPlayers.filter((_, index) => index % 2 !== 0);

  return (
    <div>
      <h2>Merged Indian Players</h2>
      <p>{allPlayers.join(', ')}</p>

      <h2>Even Index Players</h2>
      <p>{evenPlayers.join(', ')}</p>

      <h2>Odd Index Players</h2>
      <p>{oddPlayers.join(', ')}</p>
    </div>
  );
};

export default IndianPlayers;