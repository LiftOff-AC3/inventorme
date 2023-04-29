import React from "react";


export default function Forms(){
    return(
       <form>
            <label for="name">Name: </label>
            <input type="name" placeholeder="John Doe" id="name" name="text"></input>
            <label for="name">Company: </label>
            <input type="name" placeholeder="My Company" id="name" name="text"></input>
            <label for="email">Email: </label>
            <input type="email" placeholeder="email@gmail.com" id="email" name="email"></input>
            <label for="password">Password: </label>
            <input type="password" placeholeder="*********" id="password" name="email"></input>
            <label for="password">Verify Password: </label>
            <input type="password" placeholeder="*********" id="password" name="email"></input>
       </form>
    )
}