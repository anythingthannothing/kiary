import React from 'react';
import Link from 'next/link';
import { BiSolidBookHeart } from 'react-icons/bi';

function Logo() {
  return (
    <Link href={'/app'} className={'logo'}>
      <BiSolidBookHeart />
    </Link>
  );
}

export default Logo;
