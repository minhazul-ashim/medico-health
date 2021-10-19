import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import BlogsContainer from './components/BlogsContainer/BlogsContainer';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Services from './components/Services/Services';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <PrivateRoute path='/service/:id'>
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
          </Switch>
          <Switch>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
          </Switch>
          <Banner></Banner>
          <Services></Services>
          <Doctors></Doctors>
          <BlogsContainer></BlogsContainer>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;




