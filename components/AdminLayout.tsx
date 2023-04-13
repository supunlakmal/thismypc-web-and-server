import Link from 'next/link';
import { ReactNode } from 'react';
interface AdminLayoutProps {
  children: ReactNode;
}
const AdminLayout = ({ children }: AdminLayoutProps) => {
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
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
};

export default AdminLayout;
