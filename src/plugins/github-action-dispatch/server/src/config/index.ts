import type { Core } from '@strapi/strapi';

import pkg from '../../../package.json';

//----------------------------------------------------------------------------//

function isDefinedString(str: any): str is string {
  return typeof str === "string" && str.trim().length > 0;
}

//----------------------------------------------------------------------------//

export type GitHubOpts = {
  token: string;
  url: string;
  eventType: string;
}

export type GitHubOptsKeys = keyof GitHubOpts;

export const CONFIG_KEYS: GitHubOptsKeys[] = ["token", "url", "eventType"];

export const PLUGIN_ID = pkg.strapi.name;

export const getGitHubOpts = ({ strapi }: { strapi: Core.Strapi }) => CONFIG_KEYS.reduce((acc, key) => ({
    ...acc, [key]: strapi
    .plugin(PLUGIN_ID)
    .config(key)
  })
  , {}) as GitHubOpts;

//----------------------------------------------------------------------------//

export default {
  default: {
    token: undefined,
    url: undefined,
    eventType: undefined
  },

  validator(config: GitHubOpts) {
    CONFIG_KEYS.forEach((key) => {
      if (!isDefinedString(config[key]))
        throw new Error(`missing field "${key}" in config`);
    });
  },
};
