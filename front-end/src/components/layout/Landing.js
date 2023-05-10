import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from "./LoginPage";
import Registration from "./Registration";

export default function Landing(){

    function Navigation() {
      return (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
             </li>
          </ul>
        </nav>
      );
    }

    return (
    <>
        <div>
          <BrowserRouter>
            <Navigation />
            <Routes>
              <Route path="/" element={Landing} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
            </Routes>
        </BrowserRouter>
        </div>
         <div id='landing-page'  className='bg-dark text-white p-5'>
            <img src='logo_transparent.png' alt='logo' className="float-start"></img>
             <h3 className='float-start m-4'>Welcome To InventorMe!</h3>
             <p className="bg-dark text-white p-5 text-center">
             <h4>Create your own customizable inventory with InventorMe!</h4>
                <li>Easily organize your inventory at the click of a button</li>
                  <li>Add item details with custom fields</li>
                    <li>Search inventory by name, category, quantity</li>
                    </p>
        </div>
       </>
    );


};

