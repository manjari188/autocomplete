import { render } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {

    it('renders App component with logo', () => {
      const { getByAltText } = render(<App />);
      const logoElement = getByAltText('Logo');
      expect(logoElement).toBeInTheDocument();
    });

})