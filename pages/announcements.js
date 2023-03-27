import Head from 'next/head';

export default function Announcements() {
  return (
    <div className="mb-12">
      <Head>
        <title>
          Announcements | Schomburg Road Baptist Church Columbus, Georgia
        </title>
        <meta
          name="description"
          content="The latest announcements from Schomburg Road Baptist Church in Columbus, Georgia."
        />
        <meta name="keywords" content="announcements, news, updates, events" />
      </Head>

      <h1 className="container mx-auto mt-4 mb-4 border-b-2 px-8 font-headings text-4xl font-black text-secondary md:px-20">
        Our <span className="font-light">Announcements</span>
      </h1>

      <div className='container mx-auto relative overflow-hidden pt-[56.25%] xl:max-w-5xl xl:pt-0 xl:h-[576px]'>
        <iframe className='absolute inset-0 w-full h-full'
          src="https://srblife-my.sharepoint.com/personal/matt_srblife_com/_layouts/15/Doc.aspx?sourcedoc={e536c5de-380b-4b1a-a82d-018387ac7892}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="100%" height="600px"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}
