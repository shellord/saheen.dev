import { PropsWithChildren } from 'react'
import Head from 'next/head'

type Meta = {
  title?: string
  description?: string
  image?: string
  type?: string
  url?: string
  date?: string
}

const SeoContainer = ({ children, ...Meta }: PropsWithChildren<Meta>) => {
  const meta: Meta = {
    title: 'Saheen Shoukath - Full Stack Developer',
    description:
      'Full Stack Developer,Typescript Ninja and Open Source Contributor',
    image: 'https://saheen.me/images/banner.png',
    type: 'website',
    url: 'https://saheen.me',
    ...Meta,
  }
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:image' content={meta.image} />
        <meta property='og:type' content={meta.type} />
        <meta property='og:url' content={meta.url} />
        <meta property='og:site_name' content={meta.title} />
        <meta property='og:locale' content='en_US' />
        <meta property='og:article:author' content='Saheen Shoukath' />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>
      {children}
    </>
  )
}

export default SeoContainer
