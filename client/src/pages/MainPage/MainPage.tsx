import { useState } from 'react';
import { Questionnaire } from '../../components/Questionnaire/Questionnaire';
import style from './MainPage.module.css';
import { EmailForm } from '../../components/EmailForm/EmailForm';

export const MainPage = () => {
  const [userInfo, setUserInfo] = useState({ isReady: false });

  const toggleForm = () => setUserInfo({ ...userInfo, isReady: !userInfo.isReady });

  return (
    <div className={style.mainPage}>
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
