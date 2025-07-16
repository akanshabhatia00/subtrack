// src/components/SubscriptionCard.js
import React from 'react';

const SubscriptionCard = ({ subscription }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition duration-200">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold text-gray-900">{subscription.name}</h2>
        <span className="text-purple-600 font-medium">₹{subscription.price}</span>
      </div>
      <p className="text-sm text-gray-500">Renews on: {subscription.date}</p>
      <p className="text-sm text-gray-500">Category: {subscription.category}</p>

      <div className="flex justify-end gap-2 mt-4">
        <button className="text-sm text-blue-600 hover:underline">Edit</button>
        <button className="text-sm text-red-500 hover:underline">Delete</button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
