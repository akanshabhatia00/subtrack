// src/pages/Subscriptions.js
import React, { useEffect, useState } from "react";

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/subscriptions");
        const data = await res.json();
        setSubscriptions(data);
      } catch (err) {
        console.error("Failed to fetch subscriptions:", err);
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <div className="px-10 py-12 bg-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Your Subscriptions</h2>
      <div className="overflow-x-auto rounded-xl shadow bg-white">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 font-semibold text-gray-700">Service</th>
              <th className="p-4 font-semibold text-gray-700">Category</th>
              <th className="p-4 font-semibold text-gray-700">Price</th>
              <th className="p-4 font-semibold text-gray-700">Renewal Date</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.length > 0 ? (
              subscriptions.map((sub, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                  <td className="p-4">{sub.name}</td>
                  <td className="p-4">{sub.category}</td>
                  <td className="p-4">₹{sub.price}</td>
                  <td className="p-4">
                    {new Date(sub.renewalDate).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-400">
                  No subscriptions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscriptions;
