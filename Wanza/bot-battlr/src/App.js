// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotDetailsModal from './components/BotDetailsModal';
import './App.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8001/bots')
      .then(response => setBots(response.data))
      .catch(error => console.error(error));
  }, []);

  const addBotToArmy = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeBotFromArmy = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const deleteBot = (bot) => {
    axios.delete(`http://localhost:8001/bots/${bot.id}`)
      .then(() => {
        setBots(bots.filter(b => b.id !== bot.id));
        setArmy(army.filter(b => b.id !== bot.id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="App">
      <YourBotArmy 
        bots={army} 
        onRemove={removeBotFromArmy} 
        onDelete={deleteBot} 
      />
      <BotCollection 
        bots={bots} 
        onAdd={addBotToArmy} 
        onRemove={removeBotFromArmy} 
        onDelete={deleteBot}
      />
      <BotDetailsModal 
        isOpen={!!selectedBot} 
        onRequestClose={() => setSelectedBot(null)} 
        bot={selectedBot} 
      />
    </div>
  );
};

export default App;
