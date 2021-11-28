import { BrowserRouter as  Router,Switch,Route } from 'react-router-dom';
import Header from "./__components/1__Header/Header";
import Carousel from './__components/2__Home/Carousel';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import Product from './__components/2__Home/Products/Product';
import About from './__components/3__About/About';
import Home from './__components/2__Home/Home';
import Footer from './__components/4__Footer/Footer';
import Login from './__components/0__ADMIN/Login';
function App() {
  return (
    <div>
     <Router>
        <Header/>
        <Switch>
          <Route path='/products'>
            <Product/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
        <Footer/>
     </Router>
    </div>
  );
}

export default App;
