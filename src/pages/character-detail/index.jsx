import { useParams } from 'react-router-dom';
import { useCharacter } from '../../hooks/useCharacter';
import './index.css';

function CharacterDetail() {
  const params = useParams();
  const { character } = useCharacter(params.id);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className='details'>
      <div className='card'>
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name} />
        <div className='information'>
          <p>Status: {character.status || '-'}</p>
          <p>Specie: {character.species || '-'}</p>
          <p>Type: {character.type || '-'}</p>
          <p>Gender: {character.gender || '-'}</p>
          <p>Origin: {character.origin.name || '-'}</p>
          <p>Location: {character.location.name || '-'}</p>
        </div>
      </div>
    </div>
  );
}
export default CharacterDetail;
