// Header Section (Header Component)
/* HeaderComponent -- Logo -- Navitems(Home,Search,About,Cart) */

import { useState } from "react";

const Header = () => {
  const [button,setbutton] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/userupload/16229601/file/original-6b1a728052819b02f17b15b275d9e233.jpg?resize=400x0"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>AboutUs</li>
          <li>ContactUs</li>
          <li>Cart</li>
          <button
            className="butt-login"
            onClick={() => {
            button==="Login"
            ?setbutton("Logout")
            :setbutton("Login")
            }}
          >
            {button}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
