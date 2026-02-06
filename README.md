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

      - For advance support it would be needed to install (or define a) plugin ( [CKEditor 5](https://market.strapi.io/plugins/@_sh-strapi-plugin-ckeditor) | [Markdown Editor](https://market.strapi.io/plugins/strapi-plugin-wysiwyg-react-md-editor) ) [ Regarding defining a plugin, it would be intersting to explore the usage of [MDXEditor](https://mdxeditor.dev/) ]

- Improve performance

  - Install/Configure a [caching support](docs/99_useful_references.md#cache)

## Testing the CKEditor 5

[CKEditor 5](https://market.strapi.io/plugins/@_sh-strapi-plugin-ckeditor)

### Issue

I got an error when trying to add it as a field to a content type and save the changes

```
⠼ Loading Strapi[2026-02-06 11:19:48.775] error: Schema creation failed: Failed to create schema api::blog.blog
[ERROR]  There seems to be an unexpected error, try again with --debug for more information

┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                                                                         │
│   Error: Could not find Custom Field: plugin::ckeditor5.CKEditor                                                                        │
│   at Object.get (/development/strapicms-server/node_modules/@strapi/core/dist/registries/custom-fields.js:32:23)                        │
│   at mapAttributeToSchema                                                                                                               │
│   (/development/strapicms-server/node_modules/@strapi/core/dist/core-api/routes/validation/mappers.js:148:77)                           │
│   at get content                                                                                                                        │
│   (/development/strapicms-server/node_modules/@strapi/core/dist/core-api/routes/validation/mappers.js:48:24)                            │
│   at get shape                                                                                                                          │
│   (/development/strapicms-server/node_modules/@strapi/core/node_modules/zod/dist/cjs/v4/core/util.js:373:59)                            │
│   at Object.extend                                                                                                                      │
│   (/development/strapicms-server/node_modules/@strapi/core/node_modules/zod/dist/cjs/v4/core/util.js:371:24)                            │
│   at inst.extend                                                                                                                        │
│   (/development/strapicms-server/node_modules/@strapi/core/node_modules/zod/dist/cjs/v4/classic/schemas.js:594:28)                      │
│   at /development/strapicms-server/node_modules/@strapi/core/dist/core-api/routes/validation/mappers.js:46:20                           │
│   at Array.reduce (<anonymous>)                                                                                                         │
│   at Object.createAttributesSchema                                                                                                      │
│   (/development/strapicms-server/node_modules/@strapi/core/dist/core-api/routes/validation/mappers.js:45:23)                            │
│   at get document                                                                                                                       │
│   (/development/strapicms-server/node_modules/@strapi/core/dist/core-api/routes/validation/content-type.js:81:42)                       │
│                                                                                                                                         │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

Bug reported: [Error: Could not find Custom Field: plugin::ckeditor5.CKEditor · Issue #239 · nshenderov/strapi-plugin-ckeditor](https://github.com/nshenderov/strapi-plugin-ckeditor/issues/239)
