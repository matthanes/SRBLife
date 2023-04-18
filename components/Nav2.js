import React, { useState } from 'react';
import Link from 'next/link';
import Hamburger from './Hamburger';
import NavItem from './NavItem';
const links = [
  { name: 'Home', target: '/' },
  { name: 'News', target: '/news' },
  { name: 'Calendar', target: '/calendar' },
  {
    name: 'About Us',
    target: '/about',
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
    <header className="sticky top-0 z-10 bg-primary">
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
                  className="block h-20 w-auto lg:hidden"
                  src="/img/SRB-White-01.svg"
                  alt="SRB Logo"
                  width={200}
                  height={80}
                />
                <img
                  className="hidden h-20 w-auto lg:block"
                  src="/img/SRB-White-01.svg"
                  alt="SRB Logo"
                  width={200}
                  height={80}
                />
              </div>
              <div className="hidden self-center sm:ml-6 lg:block">
                <ul className="flex space-x-8">
                  {links.map((link) => (
                   <NavItem link={link} /> 
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
          <div className="mt-16 space-y-1 px-2 pb-3 pt-2">
            {links.map((link) => (
              <li
                className="block select-none list-none rounded-md px-3 py-4 text-center font-rock-salt text-2xl font-semibold text-gray-100 hover:bg-secondary hover:text-white"
                key={link.name}
                onClick={() => setActive(!active)}
              >
                <Link href={link.target} as={link.as}>
                  {link.name}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav2;
