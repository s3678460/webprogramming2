import React, { Component } from 'react';
import { Link } from "react-router-dom";



class SideBar extends Component {
    render() {
        return (
            <div id="wrapper">
            <div className="overlay" />
            {/* Sidebar */}
            <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
              <ul className="nav sidebar-nav">
                <li className="sidebar-brand">
                  <a href="#">
                    Minh E-Commerce 
                  </a>
                </li>
                <li>
                <Link  to="/home">Home </Link>
                </li>
                <li>
                <Link  to="/product">Products</Link>
                </li>
                <li>
                <Link  to="/category">Categories</Link>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="https://twitter.com/maridlcrmn">Follow me</a>
                </li>
              </ul>
            </nav>
            
            <div id="page-content-wrapper">
              <button type="button" className="hamburger is-closed" data-toggle="offcanvas">
                <span className="hamb-top" />
                <span className="hamb-middle" />
                <span className="hamb-bottom" />
              </button>
            </div>
           
          </div>
          
        );
    }
}

export default SideBar;