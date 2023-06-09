import CharactersList from '../character-list';
import ScrollToTopButton from '../scroll-to-top-button';
import { useCharacters, useCounter, useScrollTop } from '../../hooks';
import Navigation from '../navigation';

export default function Characters() {
  const { count, incrementCount, decrementPage } = useCounter();
  const { loading, characters } = useCharacters({ count });
  const { ref, scrollToTop, isVisible } = useScrollTop();
  return (
    <>
      <Navigation
        page={count}
        incrementPage={incrementCount}
        decrementPage={decrementPage}
      />

      <CharactersList characters={characters} loading={loading} />
      <ScrollToTopButton
        ref={ref}
        scrollToTop={scrollToTop}
        isVisible={isVisible}
      />
    </>
  );
}
