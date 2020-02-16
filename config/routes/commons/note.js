function note(expressApp) {
    expressApp.createRouteService('/secure/note');
}

module.exports = {
  route: note
};
