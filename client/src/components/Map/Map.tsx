import style from './Map.module.css';

export const Map = () => {
  return (
    <div className={style.map}>
      <h2>Как нас найти?</h2>
      <div className={style.text}>
        <ul>
          <li>Череповец, пр.Победы 95 (ТЦ "Мир"), офис 107</li>
          <li>Перед посещением лучше записаться через форму или по телефону</li>
        </ul>
      </div>

      <a
        target="_blank"
        href="https://yandex.ru/maps/-/CPDYnB8F"
        className={style.yaMap}
      />
    </div>
  );
};
