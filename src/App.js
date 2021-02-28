import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/ClientComponents/Header/Header";
import Home from "./Containers/ClientContainer/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Containers/ClientContainer/Checkout/Checkout";
import Login from "./Containers/ClientContainer/Login/Login";
import { auth } from "./firebase/firebase";
import { useStateValue } from "./StateProvider/StateProvider";
import Payment from "./Containers/ClientContainer/Payment/Payment";
import Orders from "./Containers/ClientContainer/Orders/Orders";
import HeaderAdm from "./Components/AdminComponents/HeaderAdm/HeaderAdm";
import SideMenu from "./Components/AdminComponents/SideMenu/SideMenu";
import ProductsAdm from "./Containers/AdminContainer/ProductsAdm/ProductsAdm";
import AddProducts from "./Containers/AdminContainer/AddProducts/AddProducts";
import AdmLogin from "./Containers/AdminContainer/AdmLogin/AdmLogin";
import Register from "./Containers/ClientContainer/Register/Register";
function App() {
  const [{ user, basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user just logged i nor the usser was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  let routes = (
    <Switch>
      <Route exact path="/Admin">
        <AdmLogin />
      </Route>
      <Route path="/orders">
        <Header />
        <Orders />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/payment">
        <Header />
        <Payment />
      </Route>
      <Route path="/checkout">
        <Header />
        <Checkout />
      </Route>

      <Route exact path="/">
        <Header />
        <Home />
      </Route>
    </Switch>
  );
  if (user?.uid === "rDZNR2R7TfN1SFONuyiPhbFbHOJ3") {
    routes = (
      <Switch>
        <Route path="/Admin/AddProduct">
          <div className="homeadmini">
            <div className="header__adm">
              <HeaderAdm />
            </div>
            <div className="MainAdm__panel">
              <SideMenu />
              <AddProducts />
            </div>
          </div>
        </Route>

        <Route forceRefresh={true} exact path="/Admin/Home">
          <div className="homeadmini">
            <div className="header__adm">
              <HeaderAdm />
            </div>
            <div className="MainAdm__panel">
              <SideMenu />
              <ProductsAdm />
            </div>
          </div>
        </Route>
        <Route exact path="/Admin">
          <AdmLogin />
        </Route>
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/payment">
          <Header />
          <Payment />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
          <Header />
        </Route>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    );
  }
  return (
    //BEM
    <Router>
      <div className="app">{routes}</div>
    </Router>
  );
}

export default App;
