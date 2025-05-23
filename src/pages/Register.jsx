import React from 'react';
import Container from '../ui/Container';
import { GiHotMeal } from 'react-icons/gi';
import { IoMdAlert } from 'react-icons/io';
import { Link } from 'react-router';

const Register = () => {
       const handleSignInForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData)
    }

    return (
        <section className='py-20 bg-main-dark'>
            <Container>
                <div className="flex flex-col md:flex-row items-center bg-main-light rounded-2xl overflow-hidden relative">
                    <img className='z-[1] drop-shadow-2xl w-140 absolute bottom-0 left-0 rotate-[40deg] translate-y-[45px] translate-x-[-95px]' src="./image/login-bg.png" alt="" />
                    <div className=" lg:block w-full md:w-1/2 p-6">
                     <div className='flex items-center justify-center flex-col gap-3 backdrop-blur-md p-5 py-15  shadow-custom relative z-[999] rounded-2xl overflow-hidden'>
                                <div className='flex items-center gap-2 text-third text-[14px] md:text-[16px] uppercase font-medium italic'>
                                    <GiHotMeal size={26}/>
                                    <span className=''>Register Now</span>
                                    <GiHotMeal size={26}/>
                                </div>
                                <h1 className="text-[30px] md:text-[45px] font-bold leading-tight mb-3 text-center text-white">Create Your Account<span className='text-third'> To Get Started!</span></h1>
                            <p className='text-[16px] font-normal text-gray-200   flex items-center gap-2'>
                                <IoMdAlert className=' text-third md:text-white'  size={25}/>
                                Enter the information you entered whlie registering. Your information is safe with us.</p>
                            </div>
                    </div>
                    <div className=" w-full md:w-1/2  px-6 lg:px-16 xl:px-12
        flex items-center justify-center min-h-screen relative z-9 backdrop-blur-lg md:backdrop-blur-[0px]">
                        <div className="w-full ">
                            <form className="mt-6" onSubmit={handleSignInForm}>
                                <div>
                                    <label className="block text-third">Full Name</label>
                                    <input type="text" name="name" placeholder="Enter your name" className="w-full px-4 py-4 rounded-lg bg-main-dark text-gray-200 placeholder-gray-200 mt-2 border border-main-dark focus:border-third focus:outline-none duration-700" required />
                                </div>
                                <div className="mt-4">
                                    <label className="block text-third">Photo URL</label>
                                    <input type="text" name="photoURL" placeholder="Enter photo URL" className="w-full px-4 py-4 rounded-lg bg-main-dark text-gray-200 placeholder-gray-200 mt-2 border border-main-dark focus:border-third focus:outline-none duration-700" required />
                                </div>
                                <div className="mt-4">
                                    <label className="block text-third">Email Address</label>
                                    <input type="email" name="email" placeholder="Enter Email Address" className="w-full px-4 py-4 rounded-lg bg-main-dark text-gray-200 placeholder-gray-200 mt-2 border border-main-dark focus:border-third focus:outline-none duration-700" required />
                                </div>

                                <div className="mt-4">
                                    <label className="block text-third">Password</label>
                                    <input type="password" name="password" placeholder="Enter Password" minLength="6" className="w-full px-4 py-4 rounded-lg bg-main-dark text-gray-200 placeholder-gray-200 mt-2 border border-main-dark focus:border-third focus:outline-none duration-700" required />
                                </div>
                                <button type="submit" className="w-full block bg-third hover:bg-main-dark focus:bg-main-dark text-white font-semibold rounded-lg duration-700 cursor-pointer
              px-4 py-4 mt-6">Register</button>
                            </form>
                            <p className="mt-8 text-gray-200">Already Have An Account? <Link to={"/login"} className="text-third hover:underline font-semibold">Login Now</Link></p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Register;