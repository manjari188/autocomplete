import React, { ChangeEvent, useEffect, useRef } from "react";
import TextHighlighter from "./TextHighliter";
import { useSuggestions } from "../hooks/useSuggestions";
import { NO_MATCH } from '../constants';
import '../styles/Autocomplete.css';

/**
 * props type for Autocomplete Component
 */
interface AutocompleteProps {
    autosuggestionFilterUrl: string;
}

/**
 * returns Autocomplete component
 */
const Autocomplete: React.FC<AutocompleteProps> = ({ autosuggestionFilterUrl }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { searchVal, suggestionData, error, handleInputChange, loading } = useSuggestions(autosuggestionFilterUrl);
    const noResult = suggestionData.length === 0 && searchVal && !loading && !error;

    /**
     * This is used to focus on search input when page loads
     */
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    /**
     * This method updates search input value on change 
     * @param evt - On change event
     */
    const searchInput = (evt: ChangeEvent<HTMLInputElement>) => {
        handleInputChange(evt.target.value);
    }

    /**
     * This method updates search Input value on click of Suggestion list
     * @param evt - on click event
     */
    const setSelectedVal = (evt: React.MouseEvent<HTMLLIElement>) => {
        handleInputChange((evt.target as HTMLInputElement).innerText);
    }

    /**
     * This method updates search Input value on click of Suggestion list through keyboard
     * @param evt - on keydown event
     */
    const setSelectedValKey = (evt: React.KeyboardEvent<HTMLLIElement>) => {
        if (evt.key === 'Enter') {
            handleInputChange((evt.target as HTMLInputElement).innerText);
        }
    }

    return (
        <form className="autocomplete-form" aria-label="Search Form">
            <div className="autocomplete-input-section">
                <input type="text" ref={inputRef} value={searchVal} onChange={searchInput} className="autocomplete-input" placeholder="Search country suggestions..." aria-label="Search for suggestions" />
            </div>
            {(suggestionData.length > 0 || loading) &&
                <ul className="autocomplete-list" role="listbox" aria-label="Suggestions">
                    {loading && <li className="loading-section">Loading...</li>}
                    {suggestionData.map((suggestion, index) => (
                        <li onKeyDown={setSelectedValKey} onClick={setSelectedVal} tabIndex={0} key={index} role="option">
                            <TextHighlighter suggestedName={suggestion.name} searchVal={searchVal}></TextHighlighter>
                        </li>
                    ))}
                </ul>
            }
            {noResult && <div className="noresult-section">{NO_MATCH}</div>}
            {error && <p className="error-section">{error}</p>}
        </form>
    )
};

export default Autocomplete;
