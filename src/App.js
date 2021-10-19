import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import BlogPost from './components/BlogPost/BlogPost';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import NoPage from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import AuthProvider from './contexts/AuthProvider';
import AllDoctors from '../src/components/AllDoctors/AllDoctors'
import BlogsContainer from './components/BlogsContainer/BlogsContainer';
import AllServices from '../src/components/AllServices/AllServices'
import ContactForm from './components/ContactForm/ContactForm';
import Doctors from './components/Doctors/Doctors';

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
            <PrivateRoute path='/contact'>
              <ContactForm></ContactForm>
            </PrivateRoute>
            <PrivateRoute path='/doctors'>
              <AllDoctors></AllDoctors>
            </PrivateRoute>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            {/* <Route path='/doctors'>
              <AllDoctors></AllDoctors>
            </Route> */}
            <Route path='/services'>
              <AllServices></AllServices>
            </Route>
            <Route path='/blogpost/:title'>
              <BlogsContainer></BlogsContainer>
            </Route>
            <Route path='*'>
              <NoPage></NoPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;




