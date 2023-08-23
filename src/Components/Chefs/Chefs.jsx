import React from 'react';
import { BiLike } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Chefs = ({ chef }) => {
  const { id, name, years_of_experience, image, noOfRecipes } = chef
  return (

    <div className='lg:w-[40vw] h-[60vh] md:h-[50vh] lg:h-[40vh] flex flex-col lg:flex-row md:flex-row rounded-[8px] overflow-hidden chef-shadow mb-[2rem]'>
      <div className='bg-custom-color md:w-[40%] lg:w-[40%] w-[100%] h-[40%]  md:h-[100%] lg:h-[100%] chef-bg grid place-items-center'>
        <img className='h-[100px] md:h-[200px] lg:h-[125px] 2xl:h-[200px]' src="https://i.ibb.co/ZdN1gfG/dinner.png" alt="" />

      </div>
      <div className='w-[100%] md:w-[60%] lg:w-[60%] h-[60%] md:h-[100%] lg:h-[100%] bg-[#F1F0E8] p-[1rem] flex flex-col justify-between '>
        <div>
          <div className='flex justify-center'>
            <img className='h-[100px] md:h-[150px] lg:h-[125px] 2xl:h-[150px]' src={image} alt="" />
          </div>
          <div className='text-center'>
            <h1 className='text-xl md:text-[2xl] lg:text-[1.15rem] 2xl:text-2xl font-semibold'>{name}</h1>
            <div className='flex justify-evenly'>
              <div>
                <p className=' text-lg md:text-[2xl] lg:text-[1.10rem] 2xl:text-[1.30rem]'><span className='font-semibold'>Recipes:</span> {noOfRecipes}</p>
                <p className='text-lg md:text-[2xl] lg:text-[1.10rem] 2xl:text-[1.30rem]'>
                  <span className="font-semibold">Experience:</span> {years_of_experience}</p>
              </div>
              <div className='flex items-center text-lg md:text-[2xl] lg:text-[1.10rem] 2xl:text-[1.30rem]'>
                <BiLike></BiLike>20
              </div>
            </div>

            <hr className='w-[40%] mx-auto mt-[8px] border border-black' />
          </div>
        </div>
        <div>
          <Link to={`/ChefDetail/${id}`}>
            <button className='block w-[100%] bg-[#D4A373] text-black p-[0.25rem] rounded-[8px] md:p-[0.65rem] md:rounded-[10px]  lg:p-[0.45rem] lg:rounded-[10px] font-semibold'>View Recipes</button>
          </Link>
        </div>
      </div>
    </div >




  );
};

export default Chefs;