'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Home } from '@mui/icons-material';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';


const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter()


  const handleSignUp = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://email-campaign.onrender.com/user/signup', {
        firstName,
        lastName,
        email,
        password,
      });
  
      if (response.data.error) {
        const errorMessage = response.data.error;
  
        if (errorMessage === 'Email address already exists') {
          console.log('already exists')
          toast.error('Email already exists. Please use a different email.');
        } else if (errorMessage === 'Invalid email format') {
          toast.error('Invalid email format. Please enter a valid email.');
        } else {
          toast.error('Signup failed. Please try again later.');
        }
      } else if (response.data.token) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        router.push('/auth');
        toast.success('Signed up successfully!');
      } else {
        toast.error('Signup failed. Please try again later.');
      }
    } catch (error) {
      toast.error('Error during signup:', error.message);
      setError('Error during Signup');
    }
  };
  
  
  

  return (
    <div className='lg:h-screen w-full space-y-10'>
      <div className='flex justify-between px-6 py-4'>
        <p className='text-primary text-2xl font-bold'>logo</p>
        <Link href={'/'}>
        <div className='hover:cursor-pointer rounded-md  hover:bg-fadedBg p-2'><Home /></div>
        </Link>
      </div>
    <div className='w-full  flex justify-center items-center '>
      <div className='lg:w-[450px] sm:w-full md:w-[400px] w-full h-auto bg-white rounded-md  px-8 py-10 '>
        <div className='text-[#0052CC] text-[34px] text-center font-bold tracking-wider'></div>
        <div className='py-4'>
          <p className='text-center mb-8 text-2xl  font-semibold text-textDark'>Create a new account</p>
          <form onSubmit={handleSignUp}>
            <div className='flex justify-between gap-2'>
            <input
              type='text'
              placeholder='first name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='w-full py-2 mb-4 px-2 focus:ring-secondary focus:border-secondary focus:outline-none border border-borderColor rounded-md'
              required
            />
            <input
              type='text'
              placeholder='last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='w-full py-2 mb-4 px-2 focus:ring-secondary focus:border-secondary focus:outline-none border border-borderColor rounded-md'
              required
            />
            </div>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full py-2 mb-4 px-2 focus:ring-secondary focus:border-secondary focus:outline-none   border border-borderColor rounded-md'
              required
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full py-2 mb-8 px-2 focus:ring-secondary focus:border-secondary focus:outline-none   border border-borderColor rounded-md'
              required
            />
            <p className='text-slate-800 mb-4 text-sm'>
              By signing up, I accept the ... <span className='text-secondary font-semibold'>terms of Service</span> and acknowledge the <span className='text-secondary font-semibold'>Privacy Policy</span>.
            </p>
            <button
              type='submit'
              className='w-full font-semibold text-white bg-secondary mb-4 py-2 rounded-sm hover:bg-primary'
            >
              Sign up
            </button>
            <Toaster />
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
