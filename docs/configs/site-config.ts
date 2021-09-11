const baseUrl = 'https://github.com/dwarvesf/react-toolkit'

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Dwarvesf. All Rights Reserved.`,
  author: {
    site: 'https://dwarves.foundation/',
    github: 'https://github.com/dwarvesf',
    twitter: 'https://twitter.com/dwarvesf',
    linkedin: 'https://www.linkedin.com/company/dwarvesf/',
    discord: 'https://discord.com/invite/Y2vvH9rQE4',
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/main/website/pages`,
    blobUrl: `${baseUrl}/blob/main`,
  },
  discord: {
    url: 'https://discord.com/invite/Y2vvH9rQE4',
  },
  seo: {
    title: 'React Toolkit',
    titleTemplate: '%s - React Toolkit',
    description:
      'Simple, Modular React Hooks and Utilities to build robust React applications.',
    siteUrl: '',
    twitter: {
      handle: '@dwarvesf',
      site: '@dwarvesf',
      cardType: 'summary_large_image',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: '',
      title: 'React Toolkit',
      description:
        'Simple, Modular React Hooks and Utilities to build robust React applications.',
      site_name:
        'React Toolkit: Simple, Modular React Hooks and Utilities to build robust React applications.',
      images: [
        {
          url: '/thumbnail.jpeg',
          width: 1240,
          height: 480,
          alt: 'React Toolkit: Simple, Modular React Hooks and Utilities to build robust React applications.',
        },
      ],
    },
  },
}

export default siteConfig
