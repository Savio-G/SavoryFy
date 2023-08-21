import React from 'react';
import { BiLike } from 'react-icons/bi';
const Chefs = ({ chef }) => {
  const { id, name, years_of_experience, image, noOfRecipes } = chef
  return (

    <div className='lg:w-[40vw] h-[60vh] lg:h-[40vh] flex flex-col lg:flex-row md:flex-row rounded-[8px] overflow-hidden chef-shadow mb-[2rem]'>
      <div className='bg-custom-color md:w-[40%] lg:w-[40%] w-[100%] h-[40%]  md:h-[100%] lg:h-[100%] chef-bg grid place-items-center'>
        <img className='h-[100px] md:h-[200px] lg:h-[200px]' src="https://i.ibb.co/ZdN1gfG/dinner.png" alt="" />

      </div>
      <div className='w-[100%] md:w-[60%] lg:w-[60%] h-[60%] md:h-[100%] lg:h-[100%] bg-[#D4A373] p-[1rem] flex flex-col justify-between '>
        <div>
          <div className='flex justify-center'>
            <img className='h-[100px] md:h-[150px] lg:h-[150px]' src={image} alt="" />
          </div>
          <div className='text-center'>
            <h1 className='text-2xl md:text-[4xl] lg:text-[4xl]'>{name}</h1>
            <div className='flex justify-evenly'>
              <div>
                <p className=' text-xl md:text-[2xl] lg:text-[2xl]'>Recipes:{noOfRecipes}</p>
                <p className='text-xl md:text-[2xl] lg:text-[2xl]'>Experience:{years_of_experience}</p>
              </div>
              <div className='flex items-center text-xl md:text-[2xl] lg:text-[2xl]'>
                <BiLike></BiLike>20
              </div>
            </div>

            <hr className='w-[40%] mx-auto mt-[8px] border border-black' />
          </div>
        </div>
        <div>
          <button className='block w-[100%] bg-[#F1F0E8] text-[#D4A373] p-[0.25rem] rounded-[8px] md:p-[0.65rem] md:rounded-[10px]  lg:p-[0.65rem] lg:rounded-[10px]'>View Recipes</button>
        </div>
      </div>
    </div>




  );
};

export default Chefs;