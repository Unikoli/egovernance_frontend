import React from "react";

function Card(
     {   imageSrc,
          title,
          description,
          onClick
         }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 cursor-pointer">
      <img
        src={imageSrc}
        alt={title}
        onClick={onClick}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}

export default Card;
