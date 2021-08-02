import React from "react";
import { BiChevronRight , BiSearch , BiMenu } from "react-icons/bi";
//as we dont all icon we are destructuring import to improve performance.

// for mobile devices.
const NavSm = () => {
    return (<>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold">
                    It All Starts here!
                </h3>
                <span className="text-gray-400 text-xs flex items-center">Indore <BiChevronRight/></span>
            </div>
            <div className="w-8 h-8">
                <BiSearch className="w-full h-full"/>
            </div>
        </div>
    </>);
};

// for medium devices.
const NavMd = () => {
    return (
    <div className="w-full flex items-center gap-3 bg-white py-2 px-3 rounded-md">
        <BiSearch/>
        <input type="search" 
        className="w-full bg-transparent border-none focus:outline-none" 
        placeholder="Search for movies, events, Plays, Sports and Activities"/>
    </div>
    );
};

// large devices.
const NavLg = () => {
    return (
        <>
        <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center w-1/2 gap-3">
                <div className="w-12 h-12">
                    <img
                        src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>
                <div className="w-full flex items-center gap-3 bg-white py-2 px-3 rounded-md">
                    <BiSearch/>
                    <input type="search" 
                        className="w-full bg-transparent border-none focus:outline-none" 
                        placeholder="Search for movies, events, Plays, Sports and Activities"/>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white">Indore <BiChevronRight/></span>
                <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">Sign In</button>
                <div className="w-8 h-8 text-white "><BiMenu className="h-full w-full"/></div>
            </div>
        </div>
        </>
    );
};


const Navbar = () =>{
    return (
        <>
        <nav className="bg-bms-700 px-4 py-4">
            <div className="md:hidden">
                {/* Mobile Devices*/ }
                <NavSm/>
            </div>
            <div className="hidden md:flex lg:hidden">
                {/* Medium Screen devices*/ }
                <NavMd />
            </div>
            <div className="hidden lg:flex">
                {/* Large Screen Devices*/ }
                <NavLg/>
                </div>
        </nav>
        </>
    );
};

export default Navbar;