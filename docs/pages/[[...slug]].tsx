import { InferGetStaticPropsType } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import loadMDXFromPages from 'utils/load-mdx-dir'
import { MDXComponents } from 'components/mdx-components'
import Layout from 'layouts'

const CONTENT_PATH = ''

export default function Page({
  mdxSource,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const pages = await loadMDXFromPages(CONTENT_PATH)
  const paths = pages.map(({ slug }) => {
    return {
      params: {
        slug: slug
          .slice(1) // remove the first `/`
          .split('/') // split to get an array
          .filter((item) => item !== CONTENT_PATH), // remove the CONTENT_PATH since this isnt needed in static paths
      },
    }
  })

  return {
    paths: [...paths, { params: { slug: [''] } }],
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const combinedPageSlug = Array.isArray(slug)
    ? `${[CONTENT_PATH, ...slug].join('/')}`
    : CONTENT_PATH
  const pages = await loadMDXFromPages(CONTENT_PATH)

  const page = pages.find((page) => {
    return (
      combinedPageSlug === page.slug ||
      (combinedPageSlug === CONTENT_PATH && page.slug === '/index')
    )
  })

  if (!page) {
    throw new Error(`No content found for slug "${slug.join('/')}"`)
  }

  const { mdxSource, ...frontMatter } = page

  return {
    props: {
      mdxSource,
      frontMatter,
    },
  }
}
