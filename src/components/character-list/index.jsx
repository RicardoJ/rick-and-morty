import Character from '../character';
import './index.css';

export default function CharactersList({ characters, loading }) {
  return (
    <div className='charactersList'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {characters.map((character) => (
            <Character key={character.id} character={character} />
          ))}
        </>
      )}
    </div>
  );
}
