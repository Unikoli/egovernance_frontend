import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation(); // Use useLocation to get URL parameters

  useEffect(() => {
    // Retrieve the login token from localStorage
    const loginToken = localStorage.getItem('login-token');

    // Extract the verification token from the URL parameters
    const urlParams = new URLSearchParams(location.search);
    const verificationToken = urlParams.get('verification-token'); // Adjust based on the query param name
    console.log('Verification Token:', verificationToken);

    // Check if tokens are missing
    if (!loginToken || !verificationToken) {
      setError('Missing login or verification token');
      setIsLoading(false);
      return;
    }

    // Prepare the API request
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/home?Verification-Token=${verificationToken}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${loginToken}`,
          },
        });

        // Check if the response is OK and then process the response
        if (response.ok) {
          const responseData = await response.json();
          console.log('Welcome to home page', responseData);
          setData(responseData); // Set the data if the request is successful
        } else {
          // Handle non-OK responses (e.g., 4xx, 5xx errors)
          const errorResponse = await response.json();
          setError(errorResponse.error || 'Error fetching data from the server');
        }
      } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Something went wrong', error);
        setError('Something went wrong');
      } finally {
        setIsLoading(false); // Set loading to false after the API call finishes
      }
    };

    fetchData();
  }, [location]); // Trigger useEffect whenever the URL location changes

  // Handle loading, error, or data display
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    
   <div>
     {/* Navbar */}
     <nav className="bg-blue-600 text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">GOVEASE</div>
          <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-700 transition duration-200">
            Logout
          </button>
        </div>
      </nav>
       <div className="pt-16 px-4"> {/* pt-16 for top padding to leave space for navbar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card 
          imageSrc="/license_card.webp"
          title="Smart Licenses"
          // description="This is a description for Smart Licenses."
        />
        <Card 
          imageSrc="/voter-details.jpeg"
          title="Voter Details"
          // description="This is a description for Voter Details."
        />
        <Card 
          imageSrc="/pan-details.jpg"
          title="Pan Card"
          // description="This is a description for Driving License."
        />
        <Card 
          imageSrc="/plus2-details.jpeg"
          title="Pluse two certificate"
          // description="This is a description for Smart Licenses."
        />
        <Card 
          imageSrc="/birth-certificate-details.jpg"
          title="Birth Certificate"
          // description="This is a description for Smart Licenses."
        />
        <Card 
          imageSrc="/citizenship-details.jpg"
          title="Citizenship"
          // description="This is a description for Smart Licenses."
        />
      </div>
    </div>
   </div>
  );
};

export default HomePage;
