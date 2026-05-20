import style from './Contacts.module.css';

export const phone = '+7 (903) 032-12-45';

export const Contacts = () => {
  return (
    <div className={style.contacts}>
      <a href={`tel:${phone}`} className="phone">
        {phone}
      </a>
      <span>Звонок бесплатный по РФ</span>
    </div>
  );
};
