import Head from 'next/head';
import BlogPostList from '../../../components/blog/BlogPostList';
import { getAllTags, getAllPublished } from '../../../utilities/directus';

import React from 'react';
import titleCase from '../../../utilities/titleCase';

export const Tag = ({ postsByTag, tag }) => {
  const title = `SRBlog - ${titleCase(
    tag
  )} | Schomburg Road Baptist Church Columbus, Georgia`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={`All of the Schomburg Road Baptist Church news posts that contain the '${titleCase(
            tag
          )}' tag`}
        />
      </Head>
      <h1 className="container mx-auto mt-4 mb-4 border-b-2 px-8 font-headings text-4xl font-black text-secondary sm:px-20">
        News Posts By Tag - {titleCase(tag)}
      </h1>
      <BlogPostList blog_posts={postsByTag} />
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const data = await getAllPublished();
  const postsByTag = data.data.blog_posts.filter((post) => {
    return post.tags.some(
      (tag) => tag.tags_id.tag_name.toLowerCase() === params.tag
    );
  });

  return {
    props: {
      postsByTag,
      tag: params.tag,
    },
  };
};

export const getStaticPaths = async () => {
  const blog_posts = await getAllPublished();
  // get all tags from blog_posts and create paths for each tag
  const tags = blog_posts.data.blog_posts.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      if (!acc.includes(tag.tags_id.tag_name)) {
        acc.push(tag.tags_id.tag_name);
      }
    });
    return acc;
  }, []);

  const paths = tags.map((tag) => ({
    params: { tag: tag.toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Tag;
