import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
         <a className="App-link-2" 
         href='https://naudyweb.com'>Hola NaudyWeb</a>  
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende sobre React
        </a>
      </header>
    </div>
  );
}

export default App;
