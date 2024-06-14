// src/components/YourBotArmy.js
import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ bots, onRemove, onDelete }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {bots.map(bot => (
        <BotCard 
          key={bot.id}
          bot={bot}
          onRemove={onRemove}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default YourBotArmy;
