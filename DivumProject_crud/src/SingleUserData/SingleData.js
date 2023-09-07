import React, { useState } from 'react';
import MainLayout from '../Layout__/MainLayout.js';
import './SingleData.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { apiUrl } from '../Constrains/URL.js';

const SingleData = () => {

  const location = useLocation();
  const nevigate = useNavigate();
  const singleData = location.state 
  const single = singleData


   const [deletBollean,  setdeletBollean] = useState(false);
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
  function CancelConfirm(){
    nevigate("/");
  }
  function editConfirm(){
    nevigate("/additem", { state: { single} });
  }
  function  deleteValue(){
     setdeletBollean(true)

  }
  function resetHomePage(){
    nevigate('/')
  }
  const deleteConfirmation = async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
    nevigate('/')
  };

  return (
    <div className="main-div">
    <MainLayout>
      {deletBollean ? (
        <div className="delete-container1">
          <p className="contents">Are you sure you want to confirm the deletion of {singleData.fn}'s details</p>
          <div className="buttons">
            <button
              type="reset"
              onClick={() => resetHomePage()}
              className="submite-button2"
            >
              Cancel
            </button>
            <button
              type="reset"
               onClick={() => deleteConfirmation(singleData.id)}
              className="submite-button1"
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className='main-container'>

        <div className='sub-container'>
          <p className='heading'><span className='inner-name'>{singleData.fn} {singleData.ln}</span>'s Details</p>
        <div className='container'>
          <p className='head1'>User Id:</p>
          <p className='content1'>{singleData.id}</p>
        </div>
        <div className='container'>
          <p className='head1'>Email:</p>
          <p className='content1'>{singleData.email}</p>
        </div>
        <div className='container'>
          <p className='head1'>First Name:</p>
          <p className='content1'>{singleData.fn}</p>
        </div>
        <div className='container'>
          <p className='head1'>Last Name:</p>
          <p className='content1'>{singleData.ln}</p>
        </div>
        <div className='container'>
          <p className='head1'>Phone Number:</p>
          <p className='content1'>{singleData.id}</p>
        </div>
        <div className='container'>
          <p className='head1'>Address:</p>
          <p className='content1'>{singleData.address}</p>
        </div>
        <div className='container'>
          <p className='head1'>Created Date & Time:</p>
          <p className='content1'>{toGetDateAndTime(singleData.createdDate).istDate}
          <span className='con'>{toGetDateAndTime(singleData.createdDate).istTime.slice(0,-3)}</span></p>
        </div>
        <div className='container'>
          <p className='head1'>Updated Date & Time:</p>
          <p className='content1'>{toGetDateAndTime(singleData.currDate).istDate}
          <span className='con'>{toGetDateAndTime(singleData.currDate).istTime.slice(0,-3)}</span></p>
        </div>
       
        <div className="buttons">
        <button
                type="reset"
                 onClick={() => CancelConfirm()}
                className="submite-button2"
              >
                Cancel
              </button>
              <button
                type="reset"
                 onClick={() => editConfirm()}
                className="submite-button3"
              >
                Edit
              </button>
              <button
                type="reset"
                 onClick={() => deleteValue()}
                className="submite-button1"
              >
                Delete
              </button>
              </div>
              </div>
       </div>)
}
      </MainLayout>
    </div>
  );
};

export default SingleData;
