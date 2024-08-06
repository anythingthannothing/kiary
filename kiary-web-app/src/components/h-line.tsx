import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function HLine({ children }: Props) {
  return <div className={'h-line'}>{children}</div>;
}

export default HLine;
