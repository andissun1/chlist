import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import style from './MainLayout.module.css';
import { Footer } from '../../components/Footer/Footer';
import { useEffect } from 'react';

export const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.ym(109903079, 'hit', location.pathname);
  }, [location.pathname]);

  return (
    <div className={style.mainLayout}>
      <Header />
      <div className={style.page} children={<Outlet />} />
      <Footer />
    </div>
  );
};
