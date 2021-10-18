import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import BlogsContainer from './components/BlogsContainer/BlogsContainer';
import Doctors from './components/Doctors/Doctors';
import Navigation from './components/Navigation/Navigation';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>

        </Switch>
        <Banner></Banner>
        <Services></Services>
        <Doctors></Doctors>
        <BlogsContainer></BlogsContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;




