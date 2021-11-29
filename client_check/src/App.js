import React , {useEffect ,useState} from 'react'
import { BrowserRouter as  Router,Switch,Route } from 'react-router-dom';
import Header from "./__components/1__Header/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import Product from './__components/2__Home/Products/Product';
import About from './__components/3__About/About';
import Home from './__components/2__Home/Home';
import Footer from './__components/4__Footer/Footer';
import Login from './__components/0__ADMIN/Login';
import AddProducts from './__components/0__ADMIN/AddProducts';
import SignUp from './__components/0__ADMIN/SignUp';
import Admin from './__components/0__ADMIN/Admin';
import ProductDetail from './__components/5__DynamicRoute/ProductDetail';

function App() {

  const [checkUser , setCheckUser] = useState(false);
  useEffect(async()=>{
    try{
      const res = await fetch("/userLoggedIn" , {
      method:"GET" ,
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      } , 
      credentials:"include"
    });
    const data = await res.json();
    console.log(data);
    if(data)
    {setCheckUser(true)}
    
  }catch(err){
      console.log(err)
    }


  },[])
  
console.log(checkUser)

  return (
    <div>
     
          {
            checkUser ? 
              <>
              <Router>
        <Header/>
        <Switch>
        <Route path='/admin'>
            <Admin/>
          </Route>
          <Route path='/products'>
            <Product/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
              <Route path="/addproducts">
                <AddProducts/>
              </Route>
              <Route path="/signUp" >
                  <SignUp/>
              </Route>
              <Route path="/product/:id">
            <ProductDetail/>
            </Route> 
              <Route path='/'>
            <Home/>
          </Route>
        </Switch>
        <Footer/>
     </Router>
              </>
            : 
            <>
            <Router>
        <Header/>
        <Switch>
        <Route path='/admin'>
            <Admin/>
          </Route>
          <Route path='/products'>
            <Product/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path="/product/:id">
            <ProductDetail/>
            </Route> 
           <Route path='/'>
            <Home/>
            </Route>
        </Switch>
        <Footer/>
     </Router>
            </> 
          }
          
          
    </div>
  );
}

export default App;
