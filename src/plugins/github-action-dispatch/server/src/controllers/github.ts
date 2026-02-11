import type { Core } from '@strapi/strapi';
import type { Context, Next } from "koa";

import { PLUGIN_ID } from '../config';

//----------------------------------------------------------------------------//

const github = ({ strapi }: { strapi: Core.Strapi }) => ({
  async triggerDispatch(ctx: Context, next: Next) {
    try {
      const response: Response = await strapi
        .plugin(PLUGIN_ID)
        // the name of the service file & the method.
        .service('github')
        .triggerDispatch();

      const { url, status, statusText, headers } = response;

      const body = {
        url,
        status,
        statusText,
        headers: Array.from(headers.entries())
      };

      ctx.body = JSON.stringify(body);

      ctx.response.status = 200;

      console.log('\n');
      console.log(`plugin::${PLUGIN_ID} -> controller::github -> method::triggerDispatch -> response\n`);
      console.log(ctx.body);
      console.log('');

      return next();
    } catch (error: any) {
      ctx.body = JSON.stringify(error);

      ctx.response.status = error.status || 500;

      return next();
    }
  },
});

export default github;
