import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";

const Homecard = ({title, subtitle, icon, target, href}) => {
  return (
    <a href={href} target={target} className="cursor-pointer my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 text-center">
      <article className="py-8 overflow-hidden rounded-lg shadow-lg bg-primary text-white">
        <FontAwesomeIcon className="block mx-auto" size="6x" icon={icon} />
        <div className="py-5">
          <div className="py-2 font-bold text-2xl mb-2">{title}</div>
          <p className="text-lg">{subtitle}</p>
        </div>
      </article>
    </a>

  );
};

export default Homecard;