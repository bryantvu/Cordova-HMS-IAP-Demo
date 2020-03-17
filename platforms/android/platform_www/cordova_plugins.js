cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordovaPluginIap.IapWrapper",
      "file": "plugins/cordovaPluginIap/www/IapWrapper.js",
      "pluginId": "cordovaPluginIap",
      "clobbers": [
        "cordova.plugins.IapWrapper"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordovaPluginIap": "1.0.2"
  };
});