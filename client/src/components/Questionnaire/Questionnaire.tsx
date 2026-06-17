import style from './Questionnaire.module.css';

export type userInfo = {
  typeOfCredits: string;
  sumOfCredits: string;
  overduePayment: string;
  collectors: string;
  сommunicationPreferences: string;
};

type QuestionnaireProps = {
  toggleForm: () => void;
  activeSlide: number;
  setActiveSlide: (slide: number) => void;
  userInfo: userInfo;
  setUserInfo: (info: { [K in keyof userInfo]: string }) => void;
};

const slides = {
  typeOfCredits: {
    title: 'Какие у вас непогашенные кредиты?',
    answers: [
      'Потребительский',
      'Кредитная карта',
      'Микрозайм',
      'Ипотека',
      'Автокредит',
      'Возврат страховки',
    ],
  },
  sumOfCredits: {
    title: 'Сумма общего долга перед всеми кредиторами (рублей)',
    answers: ['до 300 тыс', '300-500 тыс', '500-800 тыс', '1-2 млн'],
  },
  overduePayment: {
    title: 'Есть ли просрочки по кредитам?',
    answers: ['Нет', 'Да, менее месяца', 'Да, от 1 до 3 месяцев', 'Да, более 3 месяцев'],
  },
  collectors: {
    title: 'Звонят ли вам коллекторы?',
    answers: [
      'Не звонят коллекторы',
      'Звонят, но редко',
      'Звонят часто',
      'Приходят на работу и домой',
    ],
  },
};

type SlidesKeys = keyof typeof slides;

export const Questionnaire = ({
  toggleForm,
  activeSlide,
  setActiveSlide,
  setUserInfo,
  userInfo,
}: QuestionnaireProps) => {
  const currentSlideName = Object.keys(slides)[activeSlide] as SlidesKeys;
  const currentSlide = slides[currentSlideName];

  const nextStep = () => setActiveSlide(activeSlide + 1);
  const prevStep = () => setActiveSlide(activeSlide - 1);

  const updateUserInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target instanceof HTMLButtonElement)
      setUserInfo({ ...userInfo, [currentSlideName]: e.target.textContent });
  };

  const handleNextButton = () => {
    if (activeSlide === 3) {
      toggleForm();
    } else nextStep();

    if (window.ym) window.ym(109903079, 'reachGoal', `forma_stage${activeSlide + 1}`);

    console.log(activeSlide + 1);
  };

  return (
    <div className={style.questionnaire}>
      <div
        className={style.progressBar}
        style={{ width: (100 / Object.keys(slides).length) * activeSlide + '%' }}
      />

      <h2>{currentSlide.title}</h2>
      <div className={style.answersBlock}>
        {currentSlide.answers.map((answer) => (
          <button
            className={`${style.answer} ${
              userInfo[currentSlideName].includes(answer) ? style.activeAnswer : ''
            }`}
            key={answer}
            onClick={updateUserInfo}
          >
            {answer}
          </button>
        ))}
      </div>

      <div className={style.buttonContainer}>
        {activeSlide > 0 && (
          <button className={style.prevButton} onClick={prevStep}>
            НАЗАД
          </button>
        )}

        <button className={style.nextButton} onClick={handleNextButton}>
          ДАЛЕЕ
        </button>
      </div>
    </div>
  );
};
