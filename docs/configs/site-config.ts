const baseUrl = 'https://github.com/dwarvesf/react-toolkit'

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Dwarvesf. All Rights Reserved.`,
  author: {
    name: '',
    github: '',
    twitter: '',
    linkedin: '',
    email: '',
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/main/website/pages`,
    blobUrl: `${baseUrl}/blob/main`,
  },
  discord: {
    url: '',
  },
  seo: {
    title: 'React Toolkit',
    titleTemplate: '%s - React Toolkit',
    description:
      'Simple, Modular and Accessible UI Components for your React Applications.',
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
        'Simple, Modular and Accessible UI Components for your React Applications.',
      site_name:
        'React Toolkit: Simple, Modular and Accessible UI Components for your React Applications.',
      images: [
        {
          url: '/og-image.png',
          width: 1240,
          height: 480,
          alt: 'React Toolkit: Simple, Modular and Accessible UI Components for your React Applications.',
        },
        {
          url: '/twitter-og-image.png',
          width: 1012,
          height: 506,
          alt: 'React Toolkit: Simple, Modular and Accessible UI Components for your React Applications.',
        },
      ],
    },
  },
}

export default siteConfig
