// containers/LoginPage.tsx
import axios from 'axios';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('123@example.com');
  const [password, setPassword] = useState('321');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token') as string;

    if (!token) {
      return;
    }
    try {
      const decoded = jwt.decode(token) as JwtPayload | null;

      if (decoded && decoded.exp && decoded.exp * 1000 < Date.now()) {
        return;
      } else {
        router.push('/dashboard');
      }
    } catch (err) {
      console.error('Error decoding JWT:', err);

      return;
    }
  }, [router]);

  const handleSubmit = useCallback(async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/user/login',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const { token, userId } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);

      router.push('/dashboard');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.message || 'Login failed');
      } else {
        setError('Login failed');
      }
    }
  }, []);

  return (
    <LoginForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};

export default LoginPage;
