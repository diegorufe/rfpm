/**
 * Indicate is electron app
 */
const IS_ELECTRONA_APP = true;
/**
 * Indicate is dev operation
 */
const IS_DEV = false;

if (!IS_ELECTRONA_APP) {
  require("./createExpressApp")(IS_ELECTRONA_APP);
} else {
  require("./createElectronApp")(IS_DEV);
}
