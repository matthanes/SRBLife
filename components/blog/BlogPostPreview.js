import React from 'react';
import Link from 'next/link';
import AuthorAttribution from './AuthorAttribution';
import TagsList from './TagsList';

const BlogPostPreview = ({ post }) => {
  const { author, title, publish_date, description, slug, tags } = post;
  const formattedDate = new Date(publish_date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <section className="flex flex-col items-center overflow-hidden px-4 lg:px-0">
      <div className="m-4 w-full max-w-4xl rounded-lg bg-slate-100 px-10 py-6 shadow-sm sm:mx-0">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <span className="mb-4 sm:mb-0">{formattedDate}</span>
          <TagsList tags={tags} />
        </div>
        <div className="mt-3">
          <Link
            className="text-lg font-bold text-primary hover:underline focus:outline-none focus:ring focus:ring-primary"
            href={`/news/${slug}`}
          >
            {title}
          </Link>
          <p className="mt-2 line-clamp-6 md:line-clamp-3">{description}</p>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <Link
            className="font-semibold text-primary hover:underline focus:outline-none focus:ring focus:ring-primary"
            href={`/news/${slug}`}
          >
            Read More
          </Link>
          <div>
            <AuthorAttribution author={author} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostPreview;
