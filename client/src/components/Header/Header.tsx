import { Contacts, phone } from '../Contacts/Contacts';
import style from './Header.module.css';

export const Header = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.headerContent}>
        <img className={style.logo} src="/logo.png" alt="Логотип" />
        <span className={style.centerText}>Агентство по защите должников</span>
        <Contacts />
        <a href={`tel:${phone}`} className="icon-phone" />
      </div>
    </div>
  );
};
