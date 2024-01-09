'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Home } from '@mui/icons-material';
import toast, { Toaster } from 'react-hot-toast';
import { formatDate } from '@/app/utils/helper';
import { setAuthToken } from '@/app/utils/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginError ,setIsLoginError] = useState(false)
  const router = useRouter();

  useEffect(() => {
    if(isLoginError){
      setTimeout(() => {
        setIsLoginError(false)
      } ,3500)
    }
  },[isLoginError])

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://email-campaign-lnfx.onrender.com/user/login', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        email,
        password,
      });
      console.log("first");
      if (response.data.token) {
        console.log("22222222");
        const token = response.data.token;
        localStorage.clear();
        setAuthToken(token)
        localStorage.setItem('user',JSON.stringify(response.data.user.first_name))
        localStorage.setItem('last_loggedIn',JSON.stringify(formatDate(new Date())))
        setTimeout(() => {
          toast.success(`Welcome back! ${response.data.user.first_name}`)
          router.push('/dashboard');
        }, 1000);
      } else {
        console.log("33333");
        toast.error('Login failed: Invalid user or password'); 
        setEmail('');
        setPassword('');
        setIsLoginError(true)
      }
    } catch (error) {
      console.log("44444");
      toast.error('Uh-oh! Incorrect credentials. Retry!');
      setIsLoginError(true)
      setEmail('');
      setPassword('');
    }
  };


  return (
    <div className='min-h-screen'>
    <div className='flex justify-between px-6 py-4'>
        <p className='text-primary text-2xl font-bold'>logo</p>
        <Link href={'/'}>
        <div className='hover:cursor-pointer rounded-md hover:bg-fadedBg p-2'><Home /></div>
        </Link>
      </div>
    <div className="min-h-screen flex items-start justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md rounded-md w-full space-y-8 bg-white px-10 py-10 email-account-card-shadow">
        <div>
          <h2 className=" text-center text-2xl font-bold text-textDark">Log In</h2>
        </div>
        <form className="mt-8 space-y-6 " onSubmit={handleLogin}>
        <div className="rounded-md shadow-sm space-y-3">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${isLoginError ? 'border border-red-400' : 'border border-borderColor'} appearance-none rounded-md relative block w-full px-3 py-2  placeholder-gray-400 text-textDark focus:outline-none focus:ring-secondary  focus:border-secondary focus:z-10 sm:text-sm`}
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={` ${isLoginError ? 'border border-red-400' : 'border border-borderColor'} appearance-none rounded-md relative block w-full px-3 py-2 border border-borderColor placeholder-gray-400 text-textDark focus:outline-none focus:ring-secondary focus:border-secondary focus:z-10 sm:text-sm`}
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-primary hover:bg-secondary"
            >
              Log In
            </button>
            <Toaster />
          </div>
        </form>
        <p className="text-center">
          Don&apos;t have an account?{' '}
          <span className="text-secondary hover:underline">
            {' '}
            <Link href={'/auth/signup'}>Sign up</Link>{' '}
          </span>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
