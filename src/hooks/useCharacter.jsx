import { useEffect, useState } from 'react';
import { fetchCharacter } from '@services/characters';

export function useCharacter(id) {
  const [character, setCharacter] = useState(null);

  const getCharacter = async () => {
    const newCharacter = await fetchCharacter(id);
    setCharacter(newCharacter);
  };

  useEffect(() => {
    getCharacter();
  }, [id]);

  return { character };
}
