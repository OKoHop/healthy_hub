import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';

const SignUpPage = () => {
  return (
    <div>
      SignUpPage
      <AuthForm currentPage={'registrationMain'} />
      <AuthForm currentPage={'goal'} />
      <AuthForm currentPage={'gender&age'} />
      <AuthForm currentPage={'bodyParameters'} />
      <AuthForm currentPage={'activity'} />
    </div>
  );
};

export default SignUpPage;
