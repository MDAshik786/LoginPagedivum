import React from "react";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { BiShowAlt } from "react-icons/bi";

const BottomtoTop = ({
  lastTenApiData,
  editValue,
  deleteStart,
  formatDate,
  moveToSingleData,
  arrow,
  arrowFunction,
  toGetDateAndTime
}) => {
  console.log("bottomtotop")
  return (
    <div className="maindis">
      <table className="content-table">
        <thead>
          <tr className="content-heading">
            <th className="heading-child heading-child1">Email</th>
            <th className="heading-child heading-child1">First Name</th>
            <th className="heading-child heading-child1">Last Name</th>
            <th className="heading-child heading-child1">DOB</th>
            <th className="heading-child heading-child1">Phone</th>
            <th className="heading-child heading-child1">
              <div className="uploded-time">
                <p>Last Updated Time</p>
                <button className="arrow-button" onClick={arrowFunction}>
                  {arrow ? (
                    <BsFillArrowDownSquareFill className="arrow-img" />
                  ) : (
                    <BsFillArrowUpSquareFill className="arrow-img" />
                  )}
                </button>
              </div>
            </th>
            <th className="heading-child heading-child1">Action</th>
          </tr>
        </thead>
        <tbody>
          {lastTenApiData?.length > 0 ? (
            lastTenApiData.map((single, i) => (
              <tr className="content-heading" key={i}>
                <td className="heading-child">{single.email}</td>
                <td className="heading-child">{single.fn}</td>
                <td className="heading-child">{single.ln}</td>
                <td className="heading-child">{formatDate(single.dob)}</td>
                <td className="heading-child">{single.phone}</td>
                <td className="heading-child">
                  {toGetDateAndTime(single.currDate).istDate   }
                  <span className="time">{toGetDateAndTime(single.currDate).istTime.slice(0,-3)}</span> 
                </td>
                <td className="heading-child-last">
                  <button className="hcl-child-2">
                    <BiShowAlt
                      className="edit-img"
                      onClick={() => moveToSingleData(single)}
                    />
                  </button>
                  <button className="hcl-child-2">
                    <GrEdit
                      className="edit-img"
                      onClick={() => editValue(single)}
                    />
                  </button>
                  <button className="hcl-child-3">
                    <RiDeleteBin2Fill
                      className="delete-img"
                      onClick={() => deleteStart(single.id)}
                    />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No data available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BottomtoTop;
