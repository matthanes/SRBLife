import { useEffect, useState } from 'react';
import BlogPostPreview from './BlogPostPreview';

const BlogPostList = ({ blog_posts }) => {
  // paginate the blog posts
  const [page, setPage] = useState(1);
  const [total_pages, setTotalPages] = useState(0);
  const [pageSlice, setPageSlice] = useState([]);

  const numPostsPerPage = 5;
  const numPosts = blog_posts.length;

  const handlePageChange = (value) => {
    if (value < 1) {
      value = 1;
    } else if (value > total_pages) {
      value = total_pages;
    }

    setPage(value);
  };

  // Add search component
  const [search, setSearch] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blog_posts);

  useEffect(() => {
    const results = blog_posts.filter(
      (post) =>
        // filter by title, description, and tags
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase()) ||
        post.author.name.toLowerCase().includes(search.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.tags_id.tag_name.toLowerCase().includes(search.toLowerCase())
        )
    );
    setFilteredPosts(results);
  }, [search]);

  useEffect(() => {
    const totalPages = Math.ceil(filteredPosts.length / numPostsPerPage);
    const start = (page - 1) * numPostsPerPage;
    const end = start + numPostsPerPage;
    setTotalPages(totalPages);
    setPageSlice(filteredPosts.slice(start, end));
  }, [page, filteredPosts]);

  return (
    <section>
      <div className="mx-auto w-full">
        <div className="flex justify-center">
          <input
            className="mx-4 w-full max-w-4xl rounded-lg border-2 border-primary py-2 px-4 focus:outline-none focus:ring-1 focus:ring-secondary"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {pageSlice.map((post, index) => (
        <BlogPostPreview key={index} post={post} />
      ))}

      <div className="mt-4 flex justify-center">
        <button
          id="prev"
          disabled={page === 1}
          className="rounded-l bg-primary py-2 px-4 font-bold text-white disabled:bg-secondary"
          onClick={() => handlePageChange(page - 1)}
        >
          Prev
        </button>
        <button
          id="next"
          disabled={page === total_pages}
          className="rounded-r bg-primary py-2 px-4 font-bold text-white disabled:bg-secondary"
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>

      <div className="mt-4 flex justify-center">
        <p className="text-center">
          Page {page} of {total_pages}
        </p>
      </div>

      {/* show links to each page */}
      <div className="my-4 flex justify-center">
        {Array.from({ length: total_pages }, (_, i) => (
          <button
            key={i}
            className={`mx-1 py-2 px-4 font-black text-primary outline focus:outline-none focus:ring focus:ring-primary ${
              page === i + 1 ? 'text-secondary' : ''
            }`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default BlogPostList;
