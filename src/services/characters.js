export const fetchCharacters = async () => {
  try {
    const data = await fetch(import.meta.env.VITE_FE_URL_ENDPOINT);
    const { results } = await data.json();
    return results;
  } catch (e) {
    throw new Error('Error fetch characters');
  }
};
