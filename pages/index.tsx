import MainContainer from '../components/MainContainer';
import Authorized from '../components/Authorized';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Index = () => {
  const router = useRouter();

  const { avtorizedStop } = useTypedSelector((state) => state);

  useEffect(() => {
    localStorage.setItem('navigate', 'false');

    if (typeof window !== 'undefined' && !avtorizedStop) {
      router
        .push('/login')
        .then(() => {
          console.log('Redirected to /login');
        })
        .catch((error) => {
          console.error('Error redirecting to /login:', error);
        });
    }
  }, [avtorizedStop]);

  return (
    <MainContainer keywords={'Main Page'}>
      <Authorized />
    </MainContainer>
  );
};

export default Index;
