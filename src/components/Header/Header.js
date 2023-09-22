import React from "react";
import logo from "../../static/logo.png";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
    <section className="bg-dark text-center">
<h6 className="text-white py-2">Free UK Delivery | WorldWide Shipment  | +44 4546546456</h6>
    </section>
      <header class="text-gray-600 body-font">
        <div class="container">
          <div class="row">
            <div class="col">
              <NavLink class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <span class="ml-3 text-xl">
                  <img src={logo} alt="" />
                </span>
              </NavLink>
            </div>
            <div class="col-8 nav  mt-4 pt-2">
              <NavLink class="mr-5 hover:text-gray-900">NEW</NavLink>
              <NavLink class="mr-5 hover:text-gray-900">ABOUT US</NavLink>
              <NavLink class="mr-5 hover:text-gray-900">JOURNAL</NavLink>
              <NavLink class="mr-5 hover:text-gray-900">SALE</NavLink>
            </div>
            <div class="col nav mt-4 pt-2 d-flex justify-content-end ">
              <span>
                <i class="fa fa-user" aria-hidden="true"></i>
              </span>
              <span>
                <i class="fa fa-heart-o" aria-hidden="true"></i>{" "}
              </span>
              <span>
                <i class="fa fa-search" aria-hidden="true"></i>{" "}
              </span>
              <span>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
