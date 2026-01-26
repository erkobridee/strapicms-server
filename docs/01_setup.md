🔙 [README.md](../README.md)

# Project Setup

- Define the intial definition based on [Astro & Strapi Website Tutorial: Part 2 - Intro to Strapi](https://strapi.io/blog/astro-and-strapi-website-tutorial-part-2-intro-to-strapi) [code](https://github.com/Theodore-Kelechukwu-Onyejiaku/astro-strapi-tutorial/tree/part-2/blog)

  - use a docker to define a local PostgreSQL, useful ref: [[GitHub] erkobridee/docker-postgresql](https://github.com/erkobridee/docker-postgresql)

- Initial "Data Model"

```
Page
  - title
  - slug
  - description
  - body
  - cover
  - coverAltText

Tag
  - title
  - slug
  - description

Blog
  - title
  - slug
  - description
  - body
  - tags (Relationship with the tags collection)
  - cover
  - coverAltText
```

## Setup

### 1\. PostgreSQL Database

- configurations at the `.env` file ( check the `.env.example` )

- `docker-compose.yml` that setup the `postgres:17-alpine` image with a pre defined volume, and uses the configurations from the `.env` file

- start as a background `docker compose up -d` ( to stop: `docker compose down` )

#### check the running containers

- `docker ps`

#### test the access into the Postgres database

- `docker exec -it strapicms-database-1 psql -U ${POSTGRES_USER} -d ${POSTGRES_DB}`

### 2\. Strapi Headless CMS

- `npx create-strapi-app@latest tmp`

- Terminal output

```
username:~/git-repos/strapicms-server$ npx create-strapi-app@latest tmp

Strapi v5.33.4 🚀 Let's create your new project

🚀 Welcome to Strapi! Ready to bring your project to life?

Create a free account and get:
30 days of access to the Growth plan, which includes:
✨ Strapi AI: content-type builder, media library and translations
✅ Live Preview
✅ Single Sign-On (SSO) login
✅ Content History
✅ Releases

? Please log in or sign up. Skip
? Do you want to use the default database (sqlite) ? No
? Choose your default database client postgres
? Database name: strapidb
? Host: 127.0.0.1
? Port: 5432
? Username: admin
? Password: *****
? Enable SSL connection: No
? Start with an example structure & data? No
? Start with Typescript? Yes
? Install dependencies with npm? No
? Initialize a git repository? No
? Participate in anonymous A/B testing (to improve Strapi)? No

Strapi Creating a new application at /home/username/git-repos/strapicms-server/tmp

Strapi Your application was created!
Available commands in your project:

    Start Strapi in watch mode. (Changes in Strapi project files will trigger a server restart)
    npm run develop

    Start Strapi without watch mode.
    npm run start

    Build Strapi admin panel.
    npm run build

    Deploy Strapi project.
    npm run deploy

    Display all available commands.
    npm run strapi

    To get started run

    cd /home/username/git-repos/strapicms-server/tmp
    npm install
    npm run develop
```

- `cd tmp`

- `mv {,.[^.]}* ../`

- `cd ..`

- `rm -rf tmp`

- `npm i`

- `npm run dev`

- open `http://localhost:1337/admin`

- setup a super admin user, for example

  - name: `Super Admin`
  - email: `admin@strapi.io`
  - password: `Admin987654321`
