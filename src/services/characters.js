export const fetchCharacters = async ({ count }) => {
  try {
    const data = await fetch(
      `${import.meta.env.VITE_FE_URL_ENDPOINT}?page=${count}`
    );
    const { results } = await data.json();
    return results;
  } catch (e) {
    throw new Error('Error fetch characters');
  }
};
