/* eslint-env node */
'use strict';

module.exports = {
  name: 'flow-logic',

  isDevelopingAddon: function() {
    return true;
  },

  included: function(/* app */) {
    this._super.included.apply(this, arguments);
  }
};
