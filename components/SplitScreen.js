import React from 'react';
import classNames from 'classnames';
import imgSrcSet from '../utilities/srcset';
import parse from 'html-react-parser';

const SplitScreen = ({ img, alt, title, body, reverse }) => {
  const classes = classNames('flex w-full flex-col', {
    'xl:flex-row-reverse': reverse,
    'xl:flex-row': !reverse,
  });

  // parse the body to convert the html to react components. Add a class to the <a> tags called coolStyles
  body = parse(body, {
    replace: (domNode) => {
      if (domNode.name === 'a') {
        // check existing classnames and add these classNames if not present "text-primary hover:underline focus:outline-none focus:ring focus:ring-primary".
        domNode.attribs.class = classNames(
          domNode.attribs.class,
          'text-primary hover:underline focus:outline-none focus:ring focus:ring-primary'
        );
        // Remove duplicate classnames
        domNode.attribs.class = domNode.attribs.class
          .split(' ')
          .filter((value, index, self) => self.indexOf(value) === index)
          .join(' ');

        return domNode;
      }
    },
  });
  return (
    <div className={classes}>
      <div className="flex bg-gradient-to-br from-primary to-indigo-600 xl:basis-1/2">
        <img
          className="min-h-1/3 min-w-full object-cover"
          src={img}
          alt={alt}
          srcSet={imgSrcSet(img)}
          sizes="(min-width: 1280px) 50vw, 100vw"
        />
      </div>
      <div className="flex overflow-hidden p-8 text-justify md:p-16 md:text-left xl:basis-1/2">
        <div className="space-y-4 font-bodytext text-lg">
          {title && <h2 className="mb-6 text-3xl font-bold">{title}</h2>}
          {body}
        </div>
      </div>
    </div>
  );
};

export default SplitScreen;
