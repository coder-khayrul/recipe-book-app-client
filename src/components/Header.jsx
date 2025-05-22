import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    const navLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"all-recipe"}>All Recipe</NavLink></li>
        <li><NavLink to={"my-recipe"}>My Recipe</NavLink></li>
    </>

    return (
        <div className="navbar justify-content-between">
            <div className="navbar-start">
                <ul className="menu menu-horizontal px-1  hidden md:flex">
                    {navLinks}
                </ul>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center ">

                <a className="btn btn-ghost text-xl">RecipeLog</a>
            </div>
            <div className="navbar-end">
                <a className="btn">Get Started</a>
            </div>
        </div>
    );
};

export default Header;