import React from 'react';
import Link from 'next/link';

const TagsList = ({ tags }) => {
  return (
    <div className='not-prose flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <Link
          className="rounded-md bg-primary px-3 py-1 text-white focus-visible:outline-none focus-visible:ring focus-visible:ring-secondary hover:bg-secondary transition-colors duration-500 ease-in-out"
          href={`/news/tag/${tag.tags_id.tag_name.toLowerCase()}`}
          key={tag.tags_id.tag_name}
        >
          {tag.tags_id.tag_name}
        </Link>
      ))}
    </div>
  );
};

export default TagsList;
