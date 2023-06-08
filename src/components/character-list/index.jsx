import { useCharacters } from '../../hooks/useCharacters';
import { Character } from '../character';

export function CharactersList() {
  const { loading, characters } = useCharacters();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {characters.map((character) => (
            <Character key={character.id} character={character} />
          ))}
        </>
      )}
    </>
  );
}
