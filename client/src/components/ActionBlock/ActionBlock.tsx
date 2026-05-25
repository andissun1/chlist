import style from './ActionBlock.module.css';
import { Questionnaire } from '../Questionnaire/Questionnaire';
import { EmailForm } from '../EmailForm/EmailForm';
import { useState } from 'react';

export const ActionBlock = () => {
  const [userInfo, setUserInfo] = useState({ isReady: false });

  const toggleForm = () => setUserInfo({ ...userInfo, isReady: !userInfo.isReady });

  return (
    <div className={style.actionBlock}>
      <h1>
        <span className={style.mark}>Бесплатно</span> получите рекомендации как обнулить
        долги по кредитам
      </h1>
      <p className={style.actionText}>
        Заполните форму и мы свяжемся с вами в течение дня
      </p>

      <div className={style.formContainer}>
        {userInfo.isReady ? <EmailForm /> : <Questionnaire toggleForm={toggleForm} />}
      </div>
    </div>
  );
};
