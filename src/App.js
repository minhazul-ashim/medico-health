import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Doctors from './components/Doctors/Doctors';
import Navigation from './components/Navigation/Navigation';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Banner></Banner>
        <Services></Services>
        <Doctors></Doctors>
      </BrowserRouter>
    </div>
  );
}

export default App;