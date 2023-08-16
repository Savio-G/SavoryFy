import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewRecipes from './NewRecipes';

const Home = () => {
  const homePageInfo = useLoaderData()
  const { chef_image_home, recipes } = homePageInfo
  return (
    <>
      <div className='h-full w-[85vw] mx-auto lg:flex p-[1.5rem] gap-4 justify-center align-middle'>
        <div className='w-[100%] my-auto'>
          <h1 className='lg:text-[3rem] text-[2rem] font-black mb-[2rem]'>
            Delve into the Culinary Tapestry of <span className='text-gradient'>Bengal</span>
          </h1>
          <p className='lg:text-[1.5rem] text-[1rem]'>
            Embrace Bengal's Culinary World.
            Meet Chefs, Explore Authentic <br /> Recipes
            – Welcome to SavoryFy!

          </p>
          <button className='auth-button mt-[2rem]'>Login</button>
        </div>
        <div className='w-[100%]'>
          <img className='lg:h-[85vh] md:h-[85vh] mx-auto' src={chef_image_home} alt="homePageImage" />
        </div>
      </div>
      {/* New Recipes Section */}
      <div className='h-full w-[85vw] mx-auto mt-16 '>
        <h2>Checkout our New Recipes</h2>
        <div className='lg:flex gap-[3rem]'>
          {recipes.map((recipe, index) => <NewRecipes
            key={index}
            recipe={recipe}
          ></NewRecipes>)}
        </div>
      </div>
    </>
  );
};

export default Home;