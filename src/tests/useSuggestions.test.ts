import { renderHook, act } from '@testing-library/react';
import { useSuggestions } from '../hooks/useSuggestions';
import { Suggestion } from '../types/suggestion';


describe('useSuggestion hook', () => {
    const mockAutosuggestionFilterUrl = 'mock-url';
    const setup = () => {
        const { result } = renderHook(() => useSuggestions(mockAutosuggestionFilterUrl));
        return {
            result
        }
    }
    it('render values correctly', () => {
        const { result } = setup();

        expect(result.current.searchVal).toBe('');
        expect(result.current.suggestionData).toEqual([]);
        expect(result.current.error).toBe(null);
        expect(result.current.loading).toBe(false);

        act(() => {
            result.current.handleInputChange('UK');
        });

        expect(result.current.searchVal).toBe('UK');
        expect(result.current.loading).toBe(true);
    })
})