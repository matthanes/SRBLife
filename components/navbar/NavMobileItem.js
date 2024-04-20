import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

const NavMobileItem = ({ link, handleClick }) => {
  const [showSublinks, setShowSublinks] = useState(false);

  return (
    <li
      className="list-none rounded-md px-3 py-4 font-rock-salt font-semibold text-2xl text-gray-100 transition-all duration-300 ease-in-out"
      key={link.name}
      onClick={() => link.sublinks && setShowSublinks(!showSublinks)}
    >
      <div className="flex items-center justify-center">
        {link.target === null ? (
          <div className="hover:select-none">{link.name}</div>
        ) : (
          <Link onClick={() => handleClick()} href={link.target}>{link.name}</Link>
        )}
        {link.sublinks && (
          <FaChevronDown
            className={`ml-3 transition-all duration-300 ease-in-out ${
              showSublinks ? 'rotate-180 transform' : ''
            }`}
            tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ' || e.key === '40') {
              e.preventDefault();
              setShowSublinks(!showSublinks);
            }
          } }
          />
        )}
      </div>
      {showSublinks && 
        <ul className='mt-4 p-0'>
          {link.sublinks.map((sublink) => (
            <li className='px-3 py-4 last:pb-0'>
              <Link onClick={() => handleClick()} href={sublink.target}>{sublink.name}</Link>
            </li>
          ))}
        </ul>
      }
    </li>
  );
};

export default NavMobileItem;
