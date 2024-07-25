import React from 'react';
import Link from 'next/link';

function Sidebar() {
  return (
    <nav className={'sidebar'}>
      <ul className="side-nav">
        <li className="side-nav__item">
          <Link href="#" className="side-nav__link">
            <span>Todo</span>
          </Link>
          <Link href="#" className="side-nav__link">
            <span>Album</span>
          </Link>
          <Link href="#" className="side-nav__link">
            <span>Calendar</span>
          </Link>
        </li>
      </ul>
      <div className="legal">&copy; 2024 by kku. All rights reserved.</div>
    </nav>
  );
}

export default Sidebar;
