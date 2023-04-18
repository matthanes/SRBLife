import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

const NavItem = ({ link }) => {
  return (
    <li
      className="group relative flex list-none items-center rounded-md px-3 py-2 font-rock-salt font-semibold text-gray-100 transition-all duration-300 ease-in-out hover:bg-secondary hover:text-white"
      key={link.name}
    >
      {link.target === null ? (
        <div className='hover:select-none'>{link.name}</div>
      ) : (
        <Link href={link.target}>{link.name}</Link>
      )}
      {link.sublinks && (
        <FaChevronDown
          className={`ml-3 transition-all duration-300 ease-in-out hover:cursor-pointer group-hover:rotate-180 group-hover:transform`}
        />
      )}
      {link.sublinks && (
        <ul
          className={`absolute left-0 top-10 hidden min-w-[175px] bg-primary pt-3 text-gray-100 group-hover:block`}
        >
          {link.sublinks.map((sublink) => (
            <li
              className="list-none px-3 py-4 font-rock-salt font-semibold text-gray-100 hover:bg-secondary hover:text-white"
              key={sublink.name}
            >
              <Link href={sublink.target}>{sublink.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
