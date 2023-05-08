import React, { useState } from 'react';


const Landing = (props) => {
    function handleCreateAccount() {
        props.handleCreateAccount();
    }

    function handleLogin() {
        props.handleLogin();
    }


    return (
        <div>
           <div id='landing-page'  className='bg-dark text-white p-5'>
        
              <img src='logo_transparent.png' alt='logo' className="float-start"></img>
                <h3 className='float-start m-4'>Welcome To InventorMe!</h3>
                
                 <button className="float-end btn btn-warning" id='addItem'  type = 'submit' style={{margin:'10px'}}>Add Item</button>
                 <button className=" float-end btn btn-primary"id='login' onClick={handleLogin} style={{margin:'10px'}}>Login</button>
                 <button className="float-end btn btn-success" id ='createAccount'onClick={handleCreateAccount} style={{margin:'10px'}}>Create Account</button>
                 </div>
                <p className="bg-dark text-white p-5 text-center">
                <h4>Create your own customizable inventory with InventorMe!</h4>
                    <li>Easily organize your inventory at the click of a button</li>
                    <li>Add item details with custom fields</li>
                    <li>Search inventory by name, category, quantity</li>
                    </p>
                </div>
    );
};

export default Landing;