import { useEffect } from 'react';
import { io } from 'socket.io-client';
import AdminLayout from '../components/AdminLayout';
import OnlineStatus from '../components/OnlineStatus';
const storageData = [
  {
    id: 1,
    name: 'Storage 1',
    capacity: '1 TB',
  },
  {
    id: 2,
    name: 'Storage 2',
    capacity: '2 TB',
  },
  {
    id: 3,
    name: 'Storage 3',
    capacity: '500 GB',
  },
];

const Dashboard: React.FC = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    const socket = io('http://localhost:3001');
    console.log({ socket });

    socket.emit('joinFromWeb', {
      data: {
        userId,
        token,
      },
    });
  }, []);
  return (
    <AdminLayout>
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
    </AdminLayout>
  );
};

export default Dashboard;
