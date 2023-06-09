import { useEffect, useState } from 'react';
import { getItem, setItem } from '../utils/storage';
import { useNavigate } from 'react-router-dom';

export function useLastViewed() {
  const navigateTo = useNavigate();
  const [lastViewedCharacters, setLastViewedCharacters] = useState(
    getItem('lastViewedCharacters') || []
  );

  useEffect(() => {
    const storedLastViewedCharacters = getItem('lastViewedCharacters');
    if (storedLastViewedCharacters) {
      setLastViewedCharacters(storedLastViewedCharacters);
    }
  }, []);

  useEffect(() => {
    setItem('lastViewedCharacters', lastViewedCharacters);
  }, [lastViewedCharacters]);

  const handleCharacterClick = (character) => {
    setLastViewedCharacters((prevState) => {
      const updatedList = [character, ...prevState];
      if (updatedList.length > 5) {
        updatedList.pop();
      }
      return updatedList;
    });

    navigateTo(`/characters/${character.id}`);
  };

  return { lastViewedCharacters, handleCharacterClick };
}
