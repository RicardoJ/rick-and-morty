import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@components/header';
import Home from '@pages/home';
import CharacterDetail from '@pages/character-detail';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
