import { useState } from 'react';
import { Input } from '../Input/Input';
import style from './EmailForm.module.css';
import { Link } from 'react-router-dom';
import type { userInfo } from '../Questionnaire/Questionnaire';
import { useForm, type SubmitHandler } from 'react-hook-form';

type EmailFormProps = {
  toggleForm: () => void;
  userInfo: userInfo;
};

interface IForm {
  name: string;
  phone: string;
  privacy: boolean;
}

export const EmailForm = ({ toggleForm, userInfo }: EmailFormProps) => {
  const [isSubmited, setIsSubmited] = useState(false);

  const { register, handleSubmit, formState, setValue } = useForm<IForm>({
    mode: 'onBlur',
  });

  // Маска для телефона
  function onPhoneInput(event: React.InputEvent<HTMLInputElement>) {
    let value = event.currentTarget.value;
    let inputNumbersValue = value.replace(/\D/g, '');
    const selectionStart = event.currentTarget.selectionStart;
    // eslint-disable-next-line no-useless-assignment
    let formattedInputValue = '';

    if (!inputNumbersValue) return setValue('phone', '');

    if (value.length != selectionStart) {
      if (event.nativeEvent.data && /\D/g.test(event.nativeEvent.data)) return;
      setValue('phone', value);
      return;
    }

    if (['7', '8', '9'].includes(inputNumbersValue[0])) {
      if (inputNumbersValue[0] == '9') inputNumbersValue = '7' + inputNumbersValue;
      const firstSymbols = inputNumbersValue[0] == '8' ? '8' : '+7';
      // eslint-disable-next-line no-useless-assignment
      formattedInputValue = value = firstSymbols + ' ';
      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }

    setValue('phone', formattedInputValue);
  }

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    if (window.ym) window.ym(109903079, 'reachGoal', 'forma_recommendazii');

    const response = await fetch(import.meta.env.VITE_SERVER + '/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, ...userInfo }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    setIsSubmited(true);
    if (window.ym) window.ym(109903079, 'reachGoal', 'zayavka_otpravlena');
  };

  return (
    <form className={style.emailForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.progressBar} />

      {isSubmited ? (
        'Ваша заявка отправлена'
      ) : (
        <>
          <div className={style.inputsContainer}>
            <Input
              label="Ваше имя"
              type="text"
              {...register('name', {
                required: {
                  value: true,
                  message: 'Обязательное поле',
                },
                minLength: {
                  message: 'Обязательное поле',
                  value: 2,
                },
              })}
              error={formState.errors.name?.message as string}
            />

            <Input
              label="Ваш телефон"
              type="tel"
              onInput={onPhoneInput}
              error={formState.errors.phone?.message as string}
              {...register('phone', {
                required: {
                  value: true,
                  message: 'Обязательное поле',
                },
                pattern: {
                  value: /^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
                  message: 'Некорретный формат номера',
                },
              })}
            />
          </div>

          <div className={style.checkbox}>
            <input
              type="checkbox"
              id="privacy"
              {...register('privacy', { required: true })}
            />

            <label htmlFor="privacy">
              Даю согласие на{' '}
              <Link className={style.toPrivacy} target="_blank" to={'/privacy'}>
                обработку персональных данных
              </Link>
            </label>
          </div>

          <div className={style.buttons}>
            <button
              type="button"
              className={style.backButton + ' icon-angle-left'}
              onClick={toggleForm}
            />
            <button
              type="submit"
              className={style.nextButton}
              disabled={
                Object.keys(formState.errors).length > 0 ||
                !formState.dirtyFields.name ||
                !formState.dirtyFields.phone ||
                !formState.dirtyFields.privacy
              }
            >
              ПОЛУЧИТЬ РЕКОМЕНДАЦИИ
            </button>
          </div>
        </>
      )}
    </form>
  );
};
