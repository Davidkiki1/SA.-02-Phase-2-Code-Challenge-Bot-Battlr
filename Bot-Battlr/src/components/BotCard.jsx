import React from 'react';

function BotCard({ bot, addBotToArmy }) {
  const { name, image, health, id } = bot;

  return (
    <div className="bot-card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>Health: {health}</p>
      <button onClick={() => addBotToArmy(bot)}>Add to Army</button>
    </div>
  );
}

export default BotCard;
