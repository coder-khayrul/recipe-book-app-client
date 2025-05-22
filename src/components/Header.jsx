import React from 'react';
import { Link, NavLink } from 'react-router';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Header = () => {
    const navLinks = <>
        <li className='text-white'><NavLink to={"/"}>Home</NavLink></li>
        <li className='text-white'><NavLink to={"/all-recipe"}>All Recipe</NavLink></li>
        <li className='text-white'><NavLink to={"/my-recipe"}>My Recipe</NavLink></li>
    </>

    return (
        <header className=' bg-main-light py-3'>
            <Container>
            <div className="navbar justify-content-between">
            <div className="navbar-start">
                <ul className="menu menu-horizontal px-1  hidden md:flex">
                    {navLinks}
                </ul>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-main-dark">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center ">
                <a href="#">
                    <img className='w-30 md:w-50' src="./image/recipe-log.png" alt="" />
                </a>
            </div>
            <div className="navbar-end">
                <Link>
                <Button btnText="Get Started" btnType="second"></Button>
                </Link>
            </div>
        </div>
        </Container> 
        </header>
       
        
    );
};

export default Header;