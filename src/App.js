import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';

// import Allproducts from './Pages/Allproducts/Allproducts';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Authprovider from './Context/Authprovider';
import Purchase from './Pages/Purchase/Purchase';
// import Orders from './Pages/Orders/Orders';
import Myorders from './Pages/Myorders/Myorders';
import Makeadmin from './Pages/Makeadmin/Makeadmin';
import Privateroute from './Privateroute/Privateroute';
import Adminroute from './Adminroute/Adminroute';
import Makereview from './Pages/Makereview/Makereview';
import Footer from './Pages/Footer/Footer';

// import Notfound from './Pages/Notfound/Notfound';
// import Pay from './Pages/Pay/Pay';
import AddCourse from './Pages/AddCourse/AddCourse';
import ManageCourse from './Pages/ManageCourse/ManageCourse';

function App() {
  return (   

    <>
      <Authprovider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/signin">
              <Signin></Signin>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route exact path="/toys">
              <Allproducts></Allproducts>
            </Route>

            {/* <Privateroute path="/toys/:id">
              <Purchase></Purchase>
            </Privateroute> */}
            <Privateroute path="/myorders">

              <Myorders></Myorders>
            </Route>
            <Route path="/makereviews">
              <Makereview></Makereview>
            </Route>
            <Privateroute path="/pay">
              <Pay></Pay>
            </Privateroute>
            <Route path="/makeadmin">
              <Makeadmin></Makeadmin>
            </Route>
            <Route path="/addcourse">
              <AddCourse></AddCourse>
            </Route>
            <Route path="/managecourse">
              <ManageCourse></ManageCourse>
            </Route>
            <Adminroute path="/orders">
              <Orders></Orders>
            </Adminroute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </Authprovider>
    </>
  );
}

export default App;
