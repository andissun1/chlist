import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import style from './MainLayout.module.css';
import { Footer } from '../../components/Footer/Footer';

export const MainLayout = () => {
  return (
    <div className={style.mainLayout}>
      <Header />
      <div className={style.page} children={<Outlet />} />
      <Footer />
    </div>
  );
};
