

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import VideoBackground from '../VideoBackground/VideoBackground';

export const Layout: React.FC = () => {



  return (
    <>
    <Header />
    <Suspense>
      <Outlet />
    </Suspense>
    <Footer />
    <VideoBackground />
  </>
  );
};
