import { getItem } from '../../utils/storage';

function LastViewedCharacters() {
  const storedLastViewedCharacters = getItem('lastViewedCharacters') || [];

  return (
    <aside>
      <h2>Last viewed characters</h2>
      <ul>
        {storedLastViewedCharacters.map((character, index) => (
          <li key={`${character.id}-${index}`}>{character.name}</li>
        ))}
      </ul>
    </aside>
  );
}

export default LastViewedCharacters;
