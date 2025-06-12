import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('renders site title', () => {
    render(<Navbar />);
    expect(screen.getByText('Mi Portfolio')).toBeInTheDocument();
  });
});
