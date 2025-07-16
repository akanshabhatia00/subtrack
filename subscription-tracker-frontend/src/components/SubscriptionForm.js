import React, { useState } from "react";

export default function SubscriptionForm() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    date: "",
    category: "Entertainment",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:5000/api/subscriptions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ⬅️ send auth token
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Subscription added successfully");
        setFormData({ name: "", price: "", date: "", category: "Entertainment" });
      } else {
        alert(data.error || "Failed to add subscription");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="w-full p-2 rounded border"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        className="w-full p-2 rounded border"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        className="w-full p-2 rounded border"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <select
        name="category"
        className="w-full p-2 rounded border"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="Entertainment">Entertainment</option>
        <option value="Education">Education</option>
        <option value="Productivity">Productivity</option>
        <option value="Others">Others</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Subscription
      </button>
    </form>
  );
}
