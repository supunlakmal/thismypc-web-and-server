// containers/DashboardPage.tsx
import jwt, { JwtPayload } from 'jsonwebtoken';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import AdminLayout from '../components/AdminLayout';
import DashboardContent from '../components/Dashboard';

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
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token') as string;
    const userId = localStorage.getItem('userId');

    try {
      const decoded = jwt.decode(token) as JwtPayload | null;

      if (decoded && decoded.exp && decoded.exp * 1000 < Date.now()) {
        router.push('/login');
        return;
      }
    } catch (err) {
      console.error('Error decoding JWT:', err);
      router.push('/login');
      return;
    }

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
      <DashboardContent storageData={storageData} />
    </AdminLayout>
  );
};

export default Dashboard;
