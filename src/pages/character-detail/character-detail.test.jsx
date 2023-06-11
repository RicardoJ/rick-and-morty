import { render, screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '@hooks/useCharacter';
import CharacterDetail from '.';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

jest.mock('@hooks/useCharacter', () => ({
  useCharacter: jest.fn(),
}));

describe('CharacterDetail', () => {
  beforeEach(() => {
    useParams.mockReturnValue({ id: '123' });
    useCharacter.mockReturnValue({
      character: {
        name: 'Test Character',
        image: 'test-image.jpg',
        status: 'Alive',
        species: 'Human',
        type: 'Test Type',
        gender: 'Male',
        origin: { name: 'Test Origin' },
        location: { name: 'Test Location' },
      },
    });
  });

  it('should render character details', () => {
    render(<CharacterDetail />);

    expect(screen.getByText('Test Character')).toBeInTheDocument();
    expect(screen.getByAltText('Test Character')).toBeInTheDocument();
    expect(screen.getByText('Status: Alive')).toBeInTheDocument();
    expect(screen.getByText('Specie: Human')).toBeInTheDocument();
    expect(screen.getByText('Type: Test Type')).toBeInTheDocument();
    expect(screen.getByText('Gender: Male')).toBeInTheDocument();
    expect(screen.getByText('Origin: Test Origin')).toBeInTheDocument();
    expect(screen.getByText('Location: Test Location')).toBeInTheDocument();
  });

  it('should render loading when character is not available', () => {
    useCharacter.mockReturnValue({ character: null });

    render(<CharacterDetail />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
