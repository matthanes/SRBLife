import parse, { domToReact } from 'html-react-parser';

const cdnUrl = 'https://directussrblog.s3.amazonaws.com';

export const getSrcID = (src) => src.split('/').pop();

export const trimParams = (src) => (/\?/.test(src) ? src.split('?')[0] : src);

export const getSinglePost = async (slug) => {
  const blog_posts = await fetch('https://srblog.up.railway.app/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.DIRECTUS_TOKEN,
    },
    body: JSON.stringify({
      query: `query {
          blog_posts (filter: {slug: {_eq: "${slug}"}})
          {
            title
            description
            post
            publish_date
            author {
                name
            }
            tags {
                tags_id {
                    tag_name
                }
            }
            slug
          }
      }
        `,
    }),
  });

  const data = await blog_posts.json();
  const singlePost = data.data.blog_posts[0];

  return {
    singlePost,
  };
};

export const getAllPublished = async () => {
  const blog_posts = await fetch('https://srblog.up.railway.app/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `query {
        blog_posts
        {
          title
          description
          publish_date
          author {
              name
          }
          tags {
              tags_id {
                  tag_name
              }
          }
          slug
        }
    }
      `,
    }),
  });

  const posts = await blog_posts.json();
  return posts;
};

export const getAllTags = async () => {
  const response = await fetch('https://srblog.up.railway.app/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.DIRECTUS_TOKEN,
    },
    body: JSON.stringify({
      query: `
          query {
            tags {
              name
          }
        `,
    }),
  });

  const data = await response.json();
  const tags = data.data.posts;

  return posts;
};
