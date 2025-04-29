import React from 'react';

function YourBotArmy({ botArmy, removeBotFromArmy, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {botArmy.map(bot => (
        <div key={bot.id} className="bot-army-card">
          <h3>{bot.name}</h3>
          <p>Health: {bot.health}</p>
          <button onClick={() => removeBotFromArmy(bot)}>Remove from Army</button>
          <button onClick={() => dischargeBot(bot)}>Discharge</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;