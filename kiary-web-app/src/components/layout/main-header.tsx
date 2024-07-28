import React from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/logo';

interface MainNavLink {
  href: string;
  label: string;
}

const mainNavLinks: MainNavLink[] = [
  { href: '/to-dos', label: 'ToDo' },
  { href: '/albums', label: 'Album' },
  { href: '/calendar', label: 'Calendar' },
];

function MainHeader() {
  return (
    <header className={'main-header'}>
      <nav className={'main-nav'}>
        <Logo />
        <div className={'main-nav__feature'}>
          {mainNavLinks.map((link, i) => (
            <Link key={i} href={link.href}>
              {link.label}
            </Link>
          ))}
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
