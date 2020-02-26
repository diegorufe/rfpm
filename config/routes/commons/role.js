function rol(expressApp) {
    expressApp.createRouteService('/secure/role');
}

module.exports = {
  route: rol
};
