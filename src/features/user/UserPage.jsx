// src/features/user/UserPage.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./userSlice";

export default function UserPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email) {
      setError("All fields are required.");
      setConfirmation("");
      return;
    }
    dispatch(updateUser({ firstName, lastName, email }));
    setConfirmation("Profile updated successfully!");
    setError("");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      {error && <div className="text-red-500">{error}</div>}
      {confirmation && <div className="text-green-500">{confirmation}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}
