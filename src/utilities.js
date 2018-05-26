'use strict';

var Utilities = {
  stripNewLinesAndSemicolons: function(scssString) {
    return scssString.replace(/\n/g, '').replace(/\;/g, '');
  },

  stripSpaces: function(scssString) {
    return scssString.replace(/\s/g, '');
  },

  removeFlags: function(value) {
    return value.replace(/\!\w+/g, '');
  },

  removeInlineComments: function(value) {
    if (/\;+\s*\/\//.test(value)) {
      return value.replace(/\;+\s*\/\/.*/g, '');
    }

    var transformedValue = value;
    var commentIndex = value.indexOf('//')

    if (commentIndex > -1) {
      transformedValue = transformedValue.substring(0, commentIndex)
    }

    return transformedValue;

  }
};

module.exports = Utilities;
