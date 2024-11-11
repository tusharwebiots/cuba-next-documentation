import { useRouter } from 'next/router';
import { useEffect } from 'react';
import GettingStarted from './getting_started';

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/getting_started');
  }, []);

  return <GettingStarted />;
};

export default Home;
