import { render, screen } from '@testing-library/react';
import App from './App';

test('should render logo', () => {
  render(<App />);
  const img = screen.getByAltText('logo');
  expect(img).toBeInTheDocument();
});
