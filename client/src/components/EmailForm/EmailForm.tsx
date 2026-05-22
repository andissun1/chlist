import { useState } from 'react';
import { Input } from '../Input/Input';
import style from './EmailForm.module.css';
import { Link } from 'react-router-dom';

export const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    privacy: '',
    isSubmited: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch(import.meta.env.VITE_SERVER + '/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    setFormData({ ...formData, isSubmited: true });
  };

  return (
    <form className={style.emailForm} onSubmit={handleSubmit}>
      {formData.isSubmited ? (
        'Ваша заявка отправлена'
      ) : (
        <>
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
        </>
      )}
    </form>
  );
};
