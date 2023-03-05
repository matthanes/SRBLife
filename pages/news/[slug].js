import Head from 'next/head';
import AuthorAttribution from '../../components/blog/AuthorAttribution';
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
    <div className="bg-slate-100">
      <Head>
        <title>
          {`${title} | Schomburg Road Baptist Church Columbus, Georgia`}
        </title>
        <meta name="description" content={description} />
        {/* <meta name="keywords" content={tags} /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="min-h-screen-foot p-4">
        <div className="relative w-full bg-white px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pt-16 lg:pb-28">
          <div className="prose prose-stone mx-auto prose-h1:text-secondary lg:prose-xl">
            <h1 className="!text-4xl">{title}</h1>
            <div className="mb-4 flex flex-col border-y-2 border-secondary py-3 xs:flex-row xs:items-center xs:justify-between">
              <span className="font-bold">{formattedDate}</span>
              <AuthorAttribution author={author} />
            </div>
            <Markup markup={post} />
            <div className="my-10 px-4 md:px-0">
              <h3 className="mb-4 border-b-2 border-secondary border-opacity-50 pb-2 text-xl text-primary">
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
          </div>
        </div>
      </article>
    </div>
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
