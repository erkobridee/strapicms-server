// How to access and cast environment variables
// https://docs.strapi.io/cms/configurations/guides/access-cast-environment-variables

// Redis Configuration
// https://strapi-community.github.io/plugin-rest-cache/guide/provider/redis.html

export default ({ env }) => ({
  // https://github.com/strapi-community/plugin-redis
  redis: {
    config: {
      settings: {
        debug: false,
        enableRedlock: true,
      },
      connections: {
        default: {
          connection: {
            host: "127.0.0.1",
            port: env("CACHE_PORT", 6379),
            db: 0,
          },
          settings: {
            debug: false,
          },
        },
      },
    },
  },

  "rest-cache": {
    config: {
      provider: {
        name: "redis",

        options: {
          // The name of the connection as defined in the Redis plugin.
          connection: "default",

          // The time to live in milliseconds. This is the maximum amount of time that an item can be in the cache before it is removed.
          ttl: 3600 * 1000,
        },
      },
      strategy: {
        // if you are using keyPrefix for your Redis, please add <keysPrefix>
        // keysPrefix: "<redis_keyPrefix>",

        contentTypes: [
          // list of Content-Types UID to cache
          "api::tag.tag",
          "api::blog.blog",
          "api::page.page",
        ],
      },
    },
  },
});
