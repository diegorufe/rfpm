const IS_ELECTRON_APP = false;

const optionsElectron = {
  publicPath: "./",
};

const optionsRest = {
  publicPath: "/",
};

const options = IS_ELECTRON_APP ? optionsElectron : optionsRest;

// vue.config.js
module.exports = options;
