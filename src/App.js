import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { createContext, setCountryList, useEffect, useState } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Listing from "./Pages/Listing";
import Header from "./Components/Header";
import axios from "axios";
import Footer from "./Components/Footer";

// createcontext
const AppContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    getCountryList("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountryList = async (url) => {
    const response = await axios.get(url).then((response) => {
      setCountryList(response.data.data);
      return response;
    });
  };
  const values = { countryList, setSelectedCountry, selectedCountry };
  return (
    <BrowserRouter>
      {/* provide data */}
      <AppContext.Provider value={values}>
        {/* header */}
        <Header />
        {/* router */}
        <Routes>
          {/* routes */}
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
        </Routes>

        {/* footer */}
        <Footer/> 
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { AppContext };
