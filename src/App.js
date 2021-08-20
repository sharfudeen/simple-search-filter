import { React, useState, useEffect } from "react";
import SearchFilter from "./components/filter";
import Cars from "./components/cars";
import "./App.css";
import axios from "axios";

const getCars = () => {
  return axios.get("https://5cdd0a92b22718001417c19d.mockapi.io/api/cars");
};

function App() {
  const [carsDetails, setCarsDetails] = useState([]);
  console.log("carDeatils", carsDetails);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getCars().then((response) => {
      setCarsDetails(response.data);
    });
  }, []);
  const handleSearchText = (value) => {
    setSearchText(value);
    if (value === "") {
      getCars().then((response) => {
        setCarsDetails(response.data);
      });
    } else {
      setCarsDetails(
        carsDetails.filter((carsDetails, index) => {
          return (carsDetails.productName) == value;
        })
      );
    }
  };
  console.log("searchText ::", searchText);
  return (
    <>
      <div className="flex flex-row flex-wrap w-10/12 mx-auto mt-10">
        <div className="w-full">
          <input
            type="text"
            name="search"
            className="w-full px-3 py-1 border-2 rounded-md focus:outline-none"
            placeholder="Search"
            onChange={(e) => handleSearchText(e.target.value)}
          />
        </div>
        <SearchFilter />
        <Cars carsDetails={carsDetails} />
      </div>
    </>
  );
}

export default App;
