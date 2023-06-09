import Characters from '@components/characters';
import LastViewedCharacters from '../last-viewed-characters';

function Home() {
  return (
    <main className="container">
      <section>
        <Characters />
      </section>
      <LastViewedCharacters />
    </main>
  );
}

export default Home;
