/**
 * Indicate is electron app
 */
const IS_ELECTRONA_APP = true;

if (!IS_ELECTRONA_APP) {
  require("./createExpressApp")(IS_ELECTRONA_APP);
} else {
  require("./createElectronApp")();
}
