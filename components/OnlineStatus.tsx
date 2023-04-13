import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface UserStatus {
  firstName: string;
  lastName: string;
  online: string;
}

const OnlineStatus: React.FC = () => {
  const [userStatus, setUserStatus] = useState<UserStatus | null>(null);

  useEffect(() => {
    const fetchOnlineStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        if (!token || !userId) {
          console.error('Token or user ID not found');
          return;
        }

        const response = await axios.get(
          `http://localhost:3000/api/user/${userId}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setUserStatus(response.data);
      } catch (err) {
        console.error('Failed to fetch online status:', err);
      }
    };

    fetchOnlineStatus();
  }, []);

  if (userStatus === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">PC Online Status</h2>
      <p className="mb-2">
        User: {userStatus.firstName} {userStatus.lastName}
      </p>
      <p
        className={`text-lg ${
          userStatus.online ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {userStatus.online ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default OnlineStatus;
