import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
  '/demo/': [
    {
<<<<<<< .mine
      text: '案例',
      icon: 'laptop-code',
      // prefix: '/',
      link: 'demo/',
      children: 'structure',






=======
      text: "家谱",
      prefix: "clan/",
      link: "clan/",
      children: "structure",
    },
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
>>>>>>> .theirs
    },
    {
      text: '家谱',
      icon: 'book',
      // prefix: '/',
      link: 'clan/',
      children: 'structure',
    },
  ],
  '/guide/': [
    {
      text: '文档',
      icon: 'book',
      prefix: 'guide/',
      children: 'structure',
    },
    {
      text: '家谱',
      icon: 'book',
      prefix: 'clan/',
      children: 'structure',
    },
    'slides',
  ],
  '/clan/': [
    {
      text: '家谱',
      icon: 'book',
      prefix: 'clan/',
      children: 'structure',
    },
  ],
  '/': [''],
});
