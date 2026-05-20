import style from './MainPage.module.css';

export const MainPage = () => {
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
        <div className={style.progressBar} />

        <h2>Какие у вас непогашенные кредиты?</h2>
        <div className={style.answersBlock}>
          <button className={style.answer}>Потребительский</button>
          <button className={style.answer}>Кредитная карта</button>
          <button className={style.answer}>Микрозайм</button>
          <button className={style.answer}>Ипотека</button>
          <button className={style.answer}>Автокредит</button>
          <button className={style.answer}>Возврат страховки</button>
        </div>
        <button className={style.nextButton}>ДАЛЕЕ</button>
      </div>
    </div>
  );
};
