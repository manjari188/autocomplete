import { Suggestion } from "../types/suggestion";
import '../styles/Autocomplete.css'
import { ChangeEvent, useEffect, useRef, useState } from "react";

const Autocomplete: 
React.FC<{ suggestionData: Array<Suggestion>, searchVal: string, handleInputChange: Function, error:Error|null, loading:boolean }> = 
({ suggestionData, searchVal, handleInputChange, error, loading }) => {

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, []);

    const searchInput = (evt: ChangeEvent<HTMLInputElement>) => {
        handleInputChange(evt.target.value);
    }

    return (
        <form className="autocomplete-form" aria-label="Search Form">
            <div className="autocomplete-input-section">
                <input ref={inputRef} value={searchVal} onChange={searchInput} className="autocomplete-input" placeholder="Search for suggestions..." aria-label="Search for suggestions" />
            </div>
            {suggestionData &&
                <ul className="autocomplete-list" role="listbox" aria-label="Suggestions">
                    {suggestionData.map((suggestion) => (
                        <li key={suggestion.name} role="option" aria-selected={false}>{suggestion.name}</li>
                    ))}
                </ul>}
        </form>
    )
};

export default Autocomplete;