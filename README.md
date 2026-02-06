# strapicms-server

Testing of [Strapi](https://strapi.io/) - Open source Node.js Headless CMS 🚀

- [Enterprise Edition](https://strapi.io/enterprise)

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

- Improve performance

  - Install/Configure a [caching support](docs/99_useful_references.md#cache)

## Create a plugin for Strapi 5

- [Plugin creation & setup | Strapi Docs](https://docs.strapi.io/cms/plugins-development/create-a-plugin)

- [Plugin structure | Strapi Docs](https://docs.strapi.io/cms/plugins-development/plugin-structure)

- [How To Build Your First Strapi 5 Plugin | Strapi Blog](https://strapi.io/blog/how-to-build-your-first-strapi-5-plugin)

- [How to Build a Strapi Plugin That Extends the Admin and Backend | Strapi Blog](https://strapi.io/blog/how-to-build-a-strapi-plugin-that-extends-the-admin-and-backend)

## MDXEditor

- [MDXEditor](https://mdxeditor.dev/)

- [[GitHub] mdx-editor/editor](https://github.com/mdx-editor/editor) - A rich text editor React component for markdown

- [how to create a custom field at Strapi 5 using the MDXEditor | Perplexity.ai](https://www.perplexity.ai/search/how-to-create-a-custom-field-a-s1VRWA1QTgO6QX119oS9Mg#0)

- [[GitHub] floatrx/strapi-wysiwyg-mdxeditor-plugin](https://github.com/floatrx/strapi-wysiwyg-mdxeditor-plugin) - MdxEditor Wysiwyg editor for Strapi v4

  - [How to change the WYSIWYG in Strapi | Strapi Blog]

  - [helper-plugin removed | Strapi Docs](https://docs.strapi.io/cms/migration/v4-to-v5/breaking-changes/helper-plugin-deprecated)

  - [The Strapi Design System has been upgraded to v2 | Strapi Docs](https://docs.strapi.io/cms/migration/v4-to-v5/breaking-changes/design-system)

  - [Strapi v4 to Strapi 5 breaking changes | Strapi Docs](https://docs.strapi.io/cms/migration/v4-to-v5/breaking-changes)

  - [Replacing wysiwyg editor with a custom one doesn't work in Strapi 5 · Issue #2374 · strapi/documentation](https://github.com/strapi/documentation/issues/2374#issuecomment-2637614462)