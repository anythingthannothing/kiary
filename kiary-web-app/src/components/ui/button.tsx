import { ReactNode } from 'react';

interface Props {
  type?: 'button' | 'submit';
  disabled?: boolean;
  children: ReactNode;
}

const Button = ({ type = 'button', disabled = false, children }: Props) => {
  return (
    <button type={type} className={'btn'} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
