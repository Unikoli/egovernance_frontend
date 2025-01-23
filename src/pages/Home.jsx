// DetailsPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Get the data passed from the HomePage

  if (!data) {
    return <p>No details available.</p>;
  }

  return (
    <div className="pt-16 px-4">
      <h1>Details</h1>
      <pre>{JSON.stringify(data, null, 1)}</pre>
    </div>
  );
};

export default Home;
