import React from 'react'
import './sidebar.css'

import logo from '../../assets/logo.png'
import logo2 from '../../assets/logo2.png'


import {IoMdSpeedometer} from "react-icons/io";
import {MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar} from "react-icons/md";
import {BsCreditCard2Front, BsTrophy} from "react-icons/bs";
import {AiOutlinePieChart} from "react-icons/ai";
import {BiTrendingUp} from "react-icons/bi";


function Sidebar() {
    return (
        <div className="sideBar grid">
            <div className="logoDiv flex">
                <img src={logo} alt="logo"/>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">
                    QUICK MENU
                </h3>
                <ul className="menuLists grid">

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <IoMdSpeedometer className="icon" />
                            <span className="smalltext">
                                Dash board
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <MdDeliveryDining className="icon" />
                            <span className="smalltext">
                                My Orders
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <MdOutlineExplore className="icon" />
                            <span className="smalltext">
                                Explore
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <BsTrophy className="icon" />
                            <span className="smalltext">
                                Product
                            </span>
                        </a>
                    </li>




                </ul>
            </div>

            <div className="settingsDiv">
                <h3 className="divTitle">
                    SETTINGS
                </h3>
                <ul className="menuLists grid">

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <AiOutlinePieChart className="icon" />
                            <span className="smalltext">
                                Chart
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <BiTrendingUp className="icon" />
                            <span className="smalltext">
                                Trends
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <MdOutlinePermContactCalendar className="icon" />
                            <span className="smalltext">
                                Contact
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <BsCreditCard2Front className="icon" />
                            <span className="smalltext">
                                Billing
                            </span>
                        </a>
                    </li>




                </ul>
            </div>


        </div>
    )
}

export default Sidebar
