import React from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/logo';

function MainHeader() {
  return (
    <header className={'main-header'}>
      <nav className={'main-nav'}>
        <Logo />
        <div className={'main-nav__feature'}>
          <Link href={'/to-dos'}>ToDo</Link>
          <Link href={'/calendar'}>Calendar</Link>
          <Link href={'/albums'}>Album</Link>
        </div>
        <div className={'main-nav__user'}>
          <Link href={'/my-page'}>
            <img src="" alt="user photo" className="main-nav__user-photo" />
            <span className={'main-nav__user-nickname'}>KKU</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default MainHeader;
