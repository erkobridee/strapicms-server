import type { Context, Next } from "koa";

//---

import { getGithubAuth } from "../../../utils/get-github-auth";

import { CONFIG } from "../../../config";

//----------------------------------------------------------------------------//

const GITHUB_URL_DISPATCHES = `${CONFIG.GITHUB.URL}/dispatches`;
const GITHUB_EVENT_TYPE = CONFIG.GITHUB.EVENT_TYPE;


export default {
  post: async (ctx: Context, next: Next) => {
    const headers = new Headers({
      Accept: "application/vnd.github+json",
      Authorization: getGithubAuth(),
    });

    const requestParams = new URLSearchParams(ctx.request.search);
    const event_type = requestParams.get("event_type");

    if (!event_type || event_type !== GITHUB_EVENT_TYPE) {
      ctx.response.status = 400;
      return next();
    }

    const body = {
      event_type,
      client_payload: {
        time: new Date().toISOString()
      }
    };

    try {
      const response = await fetch(GITHUB_URL_DISPATCHES, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      ctx.response.status = 200;

      console.log(response);

      return next();
    } catch (err) {
      ctx.body = err;
      ctx.response.status = 500;

      return next();
    }
  }
};
