import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
    it('renders App component with logo', () => {
        render(<App />);
        const logoElement = screen.getByRole('img');
        expect(logoElement).toBeInTheDocument();
    });
});
