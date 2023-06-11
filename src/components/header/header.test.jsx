import Header from '.';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Header', () => {
  it('should the Header component exported correctly', () => {
    expect(Header).toBeDefined();
  });

  it('should render the header text', () => {
    render(<Header />);
    const headerElement = screen.getByText('Rick and Morty');
    expect(headerElement).toBeInTheDocument();
  });

  it('should call navigateTo when header is clicked', () => {
    const navigateToMock = jest.fn();
    useNavigate.mockReturnValue(navigateToMock);

    render(<Header />);
    const headerElement = screen.getByText('Rick and Morty');
    fireEvent.click(headerElement);

    expect(navigateToMock).toHaveBeenCalledWith('/');
  });
});
