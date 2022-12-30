import React from 'react'
import './top.css'


import {BiSearch} from "react-icons/bi";
import {MdOutlineNotificationsNone} from "react-icons/md";
import {TbMessageCircle} from "react-icons/tb";

import img from "../../../assets/img.jpg"

function Top() {
  return (
    <div className="topSection">
      <div className="headerSection flex">

        <div className="title">
          <h1>Welcome to Buddy</h1>
          <p>Hello Kachilala, Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard"/>
          <BiSearch className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />

          <div className="adminImage">
            <img src={img} alt="Admin Image"/>
          </div>

        </div>

      </div>


    </div>
  )
}

export default Top