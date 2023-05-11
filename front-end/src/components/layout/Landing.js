import React, { useState } from 'react';

export default function Landing(){


    return (
    <>
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

