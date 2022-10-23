import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navigation/>
      </main>
    </BrowserRouter>
  );
}

export default App;
