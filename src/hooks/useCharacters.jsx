import { useEffect, useState } from 'react';
import { fetchCharacters } from '@services/characters';

export function useCharacters({ count }) {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const newCharacters = await fetchCharacters({ count });
    setCharacters(newCharacters);
    setLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, [count]);

  return { characters, loading };
}
