import { useMemo, useState } from "react";
import { Suggestion } from "../types/suggestion";
import { debounce } from "../utitlity/debounce";
import fetchData from "../services/api";

/**
 * props type for useSuggestions Hook
 */
interface SuggestionsHook {
  searchVal: string;
  suggestionData: Array<Suggestion>;
  error: string | null;
  handleInputChange: (text: string) => void;
  loading: boolean;
}

/**
 * 
 * @param autosuggestionFilterUrl - To make this component re-usable so that API value can be changed for different scenarios
 * @returns 
 */
export function useSuggestions(autosuggestionFilterUrl: string): SuggestionsHook {

  const [searchVal, setSearchVal] = useState<string>("");
  const [suggestionData, setSuggestionData] = useState<Array<Suggestion>>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * This method resets the states of this component
   */
  const resetStates = () =>{
    setSuggestionData([]);
    setLoading(true);
    setError(null);
  }

  /**
   * This method fetches the suggested values through API
   */
  const fetchSuggestionData = debounce(async () => {
    try {
      if(searchVal === ""){
        resetStates();
        return;
      }
      const jsonData = await fetchData(autosuggestionFilterUrl, searchVal);
      setSuggestionData(jsonData);
    } catch (error) {
      setError((error as Error)?.message);
    } finally {
      setLoading(false);
    }
  });

  // This helps to optimize performance by only re-running fetchSuggestionData when searchVal changes
  useMemo(() => {
    fetchSuggestionData();
  }, [searchVal])

  /**
   * This method is called on onchange event of search input value
   * @param text - The search input value
   */
  const handleInputChange = (text: string) => {
    setSearchVal(text);
    setLoading(true);
  }

  return {
    searchVal,
    suggestionData,
    error,
    handleInputChange,
    loading
  };
}