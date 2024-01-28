import './App.css';
import logo from './assets/images/logo.svg';
import Autocomplete from './components/Autocomplete';
import { useSuggestions } from './hooks/useSuggestions';

function App() {

  const apiUrl = `https://manjari188.github.io/AutocompleteJSON/autocomplete.json`;

  const { searchVal, suggestionData, error, handleInputChange, loading } = useSuggestions(apiUrl);


  return (
    <div className="App">
      <header className="App-header">
        <a className='App-header-logo'><img alt="Logo" src={logo}></img></a>
      </header>
      <Autocomplete error={error} loading={loading} searchVal={searchVal} handleInputChange={handleInputChange} suggestionData={suggestionData}></Autocomplete>
    </div>
  );
}

export default App;
