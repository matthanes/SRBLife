import Link from 'next/link';

const Homecard = ({ title, subtitle, icon, target, rel, href }) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="cursor-pointer w-full max-w-xl lg:max-w-md text-center"
    >
      <article className="py-8 overflow-hidden rounded-lg shadow-lg hover:bg-secondary bg-primary text-white">
        {icon}
        <div className="py-5">
          <div className="py-2 font-bold text-2xl mb-2">{title}</div>
          <p className="text-lg">{subtitle}</p>
        </div>
      </article>
    </a>
  );
};

export default Homecard;
