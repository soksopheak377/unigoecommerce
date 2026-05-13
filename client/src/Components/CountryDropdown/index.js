import React, { use } from "react";
import { useState, useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import Slide from "@mui/material/Slide";
import { AppContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [countryList, setCountryList] = useState([]);

  // get country list from context
  const contries = useContext(AppContext);

  // select country
  const selectCountry = (index, country) => {
    setSelectedTab(index);
    setIsOpenModal(false);
    contries.setSelectedCountry(country);
  };

  const handleClickOpen = () => {
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setIsOpenModal(false);
  };

  // function to filter country list
  useEffect(() => {
    setCountryList(contries.countryList);
  }, []);

  const filterList = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === "") {
      setCountryList(contries.countryList);
      return;
    }

    const filteredCountries = countryList.filter((item) => {
      return item.country.toLowerCase().includes(searchTerm);
    });
    setCountryList(filteredCountries);
    // Update the country list with the filtered results
    // You would need to set this in state or context
  };

  return (
    <>
      <Button className="countryDrop" onClick={handleClickOpen}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location </span>
          <span className="name">
            {contries.selectedCountry !== null
              ? contries.selectedCountry.length > 15
                ? contries.selectedCountry.substring(0, 15) + "..."
                : contries.selectedCountry
              : "Select Location"}
          </span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        slots={{
          transition: Transition,
        }}
        className="localModal"
      >
        <h4>Choose your Delivery Location</h4>
        <p className="">
          Enter your address and we will specify the offer for your area.
        </p>
        <button className="close_" onClick={handleClose}>
          <MdClose />
        </button>

        <div className="headerSearch w-100">
          <input
            type="text"
            placeholder="Search for products..."
            onChange={filterList}
          />
          <Button>
            <IoIosSearch />
          </Button>
        </div>

        <ul className="countryList mt-3">
          {
            // loop country list here
            countryList.length !== 0
              ? countryList.map((item, index) => {
                  return (
                    <li key={index}>
                      <button
                        className={selectedTab === index ? "active" : ""}
                        onClick={() => selectCountry(index, item.country)}
                      >
                        {item.country}
                      </button>
                    </li>
                  );
                })
              : null
          }
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
