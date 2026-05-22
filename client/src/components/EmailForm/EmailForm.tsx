import { useState } from 'react';
import { Input } from '../Input/Input';
import style from './EmailForm.module.css';
import { Link } from 'react-router-dom';

export const EmailForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', privacy: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className={style.emailForm}>
      <div className={style.inputsContainer}>
        <Input
          name="name"
          label="Ваше имя"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />

        <Input
          name="phone"
          label="Ваш телефон"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className={style.checkbox}>
        <input
          type="checkbox"
          id="privacy"
          value={formData.privacy}
          onChange={handleChange}
        />

        <label htmlFor="privacy">
          Даю согласие на{' '}
          <Link target="_blank" to={'/privacy'}>
            обработку персональных данных
          </Link>{' '}
        </label>
      </div>

      <button type="submit" className={style.nextButton}>
        ПОЛУЧИТЬ РЕКОМЕНДАЦИИ
      </button>
    </form>
  );
};
