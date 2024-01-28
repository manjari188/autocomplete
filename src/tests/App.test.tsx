import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import * as useUsersModule from "../hooks/useSuggestions";

// Mock the useSuggestions hook to control its behavior
// jest.mock('../hooks/useSuggestions', () => ({
//     useSuggestions: jest.fn(() => ({
//       searchVal: '',
//       suggestionData: [],
//       error: null,
//       handleInputChange: jest.fn(),
//       loading: false,
//     })),
//   }));

describe('App Component', () => {

    it('renders without crashing', () => {
        render(<App />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument(); // Assumes a loading state initially
      });
})