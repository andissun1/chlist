import { Contacts } from '../Contacts/Contacts';
import style from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerContent}>
        <p>
          ИП Арнольд Шварцнегер Русланович <br /> ИНН 054000605738 <br /> ОГРН
          324050000130710
        </p>

        <nav>
          <a href="">Политика конфиденциальности</a>
          <a href="">Условия проведения процедуры банкротства</a>
        </nav>

        <Contacts />
      </div>
    </div>
  );
};
