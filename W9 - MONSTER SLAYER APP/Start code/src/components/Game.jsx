import React, { useState } from "react";
import Entity from "./Entity";
import Controls from "./Controls";
import Log from "./Log";
import GameOver from "./GameOver";
// ----------------------------------------------------------------------------------------------------------
// HELPER FUNCTIONS
// ----------------------------------------------------------------------------------------------------------

// Generate a random values in the range {min, max}
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Create an attack log
function createLogAttack(isPlayer, damage) {
  return {
    isPlayer: isPlayer,
    isDamage: true,
    text: ` takes ${damage} damages`,
  };
}

// Create a healing log
function createLogHeal(healing) {
  return {
    isPlayer: true,
    isDamage: false,
    text: ` heal ${healing} life points`,
  };
}

function Game() {
  // ----------------------------------------------------------------------------------------------------------
  // STATES & VARIABLES
  // ----------------------------------------------------------------------------------------------------------

  const [myHealth, setMyHealth]=useState(100);
  const [monsterHealth, setMonsterHealth]=useState(100);
  const [turn, setTurn]=useState(0);
  const [logList, setLogList]=useState([]);

  // ----------------------------------------------------------------------------------------------------------
  // BUTTONS EVENT FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  function newGame(){
    setMyHealth(100)
    setMonsterHealth(100)
    setTurn(0)
  }
  function attackBtn(){
    const yourDamage = getRandomValue(5,12)
    setMyHealth(prev => Math.max(0, prev - yourDamage ));
    const monDamage = getRandomValue(5,12)
    setMonsterHealth(prev => Math.max(0, prev - monDamage));
    setTurn(turn + 1);
    updateLog(createLogAttack(true, yourDamage))
    updateLog(createLogAttack(false, monDamage))
  }
  function heal(){
    const myHeal = getRandomValue(8,15)
    setMyHealth(p => Math.min(100, p + myHeal))
    const monDamage = getRandomValue(5,12)
    setMyHealth(prev => Math.max(0, prev - monDamage));
    setTurn(turn + 1);
    updateLog(createLogHeal(myHeal))
    updateLog(createLogAttack(true, monDamage))
  }
  function special(){
    const monDamage = getRandomValue(8,25)
    setMonsterHealth(p => Math.max(0 ,p - monDamage))
    const yourDamage = getRandomValue(5,12)
    setMyHealth(prev => Math.max(0, prev - yourDamage));
    setTurn(0);
    updateLog(createLogAttack(true, yourDamage))
    updateLog(createLogAttack(false, monDamage))
  }
  function kill(){
    setMyHealth(0)
    setTurn(turn + 1);
  }
  // ----------------------------------------------------------------------------------------------------------
  // JSX FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  function displayGame(){
    if (myHealth <= 0){
      return(
        <GameOver title = "Monster Won!" restartGame={newGame}/>
      )
    }
    else {
      if  (monsterHealth <= 0){
      return (
        <GameOver title = "Player Won!" restartGame={newGame}/>
      )
    }
    else {
      return (
        <Controls attack={attackBtn} special={special} heal={heal} kill={kill} turn={turn}/>
      )
    }
  }
}
  function updateLog(newLog){
    setLogList(p => [...p, newLog])
  }
  

  // ----------------------------------------------------------------------------------------------------------
  // MAIN  TEMPLATE
  // ----------------------------------------------------------------------------------------------------------
  return (
    <div>
      <Entity entityName = "Monster Health" healthPercentage={monsterHealth}/>
      <Entity entityName = "Your Health" healthPercentage={myHealth} />
      {displayGame()}
      <Log logMessages={logList}/>
    </div>
    
  );
}

export default Game;
