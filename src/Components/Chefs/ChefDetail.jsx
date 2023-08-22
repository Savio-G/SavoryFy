import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetail = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
      chef details will come here
    </div>
  );
};

export default ChefDetail;