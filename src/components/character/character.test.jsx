import { fireEvent, render, screen } from '@testing-library/react';
import Character from '.';

describe('Character', () => {
  it('should the Character component exported correctly', () => {
    expect(Character).toBeDefined();
  });

  it('should renders character name and image', () => {
    const character = {
      name: 'Rick Sanchez',
      image: 'https://example.com/rick.png',
    };

    render(<Character character={character} />);

    const nameElement = screen.getByText(character.name);
    expect(nameElement).toBeInTheDocument();

    const imageElement = screen.getByAltText(character.name);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', character.image);
  });

  it('should calls onClick handler when character is clicked', () => {
    const character = {
      name: 'Rick Sanchez',
      image: 'https://example.com/rick.png',
    };
    const onClickMock = jest.fn();

    render(<Character character={character} onClick={onClickMock} />);

    const characterElement = screen.getByTestId('character');
    fireEvent.click(characterElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
