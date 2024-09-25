import React from 'react';
import HNLogo from '../image/HNLogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";

function Header() {
  return (
    <div>
        <div className="row">
            <div className='h-1 pt-2'><p>Worldwide Shopping - Duties and Taxes Prepaid</p></div>
        </div>
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
              <div className='col-3'>
                <a className="navbar-brand ms-3" href="#">
                    <img src={HNLogo} width="200px" alt="Logo" />
                </a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Navbartext">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="col-6 collapse navbar-collapse ms-lg-5" id="Navbartext">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item p-3">
                            <a className="nav-link text-dark" href="#">Home</a>
                        </li>
                        <li className="nav-item p-3">
                            <a className="nav-link text-dark" href="#">Shop by Brand</a>
                        </li>
                        <li className="nav-item p-3">
                            <a class="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">Shop by Category</a>
                        </li>
                        <li className="nav-item p-3">
                            <a className="nav-link text-dark" href="#">Meet us CMO</a>
                        </li>
                        <li className="nav-item p-3">
                            <a className="nav-link text-dark" href="#">Contact us</a>
                        </li>
                    </ul>
                    <div className='col-3'>
                      <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item p-3"><a href='#'><CiSearch size={25} /></a></li>
                        <li className="nav-item p-3"><a><IoPersonOutline size={25}/></a></li>
                        <li className="nav-item p-3"><a><RiShoppingBag4Line size={25}/></a></li>
                      </ul>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header