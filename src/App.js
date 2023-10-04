import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="counter">Counter</Link>
          </li>
        </ul>
      </nav>

      <nav>
        <ul>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>

      
     
      <nav>
        <ul>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
