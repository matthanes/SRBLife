import React, { useState } from 'react';
import Hamburger from './Hamburger';
import NavItem from './NavItem';
import NavMobileItem from './NavMobileItem';

const links = [
  { name: 'Home', target: '/' },
  { name: 'News', target: '/news' },
  { name: 'Youth', target: '/youth' },
  { name: 'Calendar', target: '/calendar' },
  {
    name: 'About Us',
    target: null,
    sublinks: [
      { name: 'Our Beliefs', target: '/ourbeliefs' },
      { name: 'Our Purpose', target: '/ourpurpose' },
    ],
  },
  { name: 'Salvation', target: '/salvation' },
  { name: 'Giving', target: '/giving' },
];

const Nav2 = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className="sticky top-0 z-10 select-none bg-primary">
      <nav>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
              {/* Mobile menu button */}
              <Hamburger handleClick={handleClick} active={active} />
            </div>
            <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-20 w-auto"
                  src="/img/SRB-White-01.svg"
                  alt="SRB Logo"
                  width={200}
                  height={80}
                />
              </div>
              <div className="hidden self-center sm:ml-6 lg:block">
                <ul className="flex space-x-8">
                  {links.map((link) => (
                    <NavItem link={link} key={link.name} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            (active ? ' fixed h-screen w-full bg-primary ' : ' hidden') +
            ' lg:hidden'
          }
        >
          <div className="mt-16 flex flex-col items-center justify-center space-y-1 px-2 pb-3 pt-2">
            {links.map((link) => (
              <NavMobileItem
                handleClick={handleClick}
                link={link}
                key={link.name}
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav2;
