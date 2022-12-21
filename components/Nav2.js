import React, { useState } from "react";
import Link from "next/link";

const links = [
  { name: "Home", target: "/" },
  { name: "Calendar", target: "/calendar" },
  { name: "Our Beliefs", target: "/ourbeliefs" },
  { name: "Salvation", target: "/salvation"  },
  { name: "Our Purpose", target: "/ourpurpose"  },
  { name: "Giving", target: "/giving"  },
];

const Nav2 = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="bg-primary sticky top-0 z-10">
      <nav>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setNavOpen(!navOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {/*Icon when menu is closed. Heroicon name: outline/menu Menu open: "hidden", Menu closed: "block"*/}
                <svg
                  className={"block h-6 w-6" + (navOpen ? " hidden" : "")}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/*Icon when menu is open. Heroicon name: outline/x Menu open: "block", Menu closed: "hidden"*/}
                <svg
                  className={"block h-6 w-6" + (navOpen ? "" : " hidden")}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-between">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-20 w-auto"
                  src="../img/SRB-White-01.svg"
                  alt="SRB Logo"
                />
                <img
                  className="hidden lg:block h-20 w-auto"
                  src="../img/SRB-White-01.svg"
                  alt="SRB Logo"
                />
              </div>
              <div className="hidden self-center lg:block sm:ml-6">
                <ul className="flex space-x-8">
                  {links.map((link) => (
                    <li
                      className="list-none text-gray-100 hover:bg-secondary hover:text-white px-3 py-2 rounded-md font-rock-salt text-lg font-semibold"
                      key={link.name}
                    >
                      <Link href={link.target} as={link.as}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={(navOpen ? "" : " hidden") + " lg:hidden"} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <li
                className="text-center list-none text-gray-100 hover:bg-secondary hover:text-white block px-3 py-2 rounded-md font-rock-salt text-lg font-semibold"
                key={link.name}
                onClick={() => setNavOpen(!navOpen)}
              >
                <Link href={link.target} as={link.as}>{link.name}</Link>
              </li>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav2;
