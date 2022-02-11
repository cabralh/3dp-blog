const siteMetadata = {
  title: 'Uncured Resin - All Things Additive',
  author: 'Henry Cabral',
  headerTitle: 'Uncured Resin',
  description:
    'Thoughts and resources about building 3D designs and products. Essays about freelancing, 3D software business, productivity, 3D Printing, and how to enable your creative ideas into innovative solutions.',
  language: 'en-us',
  siteUrl: 'https://uncuredresin.com',
  siteRepo: 'https://github.com/cabralh/3dp-blog',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.jpg',
  email: 'hjcbr19@gmail.com',
  github: 'https://github.com/cabralh',
  twitter: 'https://twitter.com/cabralhjr',
  linkedin: 'https://linkedin.com/in/henrycabral',
  locale: 'en-US',
  newsletter: {
    provider: 'emailoctopus',
  },
  comment: {
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      // theme when dark mode
      darkTheme: 'dark_dimmed',
    },
  },
}

module.exports = siteMetadata
