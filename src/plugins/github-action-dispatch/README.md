# github-action-dispatch

Make it possible to dispatch an event into a specific GitHub repository

## Initial setup

```shell
npx @strapi/sdk-plugin init github-action-dispatch
```

## Useful references

- [Plugin creation & setup | Strapi Docs](https://docs.strapi.io/cms/plugins-development/create-a-plugin)

- [Let's Build A Strapi 5 Plugin | Strapi Blog](https://strapi.io/blog/how-to-build-your-first-strapi-5-plugin)

- [Build a Custom Strapi Plugin with Medium and Dev.to APIs - Part 1 | Strapi Blog](https://strapi.io/blog/build-a-custom-strapi-plugin-with-medium-and-devto-apis-part1)

  - [[GitHub] Theodore-Kelechukwu-Onyejiaku/custom-strapi-plugin - part-1](https://github.com/Theodore-Kelechukwu-Onyejiaku/custom-strapi-plugin/tree/part-1)

- [Build a Custom Strapi Plugin with Medium and Dev.to APIs - Part 2 | Strapi Blog](https://strapi.io/blog/build-a-custom-strapi-plugin-with-medium-and-devto-apis-part2)

  - [[GitHub] Theodore-Kelechukwu-Onyejiaku/custom-strapi-plugin - part-2](https://github.com/Theodore-Kelechukwu-Onyejiaku/custom-strapi-plugin/tree/part-2)

- [how to I create a local strapi plugin that allows me to deploy it at the strapi cloud | Perplexity.ai](https://www.perplexity.ai/search/how-to-i-create-a-local-strapi-GVcIFfHMQ2qVflKxaMSlkg)

### GitHub Workflows

- [Passing Body Data in Strapi Webhooks: Triggering GitHub Workflows Example | u11d](https://u11d.com/blog/passing-body-data-in-strapi-webhooks-triggering-git-hub-workflows-example/)

  - [Passing Body Data in Strapi Webhooks: Triggering GitHub Workflows Example | Dev Community](https://dev.to/u11d/passing-body-data-in-strapi-webhooks-triggering-github-workflows-example-43nh)

  - [[GitHub] uninterrupted-tech/strapi-webhook](https://github.com/uninterrupted-tech/strapi-webhook)

    - [src/api/github/controllers/trigger-pipeline.ts](https://github.com/uninterrupted-tech/strapi-webhook/blob/main/src/api/github/controllers/trigger-pipeline.ts#L32)

  - [Managing your personal access tokens | GitHub Docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

    - [Permissions required for fine-grained personal access tokens | GitHub Docs](https://docs.github.com/en/rest/authentication/permissions-required-for-fine-grained-personal-access-tokens)

      - [Repository permissions for "Contents"](https://docs.github.com/en/rest/authentication/permissions-required-for-fine-grained-personal-access-tokens#repository-permissions-for-contents)

- [[GitHub] taskworld/strapi-plugin-github-action-dispatch](https://github.com/taskworld/strapi-plugin-github-action-dispatch) - A strapi v4 plugin to trigger a github workflow from the strapi admin panel

### GitHub REST API

- [REST API endpoints for repositories | GitHub Docs](https://docs.github.com/en/rest/repos/repos)

  - [Create a repository dispatch event](https://docs.github.com/en/rest/repos/repos#create-a-repository-dispatch-event)

- [REST API endpoints for workflows | GitHub Docs](https://docs.github.com/en/rest/actions/workflows)

  - [Create a workflow dispatch event](https://docs.github.com/en/rest/actions/workflows#create-a-workflow-dispatch-event)

- [REST API endpoints for workflow runs | GitHub Docs](https://docs.github.com/en/rest/actions/workflow-runs)

  - [List workflow runs for a workflow](https://docs.github.com/en/rest/actions/workflow-runs#list-workflow-runs-for-a-workflow)

