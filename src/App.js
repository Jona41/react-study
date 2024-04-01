import logo from './logo.svg';
import './App.css';
import Home from './home'
import { useState } from 'react';

function App() {
  const [name, setName] = useState({name:'龙军林4444777'});
  const [name, setName] = useState({name:'龙军林4444999'});
  console.log(name,setName);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload111.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <Home {...name} />
      </header>
    </div>
  );
}

export default App;
