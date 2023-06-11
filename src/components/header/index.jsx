import { useNavigate } from 'react-router-dom';
import './index.css';

function Header() {
  const navigateTo = useNavigate();

  return (
    <h1 className="header" onClick={() => navigateTo('/')}>
      Rick and Morty
    </h1>
  );
}

export default Header;
