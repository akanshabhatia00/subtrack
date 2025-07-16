// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../components/Sidebar"; // 👈 Import it at the top




const Home = () => {
  const [subscriptions, setSubscriptions] = useState([]);
const [editData, setEditData] = useState(null); // currently editing subscription
const [formData, setFormData] = useState({
  name: '',
  price: '',
  category: '',
  renewalDate: '',
});
const [showAddForm, setShowAddForm] = useState(false);
const [newSubscription, setNewSubscription] = useState({
  name: '',
  price: '',
  category: '',
  renewalDate: '',
});


const handleEdit = (sub) => {
  setEditData(sub._id);
  setFormData({
    name: sub.name,
    price: sub.price,
    category: sub.category,
    renewalDate: sub.renewalDate.split("T")[0], // format for <input type="date" />
  });
};

 
useEffect(() => {
  const fetchSubscriptions = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:5000/api/subscriptions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    setSubscriptions(data);
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
  }
};


  fetchSubscriptions();
}, []);
const handleDelete = async (id) => {
  try {
    
    const res = await fetch(`http://localhost:5000/api/subscriptions/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setSubscriptions(subscriptions.filter((s) => s._id !== id));
    }
  } catch (err) {
    console.error("Failed to delete:", err);
  }
};
const handleAddSubscription = async (e) => {
  e.preventDefault();
  try {
     const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:5000/api/subscriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSubscription),
    });
    if (res.ok) {
      const added = await res.json();
      setSubscriptions([...subscriptions, added]);
      setNewSubscription({ name: '', price: '', category: '', renewalDate: '' });
      setShowAddForm(false);
    }
  } catch (err) {
    console.error("Failed to add:", err);
  }
};
const navigate = useNavigate();

  return (
    <div className="overflow-y-auto min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
        <div className="text-2xl font-bold text-purple-600">SubTrack</div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-purple-600">Dashboard</a>
          <a href="#" className="hover:text-purple-600">Subscriptions</a>
          <a href="#" className="hover:text-purple-600">Analytics</a>
          <a href="#" className="hover:text-purple-600">Settings</a>
        </nav>
        <div className="space-x-3">
  {!localStorage.getItem("token") ? (
    <>
      <button
        onClick={() => navigate('/signin')}
        className="px-4 py-2 border rounded hover:bg-gray-100"
      >
        Sign In
      </button>
      <button
        onClick={() => navigate('/register')}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Get Started
      </button>
    </>
  ) : (
    <button
      onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/signin";
      }}
      className="px-4 py-2 text-red-600 font-bold hover:underline"
    >
      Logout
    </button>
  )}
</div>


      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-14 bg-white">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Track all your subscriptions in one place
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Never miss a payment or forget about an unused subscription again.
          </p>
          <div className="space-x-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700">
              Start Tracking Now
            </button>
            <button className="border px-6 py-3 rounded-full hover:bg-gray-100">
              Watch Demo
            </button>
          </div>
        </div>
        <img
          src="/your-image-path.png" // Replace with actual image path
          alt="Coin Jar"
          className="w-full md:w-96 h-60 object-cover rounded-xl mt-10 md:mt-0"
        />
      </section>

      <section className="px-10 py-12 bg-gray-50">
  <h2 className="text-2xl font-bold mb-10 text-center text-gray-800">Popular Subscription Categories</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {[
      {
        icon: "/icons/streaming.jpg", // update with your icon path
        title: "Streaming Services",
        desc: "Netflix, Disney+, HBO Max...",
        bg: "bg-purple-100",
      },
      {
        icon: "/icons/family.jpg",
        title: "Family Memberships",
        desc: "Amazon Prime, Apple One...",
        bg: "bg-yellow-100",
      },
      {
        icon: "/icons/software.jpg",
        title: "Software & Tools",
        desc: "Adobe, Notion...",
        bg: "bg-blue-100",
      },
      {
        icon: "/icons/cloud.jpg",
        title: "Cloud Storage",
        desc: "Google Drive, iCloud...",
        bg: "bg-green-100",
      },
    ].map(({ icon, title, desc, bg }, i) => (
      <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300">
        <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-4 ${bg}`}>
          <img src={icon} alt={title} className="w-8 h-8" />
        </div>
        <h3 className="font-semibold text-lg mb-1 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    ))}
  </div>
</section>



      {/* Dashboard Summary */}
<section className="px-10 py-12 bg-white">
  <h2 className="text-2xl font-semibold mb-8 text-gray-800">Your Subscription Dashboard</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Monthly Spend */}
    <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-6 rounded-2xl shadow-md flex flex-col justify-between">
      <div>
        <p className="text-sm text-gray-600 mb-1">Monthly Spend</p>
        <h3 className="text-4xl font-bold text-purple-800">$89.99</h3>
        <p className="text-sm text-green-600 mt-1">+12% from last month</p>
      </div>
    </div>

    {/* Active Subscriptions */}
<div className="bg-gradient-to-r from-purple-100 to-purple-200 p-6 rounded-2xl shadow-md flex flex-col justify-between">
  <div>
    <p className="text-sm text-gray-600 mb-1">Active Subscriptions</p>
    <h3 className="text-4xl font-bold text-purple-800 mb-4">8</h3>
    
    {/* Colorful Dots Legend */}
    <div className="flex flex-wrap gap-2">
      {[
        { color: "bg-red-500", label: "Streaming" },
        { color: "bg-blue-500", label: "Music" },
        { color: "bg-yellow-500", label: "Software" },
        { color: "bg-green-500", label: "Cloud" },
      ].map(({ color, label }, i) => (
        <div key={i} className="flex items-center space-x-1 text-xs text-gray-700">
          <span className={`w-3 h-3 rounded-full ${color}`}></span>
          <span>{label}</span>
        </div>
      ))}
    </div>
  </div>
</div>


    {/* Upcoming Renewals */}
    <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-6 rounded-2xl shadow-md flex flex-col justify-between">
      <div>
        <p className="text-sm text-gray-600 mb-1">Upcoming Renewals</p>
        <h3 className="text-4xl font-bold text-purple-800">$43.98</h3>
        <p className="text-sm text-yellow-600 mt-1">Netflix($17.99) renews in 2 days!</p>
      </div>
    </div>
  </div>
</section>


      {/* Active Subscriptions Table */}
      <section className="px-10 py-14">
        <h2 className="text-2xl font-bold mb-6">Active Subscriptions</h2>
        <div className="overflow-x-auto rounded-xl shadow bg-white">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                {["Service", "Category", "Price", "Billing Cycle", "Next Payment", "Actions"].map((head, i) => (
                  <th key={i} className="p-4 font-semibold text-gray-700">{head}</th>
                ))}
              </tr>
            </thead>
            {subscriptions.length > 0 ? (
  subscriptions.map((sub, i) => (
    <tr key={i} className="border-t hover:bg-gray-50">
      <td className="p-4">{sub.name}</td>
      <td className="p-4">{sub.category}</td>
      <td className="p-4">₹{sub.price}</td>
      <td className="p-4">{sub.billingCycle || "Monthly"}</td>
      <td className="p-4">
        {new Date(sub.renewalDate).toLocaleDateString()}{" "}
        <span className="text-sm text-gray-400">
          {/* optional: calculate remaining days */}
        </span>
      </td>
      <td className="p-4 space-x-2">
        <button
  className="text-blue-600 hover:underline"
  onClick={() => handleEdit(sub)}
>
  Edit
</button>

        <button
          onClick={() => handleDelete(sub._id)}
          className="text-red-500 hover:underline"
        >
          Cancel
        </button>
      </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="6" className="text-center p-4 text-gray-400">
      No subscriptions found.
    </td>
  </tr>
)}

          </table>
          {/* Edit Subscription Form (Visible only when editing) */}
{editData && (
  <div className="mt-6 p-6 bg-gray-50 border rounded-xl">
    <h3 className="text-xl font-semibold mb-4">Edit Subscription</h3>
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          const res = await fetch(`http://localhost:5000/api/subscriptions/${editData}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          if (res.ok) {
            const updated = await res.json();
            setSubscriptions(subscriptions.map((s) => (s._id === editData ? updated : s)));
            setEditData(null); // close form
          }
        } catch (err) {
          console.error("Update failed:", err);
        }
      }}
      className="grid md:grid-cols-2 gap-4"
    >
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="p-2 border rounded"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        className="p-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        className="p-2 border rounded"
        required
      />
      <input
        type="date"
        value={formData.renewalDate}
        onChange={(e) => setFormData({ ...formData, renewalDate: e.target.value })}
        className="p-2 border rounded"
        required
      />
      <div className="col-span-2 space-x-3 mt-2">
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Save
        </button>
        <button
          type="button"
          onClick={() => setEditData(null)}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
)}

        </div>
       <button
  onClick={() => setShowAddForm(!showAddForm)}
  className="mt-6 px-5 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700"
>
  {showAddForm ? "Close" : "+ Add New Subscription"}
</button>
{showAddForm && (
  <form
    onSubmit={handleAddSubscription}
    className="mt-6 p-6 bg-gray-50 border rounded-xl grid md:grid-cols-2 gap-4"
  >
    <input
      type="text"
      placeholder="Name"
      value={newSubscription.name}
      onChange={(e) => setNewSubscription({ ...newSubscription, name: e.target.value })}
      className="p-2 border rounded"
      required
    />
    <input
      type="number"
      placeholder="Price"
      value={newSubscription.price}
      onChange={(e) => setNewSubscription({ ...newSubscription, price: e.target.value })}
      className="p-2 border rounded"
      required
    />
    <input
      type="text"
      placeholder="Category"
      value={newSubscription.category}
      onChange={(e) => setNewSubscription({ ...newSubscription, category: e.target.value })}
      className="p-2 border rounded"
      required
    />
    <input
      type="date"
      value={newSubscription.renewalDate}
      onChange={(e) => setNewSubscription({ ...newSubscription, renewalDate: e.target.value })}
      className="p-2 border rounded"
      required
    />
    <div className="col-span-2 space-x-3 mt-2">
      <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
        Add
      </button>
      <button
        type="button"
        onClick={() => setShowAddForm(false)}
        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
      >
        Cancel
      </button>
    </div>
  </form>
)}


      </section>

      {/* How SubTrack Works */}
      <section className="bg-gray-100 px-10 py-16">
        <h2 className="text-2xl font-bold mb-10 text-center">How SubTrack Works</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { title: "Connect Your Accounts", desc: "Link bank accounts and credit cards.", icon: "🔗" },
            { title: "Track & Analyze", desc: "Get insights on spending habits.", icon: "📊" },
            { title: "Optimize & Save", desc: "Find ways to reduce recurring costs.", icon: "💡" },
          ].map(({ title, desc, icon }, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-600 mb-2">{desc}</p>
              <button className="text-purple-600 text-sm hover:underline">Learn More →</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
