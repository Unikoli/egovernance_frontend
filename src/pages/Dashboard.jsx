// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import Card from '../components/Card';

// const HomePage = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const location = useLocation(); // Use useLocation to get URL parameters

  

//   useEffect(() => {
//     // Retrieve the login token from localStorage
//     const loginToken = localStorage.getItem('login-token');

//     // Extract the verification token from the URL parameters
//     const urlParams = new URLSearchParams(location.search);
//     const verificationToken = urlParams.get('verification-token'); // Adjust based on the query param name
//     console.log('Verification Token:', verificationToken);

//     // Check if tokens are missing
//     if (!loginToken || !verificationToken) {
//       setError('Missing login or verification token');
//       setIsLoading(false);
//       return;
//     }

//     // Prepare the API request
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/api/home?Verification-Token=${verificationToken}`, {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${loginToken}`,
//           },
//         });

//         // Check if the response is OK and then process the response
//         if (response.ok) {
//           const responseData = await response.json();
//           console.log('Welcome to home page', responseData);
//           setData(responseData); // Set the data if the request is successful
//         } else {
//           // Handle non-OK responses (e.g., 4xx, 5xx errors)
//           const errorResponse = await response.json();
//           setError(errorResponse.error || 'Error fetching data from the server');
//         }
//       } catch (error) {
//         // Handle any errors that occur during the fetch
//         console.error('Something went wrong', error);
//         setError('Something went wrong');
//       } finally {
//         setIsLoading(false); // Set loading to false after the API call finishes
//       }
//     };

//     fetchData();
//   }, [location]); // Trigger useEffect whenever the URL location changes

//   // Handle loading, error, or data display
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
    
//    <div>
//      {/* Navbar */}
//      <nav className="bg-blue-600 text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md">
//         <div className="flex justify-between items-center">
//           <div className="text-xl font-semibold">GOVEASE</div>
//           <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-700 transition duration-200">
//             Logout
//           </button>
//         </div>
//       </nav>
//        <div className="pt-16 px-4"> {/* pt-16 for top padding to leave space for navbar */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <Card 
//           imageSrc="/license_card.webp"
//           title="Smart Licenses"
//           onClick={() => handleCardClick("Smart Licenses")} 
        
//           // description="This is a description for Smart Licenses."
//         />
//         <Card 
//           imageSrc="/voter-details.jpeg"
//           title="Voter Details"
//           onClick={() => handleCardClick("Voter Card")} 
//           // description="This is a description for Voter Details."
//         />
//         <Card 
//           imageSrc="/pan-details.jpg"
//           title="Pan Card"
//           onClick={() => handleCardClick("Pan Card")} 
//           // description="This is a description for Driving License."
//         />
//         <Card 
//           imageSrc="/plus2-details.jpeg"
//           title="Pluse two certificate"
//           onClick={() => handleCardClick("Plus two certificate details")} 
//           // description="This is a description for Smart Licenses."
//         />
//         <Card 
//           imageSrc="/birth-certificate-details.jpg"
//           title="Birth Certificate"
//           onClick={() => handleCardClick("Birth Certificate")} 
//           // description="This is a description for Smart Licenses."
//         />
//         <Card 
//           imageSrc="/citizenship-details.jpg"
//           title="Citizenship"
//           onClick={() => handleCardClick("Citizenship ")} 
//           // description="This is a description for Smart Licenses."
//         />
//       </div>
//     </div>
//    </div>
//   );
// };

// export default HomePage;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleCardClick = async (type) => {
//     const loginToken = localStorage.getItem('login-token'); // Get the login token from localStorage
//     const verificationToken = new URLSearchParams(window.location.search).get('verification-token'); // Get the verification token from URL

//     if (!loginToken || !verificationToken) {
//       setError('Missing login or verification token');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:8000/api/home/${type}?Verification-Token=${verificationToken}`, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${loginToken}`,
//         },
//       });

//       if (response.ok) {
//         const responseData = await response.json();
//         setData(responseData.data); // Store the data if the response is successful
//         console.log(responseData);
//         // You can also redirect or perform other actions based on the response
//       } else {
//         const errorResponse = await response.json();
//         setError(errorResponse.error); // Show error if the response is not OK
//       }
//     } catch (error) {
//       console.error('Something went wrong', error);
//       setError('Something went wrong');
//     }
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="bg-blue-600 text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md">
//         <div className="flex justify-between items-center">
//           <div className="text-xl font-semibold">GOVEASE</div>
//           <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-700 transition duration-200">
//             Logout
//           </button>
//         </div>
//       </nav>

