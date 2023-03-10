const cdnUrl = 'https://directussrblog.s3.amazonaws.com';

export const getSrcKey = (src) => src.split('/').pop();

export const removeParams = (src) => (/\?/.test(src) ? src.split('?')[0] : src);

export const getFiles = async () => {
  const files = await fetch('https://srblog.srblife.com/graphql/system', {
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
  const blog_posts = await fetch('https://srblog.srblife.com/graphql', {
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
                profile_pic {
                  filename_disk
                  description
              }
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
  const blog_posts = await fetch('https://srblog.srblife.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `query {
        blog_posts (
          filter: { status: { _eq: "published" } },
          sort: [ "-publish_date" ]
      )
        {
          title
          description
          publish_date
          author {
              name
              bio
              profile_pic {
                filename_disk
                description
            }
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
  const tags = await fetch('https://srblog.srblife.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.DIRECTUS_TOKEN,
    },
    body: JSON.stringify({
      query: `
          query {
            tags {
              tag_name
          }
        }
        `,
    }),
  });

  const data = await tags.json();
  // for each tag_name in data.data.tags, add to an object
  const tagList = [];
  data.data.tags.forEach((tag) => {
    tagList.push(tag.tag_name);
  });

  return tagList;
};

export const getAllAuthors = async () => {
  const authors = await fetch('https://srblog.srblife.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.DIRECTUS_TOKEN,
    },
    body: JSON.stringify({
      query: `
          query {
            authors {
              name
              bio
              profile_pic {
                filename_disk
                description
            }
          }
        }
        `,
    }),
  });

  const data = await authors.json();
  // for each author_name in data.data.authors, add to an object
  const authorList = [];
  data.data.authors.forEach((author) => {
    authorList.push(author.name.toLowerCase().replace(/\s+/g, '_'));
  });

  return authorList;
};

export const getAllEvents = async () => {
  const events = await fetch('https://srblog.srblife.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.DIRECTUS_TOKEN,
    },
    body: JSON.stringify({
      query: `
          query {
            Events (
              filter: { status: { _eq: "published" } },
              sort: [ "datetime" ]
          )
          {
              id
              title
              status
              category
              datetime
              short_description
              event_location
              button_link
              button_text
          }
        }
        `,
    }),
  });

  const data = await events.json();

  return data;
};
