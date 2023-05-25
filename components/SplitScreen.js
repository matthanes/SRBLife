import React from 'react';
import classNames from 'classnames';
import imgSrcSet from '../utilities/srcset';
import { Markup } from 'react-render-markup';

const SplitScreen = ({ img, alt, title, body, reverse }) => {
  const classes = classNames({
    'flex': true,
    'w-full': true,
    'flex-col': true,
    'xl:flex-row-reverse': reverse,
    'xl:flex-row': !reverse,
  });
  return (
    <div className={classes}>
      <div className="flex justify-stretch bg-gradient-to-br from-primary to-indigo-600 xl:basis-1/2">
        <img
          className="object-cover"
          src={img}
          alt={alt}
          srcSet={imgSrcSet(img)}
          sizes='(min-width: 1280px) 50vw, 100vw'
        />
      </div>
      <div className="flex items-center justify-start overflow-hidden p-16 xl:basis-1/2">
        <div className="font-bodytext text-lg">
          {title && <h2 className="mb-6 text-3xl font-bold">{title}</h2>}
          <Markup markup={body} />
        </div>
      </div>
    </div>
  );
};

export default SplitScreen;
