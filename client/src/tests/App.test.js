import { render, screen } from '@testing-library/react';
import App from '../App';
import { Cards } from '../components/Cards';

test('should render Add new button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add new/i);
  expect(linkElement).toBeInTheDocument();
});

test('should render Cards', () => {
  render(<Cards 
    location={{ aboutProps: '1d8c8b8c87ba4d639eac9944', }}
  />);
  const linkElement = screen.getByText(/Add new/i);
  expect(linkElement).toBeInTheDocument();
});
