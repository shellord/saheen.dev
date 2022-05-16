import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import rt from 'reading-time'
import { BlogPost } from '@/types/blog-post'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'

const postsDirectory = path.join(process.cwd(), 'data/blog')

export async function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames.map(async (fileName): Promise<BlogPost> => {
    const slug = fileName.replace(/\.md$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeFormat)
      .use(rehypeStringify)
      .process(matterResult.content)

    const contenthtml = processedContent.toString()

    const readingTime = rt(contenthtml).text

    const { title, date, description } = matterResult.data
    return {
      slug,
      title,
      date,
      description,
      readingTime,
    }
  })
  return Promise.all(allPostsData).then((posts) => {
    return posts.sort(({ date: a }, { date: b }) => {
      if (a < b) {
        return 1
      } else if (a > b) {
        return -1
      } else {
        return 0
      }
    })
  })
}

export async function getPostData(slug: string | string[] | undefined) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight)
    .use(rehypeFormat)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  const { title, date, description } = matterResult.data
  return {
    slug,
    title,
    date,
    description,
    contentHtml,
  }
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    }
  })
}
