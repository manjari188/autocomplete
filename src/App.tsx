import './App.css';
import logo from './assets/images/logo.svg';
import Autocomplete from './components/Autocomplete';
import { SUGGESTIONS_API } from './constants';

/**
 * 
 * @returns the App component
 */
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <a className='App-header-logo'><img alt="Logo" src={logo}></img></a>
      </header>
      <Autocomplete autosuggestionFilterUrl={SUGGESTIONS_API}></Autocomplete>
    </div>
  );
}

export default App;
