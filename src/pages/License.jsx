
import React, { useState } from "react";
import Forms from "../components/Forms";

function License() {
  const [name, setName] = useState("");
  const [license_number, setLicense_number] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitLicense = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Validation
    if (!name) {
      setMessage("License Name is required.");
      return;
    }

    if (!license_number) {
      setMessage("License Number is required.");
      return;
    }

    setMessage(""); // Clear error messages
    setLoading(true); // Start loading

  
    try {
      const response = await fetch("http://localhost:8000/api/license/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, license_number }),
      });
      
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('license-token',data['license-token']);
        setMessage(data.message || "License verified successfully");
        console.log(response);
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Failed to verify license");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div>
      <Forms
        formTitle="License Form"
        fieldOneLabel="License Name"
        fieldTwoLabel="License Number"
        fieldOneValue={name}
        fieldTwoValue={license_number}
        setFieldOneValue={setName}
        setFieldTwoValue={setLicense_number}
        onSubmit={handleSubmitLicense}
        loading={loading}
        errorMessage={message}
      />
    </div>
  );
}

export default License;
