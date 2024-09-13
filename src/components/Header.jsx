import React, { useState } from "react";
import logo from "../assets/book-logo.png";

function Header({setInput}) {

  function handleKeyDown(e){
    if(e.key === 'Enter'){
      setInput(e.target.value)
    }
  }

  return (
    <div className=" w-full md:max-w-7xl md:mx-auto py-5 md:py-7 px-7 md:px-0 bg-slate-900 md:bg-transparent">
      <div className="flex items-center justify-between">
        <div className="w-40">
          <img src={logo} alt="logo" className="w-full" />
          <h2>bookStore</h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search queries..."
            className="py-1 px-3 border-2 border-orange-500 rounded-2xl font-semibold outline-none w-60 bg-transparent text-white text-base"
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
