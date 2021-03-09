import Link from "next/link";
import Home from "../pages";

const links = [
  { name: "Home", target: "/" },
  { name: "Calendar", target: "/calendar" },
  { name: "Our Beliefs", target: "/our-beliefs" },
  { name: "Salvation", target: "/salvation" },
  { name: "Our Purpose", target: "/our-purpose" },
  { name: "Giving", target: "/giving" },
];

const Nav = () => {
  return (
    <header className="bg-primary">
      <div className="flex justify-between">
        <h1>
          <img
            className="w-20"
            src="https://srblife.com/wp-content/uploads/2018/04/SRB-White-01.svg"
            alt="SRBLife Logo"
          />
        </h1>
        <nav className="self-center text-white">
          <ul className="flex">
            {links.map((link) => (
              <li className="px-6" key={link.name}>
                <Link href={link.target}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
