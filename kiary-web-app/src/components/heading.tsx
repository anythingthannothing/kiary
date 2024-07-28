import React from 'react';

interface Props {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: string;
  center?: boolean;
}

function Heading({ as, children, center = false }: Props) {
  if (as === 'h1') {
    return <h1>{children}</h1>;
  } else if (as === 'h2') {
    return <h2>{children}</h2>;
  }
}

export default Heading;
