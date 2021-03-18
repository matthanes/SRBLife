import Head from 'next/head'

export default function Calendar() {

  return (
    <div className="container mx-auto px-8 md:px-20">
      <Head>
        <title>Schomburg Road Baptist Church Columbus Georgia - Calendar</title>
        <meta name='keywords' content='beliefs, doctrine'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="m-4 font-headings font-black text-4xl text-secondary border-b-2">
        Our <span className="font-light">Calendar</span>
      </h1>

      <iframe className="mx-auto" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=c3JibGlmZUBnbWFpbC5jb20&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23007bb6&amp;color=%237986CB&amp;showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0" width="800" height="600" frameBorder="0" scrolling="no"></iframe>
    </div>
  )
}
