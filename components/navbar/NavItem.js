import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaChevronDown } from 'react-icons/fa';
import { slugify } from '../../utilities/slugify';
import Link from 'next/link';

const NavItem = ({ link }) => {
  const [showSublinks, setShowSublinks] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) setShowSublinks(false);
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <li
      className="transition-all group relative flex list-none items-center rounded-md px-3 py-2 font-rock-salt font-semibold text-gray-100 duration-300 ease-in-out hover:bg-secondary hover:text-white"
      key={link.name}
      onMouseEnter={() => setShowSublinks(true)}
      onMouseLeave={() => setShowSublinks(false)}
    >
      {link.target === null ? (
        <div className="hover:select-none">{link.name}</div>
      ) : (
        <Link href={link.target}>{link.name}</Link>
      )}
      {link.sublinks && (
        <button
          aria-expanded={showSublinks}
          aria-controls={`${slugify(link.name)}-id`}
          onClick={() => setShowSublinks(!showSublinks)}
          className={`transition-all ml-3 duration-300 ease-in-out ${
            showSublinks ? 'rotate-180 transform' : ''
          }`}
        >
          <FaChevronDown />
        </button>
      )}
      {link.sublinks && (
        <ul
          id={`${slugify(link.name)}-id`}
          className={`transition-all absolute left-0 top-[1rem] min-w-[175px] bg-primary text-gray-100 duration-500 ease-in-out ${
            showSublinks
              ? 'translate-y-[1.5rem] opacity-100'
              : 'translate-y-0 opacity-0'
          }`}
        >
          {link.sublinks.map((sublink) => (
            <li
              className={`list-none px-3 py-4 font-rock-salt font-semibold text-gray-100 hover:bg-secondary hover:text-white ${
                showSublinks ? 'block' : 'hidden'
              }`}
              key={sublink.name}
            >
              <Link aria-current={sublink.target === router.pathname ? "page" : undefined} href={sublink.target}>{sublink.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
