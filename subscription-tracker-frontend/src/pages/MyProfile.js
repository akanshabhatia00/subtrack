import React from "react";
import { FaBell, FaEnvelope, FaLock } from "react-icons/fa";

const MyProfile = () => {
  return (
    <div className="p-6 md:p-10 w-full bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="col-span-1 bg-white rounded-2xl p-6 shadow">
          <div className="flex flex-col items-center text-center">
            <img
              className="w-24 h-24 rounded-full mb-4"
              src="https://via.placeholder.com/150"
              alt="User Avatar"
            />
            <h2 className="text-xl font-semibold">Sarah Johnson</h2>
            <p className="text-sm text-gray-500">Premium Member</p>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700 text-sm mb-1">Full Name</label>
              <input className="w-full px-4 py-2 border rounded-lg" type="text" value="Sarah Johnson" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Email Address</label>
              <input className="w-full px-4 py-2 border rounded-lg" type="email" value="sarah.johnson@example.com" />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Phone Number (Optional)</label>
              <input className="w-full px-4 py-2 border rounded-lg" type="text" value="+1 (555) 123-4567" />
            </div>
            <button className="flex items-center justify-center w-full bg-gray-200 py-2 rounded-md text-sm text-gray-700">
              <FaLock className="mr-2" /> Change Password
            </button>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold">Save Changes</button>
          </div>

          <div className="mt-6 border-t pt-4">
            <h3 className="text-md font-semibold mb-2">Preferences</h3>
            <div className="flex justify-between items-center mb-2">
              <span>Email Notifications</span>
              <input type="checkbox" checked className="form-checkbox h-5 w-5 text-purple-600" />
            </div>
            <div className="flex justify-between items-center">
              <span>Payment Reminders</span>
              <input type="checkbox" checked className="form-checkbox h-5 w-5 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Summary and Active Subscriptions */}
        <div className="col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-2xl shadow text-center">
              <p className="text-sm text-gray-500">Active Subscriptions</p>
              <h3 className="text-xl font-bold mt-1">8</h3>
              <p className="text-xs text-green-500 mt-1">2 added this month</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow text-center">
              <p className="text-sm text-gray-500">Monthly Spending</p>
              <h3 className="text-xl font-bold mt-1">$86.49</h3>
              <p className="text-xs text-green-500 mt-1">$14.99 less than last month</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow text-center">
              <p className="text-sm text-gray-500">Next Payment</p>
              <h3 className="text-xl font-bold mt-1">May 12</h3>
              <p className="text-xs text-gray-400 mt-1">Netflix - $12.99</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow text-center">
              <p className="text-sm text-gray-500">Expiring Soon</p>
              <h3 className="text-xl font-bold mt-1">2</h3>
              <p className="text-xs text-red-400 mt-1">Within next 7 days</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Active Subscriptions</h3>
              <button className="text-purple-600 font-medium">+ View All Subscriptions</button>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Netflix</p>
                  <p className="text-sm text-gray-500">Standard Plan</p>
                </div>
                <p className="text-sm font-semibold">$12.99 Monthly</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">Spotify</p>
                  <p className="text-sm text-gray-500">Premium</p>
                </div>
                <p className="text-sm font-semibold">$9.99 Monthly</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">iCloud+</p>
                  <p className="text-sm text-gray-500">50GB Storage</p>
                </div>
                <p className="text-sm font-semibold">$0.99 Monthly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
