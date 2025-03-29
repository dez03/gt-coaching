// src/pages/Admin.jsx
import React, { useEffect, useState } from 'react';

function Admin() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    // Replace with your real API call
    const fetchEmails = async () => {
      try {
        const res = await fetch('/api/users'); // backend route
        const data = await res.json();
        setEmails(data);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchEmails();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <ul className="space-y-2">
        {emails.map((email, index) => (
          <li key={index} className="bg-gray-800 p-4 rounded">{email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;