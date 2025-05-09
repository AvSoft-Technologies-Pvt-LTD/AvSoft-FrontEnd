import React, { useState } from 'react';
import { IoCallOutline, IoChatbubblesOutline } from "react-icons/io5";
import {  RiHospitalLine,RiBankCardLine,RiBriefcaseLine , RiShieldCheckLine , RiCapsuleFill,RiStethoscopeFill, RiFlaskLine, RiArrowDropDownFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

// Color constants
const primaryColor = "#0E1630";
const greenColor = "#F4C430";
const whiteColor = "#ffffff";

function Navbar() {
  const [dropdown, setDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav
      className="bg-white/10 backdrop-blur-xl px-6 py-2 flex justify-between items-center sticky top-0 text-lg shadow-lg relative z-50 transition-all duration-300"
      style={{ color: primaryColor }}
    >
      {/* Logo and Title */}
      <div className='flex items-center text-3xl'>
        {/* <img src={logo} className='w-12 h-12 my-1 rounded-full border-[#0e1630] border-1' alt='logo' /> */}
        <div>Logo</div>
        <h1 className='mx-2 font-extrabold flex items-center text-3xl ml-9' style={{ color: primaryColor }}>
          A<span style={{ color: greenColor }}>V</span>Swasthya
        </h1>
      </div>

      {/* Main Menu */}
      <ul className='flex gap-8 font-bold' style={{ color: primaryColor }}>
        <li className='cursor-pointer flex items-center gap-1 hover:text-[#F4C430] transition'>
          <RiBankCardLine  /> My Health Card
        </li>

        <li
          className='relative cursor-pointer flex items-center gap-1 hover:text-[#F4C430] transition'
          onClick={() => toggleDropdown('doctors')}
        >
          <RiStethoscopeFill /> For Doctors
        </li>

        <li
          className='relative cursor-pointer flex items-center gap-1 hover:text-[#F4C430] transition'
          onClick={() => toggleDropdown('labs')}
        >
          <RiFlaskLine /> E-Labs
        </li>

        <li
          className='relative cursor-pointer flex items-center gap-1 hover:text-[#F4C430] transition'
          onClick={() => toggleDropdown('hospitals')}
        >
          <RiHospitalLine /> For Hospitals
        </li>

        <li className='relative group cursor-pointer flex items-center gap-1 hover:text-[#F4C430] transition'>
          <RiBriefcaseLine  size={20}  />
          Services <RiArrowDropDownFill />

          <ul className='absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white border border-gray-200 py-2 px-3 mt-2 rounded-xl shadow-xl w-52 z-20 top-14 transition-all duration-200'>
  {[
    { label: 'Healthcard', icon: <RiBankCardLine /> },
    { label: 'Consultation', icon: <RiStethoscopeFill /> },
    { label: 'Pharmacy', icon: <RiCapsuleFill /> },
    { label: 'Insurance', icon: <RiShieldCheckLine /> },
    { label: 'Emergency', icon: <IoCallOutline /> }
  ].map(({ label, icon }) => (
    <li
      key={label}
      className='flex items-center gap-2 px-3 py-2 text-[#0E1630] hover:bg-[#F4C430] hover:text-white hover:rounded-lg transition-all duration-150 cursor-pointer'
    >
      {icon} {label}
    </li>
  ))}
</ul>

        </li>
      </ul>

      {/* Auth Buttons */}
      <div className='flex gap-3 font-normal'>
        <button
          className='cursor-pointer border-2 rounded-3xl px-4 py-1 hover:shadow-md hover:scale-[1.03] transition-transform duration-300 ease-in-out'
          style={{
            color: primaryColor,
            borderColor: greenColor,
            hover: {
              backgroundColor: primaryColor,
              color: greenColor,
            },
          }}
          onClick={() => navigate('/login')}
        >
          Login
        </button>

        <button
          className='cursor-pointer rounded-3xl px-4 py-1 hover:shadow-md hover:scale-[1.03] transition-transform duration-300 ease-in-out'
          style={{
            backgroundColor: primaryColor,
            color: whiteColor,
          }}
          onClick={() => navigate('/register')}
        >
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
