import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => (
    <nav>
      <Link to="/">
        Puzzles
      </Link><br></br>
      <Link
        to="/Customers"
        className={
          window.location.pathname === "/" || window.location.pathname === "/Customers"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Customers
      </Link><br></br>
      <Link
        to="/Transactions"
        className={
          window.location.pathname === "/Transactions"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Transactions
      </Link><br></br>
      <Link
        to="/Mfgs"
        className={
          window.location.pathname === "/Mfgs"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Mfgs
      </Link><br></br>
      <Link
        to="/Comments"
        className={
          window.location.pathname === "/Comments"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Comments
      </Link><br></br>
      <Link
        to="/CustHist"
        className={
          window.location.pathname === "/CustHist"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Cust Hist
      </Link><br></br><br></br>
          
    </nav>
  );
  
  export default Navbar;
  