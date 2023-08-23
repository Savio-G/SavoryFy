import React from 'react';

const RecipeCard = ({ recipe }) => {
  const { recipe_name, ingredients, cooking_time, cooking_method, rating } = recipe
  return (
    <div className='bg-[#EEE0C9] h-[55vh] md:h-[60vh] lg:h-[70vh] 2xl:h-[60vh] w-[100%] lg:w-[25vw] 2xl:w-[22vw] mb-[2rem] p-9 flex flex-col justify-between chef-shadow rounded-xl'>
      <div className=''>
        <h1 className='text-[1.75rem] sm:text-[2rem] lg:text-[1.75rem] 2xl:text-[2rem] font-semibold text-center mb-8rem'>{recipe_name}</h1>
        <>
          <p className='text-[1rem] sm:text-[1.25rem] lg:text-[1.15rem] 2xl:text-[1.35rem]'><span className='text-[#D4A373]
           text-[1.5rem] lg:text-[1.75rem] 2xl:text-[2rem] font-semibold'>1. </span><span className='font-medium'>Ingredients: </span>{ingredients}</p>
          <p className='text-[1rem] sm:text-[1.25rem] lg:text-[1.15rem] 2xl:text-[1.35rem]'><span className='text-[#D4A373]
           text-[1.5rem] lg:text-[1.75rem] 2xl:text-[2rem] font-semibold'>2. </span><span className='font-medium'>Method: </span>{cooking_method}</p>
          <p className='text-[1rem] sm:text-[1.25rem] lg:text-[1.15rem] 2xl:text-[1.35rem]'><span className='text-[#D4A373] text-[1.5rem] lg:text-[1.75rem] 2xl:text-[2rem] font-semibold'>3. </span><span className='font-medium'>Cooking time: </span>{cooking_time}</p>
          <p className='text-[1rem] sm:text-[1.25rem] lg:text-[1.15rem] 2xl:text-[1.35rem]'><span className='text-[#D4A373] text-[1.5rem] lg:text-[1.75rem] 2xl:text-[2rem] font-semibold'>4. </span><span className='font-medium'>Rating: </span> {rating}</p>
        </>
      </div>
      <button className='bg-[#D4A373] text-black p-[0.40rem] rounded-[8px] md:p-[0.65rem] md:rounded-[10px]  lg:p-[0.65rem] lg:rounded-[10px] mt-[8px]'>Add to Favourites</button>
    </div>
  );
};

export default RecipeCard;