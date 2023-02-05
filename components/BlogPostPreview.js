import React from 'react';
import Link from 'next/link';

const BlogPostPreview = ({ post }) => {
  const { author, title, publish_date, description, slug, tags } = post;
  const formattedDate = new Date(publish_date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <section className="flex flex-col items-center px-4 lg:px-0">
      <div className="container m-4 max-w-4xl rounded-lg bg-slate-100 px-10 py-6 shadow-sm sm:mx-0">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <span className="mb-4 sm:mb-0">{formattedDate}</span>
          <div>
            {tags.map((tag) => (
              <span
                className="mx-1 rounded-md bg-primary px-3 py-1 text-white"
                key={tag.tags_id.tag_name}
              >
                {tag.tags_id.tag_name}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-3">
          <Link className="text-lg font-bold" href={`/news/${slug}`}>
            {title}
          </Link>
          <p className="mt-2">{description}</p>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <Link
            className="font-semibold text-primary hover:underline"
            href={`/news/${slug}`}
          >
            Read More
          </Link>
          <div>
            <div className="mt-4 flex items-center sm:mt-0 ">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary object-cover text-white sm:mx-4">
                {author.name.split(' ').map((name) => name[0])}
              </div>
              <span className="ml-2 hover:underline sm:ml-0">
                {author.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostPreview;
