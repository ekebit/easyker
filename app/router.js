module.exports = (app) => {

  const { router, controller } = app;
  router.get('/', controller.home.index.index);
  router.get('/list', controller.home.index.list);
};