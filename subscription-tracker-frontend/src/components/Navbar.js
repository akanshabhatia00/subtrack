import React from "react";
import { FaUserCircle, FaPlusSquare, FaCalendarAlt, FaUsers, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 h-screen w-16 bg-[#1a1a2e] text-white flex flex-col items-center py-6 space-y-6 shadow-lg">
      <Link to="/">
        <FaUserCircle className="text-2xl hover:text-purple-400" title="Dashboard" />
      </Link>
      <Link to="/add">
        <FaPlusSquare className="text-2xl hover:text-purple-400" title="Add Subscription" />
      </Link>
      <FaCalendarAlt className="text-2xl hover:text-purple-400" title="Calendar" />
      <FaUsers className="text-2xl hover:text-purple-400" title="Users" />
      <FaCog className="text-2xl hover:text-purple-400 mt-auto" title="Settings" />
      <Link to="/subscriptions" className="text-purple-400 hover:underline">
  View all subscriptions
</Link>
<Link to="/analytics">Analytics</Link>
<Link to="/subscriptions">Subscriptions</Link>
{!localStorage.getItem("token") && (
  <>
    <button>Sign In</button>
    <button>Get Started</button>
  </>
)}




    </nav>
  );
}
