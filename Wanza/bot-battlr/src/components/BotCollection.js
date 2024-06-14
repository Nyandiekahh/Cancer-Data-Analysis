// src/components/BotCollection.js
import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, onAdd, onRemove, onDelete }) => {
  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard 
          key={bot.id}
          bot={bot}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default BotCollection;
