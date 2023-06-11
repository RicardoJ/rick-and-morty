import { render, screen, fireEvent } from '@testing-library/react';
import CharactersList from '.';

jest.mock('@hooks', () => {
  const handleCharacterClickMock = jest.fn();
  return {
    useLastViewed: () => ({
      handleCharacterClick: handleCharacterClickMock,
    }),
  };
});

describe('CharacterList', () => {
  it('should the CharacterList component exported correctly', () => {
    expect(CharactersList).toBeDefined();
  });

  it('should renders list of characters', () => {
    const characters = [
      { id: 1, name: 'Rick Sanchez', image: 'https://example.com/rick.png' },
      { id: 2, name: 'Morty Smith', image: 'https://example.com/morty.png' },
    ];

    render(
      <CharactersList
        items={characters}
        filteredItems={[]}
        searchTerm=""
        loading={false}
      />,
    );

    const characterElements = screen.getAllByRole('heading', {
      name: /Rick Sanchez|Morty Smith/,
    });
    expect(characterElements).toHaveLength(2);
  });

  it('should calls handleCharacterClick when character is clicked', () => {
    const characters = [
      { id: 1, name: 'Rick Sanchez', image: 'https://example.com/rick.png' },
    ];

    render(
      <CharactersList
        items={characters}
        filteredItems={[]}
        searchTerm=""
        loading={false}
      />,
    );

    const characterElement = screen.getByRole('heading', {
      name: 'Rick Sanchez',
    });
    fireEvent.click(characterElement);
    const handleCharacterClickMock =
      require('@hooks').useLastViewed().handleCharacterClick;

    expect(handleCharacterClickMock).toHaveBeenCalledTimes(1);
    expect(handleCharacterClickMock).toHaveBeenCalledWith(characters[0]);
  });
});
