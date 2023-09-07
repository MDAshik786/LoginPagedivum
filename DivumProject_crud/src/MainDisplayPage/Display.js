import React, { useEffect, useState } from "react";
import "./Display.css";
import axios from "axios";
import { apiUrl } from "../Constrains/URL";
import { useNavigate } from "react-router-dom";
import ToptoBottom from "./ToptoBottom";
import SearchBar from "../SearchBar/SearchBar.js";
import BottomtoTop from "./BottomtoTop";

const Display = () => {
  const [apiData, setapiData] = useState("");
  const [search, setSearch] = useState("");
  const [Deleteid, setDeleteid] = useState("");
  const [arrow, setarrow] = useState(true);

  const callApiDataa = async () => {
    const data = await axios.get(apiUrl);
    setapiData(data.data);
  };
  useEffect(() => {
    const myTimeout = setTimeout(() => {
      callApiDataa();
    }, 1000);

    return () => {
      clearTimeout(myTimeout);
    };
  }, []);

  function CancelConform() {
    const deleteContainer = document.querySelector(".delete-container");
    deleteContainer.style.opacity = "0";
  }

  function deleteStart(id) {
    const deleteContainer = document.querySelector(".delete-container");
    deleteContainer.style.opacity = "1";
    setDeleteid(id);
  }


  const deleteValue = async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
    callApiDataa();
    const deleteContainer = document.querySelector(".delete-container");
    deleteContainer.style.opacity = "0";
  };
  const nevigate = useNavigate();

  const editValue = async (single) => {
    console.log(single, "single");
    nevigate("/additem", { state: { single } });
  };

  function arrowFunction() {
    setarrow(!arrow);
  }

  console.log(apiData, "API Data");
  if (!apiData) {
    return (
      <p className="gif">
        <img src="/images/Ellipsis-2.1s-131px.svg" alt="" className="img-gif" />
      </p>
    );
  }

  const newApi = apiData.filter((data) => {
    return (
      data.fn.toLowerCase().includes(search.toLocaleLowerCase()) ||
      data.ln.toLowerCase().includes(search.toLocaleLowerCase()) ||
      data.email.toLowerCase().includes(search.toLocaleLowerCase()) ||
      data.phone.toLowerCase().includes(search.toLocaleLowerCase()) ||
      data.address.toLowerCase().includes(search.toLocaleLowerCase())
    );
  });

  const lastTenApiData = newApi.slice(-10);

  function formatDate(inputDate) {
    const parts = inputDate.split("-");
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1;
    const day = parseInt(parts[2]);

    const date = new Date(year, month, day);

    const formattedDay = date.getDate().toString().padStart(2, "0");
    const formattedMonth = (date.getMonth() + 1).toString().padStart(2, "0");
    const formattedYear = date.getFullYear();

    const formattedDate = `${formattedDay}-${formattedMonth}-${formattedYear}`;

    return formattedDate;
  }

  function moveToSingleData(single) {
    nevigate("/display", { state: single });
  }

  function toGetDateAndTime(currentDate) {
    const timestamp = new Date(currentDate);
    
    const istDate = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'short',
    }).format(timestamp);
    
    const istTime = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      timeStyle: 'long',
    }).format(timestamp);
    
    return { istDate, istTime };
  }

  return (
    <main className="main-con">
      <SearchBar
        arrow={arrow}
        arrowFunction={arrowFunction}
        search={search}
        setSearch={setSearch}
      />
      <div className="maindis-1">
        <div className="delete-parent">
          <div className="delete-container">
            <p className="content">
              Are you sure you want to confirm the deletion of details
            </p>
            <div className="buttons">
              <button
                type="reset"
                onClick={() => CancelConform()}
                className="submite-button2"
              >
                Cancel
              </button>
              <button
                type="reset"
                onClick={() => deleteValue(Deleteid)}
                className="submite-button1"
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        {arrow ? (
          <BottomtoTop
            lastTenApiData={lastTenApiData}
            editValue={editValue}
            deleteStart={deleteStart}
            moveToSingleData={moveToSingleData}
            arrow={arrow}
            formatDate={formatDate}
            arrowFunction={arrowFunction}
            toGetDateAndTime = {toGetDateAndTime}
          />
        ) : (
          <ToptoBottom
            lastTenApiData={lastTenApiData}
            editValue={editValue}
            deleteStart={deleteStart}
            formatDate={formatDate}
            moveToSingleData={moveToSingleData}
            arrow={arrow}
            arrowFunction={arrowFunction}
            toGetDateAndTime = {toGetDateAndTime}
          />
        )}
      </div>
    </main>
  );
};
export default Display;
