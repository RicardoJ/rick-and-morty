import { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/characters';

export function useCharacters() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const getCharacters = async () => {
    const newCharacters = await fetchCharacters();
    setCharacters(newCharacters);
    setLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, [page]);

  return { characters, loading };
}
