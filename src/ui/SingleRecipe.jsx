import React from 'react';
import { MdCategory } from 'react-icons/md';
import { Link } from 'react-router';

const SingleRecipe = () => {
    return (
        <div className='group bg-main-dark p-7 rounded-2xl mt-[100px] sm:mt-[120px] md:mt-[140px] '>
            <div className='w-[85%] mx-auto mt-[-100px] sm:mt-[-130px] md:mt-[-150px] mb-5'>
                <img className='outline-2 outline-offset-4 outline-dashed outline-white rounded-full mx-auto' src="./image/recipe.png" alt="" />
            </div>
            <div className=''>
                <h3 className='text-white group-hover:text-third duration-700 text-[18px] md:text-[24px] mb-3 md:mb-4 text-center'>Austrailian Burger</h3>
                <div className='flex items-center gap-2 justify-center'>
                    <span className='w-10 h-10 grid place-items-center rounded-full bg-main-light text-third'><MdCategory size={20}></MdCategory></span>
                    <span className='text-gray-200 text-sm md:text-[16px]'>Cateogry</span>
                </div>
                <Link>
                    <button className='py-2 px-4 md:py-4 md:px-7 cursor-pointer  rounded-[50px] text-[14px] md:text-[17px] font-medium  border border-transparent   duration-700 bg-third text-white hover:border-third hover:text-third hover:bg-white w-full mt-4 md:mt-7'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleRecipe;