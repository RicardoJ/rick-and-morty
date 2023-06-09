import Character from '../character';
import './index.css';

export default function CharactersList({
  items: characters,
  filteredItems: filteredCharacters,
  searchTerm,
  loading,
}) {
  return (
    <div className='charactersList'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {searchTerm === ''
            ? characters.map((character) => (
                <Character key={character.id} character={character} />
              ))
            : filteredCharacters.map((character) => (
                <Character key={character.id} character={character} />
              ))}
        </>
      )}
    </div>
  );
}
