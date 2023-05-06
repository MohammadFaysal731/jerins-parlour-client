import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/icons/footer-icons/facebook.png";
import instagram from "../../assets/icons/footer-icons/instagram.png";
import linkedin from "../../assets/icons/footer-icons/linkedin.png";
import location from "../../assets/icons/footer-icons/location.png";
import youtube from "../../assets/icons/footer-icons/youtube.png";
import logo from "../../assets/icons/logo.png";
const Footer = () => {
  const today =new Date();
  const year = today.getFullYear();
  return (
    <div className=" p-10 bg-primary text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* logo and location */}
        <div className="m-2">
          <img
            src={logo}
            alt=""
            className="w-2/4 p-2 rounded-xl mb-2 bg-white"
          />
          <div>
            <span className="flex">
              <img src={location} alt="" className="w-5 h-5 mx-[-4px]" />
              &nbsp; (Ground Floor), Road #00,
            </span>
            <span>Fatullah, Narayanganj, Dhaka, Bangladesh .</span>
          </div>
        </div>
        {/* company */}
        <div>
          <ul className="m-2">
            <h4 className="text-xl font-bold">Company</h4>
            <li>
              <Link to="" className="link link-hover">
                About
              </Link>
            </li>
            <li>
              <Link to="" className="link link-hover">
                Project
              </Link>
            </li>
            <li>
              <Link to="" className="link link-hover">
                Our Team
              </Link>
            </li>
            <li>
              <Link to="" className="link link-hover">
                Terms Conditions
              </Link>
            </li>
            <li>
              <Link to="" className="link link-hover">
                Submit Listing
              </Link>
            </li>
          </ul>
        </div>
        {/* quick links */}
        <div className="m-2">
          <ul className="">
            <h4 className="text-xl font-bold">Quick Links</h4>
            <li>
              <Link to="" className="link link-hover">
                Quick Links
              </Link>
            </li>
            <li>
              <Link to="" className="link link-hover">
                Rentals
              </Link>
            </li>
            <li>
              <Link to="" className="link link-hover">
                Sales
              </Link>
            </li>
            <li>
              <Link to="" className="link link-hover">
                Contact
              </Link>
            </li>
            <li>
              <Link to="" className="link link-hover">
                Our blog
              </Link>
            </li>
          </ul>
        </div>

        {/* abut us  */}
        <div className="m-2">
          <ul>
            <h4 className="text-xl font-bold">About Us</h4>
            <li>
              <p className="">
                Everyone wants to look good, especially when it is the time to
                party. The idea behind hosting or going to parties is to meet
                the people you know as well as to make new friends. Walk in
                today for Persona Special Makeup.
              </p>
            </li>
            <li className="mt-3">
              <div className="flex">
                <img src={facebook} alt="" className="w-4 " />
                <img src={instagram} alt="" className="w-4 mx-5" />
                <img src={linkedin} alt="" className="w-4 " />
                <img src={youtube} alt="" className="w-4 mx-5" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
