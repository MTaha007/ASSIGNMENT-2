import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-black h-12">
      <div className="flex justify-between items-center">
        
          <h1 className="text-red-600 text-xl m-2 cursor-pointer">NAVBAR</h1>
          <ul className="flex gap-3 mr-3 ">
            <Link className="text-red-600 hover:text-red-700 " href="/#">HOME</Link>
            <Link className="text-red-600 hover:text-red-700  "  href="./about">ABOUT</Link>
            <Link className="text-red-600 hover:text-red-700  "href="./contact">CONTACT</Link>
            <Link className="text-red-600 hover:text-red-700 " href="./service">SERVICE</Link>
          </ul>

      </div>
    </div>
  );
};

export default Navbar;
