import React from 'react';

const NewRecipes = ({ recipe }) => {
  const { image, category, description, name } = recipe
  return (
    <div className=" lg:w-[50%] mb-[2rem]">
      <div className='h-[70vh] w-[100%] inline-block overflow-hidden'>
        <img className="h-[100%] w-[100%] object-cover block transition-all duration-700 hover:scale-[1.2]" src={image} alt="New Recipe Image" />
      </div >
      <div>
        <span className='text-[#D4A373] text-[1.3rem]'>{category}</span>
        <h2 className='text-[1.75rem]'>{name}</h2>
        <p className='description-text mb-[30px] mt-[5px]'>{description}</p>
        <hr className='border border-[#D4A373]' />
      </div>
    </div >
  );
};

export default NewRecipes;