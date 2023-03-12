import React from 'react';
import Link from 'next/link';

const TagsList = ({ tags }) => {
  return (
    <div className='not-prose'>
      {tags.map((tag) => (
        <Link
          className="mx-1 rounded-md bg-primary px-3 py-1 text-white focus-visible:outline-none focus-visible:ring focus-visible:ring-secondary"
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
