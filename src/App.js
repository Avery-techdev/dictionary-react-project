import dictionary from './dictionary.svg';
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App Container">
      <header className="App-header">
        <img src={dictionary} className="App-logo" alt="logo" />
        <span>
         ictionary
        </span>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer> 
        open source <a href="https://github.com/Avery-techdev/dictionary-react-project">code</a> by Annabell Hauschild
      </footer> 
    </div>
  );
}
