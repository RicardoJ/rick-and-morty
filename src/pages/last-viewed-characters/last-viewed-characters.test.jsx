import { render, screen } from '@testing-library/react';
import { getItem } from '@utils/storage';
import LastViewedCharacters from '.';

jest.mock('@utils/storage', () => ({
  getItem: jest.fn(),
}));

describe('LastViewedCharacters', () => {
  it('should render last viewed characters', () => {
    const characters = [
      { id: 1, name: 'Character 1' },
      { id: 2, name: 'Character 2' },
    ];

    getItem.mockReturnValue(characters);

    render(<LastViewedCharacters />);

    const titleElement = screen.getByText('Last viewed characters');
    const character1Element = screen.getByText('Character 1');
    const character2Element = screen.getByText('Character 2');

    expect(titleElement).toBeInTheDocument();
    expect(character1Element).toBeInTheDocument();
    expect(character2Element).toBeInTheDocument();
  });
});
