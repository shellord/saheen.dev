import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { HeroSection, AboutSection, BlogSection } from '../components/pages'

export default function Home() {
  return (
    <>
      <Head>
        <title>Saheen&apos;s Blog</title>
      </Head>
      <main className='h-screen overflow-y-scroll snap snap-y snap-mandatory'>
        <HeroSection />
        <AboutSection />
        <BlogSection />
      </main>
    </>
  )
}
