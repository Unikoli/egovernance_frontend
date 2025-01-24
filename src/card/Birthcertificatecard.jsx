import React from "react";

const BirthCertificate = ({
  details,
}) => {
  return (
    <div>
      {details.map((item, index) => (
        <div
          key={index}
          className="max-w-4xl mx-auto mt-10 border border-black p-6 bg-white"
        >
          <div className="text-center">
            <h1 className="text-lg font-bold">जन्म दर्ताको प्रमाण पत्र</h1>
            <p>स्थानीय तहको कार्यालय</p>
            <p>मन्त्रालय, नेपाल सरकार</p>
          </div>

          <div className="flex justify-between mt-4">
            <div>
              <p>
                <strong>वडा नं:</strong> ______
              </p>
              <p>
                <strong>पञ्जिकाधिकारी:</strong> ______
              </p>
            </div>
            <div>
              <p>
                <strong>दर्ता नं:</strong> {item.birthcertificate_number || "N/A"}
              </p>
              <p>
                <strong>दर्ता मिति:</strong> {item.issue_date || "YYYY-MM-DD"}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p>
              यो प्रमाणित गरिन्छ कि श्री/श्रीमती{" "}
              <strong>{item.father_name || "John Doe"}</strong> र श्रीमती{" "}
              <strong>{item.mother_name || "Emily Doe"}</strong> को सन्तान{" "}
              <strong>{item.name || "Baby Name"}</strong> को स्थायी ठेगाना{" "}
              <strong>{item.address || "Address"}</strong> हो।
            </p>
            <p>
              जन्म मिति <strong>XXXXXXXXX</strong> (वर्णमालामा) र{" "}
              <strong>XXXXXXXXX</strong> (अंकमा) रहेको छ।
            </p>
            <p>बालक/बालिकाको जन्मको समय <strong>XXXXXXXXX</strong> हो।</p>
            <p>बालक/बालिकाको लिङ्ग: <strong>XXXXXXXXX</strong>।</p>
            <p>बालक/बालिकाको धर्म: <strong>XXXXXXXXX</strong>।</p>
            <p>बालक/बालिकाको जात: <strong>XXXXXXXXX</strong>।</p>
            <p>
              यो प्रमाणित गरिन्छ कि माथि उल्लेखित सबै विवरण सही छन्।
            </p>
            <p>
              पञ्जीकृत गर्ने व्यक्तिको नाम: <strong>XXXXXXXXX</strong>।
            </p>
            <p>पञ्जीकृत मिति: <strong>XXXXXXXXX</strong>।</p>
            <p>
              यस प्रमाण पत्रलाई कुनै पनि सरकारी प्रयोजनका लागि प्रयोग गर्न सकिन्छ।
            </p>
          </div>

          <div className="flex justify-between mt-10">
            <div>
              <p>
                <strong>पञ्जिकाधिकारीको नाम:</strong> ______
              </p>
              <p>मिति:</p>
            </div>
            <div>
              <p>दस्तखत:</p>
              
                <img
                  src="../signature.webp"
                  alt="Signature"
                  className="h-12 mt-2"
                />
             
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BirthCertificate;
