/**
 * Indicate is electron app
 */
const IS_ELECTRONA_APP = false;
/**
 * Indicate is dev operation
 */
const IS_DEV = true;

if (!IS_ELECTRONA_APP) {
  require("./createExpressApp")(IS_ELECTRONA_APP);
} else {
  require("./createElectronApp")(IS_DEV);
}
