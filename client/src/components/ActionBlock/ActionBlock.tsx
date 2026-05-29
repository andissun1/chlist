import style from './ActionBlock.module.css';
import { Questionnaire } from '../Questionnaire/Questionnaire';
import { EmailForm } from '../EmailForm/EmailForm';
import { useState } from 'react';

export const ActionBlock = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [userInfo, setUserInfo] = useState({
    typeOfCredits: '',
    sumOfCredits: '',
    overduePayment: '',
    collectors: '',
    сommunicationPreferences: '',
  });

  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!showForm);

  return (
    <div className={style.customSection}>
      <div className={style.actionBlock}>
        <h1>
          <span className={style.mark}>Бесплатно</span> получите рекомендации как обнулить
          долги по кредитам
        </h1>
        <p className={style.actionText}>
          Заполните форму и мы свяжемся с вами в течение дня
        </p>

        <div className={style.formContainer}>
          {showForm ? (
            <EmailForm toggleForm={toggleForm} userInfo={userInfo} />
          ) : (
            <Questionnaire
              toggleForm={toggleForm}
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          )}
        </div>
      </div>
    </div>
  );
};
