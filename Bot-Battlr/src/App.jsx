import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './app.css';

function App() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const addBotToArmy = (bot) => {
    setBotArmy([...botArmy, bot]);
  };

  const removeBotFromArmy = (bot) => {
    setBotArmy(botArmy.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:4000/bots/${bot.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        removeBotFromArmy(bot);
        setBots(bots.filter(b => b.id !== bot.id));
      });
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <BotCollection bots={bots} addBotToArmy={addBotToArmy} />
      <YourBotArmy 
        botArmy={botArmy} 
        removeBotFromArmy={removeBotFromArmy} 
        dischargeBot={dischargeBot} 
      />
    </div>
  );
}

export default App;