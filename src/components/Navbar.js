import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-black text-white h-14 flex justify-between w-full p-3 items-center">
      <h1>CHAT</h1>
      <ul className="flex p-3 justify-evenly">
        <li className="p-3">Home</li>
        <li className="p-3">About us</li>
        <li className="p-3">Contact us</li>
      </ul>
    </div>
  );
};

export default Navbar;
