import { ReactNode } from 'react';

interface Props {
  type?: 'button' | 'submit';
  children: ReactNode;
}

const Button = ({ type = 'button', children }: Props) => {
  return (
    <button type={type} className={'btn'}>
      {children}
    </button>
  );
};

export default Button;
