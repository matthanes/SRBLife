import React from 'react';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';

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
          <div>
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
        </div>
        <div className="mt-3">
          <Link
            className="text-lg font-bold focus:outline-none focus:ring focus:ring-primary"
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
            <div className="mt-4 flex items-center sm:mt-0 ">
              <Link
                href={`/news/author/${author.name
                  .toLowerCase()
                  .replace(/\s+/g, '_')}`}
                className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary object-cover text-white"
              >
                {author?.profile_pic !== null ? (
                  <ExportedImage
                    className="rounded-full"
                    width={40}
                    height={40}
                    src={`https://srblog.srblife.com/assets/${author?.profile_pic?.filename_disk}`}
                    alt={author.bio}
                  />
                ) : (
                  author.name.split(' ').map((name) => name[0])
                )}
              </Link>
              <Link
                href={`/news/author/${author.name
                  .toLowerCase()
                  .replace(/\s+/g, '_')}`}
                className="font-semibold text-primary hover:underline focus:outline-none focus:ring focus:ring-primary"
              >
                {author.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostPreview;
