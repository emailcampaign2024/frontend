// app/_app.js

import App from 'next/app';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../utils/auth';
import Dashboard from './dashboard/page';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Check authentication on initial load
  if (!isAuthenticated()) {
    // Redirect to login page if not authenticated
    router.push('/auth/login');
  }

  return (
    <>
      <Dashboard {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  // Fetch initial props if the component has them
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;
