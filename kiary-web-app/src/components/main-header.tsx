import React from 'react';
import Link from 'next/link';

function MainHeader() {
  return (
    <header className={'main-header'}>
      <Link href={'/'}>
        <h1 className={'logo'}>Kiary</h1>
      </Link>
      <nav className={'app-nav__feature'}>
        <Link href={'/to-dos'}>ToDo</Link>
        <Link href={'/calendar'}>Calendar</Link>
        <Link href={'/albums'}>Album</Link>
      </nav>
      <div className={'app-nav__user'}>
        <Link href={'/my-page'}>
          <img src="" alt="user photo" className="app-nav__user-photo" />
          <span className={'app-nav__user-nickname'}>KKU</span>
        </Link>
      </div>
    </header>
  );
}

export default MainHeader;
