import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders RQ Users Page title', () => {
    render(<App />);
    const linkElement = screen.getByText(/RQ Users Page/i);
    expect(linkElement).toBeInTheDocument();
  });
});
