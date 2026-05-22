import style from './Questionnaire.module.css';

type QuestionnaireProps = {
  toggleForm: () => void;
};

export const Questionnaire = ({ toggleForm }: QuestionnaireProps) => {
  return (
    <div className={style.Questionnaire}>
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
      <button className={style.nextButton} onClick={toggleForm}>
        ДАЛЕЕ
      </button>
    </div>
  );
};
