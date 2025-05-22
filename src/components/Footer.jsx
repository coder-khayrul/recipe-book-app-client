import React from 'react';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import Container from '../ui/Container';
import { FiMail } from 'react-icons/fi';
const Footer = () => {
    return (


        <footer className="bg-main-light">
            <Container>
                <div className="mx-auto w-full max-w-screen-xl pt-15">
                    <div className="flex flex-col lg:flex-row items-center md:justify-between gap-8 mb-10">
                        <div className="w-full lg:w-3/12 flex flex-col items-center">
                            <a href="#" className="flex items-center">
                                <img src="./image/recipe-log.png" className="" alt="FlowBite Logo" />
                            </a>
                            <p className='text-sm text-gray-200 text-center lg:text-left'>Your go-to hub for delicious recipes, from breakfast to dinner — made by food lovers, for food lovers.</p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-full  lg:w-9/12'>
                            <div className="flex items-center gap-4 bg-main-dark p-5 rounded-lg">
                                <div className='bg-third text-white h-12 w-12 rounded-full grid place-items-center'><FaPhoneAlt/></div>
                                <div className="font-medium text-white w-[calc(100%_-64px)]">
                                    <div className='text-[18px] mb-2'>Call Us</div>
                                    <div className="text-sm text-gray-200">+880123456789</div>
                                </div>
                            </div>
                           <div className="flex items-center gap-4 bg-main-dark p-5 rounded-lg">
                                <div className='bg-third text-white h-12 w-12 rounded-full grid place-items-center'><FiMail/></div>
                                <div className="font-medium text-white  w-[calc(100%_-64px)]">
                                    <div className='text-[18px] mb-2'>Mail Us</div>
                                    <div className="text-sm text-gray-200">+abc1234@gmail.com</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-main-dark p-5 rounded-lg">
                                <div className='bg-third text-white h-12 w-12 rounded-full grid place-items-center'><FiMail/></div>
                                <div className="font-medium text-white  w-[calc(100%_-64px)]">
                                    <div className='text-[18px] mb-2'>Find Us</div>
                                    <div className="text-sm text-gray-200">Sadar, Sylhet-3100, Bangladesh</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-main-dark sm:mx-auto lg:my-4" />
                    <div className="flex flex-col md:flex-row items-center  sm:justify-between pb-5 gap-4">
                        <span className="text-sm sm:text-center text-gray-200 order-2 md:order-1">© 2025 <a href="https://flowbite.com/" className="hover:underline">RecipeLog</a>. All Rights Reserved.
                        </span>
                        <div className="flex gap-3 sm:justify-center sm:mt-0 order-1 md:order-2">
                            <a href="#" className="w-12 h-12 rounded-full bg-third text-white hover:bg-main-dark hover:text-white duration-700 grid place-items-center text-[18px]">
                                <FaFacebook />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-third text-white hover:bg-main-dark hover:text-white duration-700 grid place-items-center text-[18px]">
                                <FaYoutube />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-third text-white hover:bg-main-dark hover:text-white duration-700 grid place-items-center text-[18px]">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>

        </footer>

    );
};

export default Footer;