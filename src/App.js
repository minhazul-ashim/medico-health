import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import BlogsContainer from './components/BlogsContainer/BlogsContainer';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
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
        <BlogsContainer></BlogsContainer>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;




