import Head from 'next/head';
import { getAllPublished } from '../../utilities/directus';
import BlogPostList from '../../components/BlogPostList';

export default function BlogPosts({ blog_posts }) {
  return (
    <>
      <Head>
        <title>SRBlog | Schomburg Road Baptist Church Columbus, Georgia</title>
        <meta
          name="description"
          content="Schomburg Road Baptist Church news and information posts."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="container mx-auto mt-4 mb-4 border-b-2 px-8 font-headings text-4xl font-black text-secondary sm:px-20">
        News Posts
      </h1>
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
