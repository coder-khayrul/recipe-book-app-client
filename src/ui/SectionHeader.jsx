import React from 'react';
import { GiHotMeal } from 'react-icons/gi';

const SectionHeader = ({ subTitle, title }) => {
    return (
        <div className='flex items-center justify-center flex-col mb-15 gap-3'>
            <div className='flex items-center gap-2 text-third text-[14px] md:text-[16px] uppercase font-medium italic'>
                <GiHotMeal size={26}/>
                <span className=''>{subTitle}</span>
                <GiHotMeal size={26}/>
            </div>
            <h2 className='font-semibold text-[30px] md:text-[42px] text-center text-white'>{title}</h2>
        </div>
    );
};

export default SectionHeader;