import React, { useState, useEffect } from 'react';
import HomeType from './HomeType'; // Import the component

const HomePage = () => {
  const [forms, setForms] = useState([]);
  const [verificationToken, setVerificationToken] = useState(localStorage.getItem('verification_token'));

  useEffect(() => {
    if (!verificationToken) {
      console.log('Verification token is missing!');
      return;
    }

    fetch('/home', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Use your auth token
        'Verification-Token': verificationToken, // Send the verification token here
      }
    })
    .then(response => response.json())
    .then(data => setForms(data.forms))
    .catch(error => console.error('Error fetching form data:', error));
  }, [verificationToken]);

  return (
    <div className="grid-container">
      {forms.map((form) => (
        <div key={form} className="form-block">
          <button onClick={() => showFormData(form)}>{form}</button>
        </div>
      ))}
    </div>
  );
};

const showFormData = (type) => {
  // You can display a modal or redirect to a detailed page
  window.location.href = `/home/${type}`;
};

export default HomePage;
