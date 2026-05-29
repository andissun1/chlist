import style from './Map.module.css';

export const Map = () => {
  return (
    <div className="section">
      <div className={style.map}>
        <h2>Как нас найти?</h2>
        <div className={style.text}>
          <ul>
            <a
              className={style.toYandexMap}
              href="https://yandex.ru/maps/-/CPDYnB8F"
              target="_blank"
            >
              <li>Череповец, пр.Победы 95 (ТЦ "Мир"), офис 107</li>
            </a>
            <li>Перед посещением лучше записаться через форму или по телефону</li>
          </ul>
        </div>

        <a
          target="_blank"
          href="https://yandex.ru/maps/-/CPDYnB8F"
          className={style.yaMap}
        />
      </div>
    </div>
  );
};
