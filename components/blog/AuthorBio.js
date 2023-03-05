import React from 'react'
import { Markup } from 'react-render-markup';

const AuthorBio = ({author}) => {
  return (
    <section className="mx-auto my-4 max-w-4xl gap-4">
        <div className="rounded-lg bg-gray-100 p-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 place-items-center sm:items-center ">
            <div className="flex h-40 w-40 items-center justify-center rounded-md bg-primary object-cover text-7xl text-white sm:mx-4">
              {author.profile_pic !== null ? (
                <img
                  className="rounded-md"
                  width={160}
                  height={160}
                  src={`https://srblog.srblife.com/assets/${author.profile_pic.filename_disk}`}
                  alt={author.bio}
                />
              ) : (
                author.name.split(' ').map((name) => name[0])
              )}
            </div>

            <div className="sm:col-span-2">
              <h1 className="text-4xl font-bodytext tracking-tighter mb-4">Author Bio - {author.name}</h1>
              <Markup markup={author.bio} />
            </div>
          </div>
        </div>
      </section>
  )
}

export default AuthorBio