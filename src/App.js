import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [password , setPassword] = useState('')

  var letters = 'abcdefghijklmnopqrstuvwxyz1234567890@ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 

  const btnhandlers = (e)=>{
    let temp = letters.split('')
    let str = ''
    for(let i=0; i<15; i++){
      let ind = Math.floor(Math.random()*100)%63
      str+=temp[ind]
    }
    console.log(str)  
  }
  const copyPassword = (e)=>{
    if(password!=='')alert(`Success copied  ${password}`)
    else alert('Generate Password')
  }
  return (
    <div className="App">
      <button onClick={btnhandlers}>Generate Password</button>
      <div>{password}</div>
      <button onClick={copyPassword}>Copy</button>
    </div>
  );
}

export default App;
