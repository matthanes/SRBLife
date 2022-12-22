import { useState, useRef, useEffect } from 'react';
import ExportedImage from 'next-image-export-optimizer';

const Slider = ({ slides, timing, children }) => {
  const timerRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToLeft = () => {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : slides.length - 1);
  };

  const goToRight = () => {
    setCurrentSlide(currentSlide < slides.length - 1 ? currentSlide + 1 : 0);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide(currentSlide < slides.length - 1 ? currentSlide + 1 : 0);
    }, timing);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [currentSlide]);

  const { url, title, subtitle, alt, objectPosition, imgLink, opacity } = slides[currentSlide];

  return (
    <div className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[75vh] lg:min-h-screen">
      {/* Image */}
      <ExportedImage fill priority className={`z-0 object-cover ${objectPosition}`} src={imgLink} alt={alt} onClick={goToLeft}></ExportedImage>

      {/* Overlay */}
      {/* Render anchor if url exists */}
      {url ? (
        <a href={url}
          className={`absolute top-0 left-0 h-full w-full bg-black opacity-${opacity}`}
        ></a>
      ) : (
        <div className={`absolute top-0 left-0 h-full w-full bg-black opacity-${opacity}`}></div>
      )}
      {children}

      {/* Arrows */}
      <button
        className="z-1 absolute top-1/2 left-4 lg:left-8 -translate-y-1/2 cursor-pointer select-none text-3xl lg:text-5xl text-white"
        onClick={goToLeft}
      >{`<`}</button>
      <button
        className="z-1 absolute top-1/2 right-4 lg:right-8 -translate-y-1/2 cursor-pointer select-none text-3xl lg:text-5xl text-white"
        onClick={goToRight}
      >{`>`}</button>

      {/* Indicator Dots */}
      <div className="cover absolute bottom-0 flex w-full justify-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`m-1 h-3 w-3 cursor-pointer rounded-full lg:h-4 lg:w-4 lg:m-1 ${
              currentSlide === index ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
