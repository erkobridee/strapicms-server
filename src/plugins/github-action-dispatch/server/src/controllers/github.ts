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

      ctx.body = response;
      ctx.response.status = 200;

      return next();
    } catch (error) {
      ctx.body = error;
      ctx.response.status = 500;

      return next();
    }
  },
});

export default github;
