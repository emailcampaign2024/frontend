'use client'
import { validateEmail } from '@/app/utils/helper';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ConnectAccount = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter()

  const handleConnect = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    setEmail('');
    setPassword('');
    setError('');
  };

  const handleConnectClick = () => {
    if(!validateEmail(email)){
      setError('Please enter a valid email address')
      return ;
    }

    axios.post('https://email-campaign.onrender.com/email/add-user', {email, password})
    .then((response)=> {
      console.log('Post request successful :', response.data) 
      router.push('/dashboard/emailAccounts')
      toast.success('Email added successfully !')
      setShowModal(false);
      setEmail('');
      setPassword('');
      setError('');
    })
    .catch((error) => {
      console.error('Error:', error);
      toast.error('Failed to connect. Please try again.')
      setError('Error connecting. Please try again.');
    });
  };

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <button
        type="button"
        className='px-6 py-3 bg-primary hover:bg-primaryDark text-white rounded-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        onClick={handleConnect}
      >
        Connect with Gmail / G-suite
      </button>


      {showModal && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-6 rounded-md shadow-md'>
            <h2 className='text-xl text-slate-900 w-[500px] font-semibold mb-4'>Connect Account</h2>
            <div className='mb-4'>
              <input
                type='email'
                id='email'
                value={email}
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-3 py-2  rounded-md  focus:ring-secondary focus:border-secondary focus:outline-none border border-borderColor'
              />
            </div>
            <div className='mb-4'>
              <input
                type='password'
                id='password'
                value={password}
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}
                className='w-full px-3 py-2 rounded-md  focus:ring-secondary focus:border-secondary focus:outline-none border border-borderColor'
              />
            </div>
            <div className='flex justify-end space-x-4'>
              <button
                className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md'
                onClick={handleConnectClick}
              >
                Connect
              </button>
              <button
                className='bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-md shadow-md'
                onClick={handleCancel}
              >
                Cancel
              </button>
              <Toaster />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectAccount;