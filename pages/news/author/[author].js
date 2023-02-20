import Head from 'next/head';
import BlogPostList from '../../../components/BlogPostList';
import { getAllPublished, getAllAuthors } from '../../../utilities/directus';

import React from 'react';

export const Author = ({ postsByAuthor }) => {
  return (
    <>
      <Head>
        <title>SRBlog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogPostList blog_posts={postsByAuthor} />
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const data = await getAllPublished();
  const postsByAuthor = data.data.blog_posts.filter((post) => {
    return post.author.name.toLowerCase().replace(/\s+/g, '_') === params.author;
  });

  return {
    props: {
      postsByAuthor,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const data = await getAllAuthors();

  const paths = data.map((author) => ({
    params: { author: author },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export default Author;
