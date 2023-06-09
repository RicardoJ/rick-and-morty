import { useLastViewed } from '../../hooks';
import Character from '../character';
import './index.css';

export default function CharactersList({
  items: characters,
  filteredItems: filteredCharacters,
  searchTerm,
  loading,
}) {
  const { handleCharacterClick } = useLastViewed();

  return (
    <div className='charactersList'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {searchTerm === ''
            ? characters.map((character) => (
                <Character
                  key={character.id}
                  character={character}
                  onClick={() => handleCharacterClick(character)}
                />
              ))
            : filteredCharacters.map((character) => (
                <Character
                  key={character.id}
                  character={character}
                  onClick={() => handleCharacterClick(character)}
                />
              ))}
        </>
      )}
    </div>
  );
}
