import React, { useState } from 'react';
import Link from 'next/link';
import Hamburger from './Hamburger';

const links = [
  { name: 'Home', target: '/' },
  { name: 'News', target: '/news' },
  { name: 'Calendar', target: '/calendar' },
  { name: 'Our Beliefs', target: '/ourbeliefs' },
  { name: 'Salvation', target: '/salvation' },
  { name: 'Our Purpose', target: '/ourpurpose' },
  { name: 'Giving', target: '/giving' },
];

const Nav2 = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className="bg-primary sticky top-0 z-10">
      <nav>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
              {/* Mobile menu button */}
              <Hamburger handleClick={handleClick} active={active} />
            </div>
            <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-between">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-20 w-auto"
                  src="/img/SRB-White-01.svg"
                  alt="SRB Logo"
                />
                <img
                  className="hidden lg:block h-20 w-auto"
                  src="/img/SRB-White-01.svg"
                  alt="SRB Logo"
                />
              </div>
              <div className="hidden self-center lg:block sm:ml-6">
                <ul className="flex space-x-8">
                  {links.map((link) => (
                    <li
                      className="list-none text-gray-100 hover:bg-secondary hover:text-white px-3 py-2 rounded-md font-rock-salt font-semibold"
                      key={link.name}
                    >
                      <Link href={link.target}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            (active ? ' fixed bg-primary w-full h-screen ' : ' hidden') +
            ' lg:hidden'
          }
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 mt-16">
            {links.map((link) => (
              <li
                className="text-center list-none select-none text-gray-100 hover:bg-secondary hover:text-white block px-3 py-4 rounded-md font-rock-salt text-2xl font-semibold"
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
