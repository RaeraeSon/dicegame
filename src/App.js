import Board from './Board';
import { useState } from 'react';
import Button from './Button';
import './App.css';
import './Board.css';
import logo from './assets/logo.png';

const random=n=> Math.ceil(Math.random()*n);

function App(){
  const [myHistory, setMyHistory]=useState([]);
  const [otherHistory, setOtherHistory]=useState([]);

  const handleRollClick=()=>{
    const nextMyNum=random(6);
    const nextOtherNum=random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };
 
  
  const handleClearClick=()=> {
    setMyHistory([]);
    setOtherHistory([]);
  }

 
  return (
    <div className='App'>
      <div>
        <img src={logo} className='App-logo' />
        <h1 className='App-title'>주사위 게임</h1>
        <Button className='App-button' color='blue' onClick={handleRollClick}>던지기</Button>
        <Button className='App-button' color='red' onClick={handleClearClick}>처음부터</Button>
      </div>
      <div className='App-boards'>
        <Board name='나' color='blue'  gameHistory={myHistory} className='App-board' />
        <Board name='상대' color='red' gameHistory={otherHistory} className='App-board'/>
      </div>
    </div>
  );
}

export default App;