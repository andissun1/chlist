import { useNavigate } from 'react-router-dom';
import { Contacts, phone } from '../Contacts/Contacts';
import style from './Header.module.css';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={style.headerContainer}>
      <div className={style.headerContent}>
        <img
          className={style.logo}
          src="/logo.png"
          onClick={() => navigate('/')}
          alt="Логотип"
        />
        <span className={style.centerText}>Федеральное агенство по защите должников</span>
        <Contacts />
        <a href={`tel:${phone}`} className="icon-phone" />
      </div>
    </div>
  );
};
