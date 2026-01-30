🔙 [README.md](../README.md)

<!--

TODO: check
  https://docs.strapi.io/cms/backend-customization/models

-->

# Useful references

- [Strapi vs Storyblok | Strapi.io](https://strapi.io/headless-cms/comparison/strapi-vs-storyblok)

- [Top 7 headless CMS with Self-hosting Options [2025] | WPSteroids.com](https://wpsteroids.com/blog/self-hosted-headless-cms/)

- [What is Strapi CMS? Build Anything with this Flexible Headless CMS | WPSteroids.com](https://wpsteroids.com/technology/strapi-cms/)

- [Let's learn how to customize Strapi Admin Dashbouard| Strapi Blog](https://strapi.io/blog/how-to-build-a-truck-tracker-custom-field-and-map-widget-for-strapi-admin)

- [How to Customize the Strapi Back-end Using TypeScript | DEV Community](https://dev.to/strapi/how-to-customize-the-strapi-back-end-services-routes-controllers-queries-using-typescript-26oj)

  - [How to Customize the Strapi Back-end (Services, Routes, Controllers, Queries) using TypeScript | Strapi Blog](https://strapi.io/blog/how-to-customize-the-strapi-back-end-using-typescript)

- [How to Create a Custom API Endpoint in Strapi? | Strapi Blog](https://strapi.io/blog/how-to-create-a-custom-api-endpoint-in-strapi)

  - [[GitHub] hubertnare/strapi5-custom-api-endpoint](https://github.com/hubertnare/strapi5-custom-api-endpoint)

    - [src/api/content-summary](https://github.com/hubertnare/strapi5-custom-api-endpoint/tree/d756156ebbd7b6ae5202bab20fa23f2f7e724d50/src/api/content-summary)

## Performance

- [6 Performance Mistakes in Strapi and Next.js Apps (and How to Fix Them) | Strapi Blog](https://strapi.io/blog/performance-mistakes-strapi-nextjs-apps)

### Cache

- [Strapi REST Cache Plugin Now Supports Strapi v5 | Strapi Blog](https://strapi.io/blog/strapi-rest-cache-plugin-now-supports-strapi-v5)

  - [Installation | REST Cache](https://strapi-community.github.io/plugin-rest-cache/guide/installation.html)

  - [[GitHub] strapi-community/plugin-rest-cache](https://github.com/strapi-community/plugin-rest-cache) - Speed-up HTTP requests with LRU cache.

    ```shell
    npm i -S keyv@5.5.0 @strapi-community/plugin-rest-cache
    ```

    Redis provider

    ```shell
    npm i -S @strapi-community/plugin-redis @strapi-community/provider-rest-cache-redis
    ```

    - [Setting Up Redis with Docker: A Step-by-Step Guide | DEV Community](https://dev.to/yousufbasir/setting-up-redis-with-docker-a-step-by-step-guide-3g2h)

    - [Setting Up Redis with Docker Compose | Sliplane](https://sliplane.io/blog/setting-up-redis-with-docker-compose)

## Webhooks

- [Webhooks explained and how to use them in Strapi | Strapi Blog](https://strapi.io/blog/webhooks)

- [Trigger Deployments Using Vercel Deploy Hook and Strapi Webhook | Strapi Blog](https://strapi.io/blog/trigger-deployments-using-vercel-deploy-hook-and-strapi-webhook)

## GitHub Workflows

- [Passing Body Data in Strapi Webhooks: Triggering GitHub Workflows Example | u11d](https://u11d.com/blog/passing-body-data-in-strapi-webhooks-triggering-git-hub-workflows-example/)

  - [Passing Body Data in Strapi Webhooks: Triggering GitHub Workflows Example | Dev Community](https://dev.to/u11d/passing-body-data-in-strapi-webhooks-triggering-github-workflows-example-43nh)

  - [[GitHub] uninterrupted-tech/strapi-webhook](https://github.com/uninterrupted-tech/strapi-webhook)

    - [src/api/github/controllers/trigger-pipeline.ts](https://github.com/uninterrupted-tech/strapi-webhook/blob/main/src/api/github/controllers/trigger-pipeline.ts#L32)

- [[GitHub] taskworld/strapi-plugin-github-action-dispatch](https://github.com/taskworld/strapi-plugin-github-action-dispatch) - A strapi plugin to trigger a github workflow from the strapi admin panel
