export default () => ({
  type: 'admin',
  routes: [
    {
      method: 'GET',
      path: '/trigger-dispatch',
      // name of the controller file & the method.
      handler: 'github.triggerDispatch',
      config: {
        policies: [],
        auth: false
      },
    },
  ],
});
