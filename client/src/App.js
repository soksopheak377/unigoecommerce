import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { createContext, setCountryList, useEffect, useState } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Listing from "./Pages/Listing";
import Header from "./Components/Header";
import axios from "axios";
import Footer from "./Components/Footer";
import ProductDetail from "./Pages/ProductDetail";
import Carts from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

// createcontext
const AppContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    getCountryList("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountryList = async (url) => {
    const response = await axios.get(url).then((response) => {
      setCountryList(response.data.data);
      return response;
    });
  };
  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry,
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    isLogin,
    setIsLogin
  };
  return (
    <BrowserRouter>
      {/* provide data */}
      <AppContext.Provider value={values}>
        {/* header */}
        {
          isHeaderFooterShow === true && <Header />
        }
        {/* router */}
        <Routes>
          {/* routes */}
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
          <Route path="/product/:id" exact={true} element={<ProductDetail />} />
          <Route path="/cart" exact={true} element={<Carts />} />
          <Route path="/signin" exact={true} element={<SignIn />} />
          <Route path="/signup" exact={true} element={<SignUp />} />
        </Routes>

        {/* footer */}
        {
          isHeaderFooterShow === true && <Footer />
        }
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { AppContext };
