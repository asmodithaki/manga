
import React from 'react';
import { useRouter } from 'next/router';
import TaskList from '../components/TaskList';  // Import the TaskList component


const Automatika = () => {
  const router = useRouter();

  // Placeholder for user authentication check
  const isAuthenticated = true;  // Set this based on your auth logic

  if (!isAuthenticated) {
    router.push('/login');
    return null;
  }

  return (
    <div>
      <h1>Welcome to Automatika</h1>
      <TaskList /> 
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { req } = context;
  // Replace the next line with actual validation logic
  const isAuthenticated = req.headers.cookie?.includes('auth_token=valid');

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Automatika;
