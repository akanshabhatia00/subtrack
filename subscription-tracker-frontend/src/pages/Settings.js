import React from "react";

const Settings = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Settings</h1>

      {/* Account Settings */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Account</h2>
        <div className="bg-white rounded-2xl shadow p-4 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-600">bhatiaakansha2004@gmail.com</p>
            </div>
            <button className="text-sm font-medium text-purple-600 hover:underline">
              Change Email
            </button>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-medium">Password</p>
              <p className="text-gray-600">**********</p>
            </div>
            <button className="text-sm font-medium text-purple-600 hover:underline">
              Change Password
            </button>
          </div>
        </div>
      </section>

      {/* Notifications */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Notifications</h2>
        <div className="bg-white rounded-2xl shadow p-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              defaultChecked
              className="form-checkbox h-5 w-5 text-purple-600"
            />
            <span className="text-gray-700">Email alerts for upcoming payments</span>
          </label>
        </div>
      </section>

      {/* Danger Zone */}
      <section>
        <h2 className="text-xl font-semibold mb-2 text-red-600">Danger Zone</h2>
        <div className="bg-white rounded-2xl shadow p-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Delete My Account
          </button>
        </div>
      </section>
    </div>
  );
};

export default Settings;
