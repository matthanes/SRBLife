import Head from 'next/head';
import BlogPostList from '../../../components/blog/BlogPostList';
import { getAllPublished, getAllAuthors } from '../../../utilities/directus';
import React from 'react';
import AuthorBio from '../../../components/blog/AuthorBio';

export const Author = ({ postsByAuthor, author }) => {
  const title = `SRBlog by ${author.name} | Schomburg Road Baptist Church Columbus, Georgia`;
  return (
    <>
      <Head>
        <title>
          {title}
        </title>
        <meta
          name="description"
          content={`All of the Schomburg Road Baptist Church news posts that were written by ${author.name}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthorBio author={author} />
      <BlogPostList blog_posts={postsByAuthor} />
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const data = await getAllPublished();
  const authors = await getAllAuthors();
  const postsByAuthor = data.data.blog_posts.filter((post) => {
    return (
      post.author.name.toLowerCase().replace(/\s+/g, '_') === params.author
    );
  });

  const author = authors.data.authors.filter((author) => {
    return (
      author.name.toLowerCase().replace(/\s+/g, '_') === params.author
    );
  });
  
  return {
    props: {
      postsByAuthor,
      author: author[0]
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const data = await getAllAuthors();

    // for each author_name in data.data.authors, add to an object
    const authorList = [];
    data.data.authors.forEach((author) => {
      authorList.push(author.name.toLowerCase().replace(/\s+/g, '_'));
    });

  const paths = authorList.map((author) => ({
    params: { author: author },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export default Author;
