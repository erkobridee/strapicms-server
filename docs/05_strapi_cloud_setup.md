🔙 [README.md](../README.md)

# 💭 Strapi Cloud

## Setup

1. Create a new Project - https://cloud.strapi.io/new-project/my-project

2. connect into GitHub Account

3. define the user name

4. select the repository that contains the Strapi CMS

5. define the display name

6. select the cloud region

7. define which Node.js version should be used

8. setup the needed environment variables

9. click at the Create project button

## Deployments

- They are done when a new commit is made to the assigned branch at the Strapi Cloud project

  - for each deployment, it's available 2 logs

    - Build logs

    - Deployment logs

> [!IMPORTANT]
> At the first access, it will be requested to create the `super admin user`
>
> for example:
>
> - name: `Super Admin`
> - email: `admin@strapi.io`
> - password: `Admin987654321`

> [!TIP]
> The first deployment will have a clean state without any content available at the `Content Manager`

## Useful References

- [Cloud Docs](https://docs.strapi.io/cloud/intro)

  - [Strapi Cloud fundamentals](https://docs.strapi.io/cloud/cloud-fundamentals)

    - API: `https://<project>.strapiapp.com/api/...`

    - Media: `https://<project>.media.strapiapp.com`

  - [Project Settings](https://docs.strapi.io/cloud/projects/settings)

    - [Variables](https://docs.strapi.io/cloud/projects/settings#variables)

  - [Command Line Interface (CLI)](https://docs.strapi.io/cloud/cli/cloud-cli)
