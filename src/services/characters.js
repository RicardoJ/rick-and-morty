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

export const fetchCharacter = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_FE_URL_ENDPOINT}/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error get the character:', error);
  }
};
