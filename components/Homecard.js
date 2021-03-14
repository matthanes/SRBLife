import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Homecard = ({title, subtitle, icon}) => {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 text-center">
      <article className="py-8 overflow-hidden rounded-lg shadow-lg bg-primary text-white">
        <FontAwesomeIcon className="block mx-auto" size="6x" icon={icon} />
        <div className="py-5">
          <div className="py-2 font-bold text-2xl mb-2">{title}</div>
          <p className="text-lg">{subtitle}</p>
        </div>
      </article>
    </div>
  );
};

export default Homecard;