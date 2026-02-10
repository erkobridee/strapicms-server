export default {
  routes: [
    {
      method: 'POST',
      path: '/github-action',
      handler: 'trigger-pipeline.post',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
