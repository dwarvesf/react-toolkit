import PageContainer from 'components/page-container'
import dynamic from 'next/dynamic'

const MDXLayout = dynamic(() => import('layouts/mdx'))

export default function DefaultLayout({ children, frontMatter }) {
  const { slug } = frontMatter

  const layoutMap = {
    '': <MDXLayout frontmatter={frontMatter}>{children}</MDXLayout>,
    default: (
      <PageContainer frontmatter={frontMatter}>{children}</PageContainer>
    ),
  }

  const layout = Object.entries(layoutMap).find(([path]) =>
    String(slug).startsWith(`/${path}`),
  )

  if (!layout) return layoutMap.default

  return layout[1]
}
