// components/Dashboard.tsx
import React from 'react';
import OnlineStatus from './OnlineStatus';

interface DashboardProps {
  storageData: {
    id: number;
    name: string;
    capacity: string;
  }[];
}

const Dashboard: React.FC<DashboardProps> = ({ storageData }) => {
  return (
    <>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p>
        Welcome to your admin panel dashboard. Storage information is displayed
        below:
      </p>
      <OnlineStatus />
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {storageData.map((storage) => (
          <div
            key={storage.id}
            className="bg-white rounded-lg shadow-md p-4"
          >
            <h2 className="text-xl font-semibold mb-2">{storage.name}</h2>
            <p className="text-gray-500">Capacity: {storage.capacity}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
