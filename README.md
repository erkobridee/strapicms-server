# strapicms-server

Testing of [Strapi](https://strapi.io/) - Open source Node.js Headless CMS 🚀

- [Enterprise Edition](https://strapi.io/enterprise)

- [CMS Docs](https://docs.strapi.io/cms/intro)

  - [CMS Pricing](https://strapi.io/pricing-cms)

- [Cloud Docs](https://docs.strapi.io/cloud/intro)

  - [Cloud Pricing](https://strapi.io/pricing-cloud)

  - [Project Settings](https://docs.strapi.io/cloud/projects/settings)

    - [Variables](https://docs.strapi.io/cloud/projects/settings#variables)

- [[GitHub] erkobridee/strapicms-astro-client](https://github.com/erkobridee/strapicms-astro-client) - Frontend application that consumes content from the Strapi CMS

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

      - For advance support I have used the plugin [CKEditor 5](https://market.strapi.io/plugins/@_sh-strapi-plugin-ckeditor)

        - To add images, it should be done on the edit view, not on the source view

        - [[GitHub] nshenderov/strapi-plugin-ckeditor](https://github.com/nshenderov/strapi-plugin-ckeditor) - Integrates CKEditor 5 into your Strapi project as a fully customizable custom field.

          - [Error: Could not find Custom Field: plugin::ckeditor5.CKEditor · Issue #239 · nshenderov/strapi-plugin-ckeditor](https://github.com/nshenderov/strapi-plugin-ckeditor/issues/239#issuecomment-3861176792)

- Improve performance

  - Install/Configure a [caching support](docs/99_useful_references.md#cache)

- Triggering a GitHub Action

  - Using a webhook approach

    - based on: [Passing Body Data in Strapi Webhooks: Triggering GitHub Workflows Example | u11d](https://u11d.com/blog/passing-body-data-in-strapi-webhooks-triggering-git-hub-workflows-example/)

    - downside: it needs to define an exposed API url to be called by the webhook

    - GitHub Action triggered: [[GitHub] erkobridee/strapicms-astro-client :: strapi_triggers_github_workflow #1](https://github.com/erkobridee/strapicms-astro-client/actions/runs/21860880779)