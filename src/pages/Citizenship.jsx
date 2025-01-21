// // import React, { useState } from 'react'
// // import { Form } from 'react-router-dom'
// // import Forms from '../components/Forms'

// // function Citizenship() {
// //     const [name,setName]=useState('');
// //     const [number,setNumber]=useState('');
// //     const [message,setMessage]=useState('');
// //     const [loading,setLoading]=useState(false);

// //     const handleSubmitCitizen= async ()=>{
// //         if (!name) {
// //             setMessage("Citizenship Name is required.");
// //             return false;
// //           }
      
// //           if (!number) {
// //             setMessage("Citizenship Number is required.");
// //             return false;
// //           }
      
// //           // Example of additional validation for Citizenship Number (should be numeric)
// //           if (isNaN(number)) {
// //             setMessage("Citizenship Number should be a valid number.");
// //             return false;
// //           }
      
// //           setMessage(""); // Clear the message if validation is successful
// //           return true;
// //           try {
            
// //             const response = await fetch("http://localhost:8000/api/citizenship/verify", {
// //               method: "POST",
// //               headers: {
// //                 "Content-Type": "application/json",
// //               },
// //               body: JSON.stringify({ name,number }),
// //             });
      
// //             if (response.ok) {
// //             //   setIsOtpSent(true);
// //               setMessage("citizenship verified successfully");
// //             } else {
// //               setMessage("Failed to verify citizenship");
// //             }
// //           } catch (error) {
// //             setMessage("An error occurred. Please try again.");
// //           } finally {
// //             setLoading(false);
// //           }

// //     };
    
      
// //   return (
// //     <div>
// //       <Forms
// //       name='Citizenship Form'
// //       number="citizenship number"
// //       Name="citizenship name"
// //       handleSubmitCitizen={handleSubmitCitizen}
// //       />
// //     </div>
// //   )
// // }

// // export default Citizenship
// import React, { useState } from "react";
// import Forms from "../components/Forms";

// function Citizenship() {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmitCitizen = async (e) => {
//     e.preventDefault(); // Prevent page reload

//     // Validation
//     if (!name) {
//       setMessage("Citizenship Name is required.");
//       return;
//     }

//     if (!number) {
//       setMessage("Citizenship Number is required.");
//       return;
//     }

//     if (isNaN(number)) {
//       setMessage("Citizenship Number should be a valid number.");
//       return;
//     }

//     setMessage(""); // Clear error messages
//     setLoading(true); // Start loading

//     try {
//       const response = await fetch("http://localhost:8000/api/citizenship/verify", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, number }),
//       });

//       if (response.ok) {
//         setMessage("Citizenship verified successfully");
//       } else {
//         setMessage("Failed to verify citizenship");
//       }
//     } catch (error) {
//       setMessage("An error occurred. Please try again.");
//     } finally {
//       setLoading(false); // End loading
//     }
//   };

//   return (
//     <div>
//       <Forms
//         formTitle="Citizenship Form"
//         fieldOneLabel="Citizenship Name"
//         fieldTwoLabel="Citizenship Number"
//         onSubmit={handleSubmitCitizen}
//         loading={loading}
//         errorMessage={message}
//       />
//     </div>
//   );
// }

// export default Citizenship;
import React, { useState } from "react";
import Forms from "../components/Forms";

function Citizenship() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitCitizen = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Validation
    if (!name) {
      setMessage("Citizenship Name is required.");
      return;
    }

    if (!number) {
      setMessage("Citizenship Number is required.");
      return;
    }


    setMessage(""); // Clear error messages
    setLoading(true); // Start loading

    try {
      const response = await fetch("http://localhost:8000/api/citizenship/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, number }),
      });

      if (response.ok) {
        setMessage("Citizenship verified successfully");
        console.log('verifies successfully')
      } else {
        setMessage("Failed to verify citizenship");
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
        formTitle="Citizenship Form"
        fieldOneLabel="Citizenship Name"
        fieldTwoLabel="Citizenship Number"
        fieldOneValue={name}
        fieldTwoValue={number}
        setFieldOneValue={setName}
        setFieldTwoValue={setNumber}
        onSubmit={handleSubmitCitizen}
        loading={loading}
        errorMessage={message}
      />
    </div>
  );
}

export default Citizenship;
