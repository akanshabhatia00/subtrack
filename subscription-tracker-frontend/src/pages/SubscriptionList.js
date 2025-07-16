import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SubscriptionList = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/subscriptions')
      .then(res => {
        setSubscriptions(res.data);
      })
      .catch(err => {
        console.error("Error fetching subscriptions:", err);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Subscription List</h2>
      {subscriptions.length === 0 ? (
        <p>No subscriptions found.</p>
      ) : (
        <ul className="space-y-4">
          {subscriptions.map((sub) => (
            <li key={sub._id} className="bg-white shadow p-4 rounded-xl">
              <h3 className="font-semibold">{sub.name}</h3>
              <p>Price: ₹{sub.price}</p>
              <p>Renewal Date: {new Date(sub.renewalDate).toLocaleDateString()}</p>
              <p>Category: {sub.category}</p>
              <p>Status: {sub.isActive ? 'Active' : 'Inactive'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SubscriptionList;
