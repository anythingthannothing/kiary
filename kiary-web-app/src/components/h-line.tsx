import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

function HLine({ children }: Props) {
  return (
    <div className={'center-text relative'}>
      <div className={'h-line absolute'}></div>
      {children && <span className={'h-line__text'}>{children}</span>}
    </div>
  );
}

export default HLine;
