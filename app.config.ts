export default defineAppConfig({
  docus: {
    title: 'Docus Javier',
    description: 'Documentación de proxectos',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      github: 'fdezfebrero/docus',
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'docus',
      owner: 'fdezfebrero',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
