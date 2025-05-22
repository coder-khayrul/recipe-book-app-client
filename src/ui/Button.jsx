import React from 'react';

const Button = ({btnType,btnText,children}) => {
    
    return (
          <button className={`py-2 px-4 md:py-4 md:px-7 cursor-pointer  rounded-[50px] text-[14px] md:text-[17px] font-medium  border border-transparent   duration-700 ${btnType === "primary" ? "bg-main-dark text-white hover:border-main-dark hover:text-main-dark hover:bg-white border-white" : "bg-third text-white hover:border-third hover:text-third hover:bg-white"}`}>{children ? children : btnText}</button>
    );
};

export default Button;