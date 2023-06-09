import { useCharacters, useCounter, useScrollTop } from '@hooks';
import withFilterInput from '@hoc/withFilterInput';
import CharactersList from '../character-list';
import ScrollToTopButton from '../scroll-to-top-button';
import Navigation from '../navigation';

export default function Characters() {
  const { count, incrementCount, decrementPage } = useCounter();
  const { loading, characters } = useCharacters({ count });
  const { ref, scrollToTop, isVisible } = useScrollTop();
  const CharactersListWithInput = withFilterInput(
    CharactersList,
    characters,
    loading,
  );

  return (
    <>
      <Navigation
        page={count}
        incrementPage={incrementCount}
        decrementPage={decrementPage}
      />
      <CharactersListWithInput />
      <ScrollToTopButton
        ref={ref}
        scrollToTop={scrollToTop}
        isVisible={isVisible}
      />
    </>
  );
}
