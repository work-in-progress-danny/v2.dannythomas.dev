import Head from 'next/head'
import { IndexHeader } from '@src/components/IndexHeader'
import { WorksList } from '@src/components/WorksList'
import { works } from '@src/content/works/_output'
import { fun } from '@src/content/fun/_output'
import { Main } from '@src/components/Main'
import { Footer } from '@src/components/Footer'

export default function Home() {
  const asdfkjlas = 'asdjflkajsl'
  return (
    <>
      <Head>
        <title>{'Danny Thomas'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="preload stylesheet"
          href="//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack-subset.css"
        />
      </Head>
      <div
        style={{
          backgroundImage: 'url(/Untitled-6.svg)',
          backgroundSize: '100vw 100vh',
        }}
        className="flex justify-center items-center h-screen bg-black"
      >
        <div className="min-h-screen w-full flex flex-col justify-between items-center">
          <Main className="gap-5">
            <IndexHeader />
            <WorksList
              title={'Works'}
              subtitle="Things that I'm proud of"
              works={works}
            />
            <WorksList
              title={'Fun'}
              subtitle="Things I want to share"
              works={fun}
            />
          </Main>
          <Footer />
        </div>
      </div>
    </>
  )
}
