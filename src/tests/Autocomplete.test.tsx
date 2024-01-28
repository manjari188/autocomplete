import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Autocomplete from '../components/Autocomplete';
import * as useSuggestionsModule from "../hooks/useSuggestions";

describe('Autocomplete Component', () => {
    const mockedInputChange = jest.fn();
    const setup = () => {
        const utils = render(<Autocomplete autosuggestionFilterUrl="mock-url" />)
        const inputElement = screen.getByPlaceholderText('Search country suggestions...');
        return {
            inputElement,
            ...utils,
        }
    }
    /**
     * Added this to mock return values from custom hook useSuggestions before each test case
     */
    beforeEach(() => {
        jest.spyOn(useSuggestionsModule, "useSuggestions").mockReturnValue({
            searchVal: 'mockSearch',
            suggestionData: [{ "id": 1, "name": "UK" }, { "id": 1, "name": "India" }],
            error: '',
            loading: false,
            handleInputChange: mockedInputChange,
        });
    });

    it('renders Autocomplete component with input and suggestion list', () => {
        const { inputElement } = setup();
        const suggestionList = screen.getByRole('listbox');
        expect(inputElement).toBeInTheDocument();
        expect(suggestionList).toBeInTheDocument();
    });

    it('render Autocomplete Input change correctly', async () => {
        const { inputElement } = setup();
        fireEvent.change(inputElement, { target: { value: 'UK' } });
        await waitFor(() => {
            expect(mockedInputChange).toHaveBeenCalledWith('UK');
        });
    });

    it('render updated value on suggestion click', () => {
        setup();
        const suggestionItem = screen.getByText('Indi');
        fireEvent.click(suggestionItem);
        expect(mockedInputChange).toBeCalled();
    })

    it('render updated value on suggestion click on key press', () => {
        setup();
        const suggestionItem = screen.getByText('Indi');
        fireEvent.keyDown(suggestionItem, { key: 'Enter' });
        expect(mockedInputChange).toBeCalled();
    })

})

describe('Autocomplete component Loading', () => {

    it('render autocomplete loading', () => {
        jest.spyOn(useSuggestionsModule, "useSuggestions").mockReturnValue({
            searchVal: 'UK',
            suggestionData: [],
            error: '',
            loading: true,
            handleInputChange: jest.fn(),
        })

        render(<Autocomplete autosuggestionFilterUrl="mock-url" />);
        const loadingMessage = screen.getByText('Loading...');
        expect(loadingMessage).toBeInTheDocument();
    })
})

describe('Autocomplete component Loading', () => {

    it('render autocomplete loading', () => {
        jest.spyOn(useSuggestionsModule, "useSuggestions").mockReturnValue({
            searchVal: 'UK',
            suggestionData: [],
            error: 'Error message',
            loading: false,
            handleInputChange: jest.fn(),
        })

        render(<Autocomplete autosuggestionFilterUrl="mock-url" />);
        const errorMessage = screen.getByText('Error message');
        expect(errorMessage).toBeInTheDocument();
    })
})