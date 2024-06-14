// src/components/BotDetailsModal.js
import React from 'react';
import Modal from 'react-modal';

const BotDetailsModal = ({ isOpen, onRequestClose, bot }) => {
  if (!bot) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>{bot.catchphrase}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default BotDetailsModal;
