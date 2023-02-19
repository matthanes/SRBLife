import Head from 'next/head';
import { getAllPublished } from '../../utilities/directus';
import BlogPostList from '../../components/BlogPostList';

export default function BlogPosts({blog_posts}) {
  console.log(blog_posts)
  return (
    <>
      <Head>
        <title>SRBlog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogPostList blog_posts={blog_posts} />
    </>
  );
}

export const getStaticProps = async () => {
  const data = await getAllPublished();

  return {
    props: {
      blog_posts: data.data.blog_posts,
    },

    revalidate: 60,
  };
};