//       <div className="pt-16 px-4">
//         {/* Example Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div
//             className="card"
//             onClick={() => handleCardClick("license")}
//           >
//             <img src="/license_card.webp" alt="Smart Licenses" />
//             <p>Smart Licenses</p>
//           </div>

//           <div
//             className="card"
//             onClick={() => handleCardClick("citizenship")}
//           >
//             <img src="/citizenship-details.jpg" alt="Citizenship" />
//             <p>Citizenship</p>
//           </div>

//           {/* Add more cards as needed */}
//         </div>

//         {/* Display data or error */}
//         {error && <p>{error}</p>}
//         {data && (
//           <div>
//             <h2>Details</h2>
//             <pre>{JSON.stringify(data, null, 1)}</pre>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
// HomePage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card'; // Import the Card component

const Dashboard = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    const loginToken = localStorage.getItem('login-token'); // Get the login token from localStorage
    const verificationToken = new URLSearchParams(window.location.search).get('verification-token'); // Get the verification token from URL



    if (!loginToken || !verificationToken) {
      setError('Missing login or verification token');
      navigate('/select-option');
      return;
    }
  },[navigate]);
  const handleCardClick = async (type) => {
    const loginToken = localStorage.getItem('login-token'); // Get the login token from localStorage
    const verificationToken = new URLSearchParams(window.location.search).get('verification-token'); // Get the verification token from URL

    if (!loginToken || !verificationToken) {
      setError('Missing login or verification token');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/api/home/${type}?Verification-Token=${verificationToken}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${loginToken}`,
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        navigate(`/home/${type}?Verification-Token=${verificationToken}`, { state: { data: responseData.data } });
      } else {
        const errorResponse = await response.json();
        setError(errorResponse.error); // Show error if the response is not OK
      }
    } catch (error) {
      console.error('Something went wrong', error);
      setError('Something went wrong');
    }
  };
  const handlelogout = async () => {
    const loginToken = localStorage.getItem('login-token'); // Get the login token
    const licenseToken = localStorage.getItem('license-token'); // Get the login token
    const citizenshipToken = localStorage.getItem('citizenhsip-token'); // Get the login token
  
    
  
    try {
      // Perform the logout API request
      const response = await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${loginToken}`, // Send the token to authenticate the logout request
        },
      });
  
      if (response.ok) {
        // If the logout is successful, remove the login token from localStorage
        localStorage.removeItem('login-token');
        localStorage.removeItem('license-token');
        localStorage.removeItem('citizenship-token');
        // You can redirect the user to the login page or home page after logout
        navigate('/select-option'); // or navigate('/') for home page
        console.log('Logged out successfully');
      } else {
        const errorResponse = await response.json();
        console.error('Logout failed:', errorResponse.error);
      }
    } catch (error) {
      console.error('Something went wrong during logout:', error);
    }
  };

  return (
    <div>
      <nav className="bg-blue-600 text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">GOVEASE</div>
          <button onClick={handlelogout} className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-700 transition duration-200">
            Logout
          </button>
        </div>
      </nav>

      <div className="pt-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <Card
            imageSrc="/license_card.webp"
            title="Smart Licenses"
            onClick={() => handleCardClick("license")}
          />
          <Card 
            imageSrc="/citizenship-details.jpg"
            title="Citizenship"
            onClick={() => handleCardClick("citizenship")}
          />
          <Card 
            imageSrc="/voter-details.jpeg"
            title="Voter Details"
            onClick={() => handleCardClick("voter")}
          />
          <Card 
            imageSrc="/pan-details.jpg"
            title="Pan Card"
            onClick={() => handleCardClick("pan")}
          />
          <Card 
            imageSrc="/plus2-details.jpeg"
            title="Plus Two Certificate"
            onClick={() => handleCardClick("plus2")}
          />
          <Card 
            imageSrc="/birth-certificate-details.jpg"
            title="Birth Certificate"
            onClick={() => handleCardClick("birth-certificate")}
          />
        </div>

        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Dashboard;
