import { useCharacters, useCounter, useScrollTop } from '../../hooks';
import { Character } from '../character';
import { Navigation } from '../navigation';
import './index.css';

export function CharactersList() {
  const { count, incrementCount, decrementPage } = useCounter();
  const { loading, characters, page, incrementPage } = useCharacters({ count });
  const { ref, scrollToTop, isVisible } = useScrollTop();
  return (
    <>
      <Navigation
        page={count}
        incrementPage={incrementCount}
        decrementPage={decrementPage}
      />
      <div className='charactersList'>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {characters.map((character) => (
              <Character key={character.id} character={character} />
            ))}
          </>
        )}
        <button
          ref={ref}
          onClick={scrollToTop}
          className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
        >
          Scroll to Top
        </button>
      </div>
    </>
  );
}
