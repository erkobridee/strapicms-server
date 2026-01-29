# strapicms-server

Testing of [Strapi](https://strapi.io/) - Open source Node.js Headless CMS 🚀

- [CMS Docs](https://docs.strapi.io/cms/intro)

  - [CMS Pricing](https://strapi.io/pricing-cms)

- [Cloud Docs](https://docs.strapi.io/cloud/intro)

  - [Cloud Pricing](https://strapi.io/pricing-cloud)

## CLI commands

1\. setup the project

```shell
make
```

2\. start the Strapi CMS

```shell
npm run dev
```

3\. access the Strapi CMS admin page

```http
http://localhost:1337
```

---

- [Upgrade tool | Strapi Blog](https://docs.strapi.io/cms/upgrade-tool)

  - [Upgrade to the latest version](https://docs.strapi.io/cms/upgrade-tool#upgrade-to-the-latest-version)

    ```shell
    npx @strapi/upgrade latest
    ```

## Docs

- [Project Setup](docs/01_setup.md)

- [Getting started with Strapi](docs/02_getting_start.md)

- [Data Modeling](docs/03_data_modeling.md)

- [Project Backup and Restore](docs/04_backup_and_restore.md)

- [Useful References](docs/99_useful_references.md)

## Findings

- Supports multi language content [ [Internationalization (i18n)](https://docs.strapi.io/cms/features/internationalization) ]

  - Needs to define the supported languages ( [Adding a new locale](https://docs.strapi.io/cms/features/internationalization#adding-a-new-locale) )

  - Once defining the Content Type, [it should be configured to support internacionalization](https://docs.strapi.io/cms/features/internationalization#content-type-builder)

  - [Editing the content](https://docs.strapi.io/cms/features/internationalization#usage) is done one language per time, and each language content should be published ( [Draft & Publish](https://docs.strapi.io/cms/features/draft-and-publish) )

- Content

  - Modeling

    - It should be done at the [Content-Type Builder](https://docs.strapi.io/cms/features/content-type-builder)

  - Editing

    - It should be done at the [Content Manager](https://docs.strapi.io/cms/features/content-manager)

    - [Supports Markdown content](https://docs.strapi.io/cms/features/content-type-builder#rich-text-markdown), but the UI component to edit it provides a simple support

      - For advance support it would be needed to install (or define a) plugin ( [CKEditor 5](https://market.strapi.io/plugins/@_sh-strapi-plugin-ckeditor) | [Markdown Editor](https://market.strapi.io/plugins/strapi-plugin-wysiwyg-react-md-editor) ) [ Regarding defining a plugin, it would be intersting to explore the usage of [MDXEditor](https://mdxeditor.dev/) ]

- Improve performance

  - Install/Configure a [caching support](docs/99_useful_references.md#cache)
