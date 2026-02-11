import type { Core } from '@strapi/strapi';

import { PLUGIN_ID, getGitHubOpts } from '../config';

const github = ({ strapi }: { strapi: Core.Strapi }) => ({
  async triggerDispatch(): Promise<Response> {
    const { token, url, eventType: event_type } = getGitHubOpts({ strapi });

    const GITHUB_API_DISPATCHES = `${url}/dispatches`;

    const headers = new Headers({
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
    });

    const requestBody = {
      event_type,
      client_payload: {
        time: new Date().toISOString()
      }
    };


    try {
      const response = await fetch(GITHUB_API_DISPATCHES, {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody),
      });

      console.log('');
      console.log(`plugin::${PLUGIN_ID} -> service::github -> method::triggerDispatch -> response`);
      console.log(response);
      console.log('');

      return response;
    } catch(error) {
      throw error;
    }
  },
});

export default github;
