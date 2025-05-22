import React from 'react';
import Button from '../ui/Button';

const Slide = ({content}) => {

    return (
        <div
  className="hero min-h-screen "
  style={{
    backgroundImage:
      `url(${content.bgImage})`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center pb-75 pt-20">
    <div className="w-[95%] md:w-[70%]">
      <span className='py-1 px-4 rounded-[50px] bg-third text-white text-[15px] italic mb-6 inline-block'>{content.subTitle}</span>
      <h1 className="mb-6 text-[30px] md:text-[37px] lg:text-[50px] font-bold capitalize leading-[2.5rem] md:leading-[4rem] ">{content.title}</h1>
      <p className="mb-8 w-[80%] text-center mx-auto text-[#bdbdbd]">
       {content.description}
      </p>
      {/* <button className="bg-white text-main-light border-2 border-main-light px-8 py-4 rounded-[50px] font-semibold text-[16px] hover:bg-main-light hover:text-white duration-700 cursor-pointer">Explore Now</button> */}
      <Button btnType={"primary"} btnText={"Explore Now"}></Button>
    </div>
  </div>
</div>
    );
};

export default Slide;