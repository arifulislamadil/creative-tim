import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    FaThList,
    FaRegCalendar,
    FaRegCommentAlt,
    FaShoppingCart,
    FaCampground
} from "react-icons/fa";


const SideBar = ({ children }) => {
    const menuItem = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <FaCampground />
        },
        {
            path: "/tables",
            name: "Tables",
            icon: <FaRegCalendar />
        },
        {
            path: "/billing",
            name: "Billing",
            icon: <FaRegCommentAlt />
        },
        {
            path: "/virtualReality",
            name: "VirtualReality",
            icon: <FaShoppingCart />
        },
        {
            path: "/rtl",
            name: "Rtl",
            icon: <FaThList />
        }
    ]
    return (
        <div>
            <div className="container">
                <div className="sidebar">
                    <div className="top_section">
                        <h1 className="logo">Logo</h1>
                    </div>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link">
                                <div className="icon">{item.icon}</div>
                                <div className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
               <span> {children}</span>
            </div>
        </div>


    );
};

export default SideBar;