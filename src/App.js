import logo from './logo.svg';
import './App.css';
import TimeComponent from './components/TimeComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TimeComponent />
        <p> Right now it is {} </p>
        <TimeComponent />
      </header>
    </div>
  );
}

export default App;
