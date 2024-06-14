// src/components/BotCard.js
import React from 'react';

const BotCard = ({ bot, onAdd, onRemove, onDelete }) => {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p className="catchphrase">{bot.catchphrase}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <button onClick={() => onAdd(bot)}>Enlist</button>
      <button onClick={() => onRemove(bot)}>Release</button>
      <button onClick={() => onDelete(bot)} className="delete-btn">x</button>
    </div>
  );
};

export default BotCard;
