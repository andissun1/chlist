import style from './Input.module.css';
import type { ChangeEvent } from 'react';

type InputProps = {
  name: string;
  label?: string;
  type?: string;
  error?: string;
  value?: string | number | string[];
  children?: React.ReactNode;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  [key: string]: unknown;
};

export const Input = ({
  name,
  label,
  error,
  children,
  required,
  ...props
}: InputProps) => {
  const changeColor = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!error && event.target.value) {
      event.currentTarget.classList.remove(style.red);
      event.currentTarget.classList.add(style.green);
    } else if (error || !event.target.value) {
      event.currentTarget.classList.remove(style.green);
      event.currentTarget.classList.add(style.red);
    } else {
      event.currentTarget.classList.remove(style.red);
      event.currentTarget.classList.remove(style.green);
    }
  };

  return (
    <div className={`${style.Input} ${required ? style.required : ''}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input name={name} id={name} {...props} onBlur={changeColor} />
      {children}
      {error && <span>{error}</span>}
    </div>
  );
};
