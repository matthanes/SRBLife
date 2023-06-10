import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

const NavItem = ({ link }) => {
  const [showSublinks, setShowSublinks] = useState(false);

  return (
    <li
      className="group relative flex list-none items-center rounded-md px-3 py-2 font-rock-salt font-semibold text-gray-100 transition-all duration-300 ease-in-out hover:bg-secondary hover:text-white"
      key={link.name}
      onMouseEnter={() => setShowSublinks(true)}
      onMouseLeave={() => setShowSublinks(false)}
    >
      {link.target === null ? (
        <div className='hover:select-none'>{link.name}</div>
      ) : (
        <Link href={link.target}>{link.name}</Link>
      )}
      {link.sublinks && (
        <FaChevronDown
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ' || e.key === '40') {
              e.preventDefault();
              setShowSublinks(!showSublinks);
            }
          } }
          className={`ml-3 transition-all duration-300 ease-in-out ${showSublinks ? 'rotate-180 transform' : ''}`}
        />
      )}
      {link.sublinks && (
        <ul
          className={`absolute left-0 top-[1rem] min-w-[175px] bg-primary text-gray-100 transition-all duration-500 ease-in-out ${showSublinks ? 'translate-y-[1.5rem] opacity-100' : 'translate-y-0 opacity-0'}`}
        >
          {link.sublinks.map((sublink) => (
            <li
              className={`list-none px-3 py-4 font-rock-salt font-semibold text-gray-100 hover:bg-secondary hover:text-white ${showSublinks ? 'block' : 'hidden'}`}
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
