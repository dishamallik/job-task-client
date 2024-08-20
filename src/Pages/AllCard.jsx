import React from 'react';

const truncateDescription = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};

const AllCard = ({ mart }) => {
  const { _id, title, price, description, image, rating, category, created_at } = mart;
  const truncatedDescription = truncateDescription(description, 10);

  return (
    <div className="mt-6 w-full sm:w-80 md:w-96 bg-amber-50 shadow-2xl rounded-lg overflow-hidden mx-auto">
      <div className="relative h-48 sm:h-56">
        <img
          src={image}
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-4 sm:px-6 py-4 h-36 sm:h-44 bg-blue-gray-100">
        <h3 className="font-bold text-lg sm:text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-sm sm:text-base">{truncatedDescription}</p>
      </div>
      <div className="px-4 sm:px-6 pt-4 pb-2 bg-gray-50 flex flex-wrap gap-2">
        <span className="bg-blue-300 rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold text-gray-800">
          {category}
        </span>
        <span className="bg-green-300 rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold text-gray-800">
          ${price}
        </span>
        <span className="bg-yellow-300 rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold text-gray-800">
          Rating: {rating?.rate}
        </span>
        <span className="bg-pink-300 rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold text-gray-800">
          Created At: {created_at}
        </span>
      </div>
    </div>
  );
};

export default AllCard;
