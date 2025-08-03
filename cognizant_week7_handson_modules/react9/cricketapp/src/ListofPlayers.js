import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 95 },
    { name: 'Rohit', score: 85 },
    { name: 'Dhoni', score: 60 },
    { name: 'Raina', score: 75 },
    { name: 'Bumrah', score: 40 },
    { name: 'Jadeja', score: 70 },
    { name: 'Shami', score: 50 },
    { name: 'KL Rahul', score: 80 },
    { name: 'Pant', score: 55 },
    { name: 'Ashwin', score: 65 },
    { name: 'Kohli', score: 90 }
  ];

  const playerList = players.map((player, index) => (
    <li key={index}>{player.name} - {player.score}</li>
  ));

  const below70 = players.filter(p => p.score < 70).map(p => (
    <li key={p.name}>{p.name} - {p.score}</li>
  ));

  return (
    <div>
      <h2>All Players</h2>
      <ul>{playerList}</ul>

      <h2>Players with score below 70</h2>
      <ul>{below70}</ul>
    </div>
  );
};

export default ListofPlayers;