import React from 'react';
import '../Styles/Loader.css'
const Loading = () => {
  return (
    <div className='h-screen grid place-items-center'>
      <section className="dots-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </section>

    </div>
  );
};

export default Loading;