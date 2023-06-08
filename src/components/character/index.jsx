import './index.css';
export function Character({ character }) {
  return (
    <div className='character'>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
    </div>
  );
}
