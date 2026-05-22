import style from './Contacts.module.css';

export const phone = '+7 (962) 666-73-63';

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
