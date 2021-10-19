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
            <Route path='/blogpost/:title'>
              <BlogPost></BlogPost>
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




