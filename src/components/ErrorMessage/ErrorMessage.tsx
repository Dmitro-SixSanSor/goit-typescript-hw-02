import css from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message?: string; 
}

export function ErrorMessage({ message }: ErrorMessageProps): JSX.Element | null {
  if (!message) return null;

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{message}</p>
    </div>
  );
}

