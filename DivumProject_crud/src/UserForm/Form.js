import axios from "axios";
import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { apiUrl } from "../Constrains/URL";

const Form = ({
  formData,
  Cancel,
  clearAllData,
  submitAllData,
  handleInputChange,
  Error,
  data,
  currentDate1,
  setError,
}) => {
  const EmailValidation = async (email) => {
    try {
      const response = await axios.post(`${apiUrl}/email/${email}`, email);

      if (response.data === "False") {
        setError((prevState) => ({
          ...prevState,
          email: "Email is Already Exists",
        }));
      } else {
        setError((prevState) => ({
          ...prevState,
          email: "",
        }));
      }

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const editEmailValidation = async (id, email) => {
    console.log(`${apiUrl}/${id}/${email}`);
    try {
      const editresponse = await axios.post(`${apiUrl}/${id}/${email}`, email);
      console.log("first");
      if (!editresponse.data) {
        console.log(editresponse.data, "---");
        setError((prevState) => ({
          ...prevState,
          email: "Email is Already Exists",
        }));
      } else {
        console.log(editresponse.data, "--->>>");
        setError((prevState) => ({
          ...prevState,
          email: "",
        }));
      }

      return editresponse.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={submitAllData}>
        <div className="userdata">
          <div className="all">
            <div className="head">Fill Your Details</div>
            <div className="single-container">
              <label className="input-name">Email:</label>
              <div className="relative">
                <input
                  type="text"
                  className="email input-box"
                  placeholder="Enter Your Email.."
                  value={formData?.email}
                  name="email"
                  data-testid="email-id"
                  onChange={handleInputChange}
                  onBlur={
                    data === null
                      ? () => EmailValidation(formData?.email)
                      : () =>
                          editEmailValidation(data.single.id, formData?.email)
                  }
                />
                {Error?.email && (
                  <p
                    style={{ color: "red", font: "1rem Roboto, sans-serif" }}
                    data-testid="email-error"
                  >
                    {Error?.email}
                    <BsFillInfoCircleFill className="info-icon" />
                  </p>
                )}
              </div>
            </div>
            <div className="single-container">
              <label className="input-name">First Name:</label>
              <div className="relative">
                <input
                  type="text"
                  className="first-name"
                  placeholder="Enter Your First Name"
                  value={formData?.fn}
                  name="fn"
                  data-testid="fn-id"
                  onChange={handleInputChange}
                />
                {Error?.fn && (
                  <p style={{ color: "red", font: "1rem Roboto, sans-serif" }}>
                    {Error.fn}
                    <BsFillInfoCircleFill className="info-icon" />
                  </p>
                )}
              </div>
            </div>
            <div className="single-container">
              <label className="input-name">Last Name:</label>
              <div className="relative">
                <input
                  type="text"
                  className="last-name"
                  placeholder="Enter Your Last Name"
                  value={formData?.ln}
                  name="ln"
                  data-testid="ln-id"
                  onChange={handleInputChange}
                />
                {Error?.ln && (
                  <p style={{ color: "red", font: "1rem Roboto, sans-serif" }}>
                    {Error?.ln}
                    <BsFillInfoCircleFill className="info-icon" />
                  </p>
                )}
              </div>
            </div>
            <div className="single-container">
              <label className="input-name">Date Of Birth:</label>
              <div className="relative">
                <input
                  type="date"
                  className="dob"
                  value={formData?.dob}
                  name="dob"
                  max={currentDate1}
                  onChange={handleInputChange}
                />
                {Error?.dob && (
                  <p style={{ color: "red", font: "1rem Roboto, sans-serif" }}>
                    {Error?.dob}
                    <BsFillInfoCircleFill className="info-icon" />
                  </p>
                )}
              </div>
            </div>
            <div className="single-container">
              <label className="input-name">Phone No:</label>
              <div className="relative">
                <input
                  type="text"
                  className="phone"
                  placeholder="Enter Your Phone Number"
                  value={formData?.phone}
                  name="phone"
                  onChange={handleInputChange}
                />
                {Error?.phone && (
                  <p style={{ color: "red", font: "1rem Roboto, sans-serif" }}>
                    {Error?.phone}
                    <BsFillInfoCircleFill className="info-icon" />
                  </p>
                )}
              </div>
            </div>
            <div className="single-container">
              <label className="input-name">Address:</label>
              <div className="relative">
                <textarea
                  className="text-area"
                  autoComplete="off"
                  cols="1"
                  rows="3"
                  value={formData?.address}
                  name="address"
                  placeholder="Please Enter Your Address"
                  onChange={handleInputChange}
                ></textarea>
                {Error?.address && (
                  <p style={{ color: "red", font: "1rem Roboto, sans-serif" }}>
                    {Error?.address}
                    <BsFillInfoCircleFill className="info-icon info-icon-1" />
                  </p>
                )}
              </div>
            </div>
            <div className="head">
              <button
                type="reset"
                onClick={clearAllData}
                className="submite-button"
              >
                Clear
              </button>
              <button
                type="submit"
                className="submite-button"
                data-testid="submit"
              >
                {!data ? "Submit" : "Edit Data"}
              </button>
            </div>
            <button className="cancel-button">
              <MdOutlineCancel className="cancel-img" onClick={Cancel} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
