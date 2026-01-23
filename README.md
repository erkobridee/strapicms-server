# strapicms-server

Testing of [Strapi](https://strapi.io/) - Open source Node.js Headless CMS 🚀

- [CMS Docs](https://docs.strapi.io/cms/intro)

- [Cloud Docs](https://docs.strapi.io/cloud/intro)

## TODO

- Define the intial definition based on [Astro & Strapi Website Tutorial: Part 2 - Intro to Strapi](https://strapi.io/blog/astro-and-strapi-website-tutorial-part-2-intro-to-strapi) [code](https://github.com/Theodore-Kelechukwu-Onyejiaku/astro-strapi-tutorial/tree/part-2/blog)
  - use a docker to define a local PostgreSQL, useful ref: [[GitHub] erkobridee/docker-postgresql](https://github.com/erkobridee/docker-postgresql)

- Initial idea for the "Data Model"

```
Blog
  - title
  - description
  - slug
  - body
  - tags (Relationship with the tags collection)
  - cover
    - image
    - alt text

Tag
  - title
  - description
  - slug

Page
  - title
  - description
  - slug
  - body
  - cover
    - image
    - alt text
```
