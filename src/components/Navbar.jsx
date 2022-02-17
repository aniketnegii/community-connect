import React from "react";

const Navbar = () => {
  return (
    //Mobile view
    <header>
      <h1 className="text-center text-2xl p-3 bg-gray-200">
        Community Connect
      </h1>
      <nav className="mx-5">
        <div className="flex justify-between m-3">
          <div>Home</div>
          <div>Connect</div>
          <div>Resource</div>
          <div>Login</div>
        </div>
        <hr className="bg-black h-0.5" />
      </nav>
    </header>
  );
};

export default Navbar;
