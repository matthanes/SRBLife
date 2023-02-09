const cdnUrl = 'https://directussrblog.s3.amazonaws.com';

export const getSrcKey = (src) => src.split('/').pop();

export const removeParams = (src) => (/\?/.test(src) ? src.split('?')[0] : src);

export const getFiles = async () => {
  const files = await fetch('https://srblog.up.railway.app/graphql/system', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `query {
        files
        {
          id
          filename_disk
        }
      }
      `,
    }),
  });

  const data = await files.json();
  return data.data.files;
};

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

  const files = await getFiles();

  // find images in singlePost.post and replace the src URL with cdnUrl
  const images = singlePost.post.match(/<img.*?src=".*?".*?>/g);
  if (images) {
    images.forEach((image) => {
      const src = image.match(/src=".*?"/g)[0];
      const fileId = removeParams(getSrcKey(src));
      const file = files.find((file) => file.id === fileId);
      const newSrc = `${cdnUrl}/${file.filename_disk}`;
      singlePost.post = singlePost.post.replace(src, `src="${newSrc}"`);
    });
  }

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
        blog_posts (
          filter: { status: { _eq: "published" } } 
      )
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
        }
        `,
    }),
  });

  const data = await response.json();
  const tags = data.data.posts;

  return posts;
};

