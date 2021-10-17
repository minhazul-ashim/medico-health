import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Navigation from './components/Navigation/Navigation';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Banner></Banner>
        <Services></Services>
      </BrowserRouter>
    </div>
  );
}

export default App;