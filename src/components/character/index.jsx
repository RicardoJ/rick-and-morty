import './index.css';
export default function Character({ character, onClick }) {
  return (
    <div className="character" onClick={onClick} data-testid="character">
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
    </div>
  );
}
