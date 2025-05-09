import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, addBotToArmy }) {
  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} addBotToArmy={addBotToArmy} />
      ))}
    </div>
  );
}

export default BotCollection;