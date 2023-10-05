import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <div className='error-page-container'>
      <h2 className='error-type'>
        Error: {status || 404}
      </h2>
      <p>{error?.message}</p>
      <Link to="/">
        <p className='back-to-homepage'>Click here to go back to home page</p>
      </Link>
    </div>
  );
};

export default ErrorPage;