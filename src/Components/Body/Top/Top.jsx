import React from 'react'
import './top.css'


import {BiSearch} from "react-icons/bi";
import {MdOutlineNotificationsNone} from "react-icons/md";
import {TbMessageCircle} from "react-icons/tb";
import {BsArrowRightShort, BsQuestionCircle} from "react-icons/bs";

import img from "../../../assets/img.jpg"
import img2 from "../../../assets/img2.jpg"
import video from "../../../assets/Grass.mp4"


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

      <div className="cardSection flex">

        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>The world's fast growing industry today are natural made produt!</p>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">

            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br/> <small>4 Orders</small>
                </span>
              </div>

              <div className="flex">
                <span>
                  This month <br/> <small>175 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my orders <BsArrowRightShort className="icon" />
              </span>

            </div>

            <div className="imgDiv">
              <img src={img2} alt="Image Name"/>
            </div>

            {/*
            <div className="sideBarCard">
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>Help Center</h3>
                <p>Having trouble with Buddy please contact us for more questions</p>
                <button className="btn">Go to help center</button>
              </div>
            </div>
            */}

          </div>
        </div>

      </div>

    </div>
  )
}

export default Top