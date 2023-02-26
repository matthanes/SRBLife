import Head from 'next/head';
import { Markup } from 'react-render-markup';
import { getAllPublished, getSinglePost } from '../../utilities/directus';

import React from 'react';

export const Post = ({ singlePost }) => {
  const { title, description, publish_date, author, post, tags } = singlePost;

  const formattedDate = new Date(publish_date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <Head>
        <title>
          {`${title} | Schomburg Road Baptist Church Columbus, Georgia`}
        </title>
        <meta name="description" content={description} />
        {/* <meta name="keywords" content={tags} /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="prose prose-stone mx-auto my-4 px-4 prose-h1:text-secondary md:px-0 lg:prose-xl">
        <h1 className="!text-5xl">{title}</h1>
        <div className="mb-4 flex flex-col border-y-2 border-secondary py-3 font-bold xs:flex-row xs:items-center xs:justify-between">
          <span>{formattedDate}</span>
          <div className="flex items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary object-cover text-white sm:mx-4">
              {author?.name?.split(' ').map((name) => name[0])}
            </div>
            <span className="ml-2 text-lg hover:underline sm:ml-0">
              {author.name}
            </span>
          </div>
        </div>
        <Markup markup={post} />
        <div className="my-10 px-4 md:px-0">
          <h3 className="mb-4 border-b-2 border-secondary border-opacity-50 pb-2 text-2xl text-primary">
            Post Tags
          </h3>
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
      </article>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const singlePost = await getSinglePost(params.slug);

  return {
    props: singlePost,
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const data = await getAllPublished();
  const paths = data.data.blog_posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export default Post;
