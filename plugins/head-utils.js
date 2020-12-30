export default (_, inject) => {
  inject('headUtil', (data) => ({
    htmlAttrs: {
      lang: data.lang,
    },
    title: data.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        contnt:
          data.description ||
          `Sitthi's Portfolio รวบรวมผลงานที่การทำเว็บไซต์ โมบายแอพพลิเคชั่น ทั้งด้าน Frontend และ Backend`,
      },
      {
        name: `keywords`,
        content: ['bigstth', 'bigstth freelance'],
      },
      {
        property: 'og:title',
        name: 'og:title',
        content: data.title || `Sitthi's Portfolio`,
      },
      {
        property: 'og:description',
        name: 'og:description',
        content:
          data.description ||
          `Sitthi's Portfolio รวบรวมผลงานที่การทำเว็บไซต์ โมบายแอพพลิเคชั่น ทั้งด้าน Frontend และ Backend`,
      },
      { property: 'og:url', name: 'og:url', content: 'www.stth.me' },
      {
        property: 'og:site_name',
        name: 'og:site_name',
        content: `Sitthi's Portfolio`,
      },
      {
        property: 'og:image',
        name: 'og:image',
        content: data.image || '/images/default_seo.jpg',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: data.urlPath ? data.urlPath : '',
      },
    ],
  }))
}
