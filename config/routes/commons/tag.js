function tag(expressApp) {
    expressApp.createRouteService('/secure/tag');
}

module.exports = {
  route: tag
};
