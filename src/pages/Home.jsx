// // DetailsPage.js
// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const Home = () => {
//   const location = useLocation();
//   const { data,type } = location.state || {}; // Get the data passed from the HomePage

//   if (!data) {
//     return <p>No details available.</p>;
//   }
//   console.log(data);
//   console.log(type);


//   return (
//     <div className="pt-16 px-4">
//       <h1>Details</h1>
//       <pre>{JSON.stringify(data, null, 1)}</pre>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
const location = useLocation();
  const { data,type } = location.state || {}; 

  
  useEffect(() => {
    console.log(type);

    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = urlParams.get('type');
    console.log(type);
    if (!type) {
      // navigate('/select-option'); // If type is missing, redirect to select-option
      console.log('type is missing')
      return;
    }

    // Simulate fetching data for the type
    const fetchDetails = async () => {
      const loginToken = localStorage.getItem('login-token'); // Get the login token from localStorage
      const verificationToken = new URLSearchParams(window.location.search).get('Verification-Token'); // Get the verification token from URL
    
      console.log('Verification Token:', verificationToken);  // Log verification token for debugging
      console.log('Login Token:', loginToken);  // Log login token for debugging
    
      if (!loginToken) {
        console.log('Missing login token');
        return; // Exit if the login token is missing
      }
      
      if (!verificationToken) {
        console.log('Missing verification token');
        return; // Exit if the verification token is missing
      }
    
      try {
        const response = await fetch(`http://localhost:8000/api/home/${type}?Verification-Token=${verificationToken}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${loginToken}`, // Add the Authorization header
          },
        });
    
        if (response.ok) {
          const data = await response.json();
          setDetails(data.data);
          console.log(details) // Set the details state with the fetched data
        } else {
          const errorResponse = await response.json();
          setError(errorResponse.error || 'Something went wrong with the API');
        }
      } catch (err) {
        console.error('Error fetching details:', err);
        setError('Something went wrong'); // Display a generic error if something goes wrong with the fetch
      }
    };
    

    fetchDetails();
  }, [type, navigate]);

  // Render loading state or error message if necessary
  // if (!details && !error) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>{error}</div>;
  }

  // Render details for each type
  const renderDetails = () => {
    if (!details) {
      return <div className="text-center text-gray-500">Loading...</div>; // Loading indicator
    }
  
    switch (type) {
      case 'citizenship':
        return (
          <div className="space-y-6">
            <div className="relative">
              <img 
                src="/citizenship-details.jpg" 
                alt="Citizenship" 
                className="w-cover h-cover object-cover rounded-lg shadow-md" 
              />
              <div className="absolute bottom-4 left-4 bg-black text-white p-2 rounded-md">
                <h2 className="text-2xl font-bold">Citizenship Details</h2>
              </div>
            </div>
  
            {details.map((item) => (
              <div key={item.id} className="p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                <p className="text-lg text-gray-700"><strong>Number:</strong> {item.number}</p>
                <p className="text-lg text-gray-700"><strong>Name:</strong> {item.name}</p>
                <p className="text-lg text-gray-700"><strong>Issue Date:</strong> {item.issue_date}</p>
                <p className="text-lg text-gray-700"><strong>Address:</strong> {item.address}</p>
                <p className="text-lg text-gray-700"><strong>User ID:</strong> {item.user_id}</p>
              </div>
            ))}
          </div>
        );
  
      case 'license':
        return (
          <div className="space-y-6">
            <div className="relative">
              <img 
                src="/license_card.webp" 
                alt="Citizenship" 
                className="w-200 h-200 object-cover rounded-lg shadow-md" 
              />
              <div className="absolute bottom-4 left-4 bg-black text-white p-2 rounded-md">
                <h2 className="text-2xl font-bold">license Details</h2>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">License Details</h2>
            {details.map((item) => (
              <div key={item.id} className="p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                <p className="text-lg text-gray-700"><strong>License Number:</strong> {item.license_number}</p>
                <p className="text-lg text-gray-700"><strong>Name:</strong> {item.name}</p>
                <p className="text-lg text-gray-700"><strong>Vehicle Type:</strong> {item.vehicle_type}</p>
                <p className="text-lg text-gray-700"><strong>Issue Date:</strong> {item.issue_date}</p>
                <p className="text-lg text-gray-700"><strong>User ID:</strong> {item.user_id}</p>
              </div>
            ))}
          </div>
        );
  
      case 'voter':
        return (
          <div className="space-y-6">
            <div className="relative">
              <img 
                src="/voter-details.jpeg" 
                alt="Citizenship" 
                className="w-200 h-200 object-cover rounded-lg shadow-md" 
              />
              <div className="absolute bottom-4 left-4 bg-black text-white p-2 rounded-md">
                <h2 className="text-2xl font-bold">Voter Details</h2>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Voter Details</h2>
            {details.map((item) => (
              <div key={item.id} className="p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                <p className="text-lg text-gray-700"><strong>Voter Number:</strong> {item.voter_number}</p>
                <p className="text-lg text-gray-700"><strong>Name:</strong> {item.name}</p>
                <p className="text-lg text-gray-700"><strong>Issue Date:</strong> {item.issue_date}</p>
                <p className="text-lg text-gray-700"><strong>Address:</strong> {item.address}</p>
                <p className="text-lg text-gray-700"><strong>User ID:</strong> {item.user_id}</p>
              </div>
            ))}
          </div>
        );
  
      case 'pan':
        return (
          <div className="space-y-6">
            <div className="relative">
              <img 
                src="/pan-details.jpg" 
                alt="Citizenship" 
                className="w-200 h-200 object-cover rounded-lg shadow-md" 
              />
              <div className="absolute bottom-4 left-4 bg-black text-white p-2 rounded-md">
                <h2 className="text-2xl font-bold">Pan Details</h2>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">PAN Card Details</h2>
            {details.map((item) => (
              <div key={item.id} className="p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                <p className="text-lg text-gray-700"><strong>PAN Number:</strong> {item.pan_number}</p>
                <p className="text-lg text-gray-700"><strong>Issued Date:</strong> {item.issued_date}</p>
                <p className="text-lg text-gray-700"><strong>Address:</strong> {item.address}</p>
                <p className="text-lg text-gray-700"><strong>User ID:</strong> {item.user_id}</p>
              </div>
            ))}
          </div>
        );
  
      case 'birthcertificate':
        return (
          <div className="space-y-6">
            <div className="relative">
              <img 
                src="/birth-certificate-details.jpg" 
                alt="Citizenship" 
                className="w-100 h-100 object-cover rounded-lg shadow-md" 
              />
              <div className="absolute bottom-4 left-4 bg-black text-white p-2 rounded-md">
                <h2 className="text-2xl font-bold">Birth Certificate Details</h2>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Birth Certificate Details</h2>
            {details.map((item) => (
              <div key={item.id} className="p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                <p className="text-lg text-gray-700"><strong>Name:</strong> {item.name}</p>
                <p className="text-lg text-gray-700"><strong>Birth Certificate Number:</strong> {item.birthcertificate_number}</p>
                <p className="text-lg text-gray-700"><strong>Address:</strong> {item.address}</p>
                <p className="text-lg text-gray-700"><strong>Father's Name:</strong> {item.father_name}</p>
                <p className="text-lg text-gray-700"><strong>Mother's Name:</strong> {item.mother_name}</p>
              </div>
            ))}
          </div>
        );
        case 'plus2':
          return (
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="/plus2-details.jpeg" 
                  alt="Citizenship" 
                  className="w-cover h-cover object-cover rounded-lg shadow-md" 
                />
                {/* <div className="absolute bottom-4 left-4 bg-black text-white p-2 rounded-md">
                  <h2 className="text-2xl font-bold">Plus Certificate Details</h2>
                </div> */}
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Plus2 Certificate Details</h2>
              {details.map((item) => (
                <div key={item.id} className="p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                  <p className="text-lg text-gray-700"><strong>Name:</strong> {item.name}</p>
                  <p className="text-lg text-gray-700"><strong>Birth Certificate Number:</strong> {item.birthcertificate_number}</p>
                  <p className="text-lg text-gray-700"><strong>Address:</strong> {item.address}</p>
                  <p className="text-lg text-gray-700"><strong>Father's Name:</strong> {item.father_name}</p>
                  <p className="text-lg text-gray-700"><strong>Mother's Name:</strong> {item.mother_name}</p>
                </div>
              ))}
            </div>
          );
  
      default:
        return <div className="text-center text-gray-500">No details available for this type</div>;
    }
  };
  
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
      >
        Go Back
      </button>
      <div>{renderDetails()}</div>
    </div>
  );
  
};

export default Home;
