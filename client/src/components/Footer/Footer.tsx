import { Link } from 'react-router-dom';
import { Contacts } from '../Contacts/Contacts';
import style from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerContent}>
        <p>© 2026 СТАНДАРТ</p>

        <nav>
          <Link to={'/privacy'}>Политика конфиденциальности</Link>
        </nav>

        <Contacts />
      </div>
    </div>
  );
};
