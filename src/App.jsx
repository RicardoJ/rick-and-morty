import './App.css';
import { CharactersList } from './components/character-list';

function App() {
  return (
    <>
      <h1>Rick and Morty</h1>
      <main className='container'>
        <section>
          <CharactersList />
        </section>
        <aside>last viewed characters </aside>
      </main>
    </>
  );
}

export default App;
