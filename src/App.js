import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [password , setPassword] = useState('')

  const letters = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' ,'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' ,'y' , 'z']
 

  const btnhandlers = (e)=>{
    let first = (Math.random(1,100)*1000).toFixed(0)
    let str = ''
    str+=((Math.random(1,100)*1000).toFixed(0)).toString()
    str+=letters[(Math.random(0-25)*10).toFixed(0)]===undefined ? '8512@3' :letters[(Math.random(0-25)*10).toFixed(0)];
    str+=letters[(Math.random(0-25)*10).toFixed(0)]===undefined ? 'Abq' : (letters[(Math.random(0-25)*10).toFixed(0)]).toUpperCase();
    str+=letters[(Math.random(0-25)*10).toFixed(0)]===undefined ? 'Aasd' : (letters[(Math.random(0-25)*10).toFixed(0)]).toLowerCase();
    str+=((Math.random(1,2)*1000).toFixed(0));
    str+=((Math.random()*10).toFixed(0))>5 ? '@11a@' : '11@1'
    str+=letters[(Math.random(0-25)*10).toFixed(0)]===undefined ? 'Aa' : (letters[(Math.random(0-25)*10).toFixed(0)]).toUpperCase();
    str+=((Math.random(1,100)*1000).toFixed(0)).toString();
    str+=letters[(Math.random(0-25)*10).toFixed(0)]===undefined ? 'Aqa' : (letters[(Math.random(0-25)*10).toFixed(0)]).toLowerCase();
    str+=letters[(Math.random(0-25)*10).toFixed(0)]===undefined ? 'Ahjjj' : (letters[(Math.random(0-25)*10).toFixed(0)]).toLowerCase();
    str+=letters[(Math.random(0-25)*10).toFixed(0)]===undefined ? 'AcXZ' : (letters[(Math.random(0-25)*10).toFixed(0)]).toUpperCase();
    str+=letters[(Math.random(0-25)*10).toFixed(0)]===undefined ? 'Asdr' : (letters[(Math.random(0-25)*10).toFixed(0)]).toUpperCase();
    str+=letters[(Math.random(0-25)*10).toFixed(0)]===undefined ? 'Add' : (letters[(Math.random(0-25)*10).toFixed(0)]).toLowerCase();
    setPassword(str)
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
