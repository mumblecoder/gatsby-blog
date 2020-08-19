'use strict';

module.exports = {
  url: 'https://lumen.netlify.com',
  pathPrefix: '/',
  title: 'Blog by Mumblecoder',
//  subtitle: 'mumblecoder\'s code diary',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 5,
  googleAnalyticsId: 'UA-73379983-2',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'Categories',
      path: '/categories'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Mumblecoder',
    photo: '/logo.png',
    bio: '쓸모있는 개발자가 되기 위한 고군분투기',
    contacts: {
      email: '',
      github: '#',
      rss: '',
      vkontakte: '',
      linkedin: '#',
      instagram: '#',
      gitlab: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
    }
  }
};
