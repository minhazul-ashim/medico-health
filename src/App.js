import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Banner></Banner>
      </BrowserRouter>
    </div>
  );
}

export default App;