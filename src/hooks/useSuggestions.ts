import { useMemo, useState } from "react";
import { Suggestion } from "../types/suggestion";
import { debounce } from "../utitlity/debounce";

export function useSuggestions(apiUrl: string) {

  const [searchVal, setSearchVal] = useState<string>("");
  const [suggestionData, setSuggestiondata] = useState<Array<Suggestion>>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchSuggestionData = debounce(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${apiUrl}`,
        {mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      )
      if (!response.ok) {
        throw new Error(`Status: ${response.status}`);
      }
      const responseData = await response.json();
      setSuggestiondata(responseData);
    } catch (error) {
      setError(error as Error);
    }
    finally {
      setLoading(false); 
    }
  });

  useMemo(() => {
    fetchSuggestionData();
  }, [searchVal])

  const handleInputChange = (text: string) => {
    setSearchVal(text);
  }

  return {
    searchVal,
    suggestionData,
    error,
    handleInputChange,
    loading
  };
}