import styles from "./Landing.css"
import {Link} from "react-router-dom";

export default function Landing() {
  return (
    <>
      <div id="landing-page" className="p-5 container-md">
        <div id="landing-left-col">
          {/* <img
            id="logo"
            src="logo_transparent.png"
            alt="logo"
            className="float-start"
          ></img> */}
        </div>
        <div id="landing-right-col">
          <h3 className="text-center">Welcome To InventorMe!</h3>
          <p className="bg-dark text-white p-5 text-center">
            <h4>Create your own customizable inventory with InventorMe!</h4>
            <li>Easily organize your inventory at the click of a button</li>
            <li>Add item details with custom fields</li>
            <li>Search inventory by name, category, quantity</li>
          </p>
          <Link to="/register">
          <button id="get-started-button" className="btn btn-warning mx-5" type="submit">
            Get Started!
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}
