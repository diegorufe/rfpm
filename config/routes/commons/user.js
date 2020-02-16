function user(expressApp) {
    expressApp.createRouteService('/secure/user');
}

module.exports = {
  route: user
};
