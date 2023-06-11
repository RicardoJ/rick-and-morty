import { getApiEndpoint } from './api.js';

export const fetchCharacters = async ({ count }) => {
  try {
    const data = await fetch(`${getApiEndpoint()}?page=${count}`);
    const { results } = await data.json();
    return results;
  } catch (e) {
    throw new Error('Error fetching characters');
  }
};

export const fetchCharacter = async id => {
  try {
    const response = await fetch(`${getApiEndpoint()}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting the character:', error);
  }
};
