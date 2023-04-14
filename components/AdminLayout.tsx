import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useCallback } from 'react';
interface AdminLayoutProps {
  children: ReactNode;
}
const AdminLayout = ({ children }: AdminLayoutProps) => {
  const router = useRouter();
  const handleLogout = useCallback(() => {
    // Remove token and userId from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }, [router]);
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="bg-white w-64 flex flex-col p-4">
        <h1 className="text-2xl font-semibold mb-4">Admin Panel</h1>
        <nav>
          <ul>
            <li className="mb-2">
              <Link href="/dashboard">
                <div className="text-gray-600 hover:text-blue-500">
                  Dashboard
                </div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/users">
                <div className="text-gray-600 hover:text-blue-500">Users</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/settings">
                <div className="text-gray-600 hover:text-blue-500">
                  Settings
                </div>
              </Link>
            </li>

            <li className="mb-2">
              <Link href="#">
                <div
                  className="text-gray-600 hover:text-blue-500"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
};

export default AdminLayout;
