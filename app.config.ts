export default defineAppConfig({
  docus: {
    title: 'Docus Javier',
    description: 'Documentación de proxectos',
    image: 'https://i.imgur.com/SuM4Sug.jpg',
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
