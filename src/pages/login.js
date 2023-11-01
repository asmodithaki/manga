import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <div>
      <h1>Login to Automatika</h1>
      <form>
        {/* Your form fields and submission logic here */}
      </form>
      <Link href="/">
        <a>Go back to home</a>
      </Link>
    </div>
  );
};

export default Login;
