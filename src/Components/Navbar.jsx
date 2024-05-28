import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="main_box lg:flex md:flex flex-wrap justify-between bg-[#40407a] shadow-md sticky-0">
        <div className=" left flex items-center space-x-4 p-4 justify-center ">
          <img className='w-12 '
            src="https://movie-app-88kamal.vercel.app/clipart3105859.png" 
            alt=""
          />
          <h2 className='font-bold text-2xl text-white'>Search Movies</h2>
        </div>
        <div className="right flex items-center  p-5 justify-center">
          <ul className='flex space-x-4 font-bold  text-white'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Servies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
