// src/components/Sidebar.js
import React from "react";
import { FiHome, FiGrid, FiBarChart2, FiSettings, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menu = [
    { label: "Dashboard", icon: <FiHome />, path: "/" },
    { label: "My Profile", icon: <FiUser />, path: "/profile" }, 
    { label: "Subscriptions", icon: <FiGrid />, path: "/subscriptions" },
    { label: "Analytics", icon: <FiBarChart2 />, path: "/analytics" },
    { label: "Settings", icon: <FiSettings />, path: "/settings" },
  ];

  return (
    <aside className="hidden md:flex flex-col justify-between w-64 h-screen px-6 py-8 bg-white shadow-sm border-r">
      {/* Top section */}
      <div>
        <h1 className="text-2xl font-bold text-purple-600 mb-10">SubTrack</h1>
        <nav className="space-y-4">
          {menu.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      
    </aside>
  );
};

export default Sidebar;
