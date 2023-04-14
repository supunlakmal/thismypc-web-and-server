// containers/RegisterPage.tsx
import axios from 'axios';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import RegisterForm from '../components/RegisterForm';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (token && userId) {
      router.push('/dashboard');
    }
  }, [router]);

  const handleSubmit = useCallback(async () => {
    try {
      await axios.post(
        'http://localhost:3000/api/user/register',
        { email, password, firstName, lastName },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      router.push('/login');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.message || 'Registration failed');
      } else {
        setError('Registration failed');
      }
    }
  }, [email, password, firstName, lastName]);

  return (
    <RegisterForm
      email={email}
      password={password}
      firstName={firstName}
      lastName={lastName}
      error={error}
      setEmail={setEmail}
      setPassword={setPassword}
      setFirstName={setFirstName}
      setLastName={setLastName}
      handleSubmit={handleSubmit}
    />
  );
}
