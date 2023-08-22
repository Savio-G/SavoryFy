import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const ChefDetail = () => {
  const data = useLoaderData()
  const { name, years_of_experience, bio, image, noOfRecipes, recipes } = data
  return (
    <div className='h-full w-[80vw] mx-auto'>
      <div className=' lg:flex gap-9 mb-[3rem]'>
        <div className=' w-[100%] my-auto'>
          <h1 className='lg:text-[3rem] text-[2rem] font-black mb-[0.5rem] text-[#D4A373]'>{name}</h1>
          <p className='lg:text-[1.5rem] text-[1rem] mb-[0.5rem]'>{bio}</p>
          <div >
            <p className='lg:text-[1.5rem] text-[1rem] mb-[0.5rem]'><span className='text-[#D4A373] font-black'>No. Of Recipes:</span>{noOfRecipes}</p>

            <p className='lg:text-[1.5rem] text-[1rem] mb-[0.5rem]'><span className='text-[#D4A373] font-black'>
              Experience:
            </span>{years_of_experience}</p>

          </div>
        </div>
        <div className=' w-[100%]'>
          <img className='lg:h-[85vh] md:h-[85vh] object-cover mx-auto ' src={image} alt="" />
        </div>

      </div>
      <h1 className='lg:text-[3rem] text-[2rem] font-black mb-[0.5rem] text-[#D4A373] grid place-items-center w-[100%]'> Recipes</h1>
      <div className=' grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 '>
        {
          recipes.map((recipe, index) => <RecipeCard key={index} recipe={recipe}></RecipeCard>)
        }
      </div>
    </div>
  );
};

export default ChefDetail;