import Head from 'next/head';
import BlogPostList from '../../../components/BlogPostList';
import { getAllPublished, getAllAuthors } from '../../../utilities/directus';

import React from 'react';

export const Author = ({ postsByAuthor }) => {
  return (
    <>
      <Head>
        <title>
          SRBlog by {postsByAuthor[0].author.name} | Schomburg Road Baptist
          Church Columbus, Georgia
        </title>
        <meta
          name="description"
          content={`All of the Schomburg Road Baptist Church news posts that were written by ${postsByAuthor[0].author.name}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="container mx-auto mt-4 mb-4 border-b-2 px-8 font-headings text-4xl font-black text-secondary sm:px-20">
        News Posts By Author - {postsByAuthor[0].author.name}
      </h1>
      <BlogPostList blog_posts={postsByAuthor} />
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const data = await getAllPublished();
  const postsByAuthor = data.data.blog_posts.filter((post) => {
    return (
      post.author.name.toLowerCase().replace(/\s+/g, '_') === params.author
    );
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
