import React from 'react';

const Header = () => {
  return (
    <div className={`
      w-full px-20 py-8  
      flex justify-between items-center bg-white
    `}>
      <div className='logo'>
        <img 
          src="https://isuremedia.com/wp-content/uploads/2022/07/isurelogo-320by110.-1-300x103-1.webp" 
          alt="Logo" 
          width={140} 
        />
      </div>
     
      
      {/* Add Button */}
      <button className={`
        text-xl font-semibold text-white bg-[#3B67B6] px-6 py-2 rounded-full 
        hover:bg-[#2a4b91] transition-all duration-300 ease-in-out
      `}>
        Get Started
      </button>
    </div>
  );
};

export default Header;
