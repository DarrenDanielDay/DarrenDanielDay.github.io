import { r as react } from './index-c277be94.js';
import { c as createCommonjsModule } from './_commonjsHelpers-eb5a497e.js';

var common = {
  black: '#000',
  white: '#fff'
};

var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};

var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};

var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};

var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};

var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};

var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};

var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function isPlainObject(item) {
  return item && _typeof(item) === 'object' && item.constructor === Object;
}
function deepmerge(target, source) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    clone: true
  };
  var output = options.clone ? _extends({}, target) : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(function (key) {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject(source[key]) && key in target) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/**
 * WARNING: Don't import this directly.
 * Use `MuiError` from `@material-ui/utils/macros/MuiError.macro` instead.
 * @param {number} code
 */
function formatMuiErrorMessage(code) {
  // Apply babel-plugin-transform-template-literals in loose mode
  // loose mode is safe iff we're concatenating primitives
  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

  /* eslint-disable prefer-template */
  var url = 'https://material-ui.com/production-error/?code=' + code;

  for (var i = 1; i < arguments.length; i += 1) {
    // rest params over-transpile for this case
    // eslint-disable-next-line prefer-rest-params
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return 'Minified Material-UI error #' + code + '; visit ' + url + ' for the full message.';
  /* eslint-enable prefer-template */
}

/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map(function (n, index) {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', '), ")") : '';
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
      values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);

  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  var type = 'rgb';
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error( formatMuiErrorMessage(3, color));
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function fade(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = _objectWithoutProperties(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  function width(key) {
    return values[key];
  }

  return _extends({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return _extends({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // To deprecate in v4.1
      //       warning(
      //         false,
      //         [
      //           'Material-UI: Theme.mixins.gutters() is deprecated.',
      //           'You can use the source of the mixin directly:',
      //           `
      // paddingLeft: theme.spacing(2),
      // paddingRight: theme.spacing(2),
      // [theme.breakpoints.up('sm')]: {
      //   paddingLeft: theme.spacing(3),
      //   paddingRight: theme.spacing(3),
      // },
      // `,
      //         ].join('\n'),
      //       );
      return _extends({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, _defineProperty({}, breakpoints.up('sm'), _extends({
        paddingLeft: spacing(3),
        paddingRight: spacing(3)
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, _defineProperty(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), _defineProperty(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common.white,
    default: grey[50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: grey[800],
    default: '#303030'
  },
  action: {
    active: common.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: indigo[300],
    main: indigo[500],
    dark: indigo[700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: pink.A200,
    main: pink.A400,
    dark: pink.A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: red[300],
    main: red[500],
    dark: red[700]
  } : _palette$error,
      _palette$warning = palette.warning,
      warning = _palette$warning === void 0 ? {
    light: orange[300],
    main: orange[500],
    dark: orange[700]
  } : _palette$warning,
      _palette$info = palette.info,
      info = _palette$info === void 0 ? {
    light: blue[300],
    main: blue[500],
    dark: blue[700]
  } : _palette$info,
      _palette$success = palette.success,
      success = _palette$success === void 0 ? {
    light: green[300],
    main: green[500],
    dark: green[700]
  } : _palette$success,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = _objectWithoutProperties(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


  function getContrastText(background) {
    var contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    return contrastText;
  }

  var augmentColor = function augmentColor(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
    color = _extends({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.main) {
      throw new Error( formatMuiErrorMessage(4, mainShade));
    }

    if (typeof color.main !== 'string') {
      throw new Error( formatMuiErrorMessage(5, JSON.stringify(color.main)));
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  var types = {
    dark: dark,
    light: light
  };

  var paletteOutput = deepmerge(_extends({
    // A collection of common colors.
    common: common,
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey: grey,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other);
  return paletteOutput;
}

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$fontWeightBold = _ref.fontWeightBold,
      fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allVariants = _ref.allVariants,
      pxToRem2 = _ref.pxToRem,
      other = _objectWithoutProperties(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  var coef = fontSize / 14;

  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return _extends({
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, casing, allVariants);
  };

  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return deepmerge(_extends({
    htmlFontSize: htmlFontSize,
    pxToRem: pxToRem,
    round: round,
    // TODO v5: remove
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

var shape = {
  borderRadius: 4
};

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function createUnarySpacing(theme) {
  var themeSpacing = theme.spacing || 8;

  if (typeof themeSpacing === 'number') {
    return function (abs) {

      return themeSpacing * abs;
    };
  }

  if (Array.isArray(themeSpacing)) {
    return function (abs) {

      return themeSpacing[abs];
    };
  }

  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }

  return function () {
    return undefined;
  };
}

function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
  // Smaller components, such as icons and type, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  var transform = createUnarySpacing({
    spacing: spacingInput
  });

  var spacing = function spacing() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args.map(function (argument) {
      if (typeof argument === 'string') {
        return argument;
      }

      var output = transform(argument);
      return typeof output === 'number' ? "".concat(output, "px") : output;
    }).join(' ');
  }; // Backward compatibility, to remove in v5.


  Object.defineProperty(spacing, 'unit', {
    get: function get() {

      return spacingInput;
    }
  });
  spacing.mui = true;
  return spacing;
}

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


var transitions = {
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _options$duration = options.duration,
        durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === void 0 ? 0 : _options$delay,
        other = _objectWithoutProperties(options, ["duration", "easing", "delay"]);

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
};

// We need to centralize the zIndex definitions as they work
// like global values in the browser.
var zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};

function createMuiTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      spacingInput = options.spacing,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = _objectWithoutProperties(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

  var palette = createPalette(paletteInput);
  var breakpoints = createBreakpoints(breakpointsInput);
  var spacing = createSpacing(spacingInput);
  var muiTheme = deepmerge({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: createMixins(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Provide default props
    shadows: shadows,
    typography: createTypography(palette, typographyInput),
    spacing: spacing,
    shape: shape,
    transitions: transitions,
    zIndex: zIndex
  }, other);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  muiTheme = args.reduce(function (acc, argument) {
    return deepmerge(acc, argument);
  }, muiTheme);

  return muiTheme;
}

var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

/**
 * This is the list of the style rule name we use as drop in replacement for the built-in
 * pseudo classes (:checked, :disabled, :focused, etc.).
 *
 * Why do they exist in the first place?
 * These classes are used at a specificity of 2.
 * It allows them to override previously definied styles as well as
 * being untouched by simple user overrides.
 */

var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected']; // Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's inspired by
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

function createGenerateClassName() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$disableGloba = options.disableGlobal,
      disableGlobal = _options$disableGloba === void 0 ? false : _options$disableGloba,
      _options$productionPr = options.productionPrefix,
      productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr,
      _options$seed = options.seed,
      seed = _options$seed === void 0 ? '' : _options$seed;
  var seedPrefix = seed === '' ? '' : "".concat(seed, "-");
  var ruleCounter = 0;

  var getNextCounterId = function getNextCounterId() {
    ruleCounter += 1;

    return ruleCounter;
  };

  return function (rule, styleSheet) {
    var name = styleSheet.options.name; // Is a global static MUI style?

    if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
      // We can use a shorthand class name, we never use the keys to style the components.
      if (pseudoClasses.indexOf(rule.key) !== -1) {
        return "Mui-".concat(rule.key);
      }

      var prefix = "".concat(seedPrefix).concat(name, "-").concat(rule.key);

      if (!styleSheet.options.theme[nested] || seed !== '') {
        return prefix;
      }

      return "".concat(prefix, "-").concat(getNextCounterId());
    }

    {
      return "".concat(seedPrefix).concat(productionPrefix).concat(getNextCounterId());
    }
  };
}

/* eslint-disable no-restricted-syntax */
function getThemeProps(params) {
  var theme = params.theme,
      name = params.name,
      props = params.props;

  if (!theme || !theme.props || !theme.props[name]) {
    return props;
  } // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


  var defaultProps = theme.props[name];
  var propName;

  for (propName in defaultProps) {
    if (props[propName] === undefined) {
      props[propName] = defaultProps[propName];
    }
  }

  return props;
}

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof$1(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof$1(document)) === 'object' && document.nodeType === 9;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style) {
  if (style == null || typeof style !== 'object') return style;
  if (Array.isArray(style)) return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor) return style;
  var newStyle = {};

  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }

  return newStyle;
}

/**
 * Create a rule instance.
 */

function createRule(name, decl, options) {
  if (name === void 0) {
    name = 'unnamed';
  }

  var jss = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule; // It is an at-rule and it has no instance.

  if (name[0] === '@') ;

  return null;
}

var join = function join(value, by) {
  var result = '';

  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }

  return result;
};

/**
 * Converts array values to string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */
var toCssValue = function toCssValue(value, ignoreImportant) {
  if (ignoreImportant === void 0) {
    ignoreImportant = false;
  }

  if (!Array.isArray(value)) return value;
  var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', '); // Add !important, because it was ignored.


  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
};

/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */
function indentStr(str, indent) {
  var result = '';

  for (var index = 0; index < indent; index++) {
    result += '  ';
  }

  return result + str;
}
/**
 * Converts a Rule to CSS string.
 */


function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }

  var result = '';
  if (!style) return result;
  var _options = options,
      _options$indent = _options.indent,
      indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;
  if (selector) indent++; // Apply fallbacks first.

  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];

        for (var prop in fallback) {
          var value = fallback[prop];

          if (value != null) {
            if (result) result += '\n';
            result += "" + indentStr(prop + ": " + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];

        if (_value != null) {
          if (result) result += '\n';
          result += "" + indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];

    if (_value2 != null && _prop2 !== 'fallbacks') {
      if (result) result += '\n';
      result += "" + indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
    }
  } // Allow empty style in this case, because properties will be added dynamically.


  if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

  if (!selector) return result;
  indent--;
  if (result) result = "\n" + result + "\n";
  return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
}

var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
var escape = (function (str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
});

var BaseStyleRule =
/*#__PURE__*/
function () {
  function BaseStyleRule(key, style, options) {
    this.type = 'style';
    this.key = void 0;
    this.isProcessed = false;
    this.style = void 0;
    this.renderer = void 0;
    this.renderable = void 0;
    this.options = void 0;
    var sheet = options.sheet,
        Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
  }
  /**
   * Get or set a style property.
   */


  var _proto = BaseStyleRule.prototype;

  _proto.prop = function prop(name, value, options) {
    // It's a getter.
    if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

    var force = options ? options.force : false;
    if (!force && this.style[name] === value) return this;
    var newValue = value;

    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }

    var isEmpty = newValue == null || newValue === false;
    var isDefined = name in this.style; // Value is empty and wasn't defined before.

    if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

    var remove = isEmpty && isDefined;
    if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

    if (this.renderable && this.renderer) {
      if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }

    var sheet = this.options.sheet;

    if (sheet && sheet.attached) ;

    return this;
  };

  return BaseStyleRule;
}();
var StyleRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  _inheritsLoose(StyleRule, _BaseStyleRule);

  function StyleRule(key, style, options) {
    var _this;

    _this = _BaseStyleRule.call(this, key, style, options) || this;
    _this.selectorText = void 0;
    _this.id = void 0;
    _this.renderable = void 0;
    var selector = options.selector,
        scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;

    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }

    return _this;
  }
  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  var _proto2 = StyleRule.prototype;

  /**
   * Apply rule to an element inline.
   */
  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;

    if (renderer) {
      var json = this.toJSON();

      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }

    return this;
  }
  /**
   * Returns JSON representation of the rule.
   * Fallbacks are not supported.
   * Useful for inline styles.
   */
  ;

  _proto2.toJSON = function toJSON() {
    var json = {};

    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
    }

    return json;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };

  _createClass(StyleRule, [{
    key: "selector",
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      var renderer = this.renderer,
          renderable = this.renderable;
      if (!renderable || !renderer) return;
      var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    }
    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(name, style, options) {
    if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
      return null;
    }

    return new StyleRule(name, style, options);
  }
};

var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
/**
 * Conditional rule for @media, @supports
 */

var ConditionalRule =
/*#__PURE__*/
function () {
  function ConditionalRule(key, styles, options) {
    this.type = 'conditional';
    this.at = void 0;
    this.key = void 0;
    this.query = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : 'unknown'; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

    this.query = options.name || "@" + this.at;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = ConditionalRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }

    if (options.indent == null) options.indent = defaultToStringOptions.indent;
    if (options.children == null) options.children = defaultToStringOptions.children;

    if (options.children === false) {
      return this.query + " {}";
    }

    var children = this.rules.toString(options);
    return children ? this.query + " {\n" + children + "\n}" : '';
  };

  return ConditionalRule;
}();
var keyRegExp = /@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule(key, styles, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
  }
};

var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
/**
 * Rule for @keyframes
 */

var KeyframesRule =
/*#__PURE__*/
function () {
  function KeyframesRule(key, frames, options) {
    this.type = 'keyframes';
    this.at = '@keyframes';
    this.key = void 0;
    this.name = void 0;
    this.id = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    var nameMatch = key.match(nameRegExp);

    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = 'noname';
    }

    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));

    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, options, {
        parent: this
      }));
    }

    this.rules.process();
  }
  /**
   * Generates a CSS string.
   */


  var _proto = KeyframesRule.prototype;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }

    if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
    if (options.children == null) options.children = defaultToStringOptions$1.children;

    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }

    var children = this.rules.toString(options);
    if (children) children = "\n" + children + "\n";
    return this.at + " " + this.id + " {" + children + "}";
  };

  return KeyframesRule;
}();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;

var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
  if (typeof val === 'string') {
    return val.replace(refRegExp, function (match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }
      return match;
    });
  }

  return val;
};
/**
 * Replace the reference for a animation name.
 */


var replaceRef = function replaceRef(style, prop, keyframes) {
  var value = style[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);

  if (refKeyframe !== value) {
    style[prop] = refKeyframe;
  }
};

var plugin = {
  onCreateRule: function onCreateRule(key, frames, options) {
    return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style' || !sheet) return style;
    if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
    if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;

    if (!sheet) {
      return val;
    }

    switch (prop) {
      case 'animation':
        return findReferencedKeyframe(val, sheet.keyframes);

      case 'animation-name':
        return findReferencedKeyframe(val, sheet.keyframes);

      default:
        return val;
    }
  }
};

var KeyframeRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  _inheritsLoose(KeyframeRule, _BaseStyleRule);

  function KeyframeRule() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
    _this.renderable = void 0;
    return _this;
  }

  var _proto = KeyframeRule.prototype;

  /**
   * Generates a CSS string.
   */
  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };

  return KeyframeRule;
}(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (options.parent && options.parent.type === 'keyframes') {
      return new KeyframeRule(key, style, options);
    }

    return null;
  }
};

var FontFaceRule =
/*#__PURE__*/
function () {
  function FontFaceRule(key, style, options) {
    this.type = 'font-face';
    this.at = '@font-face';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = FontFaceRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.style)) {
      var str = '';

      for (var index = 0; index < this.style.length; index++) {
        str += toCss(this.at, this.style[index]);
        if (this.style[index + 1]) str += '\n';
      }

      return str;
    }

    return toCss(this.at, this.style, options);
  };

  return FontFaceRule;
}();
var keyRegExp$2 = /@font-face/;
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
  }
};

var ViewportRule =
/*#__PURE__*/
function () {
  function ViewportRule(key, style, options) {
    this.type = 'viewport';
    this.at = '@viewport';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = ViewportRule.prototype;

  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };

  return ViewportRule;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
  }
};

var SimpleRule =
/*#__PURE__*/
function () {
  function SimpleRule(key, value, options) {
    this.type = 'simple';
    this.key = void 0;
    this.value = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  var _proto = SimpleRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = '';

      for (var index = 0; index < this.value.length; index++) {
        str += this.key + " " + this.value[index] + ";";
        if (this.value[index + 1]) str += '\n';
      }

      return str;
    }

    return this.key + " " + this.value + ";";
  };

  return SimpleRule;
}();
var keysMap = {
  '@charset': true,
  '@import': true,
  '@namespace': true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};

var plugins = [pluginStyleRule, pluginConditionalRule, plugin, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */

};

var RuleList =
/*#__PURE__*/
function () {
  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.
  // Original styles object.
  // Used to ensure correct rules order.
  function RuleList(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  var _proto = RuleList.prototype;

  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options,
        parent = _this$options.parent,
        sheet = _this$options.sheet,
        jss = _this$options.jss,
        Renderer = _this$options.Renderer,
        generateId = _this$options.generateId,
        scoped = _this$options.scoped;

    var options = _extends({
      classes: this.classes,
      parent: parent,
      sheet: sheet,
      jss: jss,
      Renderer: Renderer,
      generateId: generateId,
      scoped: scoped,
      name: name,
      keyframes: this.keyframes,
      selector: undefined
    }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
    // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
    // we need to make the key unique within this RuleList instance scope.


    var key = name;

    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    } // We need to save the original decl before creating the rule
    // because cache plugin needs to use it as a key to return a cached rule.


    this.raw[key] = decl;

    if (key in this.classes) {
      // E.g. rules inside of @media container
      options.selector = "." + escape(this.classes[key]);
    }

    var rule = createRule(key, decl, options);
    if (!rule) return null;
    this.register(rule);
    var index = options.index === undefined ? this.index.length : options.index;
    this.index.splice(index, 0, rule);
    return rule;
  }
  /**
   * Get a rule.
   */
  ;

  _proto.get = function get(name) {
    return this.map[name];
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  }
  /**
   * Run `onProcessRule()` plugins on every rule.
   */
  ;

  _proto.process = function process() {
    var plugins = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
    // we end up with very hard-to-track-down side effects.

    this.index.slice(0).forEach(plugins.onProcessRule, plugins);
  }
  /**
   * Register a rule in `.map`, `.classes` and `.keyframes` maps.
   */
  ;

  _proto.register = function register(rule) {
    this.map[rule.key] = rule;

    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id) this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  }
  /**
   * Unregister a rule.
   */
  ;

  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];

    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var name;
    var data;
    var options;

    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
      name = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe[invalid-tuple-index]

      data = arguments.length <= 1 ? undefined : arguments[1]; // $FlowFixMe[invalid-tuple-index]

      options = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      data = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe[invalid-tuple-index]

      options = arguments.length <= 1 ? undefined : arguments[1];
      name = null;
    }

    if (name) {
      this.updateOne(this.map[name], data, options);
    } else {
      for (var index = 0; index < this.index.length; index++) {
        this.updateOne(this.index[index], data, options);
      }
    }
  }
  /**
   * Execute plugins, update rule props.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }

    var _this$options2 = this.options,
        plugins = _this$options2.jss.plugins,
        sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

    if (rule.rules instanceof RuleList) {
      rule.rules.update(data, options);
      return;
    }

    var styleRule = rule;
    var style = styleRule.style;
    plugins.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

    if (options.process && style && style !== styleRule.style) {
      // We need to run the plugins in case new `style` relies on syntax plugins.
      plugins.onProcessStyle(styleRule.style, styleRule, sheet); // Update and add props.

      for (var prop in styleRule.style) {
        var nextValue = styleRule.style[prop];
        var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (nextValue !== prevValue) {
          styleRule.prop(prop, nextValue, forceUpdateOptions);
        }
      } // Remove props.


      for (var _prop in style) {
        var _nextValue = styleRule.style[_prop];
        var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (_nextValue == null && _nextValue !== _prevValue) {
          styleRule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    var str = '';
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;

    for (var index = 0; index < this.index.length; index++) {
      var rule = this.index[index];
      var css = rule.toString(options); // No need to render an empty rule.

      if (!css && !link) continue;
      if (str) str += '\n';
      str += css;
    }

    return str;
  };

  return RuleList;
}();

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(styles, options) {
    this.options = void 0;
    this.deployed = void 0;
    this.attached = void 0;
    this.rules = void 0;
    this.renderer = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.queue = void 0;
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });

    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }

    this.rules = new RuleList(this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Attach renderable to the render tree.
   */


  var _proto = StyleSheet.prototype;

  _proto.attach = function attach() {
    if (this.attached) return this;
    if (this.renderer) this.renderer.attach();
    this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

    if (!this.deployed) this.deploy();
    return this;
  }
  /**
   * Remove renderable from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.attached) return this;
    if (this.renderer) this.renderer.detach();
    this.attached = false;
    return this;
  }
  /**
   * Add a rule to the current stylesheet.
   * Will insert a rule also after the stylesheet has been rendered first time.
   */
  ;

  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue; // Plugins can create rules.
    // In order to preserve the right order, we need to queue all `.addRule` calls,
    // which happen after the first `rules.add()` call.

    if (this.attached && !queue) this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);

    if (this.attached) {
      if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
      // It will be inserted all together when .attach is called.

      if (queue) queue.push(rule);else {
        this.insertRule(rule);

        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = undefined;
        }
      }
      return rule;
    } // We can't add rules to a detached style node.
    // We will redeploy the sheet once user will attach it.


    this.deployed = false;
    return rule;
  }
  /**
   * Insert rule into the StyleSheet
   */
  ;

  _proto.insertRule = function insertRule(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  }
  /**
   * Create and add rules.
   * Will render also after Style Sheet was rendered the first time.
   */
  ;

  _proto.addRules = function addRules(styles, options) {
    var added = [];

    for (var name in styles) {
      var rule = this.addRule(name, styles[name], options);
      if (rule) added.push(rule);
    }

    return added;
  }
  /**
   * Get a rule by name.
   */
  ;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Delete a rule by name.
   * Returns `true`: if rule has been deleted from the DOM.
   */
  ;

  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === 'object' ? name : this.rules.get(name);

    if (!rule || // Style sheet was created without link: true and attached, in this case we
    // won't be able to remove the CSS rule from the DOM.
    this.attached && !rule.renderable) {
      return false;
    }

    this.rules.remove(rule);

    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }

    return true;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Deploy pure CSS string to a renderable.
   */
  ;

  _proto.deploy = function deploy() {
    if (this.renderer) this.renderer.deploy();
    this.deployed = true;
    return this;
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var _this$rules;

    (_this$rules = this.rules).update.apply(_this$rules, arguments);

    return this;
  }
  /**
   * Updates a single rule.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };

  return StyleSheet;
}();

var PluginsRegistry =
/*#__PURE__*/
function () {
  function PluginsRegistry() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = void 0;
  }

  var _proto = PluginsRegistry.prototype;

  /**
   * Call `onCreateRule` hooks and return an object if returned by a hook.
   */
  _proto.onCreateRule = function onCreateRule(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule) return rule;
    }

    return null;
  }
  /**
   * Call `onProcessRule` hooks.
   */
  ;

  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed) return;
    var sheet = rule.options.sheet;

    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }

    if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  }
  /**
   * Call `onProcessStyle` hooks.
   */
  ;

  _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      // $FlowFixMe[prop-missing]
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  }
  /**
   * Call `onProcessSheet` hooks.
   */
  ;

  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  }
  /**
   * Call `onUpdate` hooks.
   */
  ;

  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  }
  /**
   * Call `onChangeValue` hooks.
   */
  ;

  _proto.onChangeValue = function onChangeValue(value, prop, rule) {
    var processedValue = value;

    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }

    return processedValue;
  }
  /**
   * Register a plugin.
   */
  ;

  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: 'external'
      };
    }

    var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

    if (plugins.indexOf(newPlugin) !== -1) {
      return;
    }

    plugins.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        }
      }

      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };

  return PluginsRegistry;
}();

/**
 * Sheets registry to access them all at one place.
 */
var SheetsRegistry =
/*#__PURE__*/
function () {
  function SheetsRegistry() {
    this.registry = [];
  }

  var _proto = SheetsRegistry.prototype;

  /**
   * Register a Style Sheet.
   */
  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index = sheet.options.index;
    if (registry.indexOf(sheet) !== -1) return;

    if (registry.length === 0 || index >= this.index) {
      registry.push(sheet);
      return;
    } // Find a position.


    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  }
  /**
   * Reset the registry.
   */
  ;

  _proto.reset = function reset() {
    this.registry = [];
  }
  /**
   * Remove a Style Sheet.
   */
  ;

  _proto.remove = function remove(sheet) {
    var index = this.registry.indexOf(sheet);
    this.registry.splice(index, 1);
  }
  /**
   * Convert all attached sheets to a CSS string.
   */
  ;

  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        attached = _ref.attached,
        options = _objectWithoutPropertiesLoose(_ref, ["attached"]);

    var css = '';

    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];

      if (attached != null && sheet.attached !== attached) {
        continue;
      }

      if (css) css += '\n';
      css += sheet.toString(options);
    }

    return css;
  };

  _createClass(SheetsRegistry, [{
    key: "index",

    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */

var registry = new SheetsRegistry();

/* eslint-disable */

/**
 * Now that `globalThis` is available on most platforms
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility)
 * we check for `globalThis` first. `globalThis` is necessary for jss
 * to run in Agoric's secure version of JavaScript (SES). Under SES,
 * `globalThis` exists, but `window`, `self`, and `Function('return
 * this')()` are all undefined for security reasons.
 *
 * https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
 */
var globalThis$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' && window.Math === Math ? window : typeof self !== 'undefined' && self.Math === Math ? self : Function('return this')();

var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (globalThis$1[ns] == null) globalThis$1[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.

var moduleId = globalThis$1[ns]++;

/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */
var createGenerateId = function createGenerateId(options) {
  if (options === void 0) {
    options = {};
  }

  var ruleCounter = 0;
  return function (rule, sheet) {
    ruleCounter += 1;

    var jssId = '';
    var prefix = '';

    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix = sheet.options.classNamePrefix;
      }

      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }

    if (options.minify) {
      // Using "c" because a number can't be the first char in a class name.
      return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
    }

    return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
  };
};

/**
 * Cache the value from the first time a function is called.
 */
var memoize = function memoize(fn) {
  var value;
  return function () {
    if (!value) value = fn();
    return value;
  };
};

/**
 * Get a style property value.
 */
var getPropertyValue = function getPropertyValue(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }

    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
};

/**
 * Set a style property.
 */
var setProperty = function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = toCssValue(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    } // Support CSSTOM.


    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      cssRule.style.setProperty(prop, cssValue);
    }
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }

  return true;
};

/**
 * Remove a style property.
 */
var removeProperty = function removeProperty(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
  }
};

/**
 * Set the selector.
 */
var setSelector = function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText; // Return false if setter was not successful.
  // Currently works in chrome only.

  return cssRule.selectorText === selectorText;
};
/**
 * Gets the `head` element upon the first call and caches it.
 * We assume it can't be null.
 */


var getHead = memoize(function () {
  return document.querySelector('head');
});
/**
 * Find attached sheet with an index higher than the passed one.
 */

function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find attached sheet with the highest index.
 */


function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find a comment with "jss" inside.
 */


function findCommentNode(text) {
  var head = getHead();

  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];

    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }

  return null;
}

/**
 * Find a node before which we can insert the sheet.
 */
function findPrevNode(options) {
  var registry$1 = registry.registry;

  if (registry$1.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry$1, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    } // Otherwise insert after the last attached.


    sheet = findHighestSheet(registry$1, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  } // Try to find a comment placeholder if registry is empty.


  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);

    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    } // If user specifies an insertion point and it can't be found in the document -
  }

  return false;
}
/**
 * Insert style element into the DOM.
 */


function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);

  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  } // Works with iframes and any node types.


  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);
    return;
  }

  getHead().appendChild(style);
}
/**
 * Read jss nonce setting from the page if the user has set it.
 */


var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var _insertRule = function insertRule(container, rule, index) {
  try {
    if ('insertRule' in container) {
      var c = container;
      c.insertRule(rule, index);
    } // Keyframes rule.
    else if ('appendRule' in container) {
        var _c = container;

        _c.appendRule(rule);
      }
  } catch (err) {
    return false;
  }

  return container.cssRules[index];
};

var getValidRuleInsertionIndex = function getValidRuleInsertionIndex(container, index) {
  var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

  if (index === undefined || index > maxIndex) {
    // eslint-disable-next-line no-param-reassign
    return maxIndex;
  }

  return index;
};

var createStyle = function createStyle() {
  var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
  // insert rules after we insert the style tag.
  // It seems to kick-off the source order specificity algorithm.

  el.textContent = '\n';
  return el;
};

var DomRenderer =
/*#__PURE__*/
function () {
  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
  // Will be empty if link: true option is not set, because
  // it is only for use together with insertRule API.
  function DomRenderer(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.element = void 0;
    this.sheet = void 0;
    this.hasInsertedRules = false;
    this.cssRules = [];
    // There is no sheet when the renderer is used from a standalone StyleRule.
    if (sheet) registry.add(sheet);
    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || createStyle();
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }
  /**
   * Insert style element into render tree.
   */


  var _proto = DomRenderer.prototype;

  _proto.attach = function attach() {
    // In the case the element node is external and it is already in the DOM.
    if (this.element.parentNode || !this.sheet) return;
    insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
    // most browsers create a new CSSStyleSheet, except of all IEs.

    var deployed = Boolean(this.sheet && this.sheet.deployed);

    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  }
  /**
   * Remove style element from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.sheet) return;
    var parentNode = this.element.parentNode;
    if (parentNode) parentNode.removeChild(this.element); // In the most browsers, rules inserted using insertRule() API will be lost when style element is removed.
    // Though IE will keep them and we need a consistent behavior.

    if (this.sheet.options.link) {
      this.cssRules = [];
      this.element.textContent = '\n';
    }
  }
  /**
   * Inject CSS string into element.
   */
  ;

  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet) return;

    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }

    this.element.textContent = "\n" + sheet.toString() + "\n";
  }
  /**
   * Insert RuleList into an element.
   */
  ;

  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  }
  /**
   * Insert a rule into element.
   */
  ;

  _proto.insertRule = function insertRule(rule, index, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }

    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;

      if (rule.type === 'conditional' || rule.type === 'keyframes') {
        var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index); // We need to render the container without children first.


        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), _insertionIndex);

        if (latestNativeParent === false) {
          return false;
        }

        this.refCssRule(rule, _insertionIndex, latestNativeParent);
      }

      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    }

    var ruleStr = rule.toString();
    if (!ruleStr) return false;
    var insertionIndex = getValidRuleInsertionIndex(nativeParent, index);

    var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);

    if (nativeRule === false) {
      return false;
    }

    this.hasInsertedRules = true;
    this.refCssRule(rule, insertionIndex, nativeRule);
    return nativeRule;
  };

  _proto.refCssRule = function refCssRule(rule, index, cssRule) {
    rule.renderable = cssRule; // We only want to reference the top level rules, deleteRule API doesn't support removing nested rules
    // like rules inside media queries or keyframes

    if (rule.options.parent instanceof StyleSheet) {
      this.cssRules[index] = cssRule;
    }
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    sheet.deleteRule(index);
    this.cssRules.splice(index, 1);
    return true;
  }
  /**
   * Get index of a CSS Rule.
   */
  ;

  _proto.indexOf = function indexOf(cssRule) {
    return this.cssRules.indexOf(cssRule);
  }
  /**
   * Generate a new CSS rule and replace the existing one.
   *
   * Only used for some old browsers because they can't set a selector.
   */
  ;

  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    this.element.sheet.deleteRule(index);
    this.cssRules.splice(index, 1);
    return this.insertRule(rule, index);
  }
  /**
   * Get all rules elements.
   */
  ;

  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };

  return DomRenderer;
}();

var instanceCounter = 0;

var Jss =
/*#__PURE__*/
function () {
  function Jss(options) {
    this.id = instanceCounter++;
    this.version = "10.6.0";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId: createGenerateId,
      Renderer: isBrowser ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });

    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: 'internal'
      });
    }

    this.setup(options);
  }
  /**
   * Prepares various options, applies plugins.
   * Should not be used twice on the same instance, because there is no plugins
   * deduplication logic.
   */


  var _proto = Jss.prototype;

  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }

    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }

    if (options.id) {
      this.options.id = _extends({}, this.options.id, options.id);
    }

    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }

    if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

    if ('Renderer' in options) {
      this.options.Renderer = options.Renderer;
    } // eslint-disable-next-line prefer-spread


    if (options.plugins) this.use.apply(this, options.plugins);
    return this;
  }
  /**
   * Create a Style Sheet.
   */
  ;

  _proto.createStyleSheet = function createStyleSheet(styles, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        index = _options.index;

    if (typeof index !== 'number') {
      index = registry.index === 0 ? 0 : registry.index + 1;
    }

    var sheet = new StyleSheet(styles, _extends({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  }
  /**
   * Detach the Style Sheet and remove it from the registry.
   */
  ;

  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    registry.remove(sheet);
    return this;
  }
  /**
   * Create a rule without a Style Sheet.
   * [Deprecated] will be removed in the next major version.
   */
  ;

  _proto.createRule = function createRule$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }

    if (options === void 0) {
      options = {};
    }

    // Enable rule without name for inline styles.
    if (typeof name === 'object') {
      // $FlowFixMe[incompatible-call]
      return this.createRule(undefined, name, style);
    } // $FlowFixMe[incompatible-type]


    var ruleOptions = _extends({}, options, {
      name: name,
      jss: this,
      Renderer: this.options.Renderer
    });

    if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes) ruleOptions.classes = {};
    if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

    var rule = createRule(name, style, ruleOptions);

    if (rule) this.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Register plugin. Passed function will be invoked with a rule instance.
   */
  ;

  _proto.use = function use() {
    var _this = this;

    for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins[_key] = arguments[_key];
    }

    plugins.forEach(function (plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };

  return Jss;
}();

/**
 * Extracts a styles object with only props that contain function values.
 */
function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value;

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);

      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}

/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */

/**
 * Export a constant indicating if this browser has CSSTOM support.
 * https://developers.google.com/web/updates/2018/03/cssom
 */
var hasCSSTOMSupport = typeof CSS === 'object' && CSS != null && 'number' in CSS;
/**
 * Creates a new instance of Jss.
 */

var create = function create(options) {
  return new Jss(options);
};
/**
 * A global Jss instance.
 */

var jss = create();

var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;

var functionPlugin = function functionPlugin() {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (typeof decl !== 'function') return null;
      var rule = createRule(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle(style, rule) {
      // We need to extract function values from the declaration, so that we can keep core unaware of them.
      // We need to do that only once.
      // We don't need to extract functions on each style update, since this can happen only once.
      // We don't support function values inside of function rules.
      if (fnValuesNs in rule || fnRuleNs in rule) return style;
      var fnValues = {};

      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== 'function') continue;
        delete style[prop];
        fnValues[prop] = value;
      } // $FlowFixMe[prop-missing]


      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule; // $FlowFixMe[prop-missing]

      var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
      // will be returned from that function.

      if (fnRule) {
        // Empty object will remove all currently defined props
        // in case function rule returns a falsy value.
        styleRule.style = fnRule(data) || {};
      } // $FlowFixMe[prop-missing]


      var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

      if (fnValues) {
        for (var _prop in fnValues) {
          styleRule.prop(_prop, fnValues[_prop](data), options);
        }
      }
    }
  };
};

var at = '@global';
var atPrefix = '@global ';

var GlobalContainerRule =
/*#__PURE__*/
function () {
  function GlobalContainerRule(key, styles, options) {
    this.type = 'global';
    this.at = at;
    this.rules = void 0;
    this.options = void 0;
    this.key = void 0;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = GlobalContainerRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (rule) this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString() {
    return this.rules.toString();
  };

  return GlobalContainerRule;
}();

var GlobalPrefixedRule =
/*#__PURE__*/
function () {
  function GlobalPrefixedRule(key, style, options) {
    this.type = 'global';
    this.at = at;
    this.options = void 0;
    this.rule = void 0;
    this.isProcessed = false;
    this.key = void 0;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, _extends({}, options, {
      parent: this
    }));
  }

  var _proto2 = GlobalPrefixedRule.prototype;

  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : '';
  };

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';

  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }

  return scoped;
}

function handleNestedGlobalContainerRule(rule, sheet) {
  var options = rule.options,
      style = rule.style;
  var rules = style ? style[at] : null;
  if (!rules) return;

  for (var name in rules) {
    sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[at];
}

function handlePrefixedGlobalRule(rule, sheet) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    sheet.addRule(selector, style[prop], _extends({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */


function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (!name) return null;

    if (name === at) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;

    if (parent) {
      if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
        options.scoped = false;
      }
    }

    if (options.scoped === false) {
      options.selector = name;
    }

    return null;
  }

  function onProcessRule(rule, sheet) {
    if (rule.type !== 'style' || !sheet) return;
    handleNestedGlobalContainerRule(rule, sheet);
    handlePrefixedGlobalRule(rule, sheet);
  }

  return {
    onCreateRule: onCreateRule,
    onProcessRule: onProcessRule
  };
}

var separatorRegExp$1 = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp$1 = /\$([\w-]+)/g;
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */

function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container, sheet) {
    return function (match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);

      if (rule) {
        rule = rule;
        return rule.selector;
      }
      return key;
    };
  }

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp$1);
    var nestedSelectors = nestedProp.split(separatorRegExp$1);
    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

        result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, prevOptions) {
    // Options has been already created, now we only increase index.
    if (prevOptions) return _extends({}, prevOptions, {
      index: prevOptions.index + 1 // $FlowFixMe[prop-missing]

    });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    var options = _extends({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

    });

    delete options.name;
    return options;
  }

  function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style') return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef;

    for (var prop in style) {
      var isNested = prop.indexOf('&') !== -1;
      var isNestedConditional = prop[0] === '@';
      if (!isNested && !isNestedConditional) continue;
      options = getOptions(styleRule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.

        if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

        selector = selector.replace(refRegExp$1, replaceRef);
        container.addRule(selector, style[prop], _extends({}, options, {
          selector: selector
        }));
      } else if (isNestedConditional) {
        // Place conditional right after the parent rule to ensure right ordering.
        container.addRule(prop, {}, options) // Flow expects more options but they aren't required
        // And flow doesn't know this will always be a StyleRule which has the addRule method
        // $FlowFixMe[incompatible-use]
        // $FlowFixMe[prop-missing]
        .addRule(styleRule.key, style[prop], {
          selector: styleRule.selector
        });
      }

      delete style[prop];
    }

    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower);
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/**
 * Convert camel cased property names to dash separated.
 *
 * @param {Object} style
 * @return {Object}
 */

function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    var key = prop.indexOf('--') === 0 ? prop : hyphenateStyleName(prop);
    converted[key] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}
/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 */


function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }

      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    if (prop.indexOf('--') === 0) {
      return value;
    }

    var hyphenatedProp = hyphenateStyleName(prop); // There was no camel case in place

    if (prop === hyphenatedProp) return value;
    rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

var px = hasCSSTOMSupport && CSS ? CSS.px : 'px';
var ms = hasCSSTOMSupport && CSS ? CSS.ms : 'ms';
var percent = hasCSSTOMSupport && CSS ? CSS.percent : '%';
/**
 * Generated jss-plugin-default-unit CSS property units
 *
 * @type object
 */

var defaultUnits = {
  // Animation properties
  'animation-delay': ms,
  'animation-duration': ms,
  // Background properties
  'background-position': px,
  'background-position-x': px,
  'background-position-y': px,
  'background-size': px,
  // Border Properties
  border: px,
  'border-bottom': px,
  'border-bottom-left-radius': px,
  'border-bottom-right-radius': px,
  'border-bottom-width': px,
  'border-left': px,
  'border-left-width': px,
  'border-radius': px,
  'border-right': px,
  'border-right-width': px,
  'border-top': px,
  'border-top-left-radius': px,
  'border-top-right-radius': px,
  'border-top-width': px,
  'border-width': px,
  'border-block': px,
  'border-block-end': px,
  'border-block-end-width': px,
  'border-block-start': px,
  'border-block-start-width': px,
  'border-block-width': px,
  'border-inline': px,
  'border-inline-end': px,
  'border-inline-end-width': px,
  'border-inline-start': px,
  'border-inline-start-width': px,
  'border-inline-width': px,
  'border-start-start-radius': px,
  'border-start-end-radius': px,
  'border-end-start-radius': px,
  'border-end-end-radius': px,
  // Margin properties
  margin: px,
  'margin-bottom': px,
  'margin-left': px,
  'margin-right': px,
  'margin-top': px,
  'margin-block': px,
  'margin-block-end': px,
  'margin-block-start': px,
  'margin-inline': px,
  'margin-inline-end': px,
  'margin-inline-start': px,
  // Padding properties
  padding: px,
  'padding-bottom': px,
  'padding-left': px,
  'padding-right': px,
  'padding-top': px,
  'padding-block': px,
  'padding-block-end': px,
  'padding-block-start': px,
  'padding-inline': px,
  'padding-inline-end': px,
  'padding-inline-start': px,
  // Mask properties
  'mask-position-x': px,
  'mask-position-y': px,
  'mask-size': px,
  // Width and height properties
  height: px,
  width: px,
  'min-height': px,
  'max-height': px,
  'min-width': px,
  'max-width': px,
  // Position properties
  bottom: px,
  left: px,
  top: px,
  right: px,
  inset: px,
  'inset-block': px,
  'inset-block-end': px,
  'inset-block-start': px,
  'inset-inline': px,
  'inset-inline-end': px,
  'inset-inline-start': px,
  // Shadow properties
  'box-shadow': px,
  'text-shadow': px,
  // Column properties
  'column-gap': px,
  'column-rule': px,
  'column-rule-width': px,
  'column-width': px,
  // Font and text properties
  'font-size': px,
  'font-size-delta': px,
  'letter-spacing': px,
  'text-decoration-thickness': px,
  'text-indent': px,
  'text-stroke': px,
  'text-stroke-width': px,
  'word-spacing': px,
  // Motion properties
  motion: px,
  'motion-offset': px,
  // Outline properties
  outline: px,
  'outline-offset': px,
  'outline-width': px,
  // Perspective properties
  perspective: px,
  'perspective-origin-x': percent,
  'perspective-origin-y': percent,
  // Transform properties
  'transform-origin': percent,
  'transform-origin-x': percent,
  'transform-origin-y': percent,
  'transform-origin-z': percent,
  // Transition properties
  'transition-delay': ms,
  'transition-duration': ms,
  // Alignment properties
  'vertical-align': px,
  'flex-basis': px,
  // Some random properties
  'shape-margin': px,
  size: px,
  gap: px,
  // Grid properties
  grid: px,
  'grid-gap': px,
  'row-gap': px,
  'grid-row-gap': px,
  'grid-column-gap': px,
  'grid-template-rows': px,
  'grid-template-columns': px,
  'grid-auto-rows': px,
  'grid-auto-columns': px,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  'box-shadow-x': px,
  'box-shadow-y': px,
  'box-shadow-blur': px,
  'box-shadow-spread': px,
  'font-line-height': px,
  'text-shadow-x': px,
  'text-shadow-y': px,
  'text-shadow-blur': px
};

/**
 * Clones the object and adds a camel cased property version.
 */
function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;

  var replace = function replace(str) {
    return str[1].toUpperCase();
  };

  var newObj = {};

  for (var _key in obj) {
    newObj[_key] = obj[_key];
    newObj[_key.replace(regExp, replace)] = obj[_key];
  }

  return newObj;
}

var units = addCamelCasedVersion(defaultUnits);
/**
 * Recursive deep style passing function
 */

function iterate(prop, value, options) {
  if (value == null) return value;

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === 'object') {
    if (prop === 'fallbacks') {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    } // eslint-disable-next-line no-restricted-globals

  } else if (typeof value === 'number' && isNaN(value) === false) {
    var unit = options[prop] || units[prop]; // Add the unit if available, except for the special case of 0px.

    if (unit && !(value === 0 && unit === px)) {
      return typeof unit === 'function' ? unit(value).toString() : "" + value + unit;
    }

    return value.toString();
  }

  return value;
}
/**
 * Add unit to numeric values.
 */


function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

// Export javascript style and css style vendor prefixes.
var js = '';
var css = '';
var vendor = '';
var browser = '';
var isTouch = isBrowser && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

if (isBrowser) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };

  var _document$createEleme = document.createElement('p'),
      style = _document$createEleme.style;

  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  } // Correctly detect the Edge browser.


  if (js === 'Webkit' && 'msHyphens' in style) {
    js = 'ms';
    css = jsCssMap.ms;
    browser = 'edge';
  } // Correctly detect the Safari browser.


  if (js === 'Webkit' && '-apple-trailing-word' in style) {
    vendor = 'apple';
  }
}
/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String, vendor: String, browser: String}}
 * @api public
 */


var prefix = {
  js: js,
  css: css,
  vendor: vendor,
  browser: browser,
  isTouch: isTouch
};

/**
 * Test if a keyframe at-rule should be prefixed or not
 *
 * @param {String} vendor prefix string for the current browser.
 * @return {String}
 * @api public
 */

function supportedKeyframes(key) {
  // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
  if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
  // https://caniuse.com/#search=keyframes

  if (prefix.js === 'ms') return key;
  return "@" + prefix.css + "keyframes" + key.substr(10);
}

// https://caniuse.com/#search=appearance

var appearence = {
  noPrefill: ['appearance'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'appearance') return false;
    if (prefix.js === 'ms') return "-webkit-" + prop;
    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=color-adjust

var colorAdjust = {
  noPrefill: ['color-adjust'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'color-adjust') return false;
    if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
    return prop;
  }
};

var regExp = /[-\s]+(.)?/g;
/**
 * Replaces the letter with the capital letter
 *
 * @param {String} match
 * @param {String} c
 * @return {String}
 * @api private
 */

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}
/**
 * Convert dash separated strings to camel-cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */


function camelize(str) {
  return str.replace(regExp, toUpper);
}

/**
 * Convert dash separated strings to pascal cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function pascalize(str) {
  return camelize("-" + str);
}

// but we can use a longhand property instead.
// https://caniuse.com/#search=mask

var mask = {
  noPrefill: ['mask'],
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^mask/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var longhand = 'mask-image';

      if (camelize(longhand) in style) {
        return prop;
      }

      if (prefix.js + pascalize(longhand) in style) {
        return prefix.css + prop;
      }
    }

    return prop;
  }
};

// https://caniuse.com/#search=text-orientation

var textOrientation = {
  noPrefill: ['text-orientation'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'text-orientation') return false;

    if (prefix.vendor === 'apple' && !prefix.isTouch) {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=transform

var transform = {
  noPrefill: ['transform'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transform') return false;

    if (options.transform) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=transition

var transition = {
  noPrefill: ['transition'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transition') return false;

    if (options.transition) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=writing-mode

var writingMode = {
  noPrefill: ['writing-mode'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'writing-mode') return false;

    if (prefix.js === 'Webkit' || prefix.js === 'ms' && prefix.browser !== 'edge') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=user-select

var userSelect = {
  noPrefill: ['user-select'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'user-select') return false;

    if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=multicolumn
// https://github.com/postcss/autoprefixer/issues/491
// https://github.com/postcss/autoprefixer/issues/177

var breakPropsOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^break-/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var jsProp = "WebkitColumn" + pascalize(prop);
      return jsProp in style ? prefix.css + "column-" + prop : false;
    }

    if (prefix.js === 'Moz') {
      var _jsProp = "page" + pascalize(prop);

      return _jsProp in style ? "page-" + prop : false;
    }

    return false;
  }
};

// See https://github.com/postcss/autoprefixer/issues/324.

var inlineLogicalOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^(border|margin|padding)-inline/.test(prop)) return false;
    if (prefix.js === 'Moz') return prop;
    var newProp = prop.replace('-inline', '');
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

// Camelization is required because we can't test using.
// CSS syntax for e.g. in FF.

var unprefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    return camelize(prop) in style ? prop : false;
  }
};

var prefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

    if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

    if (prop[0] === '-' && prop[1] === '-') return prop;
    if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

    if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
    return false;
  }
};

// https://caniuse.com/#search=scroll-snap

var scrollSnap = {
  supportedProperty: function supportedProperty(prop) {
    if (prop.substring(0, 11) !== 'scroll-snap') return false;

    if (prefix.js === 'ms') {
      return "" + prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=overscroll-behavior

var overscrollBehavior = {
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'overscroll-behavior') return false;

    if (prefix.js === 'ms') {
      return prefix.css + "scroll-chaining";
    }

    return prop;
  }
};

var propMap = {
  'flex-grow': 'flex-positive',
  'flex-shrink': 'flex-negative',
  'flex-basis': 'flex-preferred-size',
  'justify-content': 'flex-pack',
  order: 'flex-order',
  'align-items': 'flex-align',
  'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

}; // Support old flex spec from 2012.

var flex2012 = {
  supportedProperty: function supportedProperty(prop, style) {
    var newProp = propMap[prop];
    if (!newProp) return false;
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

var propMap$1 = {
  flex: 'box-flex',
  'flex-grow': 'box-flex',
  'flex-direction': ['box-orient', 'box-direction'],
  order: 'box-ordinal-group',
  'align-items': 'box-align',
  'flex-flow': ['box-orient', 'box-direction'],
  'justify-content': 'box-pack'
};
var propKeys = Object.keys(propMap$1);

var prefixCss = function prefixCss(p) {
  return prefix.css + p;
}; // Support old flex spec from 2009.


var flex2009 = {
  supportedProperty: function supportedProperty(prop, style, _ref) {
    var multiple = _ref.multiple;

    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap$1[prop];

      if (!Array.isArray(newProp)) {
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }

      if (!multiple) return false;

      for (var i = 0; i < newProp.length; i++) {
        if (!(prefix.js + pascalize(newProp[0]) in style)) {
          return false;
        }
      }

      return newProp.map(prefixCss);
    }

    return false;
  }
};

// plugins = [
//   ...plugins,
//    breakPropsOld,
//    inlineLogicalOld,
//    unprefixed,
//    prefixed,
//    scrollSnap,
//    flex2012,
//    flex2009
// ]
// Plugins without 'noPrefill' value, going last.
// 'flex-*' plugins should be at the bottom.
// 'flex2009' going after 'flex2012'.
// 'prefixed' going after 'unprefixed'

var plugins$1 = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
var propertyDetectors = plugins$1.filter(function (p) {
  return p.supportedProperty;
}).map(function (p) {
  return p.supportedProperty;
});
var noPrefill = plugins$1.filter(function (p) {
  return p.noPrefill;
}).reduce(function (a, p) {
  a.push.apply(a, _toConsumableArray(p.noPrefill));
  return a;
}, []);

var el;
var cache$1 = {};

if (isBrowser) {
  el = document.createElement('p'); // We test every property on vendor prefix requirement.
  // Once tested, result is cached. It gives us up to 70% perf boost.
  // http://jsperf.com/element-style-object-access-vs-plain-object
  //
  // Prefill cache with known css properties to reduce amount of
  // properties we need to feature test at runtime.
  // http://davidwalsh.name/vendor-prefix

  var computed = window.getComputedStyle(document.documentElement, '');

  for (var key$1 in computed) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(key$1)) cache$1[computed[key$1]] = computed[key$1];
  } // Properties that cannot be correctly detected using the
  // cache prefill method.


  noPrefill.forEach(function (x) {
    return delete cache$1[x];
  });
}
/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @param {Object} [options]
 * @return {String|Boolean}
 * @api public
 */


function supportedProperty(prop, options) {
  if (options === void 0) {
    options = {};
  }

  // For server-side rendering.
  if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

  if ( cache$1[prop] != null) {
    return cache$1[prop];
  } // Check if 'transition' or 'transform' natively supported in browser.


  if (prop === 'transition' || prop === 'transform') {
    options[prop] = prop in el.style;
  } // Find a plugin for current prefix property.


  for (var i = 0; i < propertyDetectors.length; i++) {
    cache$1[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

    if (cache$1[prop]) break;
  } // Reset styles for current property.
  // Firefox can even throw an error for invalid properties, e.g., "0".


  try {
    el.style[prop] = '';
  } catch (err) {
    return false;
  }

  return cache$1[prop];
}

var cache$1$1 = {};
var transitionProperties = {
  transition: 1,
  'transition-property': 1,
  '-webkit-transition': 1,
  '-webkit-transition-property': 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el$1;
/**
 * Returns prefixed value transition/transform if needed.
 *
 * @param {String} match
 * @param {String} p1
 * @param {String} p2
 * @return {String}
 * @api private
 */

function prefixTransitionCallback(match, p1, p2) {
  if (p1 === 'var') return 'var';
  if (p1 === 'all') return 'all';
  if (p2 === 'all') return ', all';
  var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
  if (!prefixedValue) return p1 || p2;
  return prefixedValue;
}

if (isBrowser) el$1 = document.createElement('p');
/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */

function supportedValue(property, value) {
  // For server-side rendering.
  var prefixedValue = value;
  if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  // eslint-disable-next-line no-restricted-globals

  if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
    return prefixedValue;
  } // Create cache key for current value.


  var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

  if ( cache$1$1[cacheKey] != null) {
    return cache$1$1[cacheKey];
  } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


  try {
    // Test value as it is.
    el$1.style[property] = prefixedValue;
  } catch (err) {
    // Return false if value not supported.
    cache$1$1[cacheKey] = false;
    return false;
  } // If 'transition' or 'transition-property' property.


  if (transitionProperties[property]) {
    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el$1.style[property] === '') {
    // Value with a vendor prefix.
    prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

    if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

    el$1.style[property] = prefixedValue; // Return false if value not supported.

    if (el$1.style[property] === '') {
      cache$1$1[cacheKey] = false;
      return false;
    }
  } // Reset styles for current property.


  el$1.style[property] = ''; // Write current value to cache.

  cache$1$1[cacheKey] = prefixedValue;
  return cache$1$1[cacheKey];
}

/**
 * Add vendor prefix to a property name when needed.
 *
 * @api public
 */

function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      var atRule = rule;
      atRule.at = supportedKeyframes(atRule.at);
    }
  }

  function prefixStyle(style) {
    for (var prop in style) {
      var value = style[prop];

      if (prop === 'fallbacks' && Array.isArray(value)) {
        style[prop] = value.map(prefixStyle);
        continue;
      }

      var changeProp = false;
      var supportedProp = supportedProperty(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;
      var changeValue = false;
      var supportedValue$1 = supportedValue(supportedProp, toCssValue(value));
      if (supportedValue$1 && supportedValue$1 !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue$1 || value;
      }
    }

    return style;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    return prefixStyle(style);
  }

  function onChangeValue(value, prop) {
    return supportedValue(prop, toCssValue(value)) || value;
  }

  return {
    onProcessRule: onProcessRule,
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/**
 * Sort props by length.
 */
function jssPropsSort() {
  var sort = function sort(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }

    return prop0.length - prop1.length;
  };

  return {
    onProcessStyle: function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      var newStyle = {};
      var props = Object.keys(style).sort(sort);

      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]];
      }

      return newStyle;
    }
  };
}

function jssPreset() {
  return {
    plugins: [functionPlugin(), jssGlobal(), jssNested(), camelCase(), defaultUnit(), // Disable the vendor prefixer server-side, it does nothing.
    // This way, we can get a performance boost.
    // In the documentation, we are using `autoprefixer` to solve this problem.
    typeof window === 'undefined' ? null : jssVendorPrefixer(), jssPropsSort()]
  };
}

function mergeClasses() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var baseClasses = options.baseClasses,
      newClasses = options.newClasses,
      Component = options.Component;

  if (!newClasses) {
    return baseClasses;
  }

  var nextClasses = _extends({}, baseClasses);

  Object.keys(newClasses).forEach(function (key) {

    if (newClasses[key]) {
      nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
    }
  });
  return nextClasses;
}

// Used https://github.com/thinkloop/multi-key-cache as inspiration
var multiKeyStore = {
  set: function set(cache, key1, key2, value) {
    var subCache = cache.get(key1);

    if (!subCache) {
      subCache = new Map();
      cache.set(key1, subCache);
    }

    subCache.set(key2, value);
  },
  get: function get(cache, key1, key2) {
    var subCache = cache.get(key1);
    return subCache ? subCache.get(key2) : undefined;
  },
  delete: function _delete(cache, key1, key2) {
    var subCache = cache.get(key1);
    subCache.delete(key2);
  }
};

var ThemeContext = react.createContext(null);

function useTheme() {
  var theme = react.useContext(ThemeContext);

  return theme;
}

var jss$1 = create(jssPreset()); // Use a singleton or the provided one by the context.
//
// The counter-based approach doesn't tolerate any mistake.
// It's much safer to use the same counter everywhere.

var generateClassName = createGenerateClassName(); // Exported for test purposes

var sheetsManager = new Map();
var defaultOptions = {
  disableGeneration: false,
  generateClassName: generateClassName,
  jss: jss$1,
  sheetsCache: null,
  sheetsManager: sheetsManager,
  sheetsRegistry: null
};
var StylesContext = react.createContext(defaultOptions);

/* eslint-disable import/prefer-default-export */
// Global index counter to preserve source order.
// We create the style sheet during the creation of the component,
// children are handled after the parents, so the order of style elements would be parent->child.
// It is a problem though when a parent passes a className
// which needs to override any child's styles.
// StyleSheet of the child has a higher specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.
var indexCounter = -1e9;
function increment() {
  indexCounter += 1;

  return indexCounter;
}

// We use the same empty object to ref count the styles that don't need a theme object.
var noopTheme = {};

function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === 'function';

  return {
    create: function create(theme, name) {
      var styles;

      try {
        styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {

        throw err;
      }

      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles;
      }

      var overrides = theme.overrides[name];

      var stylesWithOverrides = _extends({}, styles);

      Object.keys(overrides).forEach(function (key) {

        stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key], overrides[key]);
      });
      return stylesWithOverrides;
    },
    options: {}
  };
}

function getClasses(_ref, classes, Component) {
  var state = _ref.state,
      stylesOptions = _ref.stylesOptions;

  if (stylesOptions.disableGeneration) {
    return classes || {};
  }

  if (!state.cacheClasses) {
    state.cacheClasses = {
      // Cache for the finalized classes value.
      value: null,
      // Cache for the last used classes prop pointer.
      lastProp: null,
      // Cache for the last used rendered classes pointer.
      lastJSS: {}
    };
  } // Tracks if either the rendered classes or classes prop has changed,
  // requiring the generation of a new finalized classes object.


  var generate = false;

  if (state.classes !== state.cacheClasses.lastJSS) {
    state.cacheClasses.lastJSS = state.classes;
    generate = true;
  }

  if (classes !== state.cacheClasses.lastProp) {
    state.cacheClasses.lastProp = classes;
    generate = true;
  }

  if (generate) {
    state.cacheClasses.value = mergeClasses({
      baseClasses: state.cacheClasses.lastJSS,
      newClasses: classes,
      Component: Component
    });
  }

  return state.cacheClasses.value;
}

function attach(_ref2, props) {
  var state = _ref2.state,
      theme = _ref2.theme,
      stylesOptions = _ref2.stylesOptions,
      stylesCreator = _ref2.stylesCreator,
      name = _ref2.name;

  if (stylesOptions.disableGeneration) {
    return;
  }

  var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);

  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null
    };
    multiKeyStore.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
  }

  var options = _extends({}, stylesCreator.options, stylesOptions, {
    theme: theme,
    flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
  });

  options.generateId = options.serverGenerateClassName || options.generateClassName;
  var sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    var staticSheet;

    if (stylesOptions.sheetsCache) {
      staticSheet = multiKeyStore.get(stylesOptions.sheetsCache, stylesCreator, theme);
    }

    var styles = stylesCreator.create(theme, name);

    if (!staticSheet) {
      staticSheet = stylesOptions.jss.createStyleSheet(styles, _extends({
        link: false
      }, options));
      staticSheet.attach();

      if (stylesOptions.sheetsCache) {
        multiKeyStore.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
      }
    }

    if (sheetsRegistry) {
      sheetsRegistry.add(staticSheet);
    }

    sheetManager.staticSheet = staticSheet;
    sheetManager.dynamicStyles = getDynamicStyles(styles);
  }

  if (sheetManager.dynamicStyles) {
    var dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, _extends({
      link: true
    }, options));
    dynamicSheet.update(props);
    dynamicSheet.attach();
    state.dynamicSheet = dynamicSheet;
    state.classes = mergeClasses({
      baseClasses: sheetManager.staticSheet.classes,
      newClasses: dynamicSheet.classes
    });

    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }
  } else {
    state.classes = sheetManager.staticSheet.classes;
  }

  sheetManager.refs += 1;
}

function update(_ref3, props) {
  var state = _ref3.state;

  if (state.dynamicSheet) {
    state.dynamicSheet.update(props);
  }
}

function detach(_ref4) {
  var state = _ref4.state,
      theme = _ref4.theme,
      stylesOptions = _ref4.stylesOptions,
      stylesCreator = _ref4.stylesCreator;

  if (stylesOptions.disableGeneration) {
    return;
  }

  var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);
  sheetManager.refs -= 1;
  var sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    multiKeyStore.delete(stylesOptions.sheetsManager, stylesCreator, theme);
    stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(sheetManager.staticSheet);
    }
  }

  if (state.dynamicSheet) {
    stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(state.dynamicSheet);
    }
  }
}

function useSynchronousEffect(func, values) {
  var key = react.useRef([]);
  var output; // Store "generation" key. Just returns a new object every time

  var currentKey = react.useMemo(function () {
    return {};
  }, values); // eslint-disable-line react-hooks/exhaustive-deps
  // "the first render", or "memo dropped the value"

  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }

  react.useEffect(function () {
    return function () {
      if (output) {
        output();
      }
    };
  }, [currentKey] // eslint-disable-line react-hooks/exhaustive-deps
  );
}

function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var name = options.name,
      classNamePrefixOption = options.classNamePrefix,
      Component = options.Component,
      _options$defaultTheme = options.defaultTheme,
      defaultTheme = _options$defaultTheme === void 0 ? noopTheme : _options$defaultTheme,
      stylesOptions2 = _objectWithoutProperties(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);

  var stylesCreator = getStylesCreator(stylesOrCreator);
  var classNamePrefix = name || classNamePrefixOption || 'makeStyles';
  stylesCreator.options = {
    index: increment(),
    name: name,
    meta: classNamePrefix,
    classNamePrefix: classNamePrefix
  };

  var useStyles = function useStyles() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var theme = useTheme() || defaultTheme;

    var stylesOptions = _extends({}, react.useContext(StylesContext), stylesOptions2);

    var instance = react.useRef();
    var shouldUpdate = react.useRef();
    useSynchronousEffect(function () {
      var current = {
        name: name,
        state: {},
        stylesCreator: stylesCreator,
        stylesOptions: stylesOptions,
        theme: theme
      };
      attach(current, props);
      shouldUpdate.current = false;
      instance.current = current;
      return function () {
        detach(current);
      };
    }, [theme, stylesCreator]);
    react.useEffect(function () {
      if (shouldUpdate.current) {
        update(instance.current, props);
      }

      shouldUpdate.current = true;
    });
    var classes = getClasses(instance.current, props.classes, Component);

    return classes;
  };

  return useStyles;
}

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function clsx () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_production_min;
}
});

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.

var withStyles = function withStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (Component) {
    var defaultTheme = options.defaultTheme,
        _options$withTheme = options.withTheme,
        withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
        name = options.name,
        stylesOptions = _objectWithoutProperties(options, ["defaultTheme", "withTheme", "name"]);

    var classNamePrefix = name;

    var useStyles = makeStyles(stylesOrCreator, _extends({
      defaultTheme: defaultTheme,
      Component: Component,
      name: name || Component.displayName,
      classNamePrefix: classNamePrefix
    }, stylesOptions));
    var WithStyles = /*#__PURE__*/react.forwardRef(function WithStyles(props, ref) {
      var classesProp = props.classes,
          innerRef = props.innerRef,
          other = _objectWithoutProperties(props, ["classes", "innerRef"]); // The wrapper receives only user supplied props, which could be a subset of
      // the actual props Component might receive due to merging with defaultProps.
      // So copying it here would give us the same result in the wrapper as well.


      var classes = useStyles(_extends({}, Component.defaultProps, props));
      var theme;
      var more = other;

      if (typeof name === 'string' || withTheme) {
        // name and withTheme are invariant in the outer scope
        // eslint-disable-next-line react-hooks/rules-of-hooks
        theme = useTheme() || defaultTheme;

        if (name) {
          more = getThemeProps({
            theme: theme,
            name: name,
            props: other
          });
        } // Provide the theme to the wrapped component.
        // So we don't have to use the `withTheme()` Higher-order Component.


        if (withTheme && !more.theme) {
          more.theme = theme;
        }
      }

      return /*#__PURE__*/react.createElement(Component, _extends({
        ref: innerRef || ref,
        classes: classes
      }, more));
    });

    hoistNonReactStatics_cjs(WithStyles, Component);

    return WithStyles;
  };
};

var defaultTheme = createMuiTheme();

function withStyles$1(stylesOrCreator, options) {
  return withStyles(stylesOrCreator, _extends({
    defaultTheme: defaultTheme
  }, options));
}

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word a the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( formatMuiErrorMessage(7));
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: 'currentColor',
      flexShrink: 0,
      fontSize: theme.typography.pxToRem(24),
      transition: theme.transitions.create('fill', {
        duration: theme.transitions.duration.shorter
      })
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="action"`. */
    colorAction: {
      color: theme.palette.action.active
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },

    /* Styles applied to the root element if `color="disabled"`. */
    colorDisabled: {
      color: theme.palette.action.disabled
    },

    /* Styles applied to the root element if `fontSize="inherit"`. */
    fontSizeInherit: {
      fontSize: 'inherit'
    },

    /* Styles applied to the root element if `fontSize="small"`. */
    fontSizeSmall: {
      fontSize: theme.typography.pxToRem(20)
    },

    /* Styles applied to the root element if `fontSize="large"`. */
    fontSizeLarge: {
      fontSize: theme.typography.pxToRem(35)
    }
  };
};
var SvgIcon = /*#__PURE__*/react.forwardRef(function SvgIcon(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'inherit' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'svg' : _props$component,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? 'default' : _props$fontSize,
      htmlColor = props.htmlColor,
      titleAccess = props.titleAccess,
      _props$viewBox = props.viewBox,
      viewBox = _props$viewBox === void 0 ? '0 0 24 24' : _props$viewBox,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"]);

  return /*#__PURE__*/react.createElement(Component, _extends({
    className: clsx(classes.root, className, color !== 'inherit' && classes["color".concat(capitalize(color))], fontSize !== 'default' && classes["fontSize".concat(capitalize(fontSize))]),
    focusable: "false",
    viewBox: viewBox,
    color: htmlColor,
    "aria-hidden": titleAccess ? undefined : true,
    role: titleAccess ? 'img' : undefined,
    ref: ref
  }, other), children, titleAccess ? /*#__PURE__*/react.createElement("title", null, titleAccess) : null);
});
SvgIcon.muiName = 'SvgIcon';
var SvgIcon$1 = withStyles$1(styles, {
  name: 'MuiSvgIcon'
})(SvgIcon);

/**
 * Private module reserved for @material-ui/x packages.
 */

function createSvgIcon(path, displayName) {
  var Component = function Component(props, ref) {
    return /*#__PURE__*/react.createElement(SvgIcon$1, _extends({
      ref: ref
    }, props), path);
  };

  Component.muiName = SvgIcon$1.muiName;
  return /*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(Component));
}

export { createSvgIcon as A, _defineProperty as B, _typeof as C, mergeClasses as D, lighten as E, darken as F, _unsupportedIterableToArray as _, grey as a, blue as b, common as c, defaultTheme as d, _iterableToArray as e, _inheritsLoose as f, green as g, _objectWithoutPropertiesLoose as h, indigo as i, _assertThisInitialized as j, _extends as k, _objectWithoutProperties as l, clsx as m, duration as n, orange as o, pink as p, _toConsumableArray as q, red as r, fade as s, capitalize as t, useTheme as u, _createClass as v, withStyles$1 as w, getThemeProps as x, formatMuiErrorMessage as y, zIndex as z };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU3ZnSWNvbi1iM2RkNmJjYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvY29tbW9uLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvcmVkLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvcGluay5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2luZGlnby5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2JsdWUuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9ncmVlbi5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL29yYW5nZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL2dyZXkuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2VzbS9kZWVwbWVyZ2UuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZXNtL2Zvcm1hdE11aUVycm9yTWVzc2FnZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3IuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZUJyZWFrcG9pbnRzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlTWl4aW5zLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlUGFsZXR0ZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVR5cG9ncmFwaHkuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9zaGFkb3dzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvc2hhcGUuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N5c3RlbS9lc20vc3BhY2luZy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVNwYWNpbmcuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy90cmFuc2l0aW9ucy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3pJbmRleC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZU11aVRoZW1lLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL1RoZW1lUHJvdmlkZXIvbmVzdGVkLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL2dldFRoZW1lUHJvcHMvZ2V0VGhlbWVQcm9wcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pcy1pbi1icm93c2VyL2Rpc3QvbW9kdWxlLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2pzcy9kaXN0L2pzcy5lc20uanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1ydWxlLXZhbHVlLWZ1bmN0aW9uL2Rpc3QvanNzLXBsdWdpbi1ydWxlLXZhbHVlLWZ1bmN0aW9uLmVzbS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLWdsb2JhbC9kaXN0L2pzcy1wbHVnaW4tZ2xvYmFsLmVzbS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLW5lc3RlZC9kaXN0L2pzcy1wbHVnaW4tbmVzdGVkLmVzbS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9oeXBoZW5hdGUtc3R5bGUtbmFtZS9pbmRleC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLWNhbWVsLWNhc2UvZGlzdC9qc3MtcGx1Z2luLWNhbWVsLWNhc2UuZXNtLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2pzcy1wbHVnaW4tZGVmYXVsdC11bml0L2Rpc3QvanNzLXBsdWdpbi1kZWZhdWx0LXVuaXQuZXNtLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy12ZW5kb3IvZGlzdC9jc3MtdmVuZG9yLmVzbS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLXZlbmRvci1wcmVmaXhlci9kaXN0L2pzcy1wbHVnaW4tdmVuZG9yLXByZWZpeGVyLmVzbS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLXByb3BzLXNvcnQvZGlzdC9qc3MtcGx1Z2luLXByb3BzLXNvcnQuZXNtLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL2pzc1ByZXNldC9qc3NQcmVzZXQuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vbWVyZ2VDbGFzc2VzL21lcmdlQ2xhc3Nlcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS9tYWtlU3R5bGVzL211bHRpS2V5U3RvcmUuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vdXNlVGhlbWUvVGhlbWVDb250ZXh0LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL3VzZVRoZW1lL3VzZVRoZW1lLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL1N0eWxlc1Byb3ZpZGVyL1N0eWxlc1Byb3ZpZGVyLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL21ha2VTdHlsZXMvaW5kZXhDb3VudGVyLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL2dldFN0eWxlc0NyZWF0b3Ivbm9vcFRoZW1lLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL2dldFN0eWxlc0NyZWF0b3IvZ2V0U3R5bGVzQ3JlYXRvci5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS9tYWtlU3R5bGVzL21ha2VTdHlsZXMuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vd2l0aFN0eWxlcy93aXRoU3R5bGVzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvZGVmYXVsdFRoZW1lLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvd2l0aFN0eWxlcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvY2FwaXRhbGl6ZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vU3ZnSWNvbi9TdmdJY29uLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9jcmVhdGVTdmdJY29uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjb21tb24gPSB7XG4gIGJsYWNrOiAnIzAwMCcsXG4gIHdoaXRlOiAnI2ZmZidcbn07XG5leHBvcnQgZGVmYXVsdCBjb21tb247IiwidmFyIHJlZCA9IHtcbiAgNTA6ICcjZmZlYmVlJyxcbiAgMTAwOiAnI2ZmY2RkMicsXG4gIDIwMDogJyNlZjlhOWEnLFxuICAzMDA6ICcjZTU3MzczJyxcbiAgNDAwOiAnI2VmNTM1MCcsXG4gIDUwMDogJyNmNDQzMzYnLFxuICA2MDA6ICcjZTUzOTM1JyxcbiAgNzAwOiAnI2QzMmYyZicsXG4gIDgwMDogJyNjNjI4MjgnLFxuICA5MDA6ICcjYjcxYzFjJyxcbiAgQTEwMDogJyNmZjhhODAnLFxuICBBMjAwOiAnI2ZmNTI1MicsXG4gIEE0MDA6ICcjZmYxNzQ0JyxcbiAgQTcwMDogJyNkNTAwMDAnXG59O1xuZXhwb3J0IGRlZmF1bHQgcmVkOyIsInZhciBwaW5rID0ge1xuICA1MDogJyNmY2U0ZWMnLFxuICAxMDA6ICcjZjhiYmQwJyxcbiAgMjAwOiAnI2Y0OGZiMScsXG4gIDMwMDogJyNmMDYyOTInLFxuICA0MDA6ICcjZWM0MDdhJyxcbiAgNTAwOiAnI2U5MWU2MycsXG4gIDYwMDogJyNkODFiNjAnLFxuICA3MDA6ICcjYzIxODViJyxcbiAgODAwOiAnI2FkMTQ1NycsXG4gIDkwMDogJyM4ODBlNGYnLFxuICBBMTAwOiAnI2ZmODBhYicsXG4gIEEyMDA6ICcjZmY0MDgxJyxcbiAgQTQwMDogJyNmNTAwNTcnLFxuICBBNzAwOiAnI2M1MTE2Midcbn07XG5leHBvcnQgZGVmYXVsdCBwaW5rOyIsInZhciBpbmRpZ28gPSB7XG4gIDUwOiAnI2U4ZWFmNicsXG4gIDEwMDogJyNjNWNhZTknLFxuICAyMDA6ICcjOWZhOGRhJyxcbiAgMzAwOiAnIzc5ODZjYicsXG4gIDQwMDogJyM1YzZiYzAnLFxuICA1MDA6ICcjM2Y1MWI1JyxcbiAgNjAwOiAnIzM5NDlhYicsXG4gIDcwMDogJyMzMDNmOWYnLFxuICA4MDA6ICcjMjgzNTkzJyxcbiAgOTAwOiAnIzFhMjM3ZScsXG4gIEExMDA6ICcjOGM5ZWZmJyxcbiAgQTIwMDogJyM1MzZkZmUnLFxuICBBNDAwOiAnIzNkNWFmZScsXG4gIEE3MDA6ICcjMzA0ZmZlJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGluZGlnbzsiLCJ2YXIgYmx1ZSA9IHtcbiAgNTA6ICcjZTNmMmZkJyxcbiAgMTAwOiAnI2JiZGVmYicsXG4gIDIwMDogJyM5MGNhZjknLFxuICAzMDA6ICcjNjRiNWY2JyxcbiAgNDAwOiAnIzQyYTVmNScsXG4gIDUwMDogJyMyMTk2ZjMnLFxuICA2MDA6ICcjMWU4OGU1JyxcbiAgNzAwOiAnIzE5NzZkMicsXG4gIDgwMDogJyMxNTY1YzAnLFxuICA5MDA6ICcjMGQ0N2ExJyxcbiAgQTEwMDogJyM4MmIxZmYnLFxuICBBMjAwOiAnIzQ0OGFmZicsXG4gIEE0MDA6ICcjMjk3OWZmJyxcbiAgQTcwMDogJyMyOTYyZmYnXG59O1xuZXhwb3J0IGRlZmF1bHQgYmx1ZTsiLCJ2YXIgZ3JlZW4gPSB7XG4gIDUwOiAnI2U4ZjVlOScsXG4gIDEwMDogJyNjOGU2YzknLFxuICAyMDA6ICcjYTVkNmE3JyxcbiAgMzAwOiAnIzgxYzc4NCcsXG4gIDQwMDogJyM2NmJiNmEnLFxuICA1MDA6ICcjNGNhZjUwJyxcbiAgNjAwOiAnIzQzYTA0NycsXG4gIDcwMDogJyMzODhlM2MnLFxuICA4MDA6ICcjMmU3ZDMyJyxcbiAgOTAwOiAnIzFiNWUyMCcsXG4gIEExMDA6ICcjYjlmNmNhJyxcbiAgQTIwMDogJyM2OWYwYWUnLFxuICBBNDAwOiAnIzAwZTY3NicsXG4gIEE3MDA6ICcjMDBjODUzJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGdyZWVuOyIsInZhciBvcmFuZ2UgPSB7XG4gIDUwOiAnI2ZmZjNlMCcsXG4gIDEwMDogJyNmZmUwYjInLFxuICAyMDA6ICcjZmZjYzgwJyxcbiAgMzAwOiAnI2ZmYjc0ZCcsXG4gIDQwMDogJyNmZmE3MjYnLFxuICA1MDA6ICcjZmY5ODAwJyxcbiAgNjAwOiAnI2ZiOGMwMCcsXG4gIDcwMDogJyNmNTdjMDAnLFxuICA4MDA6ICcjZWY2YzAwJyxcbiAgOTAwOiAnI2U2NTEwMCcsXG4gIEExMDA6ICcjZmZkMTgwJyxcbiAgQTIwMDogJyNmZmFiNDAnLFxuICBBNDAwOiAnI2ZmOTEwMCcsXG4gIEE3MDA6ICcjZmY2ZDAwJ1xufTtcbmV4cG9ydCBkZWZhdWx0IG9yYW5nZTsiLCJ2YXIgZ3JleSA9IHtcbiAgNTA6ICcjZmFmYWZhJyxcbiAgMTAwOiAnI2Y1ZjVmNScsXG4gIDIwMDogJyNlZWVlZWUnLFxuICAzMDA6ICcjZTBlMGUwJyxcbiAgNDAwOiAnI2JkYmRiZCcsXG4gIDUwMDogJyM5ZTllOWUnLFxuICA2MDA6ICcjNzU3NTc1JyxcbiAgNzAwOiAnIzYxNjE2MScsXG4gIDgwMDogJyM0MjQyNDInLFxuICA5MDA6ICcjMjEyMTIxJyxcbiAgQTEwMDogJyNkNWQ1ZDUnLFxuICBBMjAwOiAnI2FhYWFhYScsXG4gIEE0MDA6ICcjMzAzMDMwJyxcbiAgQTcwMDogJyM2MTYxNjEnXG59O1xuZXhwb3J0IGRlZmF1bHQgZ3JleTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KGl0ZW0pIHtcbiAgcmV0dXJuIGl0ZW0gJiYgX3R5cGVvZihpdGVtKSA9PT0gJ29iamVjdCcgJiYgaXRlbS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVlcG1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7XG4gICAgY2xvbmU6IHRydWVcbiAgfTtcbiAgdmFyIG91dHB1dCA9IG9wdGlvbnMuY2xvbmUgPyBfZXh0ZW5kcyh7fSwgdGFyZ2V0KSA6IHRhcmdldDtcblxuICBpZiAoaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIGlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAvLyBBdm9pZCBwcm90b3R5cGUgcG9sbHV0aW9uXG4gICAgICBpZiAoa2V5ID09PSAnX19wcm90b19fJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1BsYWluT2JqZWN0KHNvdXJjZVtrZXldKSAmJiBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgICAgIG91dHB1dFtrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn0iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQoKSB7fVxuZW1wdHlGdW5jdGlvbldpdGhSZXNldC5yZXNldFdhcm5pbmdDYWNoZSA9IGVtcHR5RnVuY3Rpb247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBlbGVtZW50VHlwZTogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltLFxuXG4gICAgY2hlY2tQcm9wVHlwZXM6IGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQsXG4gICAgcmVzZXRXYXJuaW5nQ2FjaGU6IGVtcHR5RnVuY3Rpb25cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiLyoqXG4gKiBXQVJOSU5HOiBEb24ndCBpbXBvcnQgdGhpcyBkaXJlY3RseS5cbiAqIFVzZSBgTXVpRXJyb3JgIGZyb20gYEBtYXRlcmlhbC11aS91dGlscy9tYWNyb3MvTXVpRXJyb3IubWFjcm9gIGluc3RlYWQuXG4gKiBAcGFyYW0ge251bWJlcn0gY29kZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRNdWlFcnJvck1lc3NhZ2UoY29kZSkge1xuICAvLyBBcHBseSBiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXRlbXBsYXRlLWxpdGVyYWxzIGluIGxvb3NlIG1vZGVcbiAgLy8gbG9vc2UgbW9kZSBpcyBzYWZlIGlmZiB3ZSdyZSBjb25jYXRlbmF0aW5nIHByaW1pdGl2ZXNcbiAgLy8gc2VlIGh0dHBzOi8vYmFiZWxqcy5pby9kb2NzL2VuL2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tdGVtcGxhdGUtbGl0ZXJhbHMjbG9vc2VcblxuICAvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItdGVtcGxhdGUgKi9cbiAgdmFyIHVybCA9ICdodHRwczovL21hdGVyaWFsLXVpLmNvbS9wcm9kdWN0aW9uLWVycm9yLz9jb2RlPScgKyBjb2RlO1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgLy8gcmVzdCBwYXJhbXMgb3Zlci10cmFuc3BpbGUgZm9yIHRoaXMgY2FzZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICB1cmwgKz0gJyZhcmdzW109JyArIGVuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbaV0pO1xuICB9XG5cbiAgcmV0dXJuICdNaW5pZmllZCBNYXRlcmlhbC1VSSBlcnJvciAjJyArIGNvZGUgKyAnOyB2aXNpdCAnICsgdXJsICsgJyBmb3IgdGhlIGZ1bGwgbWVzc2FnZS4nO1xuICAvKiBlc2xpbnQtZW5hYmxlIHByZWZlci10ZW1wbGF0ZSAqL1xufSIsImltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS91dGlsc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBudW1iZXIgd2hvc2UgdmFsdWUgaXMgbGltaXRlZCB0byB0aGUgZ2l2ZW4gcmFuZ2UuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjbGFtcGVkXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIFRoZSBsb3dlciBib3VuZGFyeSBvZiB0aGUgb3V0cHV0IHJhbmdlXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IFRoZSB1cHBlciBib3VuZGFyeSBvZiB0aGUgb3V0cHV0IHJhbmdlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIG51bWJlciBpbiB0aGUgcmFuZ2UgW21pbiwgbWF4XVxuICovXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSkge1xuICB2YXIgbWluID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICB2YXIgbWF4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAxO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHZhbHVlIDwgbWluIHx8IHZhbHVlID4gbWF4KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFRoZSB2YWx1ZSBwcm92aWRlZCBcIi5jb25jYXQodmFsdWUsIFwiIGlzIG91dCBvZiByYW5nZSBbXCIpLmNvbmNhdChtaW4sIFwiLCBcIikuY29uY2F0KG1heCwgXCJdLlwiKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG1pbiwgdmFsdWUpLCBtYXgpO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIGZyb20gQ1NTIGhleCBmb3JtYXQgdG8gQ1NTIHJnYiBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gSGV4IGNvbG9yLCBpLmUuICNubm4gb3IgI25ubm5ublxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgcmdiIGNvbG9yIHN0cmluZ1xuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGNvbG9yKSB7XG4gIGNvbG9yID0gY29sb3Iuc3Vic3RyKDEpO1xuICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiLnsxLFwiLmNvbmNhdChjb2xvci5sZW5ndGggPj0gNiA/IDIgOiAxLCBcIn1cIiksICdnJyk7XG4gIHZhciBjb2xvcnMgPSBjb2xvci5tYXRjaChyZSk7XG5cbiAgaWYgKGNvbG9ycyAmJiBjb2xvcnNbMF0ubGVuZ3RoID09PSAxKSB7XG4gICAgY29sb3JzID0gY29sb3JzLm1hcChmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuIG4gKyBuO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNvbG9ycyA/IFwicmdiXCIuY29uY2F0KGNvbG9ycy5sZW5ndGggPT09IDQgPyAnYScgOiAnJywgXCIoXCIpLmNvbmNhdChjb2xvcnMubWFwKGZ1bmN0aW9uIChuLCBpbmRleCkge1xuICAgIHJldHVybiBpbmRleCA8IDMgPyBwYXJzZUludChuLCAxNikgOiBNYXRoLnJvdW5kKHBhcnNlSW50KG4sIDE2KSAvIDI1NSAqIDEwMDApIC8gMTAwMDtcbiAgfSkuam9pbignLCAnKSwgXCIpXCIpIDogJyc7XG59XG5cbmZ1bmN0aW9uIGludFRvSGV4KGludCkge1xuICB2YXIgaGV4ID0gaW50LnRvU3RyaW5nKDE2KTtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyBcIjBcIi5jb25jYXQoaGV4KSA6IGhleDtcbn1cbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBmcm9tIENTUyByZ2IgZm9ybWF0IHRvIENTUyBoZXggZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIFJHQiBjb2xvciwgaS5lLiByZ2IobiwgbiwgbilcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIHJnYiBjb2xvciBzdHJpbmcsIGkuZS4gI25ubm5ublxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvSGV4KGNvbG9yKSB7XG4gIC8vIElkZW1wb3RlbnRcbiAgaWYgKGNvbG9yLmluZGV4T2YoJyMnKSA9PT0gMCkge1xuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIHZhciBfZGVjb21wb3NlQ29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvciksXG4gICAgICB2YWx1ZXMgPSBfZGVjb21wb3NlQ29sb3IudmFsdWVzO1xuXG4gIHJldHVybiBcIiNcIi5jb25jYXQodmFsdWVzLm1hcChmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBpbnRUb0hleChuKTtcbiAgfSkuam9pbignJykpO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIGZyb20gaHNsIGZvcm1hdCB0byByZ2IgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIEhTTCBjb2xvciB2YWx1ZXNcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHJnYiBjb2xvciB2YWx1ZXNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaHNsVG9SZ2IoY29sb3IpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIHZhciBfY29sb3IgPSBjb2xvcixcbiAgICAgIHZhbHVlcyA9IF9jb2xvci52YWx1ZXM7XG4gIHZhciBoID0gdmFsdWVzWzBdO1xuICB2YXIgcyA9IHZhbHVlc1sxXSAvIDEwMDtcbiAgdmFyIGwgPSB2YWx1ZXNbMl0gLyAxMDA7XG4gIHZhciBhID0gcyAqIE1hdGgubWluKGwsIDEgLSBsKTtcblxuICB2YXIgZiA9IGZ1bmN0aW9uIGYobikge1xuICAgIHZhciBrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAobiArIGggLyAzMCkgJSAxMjtcbiAgICByZXR1cm4gbCAtIGEgKiBNYXRoLm1heChNYXRoLm1pbihrIC0gMywgOSAtIGssIDEpLCAtMSk7XG4gIH07XG5cbiAgdmFyIHR5cGUgPSAncmdiJztcbiAgdmFyIHJnYiA9IFtNYXRoLnJvdW5kKGYoMCkgKiAyNTUpLCBNYXRoLnJvdW5kKGYoOCkgKiAyNTUpLCBNYXRoLnJvdW5kKGYoNCkgKiAyNTUpXTtcblxuICBpZiAoY29sb3IudHlwZSA9PT0gJ2hzbGEnKSB7XG4gICAgdHlwZSArPSAnYSc7XG4gICAgcmdiLnB1c2godmFsdWVzWzNdKTtcbiAgfVxuXG4gIHJldHVybiByZWNvbXBvc2VDb2xvcih7XG4gICAgdHlwZTogdHlwZSxcbiAgICB2YWx1ZXM6IHJnYlxuICB9KTtcbn1cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgdHlwZSBhbmQgdmFsdWVzIG9mIGEgY29sb3IuXG4gKlxuICogTm90ZTogRG9lcyBub3Qgc3VwcG9ydCByZ2IgJSB2YWx1ZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHJldHVybnMge29iamVjdH0gLSBBIE1VSSBjb2xvciBvYmplY3Q6IHt0eXBlOiBzdHJpbmcsIHZhbHVlczogbnVtYmVyW119XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29tcG9zZUNvbG9yKGNvbG9yKSB7XG4gIC8vIElkZW1wb3RlbnRcbiAgaWYgKGNvbG9yLnR5cGUpIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICBpZiAoY29sb3IuY2hhckF0KDApID09PSAnIycpIHtcbiAgICByZXR1cm4gZGVjb21wb3NlQ29sb3IoaGV4VG9SZ2IoY29sb3IpKTtcbiAgfVxuXG4gIHZhciBtYXJrZXIgPSBjb2xvci5pbmRleE9mKCcoJyk7XG4gIHZhciB0eXBlID0gY29sb3Iuc3Vic3RyaW5nKDAsIG1hcmtlcik7XG5cbiAgaWYgKFsncmdiJywgJ3JnYmEnLCAnaHNsJywgJ2hzbGEnXS5pbmRleE9mKHR5cGUpID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBVbnN1cHBvcnRlZCBgXCIuY29uY2F0KGNvbG9yLCBcImAgY29sb3IuXFxuV2Ugc3VwcG9ydCB0aGUgZm9sbG93aW5nIGZvcm1hdHM6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKCkuXCIpIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSgzLCBjb2xvcikpO1xuICB9XG5cbiAgdmFyIHZhbHVlcyA9IGNvbG9yLnN1YnN0cmluZyhtYXJrZXIgKyAxLCBjb2xvci5sZW5ndGggLSAxKS5zcGxpdCgnLCcpO1xuICB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZSxcbiAgICB2YWx1ZXM6IHZhbHVlc1xuICB9O1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIG9iamVjdCB3aXRoIHR5cGUgYW5kIHZhbHVlcyB0byBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29sb3IgLSBEZWNvbXBvc2VkIGNvbG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IudHlwZSAtIE9uZSBvZjogJ3JnYicsICdyZ2JhJywgJ2hzbCcsICdoc2xhJ1xuICogQHBhcmFtIHthcnJheX0gY29sb3IudmFsdWVzIC0gW24sbixuXSBvciBbbixuLG4sbl1cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvbXBvc2VDb2xvcihjb2xvcikge1xuICB2YXIgdHlwZSA9IGNvbG9yLnR5cGU7XG4gIHZhciB2YWx1ZXMgPSBjb2xvci52YWx1ZXM7XG5cbiAgaWYgKHR5cGUuaW5kZXhPZigncmdiJykgIT09IC0xKSB7XG4gICAgLy8gT25seSBjb252ZXJ0IHRoZSBmaXJzdCAzIHZhbHVlcyB0byBpbnQgKGkuZS4gbm90IGFscGhhKVxuICAgIHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKG4sIGkpIHtcbiAgICAgIHJldHVybiBpIDwgMyA/IHBhcnNlSW50KG4sIDEwKSA6IG47XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZS5pbmRleE9mKCdoc2wnKSAhPT0gLTEpIHtcbiAgICB2YWx1ZXNbMV0gPSBcIlwiLmNvbmNhdCh2YWx1ZXNbMV0sIFwiJVwiKTtcbiAgICB2YWx1ZXNbMl0gPSBcIlwiLmNvbmNhdCh2YWx1ZXNbMl0sIFwiJVwiKTtcbiAgfVxuXG4gIHJldHVybiBcIlwiLmNvbmNhdCh0eXBlLCBcIihcIikuY29uY2F0KHZhbHVlcy5qb2luKCcsICcpLCBcIilcIik7XG59XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNvbnRyYXN0IHJhdGlvIGJldHdlZW4gdHdvIGNvbG9ycy5cbiAqXG4gKiBGb3JtdWxhOiBodHRwczovL3d3dy53My5vcmcvVFIvV0NBRzIwLVRFQ0hTL0cxNy5odG1sI0cxNy10ZXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JlZ3JvdW5kIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtzdHJpbmd9IGJhY2tncm91bmQgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIGNvbnRyYXN0IHJhdGlvIHZhbHVlIGluIHRoZSByYW5nZSAwIC0gMjEuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRyYXN0UmF0aW8oZm9yZWdyb3VuZCwgYmFja2dyb3VuZCkge1xuICB2YXIgbHVtQSA9IGdldEx1bWluYW5jZShmb3JlZ3JvdW5kKTtcbiAgdmFyIGx1bUIgPSBnZXRMdW1pbmFuY2UoYmFja2dyb3VuZCk7XG4gIHJldHVybiAoTWF0aC5tYXgobHVtQSwgbHVtQikgKyAwLjA1KSAvIChNYXRoLm1pbihsdW1BLCBsdW1CKSArIDAuMDUpO1xufVxuLyoqXG4gKiBUaGUgcmVsYXRpdmUgYnJpZ2h0bmVzcyBvZiBhbnkgcG9pbnQgaW4gYSBjb2xvciBzcGFjZSxcbiAqIG5vcm1hbGl6ZWQgdG8gMCBmb3IgZGFya2VzdCBibGFjayBhbmQgMSBmb3IgbGlnaHRlc3Qgd2hpdGUuXG4gKlxuICogRm9ybXVsYTogaHR0cHM6Ly93d3cudzMub3JnL1RSL1dDQUcyMC1URUNIUy9HMTcuaHRtbCNHMTctdGVzdHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmVsYXRpdmUgYnJpZ2h0bmVzcyBvZiB0aGUgY29sb3IgaW4gdGhlIHJhbmdlIDAgLSAxXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEx1bWluYW5jZShjb2xvcikge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgdmFyIHJnYiA9IGNvbG9yLnR5cGUgPT09ICdoc2wnID8gZGVjb21wb3NlQ29sb3IoaHNsVG9SZ2IoY29sb3IpKS52YWx1ZXMgOiBjb2xvci52YWx1ZXM7XG4gIHJnYiA9IHJnYi5tYXAoZnVuY3Rpb24gKHZhbCkge1xuICAgIHZhbCAvPSAyNTU7IC8vIG5vcm1hbGl6ZWRcblxuICAgIHJldHVybiB2YWwgPD0gMC4wMzkyOCA/IHZhbCAvIDEyLjkyIDogTWF0aC5wb3coKHZhbCArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICB9KTsgLy8gVHJ1bmNhdGUgYXQgMyBkaWdpdHNcblxuICByZXR1cm4gTnVtYmVyKCgwLjIxMjYgKiByZ2JbMF0gKyAwLjcxNTIgKiByZ2JbMV0gKyAwLjA3MjIgKiByZ2JbMl0pLnRvRml4ZWQoMykpO1xufVxuLyoqXG4gKiBEYXJrZW4gb3IgbGlnaHRlbiBhIGNvbG9yLCBkZXBlbmRpbmcgb24gaXRzIGx1bWluYW5jZS5cbiAqIExpZ2h0IGNvbG9ycyBhcmUgZGFya2VuZWQsIGRhcmsgY29sb3JzIGFyZSBsaWdodGVuZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50PTAuMTUgLSBtdWx0aXBsaWVyIGluIHRoZSByYW5nZSAwIC0gMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZW1waGFzaXplKGNvbG9yKSB7XG4gIHZhciBjb2VmZmljaWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMC4xNTtcbiAgcmV0dXJuIGdldEx1bWluYW5jZShjb2xvcikgPiAwLjUgPyBkYXJrZW4oY29sb3IsIGNvZWZmaWNpZW50KSA6IGxpZ2h0ZW4oY29sb3IsIGNvZWZmaWNpZW50KTtcbn1cbi8qKlxuICogU2V0IHRoZSBhYnNvbHV0ZSB0cmFuc3BhcmVuY3kgb2YgYSBjb2xvci5cbiAqIEFueSBleGlzdGluZyBhbHBoYSB2YWx1ZXMgYXJlIG92ZXJ3cml0dGVuLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIHZhbHVlIHRvIHNldCB0aGUgYWxwaGEgY2hhbm5lbCB0byBpbiB0aGUgcmFuZ2UgMCAtMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZmFkZShjb2xvciwgdmFsdWUpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIHZhbHVlID0gY2xhbXAodmFsdWUpO1xuXG4gIGlmIChjb2xvci50eXBlID09PSAncmdiJyB8fCBjb2xvci50eXBlID09PSAnaHNsJykge1xuICAgIGNvbG9yLnR5cGUgKz0gJ2EnO1xuICB9XG5cbiAgY29sb3IudmFsdWVzWzNdID0gdmFsdWU7XG4gIHJldHVybiByZWNvbXBvc2VDb2xvcihjb2xvcik7XG59XG4vKipcbiAqIERhcmtlbnMgYSBjb2xvci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge251bWJlcn0gY29lZmZpY2llbnQgLSBtdWx0aXBsaWVyIGluIHRoZSByYW5nZSAwIC0gMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGFya2VuKGNvbG9yLCBjb2VmZmljaWVudCkge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgY29lZmZpY2llbnQgPSBjbGFtcChjb2VmZmljaWVudCk7XG5cbiAgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZignaHNsJykgIT09IC0xKSB7XG4gICAgY29sb3IudmFsdWVzWzJdICo9IDEgLSBjb2VmZmljaWVudDtcbiAgfSBlbHNlIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ3JnYicpICE9PSAtMSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBjb2xvci52YWx1ZXNbaV0gKj0gMSAtIGNvZWZmaWNpZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWNvbXBvc2VDb2xvcihjb2xvcik7XG59XG4vKipcbiAqIExpZ2h0ZW5zIGEgY29sb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxpZ2h0ZW4oY29sb3IsIGNvZWZmaWNpZW50KSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICBjb2VmZmljaWVudCA9IGNsYW1wKGNvZWZmaWNpZW50KTtcblxuICBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdoc2wnKSAhPT0gLTEpIHtcbiAgICBjb2xvci52YWx1ZXNbMl0gKz0gKDEwMCAtIGNvbG9yLnZhbHVlc1syXSkgKiBjb2VmZmljaWVudDtcbiAgfSBlbHNlIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ3JnYicpICE9PSAtMSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBjb2xvci52YWx1ZXNbaV0gKz0gKDI1NSAtIGNvbG9yLnZhbHVlc1tpXSkgKiBjb2VmZmljaWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVjb21wb3NlQ29sb3IoY29sb3IpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG4vLyBTb3J0ZWQgQVNDIGJ5IHNpemUuIFRoYXQncyBpbXBvcnRhbnQuXG4vLyBJdCBjYW4ndCBiZSBjb25maWd1cmVkIGFzIGl0J3MgdXNlZCBzdGF0aWNhbGx5IGZvciBwcm9wVHlwZXMuXG5leHBvcnQgdmFyIGtleXMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ107IC8vIEtlZXAgaW4gbWluZCB0aGF0IEBtZWRpYSBpcyBpbmNsdXNpdmUgYnkgdGhlIENTUyBzcGVjaWZpY2F0aW9uLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCcmVha3BvaW50cyhicmVha3BvaW50cykge1xuICB2YXIgX2JyZWFrcG9pbnRzJHZhbHVlcyA9IGJyZWFrcG9pbnRzLnZhbHVlcyxcbiAgICAgIHZhbHVlcyA9IF9icmVha3BvaW50cyR2YWx1ZXMgPT09IHZvaWQgMCA/IHtcbiAgICB4czogMCxcbiAgICBzbTogNjAwLFxuICAgIG1kOiA5NjAsXG4gICAgbGc6IDEyODAsXG4gICAgeGw6IDE5MjBcbiAgfSA6IF9icmVha3BvaW50cyR2YWx1ZXMsXG4gICAgICBfYnJlYWtwb2ludHMkdW5pdCA9IGJyZWFrcG9pbnRzLnVuaXQsXG4gICAgICB1bml0ID0gX2JyZWFrcG9pbnRzJHVuaXQgPT09IHZvaWQgMCA/ICdweCcgOiBfYnJlYWtwb2ludHMkdW5pdCxcbiAgICAgIF9icmVha3BvaW50cyRzdGVwID0gYnJlYWtwb2ludHMuc3RlcCxcbiAgICAgIHN0ZXAgPSBfYnJlYWtwb2ludHMkc3RlcCA9PT0gdm9pZCAwID8gNSA6IF9icmVha3BvaW50cyRzdGVwLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoYnJlYWtwb2ludHMsIFtcInZhbHVlc1wiLCBcInVuaXRcIiwgXCJzdGVwXCJdKTtcblxuICBmdW5jdGlvbiB1cChrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSB0eXBlb2YgdmFsdWVzW2tleV0gPT09ICdudW1iZXInID8gdmFsdWVzW2tleV0gOiBrZXk7XG4gICAgcmV0dXJuIFwiQG1lZGlhIChtaW4td2lkdGg6XCIuY29uY2F0KHZhbHVlKS5jb25jYXQodW5pdCwgXCIpXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZG93bihrZXkpIHtcbiAgICB2YXIgZW5kSW5kZXggPSBrZXlzLmluZGV4T2Yoa2V5KSArIDE7XG4gICAgdmFyIHVwcGVyYm91bmQgPSB2YWx1ZXNba2V5c1tlbmRJbmRleF1dO1xuXG4gICAgaWYgKGVuZEluZGV4ID09PSBrZXlzLmxlbmd0aCkge1xuICAgICAgLy8geGwgZG93biBhcHBsaWVzIHRvIGFsbCBzaXplc1xuICAgICAgcmV0dXJuIHVwKCd4cycpO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IHR5cGVvZiB1cHBlcmJvdW5kID09PSAnbnVtYmVyJyAmJiBlbmRJbmRleCA+IDAgPyB1cHBlcmJvdW5kIDoga2V5O1xuICAgIHJldHVybiBcIkBtZWRpYSAobWF4LXdpZHRoOlwiLmNvbmNhdCh2YWx1ZSAtIHN0ZXAgLyAxMDApLmNvbmNhdCh1bml0LCBcIilcIik7XG4gIH1cblxuICBmdW5jdGlvbiBiZXR3ZWVuKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgZW5kSW5kZXggPSBrZXlzLmluZGV4T2YoZW5kKTtcblxuICAgIGlmIChlbmRJbmRleCA9PT0ga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm4gdXAoc3RhcnQpO1xuICAgIH1cblxuICAgIHJldHVybiBcIkBtZWRpYSAobWluLXdpZHRoOlwiLmNvbmNhdCh0eXBlb2YgdmFsdWVzW3N0YXJ0XSA9PT0gJ251bWJlcicgPyB2YWx1ZXNbc3RhcnRdIDogc3RhcnQpLmNvbmNhdCh1bml0LCBcIikgYW5kIFwiKSArIFwiKG1heC13aWR0aDpcIi5jb25jYXQoKGVuZEluZGV4ICE9PSAtMSAmJiB0eXBlb2YgdmFsdWVzW2tleXNbZW5kSW5kZXggKyAxXV0gPT09ICdudW1iZXInID8gdmFsdWVzW2tleXNbZW5kSW5kZXggKyAxXV0gOiBlbmQpIC0gc3RlcCAvIDEwMCkuY29uY2F0KHVuaXQsIFwiKVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9ubHkoa2V5KSB7XG4gICAgcmV0dXJuIGJldHdlZW4oa2V5LCBrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gd2lkdGgoa2V5KSB7XG4gICAgcmV0dXJuIHZhbHVlc1trZXldO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICBrZXlzOiBrZXlzLFxuICAgIHZhbHVlczogdmFsdWVzLFxuICAgIHVwOiB1cCxcbiAgICBkb3duOiBkb3duLFxuICAgIGJldHdlZW46IGJldHdlZW4sXG4gICAgb25seTogb25seSxcbiAgICB3aWR0aDogd2lkdGhcbiAgfSwgb3RoZXIpO1xufSIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1peGlucyhicmVha3BvaW50cywgc3BhY2luZywgbWl4aW5zKSB7XG4gIHZhciBfdG9vbGJhcjtcblxuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIGd1dHRlcnM6IGZ1bmN0aW9uIGd1dHRlcnMoKSB7XG4gICAgICB2YXIgc3R5bGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIC8vIFRvIGRlcHJlY2F0ZSBpbiB2NC4xXG4gICAgICAvLyAgICAgICB3YXJuaW5nKFxuICAgICAgLy8gICAgICAgICBmYWxzZSxcbiAgICAgIC8vICAgICAgICAgW1xuICAgICAgLy8gICAgICAgICAgICdNYXRlcmlhbC1VSTogVGhlbWUubWl4aW5zLmd1dHRlcnMoKSBpcyBkZXByZWNhdGVkLicsXG4gICAgICAvLyAgICAgICAgICAgJ1lvdSBjYW4gdXNlIHRoZSBzb3VyY2Ugb2YgdGhlIG1peGluIGRpcmVjdGx5OicsXG4gICAgICAvLyAgICAgICAgICAgYFxuICAgICAgLy8gcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICAvLyBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICAvLyBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICAvLyAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgLy8gICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAvLyB9LFxuICAgICAgLy8gYCxcbiAgICAgIC8vICAgICAgICAgXS5qb2luKCdcXG4nKSxcbiAgICAgIC8vICAgICAgICk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBwYWRkaW5nTGVmdDogc3BhY2luZygyKSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nKDIpXG4gICAgICB9LCBzdHlsZXMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgYnJlYWtwb2ludHMudXAoJ3NtJyksIF9leHRlbmRzKHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcoMyksXG4gICAgICAgIHBhZGRpbmdSaWdodDogc3BhY2luZygzKVxuICAgICAgfSwgc3R5bGVzW2JyZWFrcG9pbnRzLnVwKCdzbScpXSkpKTtcbiAgICB9LFxuICAgIHRvb2xiYXI6IChfdG9vbGJhciA9IHtcbiAgICAgIG1pbkhlaWdodDogNTZcbiAgICB9LCBfZGVmaW5lUHJvcGVydHkoX3Rvb2xiYXIsIFwiXCIuY29uY2F0KGJyZWFrcG9pbnRzLnVwKCd4cycpLCBcIiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLCB7XG4gICAgICBtaW5IZWlnaHQ6IDQ4XG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfdG9vbGJhciwgYnJlYWtwb2ludHMudXAoJ3NtJyksIHtcbiAgICAgIG1pbkhlaWdodDogNjRcbiAgICB9KSwgX3Rvb2xiYXIpXG4gIH0sIG1peGlucyk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG5pbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGNvbW1vbiBmcm9tICcuLi9jb2xvcnMvY29tbW9uJztcbmltcG9ydCBncmV5IGZyb20gJy4uL2NvbG9ycy9ncmV5JztcbmltcG9ydCBpbmRpZ28gZnJvbSAnLi4vY29sb3JzL2luZGlnbyc7XG5pbXBvcnQgcGluayBmcm9tICcuLi9jb2xvcnMvcGluayc7XG5pbXBvcnQgcmVkIGZyb20gJy4uL2NvbG9ycy9yZWQnO1xuaW1wb3J0IG9yYW5nZSBmcm9tICcuLi9jb2xvcnMvb3JhbmdlJztcbmltcG9ydCBibHVlIGZyb20gJy4uL2NvbG9ycy9ibHVlJztcbmltcG9ydCBncmVlbiBmcm9tICcuLi9jb2xvcnMvZ3JlZW4nO1xuaW1wb3J0IHsgZGFya2VuLCBnZXRDb250cmFzdFJhdGlvLCBsaWdodGVuIH0gZnJvbSAnLi9jb2xvck1hbmlwdWxhdG9yJztcbmV4cG9ydCB2YXIgbGlnaHQgPSB7XG4gIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBzdHlsZSB0aGUgdGV4dC5cbiAgdGV4dDoge1xuICAgIC8vIFRoZSBtb3N0IGltcG9ydGFudCB0ZXh0LlxuICAgIHByaW1hcnk6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgICAvLyBTZWNvbmRhcnkgdGV4dC5cbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDAsIDAsIDAsIDAuNTQpJyxcbiAgICAvLyBEaXNhYmxlZCB0ZXh0IGhhdmUgZXZlbiBsb3dlciB2aXN1YWwgcHJvbWluZW5jZS5cbiAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknLFxuICAgIC8vIFRleHQgaGludHMuXG4gICAgaGludDogJ3JnYmEoMCwgMCwgMCwgMC4zOCknXG4gIH0sXG4gIC8vIFRoZSBjb2xvciB1c2VkIHRvIGRpdmlkZSBkaWZmZXJlbnQgZWxlbWVudHMuXG4gIGRpdmlkZXI6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgLy8gVGhlIGJhY2tncm91bmQgY29sb3JzIHVzZWQgdG8gc3R5bGUgdGhlIHN1cmZhY2VzLlxuICAvLyBDb25zaXN0ZW5jeSBiZXR3ZWVuIHRoZXNlIHZhbHVlcyBpcyBpbXBvcnRhbnQuXG4gIGJhY2tncm91bmQ6IHtcbiAgICBwYXBlcjogY29tbW9uLndoaXRlLFxuICAgIGRlZmF1bHQ6IGdyZXlbNTBdXG4gIH0sXG4gIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBzdHlsZSB0aGUgYWN0aW9uIGVsZW1lbnRzLlxuICBhY3Rpb246IHtcbiAgICAvLyBUaGUgY29sb3Igb2YgYW4gYWN0aXZlIGFjdGlvbiBsaWtlIGFuIGljb24gYnV0dG9uLlxuICAgIGFjdGl2ZTogJ3JnYmEoMCwgMCwgMCwgMC41NCknLFxuICAgIC8vIFRoZSBjb2xvciBvZiBhbiBob3ZlcmVkIGFjdGlvbi5cbiAgICBob3ZlcjogJ3JnYmEoMCwgMCwgMCwgMC4wNCknLFxuICAgIGhvdmVyT3BhY2l0eTogMC4wNCxcbiAgICAvLyBUaGUgY29sb3Igb2YgYSBzZWxlY3RlZCBhY3Rpb24uXG4gICAgc2VsZWN0ZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMDgpJyxcbiAgICBzZWxlY3RlZE9wYWNpdHk6IDAuMDgsXG4gICAgLy8gVGhlIGNvbG9yIG9mIGEgZGlzYWJsZWQgYWN0aW9uLlxuICAgIGRpc2FibGVkOiAncmdiYSgwLCAwLCAwLCAwLjI2KScsXG4gICAgLy8gVGhlIGJhY2tncm91bmQgY29sb3Igb2YgYSBkaXNhYmxlZCBhY3Rpb24uXG4gICAgZGlzYWJsZWRCYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgZGlzYWJsZWRPcGFjaXR5OiAwLjM4LFxuICAgIGZvY3VzOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgZm9jdXNPcGFjaXR5OiAwLjEyLFxuICAgIGFjdGl2YXRlZE9wYWNpdHk6IDAuMTJcbiAgfVxufTtcbmV4cG9ydCB2YXIgZGFyayA9IHtcbiAgdGV4dDoge1xuICAgIHByaW1hcnk6IGNvbW1vbi53aGl0ZSxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknLFxuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBoaW50OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBpY29uOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJ1xuICB9LFxuICBkaXZpZGVyOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gIGJhY2tncm91bmQ6IHtcbiAgICBwYXBlcjogZ3JleVs4MDBdLFxuICAgIGRlZmF1bHQ6ICcjMzAzMDMwJ1xuICB9LFxuICBhY3Rpb246IHtcbiAgICBhY3RpdmU6IGNvbW1vbi53aGl0ZSxcbiAgICBob3ZlcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCknLFxuICAgIGhvdmVyT3BhY2l0eTogMC4wOCxcbiAgICBzZWxlY3RlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNiknLFxuICAgIHNlbGVjdGVkT3BhY2l0eTogMC4xNixcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKScsXG4gICAgZGlzYWJsZWRCYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgZGlzYWJsZWRPcGFjaXR5OiAwLjM4LFxuICAgIGZvY3VzOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgZm9jdXNPcGFjaXR5OiAwLjEyLFxuICAgIGFjdGl2YXRlZE9wYWNpdHk6IDAuMjRcbiAgfVxufTtcblxuZnVuY3Rpb24gYWRkTGlnaHRPckRhcmsoaW50ZW50LCBkaXJlY3Rpb24sIHNoYWRlLCB0b25hbE9mZnNldCkge1xuICB2YXIgdG9uYWxPZmZzZXRMaWdodCA9IHRvbmFsT2Zmc2V0LmxpZ2h0IHx8IHRvbmFsT2Zmc2V0O1xuICB2YXIgdG9uYWxPZmZzZXREYXJrID0gdG9uYWxPZmZzZXQuZGFyayB8fCB0b25hbE9mZnNldCAqIDEuNTtcblxuICBpZiAoIWludGVudFtkaXJlY3Rpb25dKSB7XG4gICAgaWYgKGludGVudC5oYXNPd25Qcm9wZXJ0eShzaGFkZSkpIHtcbiAgICAgIGludGVudFtkaXJlY3Rpb25dID0gaW50ZW50W3NoYWRlXTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2xpZ2h0Jykge1xuICAgICAgaW50ZW50LmxpZ2h0ID0gbGlnaHRlbihpbnRlbnQubWFpbiwgdG9uYWxPZmZzZXRMaWdodCk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkYXJrJykge1xuICAgICAgaW50ZW50LmRhcmsgPSBkYXJrZW4oaW50ZW50Lm1haW4sIHRvbmFsT2Zmc2V0RGFyayk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBhbGV0dGUocGFsZXR0ZSkge1xuICB2YXIgX3BhbGV0dGUkcHJpbWFyeSA9IHBhbGV0dGUucHJpbWFyeSxcbiAgICAgIHByaW1hcnkgPSBfcGFsZXR0ZSRwcmltYXJ5ID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IGluZGlnb1szMDBdLFxuICAgIG1haW46IGluZGlnb1s1MDBdLFxuICAgIGRhcms6IGluZGlnb1s3MDBdXG4gIH0gOiBfcGFsZXR0ZSRwcmltYXJ5LFxuICAgICAgX3BhbGV0dGUkc2Vjb25kYXJ5ID0gcGFsZXR0ZS5zZWNvbmRhcnksXG4gICAgICBzZWNvbmRhcnkgPSBfcGFsZXR0ZSRzZWNvbmRhcnkgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogcGluay5BMjAwLFxuICAgIG1haW46IHBpbmsuQTQwMCxcbiAgICBkYXJrOiBwaW5rLkE3MDBcbiAgfSA6IF9wYWxldHRlJHNlY29uZGFyeSxcbiAgICAgIF9wYWxldHRlJGVycm9yID0gcGFsZXR0ZS5lcnJvcixcbiAgICAgIGVycm9yID0gX3BhbGV0dGUkZXJyb3IgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogcmVkWzMwMF0sXG4gICAgbWFpbjogcmVkWzUwMF0sXG4gICAgZGFyazogcmVkWzcwMF1cbiAgfSA6IF9wYWxldHRlJGVycm9yLFxuICAgICAgX3BhbGV0dGUkd2FybmluZyA9IHBhbGV0dGUud2FybmluZyxcbiAgICAgIHdhcm5pbmcgPSBfcGFsZXR0ZSR3YXJuaW5nID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IG9yYW5nZVszMDBdLFxuICAgIG1haW46IG9yYW5nZVs1MDBdLFxuICAgIGRhcms6IG9yYW5nZVs3MDBdXG4gIH0gOiBfcGFsZXR0ZSR3YXJuaW5nLFxuICAgICAgX3BhbGV0dGUkaW5mbyA9IHBhbGV0dGUuaW5mbyxcbiAgICAgIGluZm8gPSBfcGFsZXR0ZSRpbmZvID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IGJsdWVbMzAwXSxcbiAgICBtYWluOiBibHVlWzUwMF0sXG4gICAgZGFyazogYmx1ZVs3MDBdXG4gIH0gOiBfcGFsZXR0ZSRpbmZvLFxuICAgICAgX3BhbGV0dGUkc3VjY2VzcyA9IHBhbGV0dGUuc3VjY2VzcyxcbiAgICAgIHN1Y2Nlc3MgPSBfcGFsZXR0ZSRzdWNjZXNzID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IGdyZWVuWzMwMF0sXG4gICAgbWFpbjogZ3JlZW5bNTAwXSxcbiAgICBkYXJrOiBncmVlbls3MDBdXG4gIH0gOiBfcGFsZXR0ZSRzdWNjZXNzLFxuICAgICAgX3BhbGV0dGUkdHlwZSA9IHBhbGV0dGUudHlwZSxcbiAgICAgIHR5cGUgPSBfcGFsZXR0ZSR0eXBlID09PSB2b2lkIDAgPyAnbGlnaHQnIDogX3BhbGV0dGUkdHlwZSxcbiAgICAgIF9wYWxldHRlJGNvbnRyYXN0VGhyZSA9IHBhbGV0dGUuY29udHJhc3RUaHJlc2hvbGQsXG4gICAgICBjb250cmFzdFRocmVzaG9sZCA9IF9wYWxldHRlJGNvbnRyYXN0VGhyZSA9PT0gdm9pZCAwID8gMyA6IF9wYWxldHRlJGNvbnRyYXN0VGhyZSxcbiAgICAgIF9wYWxldHRlJHRvbmFsT2Zmc2V0ID0gcGFsZXR0ZS50b25hbE9mZnNldCxcbiAgICAgIHRvbmFsT2Zmc2V0ID0gX3BhbGV0dGUkdG9uYWxPZmZzZXQgPT09IHZvaWQgMCA/IDAuMiA6IF9wYWxldHRlJHRvbmFsT2Zmc2V0LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocGFsZXR0ZSwgW1wicHJpbWFyeVwiLCBcInNlY29uZGFyeVwiLCBcImVycm9yXCIsIFwid2FybmluZ1wiLCBcImluZm9cIiwgXCJzdWNjZXNzXCIsIFwidHlwZVwiLCBcImNvbnRyYXN0VGhyZXNob2xkXCIsIFwidG9uYWxPZmZzZXRcIl0pOyAvLyBVc2UgdGhlIHNhbWUgbG9naWMgYXNcbiAgLy8gQm9vdHN0cmFwOiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi8xZDZlMzcxMGRkNDQ3ZGUxYTIwMGYyOWU4ZmE1MjFmOGEwOTA4ZjcwL3Njc3MvX2Z1bmN0aW9ucy5zY3NzI0w1OVxuICAvLyBhbmQgbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIgaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9hYzQ2Yjg4NjNjNGRhYjlmYzIyYzRjNjYyZGM2YmQxYjY1ZGQ2NTJmL3BhY2thZ2VzL21kYy10aGVtZS9fZnVuY3Rpb25zLnNjc3MjTDU0XG5cblxuICBmdW5jdGlvbiBnZXRDb250cmFzdFRleHQoYmFja2dyb3VuZCkge1xuICAgIHZhciBjb250cmFzdFRleHQgPSBnZXRDb250cmFzdFJhdGlvKGJhY2tncm91bmQsIGRhcmsudGV4dC5wcmltYXJ5KSA+PSBjb250cmFzdFRocmVzaG9sZCA/IGRhcmsudGV4dC5wcmltYXJ5IDogbGlnaHQudGV4dC5wcmltYXJ5O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBjb250cmFzdCA9IGdldENvbnRyYXN0UmF0aW8oYmFja2dyb3VuZCwgY29udHJhc3RUZXh0KTtcblxuICAgICAgaWYgKGNvbnRyYXN0IDwgMykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgY29udHJhc3QgcmF0aW8gb2YgXCIuY29uY2F0KGNvbnRyYXN0LCBcIjoxIGZvciBcIikuY29uY2F0KGNvbnRyYXN0VGV4dCwgXCIgb24gXCIpLmNvbmNhdChiYWNrZ3JvdW5kKSwgJ2ZhbGxzIGJlbG93IHRoZSBXQ0FHIHJlY29tbWVuZGVkIGFic29sdXRlIG1pbmltdW0gY29udHJhc3QgcmF0aW8gb2YgMzoxLicsICdodHRwczovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyN2aXN1YWwtYXVkaW8tY29udHJhc3QtY29udHJhc3QnXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyYXN0VGV4dDtcbiAgfVxuXG4gIHZhciBhdWdtZW50Q29sb3IgPSBmdW5jdGlvbiBhdWdtZW50Q29sb3IoY29sb3IpIHtcbiAgICB2YXIgbWFpblNoYWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiA1MDA7XG4gICAgdmFyIGxpZ2h0U2hhZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDMwMDtcbiAgICB2YXIgZGFya1NoYWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiA3MDA7XG4gICAgY29sb3IgPSBfZXh0ZW5kcyh7fSwgY29sb3IpO1xuXG4gICAgaWYgKCFjb2xvci5tYWluICYmIGNvbG9yW21haW5TaGFkZV0pIHtcbiAgICAgIGNvbG9yLm1haW4gPSBjb2xvclttYWluU2hhZGVdO1xuICAgIH1cblxuICAgIGlmICghY29sb3IubWFpbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IFRoZSBjb2xvciBwcm92aWRlZCB0byBhdWdtZW50Q29sb3IoY29sb3IpIGlzIGludmFsaWQuXFxuVGhlIGNvbG9yIG9iamVjdCBuZWVkcyB0byBoYXZlIGEgYG1haW5gIHByb3BlcnR5IG9yIGEgYFwiLmNvbmNhdChtYWluU2hhZGUsIFwiYCBwcm9wZXJ0eS5cIikgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDQsIG1haW5TaGFkZSkpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29sb3IubWFpbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBUaGUgY29sb3IgcHJvdmlkZWQgdG8gYXVnbWVudENvbG9yKGNvbG9yKSBpcyBpbnZhbGlkLlxcbmBjb2xvci5tYWluYCBzaG91bGQgYmUgYSBzdHJpbmcsIGJ1dCBgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGNvbG9yLm1haW4pLCBcImAgd2FzIHByb3ZpZGVkIGluc3RlYWQuXFxuXFxuRGlkIHlvdSBpbnRlbmQgdG8gdXNlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGFwcHJvYWNoZXM/XFxuXFxuaW1wb3J0IHtcXHhBMGdyZWVuIH0gZnJvbSBcXFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXFxcIjtcXG5cXG5jb25zdCB0aGVtZTEgPSBjcmVhdGVNdWlUaGVtZSh7IHBhbGV0dGU6IHtcXG4gIHByaW1hcnk6IGdyZWVuLFxcbn0gfSk7XFxuXFxuY29uc3QgdGhlbWUyID0gY3JlYXRlTXVpVGhlbWUoeyBwYWxldHRlOiB7XFxuICBwcmltYXJ5OiB7IG1haW46IGdyZWVuWzUwMF0gfSxcXG59IH0pO1wiKSA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoNSwgSlNPTi5zdHJpbmdpZnkoY29sb3IubWFpbikpKTtcbiAgICB9XG5cbiAgICBhZGRMaWdodE9yRGFyayhjb2xvciwgJ2xpZ2h0JywgbGlnaHRTaGFkZSwgdG9uYWxPZmZzZXQpO1xuICAgIGFkZExpZ2h0T3JEYXJrKGNvbG9yLCAnZGFyaycsIGRhcmtTaGFkZSwgdG9uYWxPZmZzZXQpO1xuXG4gICAgaWYgKCFjb2xvci5jb250cmFzdFRleHQpIHtcbiAgICAgIGNvbG9yLmNvbnRyYXN0VGV4dCA9IGdldENvbnRyYXN0VGV4dChjb2xvci5tYWluKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3I7XG4gIH07XG5cbiAgdmFyIHR5cGVzID0ge1xuICAgIGRhcms6IGRhcmssXG4gICAgbGlnaHQ6IGxpZ2h0XG4gIH07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXR5cGVzW3R5cGVdKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFRoZSBwYWxldHRlIHR5cGUgYFwiLmNvbmNhdCh0eXBlLCBcImAgaXMgbm90IHN1cHBvcnRlZC5cIikpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwYWxldHRlT3V0cHV0ID0gZGVlcG1lcmdlKF9leHRlbmRzKHtcbiAgICAvLyBBIGNvbGxlY3Rpb24gb2YgY29tbW9uIGNvbG9ycy5cbiAgICBjb21tb246IGNvbW1vbixcbiAgICAvLyBUaGUgcGFsZXR0ZSB0eXBlLCBjYW4gYmUgbGlnaHQgb3IgZGFyay5cbiAgICB0eXBlOiB0eXBlLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgcHJpbWFyeSBpbnRlcmZhY2UgZWxlbWVudHMgZm9yIGEgdXNlci5cbiAgICBwcmltYXJ5OiBhdWdtZW50Q29sb3IocHJpbWFyeSksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHJlcHJlc2VudCBzZWNvbmRhcnkgaW50ZXJmYWNlIGVsZW1lbnRzIGZvciBhIHVzZXIuXG4gICAgc2Vjb25kYXJ5OiBhdWdtZW50Q29sb3Ioc2Vjb25kYXJ5LCAnQTQwMCcsICdBMjAwJywgJ0E3MDAnKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcmVwcmVzZW50IGludGVyZmFjZSBlbGVtZW50cyB0aGF0IHRoZSB1c2VyIHNob3VsZCBiZSBtYWRlIGF3YXJlIG9mLlxuICAgIGVycm9yOiBhdWdtZW50Q29sb3IoZXJyb3IpLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgcG90ZW50aWFsbHkgZGFuZ2Vyb3VzIGFjdGlvbnMgb3IgaW1wb3J0YW50IG1lc3NhZ2VzLlxuICAgIHdhcm5pbmc6IGF1Z21lbnRDb2xvcih3YXJuaW5nKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcHJlc2VudCBpbmZvcm1hdGlvbiB0byB0aGUgdXNlciB0aGF0IGlzIG5ldXRyYWwgYW5kIG5vdCBuZWNlc3NhcmlseSBpbXBvcnRhbnQuXG4gICAgaW5mbzogYXVnbWVudENvbG9yKGluZm8pLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBpbmRpY2F0ZSB0aGUgc3VjY2Vzc2Z1bCBjb21wbGV0aW9uIG9mIGFuIGFjdGlvbiB0aGF0IHVzZXIgdHJpZ2dlcmVkLlxuICAgIHN1Y2Nlc3M6IGF1Z21lbnRDb2xvcihzdWNjZXNzKSxcbiAgICAvLyBUaGUgZ3JleSBjb2xvcnMuXG4gICAgZ3JleTogZ3JleSxcbiAgICAvLyBVc2VkIGJ5IGBnZXRDb250cmFzdFRleHQoKWAgdG8gbWF4aW1pemUgdGhlIGNvbnRyYXN0IGJldHdlZW5cbiAgICAvLyB0aGUgYmFja2dyb3VuZCBhbmQgdGhlIHRleHQuXG4gICAgY29udHJhc3RUaHJlc2hvbGQ6IGNvbnRyYXN0VGhyZXNob2xkLFxuICAgIC8vIFRha2VzIGEgYmFja2dyb3VuZCBjb2xvciBhbmQgcmV0dXJucyB0aGUgdGV4dCBjb2xvciB0aGF0IG1heGltaXplcyB0aGUgY29udHJhc3QuXG4gICAgZ2V0Q29udHJhc3RUZXh0OiBnZXRDb250cmFzdFRleHQsXG4gICAgLy8gR2VuZXJhdGUgYSByaWNoIGNvbG9yIG9iamVjdC5cbiAgICBhdWdtZW50Q29sb3I6IGF1Z21lbnRDb2xvcixcbiAgICAvLyBVc2VkIGJ5IHRoZSBmdW5jdGlvbnMgYmVsb3cgdG8gc2hpZnQgYSBjb2xvcidzIGx1bWluYW5jZSBieSBhcHByb3hpbWF0ZWx5XG4gICAgLy8gdHdvIGluZGV4ZXMgd2l0aGluIGl0cyB0b25hbCBwYWxldHRlLlxuICAgIC8vIEUuZy4sIHNoaWZ0IGZyb20gUmVkIDUwMCB0byBSZWQgMzAwIG9yIFJlZCA3MDAuXG4gICAgdG9uYWxPZmZzZXQ6IHRvbmFsT2Zmc2V0XG4gIH0sIHR5cGVzW3R5cGVdKSwgb3RoZXIpO1xuICByZXR1cm4gcGFsZXR0ZU91dHB1dDtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuXG5mdW5jdGlvbiByb3VuZCh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDFlNSkgLyAxZTU7XG59XG5cbnZhciBjYXNlQWxsQ2FwcyA9IHtcbiAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZSdcbn07XG52YXIgZGVmYXVsdEZvbnRGYW1pbHkgPSAnXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmJztcbi8qKlxuICogQHNlZSBAbGlua3todHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi90eXBvZ3JhcGh5L3RoZS10eXBlLXN5c3RlbS5odG1sfVxuICogQHNlZSBAbGlua3todHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi90eXBvZ3JhcGh5L3VuZGVyc3RhbmRpbmctdHlwb2dyYXBoeS5odG1sfVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVR5cG9ncmFwaHkocGFsZXR0ZSwgdHlwb2dyYXBoeSkge1xuICB2YXIgX3JlZiA9IHR5cGVvZiB0eXBvZ3JhcGh5ID09PSAnZnVuY3Rpb24nID8gdHlwb2dyYXBoeShwYWxldHRlKSA6IHR5cG9ncmFwaHksXG4gICAgICBfcmVmJGZvbnRGYW1pbHkgPSBfcmVmLmZvbnRGYW1pbHksXG4gICAgICBmb250RmFtaWx5ID0gX3JlZiRmb250RmFtaWx5ID09PSB2b2lkIDAgPyBkZWZhdWx0Rm9udEZhbWlseSA6IF9yZWYkZm9udEZhbWlseSxcbiAgICAgIF9yZWYkZm9udFNpemUgPSBfcmVmLmZvbnRTaXplLFxuICAgICAgZm9udFNpemUgPSBfcmVmJGZvbnRTaXplID09PSB2b2lkIDAgPyAxNCA6IF9yZWYkZm9udFNpemUsXG4gICAgICBfcmVmJGZvbnRXZWlnaHRMaWdodCA9IF9yZWYuZm9udFdlaWdodExpZ2h0LFxuICAgICAgZm9udFdlaWdodExpZ2h0ID0gX3JlZiRmb250V2VpZ2h0TGlnaHQgPT09IHZvaWQgMCA/IDMwMCA6IF9yZWYkZm9udFdlaWdodExpZ2h0LFxuICAgICAgX3JlZiRmb250V2VpZ2h0UmVndWxhID0gX3JlZi5mb250V2VpZ2h0UmVndWxhcixcbiAgICAgIGZvbnRXZWlnaHRSZWd1bGFyID0gX3JlZiRmb250V2VpZ2h0UmVndWxhID09PSB2b2lkIDAgPyA0MDAgOiBfcmVmJGZvbnRXZWlnaHRSZWd1bGEsXG4gICAgICBfcmVmJGZvbnRXZWlnaHRNZWRpdW0gPSBfcmVmLmZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICBmb250V2VpZ2h0TWVkaXVtID0gX3JlZiRmb250V2VpZ2h0TWVkaXVtID09PSB2b2lkIDAgPyA1MDAgOiBfcmVmJGZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICBfcmVmJGZvbnRXZWlnaHRCb2xkID0gX3JlZi5mb250V2VpZ2h0Qm9sZCxcbiAgICAgIGZvbnRXZWlnaHRCb2xkID0gX3JlZiRmb250V2VpZ2h0Qm9sZCA9PT0gdm9pZCAwID8gNzAwIDogX3JlZiRmb250V2VpZ2h0Qm9sZCxcbiAgICAgIF9yZWYkaHRtbEZvbnRTaXplID0gX3JlZi5odG1sRm9udFNpemUsXG4gICAgICBodG1sRm9udFNpemUgPSBfcmVmJGh0bWxGb250U2l6ZSA9PT0gdm9pZCAwID8gMTYgOiBfcmVmJGh0bWxGb250U2l6ZSxcbiAgICAgIGFsbFZhcmlhbnRzID0gX3JlZi5hbGxWYXJpYW50cyxcbiAgICAgIHB4VG9SZW0yID0gX3JlZi5weFRvUmVtLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiZm9udEZhbWlseVwiLCBcImZvbnRTaXplXCIsIFwiZm9udFdlaWdodExpZ2h0XCIsIFwiZm9udFdlaWdodFJlZ3VsYXJcIiwgXCJmb250V2VpZ2h0TWVkaXVtXCIsIFwiZm9udFdlaWdodEJvbGRcIiwgXCJodG1sRm9udFNpemVcIiwgXCJhbGxWYXJpYW50c1wiLCBcInB4VG9SZW1cIl0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBmb250U2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBgZm9udFNpemVgIGlzIHJlcXVpcmVkIHRvIGJlIGEgbnVtYmVyLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaHRtbEZvbnRTaXplICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IGBodG1sRm9udFNpemVgIGlzIHJlcXVpcmVkIHRvIGJlIGEgbnVtYmVyLicpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb2VmID0gZm9udFNpemUgLyAxNDtcblxuICB2YXIgcHhUb1JlbSA9IHB4VG9SZW0yIHx8IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHNpemUgLyBodG1sRm9udFNpemUgKiBjb2VmLCBcInJlbVwiKTtcbiAgfTtcblxuICB2YXIgYnVpbGRWYXJpYW50ID0gZnVuY3Rpb24gYnVpbGRWYXJpYW50KGZvbnRXZWlnaHQsIHNpemUsIGxpbmVIZWlnaHQsIGxldHRlclNwYWNpbmcsIGNhc2luZykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBmb250RmFtaWx5OiBmb250RmFtaWx5LFxuICAgICAgZm9udFdlaWdodDogZm9udFdlaWdodCxcbiAgICAgIGZvbnRTaXplOiBweFRvUmVtKHNpemUpLFxuICAgICAgLy8gVW5pdGxlc3MgZm9sbG93aW5nIGh0dHBzOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdGhvdWdodHMvMjAwNi8wMi8wOC91bml0bGVzcy1saW5lLWhlaWdodHMvXG4gICAgICBsaW5lSGVpZ2h0OiBsaW5lSGVpZ2h0XG4gICAgfSwgZm9udEZhbWlseSA9PT0gZGVmYXVsdEZvbnRGYW1pbHkgPyB7XG4gICAgICBsZXR0ZXJTcGFjaW5nOiBcIlwiLmNvbmNhdChyb3VuZChsZXR0ZXJTcGFjaW5nIC8gc2l6ZSksIFwiZW1cIilcbiAgICB9IDoge30sIGNhc2luZywgYWxsVmFyaWFudHMpO1xuICB9O1xuXG4gIHZhciB2YXJpYW50cyA9IHtcbiAgICBoMTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRMaWdodCwgOTYsIDEuMTY3LCAtMS41KSxcbiAgICBoMjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRMaWdodCwgNjAsIDEuMiwgLTAuNSksXG4gICAgaDM6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgNDgsIDEuMTY3LCAwKSxcbiAgICBoNDogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAzNCwgMS4yMzUsIDAuMjUpLFxuICAgIGg1OiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDI0LCAxLjMzNCwgMCksXG4gICAgaDY6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TWVkaXVtLCAyMCwgMS42LCAwLjE1KSxcbiAgICBzdWJ0aXRsZTE6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTYsIDEuNzUsIDAuMTUpLFxuICAgIHN1YnRpdGxlMjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRNZWRpdW0sIDE0LCAxLjU3LCAwLjEpLFxuICAgIGJvZHkxOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDE2LCAxLjUsIDAuMTUpLFxuICAgIGJvZHkyOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDE0LCAxLjQzLCAwLjE1KSxcbiAgICBidXR0b246IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TWVkaXVtLCAxNCwgMS43NSwgMC40LCBjYXNlQWxsQ2FwcyksXG4gICAgY2FwdGlvbjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxMiwgMS42NiwgMC40KSxcbiAgICBvdmVybGluZTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxMiwgMi42NiwgMSwgY2FzZUFsbENhcHMpXG4gIH07XG4gIHJldHVybiBkZWVwbWVyZ2UoX2V4dGVuZHMoe1xuICAgIGh0bWxGb250U2l6ZTogaHRtbEZvbnRTaXplLFxuICAgIHB4VG9SZW06IHB4VG9SZW0sXG4gICAgcm91bmQ6IHJvdW5kLFxuICAgIC8vIFRPRE8gdjU6IHJlbW92ZVxuICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHksXG4gICAgZm9udFNpemU6IGZvbnRTaXplLFxuICAgIGZvbnRXZWlnaHRMaWdodDogZm9udFdlaWdodExpZ2h0LFxuICAgIGZvbnRXZWlnaHRSZWd1bGFyOiBmb250V2VpZ2h0UmVndWxhcixcbiAgICBmb250V2VpZ2h0TWVkaXVtOiBmb250V2VpZ2h0TWVkaXVtLFxuICAgIGZvbnRXZWlnaHRCb2xkOiBmb250V2VpZ2h0Qm9sZFxuICB9LCB2YXJpYW50cyksIG90aGVyLCB7XG4gICAgY2xvbmU6IGZhbHNlIC8vIE5vIG5lZWQgdG8gY2xvbmUgZGVlcFxuXG4gIH0pO1xufSIsInZhciBzaGFkb3dLZXlVbWJyYU9wYWNpdHkgPSAwLjI7XG52YXIgc2hhZG93S2V5UGVudW1icmFPcGFjaXR5ID0gMC4xNDtcbnZhciBzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSA9IDAuMTI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRvdygpIHtcbiAgcmV0dXJuIFtcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDIgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMl0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDMgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbM10sIFwicHggcmdiYSgwLDAsMCxcIikuY29uY2F0KHNoYWRvd0tleVVtYnJhT3BhY2l0eSwgXCIpXCIpLCBcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDQgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDUgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDYgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNl0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDcgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbN10sIFwicHggcmdiYSgwLDAsMCxcIikuY29uY2F0KHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSwgXCIpXCIpLCBcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDggPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbOF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDkgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbOV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDEwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzEwXSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMTEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMTFdLCBcInB4IHJnYmEoMCwwLDAsXCIpLmNvbmNhdChzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSwgXCIpXCIpXS5qb2luKCcsJyk7XG59IC8vIFZhbHVlcyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvYmU4NzQ3Zjk0NTc0NjY5Y2I1ZTdhZGQxYTdjNTRmYTQxYTg5Y2VjNy9wYWNrYWdlcy9tZGMtZWxldmF0aW9uL192YXJpYWJsZXMuc2Nzc1xuXG5cbnZhciBzaGFkb3dzID0gWydub25lJywgY3JlYXRlU2hhZG93KDAsIDIsIDEsIC0xLCAwLCAxLCAxLCAwLCAwLCAxLCAzLCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDEsIC0yLCAwLCAyLCAyLCAwLCAwLCAxLCA1LCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDMsIC0yLCAwLCAzLCA0LCAwLCAwLCAxLCA4LCAwKSwgY3JlYXRlU2hhZG93KDAsIDIsIDQsIC0xLCAwLCA0LCA1LCAwLCAwLCAxLCAxMCwgMCksIGNyZWF0ZVNoYWRvdygwLCAzLCA1LCAtMSwgMCwgNSwgOCwgMCwgMCwgMSwgMTQsIDApLCBjcmVhdGVTaGFkb3coMCwgMywgNSwgLTEsIDAsIDYsIDEwLCAwLCAwLCAxLCAxOCwgMCksIGNyZWF0ZVNoYWRvdygwLCA0LCA1LCAtMiwgMCwgNywgMTAsIDEsIDAsIDIsIDE2LCAxKSwgY3JlYXRlU2hhZG93KDAsIDUsIDUsIC0zLCAwLCA4LCAxMCwgMSwgMCwgMywgMTQsIDIpLCBjcmVhdGVTaGFkb3coMCwgNSwgNiwgLTMsIDAsIDksIDEyLCAxLCAwLCAzLCAxNiwgMiksIGNyZWF0ZVNoYWRvdygwLCA2LCA2LCAtMywgMCwgMTAsIDE0LCAxLCAwLCA0LCAxOCwgMyksIGNyZWF0ZVNoYWRvdygwLCA2LCA3LCAtNCwgMCwgMTEsIDE1LCAxLCAwLCA0LCAyMCwgMyksIGNyZWF0ZVNoYWRvdygwLCA3LCA4LCAtNCwgMCwgMTIsIDE3LCAyLCAwLCA1LCAyMiwgNCksIGNyZWF0ZVNoYWRvdygwLCA3LCA4LCAtNCwgMCwgMTMsIDE5LCAyLCAwLCA1LCAyNCwgNCksIGNyZWF0ZVNoYWRvdygwLCA3LCA5LCAtNCwgMCwgMTQsIDIxLCAyLCAwLCA1LCAyNiwgNCksIGNyZWF0ZVNoYWRvdygwLCA4LCA5LCAtNSwgMCwgMTUsIDIyLCAyLCAwLCA2LCAyOCwgNSksIGNyZWF0ZVNoYWRvdygwLCA4LCAxMCwgLTUsIDAsIDE2LCAyNCwgMiwgMCwgNiwgMzAsIDUpLCBjcmVhdGVTaGFkb3coMCwgOCwgMTEsIC01LCAwLCAxNywgMjYsIDIsIDAsIDYsIDMyLCA1KSwgY3JlYXRlU2hhZG93KDAsIDksIDExLCAtNSwgMCwgMTgsIDI4LCAyLCAwLCA3LCAzNCwgNiksIGNyZWF0ZVNoYWRvdygwLCA5LCAxMiwgLTYsIDAsIDE5LCAyOSwgMiwgMCwgNywgMzYsIDYpLCBjcmVhdGVTaGFkb3coMCwgMTAsIDEzLCAtNiwgMCwgMjAsIDMxLCAzLCAwLCA4LCAzOCwgNyksIGNyZWF0ZVNoYWRvdygwLCAxMCwgMTMsIC02LCAwLCAyMSwgMzMsIDMsIDAsIDgsIDQwLCA3KSwgY3JlYXRlU2hhZG93KDAsIDEwLCAxNCwgLTYsIDAsIDIyLCAzNSwgMywgMCwgOCwgNDIsIDcpLCBjcmVhdGVTaGFkb3coMCwgMTEsIDE0LCAtNywgMCwgMjMsIDM2LCAzLCAwLCA5LCA0NCwgOCksIGNyZWF0ZVNoYWRvdygwLCAxMSwgMTUsIC03LCAwLCAyNCwgMzgsIDMsIDAsIDksIDQ2LCA4KV07XG5leHBvcnQgZGVmYXVsdCBzaGFkb3dzOyIsInZhciBzaGFwZSA9IHtcbiAgYm9yZGVyUmFkaXVzOiA0XG59O1xuZXhwb3J0IGRlZmF1bHQgc2hhcGU7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCByZXNwb25zaXZlUHJvcFR5cGUgZnJvbSAnLi9yZXNwb25zaXZlUHJvcFR5cGUnO1xuaW1wb3J0IHsgaGFuZGxlQnJlYWtwb2ludHMgfSBmcm9tICcuL2JyZWFrcG9pbnRzJztcbmltcG9ydCBtZXJnZSBmcm9tICcuL21lcmdlJztcbmltcG9ydCBtZW1vaXplIGZyb20gJy4vbWVtb2l6ZSc7XG52YXIgcHJvcGVydGllcyA9IHtcbiAgbTogJ21hcmdpbicsXG4gIHA6ICdwYWRkaW5nJ1xufTtcbnZhciBkaXJlY3Rpb25zID0ge1xuICB0OiAnVG9wJyxcbiAgcjogJ1JpZ2h0JyxcbiAgYjogJ0JvdHRvbScsXG4gIGw6ICdMZWZ0JyxcbiAgeDogWydMZWZ0JywgJ1JpZ2h0J10sXG4gIHk6IFsnVG9wJywgJ0JvdHRvbSddXG59O1xudmFyIGFsaWFzZXMgPSB7XG4gIG1hcmdpblg6ICdteCcsXG4gIG1hcmdpblk6ICdteScsXG4gIHBhZGRpbmdYOiAncHgnLFxuICBwYWRkaW5nWTogJ3B5J1xufTsgLy8gbWVtb2l6ZSgpIGltcGFjdDpcbi8vIEZyb20gMzAwLDAwMCBvcHMvc2VjXG4vLyBUbyAzNTAsMDAwIG9wcy9zZWNcblxudmFyIGdldENzc1Byb3BlcnRpZXMgPSBtZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gIC8vIEl0J3Mgbm90IGEgc2hvcnRoYW5kIG5vdGF0aW9uLlxuICBpZiAocHJvcC5sZW5ndGggPiAyKSB7XG4gICAgaWYgKGFsaWFzZXNbcHJvcF0pIHtcbiAgICAgIHByb3AgPSBhbGlhc2VzW3Byb3BdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW3Byb3BdO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfcHJvcCRzcGxpdCA9IHByb3Auc3BsaXQoJycpLFxuICAgICAgX3Byb3Akc3BsaXQyID0gX3NsaWNlZFRvQXJyYXkoX3Byb3Akc3BsaXQsIDIpLFxuICAgICAgYSA9IF9wcm9wJHNwbGl0MlswXSxcbiAgICAgIGIgPSBfcHJvcCRzcGxpdDJbMV07XG5cbiAgdmFyIHByb3BlcnR5ID0gcHJvcGVydGllc1thXTtcbiAgdmFyIGRpcmVjdGlvbiA9IGRpcmVjdGlvbnNbYl0gfHwgJyc7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGRpcmVjdGlvbikgPyBkaXJlY3Rpb24ubWFwKGZ1bmN0aW9uIChkaXIpIHtcbiAgICByZXR1cm4gcHJvcGVydHkgKyBkaXI7XG4gIH0pIDogW3Byb3BlcnR5ICsgZGlyZWN0aW9uXTtcbn0pO1xudmFyIHNwYWNpbmdLZXlzID0gWydtJywgJ210JywgJ21yJywgJ21iJywgJ21sJywgJ214JywgJ215JywgJ3AnLCAncHQnLCAncHInLCAncGInLCAncGwnLCAncHgnLCAncHknLCAnbWFyZ2luJywgJ21hcmdpblRvcCcsICdtYXJnaW5SaWdodCcsICdtYXJnaW5Cb3R0b20nLCAnbWFyZ2luTGVmdCcsICdtYXJnaW5YJywgJ21hcmdpblknLCAncGFkZGluZycsICdwYWRkaW5nVG9wJywgJ3BhZGRpbmdSaWdodCcsICdwYWRkaW5nQm90dG9tJywgJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdYJywgJ3BhZGRpbmdZJ107XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVW5hcnlTcGFjaW5nKHRoZW1lKSB7XG4gIHZhciB0aGVtZVNwYWNpbmcgPSB0aGVtZS5zcGFjaW5nIHx8IDg7XG5cbiAgaWYgKHR5cGVvZiB0aGVtZVNwYWNpbmcgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhYnMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYWJzICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogRXhwZWN0ZWQgc3BhY2luZyBhcmd1bWVudCB0byBiZSBhIG51bWJlciwgZ290IFwiLmNvbmNhdChhYnMsIFwiLlwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoZW1lU3BhY2luZyAqIGFicztcbiAgICB9O1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodGhlbWVTcGFjaW5nKSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYWJzKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYWJzID4gdGhlbWVTcGFjaW5nLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgdmFsdWUgcHJvdmlkZWQgKFwiLmNvbmNhdChhYnMsIFwiKSBvdmVyZmxvd3MuXCIpLCBcIlRoZSBzdXBwb3J0ZWQgdmFsdWVzIGFyZTogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHRoZW1lU3BhY2luZyksIFwiLlwiKSwgXCJcIi5jb25jYXQoYWJzLCBcIiA+IFwiKS5jb25jYXQodGhlbWVTcGFjaW5nLmxlbmd0aCAtIDEsIFwiLCB5b3UgbmVlZCB0byBhZGQgdGhlIG1pc3NpbmcgdmFsdWVzLlwiKV0uam9pbignXFxuJykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGVtZVNwYWNpbmdbYWJzXTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0aGVtZVNwYWNpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdGhlbWVTcGFjaW5nO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgYHRoZW1lLnNwYWNpbmdgIHZhbHVlIChcIi5jb25jYXQodGhlbWVTcGFjaW5nLCBcIikgaXMgaW52YWxpZC5cIiksICdJdCBzaG91bGQgYmUgYSBudW1iZXIsIGFuIGFycmF5IG9yIGEgZnVuY3Rpb24uJ10uam9pbignXFxuJykpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZSh0cmFuc2Zvcm1lciwgcHJvcFZhbHVlKSB7XG4gIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAnc3RyaW5nJyB8fCBwcm9wVmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBwcm9wVmFsdWU7XG4gIH1cblxuICB2YXIgYWJzID0gTWF0aC5hYnMocHJvcFZhbHVlKTtcbiAgdmFyIHRyYW5zZm9ybWVkID0gdHJhbnNmb3JtZXIoYWJzKTtcblxuICBpZiAocHJvcFZhbHVlID49IDApIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIHRyYW5zZm9ybWVkID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiAtdHJhbnNmb3JtZWQ7XG4gIH1cblxuICByZXR1cm4gXCItXCIuY29uY2F0KHRyYW5zZm9ybWVkKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVGcm9tUHJvcFZhbHVlKGNzc1Byb3BlcnRpZXMsIHRyYW5zZm9ybWVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcFZhbHVlKSB7XG4gICAgcmV0dXJuIGNzc1Byb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGNzc1Byb3BlcnR5KSB7XG4gICAgICBhY2NbY3NzUHJvcGVydHldID0gZ2V0VmFsdWUodHJhbnNmb3JtZXIsIHByb3BWYWx1ZSk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3BhY2luZyhwcm9wcykge1xuICB2YXIgdGhlbWUgPSBwcm9wcy50aGVtZTtcbiAgdmFyIHRyYW5zZm9ybWVyID0gY3JlYXRlVW5hcnlTcGFjaW5nKHRoZW1lKTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BzKS5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAvLyBVc2luZyBhIGhhc2ggY29tcHV0YXRpb24gb3ZlciBhbiBhcnJheSBpdGVyYXRpb24gY291bGQgYmUgZmFzdGVyLCBidXQgd2l0aCBvbmx5IDI4IGl0ZW1zLFxuICAgIC8vIGl0J3MgZG9lc24ndCB3b3J0aCB0aGUgYnVuZGxlIHNpemUuXG4gICAgaWYgKHNwYWNpbmdLZXlzLmluZGV4T2YocHJvcCkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY3NzUHJvcGVydGllcyA9IGdldENzc1Byb3BlcnRpZXMocHJvcCk7XG4gICAgdmFyIHN0eWxlRnJvbVByb3BWYWx1ZSA9IGdldFN0eWxlRnJvbVByb3BWYWx1ZShjc3NQcm9wZXJ0aWVzLCB0cmFuc2Zvcm1lcik7XG4gICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BdO1xuICAgIHJldHVybiBoYW5kbGVCcmVha3BvaW50cyhwcm9wcywgcHJvcFZhbHVlLCBzdHlsZUZyb21Qcm9wVmFsdWUpO1xuICB9KS5yZWR1Y2UobWVyZ2UsIHt9KTtcbn1cblxuc3BhY2luZy5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gc3BhY2luZ0tleXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuICBvYmpba2V5XSA9IHJlc3BvbnNpdmVQcm9wVHlwZTtcbiAgcmV0dXJuIG9iajtcbn0sIHt9KSA6IHt9O1xuc3BhY2luZy5maWx0ZXJQcm9wcyA9IHNwYWNpbmdLZXlzO1xuZXhwb3J0IGRlZmF1bHQgc3BhY2luZzsiLCJpbXBvcnQgeyBjcmVhdGVVbmFyeVNwYWNpbmcgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3lzdGVtJztcbnZhciB3YXJuT25jZTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNwYWNpbmcoKSB7XG4gIHZhciBzcGFjaW5nSW5wdXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDg7XG5cbiAgLy8gQWxyZWFkeSB0cmFuc2Zvcm1lZC5cbiAgaWYgKHNwYWNpbmdJbnB1dC5tdWkpIHtcbiAgICByZXR1cm4gc3BhY2luZ0lucHV0O1xuICB9IC8vIE1hdGVyaWFsIERlc2lnbiBsYXlvdXRzIGFyZSB2aXN1YWxseSBiYWxhbmNlZC4gTW9zdCBtZWFzdXJlbWVudHMgYWxpZ24gdG8gYW4gOGRwIGdyaWQgYXBwbGllZCwgd2hpY2ggYWxpZ25zIGJvdGggc3BhY2luZyBhbmQgdGhlIG92ZXJhbGwgbGF5b3V0LlxuICAvLyBTbWFsbGVyIGNvbXBvbmVudHMsIHN1Y2ggYXMgaWNvbnMgYW5kIHR5cGUsIGNhbiBhbGlnbiB0byBhIDRkcCBncmlkLlxuICAvLyBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9sYXlvdXQvdW5kZXJzdGFuZGluZy1sYXlvdXQuaHRtbCN1c2FnZVxuXG5cbiAgdmFyIHRyYW5zZm9ybSA9IGNyZWF0ZVVuYXJ5U3BhY2luZyh7XG4gICAgc3BhY2luZzogc3BhY2luZ0lucHV0XG4gIH0pO1xuXG4gIHZhciBzcGFjaW5nID0gZnVuY3Rpb24gc3BhY2luZygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghKGFyZ3MubGVuZ3RoIDw9IDQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogVG9vIG1hbnkgYXJndW1lbnRzIHByb3ZpZGVkLCBleHBlY3RlZCBiZXR3ZWVuIDAgYW5kIDQsIGdvdCBcIi5jb25jYXQoYXJncy5sZW5ndGgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm0oMSk7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtKGFyZ3NbMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBhcmdzLm1hcChmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudDtcbiAgICAgIH1cblxuICAgICAgdmFyIG91dHB1dCA9IHRyYW5zZm9ybShhcmd1bWVudCk7XG4gICAgICByZXR1cm4gdHlwZW9mIG91dHB1dCA9PT0gJ251bWJlcicgPyBcIlwiLmNvbmNhdChvdXRwdXQsIFwicHhcIikgOiBvdXRwdXQ7XG4gICAgfSkuam9pbignICcpO1xuICB9OyAvLyBCYWNrd2FyZCBjb21wYXRpYmlsaXR5LCB0byByZW1vdmUgaW4gdjUuXG5cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3BhY2luZywgJ3VuaXQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXdhcm5PbmNlIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IHRoZW1lLnNwYWNpbmcudW5pdCB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLicsICdJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdjUuJywgJ1lvdSBjYW4gcmVwbGFjZSBgdGhlbWUuc3BhY2luZy51bml0ICogeWAgd2l0aCBgdGhlbWUuc3BhY2luZyh5KWAuJywgJycsICdZb3UgY2FuIHVzZSB0aGUgYGh0dHBzOi8vZ2l0aHViLmNvbS9tdWktb3JnL21hdGVyaWFsLXVpL3RyZWUvbWFzdGVyL3BhY2thZ2VzL21hdGVyaWFsLXVpLWNvZGVtb2QvUkVBRE1FLm1kI3RoZW1lLXNwYWNpbmctYXBpYCBtaWdyYXRpb24gaGVscGVyIHRvIG1ha2UgdGhlIHByb2Nlc3Mgc21vb3RoZXIuJ10uam9pbignXFxuJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2Fybk9uY2UgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3BhY2luZ0lucHV0O1xuICAgIH1cbiAgfSk7XG4gIHNwYWNpbmcubXVpID0gdHJ1ZTtcbiAgcmV0dXJuIHNwYWNpbmc7XG59IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbi8vIEZvbGxvdyBodHRwczovL21hdGVyaWFsLmdvb2dsZS5jb20vbW90aW9uL2R1cmF0aW9uLWVhc2luZy5odG1sI2R1cmF0aW9uLWVhc2luZy1uYXR1cmFsLWVhc2luZy1jdXJ2ZXNcbi8vIHRvIGxlYXJuIHRoZSBjb250ZXh0IGluIHdoaWNoIGVhY2ggZWFzaW5nIHNob3VsZCBiZSB1c2VkLlxuZXhwb3J0IHZhciBlYXNpbmcgPSB7XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgY29tbW9uIGVhc2luZyBjdXJ2ZS5cbiAgZWFzZUluT3V0OiAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKScsXG4gIC8vIE9iamVjdHMgZW50ZXIgdGhlIHNjcmVlbiBhdCBmdWxsIHZlbG9jaXR5IGZyb20gb2ZmLXNjcmVlbiBhbmRcbiAgLy8gc2xvd2x5IGRlY2VsZXJhdGUgdG8gYSByZXN0aW5nIHBvaW50LlxuICBlYXNlT3V0OiAnY3ViaWMtYmV6aWVyKDAuMCwgMCwgMC4yLCAxKScsXG4gIC8vIE9iamVjdHMgbGVhdmUgdGhlIHNjcmVlbiBhdCBmdWxsIHZlbG9jaXR5LiBUaGV5IGRvIG5vdCBkZWNlbGVyYXRlIHdoZW4gb2ZmLXNjcmVlbi5cbiAgZWFzZUluOiAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSknLFxuICAvLyBUaGUgc2hhcnAgY3VydmUgaXMgdXNlZCBieSBvYmplY3RzIHRoYXQgbWF5IHJldHVybiB0byB0aGUgc2NyZWVuIGF0IGFueSB0aW1lLlxuICBzaGFycDogJ2N1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSknXG59OyAvLyBGb2xsb3cgaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL21vdGlvbi9kdXJhdGlvbi1lYXNpbmcuaHRtbCNkdXJhdGlvbi1lYXNpbmctY29tbW9uLWR1cmF0aW9uc1xuLy8gdG8gbGVhcm4gd2hlbiB1c2Ugd2hhdCB0aW1pbmdcblxuZXhwb3J0IHZhciBkdXJhdGlvbiA9IHtcbiAgc2hvcnRlc3Q6IDE1MCxcbiAgc2hvcnRlcjogMjAwLFxuICBzaG9ydDogMjUwLFxuICAvLyBtb3N0IGJhc2ljIHJlY29tbWVuZGVkIHRpbWluZ1xuICBzdGFuZGFyZDogMzAwLFxuICAvLyB0aGlzIGlzIHRvIGJlIHVzZWQgaW4gY29tcGxleCBhbmltYXRpb25zXG4gIGNvbXBsZXg6IDM3NSxcbiAgLy8gcmVjb21tZW5kZWQgd2hlbiBzb21ldGhpbmcgaXMgZW50ZXJpbmcgc2NyZWVuXG4gIGVudGVyaW5nU2NyZWVuOiAyMjUsXG4gIC8vIHJlY29tbWVuZGVkIHdoZW4gc29tZXRoaW5nIGlzIGxlYXZpbmcgc2NyZWVuXG4gIGxlYXZpbmdTY3JlZW46IDE5NVxufTtcblxuZnVuY3Rpb24gZm9ybWF0TXMobWlsbGlzZWNvbmRzKSB7XG4gIHJldHVybiBcIlwiLmNvbmNhdChNYXRoLnJvdW5kKG1pbGxpc2Vjb25kcyksIFwibXNcIik7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0ucHJvcFxuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtLmR1cmF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0uZWFzaW5nXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW0uZGVsYXlcbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWFzaW5nOiBlYXNpbmcsXG4gIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbJ2FsbCddO1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIHZhciBfb3B0aW9ucyRkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24sXG4gICAgICAgIGR1cmF0aW9uT3B0aW9uID0gX29wdGlvbnMkZHVyYXRpb24gPT09IHZvaWQgMCA/IGR1cmF0aW9uLnN0YW5kYXJkIDogX29wdGlvbnMkZHVyYXRpb24sXG4gICAgICAgIF9vcHRpb25zJGVhc2luZyA9IG9wdGlvbnMuZWFzaW5nLFxuICAgICAgICBlYXNpbmdPcHRpb24gPSBfb3B0aW9ucyRlYXNpbmcgPT09IHZvaWQgMCA/IGVhc2luZy5lYXNlSW5PdXQgOiBfb3B0aW9ucyRlYXNpbmcsXG4gICAgICAgIF9vcHRpb25zJGRlbGF5ID0gb3B0aW9ucy5kZWxheSxcbiAgICAgICAgZGVsYXkgPSBfb3B0aW9ucyRkZWxheSA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJGRlbGF5LFxuICAgICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRpb25zLCBbXCJkdXJhdGlvblwiLCBcImVhc2luZ1wiLCBcImRlbGF5XCJdKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgICAgIH07XG5cbiAgICAgIHZhciBpc051bWJlciA9IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgICAgfTtcblxuICAgICAgaWYgKCFpc1N0cmluZyhwcm9wcykgJiYgIUFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBBcmd1bWVudCBcInByb3BzXCIgbXVzdCBiZSBhIHN0cmluZyBvciBBcnJheS4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc051bWJlcihkdXJhdGlvbk9wdGlvbikgJiYgIWlzU3RyaW5nKGR1cmF0aW9uT3B0aW9uKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFxcXCJkdXJhdGlvblxcXCIgbXVzdCBiZSBhIG51bWJlciBvciBhIHN0cmluZyBidXQgZm91bmQgXCIuY29uY2F0KGR1cmF0aW9uT3B0aW9uLCBcIi5cIikpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzU3RyaW5nKGVhc2luZ09wdGlvbikpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFwiZWFzaW5nXCIgbXVzdCBiZSBhIHN0cmluZy4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc051bWJlcihkZWxheSkgJiYgIWlzU3RyaW5nKGRlbGF5KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogQXJndW1lbnQgXCJkZWxheVwiIG11c3QgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhvdGhlcikubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogVW5yZWNvZ25pemVkIGFyZ3VtZW50KHMpIFtcIi5jb25jYXQoT2JqZWN0LmtleXMob3RoZXIpLmpvaW4oJywnKSwgXCJdLlwiKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChBcnJheS5pc0FycmF5KHByb3BzKSA/IHByb3BzIDogW3Byb3BzXSkubWFwKGZ1bmN0aW9uIChhbmltYXRlZFByb3ApIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChhbmltYXRlZFByb3AsIFwiIFwiKS5jb25jYXQodHlwZW9mIGR1cmF0aW9uT3B0aW9uID09PSAnc3RyaW5nJyA/IGR1cmF0aW9uT3B0aW9uIDogZm9ybWF0TXMoZHVyYXRpb25PcHRpb24pLCBcIiBcIikuY29uY2F0KGVhc2luZ09wdGlvbiwgXCIgXCIpLmNvbmNhdCh0eXBlb2YgZGVsYXkgPT09ICdzdHJpbmcnID8gZGVsYXkgOiBmb3JtYXRNcyhkZWxheSkpO1xuICAgIH0pLmpvaW4oJywnKTtcbiAgfSxcbiAgZ2V0QXV0b0hlaWdodER1cmF0aW9uOiBmdW5jdGlvbiBnZXRBdXRvSGVpZ2h0RHVyYXRpb24oaGVpZ2h0KSB7XG4gICAgaWYgKCFoZWlnaHQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHZhciBjb25zdGFudCA9IGhlaWdodCAvIDM2OyAvLyBodHRwczovL3d3dy53b2xmcmFtYWxwaGEuY29tL2lucHV0Lz9pPSg0KyUyQisxNSsqKyh4KyUyRiszNispKyoqKzAuMjUrJTJCKyh4KyUyRiszNikrJTJGKzUpKyorMTBcblxuICAgIHJldHVybiBNYXRoLnJvdW5kKCg0ICsgMTUgKiBNYXRoLnBvdyhjb25zdGFudCwgMC4yNSkgKyBjb25zdGFudCAvIDUpICogMTApO1xuICB9XG59OyIsIi8vIFdlIG5lZWQgdG8gY2VudHJhbGl6ZSB0aGUgekluZGV4IGRlZmluaXRpb25zIGFzIHRoZXkgd29ya1xuLy8gbGlrZSBnbG9iYWwgdmFsdWVzIGluIHRoZSBicm93c2VyLlxudmFyIHpJbmRleCA9IHtcbiAgbW9iaWxlU3RlcHBlcjogMTAwMCxcbiAgc3BlZWREaWFsOiAxMDUwLFxuICBhcHBCYXI6IDExMDAsXG4gIGRyYXdlcjogMTIwMCxcbiAgbW9kYWw6IDEzMDAsXG4gIHNuYWNrYmFyOiAxNDAwLFxuICB0b29sdGlwOiAxNTAwXG59O1xuZXhwb3J0IGRlZmF1bHQgekluZGV4OyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBjcmVhdGVCcmVha3BvaW50cyBmcm9tICcuL2NyZWF0ZUJyZWFrcG9pbnRzJztcbmltcG9ydCBjcmVhdGVNaXhpbnMgZnJvbSAnLi9jcmVhdGVNaXhpbnMnO1xuaW1wb3J0IGNyZWF0ZVBhbGV0dGUgZnJvbSAnLi9jcmVhdGVQYWxldHRlJztcbmltcG9ydCBjcmVhdGVUeXBvZ3JhcGh5IGZyb20gJy4vY3JlYXRlVHlwb2dyYXBoeSc7XG5pbXBvcnQgc2hhZG93cyBmcm9tICcuL3NoYWRvd3MnO1xuaW1wb3J0IHNoYXBlIGZyb20gJy4vc2hhcGUnO1xuaW1wb3J0IGNyZWF0ZVNwYWNpbmcgZnJvbSAnLi9jcmVhdGVTcGFjaW5nJztcbmltcG9ydCB0cmFuc2l0aW9ucyBmcm9tICcuL3RyYW5zaXRpb25zJztcbmltcG9ydCB6SW5kZXggZnJvbSAnLi96SW5kZXgnO1xuXG5mdW5jdGlvbiBjcmVhdGVNdWlUaGVtZSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gIHZhciBfb3B0aW9ucyRicmVha3BvaW50cyA9IG9wdGlvbnMuYnJlYWtwb2ludHMsXG4gICAgICBicmVha3BvaW50c0lucHV0ID0gX29wdGlvbnMkYnJlYWtwb2ludHMgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkYnJlYWtwb2ludHMsXG4gICAgICBfb3B0aW9ucyRtaXhpbnMgPSBvcHRpb25zLm1peGlucyxcbiAgICAgIG1peGluc0lucHV0ID0gX29wdGlvbnMkbWl4aW5zID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zJG1peGlucyxcbiAgICAgIF9vcHRpb25zJHBhbGV0dGUgPSBvcHRpb25zLnBhbGV0dGUsXG4gICAgICBwYWxldHRlSW5wdXQgPSBfb3B0aW9ucyRwYWxldHRlID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zJHBhbGV0dGUsXG4gICAgICBzcGFjaW5nSW5wdXQgPSBvcHRpb25zLnNwYWNpbmcsXG4gICAgICBfb3B0aW9ucyR0eXBvZ3JhcGh5ID0gb3B0aW9ucy50eXBvZ3JhcGh5LFxuICAgICAgdHlwb2dyYXBoeUlucHV0ID0gX29wdGlvbnMkdHlwb2dyYXBoeSA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyR0eXBvZ3JhcGh5LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0aW9ucywgW1wiYnJlYWtwb2ludHNcIiwgXCJtaXhpbnNcIiwgXCJwYWxldHRlXCIsIFwic3BhY2luZ1wiLCBcInR5cG9ncmFwaHlcIl0pO1xuXG4gIHZhciBwYWxldHRlID0gY3JlYXRlUGFsZXR0ZShwYWxldHRlSW5wdXQpO1xuICB2YXIgYnJlYWtwb2ludHMgPSBjcmVhdGVCcmVha3BvaW50cyhicmVha3BvaW50c0lucHV0KTtcbiAgdmFyIHNwYWNpbmcgPSBjcmVhdGVTcGFjaW5nKHNwYWNpbmdJbnB1dCk7XG4gIHZhciBtdWlUaGVtZSA9IGRlZXBtZXJnZSh7XG4gICAgYnJlYWtwb2ludHM6IGJyZWFrcG9pbnRzLFxuICAgIGRpcmVjdGlvbjogJ2x0cicsXG4gICAgbWl4aW5zOiBjcmVhdGVNaXhpbnMoYnJlYWtwb2ludHMsIHNwYWNpbmcsIG1peGluc0lucHV0KSxcbiAgICBvdmVycmlkZXM6IHt9LFxuICAgIC8vIEluamVjdCBjdXN0b20gc3R5bGVzXG4gICAgcGFsZXR0ZTogcGFsZXR0ZSxcbiAgICBwcm9wczoge30sXG4gICAgLy8gUHJvdmlkZSBkZWZhdWx0IHByb3BzXG4gICAgc2hhZG93czogc2hhZG93cyxcbiAgICB0eXBvZ3JhcGh5OiBjcmVhdGVUeXBvZ3JhcGh5KHBhbGV0dGUsIHR5cG9ncmFwaHlJbnB1dCksXG4gICAgc3BhY2luZzogc3BhY2luZyxcbiAgICBzaGFwZTogc2hhcGUsXG4gICAgdHJhbnNpdGlvbnM6IHRyYW5zaXRpb25zLFxuICAgIHpJbmRleDogekluZGV4XG4gIH0sIG90aGVyKTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBtdWlUaGVtZSA9IGFyZ3MucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGFyZ3VtZW50KSB7XG4gICAgcmV0dXJuIGRlZXBtZXJnZShhY2MsIGFyZ3VtZW50KTtcbiAgfSwgbXVpVGhlbWUpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFyIHBzZXVkb0NsYXNzZXMgPSBbJ2NoZWNrZWQnLCAnZGlzYWJsZWQnLCAnZXJyb3InLCAnZm9jdXNlZCcsICdmb2N1c1Zpc2libGUnLCAncmVxdWlyZWQnLCAnZXhwYW5kZWQnLCAnc2VsZWN0ZWQnXTtcblxuICAgIHZhciB0cmF2ZXJzZSA9IGZ1bmN0aW9uIHRyYXZlcnNlKG5vZGUsIHBhcmVudEtleSkge1xuICAgICAgdmFyIGRlcHRoID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAxO1xuICAgICAgdmFyIGtleTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pbiwgbm8tcmVzdHJpY3RlZC1zeW50YXhcblxuICAgICAgZm9yIChrZXkgaW4gbm9kZSkge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2tleV07XG5cbiAgICAgICAgaWYgKGRlcHRoID09PSAxKSB7XG4gICAgICAgICAgaWYgKGtleS5pbmRleE9mKCdNdWknKSA9PT0gMCAmJiBjaGlsZCkge1xuICAgICAgICAgICAgdHJhdmVyc2UoY2hpbGQsIGtleSwgZGVwdGggKyAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocHNldWRvQ2xhc3Nlcy5pbmRleE9mKGtleSkgIT09IC0xICYmIE9iamVjdC5rZXlzKGNoaWxkKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoW1wiTWF0ZXJpYWwtVUk6IFRoZSBgXCIuY29uY2F0KHBhcmVudEtleSwgXCJgIGNvbXBvbmVudCBpbmNyZWFzZXMgXCIpICsgXCJ0aGUgQ1NTIHNwZWNpZmljaXR5IG9mIHRoZSBgXCIuY29uY2F0KGtleSwgXCJgIGludGVybmFsIHN0YXRlLlwiKSwgJ1lvdSBjYW4gbm90IG92ZXJyaWRlIGl0IGxpa2UgdGhpczogJywgSlNPTi5zdHJpbmdpZnkobm9kZSwgbnVsbCwgMiksICcnLCAnSW5zdGVhZCwgeW91IG5lZWQgdG8gdXNlIHRoZSAkcnVsZU5hbWUgc3ludGF4OicsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgcm9vdDogX2RlZmluZVByb3BlcnR5KHt9LCBcIiYkXCIuY29uY2F0KGtleSksIGNoaWxkKVxuICAgICAgICAgICAgfSwgbnVsbCwgMiksICcnLCAnaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vci9wc2V1ZG8tY2xhc3Nlcy1ndWlkZSddLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICB9IC8vIFJlbW92ZSB0aGUgc3R5bGUgdG8gcHJldmVudCBnbG9iYWwgY29uZmxpY3RzLlxuXG5cbiAgICAgICAgICBub2RlW2tleV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB0cmF2ZXJzZShtdWlUaGVtZS5vdmVycmlkZXMpO1xuICB9XG5cbiAgcmV0dXJuIG11aVRoZW1lO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNdWlUaGVtZTsiLCJ2YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xuZXhwb3J0IGRlZmF1bHQgaGFzU3ltYm9sID8gU3ltYm9sLmZvcignbXVpLm5lc3RlZCcpIDogJ19fVEhFTUVfTkVTVEVEX18nOyIsImltcG9ydCBuZXN0ZWQgZnJvbSAnLi4vVGhlbWVQcm92aWRlci9uZXN0ZWQnO1xuLyoqXG4gKiBUaGlzIGlzIHRoZSBsaXN0IG9mIHRoZSBzdHlsZSBydWxlIG5hbWUgd2UgdXNlIGFzIGRyb3AgaW4gcmVwbGFjZW1lbnQgZm9yIHRoZSBidWlsdC1pblxuICogcHNldWRvIGNsYXNzZXMgKDpjaGVja2VkLCA6ZGlzYWJsZWQsIDpmb2N1c2VkLCBldGMuKS5cbiAqXG4gKiBXaHkgZG8gdGhleSBleGlzdCBpbiB0aGUgZmlyc3QgcGxhY2U/XG4gKiBUaGVzZSBjbGFzc2VzIGFyZSB1c2VkIGF0IGEgc3BlY2lmaWNpdHkgb2YgMi5cbiAqIEl0IGFsbG93cyB0aGVtIHRvIG92ZXJyaWRlIHByZXZpb3VzbHkgZGVmaW5pZWQgc3R5bGVzIGFzIHdlbGwgYXNcbiAqIGJlaW5nIHVudG91Y2hlZCBieSBzaW1wbGUgdXNlciBvdmVycmlkZXMuXG4gKi9cblxudmFyIHBzZXVkb0NsYXNzZXMgPSBbJ2NoZWNrZWQnLCAnZGlzYWJsZWQnLCAnZXJyb3InLCAnZm9jdXNlZCcsICdmb2N1c1Zpc2libGUnLCAncmVxdWlyZWQnLCAnZXhwYW5kZWQnLCAnc2VsZWN0ZWQnXTsgLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoIGdlbmVyYXRlcyB1bmlxdWUgY2xhc3MgbmFtZXMgYmFzZWQgb24gY291bnRlcnMuXG4vLyBXaGVuIG5ldyBnZW5lcmF0b3IgZnVuY3Rpb24gaXMgY3JlYXRlZCwgcnVsZSBjb3VudGVyIGlzIHJlc2V0LlxuLy8gV2UgbmVlZCB0byByZXNldCB0aGUgcnVsZSBjb3VudGVyIGZvciBTU1IgZm9yIGVhY2ggcmVxdWVzdC5cbi8vXG4vLyBJdCdzIGluc3BpcmVkIGJ5XG4vLyBodHRwczovL2dpdGh1Yi5jb20vY3NzaW5qcy9qc3MvYmxvYi80ZTZhMDVkZDNmN2I2NTcyZmRkM2FiMjE2ODYxZDllNDQ2YzIwMzMxL3NyYy91dGlscy9jcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZS5qc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgX29wdGlvbnMkZGlzYWJsZUdsb2JhID0gb3B0aW9ucy5kaXNhYmxlR2xvYmFsLFxuICAgICAgZGlzYWJsZUdsb2JhbCA9IF9vcHRpb25zJGRpc2FibGVHbG9iYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRkaXNhYmxlR2xvYmEsXG4gICAgICBfb3B0aW9ucyRwcm9kdWN0aW9uUHIgPSBvcHRpb25zLnByb2R1Y3Rpb25QcmVmaXgsXG4gICAgICBwcm9kdWN0aW9uUHJlZml4ID0gX29wdGlvbnMkcHJvZHVjdGlvblByID09PSB2b2lkIDAgPyAnanNzJyA6IF9vcHRpb25zJHByb2R1Y3Rpb25QcixcbiAgICAgIF9vcHRpb25zJHNlZWQgPSBvcHRpb25zLnNlZWQsXG4gICAgICBzZWVkID0gX29wdGlvbnMkc2VlZCA9PT0gdm9pZCAwID8gJycgOiBfb3B0aW9ucyRzZWVkO1xuICB2YXIgc2VlZFByZWZpeCA9IHNlZWQgPT09ICcnID8gJycgOiBcIlwiLmNvbmNhdChzZWVkLCBcIi1cIik7XG4gIHZhciBydWxlQ291bnRlciA9IDA7XG5cbiAgdmFyIGdldE5leHRDb3VudGVySWQgPSBmdW5jdGlvbiBnZXROZXh0Q291bnRlcklkKCkge1xuICAgIHJ1bGVDb3VudGVyICs9IDE7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHJ1bGVDb3VudGVyID49IDFlMTApIHtcbiAgICAgICAgY29uc29sZS53YXJuKFsnTWF0ZXJpYWwtVUk6IFlvdSBtaWdodCBoYXZlIGEgbWVtb3J5IGxlYWsuJywgJ1RoZSBydWxlQ291bnRlciBpcyBub3Qgc3VwcG9zZWQgdG8gZ3JvdyB0aGF0IG11Y2guJ10uam9pbignJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBydWxlQ291bnRlcjtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHJ1bGUsIHN0eWxlU2hlZXQpIHtcbiAgICB2YXIgbmFtZSA9IHN0eWxlU2hlZXQub3B0aW9ucy5uYW1lOyAvLyBJcyBhIGdsb2JhbCBzdGF0aWMgTVVJIHN0eWxlP1xuXG4gICAgaWYgKG5hbWUgJiYgbmFtZS5pbmRleE9mKCdNdWknKSA9PT0gMCAmJiAhc3R5bGVTaGVldC5vcHRpb25zLmxpbmsgJiYgIWRpc2FibGVHbG9iYWwpIHtcbiAgICAgIC8vIFdlIGNhbiB1c2UgYSBzaG9ydGhhbmQgY2xhc3MgbmFtZSwgd2UgbmV2ZXIgdXNlIHRoZSBrZXlzIHRvIHN0eWxlIHRoZSBjb21wb25lbnRzLlxuICAgICAgaWYgKHBzZXVkb0NsYXNzZXMuaW5kZXhPZihydWxlLmtleSkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBcIk11aS1cIi5jb25jYXQocnVsZS5rZXkpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJlZml4ID0gXCJcIi5jb25jYXQoc2VlZFByZWZpeCkuY29uY2F0KG5hbWUsIFwiLVwiKS5jb25jYXQocnVsZS5rZXkpO1xuXG4gICAgICBpZiAoIXN0eWxlU2hlZXQub3B0aW9ucy50aGVtZVtuZXN0ZWRdIHx8IHNlZWQgIT09ICcnKSB7XG4gICAgICAgIHJldHVybiBwcmVmaXg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChwcmVmaXgsIFwiLVwiKS5jb25jYXQoZ2V0TmV4dENvdW50ZXJJZCgpKTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHNlZWRQcmVmaXgpLmNvbmNhdChwcm9kdWN0aW9uUHJlZml4KS5jb25jYXQoZ2V0TmV4dENvdW50ZXJJZCgpKTtcbiAgICB9XG5cbiAgICB2YXIgc3VmZml4ID0gXCJcIi5jb25jYXQocnVsZS5rZXksIFwiLVwiKS5jb25jYXQoZ2V0TmV4dENvdW50ZXJJZCgpKTsgLy8gSGVscCB3aXRoIGRlYnVnZ2FiaWxpdHkuXG5cbiAgICBpZiAoc3R5bGVTaGVldC5vcHRpb25zLmNsYXNzTmFtZVByZWZpeCkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHNlZWRQcmVmaXgpLmNvbmNhdChzdHlsZVNoZWV0Lm9wdGlvbnMuY2xhc3NOYW1lUHJlZml4LCBcIi1cIikuY29uY2F0KHN1ZmZpeCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHNlZWRQcmVmaXgpLmNvbmNhdChzdWZmaXgpO1xuICB9O1xufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaGVtZVByb3BzKHBhcmFtcykge1xuICB2YXIgdGhlbWUgPSBwYXJhbXMudGhlbWUsXG4gICAgICBuYW1lID0gcGFyYW1zLm5hbWUsXG4gICAgICBwcm9wcyA9IHBhcmFtcy5wcm9wcztcblxuICBpZiAoIXRoZW1lIHx8ICF0aGVtZS5wcm9wcyB8fCAhdGhlbWUucHJvcHNbbmFtZV0pIHtcbiAgICByZXR1cm4gcHJvcHM7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzLCBjb2RlIGJvcnJvdyBmcm9tIFJlYWN0IHNvdXJjZS5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvMTVhOGYwMzE4MzhhNTUzZTQxYzBiNjZlYjFiY2YxZGE4NDQ4MTA0ZC9wYWNrYWdlcy9yZWFjdC9zcmMvUmVhY3RFbGVtZW50LmpzI0wyMjFcblxuXG4gIHZhciBkZWZhdWx0UHJvcHMgPSB0aGVtZS5wcm9wc1tuYW1lXTtcbiAgdmFyIHByb3BOYW1lO1xuXG4gIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn0iLCJ2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydCB2YXIgaXNCcm93c2VyID0gKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih3aW5kb3cpKSA9PT0gXCJvYmplY3RcIiAmJiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZG9jdW1lbnQpKSA9PT0gJ29iamVjdCcgJiYgZG9jdW1lbnQubm9kZVR5cGUgPT09IDk7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQnJvd3NlcjtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IGlzSW5Ccm93c2VyIGZyb20gJ2lzLWluLWJyb3dzZXInO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcblxudmFyIHBsYWluT2JqZWN0Q29uc3RydXJjdG9yID0ge30uY29uc3RydWN0b3I7XG5mdW5jdGlvbiBjbG9uZVN0eWxlKHN0eWxlKSB7XG4gIGlmIChzdHlsZSA9PSBudWxsIHx8IHR5cGVvZiBzdHlsZSAhPT0gJ29iamVjdCcpIHJldHVybiBzdHlsZTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGUpKSByZXR1cm4gc3R5bGUubWFwKGNsb25lU3R5bGUpO1xuICBpZiAoc3R5bGUuY29uc3RydWN0b3IgIT09IHBsYWluT2JqZWN0Q29uc3RydXJjdG9yKSByZXR1cm4gc3R5bGU7XG4gIHZhciBuZXdTdHlsZSA9IHt9O1xuXG4gIGZvciAodmFyIG5hbWUgaW4gc3R5bGUpIHtcbiAgICBuZXdTdHlsZVtuYW1lXSA9IGNsb25lU3R5bGUoc3R5bGVbbmFtZV0pO1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0eWxlO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHJ1bGUgaW5zdGFuY2UuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlUnVsZShuYW1lLCBkZWNsLCBvcHRpb25zKSB7XG4gIGlmIChuYW1lID09PSB2b2lkIDApIHtcbiAgICBuYW1lID0gJ3VubmFtZWQnO1xuICB9XG5cbiAgdmFyIGpzcyA9IG9wdGlvbnMuanNzO1xuICB2YXIgZGVjbENvcHkgPSBjbG9uZVN0eWxlKGRlY2wpO1xuICB2YXIgcnVsZSA9IGpzcy5wbHVnaW5zLm9uQ3JlYXRlUnVsZShuYW1lLCBkZWNsQ29weSwgb3B0aW9ucyk7XG4gIGlmIChydWxlKSByZXR1cm4gcnVsZTsgLy8gSXQgaXMgYW4gYXQtcnVsZSBhbmQgaXQgaGFzIG5vIGluc3RhbmNlLlxuXG4gIGlmIChuYW1lWzBdID09PSAnQCcpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIFVua25vd24gcnVsZSBcIiArIG5hbWUpIDogdm9pZCAwO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBqb2luID0gZnVuY3Rpb24gam9pbih2YWx1ZSwgYnkpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBSZW1vdmUgIWltcG9ydGFudCBmcm9tIHRoZSB2YWx1ZSwgaXQgd2lsbCBiZSByZWFkZGVkIGxhdGVyLlxuICAgIGlmICh2YWx1ZVtpXSA9PT0gJyFpbXBvcnRhbnQnKSBicmVhaztcbiAgICBpZiAocmVzdWx0KSByZXN1bHQgKz0gYnk7XG4gICAgcmVzdWx0ICs9IHZhbHVlW2ldO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYXJyYXkgdmFsdWVzIHRvIHN0cmluZy5cbiAqXG4gKiBgbWFyZ2luOiBbWyc1cHgnLCAnMTBweCddXWAgPiBgbWFyZ2luOiA1cHggMTBweDtgXG4gKiBgYm9yZGVyOiBbJzFweCcsICcycHgnXWAgPiBgYm9yZGVyOiAxcHgsIDJweDtgXG4gKiBgbWFyZ2luOiBbWyc1cHgnLCAnMTBweCddLCAnIWltcG9ydGFudCddYCA+IGBtYXJnaW46IDVweCAxMHB4ICFpbXBvcnRhbnQ7YFxuICogYGNvbG9yOiBbJ3JlZCcsICFpbXBvcnRhbnRdYCA+IGBjb2xvcjogcmVkICFpbXBvcnRhbnQ7YFxuICovXG52YXIgdG9Dc3NWYWx1ZSA9IGZ1bmN0aW9uIHRvQ3NzVmFsdWUodmFsdWUsIGlnbm9yZUltcG9ydGFudCkge1xuICBpZiAoaWdub3JlSW1wb3J0YW50ID09PSB2b2lkIDApIHtcbiAgICBpZ25vcmVJbXBvcnRhbnQgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgdmFyIGNzc1ZhbHVlID0gJyc7IC8vIFN1cHBvcnQgc3BhY2Ugc2VwYXJhdGVkIHZhbHVlcyB2aWEgYFtbJzVweCcsICcxMHB4J11dYC5cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZVswXSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodmFsdWVbaV0gPT09ICchaW1wb3J0YW50JykgYnJlYWs7XG4gICAgICBpZiAoY3NzVmFsdWUpIGNzc1ZhbHVlICs9ICcsICc7XG4gICAgICBjc3NWYWx1ZSArPSBqb2luKHZhbHVlW2ldLCAnICcpO1xuICAgIH1cbiAgfSBlbHNlIGNzc1ZhbHVlID0gam9pbih2YWx1ZSwgJywgJyk7IC8vIEFkZCAhaW1wb3J0YW50LCBiZWNhdXNlIGl0IHdhcyBpZ25vcmVkLlxuXG5cbiAgaWYgKCFpZ25vcmVJbXBvcnRhbnQgJiYgdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0gPT09ICchaW1wb3J0YW50Jykge1xuICAgIGNzc1ZhbHVlICs9ICcgIWltcG9ydGFudCc7XG4gIH1cblxuICByZXR1cm4gY3NzVmFsdWU7XG59O1xuXG4vKipcbiAqIEluZGVudCBhIHN0cmluZy5cbiAqIGh0dHA6Ly9qc3BlcmYuY29tL2FycmF5LWpvaW4tdnMtZm9yXG4gKi9cbmZ1bmN0aW9uIGluZGVudFN0cihzdHIsIGluZGVudCkge1xuICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGluZGVudDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCArPSAnICAnO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdCArIHN0cjtcbn1cbi8qKlxuICogQ29udmVydHMgYSBSdWxlIHRvIENTUyBzdHJpbmcuXG4gKi9cblxuXG5mdW5jdGlvbiB0b0NzcyhzZWxlY3Rvciwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKCFzdHlsZSkgcmV0dXJuIHJlc3VsdDtcbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJGluZGVudCA9IF9vcHRpb25zLmluZGVudCxcbiAgICAgIGluZGVudCA9IF9vcHRpb25zJGluZGVudCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJGluZGVudDtcbiAgdmFyIGZhbGxiYWNrcyA9IHN0eWxlLmZhbGxiYWNrcztcbiAgaWYgKHNlbGVjdG9yKSBpbmRlbnQrKzsgLy8gQXBwbHkgZmFsbGJhY2tzIGZpcnN0LlxuXG4gIGlmIChmYWxsYmFja3MpIHtcbiAgICAvLyBBcnJheSBzeW50YXgge2ZhbGxiYWNrczogW3twcm9wOiB2YWx1ZX1dfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGZhbGxiYWNrcykpIHtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBmYWxsYmFja3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHZhciBmYWxsYmFjayA9IGZhbGxiYWNrc1tpbmRleF07XG5cbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBmYWxsYmFjaykge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGZhbGxiYWNrW3Byb3BdO1xuXG4gICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHJlc3VsdCArPSAnXFxuJztcbiAgICAgICAgICAgIHJlc3VsdCArPSBcIlwiICsgaW5kZW50U3RyKHByb3AgKyBcIjogXCIgKyB0b0Nzc1ZhbHVlKHZhbHVlKSArIFwiO1wiLCBpbmRlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPYmplY3Qgc3ludGF4IHtmYWxsYmFja3M6IHtwcm9wOiB2YWx1ZX19XG4gICAgICBmb3IgKHZhciBfcHJvcCBpbiBmYWxsYmFja3MpIHtcbiAgICAgICAgdmFyIF92YWx1ZSA9IGZhbGxiYWNrc1tfcHJvcF07XG5cbiAgICAgICAgaWYgKF92YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCkgcmVzdWx0ICs9ICdcXG4nO1xuICAgICAgICAgIHJlc3VsdCArPSBcIlwiICsgaW5kZW50U3RyKF9wcm9wICsgXCI6IFwiICsgdG9Dc3NWYWx1ZShfdmFsdWUpICsgXCI7XCIsIGluZGVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBfcHJvcDIgaW4gc3R5bGUpIHtcbiAgICB2YXIgX3ZhbHVlMiA9IHN0eWxlW19wcm9wMl07XG5cbiAgICBpZiAoX3ZhbHVlMiAhPSBudWxsICYmIF9wcm9wMiAhPT0gJ2ZhbGxiYWNrcycpIHtcbiAgICAgIGlmIChyZXN1bHQpIHJlc3VsdCArPSAnXFxuJztcbiAgICAgIHJlc3VsdCArPSBcIlwiICsgaW5kZW50U3RyKF9wcm9wMiArIFwiOiBcIiArIHRvQ3NzVmFsdWUoX3ZhbHVlMikgKyBcIjtcIiwgaW5kZW50KTtcbiAgICB9XG4gIH0gLy8gQWxsb3cgZW1wdHkgc3R5bGUgaW4gdGhpcyBjYXNlLCBiZWNhdXNlIHByb3BlcnRpZXMgd2lsbCBiZSBhZGRlZCBkeW5hbWljYWxseS5cblxuXG4gIGlmICghcmVzdWx0ICYmICFvcHRpb25zLmFsbG93RW1wdHkpIHJldHVybiByZXN1bHQ7IC8vIFdoZW4gcnVsZSBpcyBiZWluZyBzdHJpbmdpZmllZCBiZWZvcmUgc2VsZWN0b3Igd2FzIGRlZmluZWQuXG5cbiAgaWYgKCFzZWxlY3RvcikgcmV0dXJuIHJlc3VsdDtcbiAgaW5kZW50LS07XG4gIGlmIChyZXN1bHQpIHJlc3VsdCA9IFwiXFxuXCIgKyByZXN1bHQgKyBcIlxcblwiO1xuICByZXR1cm4gaW5kZW50U3RyKHNlbGVjdG9yICsgXCIge1wiICsgcmVzdWx0LCBpbmRlbnQpICsgaW5kZW50U3RyKCd9JywgaW5kZW50KTtcbn1cblxudmFyIGVzY2FwZVJlZ2V4ID0gLyhbW1xcXS4jKiQ+PCt+PXxeOigpLFwiJ2BcXHNdKS9nO1xudmFyIG5hdGl2ZUVzY2FwZSA9IHR5cGVvZiBDU1MgIT09ICd1bmRlZmluZWQnICYmIENTUy5lc2NhcGU7XG52YXIgZXNjYXBlID0gKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIG5hdGl2ZUVzY2FwZSA/IG5hdGl2ZUVzY2FwZShzdHIpIDogc3RyLnJlcGxhY2UoZXNjYXBlUmVnZXgsICdcXFxcJDEnKTtcbn0pO1xuXG52YXIgQmFzZVN0eWxlUnVsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEJhc2VTdHlsZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdzdHlsZSc7XG4gICAgdGhpcy5rZXkgPSB2b2lkIDA7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3R5bGUgPSB2b2lkIDA7XG4gICAgdGhpcy5yZW5kZXJlciA9IHZvaWQgMDtcbiAgICB0aGlzLnJlbmRlcmFibGUgPSB2b2lkIDA7XG4gICAgdGhpcy5vcHRpb25zID0gdm9pZCAwO1xuICAgIHZhciBzaGVldCA9IG9wdGlvbnMuc2hlZXQsXG4gICAgICAgIFJlbmRlcmVyID0gb3B0aW9ucy5SZW5kZXJlcjtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICBpZiAoc2hlZXQpIHRoaXMucmVuZGVyZXIgPSBzaGVldC5yZW5kZXJlcjtlbHNlIGlmIChSZW5kZXJlcikgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgb3Igc2V0IGEgc3R5bGUgcHJvcGVydHkuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IEJhc2VTdHlsZVJ1bGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5wcm9wID0gZnVuY3Rpb24gcHJvcChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIC8vIEl0J3MgYSBnZXR0ZXIuXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLnN0eWxlW25hbWVdOyAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiB0aGUgdmFsdWUgaGFzIG5vdCBjaGFuZ2VkLlxuXG4gICAgdmFyIGZvcmNlID0gb3B0aW9ucyA/IG9wdGlvbnMuZm9yY2UgOiBmYWxzZTtcbiAgICBpZiAoIWZvcmNlICYmIHRoaXMuc3R5bGVbbmFtZV0gPT09IHZhbHVlKSByZXR1cm4gdGhpcztcbiAgICB2YXIgbmV3VmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICghb3B0aW9ucyB8fCBvcHRpb25zLnByb2Nlc3MgIT09IGZhbHNlKSB7XG4gICAgICBuZXdWYWx1ZSA9IHRoaXMub3B0aW9ucy5qc3MucGx1Z2lucy5vbkNoYW5nZVZhbHVlKHZhbHVlLCBuYW1lLCB0aGlzKTtcbiAgICB9XG5cbiAgICB2YXIgaXNFbXB0eSA9IG5ld1ZhbHVlID09IG51bGwgfHwgbmV3VmFsdWUgPT09IGZhbHNlO1xuICAgIHZhciBpc0RlZmluZWQgPSBuYW1lIGluIHRoaXMuc3R5bGU7IC8vIFZhbHVlIGlzIGVtcHR5IGFuZCB3YXNuJ3QgZGVmaW5lZCBiZWZvcmUuXG5cbiAgICBpZiAoaXNFbXB0eSAmJiAhaXNEZWZpbmVkICYmICFmb3JjZSkgcmV0dXJuIHRoaXM7IC8vIFdlIGFyZSBnb2luZyB0byByZW1vdmUgdGhpcyB2YWx1ZS5cblxuICAgIHZhciByZW1vdmUgPSBpc0VtcHR5ICYmIGlzRGVmaW5lZDtcbiAgICBpZiAocmVtb3ZlKSBkZWxldGUgdGhpcy5zdHlsZVtuYW1lXTtlbHNlIHRoaXMuc3R5bGVbbmFtZV0gPSBuZXdWYWx1ZTsgLy8gUmVuZGVyYWJsZSBpcyBkZWZpbmVkIGlmIFN0eWxlU2hlZXQgb3B0aW9uIGBsaW5rYCBpcyB0cnVlLlxuXG4gICAgaWYgKHRoaXMucmVuZGVyYWJsZSAmJiB0aGlzLnJlbmRlcmVyKSB7XG4gICAgICBpZiAocmVtb3ZlKSB0aGlzLnJlbmRlcmVyLnJlbW92ZVByb3BlcnR5KHRoaXMucmVuZGVyYWJsZSwgbmFtZSk7ZWxzZSB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMucmVuZGVyYWJsZSwgbmFtZSwgbmV3VmFsdWUpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIHNoZWV0ID0gdGhpcy5vcHRpb25zLnNoZWV0O1xuXG4gICAgaWYgKHNoZWV0ICYmIHNoZWV0LmF0dGFjaGVkKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCAnW0pTU10gUnVsZSBpcyBub3QgbGlua2VkLiBNaXNzaW5nIHNoZWV0IG9wdGlvbiBcImxpbms6IHRydWVcIi4nKSA6IHZvaWQgMDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gQmFzZVN0eWxlUnVsZTtcbn0oKTtcbnZhciBTdHlsZVJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9CYXNlU3R5bGVSdWxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKFN0eWxlUnVsZSwgX0Jhc2VTdHlsZVJ1bGUpO1xuXG4gIGZ1bmN0aW9uIFN0eWxlUnVsZShrZXksIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQmFzZVN0eWxlUnVsZS5jYWxsKHRoaXMsIGtleSwgc3R5bGUsIG9wdGlvbnMpIHx8IHRoaXM7XG4gICAgX3RoaXMuc2VsZWN0b3JUZXh0ID0gdm9pZCAwO1xuICAgIF90aGlzLmlkID0gdm9pZCAwO1xuICAgIF90aGlzLnJlbmRlcmFibGUgPSB2b2lkIDA7XG4gICAgdmFyIHNlbGVjdG9yID0gb3B0aW9ucy5zZWxlY3RvcixcbiAgICAgICAgc2NvcGVkID0gb3B0aW9ucy5zY29wZWQsXG4gICAgICAgIHNoZWV0ID0gb3B0aW9ucy5zaGVldCxcbiAgICAgICAgZ2VuZXJhdGVJZCA9IG9wdGlvbnMuZ2VuZXJhdGVJZDtcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgX3RoaXMuc2VsZWN0b3JUZXh0ID0gc2VsZWN0b3I7XG4gICAgfSBlbHNlIGlmIChzY29wZWQgIT09IGZhbHNlKSB7XG4gICAgICBfdGhpcy5pZCA9IGdlbmVyYXRlSWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIHNoZWV0KTtcbiAgICAgIF90aGlzLnNlbGVjdG9yVGV4dCA9IFwiLlwiICsgZXNjYXBlKF90aGlzLmlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBzZWxlY3RvciBzdHJpbmcuXG4gICAqIEF0dGVudGlvbjogdXNlIHRoaXMgd2l0aCBjYXV0aW9uLiBNb3N0IGJyb3dzZXJzIGRpZG4ndCBpbXBsZW1lbnRcbiAgICogc2VsZWN0b3JUZXh0IHNldHRlciwgc28gdGhpcyBtYXkgcmVzdWx0IGluIHJlcmVuZGVyaW5nIG9mIGVudGlyZSBTdHlsZSBTaGVldC5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvMiA9IFN0eWxlUnVsZS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIEFwcGx5IHJ1bGUgdG8gYW4gZWxlbWVudCBpbmxpbmUuXG4gICAqL1xuICBfcHJvdG8yLmFwcGx5VG8gPSBmdW5jdGlvbiBhcHBseVRvKHJlbmRlcmFibGUpIHtcbiAgICB2YXIgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyO1xuXG4gICAgaWYgKHJlbmRlcmVyKSB7XG4gICAgICB2YXIganNvbiA9IHRoaXMudG9KU09OKCk7XG5cbiAgICAgIGZvciAodmFyIHByb3AgaW4ganNvbikge1xuICAgICAgICByZW5kZXJlci5zZXRQcm9wZXJ0eShyZW5kZXJhYmxlLCBwcm9wLCBqc29uW3Byb3BdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBydWxlLlxuICAgKiBGYWxsYmFja3MgYXJlIG5vdCBzdXBwb3J0ZWQuXG4gICAqIFVzZWZ1bCBmb3IgaW5saW5lIHN0eWxlcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8yLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICB2YXIganNvbiA9IHt9O1xuXG4gICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLnN0eWxlKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnN0eWxlW3Byb3BdO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIGpzb25bcHJvcF0gPSB2YWx1ZTtlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkganNvbltwcm9wXSA9IHRvQ3NzVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90bzIudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgdmFyIHNoZWV0ID0gdGhpcy5vcHRpb25zLnNoZWV0O1xuICAgIHZhciBsaW5rID0gc2hlZXQgPyBzaGVldC5vcHRpb25zLmxpbmsgOiBmYWxzZTtcbiAgICB2YXIgb3B0cyA9IGxpbmsgPyBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgYWxsb3dFbXB0eTogdHJ1ZVxuICAgIH0pIDogb3B0aW9ucztcbiAgICByZXR1cm4gdG9Dc3ModGhpcy5zZWxlY3RvclRleHQsIHRoaXMuc3R5bGUsIG9wdHMpO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTdHlsZVJ1bGUsIFt7XG4gICAga2V5OiBcInNlbGVjdG9yXCIsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc2VsZWN0b3IpIHtcbiAgICAgIGlmIChzZWxlY3RvciA9PT0gdGhpcy5zZWxlY3RvclRleHQpIHJldHVybjtcbiAgICAgIHRoaXMuc2VsZWN0b3JUZXh0ID0gc2VsZWN0b3I7XG4gICAgICB2YXIgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyLFxuICAgICAgICAgIHJlbmRlcmFibGUgPSB0aGlzLnJlbmRlcmFibGU7XG4gICAgICBpZiAoIXJlbmRlcmFibGUgfHwgIXJlbmRlcmVyKSByZXR1cm47XG4gICAgICB2YXIgaGFzQ2hhbmdlZCA9IHJlbmRlcmVyLnNldFNlbGVjdG9yKHJlbmRlcmFibGUsIHNlbGVjdG9yKTsgLy8gSWYgc2VsZWN0b3Igc2V0dGVyIGlzIG5vdCBpbXBsZW1lbnRlZCwgcmVyZW5kZXIgdGhlIHJ1bGUuXG5cbiAgICAgIGlmICghaGFzQ2hhbmdlZCkge1xuICAgICAgICByZW5kZXJlci5yZXBsYWNlUnVsZShyZW5kZXJhYmxlLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHNlbGVjdG9yIHN0cmluZy5cbiAgICAgKi9cbiAgICAsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RvclRleHQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN0eWxlUnVsZTtcbn0oQmFzZVN0eWxlUnVsZSk7XG52YXIgcGx1Z2luU3R5bGVSdWxlID0ge1xuICBvbkNyZWF0ZVJ1bGU6IGZ1bmN0aW9uIG9uQ3JlYXRlUnVsZShuYW1lLCBzdHlsZSwgb3B0aW9ucykge1xuICAgIGlmIChuYW1lWzBdID09PSAnQCcgfHwgb3B0aW9ucy5wYXJlbnQgJiYgb3B0aW9ucy5wYXJlbnQudHlwZSA9PT0gJ2tleWZyYW1lcycpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgU3R5bGVSdWxlKG5hbWUsIHN0eWxlLCBvcHRpb25zKTtcbiAgfVxufTtcblxudmFyIGRlZmF1bHRUb1N0cmluZ09wdGlvbnMgPSB7XG4gIGluZGVudDogMSxcbiAgY2hpbGRyZW46IHRydWVcbn07XG52YXIgYXRSZWdFeHAgPSAvQChbXFx3LV0rKS87XG4vKipcbiAqIENvbmRpdGlvbmFsIHJ1bGUgZm9yIEBtZWRpYSwgQHN1cHBvcnRzXG4gKi9cblxudmFyIENvbmRpdGlvbmFsUnVsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvbmRpdGlvbmFsUnVsZShrZXksIHN0eWxlcywgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdjb25kaXRpb25hbCc7XG4gICAgdGhpcy5hdCA9IHZvaWQgMDtcbiAgICB0aGlzLmtleSA9IHZvaWQgMDtcbiAgICB0aGlzLnF1ZXJ5ID0gdm9pZCAwO1xuICAgIHRoaXMucnVsZXMgPSB2b2lkIDA7XG4gICAgdGhpcy5vcHRpb25zID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlcmFibGUgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdmFyIGF0TWF0Y2ggPSBrZXkubWF0Y2goYXRSZWdFeHApO1xuICAgIHRoaXMuYXQgPSBhdE1hdGNoID8gYXRNYXRjaFsxXSA6ICd1bmtub3duJzsgLy8gS2V5IG1pZ2h0IGNvbnRhaW4gYSB1bmlxdWUgc3VmZml4IGluIGNhc2UgdGhlIGBuYW1lYCBwYXNzZWQgYnkgdXNlciB3YXMgZHVwbGljYXRlLlxuXG4gICAgdGhpcy5xdWVyeSA9IG9wdGlvbnMubmFtZSB8fCBcIkBcIiArIHRoaXMuYXQ7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnJ1bGVzID0gbmV3IFJ1bGVMaXN0KF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KSk7XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIHN0eWxlcykge1xuICAgICAgdGhpcy5ydWxlcy5hZGQobmFtZSwgc3R5bGVzW25hbWVdKTtcbiAgICB9XG5cbiAgICB0aGlzLnJ1bGVzLnByb2Nlc3MoKTtcbiAgfVxuICAvKipcbiAgICogR2V0IGEgcnVsZS5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gQ29uZGl0aW9uYWxSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0UnVsZSA9IGZ1bmN0aW9uIGdldFJ1bGUobmFtZSkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLmdldChuYW1lKTtcbiAgfVxuICAvKipcbiAgICogR2V0IGluZGV4IG9mIGEgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YocnVsZSkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLmluZGV4T2YocnVsZSk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgcmVnaXN0ZXIgcnVsZSwgcnVuIHBsdWdpbnMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmFkZFJ1bGUgPSBmdW5jdGlvbiBhZGRSdWxlKG5hbWUsIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgdmFyIHJ1bGUgPSB0aGlzLnJ1bGVzLmFkZChuYW1lLCBzdHlsZSwgb3B0aW9ucyk7XG4gICAgaWYgKCFydWxlKSByZXR1cm4gbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMuanNzLnBsdWdpbnMub25Qcm9jZXNzUnVsZShydWxlKTtcbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRUb1N0cmluZ09wdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuaW5kZW50ID09IG51bGwpIG9wdGlvbnMuaW5kZW50ID0gZGVmYXVsdFRvU3RyaW5nT3B0aW9ucy5pbmRlbnQ7XG4gICAgaWYgKG9wdGlvbnMuY2hpbGRyZW4gPT0gbnVsbCkgb3B0aW9ucy5jaGlsZHJlbiA9IGRlZmF1bHRUb1N0cmluZ09wdGlvbnMuY2hpbGRyZW47XG5cbiAgICBpZiAob3B0aW9ucy5jaGlsZHJlbiA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzLnF1ZXJ5ICsgXCIge31cIjtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnJ1bGVzLnRvU3RyaW5nKG9wdGlvbnMpO1xuICAgIHJldHVybiBjaGlsZHJlbiA/IHRoaXMucXVlcnkgKyBcIiB7XFxuXCIgKyBjaGlsZHJlbiArIFwiXFxufVwiIDogJyc7XG4gIH07XG5cbiAgcmV0dXJuIENvbmRpdGlvbmFsUnVsZTtcbn0oKTtcbnZhciBrZXlSZWdFeHAgPSAvQG1lZGlhfEBzdXBwb3J0c1xccysvO1xudmFyIHBsdWdpbkNvbmRpdGlvbmFsUnVsZSA9IHtcbiAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUoa2V5LCBzdHlsZXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ga2V5UmVnRXhwLnRlc3Qoa2V5KSA/IG5ldyBDb25kaXRpb25hbFJ1bGUoa2V5LCBzdHlsZXMsIG9wdGlvbnMpIDogbnVsbDtcbiAgfVxufTtcblxudmFyIGRlZmF1bHRUb1N0cmluZ09wdGlvbnMkMSA9IHtcbiAgaW5kZW50OiAxLFxuICBjaGlsZHJlbjogdHJ1ZVxufTtcbnZhciBuYW1lUmVnRXhwID0gL0BrZXlmcmFtZXNcXHMrKFtcXHctXSspLztcbi8qKlxuICogUnVsZSBmb3IgQGtleWZyYW1lc1xuICovXG5cbnZhciBLZXlmcmFtZXNSdWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gS2V5ZnJhbWVzUnVsZShrZXksIGZyYW1lcywgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdrZXlmcmFtZXMnO1xuICAgIHRoaXMuYXQgPSAnQGtleWZyYW1lcyc7XG4gICAgdGhpcy5rZXkgPSB2b2lkIDA7XG4gICAgdGhpcy5uYW1lID0gdm9pZCAwO1xuICAgIHRoaXMuaWQgPSB2b2lkIDA7XG4gICAgdGhpcy5ydWxlcyA9IHZvaWQgMDtcbiAgICB0aGlzLm9wdGlvbnMgPSB2b2lkIDA7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVuZGVyYWJsZSA9IHZvaWQgMDtcbiAgICB2YXIgbmFtZU1hdGNoID0ga2V5Lm1hdGNoKG5hbWVSZWdFeHApO1xuXG4gICAgaWYgKG5hbWVNYXRjaCAmJiBuYW1lTWF0Y2hbMV0pIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWVNYXRjaFsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uYW1lID0gJ25vbmFtZSc7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIEJhZCBrZXlmcmFtZXMgbmFtZSBcIiArIGtleSkgOiB2b2lkIDA7XG4gICAgfVxuXG4gICAgdGhpcy5rZXkgPSB0aGlzLnR5cGUgKyBcIi1cIiArIHRoaXMubmFtZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHZhciBzY29wZWQgPSBvcHRpb25zLnNjb3BlZCxcbiAgICAgICAgc2hlZXQgPSBvcHRpb25zLnNoZWV0LFxuICAgICAgICBnZW5lcmF0ZUlkID0gb3B0aW9ucy5nZW5lcmF0ZUlkO1xuICAgIHRoaXMuaWQgPSBzY29wZWQgPT09IGZhbHNlID8gdGhpcy5uYW1lIDogZXNjYXBlKGdlbmVyYXRlSWQodGhpcywgc2hlZXQpKTtcbiAgICB0aGlzLnJ1bGVzID0gbmV3IFJ1bGVMaXN0KF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KSk7XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIGZyYW1lcykge1xuICAgICAgdGhpcy5ydWxlcy5hZGQobmFtZSwgZnJhbWVzW25hbWVdLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgICBwYXJlbnQ6IHRoaXNcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB0aGlzLnJ1bGVzLnByb2Nlc3MoKTtcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gS2V5ZnJhbWVzUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0VG9TdHJpbmdPcHRpb25zJDE7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuaW5kZW50ID09IG51bGwpIG9wdGlvbnMuaW5kZW50ID0gZGVmYXVsdFRvU3RyaW5nT3B0aW9ucyQxLmluZGVudDtcbiAgICBpZiAob3B0aW9ucy5jaGlsZHJlbiA9PSBudWxsKSBvcHRpb25zLmNoaWxkcmVuID0gZGVmYXVsdFRvU3RyaW5nT3B0aW9ucyQxLmNoaWxkcmVuO1xuXG4gICAgaWYgKG9wdGlvbnMuY2hpbGRyZW4gPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdCArIFwiIFwiICsgdGhpcy5pZCArIFwiIHt9XCI7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5ydWxlcy50b1N0cmluZyhvcHRpb25zKTtcbiAgICBpZiAoY2hpbGRyZW4pIGNoaWxkcmVuID0gXCJcXG5cIiArIGNoaWxkcmVuICsgXCJcXG5cIjtcbiAgICByZXR1cm4gdGhpcy5hdCArIFwiIFwiICsgdGhpcy5pZCArIFwiIHtcIiArIGNoaWxkcmVuICsgXCJ9XCI7XG4gIH07XG5cbiAgcmV0dXJuIEtleWZyYW1lc1J1bGU7XG59KCk7XG52YXIga2V5UmVnRXhwJDEgPSAvQGtleWZyYW1lc1xccysvO1xudmFyIHJlZlJlZ0V4cCA9IC9cXCQoW1xcdy1dKykvZztcblxudmFyIGZpbmRSZWZlcmVuY2VkS2V5ZnJhbWUgPSBmdW5jdGlvbiBmaW5kUmVmZXJlbmNlZEtleWZyYW1lKHZhbCwga2V5ZnJhbWVzKSB7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWwucmVwbGFjZShyZWZSZWdFeHAsIGZ1bmN0aW9uIChtYXRjaCwgbmFtZSkge1xuICAgICAgaWYgKG5hbWUgaW4ga2V5ZnJhbWVzKSB7XG4gICAgICAgIHJldHVybiBrZXlmcmFtZXNbbmFtZV07XG4gICAgICB9XG5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gUmVmZXJlbmNlZCBrZXlmcmFtZXMgcnVsZSBcXFwiXCIgKyBuYW1lICsgXCJcXFwiIGlzIG5vdCBkZWZpbmVkLlwiKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59O1xuLyoqXG4gKiBSZXBsYWNlIHRoZSByZWZlcmVuY2UgZm9yIGEgYW5pbWF0aW9uIG5hbWUuXG4gKi9cblxuXG52YXIgcmVwbGFjZVJlZiA9IGZ1bmN0aW9uIHJlcGxhY2VSZWYoc3R5bGUsIHByb3AsIGtleWZyYW1lcykge1xuICB2YXIgdmFsdWUgPSBzdHlsZVtwcm9wXTtcbiAgdmFyIHJlZktleWZyYW1lID0gZmluZFJlZmVyZW5jZWRLZXlmcmFtZSh2YWx1ZSwga2V5ZnJhbWVzKTtcblxuICBpZiAocmVmS2V5ZnJhbWUgIT09IHZhbHVlKSB7XG4gICAgc3R5bGVbcHJvcF0gPSByZWZLZXlmcmFtZTtcbiAgfVxufTtcblxudmFyIHBsdWdpbiA9IHtcbiAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUoa2V5LCBmcmFtZXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5UmVnRXhwJDEudGVzdChrZXkpID8gbmV3IEtleWZyYW1lc1J1bGUoa2V5LCBmcmFtZXMsIG9wdGlvbnMpIDogbnVsbDtcbiAgfSxcbiAgLy8gQW5pbWF0aW9uIG5hbWUgcmVmIHJlcGxhY2VyLlxuICBvblByb2Nlc3NTdHlsZTogZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUsIHJ1bGUsIHNoZWV0KSB7XG4gICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3N0eWxlJyB8fCAhc2hlZXQpIHJldHVybiBzdHlsZTtcbiAgICBpZiAoJ2FuaW1hdGlvbi1uYW1lJyBpbiBzdHlsZSkgcmVwbGFjZVJlZihzdHlsZSwgJ2FuaW1hdGlvbi1uYW1lJywgc2hlZXQua2V5ZnJhbWVzKTtcbiAgICBpZiAoJ2FuaW1hdGlvbicgaW4gc3R5bGUpIHJlcGxhY2VSZWYoc3R5bGUsICdhbmltYXRpb24nLCBzaGVldC5rZXlmcmFtZXMpO1xuICAgIHJldHVybiBzdHlsZTtcbiAgfSxcbiAgb25DaGFuZ2VWYWx1ZTogZnVuY3Rpb24gb25DaGFuZ2VWYWx1ZSh2YWwsIHByb3AsIHJ1bGUpIHtcbiAgICB2YXIgc2hlZXQgPSBydWxlLm9wdGlvbnMuc2hlZXQ7XG5cbiAgICBpZiAoIXNoZWV0KSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHN3aXRjaCAocHJvcCkge1xuICAgICAgY2FzZSAnYW5pbWF0aW9uJzpcbiAgICAgICAgcmV0dXJuIGZpbmRSZWZlcmVuY2VkS2V5ZnJhbWUodmFsLCBzaGVldC5rZXlmcmFtZXMpO1xuXG4gICAgICBjYXNlICdhbmltYXRpb24tbmFtZSc6XG4gICAgICAgIHJldHVybiBmaW5kUmVmZXJlbmNlZEtleWZyYW1lKHZhbCwgc2hlZXQua2V5ZnJhbWVzKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBLZXlmcmFtZVJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9CYXNlU3R5bGVSdWxlKSB7XG4gIF9pbmhlcml0c0xvb3NlKEtleWZyYW1lUnVsZSwgX0Jhc2VTdHlsZVJ1bGUpO1xuXG4gIGZ1bmN0aW9uIEtleWZyYW1lUnVsZSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfQmFzZVN0eWxlUnVsZS5jYWxsLmFwcGx5KF9CYXNlU3R5bGVSdWxlLCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuICAgIF90aGlzLnJlbmRlcmFibGUgPSB2b2lkIDA7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEtleWZyYW1lUnVsZS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgdmFyIHNoZWV0ID0gdGhpcy5vcHRpb25zLnNoZWV0O1xuICAgIHZhciBsaW5rID0gc2hlZXQgPyBzaGVldC5vcHRpb25zLmxpbmsgOiBmYWxzZTtcbiAgICB2YXIgb3B0cyA9IGxpbmsgPyBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgYWxsb3dFbXB0eTogdHJ1ZVxuICAgIH0pIDogb3B0aW9ucztcbiAgICByZXR1cm4gdG9Dc3ModGhpcy5rZXksIHRoaXMuc3R5bGUsIG9wdHMpO1xuICB9O1xuXG4gIHJldHVybiBLZXlmcmFtZVJ1bGU7XG59KEJhc2VTdHlsZVJ1bGUpO1xudmFyIHBsdWdpbktleWZyYW1lUnVsZSA9IHtcbiAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLnBhcmVudCAmJiBvcHRpb25zLnBhcmVudC50eXBlID09PSAna2V5ZnJhbWVzJykge1xuICAgICAgcmV0dXJuIG5ldyBLZXlmcmFtZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbnZhciBGb250RmFjZVJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGb250RmFjZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdmb250LWZhY2UnO1xuICAgIHRoaXMuYXQgPSAnQGZvbnQtZmFjZSc7XG4gICAgdGhpcy5rZXkgPSB2b2lkIDA7XG4gICAgdGhpcy5zdHlsZSA9IHZvaWQgMDtcbiAgICB0aGlzLm9wdGlvbnMgPSB2b2lkIDA7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVuZGVyYWJsZSA9IHZvaWQgMDtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gRm9udEZhY2VSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5zdHlsZSkpIHtcbiAgICAgIHZhciBzdHIgPSAnJztcblxuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuc3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHN0ciArPSB0b0Nzcyh0aGlzLmF0LCB0aGlzLnN0eWxlW2luZGV4XSk7XG4gICAgICAgIGlmICh0aGlzLnN0eWxlW2luZGV4ICsgMV0pIHN0ciArPSAnXFxuJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9Dc3ModGhpcy5hdCwgdGhpcy5zdHlsZSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgcmV0dXJuIEZvbnRGYWNlUnVsZTtcbn0oKTtcbnZhciBrZXlSZWdFeHAkMiA9IC9AZm9udC1mYWNlLztcbnZhciBwbHVnaW5Gb250RmFjZVJ1bGUgPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ga2V5UmVnRXhwJDIudGVzdChrZXkpID8gbmV3IEZvbnRGYWNlUnVsZShrZXksIHN0eWxlLCBvcHRpb25zKSA6IG51bGw7XG4gIH1cbn07XG5cbnZhciBWaWV3cG9ydFJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBWaWV3cG9ydFJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICd2aWV3cG9ydCc7XG4gICAgdGhpcy5hdCA9ICdAdmlld3BvcnQnO1xuICAgIHRoaXMua2V5ID0gdm9pZCAwO1xuICAgIHRoaXMuc3R5bGUgPSB2b2lkIDA7XG4gICAgdGhpcy5vcHRpb25zID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlcmFibGUgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFZpZXdwb3J0UnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIHJldHVybiB0b0Nzcyh0aGlzLmtleSwgdGhpcy5zdHlsZSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgcmV0dXJuIFZpZXdwb3J0UnVsZTtcbn0oKTtcbnZhciBwbHVnaW5WaWV3cG9ydFJ1bGUgPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ga2V5ID09PSAnQHZpZXdwb3J0JyB8fCBrZXkgPT09ICdALW1zLXZpZXdwb3J0JyA/IG5ldyBWaWV3cG9ydFJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykgOiBudWxsO1xuICB9XG59O1xuXG52YXIgU2ltcGxlUnVsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNpbXBsZVJ1bGUoa2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdzaW1wbGUnO1xuICAgIHRoaXMua2V5ID0gdm9pZCAwO1xuICAgIHRoaXMudmFsdWUgPSB2b2lkIDA7XG4gICAgdGhpcy5vcHRpb25zID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlcmFibGUgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblxuXG4gIHZhciBfcHJvdG8gPSBTaW1wbGVSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIHZhciBzdHIgPSAnJztcblxuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudmFsdWUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHN0ciArPSB0aGlzLmtleSArIFwiIFwiICsgdGhpcy52YWx1ZVtpbmRleF0gKyBcIjtcIjtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVbaW5kZXggKyAxXSkgc3RyICs9ICdcXG4nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmtleSArIFwiIFwiICsgdGhpcy52YWx1ZSArIFwiO1wiO1xuICB9O1xuXG4gIHJldHVybiBTaW1wbGVSdWxlO1xufSgpO1xudmFyIGtleXNNYXAgPSB7XG4gICdAY2hhcnNldCc6IHRydWUsXG4gICdAaW1wb3J0JzogdHJ1ZSxcbiAgJ0BuYW1lc3BhY2UnOiB0cnVlXG59O1xudmFyIHBsdWdpblNpbXBsZVJ1bGUgPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ga2V5IGluIGtleXNNYXAgPyBuZXcgU2ltcGxlUnVsZShrZXksIHZhbHVlLCBvcHRpb25zKSA6IG51bGw7XG4gIH1cbn07XG5cbnZhciBwbHVnaW5zID0gW3BsdWdpblN0eWxlUnVsZSwgcGx1Z2luQ29uZGl0aW9uYWxSdWxlLCBwbHVnaW4sIHBsdWdpbktleWZyYW1lUnVsZSwgcGx1Z2luRm9udEZhY2VSdWxlLCBwbHVnaW5WaWV3cG9ydFJ1bGUsIHBsdWdpblNpbXBsZVJ1bGVdO1xuXG52YXIgZGVmYXVsdFVwZGF0ZU9wdGlvbnMgPSB7XG4gIHByb2Nlc3M6IHRydWVcbn07XG52YXIgZm9yY2VVcGRhdGVPcHRpb25zID0ge1xuICBmb3JjZTogdHJ1ZSxcbiAgcHJvY2VzczogdHJ1ZVxuICAvKipcbiAgICogQ29udGFpbnMgcnVsZXMgb2JqZWN0cyBhbmQgYWxsb3dzIGFkZGluZy9yZW1vdmluZyBldGMuXG4gICAqIElzIHVzZWQgZm9yIGUuZy4gYnkgYFN0eWxlU2hlZXRgIG9yIGBDb25kaXRpb25hbFJ1bGVgLlxuICAgKi9cblxufTtcblxudmFyIFJ1bGVMaXN0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLy8gUnVsZXMgcmVnaXN0cnkgZm9yIGFjY2VzcyBieSAuZ2V0KCkgbWV0aG9kLlxuICAvLyBJdCBjb250YWlucyB0aGUgc2FtZSBydWxlIHJlZ2lzdGVyZWQgYnkgbmFtZSBhbmQgYnkgc2VsZWN0b3IuXG4gIC8vIE9yaWdpbmFsIHN0eWxlcyBvYmplY3QuXG4gIC8vIFVzZWQgdG8gZW5zdXJlIGNvcnJlY3QgcnVsZXMgb3JkZXIuXG4gIGZ1bmN0aW9uIFJ1bGVMaXN0KG9wdGlvbnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9O1xuICAgIHRoaXMucmF3ID0ge307XG4gICAgdGhpcy5pbmRleCA9IFtdO1xuICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgdGhpcy5vcHRpb25zID0gdm9pZCAwO1xuICAgIHRoaXMuY2xhc3NlcyA9IHZvaWQgMDtcbiAgICB0aGlzLmtleWZyYW1lcyA9IHZvaWQgMDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuY2xhc3NlcyA9IG9wdGlvbnMuY2xhc3NlcztcbiAgICB0aGlzLmtleWZyYW1lcyA9IG9wdGlvbnMua2V5ZnJhbWVzO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIHJlZ2lzdGVyIHJ1bGUuXG4gICAqXG4gICAqIFdpbGwgbm90IHJlbmRlciBhZnRlciBTdHlsZSBTaGVldCB3YXMgcmVuZGVyZWQgdGhlIGZpcnN0IHRpbWUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFJ1bGVMaXN0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKG5hbWUsIGRlY2wsIHJ1bGVPcHRpb25zKSB7XG4gICAgdmFyIF90aGlzJG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHBhcmVudCA9IF90aGlzJG9wdGlvbnMucGFyZW50LFxuICAgICAgICBzaGVldCA9IF90aGlzJG9wdGlvbnMuc2hlZXQsXG4gICAgICAgIGpzcyA9IF90aGlzJG9wdGlvbnMuanNzLFxuICAgICAgICBSZW5kZXJlciA9IF90aGlzJG9wdGlvbnMuUmVuZGVyZXIsXG4gICAgICAgIGdlbmVyYXRlSWQgPSBfdGhpcyRvcHRpb25zLmdlbmVyYXRlSWQsXG4gICAgICAgIHNjb3BlZCA9IF90aGlzJG9wdGlvbnMuc2NvcGVkO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc2VzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIHNoZWV0OiBzaGVldCxcbiAgICAgIGpzczoganNzLFxuICAgICAgUmVuZGVyZXI6IFJlbmRlcmVyLFxuICAgICAgZ2VuZXJhdGVJZDogZ2VuZXJhdGVJZCxcbiAgICAgIHNjb3BlZDogc2NvcGVkLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGtleWZyYW1lczogdGhpcy5rZXlmcmFtZXMsXG4gICAgICBzZWxlY3RvcjogdW5kZWZpbmVkXG4gICAgfSwgcnVsZU9wdGlvbnMpOyAvLyBXaGVuIHVzZXIgdXNlcyAuY3JlYXRlU3R5bGVTaGVldCgpLCBkdXBsaWNhdGUgbmFtZXMgYXJlIG5vdCBwb3NzaWJsZSwgYnV0XG4gICAgLy8gYHNoZWV0LmFkZFJ1bGUoKWAgb3BlbnMgdGhlIGRvb3IgZm9yIGFueSBkdXBsaWNhdGUgcnVsZSBuYW1lLiBXaGVuIHRoaXMgaGFwcGVuc1xuICAgIC8vIHdlIG5lZWQgdG8gbWFrZSB0aGUga2V5IHVuaXF1ZSB3aXRoaW4gdGhpcyBSdWxlTGlzdCBpbnN0YW5jZSBzY29wZS5cblxuXG4gICAgdmFyIGtleSA9IG5hbWU7XG5cbiAgICBpZiAobmFtZSBpbiB0aGlzLnJhdykge1xuICAgICAga2V5ID0gbmFtZSArIFwiLWRcIiArIHRoaXMuY291bnRlcisrO1xuICAgIH0gLy8gV2UgbmVlZCB0byBzYXZlIHRoZSBvcmlnaW5hbCBkZWNsIGJlZm9yZSBjcmVhdGluZyB0aGUgcnVsZVxuICAgIC8vIGJlY2F1c2UgY2FjaGUgcGx1Z2luIG5lZWRzIHRvIHVzZSBpdCBhcyBhIGtleSB0byByZXR1cm4gYSBjYWNoZWQgcnVsZS5cblxuXG4gICAgdGhpcy5yYXdba2V5XSA9IGRlY2w7XG5cbiAgICBpZiAoa2V5IGluIHRoaXMuY2xhc3Nlcykge1xuICAgICAgLy8gRS5nLiBydWxlcyBpbnNpZGUgb2YgQG1lZGlhIGNvbnRhaW5lclxuICAgICAgb3B0aW9ucy5zZWxlY3RvciA9IFwiLlwiICsgZXNjYXBlKHRoaXMuY2xhc3Nlc1trZXldKTtcbiAgICB9XG5cbiAgICB2YXIgcnVsZSA9IGNyZWF0ZVJ1bGUoa2V5LCBkZWNsLCBvcHRpb25zKTtcbiAgICBpZiAoIXJ1bGUpIHJldHVybiBudWxsO1xuICAgIHRoaXMucmVnaXN0ZXIocnVsZSk7XG4gICAgdmFyIGluZGV4ID0gb3B0aW9ucy5pbmRleCA9PT0gdW5kZWZpbmVkID8gdGhpcy5pbmRleC5sZW5ndGggOiBvcHRpb25zLmluZGV4O1xuICAgIHRoaXMuaW5kZXguc3BsaWNlKGluZGV4LCAwLCBydWxlKTtcbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICAvKipcbiAgICogR2V0IGEgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24gZ2V0KG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXBbbmFtZV07XG4gIH1cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShydWxlKSB7XG4gICAgdGhpcy51bnJlZ2lzdGVyKHJ1bGUpO1xuICAgIGRlbGV0ZSB0aGlzLnJhd1tydWxlLmtleV07XG4gICAgdGhpcy5pbmRleC5zcGxpY2UodGhpcy5pbmRleC5pbmRleE9mKHJ1bGUpLCAxKTtcbiAgfVxuICAvKipcbiAgICogR2V0IGluZGV4IG9mIGEgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YocnVsZSkge1xuICAgIHJldHVybiB0aGlzLmluZGV4LmluZGV4T2YocnVsZSk7XG4gIH1cbiAgLyoqXG4gICAqIFJ1biBgb25Qcm9jZXNzUnVsZSgpYCBwbHVnaW5zIG9uIGV2ZXJ5IHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnByb2Nlc3MgPSBmdW5jdGlvbiBwcm9jZXNzKCkge1xuICAgIHZhciBwbHVnaW5zID0gdGhpcy5vcHRpb25zLmpzcy5wbHVnaW5zOyAvLyBXZSBuZWVkIHRvIGNsb25lIGFycmF5IGJlY2F1c2UgaWYgd2UgbW9kaWZ5IHRoZSBpbmRleCBzb21ld2hlcmUgZWxzZSBkdXJpbmcgYSBsb29wXG4gICAgLy8gd2UgZW5kIHVwIHdpdGggdmVyeSBoYXJkLXRvLXRyYWNrLWRvd24gc2lkZSBlZmZlY3RzLlxuXG4gICAgdGhpcy5pbmRleC5zbGljZSgwKS5mb3JFYWNoKHBsdWdpbnMub25Qcm9jZXNzUnVsZSwgcGx1Z2lucyk7XG4gIH1cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgcnVsZSBpbiBgLm1hcGAsIGAuY2xhc3Nlc2AgYW5kIGAua2V5ZnJhbWVzYCBtYXBzLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZWdpc3RlciA9IGZ1bmN0aW9uIHJlZ2lzdGVyKHJ1bGUpIHtcbiAgICB0aGlzLm1hcFtydWxlLmtleV0gPSBydWxlO1xuXG4gICAgaWYgKHJ1bGUgaW5zdGFuY2VvZiBTdHlsZVJ1bGUpIHtcbiAgICAgIHRoaXMubWFwW3J1bGUuc2VsZWN0b3JdID0gcnVsZTtcbiAgICAgIGlmIChydWxlLmlkKSB0aGlzLmNsYXNzZXNbcnVsZS5rZXldID0gcnVsZS5pZDtcbiAgICB9IGVsc2UgaWYgKHJ1bGUgaW5zdGFuY2VvZiBLZXlmcmFtZXNSdWxlICYmIHRoaXMua2V5ZnJhbWVzKSB7XG4gICAgICB0aGlzLmtleWZyYW1lc1tydWxlLm5hbWVdID0gcnVsZS5pZDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXIgYSBydWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51bnJlZ2lzdGVyID0gZnVuY3Rpb24gdW5yZWdpc3RlcihydWxlKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW3J1bGUua2V5XTtcblxuICAgIGlmIChydWxlIGluc3RhbmNlb2YgU3R5bGVSdWxlKSB7XG4gICAgICBkZWxldGUgdGhpcy5tYXBbcnVsZS5zZWxlY3Rvcl07XG4gICAgICBkZWxldGUgdGhpcy5jbGFzc2VzW3J1bGUua2V5XTtcbiAgICB9IGVsc2UgaWYgKHJ1bGUgaW5zdGFuY2VvZiBLZXlmcmFtZXNSdWxlKSB7XG4gICAgICBkZWxldGUgdGhpcy5rZXlmcmFtZXNbcnVsZS5uYW1lXTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgZnVuY3Rpb24gdmFsdWVzIHdpdGggYSBuZXcgZGF0YS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBuYW1lO1xuICAgIHZhciBkYXRhO1xuICAgIHZhciBvcHRpb25zO1xuXG4gICAgaWYgKHR5cGVvZiAoYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF07IC8vICRGbG93Rml4TWVbaW52YWxpZC10dXBsZS1pbmRleF1cblxuICAgICAgZGF0YSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxXTsgLy8gJEZsb3dGaXhNZVtpbnZhbGlkLXR1cGxlLWluZGV4XVxuXG4gICAgICBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzJdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdOyAvLyAkRmxvd0ZpeE1lW2ludmFsaWQtdHVwbGUtaW5kZXhdXG5cbiAgICAgIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV07XG4gICAgICBuYW1lID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgdGhpcy51cGRhdGVPbmUodGhpcy5tYXBbbmFtZV0sIGRhdGEsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pbmRleC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdGhpcy51cGRhdGVPbmUodGhpcy5pbmRleFtpbmRleF0sIGRhdGEsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogRXhlY3V0ZSBwbHVnaW5zLCB1cGRhdGUgcnVsZSBwcm9wcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udXBkYXRlT25lID0gZnVuY3Rpb24gdXBkYXRlT25lKHJ1bGUsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdFVwZGF0ZU9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJG9wdGlvbnMyID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBwbHVnaW5zID0gX3RoaXMkb3B0aW9uczIuanNzLnBsdWdpbnMsXG4gICAgICAgIHNoZWV0ID0gX3RoaXMkb3B0aW9uczIuc2hlZXQ7IC8vIEl0IGlzIGEgcnVsZXMgY29udGFpbmVyIGxpa2UgZm9yIGUuZy4gQ29uZGl0aW9uYWxSdWxlLlxuXG4gICAgaWYgKHJ1bGUucnVsZXMgaW5zdGFuY2VvZiBSdWxlTGlzdCkge1xuICAgICAgcnVsZS5ydWxlcy51cGRhdGUoZGF0YSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlUnVsZSA9IHJ1bGU7XG4gICAgdmFyIHN0eWxlID0gc3R5bGVSdWxlLnN0eWxlO1xuICAgIHBsdWdpbnMub25VcGRhdGUoZGF0YSwgcnVsZSwgc2hlZXQsIG9wdGlvbnMpOyAvLyBXZSByZWx5IG9uIGEgbmV3IGBzdHlsZWAgcmVmIGluIGNhc2UgaXQgd2FzIG11dGF0ZWQgZHVyaW5nIG9uVXBkYXRlIGhvb2suXG5cbiAgICBpZiAob3B0aW9ucy5wcm9jZXNzICYmIHN0eWxlICYmIHN0eWxlICE9PSBzdHlsZVJ1bGUuc3R5bGUpIHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gcnVuIHRoZSBwbHVnaW5zIGluIGNhc2UgbmV3IGBzdHlsZWAgcmVsaWVzIG9uIHN5bnRheCBwbHVnaW5zLlxuICAgICAgcGx1Z2lucy5vblByb2Nlc3NTdHlsZShzdHlsZVJ1bGUuc3R5bGUsIHN0eWxlUnVsZSwgc2hlZXQpOyAvLyBVcGRhdGUgYW5kIGFkZCBwcm9wcy5cblxuICAgICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZVJ1bGUuc3R5bGUpIHtcbiAgICAgICAgdmFyIG5leHRWYWx1ZSA9IHN0eWxlUnVsZS5zdHlsZVtwcm9wXTtcbiAgICAgICAgdmFyIHByZXZWYWx1ZSA9IHN0eWxlW3Byb3BdOyAvLyBXZSBuZWVkIHRvIHVzZSBgZm9yY2U6IHRydWVgIGJlY2F1c2UgYHJ1bGUuc3R5bGVgIGhhcyBiZWVuIHVwZGF0ZWQgZHVyaW5nIG9uVXBkYXRlIGhvb2ssIHNvIGBydWxlLnByb3AoKWAgd2lsbCBub3QgdXBkYXRlIHRoZSBDU1NPTSBydWxlLlxuICAgICAgICAvLyBXZSBkbyB0aGlzIGNvbXBhcmlzb24gdG8gYXZvaWQgdW5uZWVkZWQgYHJ1bGUucHJvcCgpYCBjYWxscywgc2luY2Ugd2UgaGF2ZSB0aGUgb2xkIGBzdHlsZWAgb2JqZWN0IGhlcmUuXG5cbiAgICAgICAgaWYgKG5leHRWYWx1ZSAhPT0gcHJldlZhbHVlKSB7XG4gICAgICAgICAgc3R5bGVSdWxlLnByb3AocHJvcCwgbmV4dFZhbHVlLCBmb3JjZVVwZGF0ZU9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9IC8vIFJlbW92ZSBwcm9wcy5cblxuXG4gICAgICBmb3IgKHZhciBfcHJvcCBpbiBzdHlsZSkge1xuICAgICAgICB2YXIgX25leHRWYWx1ZSA9IHN0eWxlUnVsZS5zdHlsZVtfcHJvcF07XG4gICAgICAgIHZhciBfcHJldlZhbHVlID0gc3R5bGVbX3Byb3BdOyAvLyBXZSBuZWVkIHRvIHVzZSBgZm9yY2U6IHRydWVgIGJlY2F1c2UgYHJ1bGUuc3R5bGVgIGhhcyBiZWVuIHVwZGF0ZWQgZHVyaW5nIG9uVXBkYXRlIGhvb2ssIHNvIGBydWxlLnByb3AoKWAgd2lsbCBub3QgdXBkYXRlIHRoZSBDU1NPTSBydWxlLlxuICAgICAgICAvLyBXZSBkbyB0aGlzIGNvbXBhcmlzb24gdG8gYXZvaWQgdW5uZWVkZWQgYHJ1bGUucHJvcCgpYCBjYWxscywgc2luY2Ugd2UgaGF2ZSB0aGUgb2xkIGBzdHlsZWAgb2JqZWN0IGhlcmUuXG5cbiAgICAgICAgaWYgKF9uZXh0VmFsdWUgPT0gbnVsbCAmJiBfbmV4dFZhbHVlICE9PSBfcHJldlZhbHVlKSB7XG4gICAgICAgICAgc3R5bGVSdWxlLnByb3AoX3Byb3AsIG51bGwsIGZvcmNlVXBkYXRlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENvbnZlcnQgcnVsZXMgdG8gYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgdmFyIHNoZWV0ID0gdGhpcy5vcHRpb25zLnNoZWV0O1xuICAgIHZhciBsaW5rID0gc2hlZXQgPyBzaGVldC5vcHRpb25zLmxpbmsgOiBmYWxzZTtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmluZGV4Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIHJ1bGUgPSB0aGlzLmluZGV4W2luZGV4XTtcbiAgICAgIHZhciBjc3MgPSBydWxlLnRvU3RyaW5nKG9wdGlvbnMpOyAvLyBObyBuZWVkIHRvIHJlbmRlciBhbiBlbXB0eSBydWxlLlxuXG4gICAgICBpZiAoIWNzcyAmJiAhbGluaykgY29udGludWU7XG4gICAgICBpZiAoc3RyKSBzdHIgKz0gJ1xcbic7XG4gICAgICBzdHIgKz0gY3NzO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG4gIH07XG5cbiAgcmV0dXJuIFJ1bGVMaXN0O1xufSgpO1xuXG52YXIgU3R5bGVTaGVldCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQoc3R5bGVzLCBvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gdm9pZCAwO1xuICAgIHRoaXMuZGVwbG95ZWQgPSB2b2lkIDA7XG4gICAgdGhpcy5hdHRhY2hlZCA9IHZvaWQgMDtcbiAgICB0aGlzLnJ1bGVzID0gdm9pZCAwO1xuICAgIHRoaXMucmVuZGVyZXIgPSB2b2lkIDA7XG4gICAgdGhpcy5jbGFzc2VzID0gdm9pZCAwO1xuICAgIHRoaXMua2V5ZnJhbWVzID0gdm9pZCAwO1xuICAgIHRoaXMucXVldWUgPSB2b2lkIDA7XG4gICAgdGhpcy5hdHRhY2hlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVwbG95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNsYXNzZXMgPSB7fTtcbiAgICB0aGlzLmtleWZyYW1lcyA9IHt9O1xuICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBzaGVldDogdGhpcyxcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIGNsYXNzZXM6IHRoaXMuY2xhc3NlcyxcbiAgICAgIGtleWZyYW1lczogdGhpcy5rZXlmcmFtZXNcbiAgICB9KTtcblxuICAgIGlmIChvcHRpb25zLlJlbmRlcmVyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IG9wdGlvbnMuUmVuZGVyZXIodGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5ydWxlcyA9IG5ldyBSdWxlTGlzdCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgbmFtZSBpbiBzdHlsZXMpIHtcbiAgICAgIHRoaXMucnVsZXMuYWRkKG5hbWUsIHN0eWxlc1tuYW1lXSk7XG4gICAgfVxuXG4gICAgdGhpcy5ydWxlcy5wcm9jZXNzKCk7XG4gIH1cbiAgLyoqXG4gICAqIEF0dGFjaCByZW5kZXJhYmxlIHRvIHRoZSByZW5kZXIgdHJlZS5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gU3R5bGVTaGVldC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmF0dGFjaCA9IGZ1bmN0aW9uIGF0dGFjaCgpIHtcbiAgICBpZiAodGhpcy5hdHRhY2hlZCkgcmV0dXJuIHRoaXM7XG4gICAgaWYgKHRoaXMucmVuZGVyZXIpIHRoaXMucmVuZGVyZXIuYXR0YWNoKCk7XG4gICAgdGhpcy5hdHRhY2hlZCA9IHRydWU7IC8vIE9yZGVyIGlzIGltcG9ydGFudCwgYmVjYXVzZSB3ZSBjYW4ndCB1c2UgaW5zZXJ0UnVsZSBBUEkgaWYgc3R5bGUgZWxlbWVudCBpcyBub3QgYXR0YWNoZWQuXG5cbiAgICBpZiAoIXRoaXMuZGVwbG95ZWQpIHRoaXMuZGVwbG95KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZSByZW5kZXJhYmxlIGZyb20gcmVuZGVyIHRyZWUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRldGFjaCA9IGZ1bmN0aW9uIGRldGFjaCgpIHtcbiAgICBpZiAoIXRoaXMuYXR0YWNoZWQpIHJldHVybiB0aGlzO1xuICAgIGlmICh0aGlzLnJlbmRlcmVyKSB0aGlzLnJlbmRlcmVyLmRldGFjaCgpO1xuICAgIHRoaXMuYXR0YWNoZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogQWRkIGEgcnVsZSB0byB0aGUgY3VycmVudCBzdHlsZXNoZWV0LlxuICAgKiBXaWxsIGluc2VydCBhIHJ1bGUgYWxzbyBhZnRlciB0aGUgc3R5bGVzaGVldCBoYXMgYmVlbiByZW5kZXJlZCBmaXJzdCB0aW1lLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5hZGRSdWxlID0gZnVuY3Rpb24gYWRkUnVsZShuYW1lLCBkZWNsLCBvcHRpb25zKSB7XG4gICAgdmFyIHF1ZXVlID0gdGhpcy5xdWV1ZTsgLy8gUGx1Z2lucyBjYW4gY3JlYXRlIHJ1bGVzLlxuICAgIC8vIEluIG9yZGVyIHRvIHByZXNlcnZlIHRoZSByaWdodCBvcmRlciwgd2UgbmVlZCB0byBxdWV1ZSBhbGwgYC5hZGRSdWxlYCBjYWxscyxcbiAgICAvLyB3aGljaCBoYXBwZW4gYWZ0ZXIgdGhlIGZpcnN0IGBydWxlcy5hZGQoKWAgY2FsbC5cblxuICAgIGlmICh0aGlzLmF0dGFjaGVkICYmICFxdWV1ZSkgdGhpcy5xdWV1ZSA9IFtdO1xuICAgIHZhciBydWxlID0gdGhpcy5ydWxlcy5hZGQobmFtZSwgZGVjbCwgb3B0aW9ucyk7XG4gICAgaWYgKCFydWxlKSByZXR1cm4gbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMuanNzLnBsdWdpbnMub25Qcm9jZXNzUnVsZShydWxlKTtcblxuICAgIGlmICh0aGlzLmF0dGFjaGVkKSB7XG4gICAgICBpZiAoIXRoaXMuZGVwbG95ZWQpIHJldHVybiBydWxlOyAvLyBEb24ndCBpbnNlcnQgcnVsZSBkaXJlY3RseSBpZiB0aGVyZSBpcyBubyBzdHJpbmdpZmllZCB2ZXJzaW9uIHlldC5cbiAgICAgIC8vIEl0IHdpbGwgYmUgaW5zZXJ0ZWQgYWxsIHRvZ2V0aGVyIHdoZW4gLmF0dGFjaCBpcyBjYWxsZWQuXG5cbiAgICAgIGlmIChxdWV1ZSkgcXVldWUucHVzaChydWxlKTtlbHNlIHtcbiAgICAgICAgdGhpcy5pbnNlcnRSdWxlKHJ1bGUpO1xuXG4gICAgICAgIGlmICh0aGlzLnF1ZXVlKSB7XG4gICAgICAgICAgdGhpcy5xdWV1ZS5mb3JFYWNoKHRoaXMuaW5zZXJ0UnVsZSwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5xdWV1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgfSAvLyBXZSBjYW4ndCBhZGQgcnVsZXMgdG8gYSBkZXRhY2hlZCBzdHlsZSBub2RlLlxuICAgIC8vIFdlIHdpbGwgcmVkZXBsb3kgdGhlIHNoZWV0IG9uY2UgdXNlciB3aWxsIGF0dGFjaCBpdC5cblxuXG4gICAgdGhpcy5kZXBsb3llZCA9IGZhbHNlO1xuICAgIHJldHVybiBydWxlO1xuICB9XG4gIC8qKlxuICAgKiBJbnNlcnQgcnVsZSBpbnRvIHRoZSBTdHlsZVNoZWV0XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmluc2VydFJ1bGUgPSBmdW5jdGlvbiBpbnNlcnRSdWxlKHJ1bGUpIHtcbiAgICBpZiAodGhpcy5yZW5kZXJlcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRSdWxlKHJ1bGUpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGFuZCBhZGQgcnVsZXMuXG4gICAqIFdpbGwgcmVuZGVyIGFsc28gYWZ0ZXIgU3R5bGUgU2hlZXQgd2FzIHJlbmRlcmVkIHRoZSBmaXJzdCB0aW1lLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5hZGRSdWxlcyA9IGZ1bmN0aW9uIGFkZFJ1bGVzKHN0eWxlcywgb3B0aW9ucykge1xuICAgIHZhciBhZGRlZCA9IFtdO1xuXG4gICAgZm9yICh2YXIgbmFtZSBpbiBzdHlsZXMpIHtcbiAgICAgIHZhciBydWxlID0gdGhpcy5hZGRSdWxlKG5hbWUsIHN0eWxlc1tuYW1lXSwgb3B0aW9ucyk7XG4gICAgICBpZiAocnVsZSkgYWRkZWQucHVzaChydWxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkZWQ7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhIHJ1bGUgYnkgbmFtZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZ2V0UnVsZSA9IGZ1bmN0aW9uIGdldFJ1bGUobmFtZSkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLmdldChuYW1lKTtcbiAgfVxuICAvKipcbiAgICogRGVsZXRlIGEgcnVsZSBieSBuYW1lLlxuICAgKiBSZXR1cm5zIGB0cnVlYDogaWYgcnVsZSBoYXMgYmVlbiBkZWxldGVkIGZyb20gdGhlIERPTS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGVsZXRlUnVsZSA9IGZ1bmN0aW9uIGRlbGV0ZVJ1bGUobmFtZSkge1xuICAgIHZhciBydWxlID0gdHlwZW9mIG5hbWUgPT09ICdvYmplY3QnID8gbmFtZSA6IHRoaXMucnVsZXMuZ2V0KG5hbWUpO1xuXG4gICAgaWYgKCFydWxlIHx8IC8vIFN0eWxlIHNoZWV0IHdhcyBjcmVhdGVkIHdpdGhvdXQgbGluazogdHJ1ZSBhbmQgYXR0YWNoZWQsIGluIHRoaXMgY2FzZSB3ZVxuICAgIC8vIHdvbid0IGJlIGFibGUgdG8gcmVtb3ZlIHRoZSBDU1MgcnVsZSBmcm9tIHRoZSBET00uXG4gICAgdGhpcy5hdHRhY2hlZCAmJiAhcnVsZS5yZW5kZXJhYmxlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5ydWxlcy5yZW1vdmUocnVsZSk7XG5cbiAgICBpZiAodGhpcy5hdHRhY2hlZCAmJiBydWxlLnJlbmRlcmFibGUgJiYgdGhpcy5yZW5kZXJlcikge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuZGVsZXRlUnVsZShydWxlLnJlbmRlcmFibGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgaW5kZXggb2YgYSBydWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZihydWxlKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXMuaW5kZXhPZihydWxlKTtcbiAgfVxuICAvKipcbiAgICogRGVwbG95IHB1cmUgQ1NTIHN0cmluZyB0byBhIHJlbmRlcmFibGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRlcGxveSA9IGZ1bmN0aW9uIGRlcGxveSgpIHtcbiAgICBpZiAodGhpcy5yZW5kZXJlcikgdGhpcy5yZW5kZXJlci5kZXBsb3koKTtcbiAgICB0aGlzLmRlcGxveWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogVXBkYXRlIHRoZSBmdW5jdGlvbiB2YWx1ZXMgd2l0aCBhIG5ldyBkYXRhLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIF90aGlzJHJ1bGVzO1xuXG4gICAgKF90aGlzJHJ1bGVzID0gdGhpcy5ydWxlcykudXBkYXRlLmFwcGx5KF90aGlzJHJ1bGVzLCBhcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZXMgYSBzaW5nbGUgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udXBkYXRlT25lID0gZnVuY3Rpb24gdXBkYXRlT25lKHJ1bGUsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnJ1bGVzLnVwZGF0ZU9uZShydWxlLCBkYXRhLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogQ29udmVydCBydWxlcyB0byBhIENTUyBzdHJpbmcuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLnRvU3RyaW5nKG9wdGlvbnMpO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG52YXIgUGx1Z2luc1JlZ2lzdHJ5ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUGx1Z2luc1JlZ2lzdHJ5KCkge1xuICAgIHRoaXMucGx1Z2lucyA9IHtcbiAgICAgIGludGVybmFsOiBbXSxcbiAgICAgIGV4dGVybmFsOiBbXVxuICAgIH07XG4gICAgdGhpcy5yZWdpc3RyeSA9IHZvaWQgMDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBQbHVnaW5zUmVnaXN0cnkucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBDYWxsIGBvbkNyZWF0ZVJ1bGVgIGhvb2tzIGFuZCByZXR1cm4gYW4gb2JqZWN0IGlmIHJldHVybmVkIGJ5IGEgaG9vay5cbiAgICovXG4gIF9wcm90by5vbkNyZWF0ZVJ1bGUgPSBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUobmFtZSwgZGVjbCwgb3B0aW9ucykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWdpc3RyeS5vbkNyZWF0ZVJ1bGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBydWxlID0gdGhpcy5yZWdpc3RyeS5vbkNyZWF0ZVJ1bGVbaV0obmFtZSwgZGVjbCwgb3B0aW9ucyk7XG4gICAgICBpZiAocnVsZSkgcmV0dXJuIHJ1bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLyoqXG4gICAqIENhbGwgYG9uUHJvY2Vzc1J1bGVgIGhvb2tzLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5vblByb2Nlc3NSdWxlID0gZnVuY3Rpb24gb25Qcm9jZXNzUnVsZShydWxlKSB7XG4gICAgaWYgKHJ1bGUuaXNQcm9jZXNzZWQpIHJldHVybjtcbiAgICB2YXIgc2hlZXQgPSBydWxlLm9wdGlvbnMuc2hlZXQ7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25Qcm9jZXNzUnVsZS5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5yZWdpc3RyeS5vblByb2Nlc3NSdWxlW2ldKHJ1bGUsIHNoZWV0KTtcbiAgICB9XG5cbiAgICBpZiAocnVsZS5zdHlsZSkgdGhpcy5vblByb2Nlc3NTdHlsZShydWxlLnN0eWxlLCBydWxlLCBzaGVldCk7XG4gICAgcnVsZS5pc1Byb2Nlc3NlZCA9IHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIENhbGwgYG9uUHJvY2Vzc1N0eWxlYCBob29rcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ub25Qcm9jZXNzU3R5bGUgPSBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSwgc2hlZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25Qcm9jZXNzU3R5bGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgcnVsZS5zdHlsZSA9IHRoaXMucmVnaXN0cnkub25Qcm9jZXNzU3R5bGVbaV0ocnVsZS5zdHlsZSwgcnVsZSwgc2hlZXQpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ2FsbCBgb25Qcm9jZXNzU2hlZXRgIGhvb2tzLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5vblByb2Nlc3NTaGVldCA9IGZ1bmN0aW9uIG9uUHJvY2Vzc1NoZWV0KHNoZWV0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlZ2lzdHJ5Lm9uUHJvY2Vzc1NoZWV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnJlZ2lzdHJ5Lm9uUHJvY2Vzc1NoZWV0W2ldKHNoZWV0KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENhbGwgYG9uVXBkYXRlYCBob29rcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZShkYXRhLCBydWxlLCBzaGVldCwgb3B0aW9ucykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWdpc3RyeS5vblVwZGF0ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5yZWdpc3RyeS5vblVwZGF0ZVtpXShkYXRhLCBydWxlLCBzaGVldCwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDYWxsIGBvbkNoYW5nZVZhbHVlYCBob29rcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ub25DaGFuZ2VWYWx1ZSA9IGZ1bmN0aW9uIG9uQ2hhbmdlVmFsdWUodmFsdWUsIHByb3AsIHJ1bGUpIHtcbiAgICB2YXIgcHJvY2Vzc2VkVmFsdWUgPSB2YWx1ZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWdpc3RyeS5vbkNoYW5nZVZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9jZXNzZWRWYWx1ZSA9IHRoaXMucmVnaXN0cnkub25DaGFuZ2VWYWx1ZVtpXShwcm9jZXNzZWRWYWx1ZSwgcHJvcCwgcnVsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2Nlc3NlZFZhbHVlO1xuICB9XG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIHBsdWdpbi5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udXNlID0gZnVuY3Rpb24gdXNlKG5ld1BsdWdpbiwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgIHF1ZXVlOiAnZXh0ZXJuYWwnXG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBwbHVnaW5zID0gdGhpcy5wbHVnaW5zW29wdGlvbnMucXVldWVdOyAvLyBBdm9pZHMgYXBwbHlpbmcgc2FtZSBwbHVnaW4gdHdpY2UsIGF0IGxlYXN0IGJhc2VkIG9uIHJlZi5cblxuICAgIGlmIChwbHVnaW5zLmluZGV4T2YobmV3UGx1Z2luKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwbHVnaW5zLnB1c2gobmV3UGx1Z2luKTtcbiAgICB0aGlzLnJlZ2lzdHJ5ID0gW10uY29uY2F0KHRoaXMucGx1Z2lucy5leHRlcm5hbCwgdGhpcy5wbHVnaW5zLmludGVybmFsKS5yZWR1Y2UoZnVuY3Rpb24gKHJlZ2lzdHJ5LCBwbHVnaW4pIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gcGx1Z2luKSB7XG4gICAgICAgIGlmIChuYW1lIGluIHJlZ2lzdHJ5KSB7XG4gICAgICAgICAgcmVnaXN0cnlbbmFtZV0ucHVzaChwbHVnaW5bbmFtZV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gVW5rbm93biBob29rIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIuXCIpIDogdm9pZCAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZWdpc3RyeTtcbiAgICB9LCB7XG4gICAgICBvbkNyZWF0ZVJ1bGU6IFtdLFxuICAgICAgb25Qcm9jZXNzUnVsZTogW10sXG4gICAgICBvblByb2Nlc3NTdHlsZTogW10sXG4gICAgICBvblByb2Nlc3NTaGVldDogW10sXG4gICAgICBvbkNoYW5nZVZhbHVlOiBbXSxcbiAgICAgIG9uVXBkYXRlOiBbXVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBQbHVnaW5zUmVnaXN0cnk7XG59KCk7XG5cbi8qKlxuICogU2hlZXRzIHJlZ2lzdHJ5IHRvIGFjY2VzcyB0aGVtIGFsbCBhdCBvbmUgcGxhY2UuXG4gKi9cbnZhciBTaGVldHNSZWdpc3RyeSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNoZWV0c1JlZ2lzdHJ5KCkge1xuICAgIHRoaXMucmVnaXN0cnkgPSBbXTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTaGVldHNSZWdpc3RyeS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgU3R5bGUgU2hlZXQuXG4gICAqL1xuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKHNoZWV0KSB7XG4gICAgdmFyIHJlZ2lzdHJ5ID0gdGhpcy5yZWdpc3RyeTtcbiAgICB2YXIgaW5kZXggPSBzaGVldC5vcHRpb25zLmluZGV4O1xuICAgIGlmIChyZWdpc3RyeS5pbmRleE9mKHNoZWV0KSAhPT0gLTEpIHJldHVybjtcblxuICAgIGlmIChyZWdpc3RyeS5sZW5ndGggPT09IDAgfHwgaW5kZXggPj0gdGhpcy5pbmRleCkge1xuICAgICAgcmVnaXN0cnkucHVzaChzaGVldCk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBGaW5kIGEgcG9zaXRpb24uXG5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0cnkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWdpc3RyeVtpXS5vcHRpb25zLmluZGV4ID4gaW5kZXgpIHtcbiAgICAgICAgcmVnaXN0cnkuc3BsaWNlKGksIDAsIHNoZWV0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVzZXQgdGhlIHJlZ2lzdHJ5LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHRoaXMucmVnaXN0cnkgPSBbXTtcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIGEgU3R5bGUgU2hlZXQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShzaGVldCkge1xuICAgIHZhciBpbmRleCA9IHRoaXMucmVnaXN0cnkuaW5kZXhPZihzaGVldCk7XG4gICAgdGhpcy5yZWdpc3RyeS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0IGFsbCBhdHRhY2hlZCBzaGVldHMgdG8gYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKF90ZW1wKSB7XG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgYXR0YWNoZWQgPSBfcmVmLmF0dGFjaGVkLFxuICAgICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiYXR0YWNoZWRcIl0pO1xuXG4gICAgdmFyIGNzcyA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlZ2lzdHJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc2hlZXQgPSB0aGlzLnJlZ2lzdHJ5W2ldO1xuXG4gICAgICBpZiAoYXR0YWNoZWQgIT0gbnVsbCAmJiBzaGVldC5hdHRhY2hlZCAhPT0gYXR0YWNoZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjc3MpIGNzcyArPSAnXFxuJztcbiAgICAgIGNzcyArPSBzaGVldC50b1N0cmluZyhvcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTaGVldHNSZWdpc3RyeSwgW3tcbiAgICBrZXk6IFwiaW5kZXhcIixcblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgaGlnaGVzdCBpbmRleCBudW1iZXIuXG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWdpc3RyeS5sZW5ndGggPT09IDAgPyAwIDogdGhpcy5yZWdpc3RyeVt0aGlzLnJlZ2lzdHJ5Lmxlbmd0aCAtIDFdLm9wdGlvbnMuaW5kZXg7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNoZWV0c1JlZ2lzdHJ5O1xufSgpO1xuXG4vKipcbiAqIFRoaXMgaXMgYSBnbG9iYWwgc2hlZXRzIHJlZ2lzdHJ5LiBPbmx5IERvbVJlbmRlcmVyIHdpbGwgYWRkIHNoZWV0cyB0byBpdC5cbiAqIE9uIHRoZSBzZXJ2ZXIgb25lIHNob3VsZCB1c2UgYW4gb3duIFNoZWV0c1JlZ2lzdHJ5IGluc3RhbmNlIGFuZCBhZGQgdGhlXG4gKiBzaGVldHMgdG8gaXQsIGJlY2F1c2UgeW91IG5lZWQgdG8gbWFrZSBzdXJlIHRvIGNyZWF0ZSBhIG5ldyByZWdpc3RyeSBmb3JcbiAqIGVhY2ggcmVxdWVzdCBpbiBvcmRlciB0byBub3QgbGVhayBzaGVldHMgYWNyb3NzIHJlcXVlc3RzLlxuICovXG5cbnZhciByZWdpc3RyeSA9IG5ldyBTaGVldHNSZWdpc3RyeSgpO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKipcbiAqIE5vdyB0aGF0IGBnbG9iYWxUaGlzYCBpcyBhdmFpbGFibGUgb24gbW9zdCBwbGF0Zm9ybXNcbiAqIChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9nbG9iYWxUaGlzI2Jyb3dzZXJfY29tcGF0aWJpbGl0eSlcbiAqIHdlIGNoZWNrIGZvciBgZ2xvYmFsVGhpc2AgZmlyc3QuIGBnbG9iYWxUaGlzYCBpcyBuZWNlc3NhcnkgZm9yIGpzc1xuICogdG8gcnVuIGluIEFnb3JpYydzIHNlY3VyZSB2ZXJzaW9uIG9mIEphdmFTY3JpcHQgKFNFUykuIFVuZGVyIFNFUyxcbiAqIGBnbG9iYWxUaGlzYCBleGlzdHMsIGJ1dCBgd2luZG93YCwgYHNlbGZgLCBhbmQgYEZ1bmN0aW9uKCdyZXR1cm5cbiAqIHRoaXMnKSgpYCBhcmUgYWxsIHVuZGVmaW5lZCBmb3Igc2VjdXJpdHkgcmVhc29ucy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxuICovXG52YXIgZ2xvYmFsVGhpcyQxID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09PSBNYXRoID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG52YXIgbnMgPSAnMmYxYWNjNmMzYTYwNmIwODJlNWVlZjVlNTQ0MTRmZmInO1xuaWYgKGdsb2JhbFRoaXMkMVtuc10gPT0gbnVsbCkgZ2xvYmFsVGhpcyQxW25zXSA9IDA7IC8vIEJ1bmRsZSBtYXkgY29udGFpbiBtdWx0aXBsZSBKU1MgdmVyc2lvbnMgYXQgdGhlIHNhbWUgdGltZS4gSW4gb3JkZXIgdG8gaWRlbnRpZnlcbi8vIHRoZSBjdXJyZW50IHZlcnNpb24gd2l0aCBqdXN0IG9uZSBzaG9ydCBudW1iZXIgYW5kIHVzZSBpdCBmb3IgY2xhc3NlcyBnZW5lcmF0aW9uXG4vLyB3ZSB1c2UgYSBjb3VudGVyLiBBbHNvIGl0IGlzIG1vcmUgYWNjdXJhdGUsIGJlY2F1c2UgdXNlciBjYW4gbWFudWFsbHkgcmVldmFsdWF0ZVxuLy8gdGhlIG1vZHVsZS5cblxudmFyIG1vZHVsZUlkID0gZ2xvYmFsVGhpcyQxW25zXSsrO1xuXG52YXIgbWF4UnVsZXMgPSAxZTEwO1xuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCBnZW5lcmF0ZXMgdW5pcXVlIGNsYXNzIG5hbWVzIGJhc2VkIG9uIGNvdW50ZXJzLlxuICogV2hlbiBuZXcgZ2VuZXJhdG9yIGZ1bmN0aW9uIGlzIGNyZWF0ZWQsIHJ1bGUgY291bnRlciBpcyByZXNldGVkLlxuICogV2UgbmVlZCB0byByZXNldCB0aGUgcnVsZSBjb3VudGVyIGZvciBTU1IgZm9yIGVhY2ggcmVxdWVzdC5cbiAqL1xudmFyIGNyZWF0ZUdlbmVyYXRlSWQgPSBmdW5jdGlvbiBjcmVhdGVHZW5lcmF0ZUlkKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBydWxlQ291bnRlciA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAocnVsZSwgc2hlZXQpIHtcbiAgICBydWxlQ291bnRlciArPSAxO1xuXG4gICAgaWYgKHJ1bGVDb3VudGVyID4gbWF4UnVsZXMpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gWW91IG1pZ2h0IGhhdmUgYSBtZW1vcnkgbGVhay4gUnVsZSBjb3VudGVyIGlzIGF0IFwiICsgcnVsZUNvdW50ZXIgKyBcIi5cIikgOiB2b2lkIDA7XG4gICAgfVxuXG4gICAgdmFyIGpzc0lkID0gJyc7XG4gICAgdmFyIHByZWZpeCA9ICcnO1xuXG4gICAgaWYgKHNoZWV0KSB7XG4gICAgICBpZiAoc2hlZXQub3B0aW9ucy5jbGFzc05hbWVQcmVmaXgpIHtcbiAgICAgICAgcHJlZml4ID0gc2hlZXQub3B0aW9ucy5jbGFzc05hbWVQcmVmaXg7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaGVldC5vcHRpb25zLmpzcy5pZCAhPSBudWxsKSB7XG4gICAgICAgIGpzc0lkID0gU3RyaW5nKHNoZWV0Lm9wdGlvbnMuanNzLmlkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5taW5pZnkpIHtcbiAgICAgIC8vIFVzaW5nIFwiY1wiIGJlY2F1c2UgYSBudW1iZXIgY2FuJ3QgYmUgdGhlIGZpcnN0IGNoYXIgaW4gYSBjbGFzcyBuYW1lLlxuICAgICAgcmV0dXJuIFwiXCIgKyAocHJlZml4IHx8ICdjJykgKyBtb2R1bGVJZCArIGpzc0lkICsgcnVsZUNvdW50ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeCArIHJ1bGUua2V5ICsgXCItXCIgKyBtb2R1bGVJZCArIChqc3NJZCA/IFwiLVwiICsganNzSWQgOiAnJykgKyBcIi1cIiArIHJ1bGVDb3VudGVyO1xuICB9O1xufTtcblxuLyoqXG4gKiBDYWNoZSB0aGUgdmFsdWUgZnJvbSB0aGUgZmlyc3QgdGltZSBhIGZ1bmN0aW9uIGlzIGNhbGxlZC5cbiAqL1xudmFyIG1lbW9pemUgPSBmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciB2YWx1ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXZhbHVlKSB2YWx1ZSA9IGZuKCk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufTtcblxuLyoqXG4gKiBHZXQgYSBzdHlsZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xudmFyIGdldFByb3BlcnR5VmFsdWUgPSBmdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlKGNzc1J1bGUsIHByb3ApIHtcbiAgdHJ5IHtcbiAgICAvLyBTdXBwb3J0IENTU1RPTS5cbiAgICBpZiAoY3NzUnVsZS5hdHRyaWJ1dGVTdHlsZU1hcCkge1xuICAgICAgcmV0dXJuIGNzc1J1bGUuYXR0cmlidXRlU3R5bGVNYXAuZ2V0KHByb3ApO1xuICAgIH1cblxuICAgIHJldHVybiBjc3NSdWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIElFIG1heSB0aHJvdyBpZiBwcm9wZXJ0eSBpcyB1bmtub3duLlxuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgYSBzdHlsZSBwcm9wZXJ0eS5cbiAqL1xudmFyIHNldFByb3BlcnR5ID0gZnVuY3Rpb24gc2V0UHJvcGVydHkoY3NzUnVsZSwgcHJvcCwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICB2YXIgY3NzVmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgY3NzVmFsdWUgPSB0b0Nzc1ZhbHVlKHZhbHVlLCB0cnVlKTtcblxuICAgICAgaWYgKHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdID09PSAnIWltcG9ydGFudCcpIHtcbiAgICAgICAgY3NzUnVsZS5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCBjc3NWYWx1ZSwgJ2ltcG9ydGFudCcpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IC8vIFN1cHBvcnQgQ1NTVE9NLlxuXG5cbiAgICBpZiAoY3NzUnVsZS5hdHRyaWJ1dGVTdHlsZU1hcCkge1xuICAgICAgY3NzUnVsZS5hdHRyaWJ1dGVTdHlsZU1hcC5zZXQocHJvcCwgY3NzVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjc3NSdWxlLnN0eWxlLnNldFByb3BlcnR5KHByb3AsIGNzc1ZhbHVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIElFIG1heSB0aHJvdyBpZiBwcm9wZXJ0eSBpcyB1bmtub3duLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBzdHlsZSBwcm9wZXJ0eS5cbiAqL1xudmFyIHJlbW92ZVByb3BlcnR5ID0gZnVuY3Rpb24gcmVtb3ZlUHJvcGVydHkoY3NzUnVsZSwgcHJvcCkge1xuICB0cnkge1xuICAgIC8vIFN1cHBvcnQgQ1NTVE9NLlxuICAgIGlmIChjc3NSdWxlLmF0dHJpYnV0ZVN0eWxlTWFwKSB7XG4gICAgICBjc3NSdWxlLmF0dHJpYnV0ZVN0eWxlTWFwLmRlbGV0ZShwcm9wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3NzUnVsZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gRE9NRXhjZXB0aW9uIFxcXCJcIiArIGVyci5tZXNzYWdlICsgXCJcXFwiIHdhcyB0aHJvd24uIFRyaWVkIHRvIHJlbW92ZSBwcm9wZXJ0eSBcXFwiXCIgKyBwcm9wICsgXCJcXFwiLlwiKSA6IHZvaWQgMDtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdGhlIHNlbGVjdG9yLlxuICovXG52YXIgc2V0U2VsZWN0b3IgPSBmdW5jdGlvbiBzZXRTZWxlY3Rvcihjc3NSdWxlLCBzZWxlY3RvclRleHQpIHtcbiAgY3NzUnVsZS5zZWxlY3RvclRleHQgPSBzZWxlY3RvclRleHQ7IC8vIFJldHVybiBmYWxzZSBpZiBzZXR0ZXIgd2FzIG5vdCBzdWNjZXNzZnVsLlxuICAvLyBDdXJyZW50bHkgd29ya3MgaW4gY2hyb21lIG9ubHkuXG5cbiAgcmV0dXJuIGNzc1J1bGUuc2VsZWN0b3JUZXh0ID09PSBzZWxlY3RvclRleHQ7XG59O1xuLyoqXG4gKiBHZXRzIHRoZSBgaGVhZGAgZWxlbWVudCB1cG9uIHRoZSBmaXJzdCBjYWxsIGFuZCBjYWNoZXMgaXQuXG4gKiBXZSBhc3N1bWUgaXQgY2FuJ3QgYmUgbnVsbC5cbiAqL1xuXG5cbnZhciBnZXRIZWFkID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG59KTtcbi8qKlxuICogRmluZCBhdHRhY2hlZCBzaGVldCB3aXRoIGFuIGluZGV4IGhpZ2hlciB0aGFuIHRoZSBwYXNzZWQgb25lLlxuICovXG5cbmZ1bmN0aW9uIGZpbmRIaWdoZXJTaGVldChyZWdpc3RyeSwgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdHJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNoZWV0ID0gcmVnaXN0cnlbaV07XG5cbiAgICBpZiAoc2hlZXQuYXR0YWNoZWQgJiYgc2hlZXQub3B0aW9ucy5pbmRleCA+IG9wdGlvbnMuaW5kZXggJiYgc2hlZXQub3B0aW9ucy5pbnNlcnRpb25Qb2ludCA9PT0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludCkge1xuICAgICAgcmV0dXJuIHNoZWV0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuLyoqXG4gKiBGaW5kIGF0dGFjaGVkIHNoZWV0IHdpdGggdGhlIGhpZ2hlc3QgaW5kZXguXG4gKi9cblxuXG5mdW5jdGlvbiBmaW5kSGlnaGVzdFNoZWV0KHJlZ2lzdHJ5LCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSByZWdpc3RyeS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBzaGVldCA9IHJlZ2lzdHJ5W2ldO1xuXG4gICAgaWYgKHNoZWV0LmF0dGFjaGVkICYmIHNoZWV0Lm9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQgPT09IG9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQpIHtcbiAgICAgIHJldHVybiBzaGVldDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbi8qKlxuICogRmluZCBhIGNvbW1lbnQgd2l0aCBcImpzc1wiIGluc2lkZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGZpbmRDb21tZW50Tm9kZSh0ZXh0KSB7XG4gIHZhciBoZWFkID0gZ2V0SGVhZCgpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaGVhZC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5vZGUgPSBoZWFkLmNoaWxkTm9kZXNbaV07XG5cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAmJiBub2RlLm5vZGVWYWx1ZS50cmltKCkgPT09IHRleHQpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEZpbmQgYSBub2RlIGJlZm9yZSB3aGljaCB3ZSBjYW4gaW5zZXJ0IHRoZSBzaGVldC5cbiAqL1xuZnVuY3Rpb24gZmluZFByZXZOb2RlKG9wdGlvbnMpIHtcbiAgdmFyIHJlZ2lzdHJ5JDEgPSByZWdpc3RyeS5yZWdpc3RyeTtcblxuICBpZiAocmVnaXN0cnkkMS5sZW5ndGggPiAwKSB7XG4gICAgLy8gVHJ5IHRvIGluc2VydCBiZWZvcmUgdGhlIG5leHQgaGlnaGVyIHNoZWV0LlxuICAgIHZhciBzaGVldCA9IGZpbmRIaWdoZXJTaGVldChyZWdpc3RyeSQxLCBvcHRpb25zKTtcblxuICAgIGlmIChzaGVldCAmJiBzaGVldC5yZW5kZXJlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyZW50OiBzaGVldC5yZW5kZXJlci5lbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgIG5vZGU6IHNoZWV0LnJlbmRlcmVyLmVsZW1lbnRcbiAgICAgIH07XG4gICAgfSAvLyBPdGhlcndpc2UgaW5zZXJ0IGFmdGVyIHRoZSBsYXN0IGF0dGFjaGVkLlxuXG5cbiAgICBzaGVldCA9IGZpbmRIaWdoZXN0U2hlZXQocmVnaXN0cnkkMSwgb3B0aW9ucyk7XG5cbiAgICBpZiAoc2hlZXQgJiYgc2hlZXQucmVuZGVyZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmVudDogc2hlZXQucmVuZGVyZXIuZWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICBub2RlOiBzaGVldC5yZW5kZXJlci5lbGVtZW50Lm5leHRTaWJsaW5nXG4gICAgICB9O1xuICAgIH1cbiAgfSAvLyBUcnkgdG8gZmluZCBhIGNvbW1lbnQgcGxhY2Vob2xkZXIgaWYgcmVnaXN0cnkgaXMgZW1wdHkuXG5cblxuICB2YXIgaW5zZXJ0aW9uUG9pbnQgPSBvcHRpb25zLmluc2VydGlvblBvaW50O1xuXG4gIGlmIChpbnNlcnRpb25Qb2ludCAmJiB0eXBlb2YgaW5zZXJ0aW9uUG9pbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGNvbW1lbnQgPSBmaW5kQ29tbWVudE5vZGUoaW5zZXJ0aW9uUG9pbnQpO1xuXG4gICAgaWYgKGNvbW1lbnQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmVudDogY29tbWVudC5wYXJlbnROb2RlLFxuICAgICAgICBub2RlOiBjb21tZW50Lm5leHRTaWJsaW5nXG4gICAgICB9O1xuICAgIH0gLy8gSWYgdXNlciBzcGVjaWZpZXMgYW4gaW5zZXJ0aW9uIHBvaW50IGFuZCBpdCBjYW4ndCBiZSBmb3VuZCBpbiB0aGUgZG9jdW1lbnQgLVxuICAgIC8vIGJhZCBzcGVjaWZpY2l0eSBpc3N1ZXMgbWF5IGFwcGVhci5cblxuXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBJbnNlcnRpb24gcG9pbnQgXFxcIlwiICsgaW5zZXJ0aW9uUG9pbnQgKyBcIlxcXCIgbm90IGZvdW5kLlwiKSA6IHZvaWQgMDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbi8qKlxuICogSW5zZXJ0IHN0eWxlIGVsZW1lbnQgaW50byB0aGUgRE9NLlxuICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGUoc3R5bGUsIG9wdGlvbnMpIHtcbiAgdmFyIGluc2VydGlvblBvaW50ID0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludDtcbiAgdmFyIG5leHROb2RlID0gZmluZFByZXZOb2RlKG9wdGlvbnMpO1xuXG4gIGlmIChuZXh0Tm9kZSAhPT0gZmFsc2UgJiYgbmV4dE5vZGUucGFyZW50KSB7XG4gICAgbmV4dE5vZGUucGFyZW50Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dE5vZGUubm9kZSk7XG4gICAgcmV0dXJuO1xuICB9IC8vIFdvcmtzIHdpdGggaWZyYW1lcyBhbmQgYW55IG5vZGUgdHlwZXMuXG5cblxuICBpZiAoaW5zZXJ0aW9uUG9pbnQgJiYgdHlwZW9mIGluc2VydGlvblBvaW50Lm5vZGVUeXBlID09PSAnbnVtYmVyJykge1xuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQxMzI4NzI4L2ZvcmNlLWNhc3RpbmctaW4tZmxvd1xuICAgIHZhciBpbnNlcnRpb25Qb2ludEVsZW1lbnQgPSBpbnNlcnRpb25Qb2ludDtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGluc2VydGlvblBvaW50RWxlbWVudC5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlKSBwYXJlbnROb2RlLmluc2VydEJlZm9yZShzdHlsZSwgaW5zZXJ0aW9uUG9pbnRFbGVtZW50Lm5leHRTaWJsaW5nKTtlbHNlIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsICdbSlNTXSBJbnNlcnRpb24gcG9pbnQgaXMgbm90IGluIHRoZSBET00uJykgOiB2b2lkIDA7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZ2V0SGVhZCgpLmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbi8qKlxuICogUmVhZCBqc3Mgbm9uY2Ugc2V0dGluZyBmcm9tIHRoZSBwYWdlIGlmIHRoZSB1c2VyIGhhcyBzZXQgaXQuXG4gKi9cblxuXG52YXIgZ2V0Tm9uY2UgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcbiAgdmFyIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwiY3NwLW5vbmNlXCJdJyk7XG4gIHJldHVybiBub2RlID8gbm9kZS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSA6IG51bGw7XG59KTtcblxudmFyIF9pbnNlcnRSdWxlID0gZnVuY3Rpb24gaW5zZXJ0UnVsZShjb250YWluZXIsIHJ1bGUsIGluZGV4KSB7XG4gIHRyeSB7XG4gICAgaWYgKCdpbnNlcnRSdWxlJyBpbiBjb250YWluZXIpIHtcbiAgICAgIHZhciBjID0gY29udGFpbmVyO1xuICAgICAgYy5pbnNlcnRSdWxlKHJ1bGUsIGluZGV4KTtcbiAgICB9IC8vIEtleWZyYW1lcyBydWxlLlxuICAgIGVsc2UgaWYgKCdhcHBlbmRSdWxlJyBpbiBjb250YWluZXIpIHtcbiAgICAgICAgdmFyIF9jID0gY29udGFpbmVyO1xuXG4gICAgICAgIF9jLmFwcGVuZFJ1bGUocnVsZSk7XG4gICAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gXCIgKyBlcnIubWVzc2FnZSkgOiB2b2lkIDA7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lci5jc3NSdWxlc1tpbmRleF07XG59O1xuXG52YXIgZ2V0VmFsaWRSdWxlSW5zZXJ0aW9uSW5kZXggPSBmdW5jdGlvbiBnZXRWYWxpZFJ1bGVJbnNlcnRpb25JbmRleChjb250YWluZXIsIGluZGV4KSB7XG4gIHZhciBtYXhJbmRleCA9IGNvbnRhaW5lci5jc3NSdWxlcy5sZW5ndGg7IC8vIEluIGNhc2UgcHJldmlvdXMgaW5zZXJ0aW9uIGZhaWxzLCBwYXNzZWQgaW5kZXggbWlnaHQgYmUgd3JvbmdcblxuICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCB8fCBpbmRleCA+IG1heEluZGV4KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgcmV0dXJuIG1heEluZGV4O1xuICB9XG5cbiAgcmV0dXJuIGluZGV4O1xufTtcblxudmFyIGNyZWF0ZVN0eWxlID0gZnVuY3Rpb24gY3JlYXRlU3R5bGUoKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7IC8vIFdpdGhvdXQgaXQsIElFIHdpbGwgaGF2ZSBhIGJyb2tlbiBzb3VyY2Ugb3JkZXIgc3BlY2lmaWNpdHkgaWYgd2VcbiAgLy8gaW5zZXJ0IHJ1bGVzIGFmdGVyIHdlIGluc2VydCB0aGUgc3R5bGUgdGFnLlxuICAvLyBJdCBzZWVtcyB0byBraWNrLW9mZiB0aGUgc291cmNlIG9yZGVyIHNwZWNpZmljaXR5IGFsZ29yaXRobS5cblxuICBlbC50ZXh0Q29udGVudCA9ICdcXG4nO1xuICByZXR1cm4gZWw7XG59O1xuXG52YXIgRG9tUmVuZGVyZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvLyBIVE1MU3R5bGVFbGVtZW50IG5lZWRzIGZpeGluZyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMjY5NlxuICAvLyBXaWxsIGJlIGVtcHR5IGlmIGxpbms6IHRydWUgb3B0aW9uIGlzIG5vdCBzZXQsIGJlY2F1c2VcbiAgLy8gaXQgaXMgb25seSBmb3IgdXNlIHRvZ2V0aGVyIHdpdGggaW5zZXJ0UnVsZSBBUEkuXG4gIGZ1bmN0aW9uIERvbVJlbmRlcmVyKHNoZWV0KSB7XG4gICAgdGhpcy5nZXRQcm9wZXJ0eVZhbHVlID0gZ2V0UHJvcGVydHlWYWx1ZTtcbiAgICB0aGlzLnNldFByb3BlcnR5ID0gc2V0UHJvcGVydHk7XG4gICAgdGhpcy5yZW1vdmVQcm9wZXJ0eSA9IHJlbW92ZVByb3BlcnR5O1xuICAgIHRoaXMuc2V0U2VsZWN0b3IgPSBzZXRTZWxlY3RvcjtcbiAgICB0aGlzLmVsZW1lbnQgPSB2b2lkIDA7XG4gICAgdGhpcy5zaGVldCA9IHZvaWQgMDtcbiAgICB0aGlzLmhhc0luc2VydGVkUnVsZXMgPSBmYWxzZTtcbiAgICB0aGlzLmNzc1J1bGVzID0gW107XG4gICAgLy8gVGhlcmUgaXMgbm8gc2hlZXQgd2hlbiB0aGUgcmVuZGVyZXIgaXMgdXNlZCBmcm9tIGEgc3RhbmRhbG9uZSBTdHlsZVJ1bGUuXG4gICAgaWYgKHNoZWV0KSByZWdpc3RyeS5hZGQoc2hlZXQpO1xuICAgIHRoaXMuc2hlZXQgPSBzaGVldDtcblxuICAgIHZhciBfcmVmID0gdGhpcy5zaGVldCA/IHRoaXMuc2hlZXQub3B0aW9ucyA6IHt9LFxuICAgICAgICBtZWRpYSA9IF9yZWYubWVkaWEsXG4gICAgICAgIG1ldGEgPSBfcmVmLm1ldGEsXG4gICAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQ7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50IHx8IGNyZWF0ZVN0eWxlKCk7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1qc3MnLCAnJyk7XG4gICAgaWYgKG1lZGlhKSB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgICBpZiAobWV0YSkgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1tZXRhJywgbWV0YSk7XG4gICAgdmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcbiAgICBpZiAobm9uY2UpIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgbm9uY2UpO1xuICB9XG4gIC8qKlxuICAgKiBJbnNlcnQgc3R5bGUgZWxlbWVudCBpbnRvIHJlbmRlciB0cmVlLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBEb21SZW5kZXJlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmF0dGFjaCA9IGZ1bmN0aW9uIGF0dGFjaCgpIHtcbiAgICAvLyBJbiB0aGUgY2FzZSB0aGUgZWxlbWVudCBub2RlIGlzIGV4dGVybmFsIGFuZCBpdCBpcyBhbHJlYWR5IGluIHRoZSBET00uXG4gICAgaWYgKHRoaXMuZWxlbWVudC5wYXJlbnROb2RlIHx8ICF0aGlzLnNoZWV0KSByZXR1cm47XG4gICAgaW5zZXJ0U3R5bGUodGhpcy5lbGVtZW50LCB0aGlzLnNoZWV0Lm9wdGlvbnMpOyAvLyBXaGVuIHJ1bGVzIGFyZSBpbnNlcnRlZCB1c2luZyBgaW5zZXJ0UnVsZWAgQVBJLCBhZnRlciBgc2hlZXQuZGV0YWNoKCkuYXR0YWNoKClgXG4gICAgLy8gbW9zdCBicm93c2VycyBjcmVhdGUgYSBuZXcgQ1NTU3R5bGVTaGVldCwgZXhjZXB0IG9mIGFsbCBJRXMuXG5cbiAgICB2YXIgZGVwbG95ZWQgPSBCb29sZWFuKHRoaXMuc2hlZXQgJiYgdGhpcy5zaGVldC5kZXBsb3llZCk7XG5cbiAgICBpZiAodGhpcy5oYXNJbnNlcnRlZFJ1bGVzICYmIGRlcGxveWVkKSB7XG4gICAgICB0aGlzLmhhc0luc2VydGVkUnVsZXMgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVwbG95KCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgc3R5bGUgZWxlbWVudCBmcm9tIHJlbmRlciB0cmVlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZXRhY2ggPSBmdW5jdGlvbiBkZXRhY2goKSB7XG4gICAgaWYgKCF0aGlzLnNoZWV0KSByZXR1cm47XG4gICAgdmFyIHBhcmVudE5vZGUgPSB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpOyAvLyBJbiB0aGUgbW9zdCBicm93c2VycywgcnVsZXMgaW5zZXJ0ZWQgdXNpbmcgaW5zZXJ0UnVsZSgpIEFQSSB3aWxsIGJlIGxvc3Qgd2hlbiBzdHlsZSBlbGVtZW50IGlzIHJlbW92ZWQuXG4gICAgLy8gVGhvdWdoIElFIHdpbGwga2VlcCB0aGVtIGFuZCB3ZSBuZWVkIGEgY29uc2lzdGVudCBiZWhhdmlvci5cblxuICAgIGlmICh0aGlzLnNoZWV0Lm9wdGlvbnMubGluaykge1xuICAgICAgdGhpcy5jc3NSdWxlcyA9IFtdO1xuICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ1xcbic7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBJbmplY3QgQ1NTIHN0cmluZyBpbnRvIGVsZW1lbnQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRlcGxveSA9IGZ1bmN0aW9uIGRlcGxveSgpIHtcbiAgICB2YXIgc2hlZXQgPSB0aGlzLnNoZWV0O1xuICAgIGlmICghc2hlZXQpIHJldHVybjtcblxuICAgIGlmIChzaGVldC5vcHRpb25zLmxpbmspIHtcbiAgICAgIHRoaXMuaW5zZXJ0UnVsZXMoc2hlZXQucnVsZXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IFwiXFxuXCIgKyBzaGVldC50b1N0cmluZygpICsgXCJcXG5cIjtcbiAgfVxuICAvKipcbiAgICogSW5zZXJ0IFJ1bGVMaXN0IGludG8gYW4gZWxlbWVudC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5zZXJ0UnVsZXMgPSBmdW5jdGlvbiBpbnNlcnRSdWxlcyhydWxlcywgbmF0aXZlUGFyZW50KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5pbmRleC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5pbnNlcnRSdWxlKHJ1bGVzLmluZGV4W2ldLCBpLCBuYXRpdmVQYXJlbnQpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogSW5zZXJ0IGEgcnVsZSBpbnRvIGVsZW1lbnQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmluc2VydFJ1bGUgPSBmdW5jdGlvbiBpbnNlcnRSdWxlKHJ1bGUsIGluZGV4LCBuYXRpdmVQYXJlbnQpIHtcbiAgICBpZiAobmF0aXZlUGFyZW50ID09PSB2b2lkIDApIHtcbiAgICAgIG5hdGl2ZVBhcmVudCA9IHRoaXMuZWxlbWVudC5zaGVldDtcbiAgICB9XG5cbiAgICBpZiAocnVsZS5ydWxlcykge1xuICAgICAgdmFyIHBhcmVudCA9IHJ1bGU7XG4gICAgICB2YXIgbGF0ZXN0TmF0aXZlUGFyZW50ID0gbmF0aXZlUGFyZW50O1xuXG4gICAgICBpZiAocnVsZS50eXBlID09PSAnY29uZGl0aW9uYWwnIHx8IHJ1bGUudHlwZSA9PT0gJ2tleWZyYW1lcycpIHtcbiAgICAgICAgdmFyIF9pbnNlcnRpb25JbmRleCA9IGdldFZhbGlkUnVsZUluc2VydGlvbkluZGV4KG5hdGl2ZVBhcmVudCwgaW5kZXgpOyAvLyBXZSBuZWVkIHRvIHJlbmRlciB0aGUgY29udGFpbmVyIHdpdGhvdXQgY2hpbGRyZW4gZmlyc3QuXG5cblxuICAgICAgICBsYXRlc3ROYXRpdmVQYXJlbnQgPSBfaW5zZXJ0UnVsZShuYXRpdmVQYXJlbnQsIHBhcmVudC50b1N0cmluZyh7XG4gICAgICAgICAgY2hpbGRyZW46IGZhbHNlXG4gICAgICAgIH0pLCBfaW5zZXJ0aW9uSW5kZXgpO1xuXG4gICAgICAgIGlmIChsYXRlc3ROYXRpdmVQYXJlbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWZDc3NSdWxlKHJ1bGUsIF9pbnNlcnRpb25JbmRleCwgbGF0ZXN0TmF0aXZlUGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnNlcnRSdWxlcyhwYXJlbnQucnVsZXMsIGxhdGVzdE5hdGl2ZVBhcmVudCk7XG4gICAgICByZXR1cm4gbGF0ZXN0TmF0aXZlUGFyZW50O1xuICAgIH1cblxuICAgIHZhciBydWxlU3RyID0gcnVsZS50b1N0cmluZygpO1xuICAgIGlmICghcnVsZVN0cikgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBpbnNlcnRpb25JbmRleCA9IGdldFZhbGlkUnVsZUluc2VydGlvbkluZGV4KG5hdGl2ZVBhcmVudCwgaW5kZXgpO1xuXG4gICAgdmFyIG5hdGl2ZVJ1bGUgPSBfaW5zZXJ0UnVsZShuYXRpdmVQYXJlbnQsIHJ1bGVTdHIsIGluc2VydGlvbkluZGV4KTtcblxuICAgIGlmIChuYXRpdmVSdWxlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuaGFzSW5zZXJ0ZWRSdWxlcyA9IHRydWU7XG4gICAgdGhpcy5yZWZDc3NSdWxlKHJ1bGUsIGluc2VydGlvbkluZGV4LCBuYXRpdmVSdWxlKTtcbiAgICByZXR1cm4gbmF0aXZlUnVsZTtcbiAgfTtcblxuICBfcHJvdG8ucmVmQ3NzUnVsZSA9IGZ1bmN0aW9uIHJlZkNzc1J1bGUocnVsZSwgaW5kZXgsIGNzc1J1bGUpIHtcbiAgICBydWxlLnJlbmRlcmFibGUgPSBjc3NSdWxlOyAvLyBXZSBvbmx5IHdhbnQgdG8gcmVmZXJlbmNlIHRoZSB0b3AgbGV2ZWwgcnVsZXMsIGRlbGV0ZVJ1bGUgQVBJIGRvZXNuJ3Qgc3VwcG9ydCByZW1vdmluZyBuZXN0ZWQgcnVsZXNcbiAgICAvLyBsaWtlIHJ1bGVzIGluc2lkZSBtZWRpYSBxdWVyaWVzIG9yIGtleWZyYW1lc1xuXG4gICAgaWYgKHJ1bGUub3B0aW9ucy5wYXJlbnQgaW5zdGFuY2VvZiBTdHlsZVNoZWV0KSB7XG4gICAgICB0aGlzLmNzc1J1bGVzW2luZGV4XSA9IGNzc1J1bGU7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBEZWxldGUgYSBydWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZWxldGVSdWxlID0gZnVuY3Rpb24gZGVsZXRlUnVsZShjc3NSdWxlKSB7XG4gICAgdmFyIHNoZWV0ID0gdGhpcy5lbGVtZW50LnNoZWV0O1xuICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXhPZihjc3NSdWxlKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgc2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG4gICAgdGhpcy5jc3NSdWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgaW5kZXggb2YgYSBDU1MgUnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YoY3NzUnVsZSkge1xuICAgIHJldHVybiB0aGlzLmNzc1J1bGVzLmluZGV4T2YoY3NzUnVsZSk7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgbmV3IENTUyBydWxlIGFuZCByZXBsYWNlIHRoZSBleGlzdGluZyBvbmUuXG4gICAqXG4gICAqIE9ubHkgdXNlZCBmb3Igc29tZSBvbGQgYnJvd3NlcnMgYmVjYXVzZSB0aGV5IGNhbid0IHNldCBhIHNlbGVjdG9yLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZXBsYWNlUnVsZSA9IGZ1bmN0aW9uIHJlcGxhY2VSdWxlKGNzc1J1bGUsIHJ1bGUpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4T2YoY3NzUnVsZSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuZWxlbWVudC5zaGVldC5kZWxldGVSdWxlKGluZGV4KTtcbiAgICB0aGlzLmNzc1J1bGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhbGwgcnVsZXMgZWxlbWVudHMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmdldFJ1bGVzID0gZnVuY3Rpb24gZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5zaGVldC5jc3NSdWxlcztcbiAgfTtcblxuICByZXR1cm4gRG9tUmVuZGVyZXI7XG59KCk7XG5cbnZhciBpbnN0YW5jZUNvdW50ZXIgPSAwO1xuXG52YXIgSnNzID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSnNzKG9wdGlvbnMpIHtcbiAgICB0aGlzLmlkID0gaW5zdGFuY2VDb3VudGVyKys7XG4gICAgdGhpcy52ZXJzaW9uID0gXCIxMC42LjBcIjtcbiAgICB0aGlzLnBsdWdpbnMgPSBuZXcgUGx1Z2luc1JlZ2lzdHJ5KCk7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgaWQ6IHtcbiAgICAgICAgbWluaWZ5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGNyZWF0ZUdlbmVyYXRlSWQ6IGNyZWF0ZUdlbmVyYXRlSWQsXG4gICAgICBSZW5kZXJlcjogaXNJbkJyb3dzZXIgPyBEb21SZW5kZXJlciA6IG51bGwsXG4gICAgICBwbHVnaW5zOiBbXVxuICAgIH07XG4gICAgdGhpcy5nZW5lcmF0ZUlkID0gY3JlYXRlR2VuZXJhdGVJZCh7XG4gICAgICBtaW5pZnk6IGZhbHNlXG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBsdWdpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucGx1Z2lucy51c2UocGx1Z2luc1tpXSwge1xuICAgICAgICBxdWV1ZTogJ2ludGVybmFsJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXR1cChvcHRpb25zKTtcbiAgfVxuICAvKipcbiAgICogUHJlcGFyZXMgdmFyaW91cyBvcHRpb25zLCBhcHBsaWVzIHBsdWdpbnMuXG4gICAqIFNob3VsZCBub3QgYmUgdXNlZCB0d2ljZSBvbiB0aGUgc2FtZSBpbnN0YW5jZSwgYmVjYXVzZSB0aGVyZSBpcyBubyBwbHVnaW5zXG4gICAqIGRlZHVwbGljYXRpb24gbG9naWMuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IEpzcy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnNldHVwID0gZnVuY3Rpb24gc2V0dXAob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5jcmVhdGVHZW5lcmF0ZUlkKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuY3JlYXRlR2VuZXJhdGVJZCA9IG9wdGlvbnMuY3JlYXRlR2VuZXJhdGVJZDtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5pZCkge1xuICAgICAgdGhpcy5vcHRpb25zLmlkID0gX2V4dGVuZHMoe30sIHRoaXMub3B0aW9ucy5pZCwgb3B0aW9ucy5pZCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuY3JlYXRlR2VuZXJhdGVJZCB8fCBvcHRpb25zLmlkKSB7XG4gICAgICB0aGlzLmdlbmVyYXRlSWQgPSB0aGlzLm9wdGlvbnMuY3JlYXRlR2VuZXJhdGVJZCh0aGlzLm9wdGlvbnMuaWQpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmluc2VydGlvblBvaW50ICE9IG51bGwpIHRoaXMub3B0aW9ucy5pbnNlcnRpb25Qb2ludCA9IG9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQ7XG5cbiAgICBpZiAoJ1JlbmRlcmVyJyBpbiBvcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuUmVuZGVyZXIgPSBvcHRpb25zLlJlbmRlcmVyO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcblxuXG4gICAgaWYgKG9wdGlvbnMucGx1Z2lucykgdGhpcy51c2UuYXBwbHkodGhpcywgb3B0aW9ucy5wbHVnaW5zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgU3R5bGUgU2hlZXQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmNyZWF0ZVN0eWxlU2hlZXQgPSBmdW5jdGlvbiBjcmVhdGVTdHlsZVNoZWV0KHN0eWxlcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgICBpbmRleCA9IF9vcHRpb25zLmluZGV4O1xuXG4gICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGluZGV4ID0gcmVnaXN0cnkuaW5kZXggPT09IDAgPyAwIDogcmVnaXN0cnkuaW5kZXggKyAxO1xuICAgIH1cblxuICAgIHZhciBzaGVldCA9IG5ldyBTdHlsZVNoZWV0KHN0eWxlcywgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIGpzczogdGhpcyxcbiAgICAgIGdlbmVyYXRlSWQ6IG9wdGlvbnMuZ2VuZXJhdGVJZCB8fCB0aGlzLmdlbmVyYXRlSWQsXG4gICAgICBpbnNlcnRpb25Qb2ludDogdGhpcy5vcHRpb25zLmluc2VydGlvblBvaW50LFxuICAgICAgUmVuZGVyZXI6IHRoaXMub3B0aW9ucy5SZW5kZXJlcixcbiAgICAgIGluZGV4OiBpbmRleFxuICAgIH0pKTtcbiAgICB0aGlzLnBsdWdpbnMub25Qcm9jZXNzU2hlZXQoc2hlZXQpO1xuICAgIHJldHVybiBzaGVldDtcbiAgfVxuICAvKipcbiAgICogRGV0YWNoIHRoZSBTdHlsZSBTaGVldCBhbmQgcmVtb3ZlIGl0IGZyb20gdGhlIHJlZ2lzdHJ5LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZW1vdmVTdHlsZVNoZWV0ID0gZnVuY3Rpb24gcmVtb3ZlU3R5bGVTaGVldChzaGVldCkge1xuICAgIHNoZWV0LmRldGFjaCgpO1xuICAgIHJlZ2lzdHJ5LnJlbW92ZShzaGVldCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHJ1bGUgd2l0aG91dCBhIFN0eWxlIFNoZWV0LlxuICAgKiBbRGVwcmVjYXRlZF0gd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmNyZWF0ZVJ1bGUgPSBmdW5jdGlvbiBjcmVhdGVSdWxlJDEobmFtZSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICBpZiAoc3R5bGUgPT09IHZvaWQgMCkge1xuICAgICAgc3R5bGUgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgLy8gRW5hYmxlIHJ1bGUgd2l0aG91dCBuYW1lIGZvciBpbmxpbmUgc3R5bGVzLlxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVSdWxlKHVuZGVmaW5lZCwgbmFtZSwgc3R5bGUpO1xuICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV1cblxuXG4gICAgdmFyIHJ1bGVPcHRpb25zID0gX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBqc3M6IHRoaXMsXG4gICAgICBSZW5kZXJlcjogdGhpcy5vcHRpb25zLlJlbmRlcmVyXG4gICAgfSk7XG5cbiAgICBpZiAoIXJ1bGVPcHRpb25zLmdlbmVyYXRlSWQpIHJ1bGVPcHRpb25zLmdlbmVyYXRlSWQgPSB0aGlzLmdlbmVyYXRlSWQ7XG4gICAgaWYgKCFydWxlT3B0aW9ucy5jbGFzc2VzKSBydWxlT3B0aW9ucy5jbGFzc2VzID0ge307XG4gICAgaWYgKCFydWxlT3B0aW9ucy5rZXlmcmFtZXMpIHJ1bGVPcHRpb25zLmtleWZyYW1lcyA9IHt9O1xuXG4gICAgdmFyIHJ1bGUgPSBjcmVhdGVSdWxlKG5hbWUsIHN0eWxlLCBydWxlT3B0aW9ucyk7XG5cbiAgICBpZiAocnVsZSkgdGhpcy5wbHVnaW5zLm9uUHJvY2Vzc1J1bGUocnVsZSk7XG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHBsdWdpbi4gUGFzc2VkIGZ1bmN0aW9uIHdpbGwgYmUgaW52b2tlZCB3aXRoIGEgcnVsZSBpbnN0YW5jZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udXNlID0gZnVuY3Rpb24gdXNlKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGx1Z2lucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIHBsdWdpbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIF90aGlzLnBsdWdpbnMudXNlKHBsdWdpbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIEpzcztcbn0oKTtcblxuLyoqXG4gKiBFeHRyYWN0cyBhIHN0eWxlcyBvYmplY3Qgd2l0aCBvbmx5IHByb3BzIHRoYXQgY29udGFpbiBmdW5jdGlvbiB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGdldER5bmFtaWNTdHlsZXMoc3R5bGVzKSB7XG4gIHZhciB0byA9IG51bGw7XG5cbiAgZm9yICh2YXIga2V5IGluIHN0eWxlcykge1xuICAgIHZhciB2YWx1ZSA9IHN0eWxlc1trZXldO1xuICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuXG4gICAgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmICghdG8pIHRvID0ge307XG4gICAgICB0b1trZXldID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhciBleHRyYWN0ZWQgPSBnZXREeW5hbWljU3R5bGVzKHZhbHVlKTtcblxuICAgICAgaWYgKGV4dHJhY3RlZCkge1xuICAgICAgICBpZiAoIXRvKSB0byA9IHt9O1xuICAgICAgICB0b1trZXldID0gZXh0cmFjdGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bztcbn1cblxuLyoqXG4gKiBTaGVldHNNYW5hZ2VyIGlzIGxpa2UgYSBXZWFrTWFwIHdoaWNoIGlzIGRlc2lnbmVkIHRvIGNvdW50IFN0eWxlU2hlZXRcbiAqIGluc3RhbmNlcyBhbmQgYXR0YWNoL2RldGFjaCBhdXRvbWF0aWNhbGx5LlxuICovXG52YXIgU2hlZXRzTWFuYWdlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNoZWV0c01hbmFnZXIoKSB7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuc2hlZXRzID0gbmV3IFdlYWtNYXAoKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTaGVldHNNYW5hZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHZhciBlbnRyeSA9IHRoaXMuc2hlZXRzLmdldChrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS5zaGVldDtcbiAgfTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKGtleSwgc2hlZXQpIHtcbiAgICBpZiAodGhpcy5zaGVldHMuaGFzKGtleSkpIHJldHVybjtcbiAgICB0aGlzLmxlbmd0aCsrO1xuICAgIHRoaXMuc2hlZXRzLnNldChrZXksIHtcbiAgICAgIHNoZWV0OiBzaGVldCxcbiAgICAgIHJlZnM6IDBcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ubWFuYWdlID0gZnVuY3Rpb24gbWFuYWdlKGtleSkge1xuICAgIHZhciBlbnRyeSA9IHRoaXMuc2hlZXRzLmdldChrZXkpO1xuXG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBpZiAoZW50cnkucmVmcyA9PT0gMCkge1xuICAgICAgICBlbnRyeS5zaGVldC5hdHRhY2goKTtcbiAgICAgIH1cblxuICAgICAgZW50cnkucmVmcysrO1xuICAgICAgcmV0dXJuIGVudHJ5LnNoZWV0O1xuICAgIH1cblxuICAgIHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gU2hlZXRzTWFuYWdlcjogY2FuJ3QgZmluZCBzaGVldCB0byBtYW5hZ2VcIik7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfTtcblxuICBfcHJvdG8udW5tYW5hZ2UgPSBmdW5jdGlvbiB1bm1hbmFnZShrZXkpIHtcbiAgICB2YXIgZW50cnkgPSB0aGlzLnNoZWV0cy5nZXQoa2V5KTtcblxuICAgIGlmIChlbnRyeSkge1xuICAgICAgaWYgKGVudHJ5LnJlZnMgPiAwKSB7XG4gICAgICAgIGVudHJ5LnJlZnMtLTtcbiAgICAgICAgaWYgKGVudHJ5LnJlZnMgPT09IDApIGVudHJ5LnNoZWV0LmRldGFjaCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuaW5nKGZhbHNlLCBcIlNoZWV0c01hbmFnZXI6IGNhbid0IGZpbmQgc2hlZXQgdG8gdW5tYW5hZ2VcIik7XG4gICAgfVxuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTaGVldHNNYW5hZ2VyLCBbe1xuICAgIGtleTogXCJzaXplXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNoZWV0c01hbmFnZXI7XG59KCk7XG5cbi8qKlxuICogQSBiZXR0ZXIgYWJzdHJhY3Rpb24gb3ZlciBDU1MuXG4gKlxuICogQGNvcHlyaWdodCBPbGVnIElzb25lbiAoU2xvYm9kc2tvaSkgLyBJc29uZW4gMjAxNC1wcmVzZW50XG4gKiBAd2Vic2l0ZSBodHRwczovL2dpdGh1Yi5jb20vY3NzaW5qcy9qc3NcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbi8qKlxuICogRXhwb3J0IGEgY29uc3RhbnQgaW5kaWNhdGluZyBpZiB0aGlzIGJyb3dzZXIgaGFzIENTU1RPTSBzdXBwb3J0LlxuICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3VwZGF0ZXMvMjAxOC8wMy9jc3NvbVxuICovXG52YXIgaGFzQ1NTVE9NU3VwcG9ydCA9IHR5cGVvZiBDU1MgPT09ICdvYmplY3QnICYmIENTUyAhPSBudWxsICYmICdudW1iZXInIGluIENTUztcbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBKc3MuXG4gKi9cblxudmFyIGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgSnNzKG9wdGlvbnMpO1xufTtcbi8qKlxuICogQSBnbG9iYWwgSnNzIGluc3RhbmNlLlxuICovXG5cbnZhciBqc3MgPSBjcmVhdGUoKTtcblxuZXhwb3J0IGRlZmF1bHQganNzO1xuZXhwb3J0IHsgUnVsZUxpc3QsIFNoZWV0c01hbmFnZXIsIFNoZWV0c1JlZ2lzdHJ5LCBjcmVhdGUsIGNyZWF0ZUdlbmVyYXRlSWQsIGNyZWF0ZVJ1bGUsIGdldER5bmFtaWNTdHlsZXMsIGhhc0NTU1RPTVN1cHBvcnQsIHJlZ2lzdHJ5IGFzIHNoZWV0cywgdG9Dc3NWYWx1ZSB9O1xuIiwiaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCB7IGNyZWF0ZVJ1bGUgfSBmcm9tICdqc3MnO1xuXG52YXIgbm93ID0gRGF0ZS5ub3coKTtcbnZhciBmblZhbHVlc05zID0gXCJmblZhbHVlc1wiICsgbm93O1xudmFyIGZuUnVsZU5zID0gXCJmblN0eWxlXCIgKyArK25vdztcblxudmFyIGZ1bmN0aW9uUGx1Z2luID0gZnVuY3Rpb24gZnVuY3Rpb25QbHVnaW4oKSB7XG4gIHJldHVybiB7XG4gICAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUobmFtZSwgZGVjbCwgb3B0aW9ucykge1xuICAgICAgaWYgKHR5cGVvZiBkZWNsICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBydWxlID0gY3JlYXRlUnVsZShuYW1lLCB7fSwgb3B0aW9ucyk7XG4gICAgICBydWxlW2ZuUnVsZU5zXSA9IGRlY2w7XG4gICAgICByZXR1cm4gcnVsZTtcbiAgICB9LFxuICAgIG9uUHJvY2Vzc1N0eWxlOiBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSkge1xuICAgICAgLy8gV2UgbmVlZCB0byBleHRyYWN0IGZ1bmN0aW9uIHZhbHVlcyBmcm9tIHRoZSBkZWNsYXJhdGlvbiwgc28gdGhhdCB3ZSBjYW4ga2VlcCBjb3JlIHVuYXdhcmUgb2YgdGhlbS5cbiAgICAgIC8vIFdlIG5lZWQgdG8gZG8gdGhhdCBvbmx5IG9uY2UuXG4gICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGV4dHJhY3QgZnVuY3Rpb25zIG9uIGVhY2ggc3R5bGUgdXBkYXRlLCBzaW5jZSB0aGlzIGNhbiBoYXBwZW4gb25seSBvbmNlLlxuICAgICAgLy8gV2UgZG9uJ3Qgc3VwcG9ydCBmdW5jdGlvbiB2YWx1ZXMgaW5zaWRlIG9mIGZ1bmN0aW9uIHJ1bGVzLlxuICAgICAgaWYgKGZuVmFsdWVzTnMgaW4gcnVsZSB8fCBmblJ1bGVOcyBpbiBydWxlKSByZXR1cm4gc3R5bGU7XG4gICAgICB2YXIgZm5WYWx1ZXMgPSB7fTtcblxuICAgICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZVtwcm9wXTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykgY29udGludWU7XG4gICAgICAgIGRlbGV0ZSBzdHlsZVtwcm9wXTtcbiAgICAgICAgZm5WYWx1ZXNbcHJvcF0gPSB2YWx1ZTtcbiAgICAgIH0gLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG5cblxuICAgICAgcnVsZVtmblZhbHVlc05zXSA9IGZuVmFsdWVzO1xuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH0sXG4gICAgb25VcGRhdGU6IGZ1bmN0aW9uIG9uVXBkYXRlKGRhdGEsIHJ1bGUsIHNoZWV0LCBvcHRpb25zKSB7XG4gICAgICB2YXIgc3R5bGVSdWxlID0gcnVsZTsgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG5cbiAgICAgIHZhciBmblJ1bGUgPSBzdHlsZVJ1bGVbZm5SdWxlTnNdOyAvLyBJZiB3ZSBoYXZlIGEgc3R5bGUgZnVuY3Rpb24sIHRoZSBlbnRpcmUgcnVsZSBpcyBkeW5hbWljIGFuZCBzdHlsZSBvYmplY3RcbiAgICAgIC8vIHdpbGwgYmUgcmV0dXJuZWQgZnJvbSB0aGF0IGZ1bmN0aW9uLlxuXG4gICAgICBpZiAoZm5SdWxlKSB7XG4gICAgICAgIC8vIEVtcHR5IG9iamVjdCB3aWxsIHJlbW92ZSBhbGwgY3VycmVudGx5IGRlZmluZWQgcHJvcHNcbiAgICAgICAgLy8gaW4gY2FzZSBmdW5jdGlvbiBydWxlIHJldHVybnMgYSBmYWxzeSB2YWx1ZS5cbiAgICAgICAgc3R5bGVSdWxlLnN0eWxlID0gZm5SdWxlKGRhdGEpIHx8IHt9O1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGVSdWxlLnN0eWxlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0eWxlUnVsZS5zdHlsZVtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCAnW0pTU10gRnVuY3Rpb24gdmFsdWVzIGluc2lkZSBmdW5jdGlvbiBydWxlcyBhcmUgbm90IHN1cHBvcnRlZC4nKSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuXG5cbiAgICAgIHZhciBmblZhbHVlcyA9IHN0eWxlUnVsZVtmblZhbHVlc05zXTsgLy8gSWYgd2UgaGF2ZSBhIGZuIHZhbHVlcyBtYXAsIGl0IGlzIGEgcnVsZSB3aXRoIGZ1bmN0aW9uIHZhbHVlcy5cblxuICAgICAgaWYgKGZuVmFsdWVzKSB7XG4gICAgICAgIGZvciAodmFyIF9wcm9wIGluIGZuVmFsdWVzKSB7XG4gICAgICAgICAgc3R5bGVSdWxlLnByb3AoX3Byb3AsIGZuVmFsdWVzW19wcm9wXShkYXRhKSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvblBsdWdpbjtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCB7IFJ1bGVMaXN0IH0gZnJvbSAnanNzJztcblxudmFyIGF0ID0gJ0BnbG9iYWwnO1xudmFyIGF0UHJlZml4ID0gJ0BnbG9iYWwgJztcblxudmFyIEdsb2JhbENvbnRhaW5lclJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHbG9iYWxDb250YWluZXJSdWxlKGtleSwgc3R5bGVzLCBvcHRpb25zKSB7XG4gICAgdGhpcy50eXBlID0gJ2dsb2JhbCc7XG4gICAgdGhpcy5hdCA9IGF0O1xuICAgIHRoaXMucnVsZXMgPSB2b2lkIDA7XG4gICAgdGhpcy5vcHRpb25zID0gdm9pZCAwO1xuICAgIHRoaXMua2V5ID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMucnVsZXMgPSBuZXcgUnVsZUxpc3QoX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pKTtcblxuICAgIGZvciAodmFyIHNlbGVjdG9yIGluIHN0eWxlcykge1xuICAgICAgdGhpcy5ydWxlcy5hZGQoc2VsZWN0b3IsIHN0eWxlc1tzZWxlY3Rvcl0pO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMucHJvY2VzcygpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgYSBydWxlLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBHbG9iYWxDb250YWluZXJSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0UnVsZSA9IGZ1bmN0aW9uIGdldFJ1bGUobmFtZSkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLmdldChuYW1lKTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGFuZCByZWdpc3RlciBydWxlLCBydW4gcGx1Z2lucy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWRkUnVsZSA9IGZ1bmN0aW9uIGFkZFJ1bGUobmFtZSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgcnVsZSA9IHRoaXMucnVsZXMuYWRkKG5hbWUsIHN0eWxlLCBvcHRpb25zKTtcbiAgICBpZiAocnVsZSkgdGhpcy5vcHRpb25zLmpzcy5wbHVnaW5zLm9uUHJvY2Vzc1J1bGUocnVsZSk7XG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBpbmRleCBvZiBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mKHJ1bGUpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy5pbmRleE9mKHJ1bGUpO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLnRvU3RyaW5nKCk7XG4gIH07XG5cbiAgcmV0dXJuIEdsb2JhbENvbnRhaW5lclJ1bGU7XG59KCk7XG5cbnZhciBHbG9iYWxQcmVmaXhlZFJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHbG9iYWxQcmVmaXhlZFJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdnbG9iYWwnO1xuICAgIHRoaXMuYXQgPSBhdDtcbiAgICB0aGlzLm9wdGlvbnMgPSB2b2lkIDA7XG4gICAgdGhpcy5ydWxlID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmtleSA9IHZvaWQgMDtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHZhciBzZWxlY3RvciA9IGtleS5zdWJzdHIoYXRQcmVmaXgubGVuZ3RoKTtcbiAgICB0aGlzLnJ1bGUgPSBvcHRpb25zLmpzcy5jcmVhdGVSdWxlKHNlbGVjdG9yLCBzdHlsZSwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8yID0gR2xvYmFsUHJlZml4ZWRSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8yLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnJ1bGUgPyB0aGlzLnJ1bGUudG9TdHJpbmcob3B0aW9ucykgOiAnJztcbiAgfTtcblxuICByZXR1cm4gR2xvYmFsUHJlZml4ZWRSdWxlO1xufSgpO1xuXG52YXIgc2VwYXJhdG9yUmVnRXhwID0gL1xccyosXFxzKi9nO1xuXG5mdW5jdGlvbiBhZGRTY29wZShzZWxlY3Rvciwgc2NvcGUpIHtcbiAgdmFyIHBhcnRzID0gc2VsZWN0b3Iuc3BsaXQoc2VwYXJhdG9yUmVnRXhwKTtcbiAgdmFyIHNjb3BlZCA9ICcnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBzY29wZWQgKz0gc2NvcGUgKyBcIiBcIiArIHBhcnRzW2ldLnRyaW0oKTtcbiAgICBpZiAocGFydHNbaSArIDFdKSBzY29wZWQgKz0gJywgJztcbiAgfVxuXG4gIHJldHVybiBzY29wZWQ7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU5lc3RlZEdsb2JhbENvbnRhaW5lclJ1bGUocnVsZSwgc2hlZXQpIHtcbiAgdmFyIG9wdGlvbnMgPSBydWxlLm9wdGlvbnMsXG4gICAgICBzdHlsZSA9IHJ1bGUuc3R5bGU7XG4gIHZhciBydWxlcyA9IHN0eWxlID8gc3R5bGVbYXRdIDogbnVsbDtcbiAgaWYgKCFydWxlcykgcmV0dXJuO1xuXG4gIGZvciAodmFyIG5hbWUgaW4gcnVsZXMpIHtcbiAgICBzaGVldC5hZGRSdWxlKG5hbWUsIHJ1bGVzW25hbWVdLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgc2VsZWN0b3I6IGFkZFNjb3BlKG5hbWUsIHJ1bGUuc2VsZWN0b3IpXG4gICAgfSkpO1xuICB9XG5cbiAgZGVsZXRlIHN0eWxlW2F0XTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJlZml4ZWRHbG9iYWxSdWxlKHJ1bGUsIHNoZWV0KSB7XG4gIHZhciBvcHRpb25zID0gcnVsZS5vcHRpb25zLFxuICAgICAgc3R5bGUgPSBydWxlLnN0eWxlO1xuXG4gIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICBpZiAocHJvcFswXSAhPT0gJ0AnIHx8IHByb3Auc3Vic3RyKDAsIGF0Lmxlbmd0aCkgIT09IGF0KSBjb250aW51ZTtcbiAgICB2YXIgc2VsZWN0b3IgPSBhZGRTY29wZShwcm9wLnN1YnN0cihhdC5sZW5ndGgpLCBydWxlLnNlbGVjdG9yKTtcbiAgICBzaGVldC5hZGRSdWxlKHNlbGVjdG9yLCBzdHlsZVtwcm9wXSwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIHNlbGVjdG9yOiBzZWxlY3RvclxuICAgIH0pKTtcbiAgICBkZWxldGUgc3R5bGVbcHJvcF07XG4gIH1cbn1cbi8qKlxuICogQ29udmVydCBuZXN0ZWQgcnVsZXMgdG8gc2VwYXJhdGUsIHJlbW92ZSB0aGVtIGZyb20gb3JpZ2luYWwgc3R5bGVzLlxuICpcbiAqIEBwYXJhbSB7UnVsZX0gcnVsZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5cbmZ1bmN0aW9uIGpzc0dsb2JhbCgpIHtcbiAgZnVuY3Rpb24gb25DcmVhdGVSdWxlKG5hbWUsIHN0eWxlcywgb3B0aW9ucykge1xuICAgIGlmICghbmFtZSkgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAobmFtZSA9PT0gYXQpIHtcbiAgICAgIHJldHVybiBuZXcgR2xvYmFsQ29udGFpbmVyUnVsZShuYW1lLCBzdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChuYW1lWzBdID09PSAnQCcgJiYgbmFtZS5zdWJzdHIoMCwgYXRQcmVmaXgubGVuZ3RoKSA9PT0gYXRQcmVmaXgpIHtcbiAgICAgIHJldHVybiBuZXcgR2xvYmFsUHJlZml4ZWRSdWxlKG5hbWUsIHN0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgdmFyIHBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgaWYgKHBhcmVudC50eXBlID09PSAnZ2xvYmFsJyB8fCBwYXJlbnQub3B0aW9ucy5wYXJlbnQgJiYgcGFyZW50Lm9wdGlvbnMucGFyZW50LnR5cGUgPT09ICdnbG9iYWwnKSB7XG4gICAgICAgIG9wdGlvbnMuc2NvcGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc2NvcGVkID09PSBmYWxzZSkge1xuICAgICAgb3B0aW9ucy5zZWxlY3RvciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBvblByb2Nlc3NSdWxlKHJ1bGUsIHNoZWV0KSB7XG4gICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3N0eWxlJyB8fCAhc2hlZXQpIHJldHVybjtcbiAgICBoYW5kbGVOZXN0ZWRHbG9iYWxDb250YWluZXJSdWxlKHJ1bGUsIHNoZWV0KTtcbiAgICBoYW5kbGVQcmVmaXhlZEdsb2JhbFJ1bGUocnVsZSwgc2hlZXQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvbkNyZWF0ZVJ1bGU6IG9uQ3JlYXRlUnVsZSxcbiAgICBvblByb2Nlc3NSdWxlOiBvblByb2Nlc3NSdWxlXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpzc0dsb2JhbDtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3Rpbnktd2FybmluZyc7XG5cbnZhciBzZXBhcmF0b3JSZWdFeHAgPSAvXFxzKixcXHMqL2c7XG52YXIgcGFyZW50UmVnRXhwID0gLyYvZztcbnZhciByZWZSZWdFeHAgPSAvXFwkKFtcXHctXSspL2c7XG4vKipcbiAqIENvbnZlcnQgbmVzdGVkIHJ1bGVzIHRvIHNlcGFyYXRlLCByZW1vdmUgdGhlbSBmcm9tIG9yaWdpbmFsIHN0eWxlcy5cbiAqXG4gKiBAcGFyYW0ge1J1bGV9IHJ1bGVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24ganNzTmVzdGVkKCkge1xuICAvLyBHZXQgYSBmdW5jdGlvbiB0byBiZSB1c2VkIGZvciAkcmVmIHJlcGxhY2VtZW50LlxuICBmdW5jdGlvbiBnZXRSZXBsYWNlUmVmKGNvbnRhaW5lciwgc2hlZXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1hdGNoLCBrZXkpIHtcbiAgICAgIHZhciBydWxlID0gY29udGFpbmVyLmdldFJ1bGUoa2V5KSB8fCBzaGVldCAmJiBzaGVldC5nZXRSdWxlKGtleSk7XG5cbiAgICAgIGlmIChydWxlKSB7XG4gICAgICAgIHJ1bGUgPSBydWxlO1xuICAgICAgICByZXR1cm4gcnVsZS5zZWxlY3RvcjtcbiAgICAgIH1cblxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBDb3VsZCBub3QgZmluZCB0aGUgcmVmZXJlbmNlZCBydWxlIFxcXCJcIiArIGtleSArIFwiXFxcIiBpbiBcXFwiXCIgKyAoY29udGFpbmVyLm9wdGlvbnMubWV0YSB8fCBjb250YWluZXIudG9TdHJpbmcoKSkgKyBcIlxcXCIuXCIpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZVBhcmVudFJlZnMobmVzdGVkUHJvcCwgcGFyZW50UHJvcCkge1xuICAgIHZhciBwYXJlbnRTZWxlY3RvcnMgPSBwYXJlbnRQcm9wLnNwbGl0KHNlcGFyYXRvclJlZ0V4cCk7XG4gICAgdmFyIG5lc3RlZFNlbGVjdG9ycyA9IG5lc3RlZFByb3Auc3BsaXQoc2VwYXJhdG9yUmVnRXhwKTtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudFNlbGVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBhcmVudCA9IHBhcmVudFNlbGVjdG9yc1tpXTtcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBuZXN0ZWRTZWxlY3RvcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIG5lc3RlZCA9IG5lc3RlZFNlbGVjdG9yc1tqXTtcbiAgICAgICAgaWYgKHJlc3VsdCkgcmVzdWx0ICs9ICcsICc7IC8vIFJlcGxhY2UgYWxsICYgYnkgdGhlIHBhcmVudCBvciBwcmVmaXggJiB3aXRoIHRoZSBwYXJlbnQuXG5cbiAgICAgICAgcmVzdWx0ICs9IG5lc3RlZC5pbmRleE9mKCcmJykgIT09IC0xID8gbmVzdGVkLnJlcGxhY2UocGFyZW50UmVnRXhwLCBwYXJlbnQpIDogcGFyZW50ICsgXCIgXCIgKyBuZXN0ZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE9wdGlvbnMocnVsZSwgY29udGFpbmVyLCBwcmV2T3B0aW9ucykge1xuICAgIC8vIE9wdGlvbnMgaGFzIGJlZW4gYWxyZWFkeSBjcmVhdGVkLCBub3cgd2Ugb25seSBpbmNyZWFzZSBpbmRleC5cbiAgICBpZiAocHJldk9wdGlvbnMpIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJldk9wdGlvbnMsIHtcbiAgICAgIGluZGV4OiBwcmV2T3B0aW9ucy5pbmRleCArIDEgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG5cbiAgICB9KTtcbiAgICB2YXIgbmVzdGluZ0xldmVsID0gcnVsZS5vcHRpb25zLm5lc3RpbmdMZXZlbDtcbiAgICBuZXN0aW5nTGV2ZWwgPSBuZXN0aW5nTGV2ZWwgPT09IHVuZGVmaW5lZCA/IDEgOiBuZXN0aW5nTGV2ZWwgKyAxO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgcnVsZS5vcHRpb25zLCB7XG4gICAgICBuZXN0aW5nTGV2ZWw6IG5lc3RpbmdMZXZlbCxcbiAgICAgIGluZGV4OiBjb250YWluZXIuaW5kZXhPZihydWxlKSArIDEgLy8gV2UgZG9uJ3QgbmVlZCB0aGUgcGFyZW50IG5hbWUgdG8gYmUgc2V0IG9wdGlvbnMgZm9yIGNobGlkLlxuXG4gICAgfSk7XG5cbiAgICBkZWxldGUgb3B0aW9ucy5uYW1lO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUsIHJ1bGUsIHNoZWV0KSB7XG4gICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3N0eWxlJykgcmV0dXJuIHN0eWxlO1xuICAgIHZhciBzdHlsZVJ1bGUgPSBydWxlO1xuICAgIHZhciBjb250YWluZXIgPSBzdHlsZVJ1bGUub3B0aW9ucy5wYXJlbnQ7XG4gICAgdmFyIG9wdGlvbnM7XG4gICAgdmFyIHJlcGxhY2VSZWY7XG5cbiAgICBmb3IgKHZhciBwcm9wIGluIHN0eWxlKSB7XG4gICAgICB2YXIgaXNOZXN0ZWQgPSBwcm9wLmluZGV4T2YoJyYnKSAhPT0gLTE7XG4gICAgICB2YXIgaXNOZXN0ZWRDb25kaXRpb25hbCA9IHByb3BbMF0gPT09ICdAJztcbiAgICAgIGlmICghaXNOZXN0ZWQgJiYgIWlzTmVzdGVkQ29uZGl0aW9uYWwpIGNvbnRpbnVlO1xuICAgICAgb3B0aW9ucyA9IGdldE9wdGlvbnMoc3R5bGVSdWxlLCBjb250YWluZXIsIG9wdGlvbnMpO1xuXG4gICAgICBpZiAoaXNOZXN0ZWQpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gcmVwbGFjZVBhcmVudFJlZnMocHJvcCwgc3R5bGVSdWxlLnNlbGVjdG9yKTsgLy8gTGF6aWx5IGNyZWF0ZSB0aGUgcmVmIHJlcGxhY2VyIGZ1bmN0aW9uIGp1c3Qgb25jZSBmb3JcbiAgICAgICAgLy8gYWxsIG5lc3RlZCBydWxlcyB3aXRoaW4gdGhlIHNoZWV0LlxuXG4gICAgICAgIGlmICghcmVwbGFjZVJlZikgcmVwbGFjZVJlZiA9IGdldFJlcGxhY2VSZWYoY29udGFpbmVyLCBzaGVldCk7IC8vIFJlcGxhY2UgYWxsICRyZWZzLlxuXG4gICAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZShyZWZSZWdFeHAsIHJlcGxhY2VSZWYpO1xuICAgICAgICBjb250YWluZXIuYWRkUnVsZShzZWxlY3Rvciwgc3R5bGVbcHJvcF0sIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNOZXN0ZWRDb25kaXRpb25hbCkge1xuICAgICAgICAvLyBQbGFjZSBjb25kaXRpb25hbCByaWdodCBhZnRlciB0aGUgcGFyZW50IHJ1bGUgdG8gZW5zdXJlIHJpZ2h0IG9yZGVyaW5nLlxuICAgICAgICBjb250YWluZXIuYWRkUnVsZShwcm9wLCB7fSwgb3B0aW9ucykgLy8gRmxvdyBleHBlY3RzIG1vcmUgb3B0aW9ucyBidXQgdGhleSBhcmVuJ3QgcmVxdWlyZWRcbiAgICAgICAgLy8gQW5kIGZsb3cgZG9lc24ndCBrbm93IHRoaXMgd2lsbCBhbHdheXMgYmUgYSBTdHlsZVJ1bGUgd2hpY2ggaGFzIHRoZSBhZGRSdWxlIG1ldGhvZFxuICAgICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS11c2VdXG4gICAgICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgICAuYWRkUnVsZShzdHlsZVJ1bGUua2V5LCBzdHlsZVtwcm9wXSwge1xuICAgICAgICAgIHNlbGVjdG9yOiBzdHlsZVJ1bGUuc2VsZWN0b3JcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBzdHlsZVtwcm9wXTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uUHJvY2Vzc1N0eWxlOiBvblByb2Nlc3NTdHlsZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc3NOZXN0ZWQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby12YXIsIHByZWZlci10ZW1wbGF0ZSAqL1xudmFyIHVwcGVyY2FzZVBhdHRlcm4gPSAvW0EtWl0vZ1xudmFyIG1zUGF0dGVybiA9IC9ebXMtL1xudmFyIGNhY2hlID0ge31cblxuZnVuY3Rpb24gdG9IeXBoZW5Mb3dlcihtYXRjaCkge1xuICByZXR1cm4gJy0nICsgbWF0Y2gudG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUobmFtZSkge1xuICBpZiAoY2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICByZXR1cm4gY2FjaGVbbmFtZV1cbiAgfVxuXG4gIHZhciBoTmFtZSA9IG5hbWUucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCB0b0h5cGhlbkxvd2VyKVxuICByZXR1cm4gKGNhY2hlW25hbWVdID0gbXNQYXR0ZXJuLnRlc3QoaE5hbWUpID8gJy0nICsgaE5hbWUgOiBoTmFtZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaHlwaGVuYXRlU3R5bGVOYW1lXG4iLCJpbXBvcnQgaHlwaGVuYXRlIGZyb20gJ2h5cGhlbmF0ZS1zdHlsZS1uYW1lJztcblxuLyoqXG4gKiBDb252ZXJ0IGNhbWVsIGNhc2VkIHByb3BlcnR5IG5hbWVzIHRvIGRhc2ggc2VwYXJhdGVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIGNvbnZlcnRDYXNlKHN0eWxlKSB7XG4gIHZhciBjb252ZXJ0ZWQgPSB7fTtcblxuICBmb3IgKHZhciBwcm9wIGluIHN0eWxlKSB7XG4gICAgdmFyIGtleSA9IHByb3AuaW5kZXhPZignLS0nKSA9PT0gMCA/IHByb3AgOiBoeXBoZW5hdGUocHJvcCk7XG4gICAgY29udmVydGVkW2tleV0gPSBzdHlsZVtwcm9wXTtcbiAgfVxuXG4gIGlmIChzdHlsZS5mYWxsYmFja3MpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZS5mYWxsYmFja3MpKSBjb252ZXJ0ZWQuZmFsbGJhY2tzID0gc3R5bGUuZmFsbGJhY2tzLm1hcChjb252ZXJ0Q2FzZSk7ZWxzZSBjb252ZXJ0ZWQuZmFsbGJhY2tzID0gY29udmVydENhc2Uoc3R5bGUuZmFsbGJhY2tzKTtcbiAgfVxuXG4gIHJldHVybiBjb252ZXJ0ZWQ7XG59XG4vKipcbiAqIEFsbG93IGNhbWVsIGNhc2VkIHByb3BlcnR5IG5hbWVzIGJ5IGNvbnZlcnRpbmcgdGhlbSBiYWNrIHRvIGRhc2hlcml6ZWQuXG4gKlxuICogQHBhcmFtIHtSdWxlfSBydWxlXG4gKi9cblxuXG5mdW5jdGlvbiBjYW1lbENhc2UoKSB7XG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGUpKSB7XG4gICAgICAvLyBIYW5kbGUgcnVsZXMgbGlrZSBAZm9udC1mYWNlLCB3aGljaCBjYW4gaGF2ZSBtdWx0aXBsZSBzdHlsZXMgaW4gYW4gYXJyYXlcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgc3R5bGVbaW5kZXhdID0gY29udmVydENhc2Uoc3R5bGVbaW5kZXhdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIHJldHVybiBjb252ZXJ0Q2FzZShzdHlsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZVZhbHVlKHZhbHVlLCBwcm9wLCBydWxlKSB7XG4gICAgaWYgKHByb3AuaW5kZXhPZignLS0nKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHZhciBoeXBoZW5hdGVkUHJvcCA9IGh5cGhlbmF0ZShwcm9wKTsgLy8gVGhlcmUgd2FzIG5vIGNhbWVsIGNhc2UgaW4gcGxhY2VcblxuICAgIGlmIChwcm9wID09PSBoeXBoZW5hdGVkUHJvcCkgcmV0dXJuIHZhbHVlO1xuICAgIHJ1bGUucHJvcChoeXBoZW5hdGVkUHJvcCwgdmFsdWUpOyAvLyBDb3JlIHdpbGwgaWdub3JlIHRoYXQgcHJvcGVydHkgdmFsdWUgd2Ugc2V0IHRoZSBwcm9wZXIgb25lIGFib3ZlLlxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uUHJvY2Vzc1N0eWxlOiBvblByb2Nlc3NTdHlsZSxcbiAgICBvbkNoYW5nZVZhbHVlOiBvbkNoYW5nZVZhbHVlXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbWVsQ2FzZTtcbiIsImltcG9ydCB7IGhhc0NTU1RPTVN1cHBvcnQgfSBmcm9tICdqc3MnO1xuXG52YXIgcHggPSBoYXNDU1NUT01TdXBwb3J0ICYmIENTUyA/IENTUy5weCA6ICdweCc7XG52YXIgbXMgPSBoYXNDU1NUT01TdXBwb3J0ICYmIENTUyA/IENTUy5tcyA6ICdtcyc7XG52YXIgcGVyY2VudCA9IGhhc0NTU1RPTVN1cHBvcnQgJiYgQ1NTID8gQ1NTLnBlcmNlbnQgOiAnJSc7XG4vKipcbiAqIEdlbmVyYXRlZCBqc3MtcGx1Z2luLWRlZmF1bHQtdW5pdCBDU1MgcHJvcGVydHkgdW5pdHNcbiAqXG4gKiBAdHlwZSBvYmplY3RcbiAqL1xuXG52YXIgZGVmYXVsdFVuaXRzID0ge1xuICAvLyBBbmltYXRpb24gcHJvcGVydGllc1xuICAnYW5pbWF0aW9uLWRlbGF5JzogbXMsXG4gICdhbmltYXRpb24tZHVyYXRpb24nOiBtcyxcbiAgLy8gQmFja2dyb3VuZCBwcm9wZXJ0aWVzXG4gICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogcHgsXG4gICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXgnOiBweCxcbiAgJ2JhY2tncm91bmQtcG9zaXRpb24teSc6IHB4LFxuICAnYmFja2dyb3VuZC1zaXplJzogcHgsXG4gIC8vIEJvcmRlciBQcm9wZXJ0aWVzXG4gIGJvcmRlcjogcHgsXG4gICdib3JkZXItYm90dG9tJzogcHgsXG4gICdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJzogcHgsXG4gICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cyc6IHB4LFxuICAnYm9yZGVyLWJvdHRvbS13aWR0aCc6IHB4LFxuICAnYm9yZGVyLWxlZnQnOiBweCxcbiAgJ2JvcmRlci1sZWZ0LXdpZHRoJzogcHgsXG4gICdib3JkZXItcmFkaXVzJzogcHgsXG4gICdib3JkZXItcmlnaHQnOiBweCxcbiAgJ2JvcmRlci1yaWdodC13aWR0aCc6IHB4LFxuICAnYm9yZGVyLXRvcCc6IHB4LFxuICAnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cyc6IHB4LFxuICAnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnOiBweCxcbiAgJ2JvcmRlci10b3Atd2lkdGgnOiBweCxcbiAgJ2JvcmRlci13aWR0aCc6IHB4LFxuICAnYm9yZGVyLWJsb2NrJzogcHgsXG4gICdib3JkZXItYmxvY2stZW5kJzogcHgsXG4gICdib3JkZXItYmxvY2stZW5kLXdpZHRoJzogcHgsXG4gICdib3JkZXItYmxvY2stc3RhcnQnOiBweCxcbiAgJ2JvcmRlci1ibG9jay1zdGFydC13aWR0aCc6IHB4LFxuICAnYm9yZGVyLWJsb2NrLXdpZHRoJzogcHgsXG4gICdib3JkZXItaW5saW5lJzogcHgsXG4gICdib3JkZXItaW5saW5lLWVuZCc6IHB4LFxuICAnYm9yZGVyLWlubGluZS1lbmQtd2lkdGgnOiBweCxcbiAgJ2JvcmRlci1pbmxpbmUtc3RhcnQnOiBweCxcbiAgJ2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGgnOiBweCxcbiAgJ2JvcmRlci1pbmxpbmUtd2lkdGgnOiBweCxcbiAgJ2JvcmRlci1zdGFydC1zdGFydC1yYWRpdXMnOiBweCxcbiAgJ2JvcmRlci1zdGFydC1lbmQtcmFkaXVzJzogcHgsXG4gICdib3JkZXItZW5kLXN0YXJ0LXJhZGl1cyc6IHB4LFxuICAnYm9yZGVyLWVuZC1lbmQtcmFkaXVzJzogcHgsXG4gIC8vIE1hcmdpbiBwcm9wZXJ0aWVzXG4gIG1hcmdpbjogcHgsXG4gICdtYXJnaW4tYm90dG9tJzogcHgsXG4gICdtYXJnaW4tbGVmdCc6IHB4LFxuICAnbWFyZ2luLXJpZ2h0JzogcHgsXG4gICdtYXJnaW4tdG9wJzogcHgsXG4gICdtYXJnaW4tYmxvY2snOiBweCxcbiAgJ21hcmdpbi1ibG9jay1lbmQnOiBweCxcbiAgJ21hcmdpbi1ibG9jay1zdGFydCc6IHB4LFxuICAnbWFyZ2luLWlubGluZSc6IHB4LFxuICAnbWFyZ2luLWlubGluZS1lbmQnOiBweCxcbiAgJ21hcmdpbi1pbmxpbmUtc3RhcnQnOiBweCxcbiAgLy8gUGFkZGluZyBwcm9wZXJ0aWVzXG4gIHBhZGRpbmc6IHB4LFxuICAncGFkZGluZy1ib3R0b20nOiBweCxcbiAgJ3BhZGRpbmctbGVmdCc6IHB4LFxuICAncGFkZGluZy1yaWdodCc6IHB4LFxuICAncGFkZGluZy10b3AnOiBweCxcbiAgJ3BhZGRpbmctYmxvY2snOiBweCxcbiAgJ3BhZGRpbmctYmxvY2stZW5kJzogcHgsXG4gICdwYWRkaW5nLWJsb2NrLXN0YXJ0JzogcHgsXG4gICdwYWRkaW5nLWlubGluZSc6IHB4LFxuICAncGFkZGluZy1pbmxpbmUtZW5kJzogcHgsXG4gICdwYWRkaW5nLWlubGluZS1zdGFydCc6IHB4LFxuICAvLyBNYXNrIHByb3BlcnRpZXNcbiAgJ21hc2stcG9zaXRpb24teCc6IHB4LFxuICAnbWFzay1wb3NpdGlvbi15JzogcHgsXG4gICdtYXNrLXNpemUnOiBweCxcbiAgLy8gV2lkdGggYW5kIGhlaWdodCBwcm9wZXJ0aWVzXG4gIGhlaWdodDogcHgsXG4gIHdpZHRoOiBweCxcbiAgJ21pbi1oZWlnaHQnOiBweCxcbiAgJ21heC1oZWlnaHQnOiBweCxcbiAgJ21pbi13aWR0aCc6IHB4LFxuICAnbWF4LXdpZHRoJzogcHgsXG4gIC8vIFBvc2l0aW9uIHByb3BlcnRpZXNcbiAgYm90dG9tOiBweCxcbiAgbGVmdDogcHgsXG4gIHRvcDogcHgsXG4gIHJpZ2h0OiBweCxcbiAgaW5zZXQ6IHB4LFxuICAnaW5zZXQtYmxvY2snOiBweCxcbiAgJ2luc2V0LWJsb2NrLWVuZCc6IHB4LFxuICAnaW5zZXQtYmxvY2stc3RhcnQnOiBweCxcbiAgJ2luc2V0LWlubGluZSc6IHB4LFxuICAnaW5zZXQtaW5saW5lLWVuZCc6IHB4LFxuICAnaW5zZXQtaW5saW5lLXN0YXJ0JzogcHgsXG4gIC8vIFNoYWRvdyBwcm9wZXJ0aWVzXG4gICdib3gtc2hhZG93JzogcHgsXG4gICd0ZXh0LXNoYWRvdyc6IHB4LFxuICAvLyBDb2x1bW4gcHJvcGVydGllc1xuICAnY29sdW1uLWdhcCc6IHB4LFxuICAnY29sdW1uLXJ1bGUnOiBweCxcbiAgJ2NvbHVtbi1ydWxlLXdpZHRoJzogcHgsXG4gICdjb2x1bW4td2lkdGgnOiBweCxcbiAgLy8gRm9udCBhbmQgdGV4dCBwcm9wZXJ0aWVzXG4gICdmb250LXNpemUnOiBweCxcbiAgJ2ZvbnQtc2l6ZS1kZWx0YSc6IHB4LFxuICAnbGV0dGVyLXNwYWNpbmcnOiBweCxcbiAgJ3RleHQtZGVjb3JhdGlvbi10aGlja25lc3MnOiBweCxcbiAgJ3RleHQtaW5kZW50JzogcHgsXG4gICd0ZXh0LXN0cm9rZSc6IHB4LFxuICAndGV4dC1zdHJva2Utd2lkdGgnOiBweCxcbiAgJ3dvcmQtc3BhY2luZyc6IHB4LFxuICAvLyBNb3Rpb24gcHJvcGVydGllc1xuICBtb3Rpb246IHB4LFxuICAnbW90aW9uLW9mZnNldCc6IHB4LFxuICAvLyBPdXRsaW5lIHByb3BlcnRpZXNcbiAgb3V0bGluZTogcHgsXG4gICdvdXRsaW5lLW9mZnNldCc6IHB4LFxuICAnb3V0bGluZS13aWR0aCc6IHB4LFxuICAvLyBQZXJzcGVjdGl2ZSBwcm9wZXJ0aWVzXG4gIHBlcnNwZWN0aXZlOiBweCxcbiAgJ3BlcnNwZWN0aXZlLW9yaWdpbi14JzogcGVyY2VudCxcbiAgJ3BlcnNwZWN0aXZlLW9yaWdpbi15JzogcGVyY2VudCxcbiAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgJ3RyYW5zZm9ybS1vcmlnaW4nOiBwZXJjZW50LFxuICAndHJhbnNmb3JtLW9yaWdpbi14JzogcGVyY2VudCxcbiAgJ3RyYW5zZm9ybS1vcmlnaW4teSc6IHBlcmNlbnQsXG4gICd0cmFuc2Zvcm0tb3JpZ2luLXonOiBwZXJjZW50LFxuICAvLyBUcmFuc2l0aW9uIHByb3BlcnRpZXNcbiAgJ3RyYW5zaXRpb24tZGVsYXknOiBtcyxcbiAgJ3RyYW5zaXRpb24tZHVyYXRpb24nOiBtcyxcbiAgLy8gQWxpZ25tZW50IHByb3BlcnRpZXNcbiAgJ3ZlcnRpY2FsLWFsaWduJzogcHgsXG4gICdmbGV4LWJhc2lzJzogcHgsXG4gIC8vIFNvbWUgcmFuZG9tIHByb3BlcnRpZXNcbiAgJ3NoYXBlLW1hcmdpbic6IHB4LFxuICBzaXplOiBweCxcbiAgZ2FwOiBweCxcbiAgLy8gR3JpZCBwcm9wZXJ0aWVzXG4gIGdyaWQ6IHB4LFxuICAnZ3JpZC1nYXAnOiBweCxcbiAgJ3Jvdy1nYXAnOiBweCxcbiAgJ2dyaWQtcm93LWdhcCc6IHB4LFxuICAnZ3JpZC1jb2x1bW4tZ2FwJzogcHgsXG4gICdncmlkLXRlbXBsYXRlLXJvd3MnOiBweCxcbiAgJ2dyaWQtdGVtcGxhdGUtY29sdW1ucyc6IHB4LFxuICAnZ3JpZC1hdXRvLXJvd3MnOiBweCxcbiAgJ2dyaWQtYXV0by1jb2x1bW5zJzogcHgsXG4gIC8vIE5vdCBleGlzdGluZyBwcm9wZXJ0aWVzLlxuICAvLyBVc2VkIHRvIGF2b2lkIGlzc3VlcyB3aXRoIGpzcy1wbHVnaW4tZXhwYW5kIGludGVncmF0aW9uLlxuICAnYm94LXNoYWRvdy14JzogcHgsXG4gICdib3gtc2hhZG93LXknOiBweCxcbiAgJ2JveC1zaGFkb3ctYmx1cic6IHB4LFxuICAnYm94LXNoYWRvdy1zcHJlYWQnOiBweCxcbiAgJ2ZvbnQtbGluZS1oZWlnaHQnOiBweCxcbiAgJ3RleHQtc2hhZG93LXgnOiBweCxcbiAgJ3RleHQtc2hhZG93LXknOiBweCxcbiAgJ3RleHQtc2hhZG93LWJsdXInOiBweFxufTtcblxuLyoqXG4gKiBDbG9uZXMgdGhlIG9iamVjdCBhbmQgYWRkcyBhIGNhbWVsIGNhc2VkIHByb3BlcnR5IHZlcnNpb24uXG4gKi9cbmZ1bmN0aW9uIGFkZENhbWVsQ2FzZWRWZXJzaW9uKG9iaikge1xuICB2YXIgcmVnRXhwID0gLygtW2Etel0pL2c7XG5cbiAgdmFyIHJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlKHN0cikge1xuICAgIHJldHVybiBzdHJbMV0udG9VcHBlckNhc2UoKTtcbiAgfTtcblxuICB2YXIgbmV3T2JqID0ge307XG5cbiAgZm9yICh2YXIgX2tleSBpbiBvYmopIHtcbiAgICBuZXdPYmpbX2tleV0gPSBvYmpbX2tleV07XG4gICAgbmV3T2JqW19rZXkucmVwbGFjZShyZWdFeHAsIHJlcGxhY2UpXSA9IG9ialtfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbnZhciB1bml0cyA9IGFkZENhbWVsQ2FzZWRWZXJzaW9uKGRlZmF1bHRVbml0cyk7XG4vKipcbiAqIFJlY3Vyc2l2ZSBkZWVwIHN0eWxlIHBhc3NpbmcgZnVuY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBpdGVyYXRlKHByb3AsIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdmFsdWU7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVbaV0gPSBpdGVyYXRlKHByb3AsIHZhbHVlW2ldLCBvcHRpb25zKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChwcm9wID09PSAnZmFsbGJhY2tzJykge1xuICAgICAgZm9yICh2YXIgaW5uZXJQcm9wIGluIHZhbHVlKSB7XG4gICAgICAgIHZhbHVlW2lubmVyUHJvcF0gPSBpdGVyYXRlKGlubmVyUHJvcCwgdmFsdWVbaW5uZXJQcm9wXSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIF9pbm5lclByb3AgaW4gdmFsdWUpIHtcbiAgICAgICAgdmFsdWVbX2lubmVyUHJvcF0gPSBpdGVyYXRlKHByb3AgKyBcIi1cIiArIF9pbm5lclByb3AsIHZhbHVlW19pbm5lclByb3BdLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcblxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsdWUpID09PSBmYWxzZSkge1xuICAgIHZhciB1bml0ID0gb3B0aW9uc1twcm9wXSB8fCB1bml0c1twcm9wXTsgLy8gQWRkIHRoZSB1bml0IGlmIGF2YWlsYWJsZSwgZXhjZXB0IGZvciB0aGUgc3BlY2lhbCBjYXNlIG9mIDBweC5cblxuICAgIGlmICh1bml0ICYmICEodmFsdWUgPT09IDAgJiYgdW5pdCA9PT0gcHgpKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHVuaXQgPT09ICdmdW5jdGlvbicgPyB1bml0KHZhbHVlKS50b1N0cmluZygpIDogXCJcIiArIHZhbHVlICsgdW5pdDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogQWRkIHVuaXQgdG8gbnVtZXJpYyB2YWx1ZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBkZWZhdWx0VW5pdChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgY2FtZWxDYXNlZE9wdGlvbnMgPSBhZGRDYW1lbENhc2VkVmVyc2lvbihvcHRpb25zKTtcblxuICBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSkge1xuICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybiBzdHlsZTtcblxuICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICAgIHN0eWxlW3Byb3BdID0gaXRlcmF0ZShwcm9wLCBzdHlsZVtwcm9wXSwgY2FtZWxDYXNlZE9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlVmFsdWUodmFsdWUsIHByb3ApIHtcbiAgICByZXR1cm4gaXRlcmF0ZShwcm9wLCB2YWx1ZSwgY2FtZWxDYXNlZE9wdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvblByb2Nlc3NTdHlsZTogb25Qcm9jZXNzU3R5bGUsXG4gICAgb25DaGFuZ2VWYWx1ZTogb25DaGFuZ2VWYWx1ZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0VW5pdDtcbiIsImltcG9ydCBpc0luQnJvd3NlciBmcm9tICdpcy1pbi1icm93c2VyJztcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXknO1xuXG4vLyBFeHBvcnQgamF2YXNjcmlwdCBzdHlsZSBhbmQgY3NzIHN0eWxlIHZlbmRvciBwcmVmaXhlcy5cbnZhciBqcyA9ICcnO1xudmFyIGNzcyA9ICcnO1xudmFyIHZlbmRvciA9ICcnO1xudmFyIGJyb3dzZXIgPSAnJztcbnZhciBpc1RvdWNoID0gaXNJbkJyb3dzZXIgJiYgJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAvLyBXZSBzaG91bGQgbm90IGRvIGFueXRoaW5nIGlmIHJlcXVpcmVkIHNlcnZlcnNpZGUuXG5cbmlmIChpc0luQnJvd3Nlcikge1xuICAvLyBPcmRlciBtYXR0ZXJzLiBXZSBuZWVkIHRvIGNoZWNrIFdlYmtpdCB0aGUgbGFzdCBvbmUgYmVjYXVzZVxuICAvLyBvdGhlciB2ZW5kb3JzIHVzZSB0byBhZGQgV2Via2l0IHByZWZpeGVzIHRvIHNvbWUgcHJvcGVydGllc1xuICB2YXIganNDc3NNYXAgPSB7XG4gICAgTW96OiAnLW1vei0nLFxuICAgIG1zOiAnLW1zLScsXG4gICAgTzogJy1vLScsXG4gICAgV2Via2l0OiAnLXdlYmtpdC0nXG4gIH07XG5cbiAgdmFyIF9kb2N1bWVudCRjcmVhdGVFbGVtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcbiAgICAgIHN0eWxlID0gX2RvY3VtZW50JGNyZWF0ZUVsZW1lLnN0eWxlO1xuXG4gIHZhciB0ZXN0UHJvcCA9ICdUcmFuc2Zvcm0nO1xuXG4gIGZvciAodmFyIGtleSBpbiBqc0Nzc01hcCkge1xuICAgIGlmIChrZXkgKyB0ZXN0UHJvcCBpbiBzdHlsZSkge1xuICAgICAganMgPSBrZXk7XG4gICAgICBjc3MgPSBqc0Nzc01hcFtrZXldO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9IC8vIENvcnJlY3RseSBkZXRlY3QgdGhlIEVkZ2UgYnJvd3Nlci5cblxuXG4gIGlmIChqcyA9PT0gJ1dlYmtpdCcgJiYgJ21zSHlwaGVucycgaW4gc3R5bGUpIHtcbiAgICBqcyA9ICdtcyc7XG4gICAgY3NzID0ganNDc3NNYXAubXM7XG4gICAgYnJvd3NlciA9ICdlZGdlJztcbiAgfSAvLyBDb3JyZWN0bHkgZGV0ZWN0IHRoZSBTYWZhcmkgYnJvd3Nlci5cblxuXG4gIGlmIChqcyA9PT0gJ1dlYmtpdCcgJiYgJy1hcHBsZS10cmFpbGluZy13b3JkJyBpbiBzdHlsZSkge1xuICAgIHZlbmRvciA9ICdhcHBsZSc7XG4gIH1cbn1cbi8qKlxuICogVmVuZG9yIHByZWZpeCBzdHJpbmcgZm9yIHRoZSBjdXJyZW50IGJyb3dzZXIuXG4gKlxuICogQHR5cGUge3tqczogU3RyaW5nLCBjc3M6IFN0cmluZywgdmVuZG9yOiBTdHJpbmcsIGJyb3dzZXI6IFN0cmluZ319XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxudmFyIHByZWZpeCA9IHtcbiAganM6IGpzLFxuICBjc3M6IGNzcyxcbiAgdmVuZG9yOiB2ZW5kb3IsXG4gIGJyb3dzZXI6IGJyb3dzZXIsXG4gIGlzVG91Y2g6IGlzVG91Y2hcbn07XG5cbi8qKlxuICogVGVzdCBpZiBhIGtleWZyYW1lIGF0LXJ1bGUgc2hvdWxkIGJlIHByZWZpeGVkIG9yIG5vdFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2ZW5kb3IgcHJlZml4IHN0cmluZyBmb3IgdGhlIGN1cnJlbnQgYnJvd3Nlci5cbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydGVkS2V5ZnJhbWVzKGtleSkge1xuICAvLyBLZXlmcmFtZXMgaXMgYWxyZWFkeSBwcmVmaXhlZC4gZS5nLiBrZXkgPSAnQC13ZWJraXQta2V5ZnJhbWVzIGEnXG4gIGlmIChrZXlbMV0gPT09ICctJykgcmV0dXJuIGtleTsgLy8gTm8gbmVlZCB0byBwcmVmaXggSUUvRWRnZS4gT2xkZXIgYnJvd3NlcnMgd2lsbCBpZ25vcmUgdW5zdXBwb3J0ZWQgcnVsZXMuXG4gIC8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1rZXlmcmFtZXNcblxuICBpZiAocHJlZml4LmpzID09PSAnbXMnKSByZXR1cm4ga2V5O1xuICByZXR1cm4gXCJAXCIgKyBwcmVmaXguY3NzICsgXCJrZXlmcmFtZXNcIiArIGtleS5zdWJzdHIoMTApO1xufVxuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9YXBwZWFyYW5jZVxuXG52YXIgYXBwZWFyZW5jZSA9IHtcbiAgbm9QcmVmaWxsOiBbJ2FwcGVhcmFuY2UnXSxcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3ApIHtcbiAgICBpZiAocHJvcCAhPT0gJ2FwcGVhcmFuY2UnKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ21zJykgcmV0dXJuIFwiLXdlYmtpdC1cIiArIHByb3A7XG4gICAgcmV0dXJuIHByZWZpeC5jc3MgKyBwcm9wO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9Y29sb3ItYWRqdXN0XG5cbnZhciBjb2xvckFkanVzdCA9IHtcbiAgbm9QcmVmaWxsOiBbJ2NvbG9yLWFkanVzdCddLFxuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCkge1xuICAgIGlmIChwcm9wICE9PSAnY29sb3ItYWRqdXN0JykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwcmVmaXguanMgPT09ICdXZWJraXQnKSByZXR1cm4gcHJlZml4LmNzcyArIFwicHJpbnQtXCIgKyBwcm9wO1xuICAgIHJldHVybiBwcm9wO1xuICB9XG59O1xuXG52YXIgcmVnRXhwID0gL1stXFxzXSsoLik/L2c7XG4vKipcbiAqIFJlcGxhY2VzIHRoZSBsZXR0ZXIgd2l0aCB0aGUgY2FwaXRhbCBsZXR0ZXJcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWF0Y2hcbiAqIEBwYXJhbSB7U3RyaW5nfSBjXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0b1VwcGVyKG1hdGNoLCBjKSB7XG4gIHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJyc7XG59XG4vKipcbiAqIENvbnZlcnQgZGFzaCBzZXBhcmF0ZWQgc3RyaW5ncyB0byBjYW1lbC1jYXNlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGNhbWVsaXplKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UocmVnRXhwLCB0b1VwcGVyKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGRhc2ggc2VwYXJhdGVkIHN0cmluZ3MgdG8gcGFzY2FsIGNhc2VkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhc2NhbGl6ZShzdHIpIHtcbiAgcmV0dXJuIGNhbWVsaXplKFwiLVwiICsgc3RyKTtcbn1cblxuLy8gYnV0IHdlIGNhbiB1c2UgYSBsb25naGFuZCBwcm9wZXJ0eSBpbnN0ZWFkLlxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPW1hc2tcblxudmFyIG1hc2sgPSB7XG4gIG5vUHJlZmlsbDogWydtYXNrJ10sXG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSkge1xuICAgIGlmICghL15tYXNrLy50ZXN0KHByb3ApKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAocHJlZml4LmpzID09PSAnV2Via2l0Jykge1xuICAgICAgdmFyIGxvbmdoYW5kID0gJ21hc2staW1hZ2UnO1xuXG4gICAgICBpZiAoY2FtZWxpemUobG9uZ2hhbmQpIGluIHN0eWxlKSB7XG4gICAgICAgIHJldHVybiBwcm9wO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJlZml4LmpzICsgcGFzY2FsaXplKGxvbmdoYW5kKSBpbiBzdHlsZSkge1xuICAgICAgICByZXR1cm4gcHJlZml4LmNzcyArIHByb3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbi8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD10ZXh0LW9yaWVudGF0aW9uXG5cbnZhciB0ZXh0T3JpZW50YXRpb24gPSB7XG4gIG5vUHJlZmlsbDogWyd0ZXh0LW9yaWVudGF0aW9uJ10sXG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wKSB7XG4gICAgaWYgKHByb3AgIT09ICd0ZXh0LW9yaWVudGF0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC52ZW5kb3IgPT09ICdhcHBsZScgJiYgIXByZWZpeC5pc1RvdWNoKSB7XG4gICAgICByZXR1cm4gcHJlZml4LmNzcyArIHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbi8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD10cmFuc2Zvcm1cblxudmFyIHRyYW5zZm9ybSA9IHtcbiAgbm9QcmVmaWxsOiBbJ3RyYW5zZm9ybSddLFxuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvcCAhPT0gJ3RyYW5zZm9ybScpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChvcHRpb25zLnRyYW5zZm9ybSkge1xuICAgICAgcmV0dXJuIHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeC5jc3MgKyBwcm9wO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9dHJhbnNpdGlvblxuXG52YXIgdHJhbnNpdGlvbiA9IHtcbiAgbm9QcmVmaWxsOiBbJ3RyYW5zaXRpb24nXSxcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb3AgIT09ICd0cmFuc2l0aW9uJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKG9wdGlvbnMudHJhbnNpdGlvbikge1xuICAgICAgcmV0dXJuIHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeC5jc3MgKyBwcm9wO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9d3JpdGluZy1tb2RlXG5cbnZhciB3cml0aW5nTW9kZSA9IHtcbiAgbm9QcmVmaWxsOiBbJ3dyaXRpbmctbW9kZSddLFxuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCkge1xuICAgIGlmIChwcm9wICE9PSAnd3JpdGluZy1tb2RlJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ1dlYmtpdCcgfHwgcHJlZml4LmpzID09PSAnbXMnICYmIHByZWZpeC5icm93c2VyICE9PSAnZWRnZScpIHtcbiAgICAgIHJldHVybiBwcmVmaXguY3NzICsgcHJvcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXVzZXItc2VsZWN0XG5cbnZhciB1c2VyU2VsZWN0ID0ge1xuICBub1ByZWZpbGw6IFsndXNlci1zZWxlY3QnXSxcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3ApIHtcbiAgICBpZiAocHJvcCAhPT0gJ3VzZXItc2VsZWN0JykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ01veicgfHwgcHJlZml4LmpzID09PSAnbXMnIHx8IHByZWZpeC52ZW5kb3IgPT09ICdhcHBsZScpIHtcbiAgICAgIHJldHVybiBwcmVmaXguY3NzICsgcHJvcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPW11bHRpY29sdW1uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vcG9zdGNzcy9hdXRvcHJlZml4ZXIvaXNzdWVzLzQ5MVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bvc3Rjc3MvYXV0b3ByZWZpeGVyL2lzc3Vlcy8xNzdcblxudmFyIGJyZWFrUHJvcHNPbGQgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSkge1xuICAgIGlmICghL15icmVhay0vLnRlc3QocHJvcCkpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChwcmVmaXguanMgPT09ICdXZWJraXQnKSB7XG4gICAgICB2YXIganNQcm9wID0gXCJXZWJraXRDb2x1bW5cIiArIHBhc2NhbGl6ZShwcm9wKTtcbiAgICAgIHJldHVybiBqc1Byb3AgaW4gc3R5bGUgPyBwcmVmaXguY3NzICsgXCJjb2x1bW4tXCIgKyBwcm9wIDogZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ01veicpIHtcbiAgICAgIHZhciBfanNQcm9wID0gXCJwYWdlXCIgKyBwYXNjYWxpemUocHJvcCk7XG5cbiAgICAgIHJldHVybiBfanNQcm9wIGluIHN0eWxlID8gXCJwYWdlLVwiICsgcHJvcCA6IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3N0Y3NzL2F1dG9wcmVmaXhlci9pc3N1ZXMvMzI0LlxuXG52YXIgaW5saW5lTG9naWNhbE9sZCA9IHtcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlKSB7XG4gICAgaWYgKCEvXihib3JkZXJ8bWFyZ2lufHBhZGRpbmcpLWlubGluZS8udGVzdChwcm9wKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwcmVmaXguanMgPT09ICdNb3onKSByZXR1cm4gcHJvcDtcbiAgICB2YXIgbmV3UHJvcCA9IHByb3AucmVwbGFjZSgnLWlubGluZScsICcnKTtcbiAgICByZXR1cm4gcHJlZml4LmpzICsgcGFzY2FsaXplKG5ld1Byb3ApIGluIHN0eWxlID8gcHJlZml4LmNzcyArIG5ld1Byb3AgOiBmYWxzZTtcbiAgfVxufTtcblxuLy8gQ2FtZWxpemF0aW9uIGlzIHJlcXVpcmVkIGJlY2F1c2Ugd2UgY2FuJ3QgdGVzdCB1c2luZy5cbi8vIENTUyBzeW50YXggZm9yIGUuZy4gaW4gRkYuXG5cbnZhciB1bnByZWZpeGVkID0ge1xuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCwgc3R5bGUpIHtcbiAgICByZXR1cm4gY2FtZWxpemUocHJvcCkgaW4gc3R5bGUgPyBwcm9wIDogZmFsc2U7XG4gIH1cbn07XG5cbnZhciBwcmVmaXhlZCA9IHtcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlKSB7XG4gICAgdmFyIHBhc2NhbGl6ZWQgPSBwYXNjYWxpemUocHJvcCk7IC8vIFJldHVybiBjdXN0b20gQ1NTIHZhcmlhYmxlIHdpdGhvdXQgcHJlZml4aW5nLlxuXG4gICAgaWYgKHByb3BbMF0gPT09ICctJykgcmV0dXJuIHByb3A7IC8vIFJldHVybiBhbHJlYWR5IHByZWZpeGVkIHZhbHVlIHdpdGhvdXQgcHJlZml4aW5nLlxuXG4gICAgaWYgKHByb3BbMF0gPT09ICctJyAmJiBwcm9wWzFdID09PSAnLScpIHJldHVybiBwcm9wO1xuICAgIGlmIChwcmVmaXguanMgKyBwYXNjYWxpemVkIGluIHN0eWxlKSByZXR1cm4gcHJlZml4LmNzcyArIHByb3A7IC8vIFRyeSB3ZWJraXQgZmFsbGJhY2suXG5cbiAgICBpZiAocHJlZml4LmpzICE9PSAnV2Via2l0JyAmJiBcIldlYmtpdFwiICsgcGFzY2FsaXplZCBpbiBzdHlsZSkgcmV0dXJuIFwiLXdlYmtpdC1cIiArIHByb3A7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9c2Nyb2xsLXNuYXBcblxudmFyIHNjcm9sbFNuYXAgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wKSB7XG4gICAgaWYgKHByb3Auc3Vic3RyaW5nKDAsIDExKSAhPT0gJ3Njcm9sbC1zbmFwJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ21zJykge1xuICAgICAgcmV0dXJuIFwiXCIgKyBwcmVmaXguY3NzICsgcHJvcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPW92ZXJzY3JvbGwtYmVoYXZpb3JcblxudmFyIG92ZXJzY3JvbGxCZWhhdmlvciA9IHtcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3ApIHtcbiAgICBpZiAocHJvcCAhPT0gJ292ZXJzY3JvbGwtYmVoYXZpb3InKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAocHJlZml4LmpzID09PSAnbXMnKSB7XG4gICAgICByZXR1cm4gcHJlZml4LmNzcyArIFwic2Nyb2xsLWNoYWluaW5nXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbnZhciBwcm9wTWFwID0ge1xuICAnZmxleC1ncm93JzogJ2ZsZXgtcG9zaXRpdmUnLFxuICAnZmxleC1zaHJpbmsnOiAnZmxleC1uZWdhdGl2ZScsXG4gICdmbGV4LWJhc2lzJzogJ2ZsZXgtcHJlZmVycmVkLXNpemUnLFxuICAnanVzdGlmeS1jb250ZW50JzogJ2ZsZXgtcGFjaycsXG4gIG9yZGVyOiAnZmxleC1vcmRlcicsXG4gICdhbGlnbi1pdGVtcyc6ICdmbGV4LWFsaWduJyxcbiAgJ2FsaWduLWNvbnRlbnQnOiAnZmxleC1saW5lLXBhY2snIC8vICdhbGlnbi1zZWxmJyBpcyBoYW5kbGVkIGJ5ICdhbGlnbi1zZWxmJyBwbHVnaW4uXG5cbn07IC8vIFN1cHBvcnQgb2xkIGZsZXggc3BlYyBmcm9tIDIwMTIuXG5cbnZhciBmbGV4MjAxMiA9IHtcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlKSB7XG4gICAgdmFyIG5ld1Byb3AgPSBwcm9wTWFwW3Byb3BdO1xuICAgIGlmICghbmV3UHJvcCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBwcmVmaXguanMgKyBwYXNjYWxpemUobmV3UHJvcCkgaW4gc3R5bGUgPyBwcmVmaXguY3NzICsgbmV3UHJvcCA6IGZhbHNlO1xuICB9XG59O1xuXG52YXIgcHJvcE1hcCQxID0ge1xuICBmbGV4OiAnYm94LWZsZXgnLFxuICAnZmxleC1ncm93JzogJ2JveC1mbGV4JyxcbiAgJ2ZsZXgtZGlyZWN0aW9uJzogWydib3gtb3JpZW50JywgJ2JveC1kaXJlY3Rpb24nXSxcbiAgb3JkZXI6ICdib3gtb3JkaW5hbC1ncm91cCcsXG4gICdhbGlnbi1pdGVtcyc6ICdib3gtYWxpZ24nLFxuICAnZmxleC1mbG93JzogWydib3gtb3JpZW50JywgJ2JveC1kaXJlY3Rpb24nXSxcbiAgJ2p1c3RpZnktY29udGVudCc6ICdib3gtcGFjaydcbn07XG52YXIgcHJvcEtleXMgPSBPYmplY3Qua2V5cyhwcm9wTWFwJDEpO1xuXG52YXIgcHJlZml4Q3NzID0gZnVuY3Rpb24gcHJlZml4Q3NzKHApIHtcbiAgcmV0dXJuIHByZWZpeC5jc3MgKyBwO1xufTsgLy8gU3VwcG9ydCBvbGQgZmxleCBzcGVjIGZyb20gMjAwOS5cblxuXG52YXIgZmxleDIwMDkgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSwgX3JlZikge1xuICAgIHZhciBtdWx0aXBsZSA9IF9yZWYubXVsdGlwbGU7XG5cbiAgICBpZiAocHJvcEtleXMuaW5kZXhPZihwcm9wKSA+IC0xKSB7XG4gICAgICB2YXIgbmV3UHJvcCA9IHByb3BNYXAkMVtwcm9wXTtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG5ld1Byb3ApKSB7XG4gICAgICAgIHJldHVybiBwcmVmaXguanMgKyBwYXNjYWxpemUobmV3UHJvcCkgaW4gc3R5bGUgPyBwcmVmaXguY3NzICsgbmV3UHJvcCA6IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW11bHRpcGxlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3UHJvcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIShwcmVmaXguanMgKyBwYXNjYWxpemUobmV3UHJvcFswXSkgaW4gc3R5bGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdQcm9wLm1hcChwcmVmaXhDc3MpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuLy8gcGx1Z2lucyA9IFtcbi8vICAgLi4ucGx1Z2lucyxcbi8vICAgIGJyZWFrUHJvcHNPbGQsXG4vLyAgICBpbmxpbmVMb2dpY2FsT2xkLFxuLy8gICAgdW5wcmVmaXhlZCxcbi8vICAgIHByZWZpeGVkLFxuLy8gICAgc2Nyb2xsU25hcCxcbi8vICAgIGZsZXgyMDEyLFxuLy8gICAgZmxleDIwMDlcbi8vIF1cbi8vIFBsdWdpbnMgd2l0aG91dCAnbm9QcmVmaWxsJyB2YWx1ZSwgZ29pbmcgbGFzdC5cbi8vICdmbGV4LSonIHBsdWdpbnMgc2hvdWxkIGJlIGF0IHRoZSBib3R0b20uXG4vLyAnZmxleDIwMDknIGdvaW5nIGFmdGVyICdmbGV4MjAxMicuXG4vLyAncHJlZml4ZWQnIGdvaW5nIGFmdGVyICd1bnByZWZpeGVkJ1xuXG52YXIgcGx1Z2lucyA9IFthcHBlYXJlbmNlLCBjb2xvckFkanVzdCwgbWFzaywgdGV4dE9yaWVudGF0aW9uLCB0cmFuc2Zvcm0sIHRyYW5zaXRpb24sIHdyaXRpbmdNb2RlLCB1c2VyU2VsZWN0LCBicmVha1Byb3BzT2xkLCBpbmxpbmVMb2dpY2FsT2xkLCB1bnByZWZpeGVkLCBwcmVmaXhlZCwgc2Nyb2xsU25hcCwgb3ZlcnNjcm9sbEJlaGF2aW9yLCBmbGV4MjAxMiwgZmxleDIwMDldO1xudmFyIHByb3BlcnR5RGV0ZWN0b3JzID0gcGx1Z2lucy5maWx0ZXIoZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAuc3VwcG9ydGVkUHJvcGVydHk7XG59KS5tYXAoZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAuc3VwcG9ydGVkUHJvcGVydHk7XG59KTtcbnZhciBub1ByZWZpbGwgPSBwbHVnaW5zLmZpbHRlcihmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcC5ub1ByZWZpbGw7XG59KS5yZWR1Y2UoZnVuY3Rpb24gKGEsIHApIHtcbiAgYS5wdXNoLmFwcGx5KGEsIF90b0NvbnN1bWFibGVBcnJheShwLm5vUHJlZmlsbCkpO1xuICByZXR1cm4gYTtcbn0sIFtdKTtcblxudmFyIGVsO1xudmFyIGNhY2hlID0ge307XG5cbmlmIChpc0luQnJvd3Nlcikge1xuICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsgLy8gV2UgdGVzdCBldmVyeSBwcm9wZXJ0eSBvbiB2ZW5kb3IgcHJlZml4IHJlcXVpcmVtZW50LlxuICAvLyBPbmNlIHRlc3RlZCwgcmVzdWx0IGlzIGNhY2hlZC4gSXQgZ2l2ZXMgdXMgdXAgdG8gNzAlIHBlcmYgYm9vc3QuXG4gIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2VsZW1lbnQtc3R5bGUtb2JqZWN0LWFjY2Vzcy12cy1wbGFpbi1vYmplY3RcbiAgLy9cbiAgLy8gUHJlZmlsbCBjYWNoZSB3aXRoIGtub3duIGNzcyBwcm9wZXJ0aWVzIHRvIHJlZHVjZSBhbW91bnQgb2ZcbiAgLy8gcHJvcGVydGllcyB3ZSBuZWVkIHRvIGZlYXR1cmUgdGVzdCBhdCBydW50aW1lLlxuICAvLyBodHRwOi8vZGF2aWR3YWxzaC5uYW1lL3ZlbmRvci1wcmVmaXhcblxuICB2YXIgY29tcHV0ZWQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICcnKTtcblxuICBmb3IgKHZhciBrZXkkMSBpbiBjb21wdXRlZCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgICBpZiAoIWlzTmFOKGtleSQxKSkgY2FjaGVbY29tcHV0ZWRba2V5JDFdXSA9IGNvbXB1dGVkW2tleSQxXTtcbiAgfSAvLyBQcm9wZXJ0aWVzIHRoYXQgY2Fubm90IGJlIGNvcnJlY3RseSBkZXRlY3RlZCB1c2luZyB0aGVcbiAgLy8gY2FjaGUgcHJlZmlsbCBtZXRob2QuXG5cblxuICBub1ByZWZpbGwuZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBkZWxldGUgY2FjaGVbeF07XG4gIH0pO1xufVxuLyoqXG4gKiBUZXN0IGlmIGEgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCByZXR1cm5zIHN1cHBvcnRlZCBwcm9wZXJ0eSB3aXRoIHZlbmRvclxuICogcHJlZml4IGlmIHJlcXVpcmVkLiBSZXR1cm5zIGBmYWxzZWAgaWYgbm90IHN1cHBvcnRlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcCBkYXNoIHNlcGFyYXRlZFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7U3RyaW5nfEJvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxuZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgLy8gRm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZy5cbiAgaWYgKCFlbCkgcmV0dXJuIHByb3A7IC8vIFJlbW92ZSBjYWNoZSBmb3IgYmVuY2htYXJrIHRlc3RzIG9yIHJldHVybiBwcm9wZXJ0eSBmcm9tIHRoZSBjYWNoZS5cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdiZW5jaG1hcmsnICYmIGNhY2hlW3Byb3BdICE9IG51bGwpIHtcbiAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gIH0gLy8gQ2hlY2sgaWYgJ3RyYW5zaXRpb24nIG9yICd0cmFuc2Zvcm0nIG5hdGl2ZWx5IHN1cHBvcnRlZCBpbiBicm93c2VyLlxuXG5cbiAgaWYgKHByb3AgPT09ICd0cmFuc2l0aW9uJyB8fCBwcm9wID09PSAndHJhbnNmb3JtJykge1xuICAgIG9wdGlvbnNbcHJvcF0gPSBwcm9wIGluIGVsLnN0eWxlO1xuICB9IC8vIEZpbmQgYSBwbHVnaW4gZm9yIGN1cnJlbnQgcHJlZml4IHByb3BlcnR5LlxuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eURldGVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgIGNhY2hlW3Byb3BdID0gcHJvcGVydHlEZXRlY3RvcnNbaV0ocHJvcCwgZWwuc3R5bGUsIG9wdGlvbnMpOyAvLyBCcmVhayBsb29wLCBpZiB2YWx1ZSBmb3VuZC5cblxuICAgIGlmIChjYWNoZVtwcm9wXSkgYnJlYWs7XG4gIH0gLy8gUmVzZXQgc3R5bGVzIGZvciBjdXJyZW50IHByb3BlcnR5LlxuICAvLyBGaXJlZm94IGNhbiBldmVuIHRocm93IGFuIGVycm9yIGZvciBpbnZhbGlkIHByb3BlcnRpZXMsIGUuZy4sIFwiMFwiLlxuXG5cbiAgdHJ5IHtcbiAgICBlbC5zdHlsZVtwcm9wXSA9ICcnO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gY2FjaGVbcHJvcF07XG59XG5cbnZhciBjYWNoZSQxID0ge307XG52YXIgdHJhbnNpdGlvblByb3BlcnRpZXMgPSB7XG4gIHRyYW5zaXRpb246IDEsXG4gICd0cmFuc2l0aW9uLXByb3BlcnR5JzogMSxcbiAgJy13ZWJraXQtdHJhbnNpdGlvbic6IDEsXG4gICctd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHknOiAxXG59O1xudmFyIHRyYW5zUHJvcHNSZWdFeHAgPSAvKF5cXHMqW1xcdy1dKyl8LCAoXFxzKltcXHctXSspKD8hW14oKV0qXFwpKS9nO1xudmFyIGVsJDE7XG4vKipcbiAqIFJldHVybnMgcHJlZml4ZWQgdmFsdWUgdHJhbnNpdGlvbi90cmFuc2Zvcm0gaWYgbmVlZGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYXRjaFxuICogQHBhcmFtIHtTdHJpbmd9IHAxXG4gKiBAcGFyYW0ge1N0cmluZ30gcDJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHByZWZpeFRyYW5zaXRpb25DYWxsYmFjayhtYXRjaCwgcDEsIHAyKSB7XG4gIGlmIChwMSA9PT0gJ3ZhcicpIHJldHVybiAndmFyJztcbiAgaWYgKHAxID09PSAnYWxsJykgcmV0dXJuICdhbGwnO1xuICBpZiAocDIgPT09ICdhbGwnKSByZXR1cm4gJywgYWxsJztcbiAgdmFyIHByZWZpeGVkVmFsdWUgPSBwMSA/IHN1cHBvcnRlZFByb3BlcnR5KHAxKSA6IFwiLCBcIiArIHN1cHBvcnRlZFByb3BlcnR5KHAyKTtcbiAgaWYgKCFwcmVmaXhlZFZhbHVlKSByZXR1cm4gcDEgfHwgcDI7XG4gIHJldHVybiBwcmVmaXhlZFZhbHVlO1xufVxuXG5pZiAoaXNJbkJyb3dzZXIpIGVsJDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4vKipcbiAqIFJldHVybnMgcHJlZml4ZWQgdmFsdWUgaWYgbmVlZGVkLiBSZXR1cm5zIGBmYWxzZWAgaWYgdmFsdWUgaXMgbm90IHN1cHBvcnRlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfEJvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRlZFZhbHVlKHByb3BlcnR5LCB2YWx1ZSkge1xuICAvLyBGb3Igc2VydmVyLXNpZGUgcmVuZGVyaW5nLlxuICB2YXIgcHJlZml4ZWRWYWx1ZSA9IHZhbHVlO1xuICBpZiAoIWVsJDEgfHwgcHJvcGVydHkgPT09ICdjb250ZW50JykgcmV0dXJuIHZhbHVlOyAvLyBJdCBpcyBhIHN0cmluZyBvciBhIG51bWJlciBhcyBhIHN0cmluZyBsaWtlICcxJy5cbiAgLy8gV2Ugd2FudCBvbmx5IHByZWZpeGFibGUgdmFsdWVzIGhlcmUuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcblxuICBpZiAodHlwZW9mIHByZWZpeGVkVmFsdWUgIT09ICdzdHJpbmcnIHx8ICFpc05hTihwYXJzZUludChwcmVmaXhlZFZhbHVlLCAxMCkpKSB7XG4gICAgcmV0dXJuIHByZWZpeGVkVmFsdWU7XG4gIH0gLy8gQ3JlYXRlIGNhY2hlIGtleSBmb3IgY3VycmVudCB2YWx1ZS5cblxuXG4gIHZhciBjYWNoZUtleSA9IHByb3BlcnR5ICsgcHJlZml4ZWRWYWx1ZTsgLy8gUmVtb3ZlIGNhY2hlIGZvciBiZW5jaG1hcmsgdGVzdHMgb3IgcmV0dXJuIHZhbHVlIGZyb20gY2FjaGUuXG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnYmVuY2htYXJrJyAmJiBjYWNoZSQxW2NhY2hlS2V5XSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGNhY2hlJDFbY2FjaGVLZXldO1xuICB9IC8vIElFIGNhbiBldmVuIHRocm93IGFuIGVycm9yIGluIHNvbWUgY2FzZXMsIGZvciBlLmcuIHN0eWxlLmNvbnRlbnQgPSAnYmFyJy5cblxuXG4gIHRyeSB7XG4gICAgLy8gVGVzdCB2YWx1ZSBhcyBpdCBpcy5cbiAgICBlbCQxLnN0eWxlW3Byb3BlcnR5XSA9IHByZWZpeGVkVmFsdWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFJldHVybiBmYWxzZSBpZiB2YWx1ZSBub3Qgc3VwcG9ydGVkLlxuICAgIGNhY2hlJDFbY2FjaGVLZXldID0gZmFsc2U7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIElmICd0cmFuc2l0aW9uJyBvciAndHJhbnNpdGlvbi1wcm9wZXJ0eScgcHJvcGVydHkuXG5cblxuICBpZiAodHJhbnNpdGlvblByb3BlcnRpZXNbcHJvcGVydHldKSB7XG4gICAgcHJlZml4ZWRWYWx1ZSA9IHByZWZpeGVkVmFsdWUucmVwbGFjZSh0cmFuc1Byb3BzUmVnRXhwLCBwcmVmaXhUcmFuc2l0aW9uQ2FsbGJhY2spO1xuICB9IGVsc2UgaWYgKGVsJDEuc3R5bGVbcHJvcGVydHldID09PSAnJykge1xuICAgIC8vIFZhbHVlIHdpdGggYSB2ZW5kb3IgcHJlZml4LlxuICAgIHByZWZpeGVkVmFsdWUgPSBwcmVmaXguY3NzICsgcHJlZml4ZWRWYWx1ZTsgLy8gSGFyZGNvZGUgdGVzdCB0byBjb252ZXJ0IFwiZmxleFwiIHRvIFwiLW1zLWZsZXhib3hcIiBmb3IgSUUxMC5cblxuICAgIGlmIChwcmVmaXhlZFZhbHVlID09PSAnLW1zLWZsZXgnKSBlbCQxLnN0eWxlW3Byb3BlcnR5XSA9ICctbXMtZmxleGJveCc7IC8vIFRlc3QgcHJlZml4ZWQgdmFsdWUuXG5cbiAgICBlbCQxLnN0eWxlW3Byb3BlcnR5XSA9IHByZWZpeGVkVmFsdWU7IC8vIFJldHVybiBmYWxzZSBpZiB2YWx1ZSBub3Qgc3VwcG9ydGVkLlxuXG4gICAgaWYgKGVsJDEuc3R5bGVbcHJvcGVydHldID09PSAnJykge1xuICAgICAgY2FjaGUkMVtjYWNoZUtleV0gPSBmYWxzZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gLy8gUmVzZXQgc3R5bGVzIGZvciBjdXJyZW50IHByb3BlcnR5LlxuXG5cbiAgZWwkMS5zdHlsZVtwcm9wZXJ0eV0gPSAnJzsgLy8gV3JpdGUgY3VycmVudCB2YWx1ZSB0byBjYWNoZS5cblxuICBjYWNoZSQxW2NhY2hlS2V5XSA9IHByZWZpeGVkVmFsdWU7XG4gIHJldHVybiBjYWNoZSQxW2NhY2hlS2V5XTtcbn1cblxuZXhwb3J0IHsgcHJlZml4LCBzdXBwb3J0ZWRLZXlmcmFtZXMsIHN1cHBvcnRlZFByb3BlcnR5LCBzdXBwb3J0ZWRWYWx1ZSB9O1xuIiwiaW1wb3J0IHsgc3VwcG9ydGVkS2V5ZnJhbWVzLCBzdXBwb3J0ZWRWYWx1ZSwgc3VwcG9ydGVkUHJvcGVydHkgfSBmcm9tICdjc3MtdmVuZG9yJztcbmltcG9ydCB7IHRvQ3NzVmFsdWUgfSBmcm9tICdqc3MnO1xuXG4vKipcbiAqIEFkZCB2ZW5kb3IgcHJlZml4IHRvIGEgcHJvcGVydHkgbmFtZSB3aGVuIG5lZWRlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGpzc1ZlbmRvclByZWZpeGVyKCkge1xuICBmdW5jdGlvbiBvblByb2Nlc3NSdWxlKHJ1bGUpIHtcbiAgICBpZiAocnVsZS50eXBlID09PSAna2V5ZnJhbWVzJykge1xuICAgICAgdmFyIGF0UnVsZSA9IHJ1bGU7XG4gICAgICBhdFJ1bGUuYXQgPSBzdXBwb3J0ZWRLZXlmcmFtZXMoYXRSdWxlLmF0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcmVmaXhTdHlsZShzdHlsZSkge1xuICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHN0eWxlW3Byb3BdO1xuXG4gICAgICBpZiAocHJvcCA9PT0gJ2ZhbGxiYWNrcycgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgc3R5bGVbcHJvcF0gPSB2YWx1ZS5tYXAocHJlZml4U3R5bGUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoYW5nZVByb3AgPSBmYWxzZTtcbiAgICAgIHZhciBzdXBwb3J0ZWRQcm9wID0gc3VwcG9ydGVkUHJvcGVydHkocHJvcCk7XG4gICAgICBpZiAoc3VwcG9ydGVkUHJvcCAmJiBzdXBwb3J0ZWRQcm9wICE9PSBwcm9wKSBjaGFuZ2VQcm9wID0gdHJ1ZTtcbiAgICAgIHZhciBjaGFuZ2VWYWx1ZSA9IGZhbHNlO1xuICAgICAgdmFyIHN1cHBvcnRlZFZhbHVlJDEgPSBzdXBwb3J0ZWRWYWx1ZShzdXBwb3J0ZWRQcm9wLCB0b0Nzc1ZhbHVlKHZhbHVlKSk7XG4gICAgICBpZiAoc3VwcG9ydGVkVmFsdWUkMSAmJiBzdXBwb3J0ZWRWYWx1ZSQxICE9PSB2YWx1ZSkgY2hhbmdlVmFsdWUgPSB0cnVlO1xuXG4gICAgICBpZiAoY2hhbmdlUHJvcCB8fCBjaGFuZ2VWYWx1ZSkge1xuICAgICAgICBpZiAoY2hhbmdlUHJvcCkgZGVsZXRlIHN0eWxlW3Byb3BdO1xuICAgICAgICBzdHlsZVtzdXBwb3J0ZWRQcm9wIHx8IHByb3BdID0gc3VwcG9ydGVkVmFsdWUkMSB8fCB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSkge1xuICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybiBzdHlsZTtcbiAgICByZXR1cm4gcHJlZml4U3R5bGUoc3R5bGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VWYWx1ZSh2YWx1ZSwgcHJvcCkge1xuICAgIHJldHVybiBzdXBwb3J0ZWRWYWx1ZShwcm9wLCB0b0Nzc1ZhbHVlKHZhbHVlKSkgfHwgdmFsdWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uUHJvY2Vzc1J1bGU6IG9uUHJvY2Vzc1J1bGUsXG4gICAgb25Qcm9jZXNzU3R5bGU6IG9uUHJvY2Vzc1N0eWxlLFxuICAgIG9uQ2hhbmdlVmFsdWU6IG9uQ2hhbmdlVmFsdWVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNzVmVuZG9yUHJlZml4ZXI7XG4iLCIvKipcbiAqIFNvcnQgcHJvcHMgYnkgbGVuZ3RoLlxuICovXG5mdW5jdGlvbiBqc3NQcm9wc1NvcnQoKSB7XG4gIHZhciBzb3J0ID0gZnVuY3Rpb24gc29ydChwcm9wMCwgcHJvcDEpIHtcbiAgICBpZiAocHJvcDAubGVuZ3RoID09PSBwcm9wMS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBwcm9wMCA+IHByb3AxID8gMSA6IC0xO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wMC5sZW5ndGggLSBwcm9wMS5sZW5ndGg7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBvblByb2Nlc3NTdHlsZTogZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUsIHJ1bGUpIHtcbiAgICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybiBzdHlsZTtcbiAgICAgIHZhciBuZXdTdHlsZSA9IHt9O1xuICAgICAgdmFyIHByb3BzID0gT2JqZWN0LmtleXMoc3R5bGUpLnNvcnQoc29ydCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmV3U3R5bGVbcHJvcHNbaV1dID0gc3R5bGVbcHJvcHNbaV1dO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3U3R5bGU7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc3NQcm9wc1NvcnQ7XG4iLCJpbXBvcnQgZnVuY3Rpb25zIGZyb20gJ2pzcy1wbHVnaW4tcnVsZS12YWx1ZS1mdW5jdGlvbic7XG5pbXBvcnQgZ2xvYmFsIGZyb20gJ2pzcy1wbHVnaW4tZ2xvYmFsJztcbmltcG9ydCBuZXN0ZWQgZnJvbSAnanNzLXBsdWdpbi1uZXN0ZWQnO1xuaW1wb3J0IGNhbWVsQ2FzZSBmcm9tICdqc3MtcGx1Z2luLWNhbWVsLWNhc2UnO1xuaW1wb3J0IGRlZmF1bHRVbml0IGZyb20gJ2pzcy1wbHVnaW4tZGVmYXVsdC11bml0JztcbmltcG9ydCB2ZW5kb3JQcmVmaXhlciBmcm9tICdqc3MtcGx1Z2luLXZlbmRvci1wcmVmaXhlcic7XG5pbXBvcnQgcHJvcHNTb3J0IGZyb20gJ2pzcy1wbHVnaW4tcHJvcHMtc29ydCc7IC8vIFN1YnNldCBvZiBqc3MtcHJlc2V0LWRlZmF1bHQgd2l0aCBvbmx5IHRoZSBwbHVnaW5zIHRoZSBNYXRlcmlhbC1VSSBjb21wb25lbnRzIGFyZSB1c2luZy5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ganNzUHJlc2V0KCkge1xuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtmdW5jdGlvbnMoKSwgZ2xvYmFsKCksIG5lc3RlZCgpLCBjYW1lbENhc2UoKSwgZGVmYXVsdFVuaXQoKSwgLy8gRGlzYWJsZSB0aGUgdmVuZG9yIHByZWZpeGVyIHNlcnZlci1zaWRlLCBpdCBkb2VzIG5vdGhpbmcuXG4gICAgLy8gVGhpcyB3YXksIHdlIGNhbiBnZXQgYSBwZXJmb3JtYW5jZSBib29zdC5cbiAgICAvLyBJbiB0aGUgZG9jdW1lbnRhdGlvbiwgd2UgYXJlIHVzaW5nIGBhdXRvcHJlZml4ZXJgIHRvIHNvbHZlIHRoaXMgcHJvYmxlbS5cbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB2ZW5kb3JQcmVmaXhlcigpLCBwcm9wc1NvcnQoKV1cbiAgfTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IGdldERpc3BsYXlOYW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQ2xhc3NlcygpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgYmFzZUNsYXNzZXMgPSBvcHRpb25zLmJhc2VDbGFzc2VzLFxuICAgICAgbmV3Q2xhc3NlcyA9IG9wdGlvbnMubmV3Q2xhc3NlcyxcbiAgICAgIENvbXBvbmVudCA9IG9wdGlvbnMuQ29tcG9uZW50O1xuXG4gIGlmICghbmV3Q2xhc3Nlcykge1xuICAgIHJldHVybiBiYXNlQ2xhc3NlcztcbiAgfVxuXG4gIHZhciBuZXh0Q2xhc3NlcyA9IF9leHRlbmRzKHt9LCBiYXNlQ2xhc3Nlcyk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIG5ld0NsYXNzZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgdmFsdWUgYFwiLmNvbmNhdChuZXdDbGFzc2VzLCBcImAgXCIpICsgXCJwcm92aWRlZCB0byB0aGUgY2xhc3NlcyBwcm9wIG9mIFwiLmNvbmNhdChnZXREaXNwbGF5TmFtZShDb21wb25lbnQpLCBcIiBpcyBpbmNvcnJlY3QuXCIpLCAnWW91IG1pZ2h0IHdhbnQgdG8gdXNlIHRoZSBjbGFzc05hbWUgcHJvcCBpbnN0ZWFkLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIHJldHVybiBiYXNlQ2xhc3NlcztcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhuZXdDbGFzc2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCFiYXNlQ2xhc3Nlc1trZXldICYmIG5ld0NsYXNzZXNba2V5XSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUga2V5IGBcIi5jb25jYXQoa2V5LCBcImAgXCIpICsgXCJwcm92aWRlZCB0byB0aGUgY2xhc3NlcyBwcm9wIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiBcIi5jb25jYXQoZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSwgXCIuXCIpLCBcIllvdSBjYW4gb25seSBvdmVycmlkZSBvbmUgb2YgdGhlIGZvbGxvd2luZzogXCIuY29uY2F0KE9iamVjdC5rZXlzKGJhc2VDbGFzc2VzKS5qb2luKCcsJyksIFwiLlwiKV0uam9pbignXFxuJykpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV3Q2xhc3Nlc1trZXldICYmIHR5cGVvZiBuZXdDbGFzc2VzW2tleV0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoW1wiTWF0ZXJpYWwtVUk6IFRoZSBrZXkgYFwiLmNvbmNhdChrZXksIFwiYCBcIikgKyBcInByb3ZpZGVkIHRvIHRoZSBjbGFzc2VzIHByb3AgaXMgbm90IHZhbGlkIGZvciBcIi5jb25jYXQoZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSwgXCIuXCIpLCBcIllvdSBuZWVkIHRvIHByb3ZpZGUgYSBub24gZW1wdHkgc3RyaW5nIGluc3RlYWQgb2Y6IFwiLmNvbmNhdChuZXdDbGFzc2VzW2tleV0sIFwiLlwiKV0uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdDbGFzc2VzW2tleV0pIHtcbiAgICAgIG5leHRDbGFzc2VzW2tleV0gPSBcIlwiLmNvbmNhdChiYXNlQ2xhc3Nlc1trZXldLCBcIiBcIikuY29uY2F0KG5ld0NsYXNzZXNba2V5XSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG5leHRDbGFzc2VzO1xufSIsIi8vIFVzZWQgaHR0cHM6Ly9naXRodWIuY29tL3RoaW5rbG9vcC9tdWx0aS1rZXktY2FjaGUgYXMgaW5zcGlyYXRpb25cbnZhciBtdWx0aUtleVN0b3JlID0ge1xuICBzZXQ6IGZ1bmN0aW9uIHNldChjYWNoZSwga2V5MSwga2V5MiwgdmFsdWUpIHtcbiAgICB2YXIgc3ViQ2FjaGUgPSBjYWNoZS5nZXQoa2V5MSk7XG5cbiAgICBpZiAoIXN1YkNhY2hlKSB7XG4gICAgICBzdWJDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgIGNhY2hlLnNldChrZXkxLCBzdWJDYWNoZSk7XG4gICAgfVxuXG4gICAgc3ViQ2FjaGUuc2V0KGtleTIsIHZhbHVlKTtcbiAgfSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoY2FjaGUsIGtleTEsIGtleTIpIHtcbiAgICB2YXIgc3ViQ2FjaGUgPSBjYWNoZS5nZXQoa2V5MSk7XG4gICAgcmV0dXJuIHN1YkNhY2hlID8gc3ViQ2FjaGUuZ2V0KGtleTIpIDogdW5kZWZpbmVkO1xuICB9LFxuICBkZWxldGU6IGZ1bmN0aW9uIF9kZWxldGUoY2FjaGUsIGtleTEsIGtleTIpIHtcbiAgICB2YXIgc3ViQ2FjaGUgPSBjYWNoZS5nZXQoa2V5MSk7XG4gICAgc3ViQ2FjaGUuZGVsZXRlKGtleTIpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbXVsdGlLZXlTdG9yZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xudmFyIFRoZW1lQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFRoZW1lQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdUaGVtZUNvbnRleHQnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZUNvbnRleHQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaGVtZUNvbnRleHQgZnJvbSAnLi9UaGVtZUNvbnRleHQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVGhlbWUoKSB7XG4gIHZhciB0aGVtZSA9IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZURlYnVnVmFsdWUodGhlbWUpO1xuICB9XG5cbiAgcmV0dXJuIHRoZW1lO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZXhhY3RQcm9wIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSBmcm9tICcuLi9jcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSc7XG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tICdqc3MnO1xuaW1wb3J0IGpzc1ByZXNldCBmcm9tICcuLi9qc3NQcmVzZXQnOyAvLyBEZWZhdWx0IEpTUyBpbnN0YW5jZS5cblxudmFyIGpzcyA9IGNyZWF0ZShqc3NQcmVzZXQoKSk7IC8vIFVzZSBhIHNpbmdsZXRvbiBvciB0aGUgcHJvdmlkZWQgb25lIGJ5IHRoZSBjb250ZXh0LlxuLy9cbi8vIFRoZSBjb3VudGVyLWJhc2VkIGFwcHJvYWNoIGRvZXNuJ3QgdG9sZXJhdGUgYW55IG1pc3Rha2UuXG4vLyBJdCdzIG11Y2ggc2FmZXIgdG8gdXNlIHRoZSBzYW1lIGNvdW50ZXIgZXZlcnl3aGVyZS5cblxudmFyIGdlbmVyYXRlQ2xhc3NOYW1lID0gY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUoKTsgLy8gRXhwb3J0ZWQgZm9yIHRlc3QgcHVycG9zZXNcblxuZXhwb3J0IHZhciBzaGVldHNNYW5hZ2VyID0gbmV3IE1hcCgpO1xudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICBkaXNhYmxlR2VuZXJhdGlvbjogZmFsc2UsXG4gIGdlbmVyYXRlQ2xhc3NOYW1lOiBnZW5lcmF0ZUNsYXNzTmFtZSxcbiAganNzOiBqc3MsXG4gIHNoZWV0c0NhY2hlOiBudWxsLFxuICBzaGVldHNNYW5hZ2VyOiBzaGVldHNNYW5hZ2VyLFxuICBzaGVldHNSZWdpc3RyeTogbnVsbFxufTtcbmV4cG9ydCB2YXIgU3R5bGVzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZGVmYXVsdE9wdGlvbnMpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBTdHlsZXNDb250ZXh0LmRpc3BsYXlOYW1lID0gJ1N0eWxlc0NvbnRleHQnO1xufVxuXG52YXIgaW5qZWN0Rmlyc3ROb2RlO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3R5bGVzUHJvdmlkZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBfcHJvcHMkaW5qZWN0Rmlyc3QgPSBwcm9wcy5pbmplY3RGaXJzdCxcbiAgICAgIGluamVjdEZpcnN0ID0gX3Byb3BzJGluamVjdEZpcnN0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRpbmplY3RGaXJzdCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlR2VuZXJhdCA9IHByb3BzLmRpc2FibGVHZW5lcmF0aW9uLFxuICAgICAgZGlzYWJsZUdlbmVyYXRpb24gPSBfcHJvcHMkZGlzYWJsZUdlbmVyYXQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVHZW5lcmF0LFxuICAgICAgbG9jYWxPcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImluamVjdEZpcnN0XCIsIFwiZGlzYWJsZUdlbmVyYXRpb25cIl0pO1xuXG4gIHZhciBvdXRlck9wdGlvbnMgPSBSZWFjdC51c2VDb250ZXh0KFN0eWxlc0NvbnRleHQpO1xuXG4gIHZhciBjb250ZXh0ID0gX2V4dGVuZHMoe30sIG91dGVyT3B0aW9ucywge1xuICAgIGRpc2FibGVHZW5lcmF0aW9uOiBkaXNhYmxlR2VuZXJhdGlvblxuICB9LCBsb2NhbE9wdGlvbnMpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnICYmICFjb250ZXh0LnNoZWV0c01hbmFnZXIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBZb3UgbmVlZCB0byB1c2UgdGhlIFNlcnZlclN0eWxlU2hlZXRzIEFQSSB3aGVuIHJlbmRlcmluZyBvbiB0aGUgc2VydmVyLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGNvbnRleHQuanNzLm9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQgJiYgaW5qZWN0Rmlyc3QpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBZb3UgY2Fubm90IHVzZSBhIGN1c3RvbSBpbnNlcnRpb25Qb2ludCBhbmQgPFN0eWxlc0NvbnRleHQgaW5qZWN0Rmlyc3Q+IGF0IHRoZSBzYW1lIHRpbWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoaW5qZWN0Rmlyc3QgJiYgbG9jYWxPcHRpb25zLmpzcykge1xuICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IFlvdSBjYW5ub3QgdXNlIHRoZSBqc3MgYW5kIGluamVjdEZpcnN0IHByb3BzIGF0IHRoZSBzYW1lIHRpbWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb250ZXh0Lmpzcy5vcHRpb25zLmluc2VydGlvblBvaW50ICYmIGluamVjdEZpcnN0ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKCFpbmplY3RGaXJzdE5vZGUpIHtcbiAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZDtcbiAgICAgIGluamVjdEZpcnN0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ211aS1pbmplY3QtZmlyc3QnKTtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKGluamVjdEZpcnN0Tm9kZSwgaGVhZC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmpzcyA9IGNyZWF0ZSh7XG4gICAgICBwbHVnaW5zOiBqc3NQcmVzZXQoKS5wbHVnaW5zLFxuICAgICAgaW5zZXJ0aW9uUG9pbnQ6IGluamVjdEZpcnN0Tm9kZVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlc0NvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFxuICB9LCBjaGlsZHJlbik7XG59XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTdHlsZXNQcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBZb3VyIGNvbXBvbmVudCB0cmVlLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gZGlzYWJsZSB0aGUgZ2VuZXJhdGlvbiBvZiB0aGUgc3R5bGVzIHdpdGggdGhpcyBvcHRpb24uXG4gICAqIEl0IGNhbiBiZSB1c2VmdWwgd2hlbiB0cmF2ZXJzaW5nIHRoZSBSZWFjdCB0cmVlIG91dHNpZGUgb2YgdGhlIEhUTUxcbiAgICogcmVuZGVyaW5nIHN0ZXAgb24gdGhlIHNlcnZlci5cbiAgICogTGV0J3Mgc2F5IHlvdSBhcmUgdXNpbmcgcmVhY3QtYXBvbGxvIHRvIGV4dHJhY3QgYWxsXG4gICAqIHRoZSBxdWVyaWVzIG1hZGUgYnkgdGhlIGludGVyZmFjZSBzZXJ2ZXItc2lkZSAtIHlvdSBjYW4gc2lnbmlmaWNhbnRseSBzcGVlZCB1cCB0aGUgdHJhdmVyc2FsIHdpdGggdGhpcyBwcm9wLlxuICAgKi9cbiAgZGlzYWJsZUdlbmVyYXRpb246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBKU1MncyBjbGFzcyBuYW1lIGdlbmVyYXRvci5cbiAgICovXG4gIGdlbmVyYXRlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCwgdGhlIHN0eWxlcyBhcmUgaW5qZWN0ZWQgbGFzdCBpbiB0aGUgPGhlYWQ+IGVsZW1lbnQgb2YgdGhlIHBhZ2UuXG4gICAqIEFzIGEgcmVzdWx0LCB0aGV5IGdhaW4gbW9yZSBzcGVjaWZpY2l0eSB0aGFuIGFueSBvdGhlciBzdHlsZSBzaGVldC5cbiAgICogSWYgeW91IHdhbnQgdG8gb3ZlcnJpZGUgTWF0ZXJpYWwtVUkncyBzdHlsZXMsIHNldCB0aGlzIHByb3AuXG4gICAqL1xuICBpbmplY3RGaXJzdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEpTUydzIGluc3RhbmNlLlxuICAgKi9cbiAganNzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzZXJ2ZXJHZW5lcmF0ZUNsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICpcbiAgICogQmV0YSBmZWF0dXJlLlxuICAgKlxuICAgKiBDYWNoZSBmb3IgdGhlIHNoZWV0cy5cbiAgICovXG4gIHNoZWV0c0NhY2hlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqXG4gICAqIFRoZSBzaGVldHNNYW5hZ2VyIGlzIHVzZWQgdG8gZGVkdXBsaWNhdGUgc3R5bGUgc2hlZXQgaW5qZWN0aW9uIGluIHRoZSBwYWdlLlxuICAgKiBJdCdzIGRlZHVwbGljYXRpbmcgdXNpbmcgdGhlICh0aGVtZSwgc3R5bGVzKSBjb3VwbGUuXG4gICAqIE9uIHRoZSBzZXJ2ZXIsIHlvdSBzaG91bGQgcHJvdmlkZSBhIG5ldyBpbnN0YW5jZSBmb3IgZWFjaCByZXF1ZXN0LlxuICAgKi9cbiAgc2hlZXRzTWFuYWdlcjogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKlxuICAgKiBDb2xsZWN0IHRoZSBzaGVldHMuXG4gICAqL1xuICBzaGVldHNSZWdpc3RyeTogUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gU3R5bGVzUHJvdmlkZXIucHJvcFR5cGVzID0gZXhhY3RQcm9wKFN0eWxlc1Byb3ZpZGVyLnByb3BUeXBlcykgOiB2b2lkIDA7XG59IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLy8gR2xvYmFsIGluZGV4IGNvdW50ZXIgdG8gcHJlc2VydmUgc291cmNlIG9yZGVyLlxuLy8gV2UgY3JlYXRlIHRoZSBzdHlsZSBzaGVldCBkdXJpbmcgdGhlIGNyZWF0aW9uIG9mIHRoZSBjb21wb25lbnQsXG4vLyBjaGlsZHJlbiBhcmUgaGFuZGxlZCBhZnRlciB0aGUgcGFyZW50cywgc28gdGhlIG9yZGVyIG9mIHN0eWxlIGVsZW1lbnRzIHdvdWxkIGJlIHBhcmVudC0+Y2hpbGQuXG4vLyBJdCBpcyBhIHByb2JsZW0gdGhvdWdoIHdoZW4gYSBwYXJlbnQgcGFzc2VzIGEgY2xhc3NOYW1lXG4vLyB3aGljaCBuZWVkcyB0byBvdmVycmlkZSBhbnkgY2hpbGQncyBzdHlsZXMuXG4vLyBTdHlsZVNoZWV0IG9mIHRoZSBjaGlsZCBoYXMgYSBoaWdoZXIgc3BlY2lmaWNpdHksIGJlY2F1c2Ugb2YgdGhlIHNvdXJjZSBvcmRlci5cbi8vIFNvIG91ciBzb2x1dGlvbiBpcyB0byByZW5kZXIgc2hlZXRzIHRoZW0gaW4gdGhlIHJldmVyc2Ugb3JkZXIgY2hpbGQtPnNoZWV0LCBzb1xuLy8gdGhhdCBwYXJlbnQgaGFzIGEgaGlnaGVyIHNwZWNpZmljaXR5LlxudmFyIGluZGV4Q291bnRlciA9IC0xZTk7XG5leHBvcnQgZnVuY3Rpb24gaW5jcmVtZW50KCkge1xuICBpbmRleENvdW50ZXIgKz0gMTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChpbmRleENvdW50ZXIgPj0gMCkge1xuICAgICAgY29uc29sZS53YXJuKFsnTWF0ZXJpYWwtVUk6IFlvdSBtaWdodCBoYXZlIGEgbWVtb3J5IGxlYWsuJywgJ1RoZSBpbmRleENvdW50ZXIgaXMgbm90IHN1cHBvc2VkIHRvIGdyb3cgdGhhdCBtdWNoLiddLmpvaW4oJ1xcbicpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5kZXhDb3VudGVyO1xufSIsIi8vIFdlIHVzZSB0aGUgc2FtZSBlbXB0eSBvYmplY3QgdG8gcmVmIGNvdW50IHRoZSBzdHlsZXMgdGhhdCBkb24ndCBuZWVkIGEgdGhlbWUgb2JqZWN0LlxudmFyIG5vb3BUaGVtZSA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgbm9vcFRoZW1lOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBub29wVGhlbWUgZnJvbSAnLi9ub29wVGhlbWUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3R5bGVzQ3JlYXRvcihzdHlsZXNPckNyZWF0b3IpIHtcbiAgdmFyIHRoZW1pbmdFbmFibGVkID0gdHlwZW9mIHN0eWxlc09yQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChfdHlwZW9mKHN0eWxlc09yQ3JlYXRvcikgIT09ICdvYmplY3QnICYmICF0aGVtaW5nRW5hYmxlZCkge1xuICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBUaGUgYHN0eWxlc2AgYXJndW1lbnQgcHJvdmlkZWQgaXMgaW52YWxpZC4nLCAnWW91IG5lZWQgdG8gcHJvdmlkZSBhIGZ1bmN0aW9uIGdlbmVyYXRpbmcgdGhlIHN0eWxlcyBvciBhIHN0eWxlcyBvYmplY3QuJ10uam9pbignXFxuJykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUodGhlbWUsIG5hbWUpIHtcbiAgICAgIHZhciBzdHlsZXM7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHN0eWxlcyA9IHRoZW1pbmdFbmFibGVkID8gc3R5bGVzT3JDcmVhdG9yKHRoZW1lKSA6IHN0eWxlc09yQ3JlYXRvcjtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGlmICh0aGVtaW5nRW5hYmxlZCA9PT0gdHJ1ZSAmJiB0aGVtZSA9PT0gbm9vcFRoZW1lKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBwcmVwZW5kIGVycm9yIG1lc3NhZ2UvbmFtZSBpbnN0ZWFkXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IFRoZSBgc3R5bGVzYCBhcmd1bWVudCBwcm92aWRlZCBpcyBpbnZhbGlkLicsICdZb3UgYXJlIHByb3ZpZGluZyBhIGZ1bmN0aW9uIHdpdGhvdXQgYSB0aGVtZSBpbiB0aGUgY29udGV4dC4nLCAnT25lIG9mIHRoZSBwYXJlbnQgZWxlbWVudHMgbmVlZHMgdG8gdXNlIGEgVGhlbWVQcm92aWRlci4nXS5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5hbWUgfHwgIXRoZW1lLm92ZXJyaWRlcyB8fCAhdGhlbWUub3ZlcnJpZGVzW25hbWVdKSB7XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBvdmVycmlkZXMgPSB0aGVtZS5vdmVycmlkZXNbbmFtZV07XG5cbiAgICAgIHZhciBzdHlsZXNXaXRoT3ZlcnJpZGVzID0gX2V4dGVuZHMoe30sIHN0eWxlcyk7XG5cbiAgICAgIE9iamVjdC5rZXlzKG92ZXJyaWRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgaWYgKCFzdHlsZXNXaXRoT3ZlcnJpZGVzW2tleV0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihbJ01hdGVyaWFsLVVJOiBZb3UgYXJlIHRyeWluZyB0byBvdmVycmlkZSBhIHN0eWxlIHRoYXQgZG9lcyBub3QgZXhpc3QuJywgXCJGaXggdGhlIGBcIi5jb25jYXQoa2V5LCBcImAga2V5IG9mIGB0aGVtZS5vdmVycmlkZXMuXCIpLmNvbmNhdChuYW1lLCBcImAuXCIpXS5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3R5bGVzV2l0aE92ZXJyaWRlc1trZXldID0gZGVlcG1lcmdlKHN0eWxlc1dpdGhPdmVycmlkZXNba2V5XSwgb3ZlcnJpZGVzW2tleV0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3R5bGVzV2l0aE92ZXJyaWRlcztcbiAgICB9LFxuICAgIG9wdGlvbnM6IHt9XG4gIH07XG59IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldER5bmFtaWNTdHlsZXMgfSBmcm9tICdqc3MnO1xuaW1wb3J0IG1lcmdlQ2xhc3NlcyBmcm9tICcuLi9tZXJnZUNsYXNzZXMnO1xuaW1wb3J0IG11bHRpS2V5U3RvcmUgZnJvbSAnLi9tdWx0aUtleVN0b3JlJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi91c2VUaGVtZSc7XG5pbXBvcnQgeyBTdHlsZXNDb250ZXh0IH0gZnJvbSAnLi4vU3R5bGVzUHJvdmlkZXInO1xuaW1wb3J0IHsgaW5jcmVtZW50IH0gZnJvbSAnLi9pbmRleENvdW50ZXInO1xuaW1wb3J0IGdldFN0eWxlc0NyZWF0b3IgZnJvbSAnLi4vZ2V0U3R5bGVzQ3JlYXRvcic7XG5pbXBvcnQgbm9vcFRoZW1lIGZyb20gJy4uL2dldFN0eWxlc0NyZWF0b3Ivbm9vcFRoZW1lJztcblxuZnVuY3Rpb24gZ2V0Q2xhc3NlcyhfcmVmLCBjbGFzc2VzLCBDb21wb25lbnQpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIHN0eWxlc09wdGlvbnMgPSBfcmVmLnN0eWxlc09wdGlvbnM7XG5cbiAgaWYgKHN0eWxlc09wdGlvbnMuZGlzYWJsZUdlbmVyYXRpb24pIHtcbiAgICByZXR1cm4gY2xhc3NlcyB8fCB7fTtcbiAgfVxuXG4gIGlmICghc3RhdGUuY2FjaGVDbGFzc2VzKSB7XG4gICAgc3RhdGUuY2FjaGVDbGFzc2VzID0ge1xuICAgICAgLy8gQ2FjaGUgZm9yIHRoZSBmaW5hbGl6ZWQgY2xhc3NlcyB2YWx1ZS5cbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgLy8gQ2FjaGUgZm9yIHRoZSBsYXN0IHVzZWQgY2xhc3NlcyBwcm9wIHBvaW50ZXIuXG4gICAgICBsYXN0UHJvcDogbnVsbCxcbiAgICAgIC8vIENhY2hlIGZvciB0aGUgbGFzdCB1c2VkIHJlbmRlcmVkIGNsYXNzZXMgcG9pbnRlci5cbiAgICAgIGxhc3RKU1M6IHt9XG4gICAgfTtcbiAgfSAvLyBUcmFja3MgaWYgZWl0aGVyIHRoZSByZW5kZXJlZCBjbGFzc2VzIG9yIGNsYXNzZXMgcHJvcCBoYXMgY2hhbmdlZCxcbiAgLy8gcmVxdWlyaW5nIHRoZSBnZW5lcmF0aW9uIG9mIGEgbmV3IGZpbmFsaXplZCBjbGFzc2VzIG9iamVjdC5cblxuXG4gIHZhciBnZW5lcmF0ZSA9IGZhbHNlO1xuXG4gIGlmIChzdGF0ZS5jbGFzc2VzICE9PSBzdGF0ZS5jYWNoZUNsYXNzZXMubGFzdEpTUykge1xuICAgIHN0YXRlLmNhY2hlQ2xhc3Nlcy5sYXN0SlNTID0gc3RhdGUuY2xhc3NlcztcbiAgICBnZW5lcmF0ZSA9IHRydWU7XG4gIH1cblxuICBpZiAoY2xhc3NlcyAhPT0gc3RhdGUuY2FjaGVDbGFzc2VzLmxhc3RQcm9wKSB7XG4gICAgc3RhdGUuY2FjaGVDbGFzc2VzLmxhc3RQcm9wID0gY2xhc3NlcztcbiAgICBnZW5lcmF0ZSA9IHRydWU7XG4gIH1cblxuICBpZiAoZ2VuZXJhdGUpIHtcbiAgICBzdGF0ZS5jYWNoZUNsYXNzZXMudmFsdWUgPSBtZXJnZUNsYXNzZXMoe1xuICAgICAgYmFzZUNsYXNzZXM6IHN0YXRlLmNhY2hlQ2xhc3Nlcy5sYXN0SlNTLFxuICAgICAgbmV3Q2xhc3NlczogY2xhc3NlcyxcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGUuY2FjaGVDbGFzc2VzLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBhdHRhY2goX3JlZjIsIHByb3BzKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgdGhlbWUgPSBfcmVmMi50aGVtZSxcbiAgICAgIHN0eWxlc09wdGlvbnMgPSBfcmVmMi5zdHlsZXNPcHRpb25zLFxuICAgICAgc3R5bGVzQ3JlYXRvciA9IF9yZWYyLnN0eWxlc0NyZWF0b3IsXG4gICAgICBuYW1lID0gX3JlZjIubmFtZTtcblxuICBpZiAoc3R5bGVzT3B0aW9ucy5kaXNhYmxlR2VuZXJhdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzaGVldE1hbmFnZXIgPSBtdWx0aUtleVN0b3JlLmdldChzdHlsZXNPcHRpb25zLnNoZWV0c01hbmFnZXIsIHN0eWxlc0NyZWF0b3IsIHRoZW1lKTtcblxuICBpZiAoIXNoZWV0TWFuYWdlcikge1xuICAgIHNoZWV0TWFuYWdlciA9IHtcbiAgICAgIHJlZnM6IDAsXG4gICAgICBzdGF0aWNTaGVldDogbnVsbCxcbiAgICAgIGR5bmFtaWNTdHlsZXM6IG51bGxcbiAgICB9O1xuICAgIG11bHRpS2V5U3RvcmUuc2V0KHN0eWxlc09wdGlvbnMuc2hlZXRzTWFuYWdlciwgc3R5bGVzQ3JlYXRvciwgdGhlbWUsIHNoZWV0TWFuYWdlcik7XG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IF9leHRlbmRzKHt9LCBzdHlsZXNDcmVhdG9yLm9wdGlvbnMsIHN0eWxlc09wdGlvbnMsIHtcbiAgICB0aGVtZTogdGhlbWUsXG4gICAgZmxpcDogdHlwZW9mIHN0eWxlc09wdGlvbnMuZmxpcCA9PT0gJ2Jvb2xlYW4nID8gc3R5bGVzT3B0aW9ucy5mbGlwIDogdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJ1xuICB9KTtcblxuICBvcHRpb25zLmdlbmVyYXRlSWQgPSBvcHRpb25zLnNlcnZlckdlbmVyYXRlQ2xhc3NOYW1lIHx8IG9wdGlvbnMuZ2VuZXJhdGVDbGFzc05hbWU7XG4gIHZhciBzaGVldHNSZWdpc3RyeSA9IHN0eWxlc09wdGlvbnMuc2hlZXRzUmVnaXN0cnk7XG5cbiAgaWYgKHNoZWV0TWFuYWdlci5yZWZzID09PSAwKSB7XG4gICAgdmFyIHN0YXRpY1NoZWV0O1xuXG4gICAgaWYgKHN0eWxlc09wdGlvbnMuc2hlZXRzQ2FjaGUpIHtcbiAgICAgIHN0YXRpY1NoZWV0ID0gbXVsdGlLZXlTdG9yZS5nZXQoc3R5bGVzT3B0aW9ucy5zaGVldHNDYWNoZSwgc3R5bGVzQ3JlYXRvciwgdGhlbWUpO1xuICAgIH1cblxuICAgIHZhciBzdHlsZXMgPSBzdHlsZXNDcmVhdG9yLmNyZWF0ZSh0aGVtZSwgbmFtZSk7XG5cbiAgICBpZiAoIXN0YXRpY1NoZWV0KSB7XG4gICAgICBzdGF0aWNTaGVldCA9IHN0eWxlc09wdGlvbnMuanNzLmNyZWF0ZVN0eWxlU2hlZXQoc3R5bGVzLCBfZXh0ZW5kcyh7XG4gICAgICAgIGxpbms6IGZhbHNlXG4gICAgICB9LCBvcHRpb25zKSk7XG4gICAgICBzdGF0aWNTaGVldC5hdHRhY2goKTtcblxuICAgICAgaWYgKHN0eWxlc09wdGlvbnMuc2hlZXRzQ2FjaGUpIHtcbiAgICAgICAgbXVsdGlLZXlTdG9yZS5zZXQoc3R5bGVzT3B0aW9ucy5zaGVldHNDYWNoZSwgc3R5bGVzQ3JlYXRvciwgdGhlbWUsIHN0YXRpY1NoZWV0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2hlZXRzUmVnaXN0cnkpIHtcbiAgICAgIHNoZWV0c1JlZ2lzdHJ5LmFkZChzdGF0aWNTaGVldCk7XG4gICAgfVxuXG4gICAgc2hlZXRNYW5hZ2VyLnN0YXRpY1NoZWV0ID0gc3RhdGljU2hlZXQ7XG4gICAgc2hlZXRNYW5hZ2VyLmR5bmFtaWNTdHlsZXMgPSBnZXREeW5hbWljU3R5bGVzKHN0eWxlcyk7XG4gIH1cblxuICBpZiAoc2hlZXRNYW5hZ2VyLmR5bmFtaWNTdHlsZXMpIHtcbiAgICB2YXIgZHluYW1pY1NoZWV0ID0gc3R5bGVzT3B0aW9ucy5qc3MuY3JlYXRlU3R5bGVTaGVldChzaGVldE1hbmFnZXIuZHluYW1pY1N0eWxlcywgX2V4dGVuZHMoe1xuICAgICAgbGluazogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpKTtcbiAgICBkeW5hbWljU2hlZXQudXBkYXRlKHByb3BzKTtcbiAgICBkeW5hbWljU2hlZXQuYXR0YWNoKCk7XG4gICAgc3RhdGUuZHluYW1pY1NoZWV0ID0gZHluYW1pY1NoZWV0O1xuICAgIHN0YXRlLmNsYXNzZXMgPSBtZXJnZUNsYXNzZXMoe1xuICAgICAgYmFzZUNsYXNzZXM6IHNoZWV0TWFuYWdlci5zdGF0aWNTaGVldC5jbGFzc2VzLFxuICAgICAgbmV3Q2xhc3NlczogZHluYW1pY1NoZWV0LmNsYXNzZXNcbiAgICB9KTtcblxuICAgIGlmIChzaGVldHNSZWdpc3RyeSkge1xuICAgICAgc2hlZXRzUmVnaXN0cnkuYWRkKGR5bmFtaWNTaGVldCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN0YXRlLmNsYXNzZXMgPSBzaGVldE1hbmFnZXIuc3RhdGljU2hlZXQuY2xhc3NlcztcbiAgfVxuXG4gIHNoZWV0TWFuYWdlci5yZWZzICs9IDE7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZShfcmVmMywgcHJvcHMpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjMuc3RhdGU7XG5cbiAgaWYgKHN0YXRlLmR5bmFtaWNTaGVldCkge1xuICAgIHN0YXRlLmR5bmFtaWNTaGVldC51cGRhdGUocHJvcHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRldGFjaChfcmVmNCkge1xuICB2YXIgc3RhdGUgPSBfcmVmNC5zdGF0ZSxcbiAgICAgIHRoZW1lID0gX3JlZjQudGhlbWUsXG4gICAgICBzdHlsZXNPcHRpb25zID0gX3JlZjQuc3R5bGVzT3B0aW9ucyxcbiAgICAgIHN0eWxlc0NyZWF0b3IgPSBfcmVmNC5zdHlsZXNDcmVhdG9yO1xuXG4gIGlmIChzdHlsZXNPcHRpb25zLmRpc2FibGVHZW5lcmF0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHNoZWV0TWFuYWdlciA9IG11bHRpS2V5U3RvcmUuZ2V0KHN0eWxlc09wdGlvbnMuc2hlZXRzTWFuYWdlciwgc3R5bGVzQ3JlYXRvciwgdGhlbWUpO1xuICBzaGVldE1hbmFnZXIucmVmcyAtPSAxO1xuICB2YXIgc2hlZXRzUmVnaXN0cnkgPSBzdHlsZXNPcHRpb25zLnNoZWV0c1JlZ2lzdHJ5O1xuXG4gIGlmIChzaGVldE1hbmFnZXIucmVmcyA9PT0gMCkge1xuICAgIG11bHRpS2V5U3RvcmUuZGVsZXRlKHN0eWxlc09wdGlvbnMuc2hlZXRzTWFuYWdlciwgc3R5bGVzQ3JlYXRvciwgdGhlbWUpO1xuICAgIHN0eWxlc09wdGlvbnMuanNzLnJlbW92ZVN0eWxlU2hlZXQoc2hlZXRNYW5hZ2VyLnN0YXRpY1NoZWV0KTtcblxuICAgIGlmIChzaGVldHNSZWdpc3RyeSkge1xuICAgICAgc2hlZXRzUmVnaXN0cnkucmVtb3ZlKHNoZWV0TWFuYWdlci5zdGF0aWNTaGVldCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLmR5bmFtaWNTaGVldCkge1xuICAgIHN0eWxlc09wdGlvbnMuanNzLnJlbW92ZVN0eWxlU2hlZXQoc3RhdGUuZHluYW1pY1NoZWV0KTtcblxuICAgIGlmIChzaGVldHNSZWdpc3RyeSkge1xuICAgICAgc2hlZXRzUmVnaXN0cnkucmVtb3ZlKHN0YXRlLmR5bmFtaWNTaGVldCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVzZVN5bmNocm9ub3VzRWZmZWN0KGZ1bmMsIHZhbHVlcykge1xuICB2YXIga2V5ID0gUmVhY3QudXNlUmVmKFtdKTtcbiAgdmFyIG91dHB1dDsgLy8gU3RvcmUgXCJnZW5lcmF0aW9uXCIga2V5LiBKdXN0IHJldHVybnMgYSBuZXcgb2JqZWN0IGV2ZXJ5IHRpbWVcblxuICB2YXIgY3VycmVudEtleSA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSwgdmFsdWVzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgLy8gXCJ0aGUgZmlyc3QgcmVuZGVyXCIsIG9yIFwibWVtbyBkcm9wcGVkIHRoZSB2YWx1ZVwiXG5cbiAgaWYgKGtleS5jdXJyZW50ICE9PSBjdXJyZW50S2V5KSB7XG4gICAga2V5LmN1cnJlbnQgPSBjdXJyZW50S2V5O1xuICAgIG91dHB1dCA9IGZ1bmMoKTtcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChvdXRwdXQpIHtcbiAgICAgICAgb3V0cHV0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2N1cnJlbnRLZXldIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VTdHlsZXMoc3R5bGVzT3JDcmVhdG9yKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSxcbiAgICAgIGNsYXNzTmFtZVByZWZpeE9wdGlvbiA9IG9wdGlvbnMuY2xhc3NOYW1lUHJlZml4LFxuICAgICAgQ29tcG9uZW50ID0gb3B0aW9ucy5Db21wb25lbnQsXG4gICAgICBfb3B0aW9ucyRkZWZhdWx0VGhlbWUgPSBvcHRpb25zLmRlZmF1bHRUaGVtZSxcbiAgICAgIGRlZmF1bHRUaGVtZSA9IF9vcHRpb25zJGRlZmF1bHRUaGVtZSA9PT0gdm9pZCAwID8gbm9vcFRoZW1lIDogX29wdGlvbnMkZGVmYXVsdFRoZW1lLFxuICAgICAgc3R5bGVzT3B0aW9uczIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0aW9ucywgW1wibmFtZVwiLCBcImNsYXNzTmFtZVByZWZpeFwiLCBcIkNvbXBvbmVudFwiLCBcImRlZmF1bHRUaGVtZVwiXSk7XG5cbiAgdmFyIHN0eWxlc0NyZWF0b3IgPSBnZXRTdHlsZXNDcmVhdG9yKHN0eWxlc09yQ3JlYXRvcik7XG4gIHZhciBjbGFzc05hbWVQcmVmaXggPSBuYW1lIHx8IGNsYXNzTmFtZVByZWZpeE9wdGlvbiB8fCAnbWFrZVN0eWxlcyc7XG4gIHN0eWxlc0NyZWF0b3Iub3B0aW9ucyA9IHtcbiAgICBpbmRleDogaW5jcmVtZW50KCksXG4gICAgbmFtZTogbmFtZSxcbiAgICBtZXRhOiBjbGFzc05hbWVQcmVmaXgsXG4gICAgY2xhc3NOYW1lUHJlZml4OiBjbGFzc05hbWVQcmVmaXhcbiAgfTtcblxuICB2YXIgdXNlU3R5bGVzID0gZnVuY3Rpb24gdXNlU3R5bGVzKCkge1xuICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKSB8fCBkZWZhdWx0VGhlbWU7XG5cbiAgICB2YXIgc3R5bGVzT3B0aW9ucyA9IF9leHRlbmRzKHt9LCBSZWFjdC51c2VDb250ZXh0KFN0eWxlc0NvbnRleHQpLCBzdHlsZXNPcHRpb25zMik7XG5cbiAgICB2YXIgaW5zdGFuY2UgPSBSZWFjdC51c2VSZWYoKTtcbiAgICB2YXIgc2hvdWxkVXBkYXRlID0gUmVhY3QudXNlUmVmKCk7XG4gICAgdXNlU3luY2hyb25vdXNFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHN0YXRlOiB7fSxcbiAgICAgICAgc3R5bGVzQ3JlYXRvcjogc3R5bGVzQ3JlYXRvcixcbiAgICAgICAgc3R5bGVzT3B0aW9uczogc3R5bGVzT3B0aW9ucyxcbiAgICAgICAgdGhlbWU6IHRoZW1lXG4gICAgICB9O1xuICAgICAgYXR0YWNoKGN1cnJlbnQsIHByb3BzKTtcbiAgICAgIHNob3VsZFVwZGF0ZS5jdXJyZW50ID0gZmFsc2U7XG4gICAgICBpbnN0YW5jZS5jdXJyZW50ID0gY3VycmVudDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRldGFjaChjdXJyZW50KTtcbiAgICAgIH07XG4gICAgfSwgW3RoZW1lLCBzdHlsZXNDcmVhdG9yXSk7XG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzaG91bGRVcGRhdGUuY3VycmVudCkge1xuICAgICAgICB1cGRhdGUoaW5zdGFuY2UuY3VycmVudCwgcHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBzaG91bGRVcGRhdGUuY3VycmVudCA9IHRydWU7XG4gICAgfSk7XG4gICAgdmFyIGNsYXNzZXMgPSBnZXRDbGFzc2VzKGluc3RhbmNlLmN1cnJlbnQsIHByb3BzLmNsYXNzZXMsIENvbXBvbmVudCk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKGNsYXNzZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9O1xuXG4gIHJldHVybiB1c2VTdHlsZXM7XG59IiwiZnVuY3Rpb24gdG9WYWwobWl4KSB7XG5cdHZhciBrLCB5LCBzdHI9Jyc7XG5cblx0aWYgKHR5cGVvZiBtaXggPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBtaXggPT09ICdudW1iZXInKSB7XG5cdFx0c3RyICs9IG1peDtcblx0fSBlbHNlIGlmICh0eXBlb2YgbWl4ID09PSAnb2JqZWN0Jykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG1peCkpIHtcblx0XHRcdGZvciAoaz0wOyBrIDwgbWl4Lmxlbmd0aDsgaysrKSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRpZiAoeSA9IHRvVmFsKG1peFtrXSkpIHtcblx0XHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0XHRzdHIgKz0geTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChrIGluIG1peCkge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRzdHIgKz0gaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblx0dmFyIGk9MCwgdG1wLCB4LCBzdHI9Jyc7XG5cdHdoaWxlIChpIDwgYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdGlmICh0bXAgPSBhcmd1bWVudHNbaSsrXSkge1xuXHRcdFx0aWYgKHggPSB0b1ZhbCh0bXApKSB7XG5cdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdHN0ciArPSB4XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzdHI7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO3ZhciBiPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IsYz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLGQ9Yj9TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LGU9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik6NjAxMDcsZj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCxnPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpOjYwMTE0LGg9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDksaz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLGw9Yj9TeW1ib2wuZm9yKFwicmVhY3QuYXN5bmNfbW9kZVwiKTo2MDExMSxtPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbmN1cnJlbnRfbW9kZVwiKTo2MDExMSxuPWI/U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpOjYwMTEyLHA9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik6NjAxMTMscT1iP1xuU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlX2xpc3RcIik6NjAxMjAscj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpOjYwMTE1LHQ9Yj9TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTo2MDExNix2PWI/U3ltYm9sLmZvcihcInJlYWN0LmJsb2NrXCIpOjYwMTIxLHc9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZnVuZGFtZW50YWxcIik6NjAxMTcseD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5yZXNwb25kZXJcIik6NjAxMTgseT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zY29wZVwiKTo2MDExOTtcbmZ1bmN0aW9uIHooYSl7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSl7dmFyIHU9YS4kJHR5cGVvZjtzd2l0Y2godSl7Y2FzZSBjOnN3aXRjaChhPWEudHlwZSxhKXtjYXNlIGw6Y2FzZSBtOmNhc2UgZTpjYXNlIGc6Y2FzZSBmOmNhc2UgcDpyZXR1cm4gYTtkZWZhdWx0OnN3aXRjaChhPWEmJmEuJCR0eXBlb2YsYSl7Y2FzZSBrOmNhc2UgbjpjYXNlIHQ6Y2FzZSByOmNhc2UgaDpyZXR1cm4gYTtkZWZhdWx0OnJldHVybiB1fX1jYXNlIGQ6cmV0dXJuIHV9fX1mdW5jdGlvbiBBKGEpe3JldHVybiB6KGEpPT09bX1leHBvcnRzLkFzeW5jTW9kZT1sO2V4cG9ydHMuQ29uY3VycmVudE1vZGU9bTtleHBvcnRzLkNvbnRleHRDb25zdW1lcj1rO2V4cG9ydHMuQ29udGV4dFByb3ZpZGVyPWg7ZXhwb3J0cy5FbGVtZW50PWM7ZXhwb3J0cy5Gb3J3YXJkUmVmPW47ZXhwb3J0cy5GcmFnbWVudD1lO2V4cG9ydHMuTGF6eT10O2V4cG9ydHMuTWVtbz1yO2V4cG9ydHMuUG9ydGFsPWQ7XG5leHBvcnRzLlByb2ZpbGVyPWc7ZXhwb3J0cy5TdHJpY3RNb2RlPWY7ZXhwb3J0cy5TdXNwZW5zZT1wO2V4cG9ydHMuaXNBc3luY01vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIEEoYSl8fHooYSk9PT1sfTtleHBvcnRzLmlzQ29uY3VycmVudE1vZGU9QTtleHBvcnRzLmlzQ29udGV4dENvbnN1bWVyPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09a307ZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlcj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWh9O2V4cG9ydHMuaXNFbGVtZW50PWZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1jfTtleHBvcnRzLmlzRm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PW59O2V4cG9ydHMuaXNGcmFnbWVudD1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWV9O2V4cG9ydHMuaXNMYXp5PWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09dH07XG5leHBvcnRzLmlzTWVtbz1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PXJ9O2V4cG9ydHMuaXNQb3J0YWw9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1kfTtleHBvcnRzLmlzUHJvZmlsZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1nfTtleHBvcnRzLmlzU3RyaWN0TW9kZT1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWZ9O2V4cG9ydHMuaXNTdXNwZW5zZT1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PXB9O1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGU9ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYXx8YT09PWV8fGE9PT1tfHxhPT09Z3x8YT09PWZ8fGE9PT1wfHxhPT09cXx8XCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmKGEuJCR0eXBlb2Y9PT10fHxhLiQkdHlwZW9mPT09cnx8YS4kJHR5cGVvZj09PWh8fGEuJCR0eXBlb2Y9PT1rfHxhLiQkdHlwZW9mPT09bnx8YS4kJHR5cGVvZj09PXd8fGEuJCR0eXBlb2Y9PT14fHxhLiQkdHlwZW9mPT09eXx8YS4kJHR5cGVvZj09PXYpfTtleHBvcnRzLnR5cGVPZj16O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXSA9IE1FTU9fU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgLy8gUmVhY3QgdjE2LjExIGFuZCBiZWxvd1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH0gLy8gUmVhY3QgdjE2LjEyIGFuZCBhYm92ZVxuXG5cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGhvaXN0Tm9uUmVhY3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCB7IGNoYWluUHJvcFR5cGVzLCBnZXREaXNwbGF5TmFtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgbWFrZVN0eWxlcyBmcm9tICcuLi9tYWtlU3R5bGVzJztcbmltcG9ydCBnZXRUaGVtZVByb3BzIGZyb20gJy4uL2dldFRoZW1lUHJvcHMnO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4uL3VzZVRoZW1lJzsgLy8gTGluayBhIHN0eWxlIHNoZWV0IHdpdGggYSBjb21wb25lbnQuXG4vLyBJdCBkb2VzIG5vdCBtb2RpZnkgdGhlIGNvbXBvbmVudCBwYXNzZWQgdG8gaXQ7XG4vLyBpbnN0ZWFkLCBpdCByZXR1cm5zIGEgbmV3IGNvbXBvbmVudCwgd2l0aCBhIGBjbGFzc2VzYCBwcm9wZXJ0eS5cblxudmFyIHdpdGhTdHlsZXMgPSBmdW5jdGlvbiB3aXRoU3R5bGVzKHN0eWxlc09yQ3JlYXRvcikge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHJldHVybiBmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gICAgdmFyIGRlZmF1bHRUaGVtZSA9IG9wdGlvbnMuZGVmYXVsdFRoZW1lLFxuICAgICAgICBfb3B0aW9ucyR3aXRoVGhlbWUgPSBvcHRpb25zLndpdGhUaGVtZSxcbiAgICAgICAgd2l0aFRoZW1lID0gX29wdGlvbnMkd2l0aFRoZW1lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJHdpdGhUaGVtZSxcbiAgICAgICAgbmFtZSA9IG9wdGlvbnMubmFtZSxcbiAgICAgICAgc3R5bGVzT3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRpb25zLCBbXCJkZWZhdWx0VGhlbWVcIiwgXCJ3aXRoVGhlbWVcIiwgXCJuYW1lXCJdKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoQ29tcG9uZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFsnWW91IGFyZSBjYWxsaW5nIHdpdGhTdHlsZXMoc3R5bGVzKShDb21wb25lbnQpIHdpdGggYW4gdW5kZWZpbmVkIGNvbXBvbmVudC4nLCAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBpbXBvcnQgaXQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjbGFzc05hbWVQcmVmaXggPSBuYW1lO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAvLyBQcm92aWRlIGEgYmV0dGVyIERYIG91dHNpZGUgcHJvZHVjdGlvbi5cbiAgICAgICAgdmFyIGRpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KTtcblxuICAgICAgICBpZiAoZGlzcGxheU5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNsYXNzTmFtZVByZWZpeCA9IGRpc3BsYXlOYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzT3JDcmVhdG9yLCBfZXh0ZW5kcyh7XG4gICAgICBkZWZhdWx0VGhlbWU6IGRlZmF1bHRUaGVtZSxcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50LFxuICAgICAgbmFtZTogbmFtZSB8fCBDb21wb25lbnQuZGlzcGxheU5hbWUsXG4gICAgICBjbGFzc05hbWVQcmVmaXg6IGNsYXNzTmFtZVByZWZpeFxuICAgIH0sIHN0eWxlc09wdGlvbnMpKTtcbiAgICB2YXIgV2l0aFN0eWxlcyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFdpdGhTdHlsZXMocHJvcHMsIHJlZikge1xuICAgICAgdmFyIGNsYXNzZXNQcm9wID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiaW5uZXJSZWZcIl0pOyAvLyBUaGUgd3JhcHBlciByZWNlaXZlcyBvbmx5IHVzZXIgc3VwcGxpZWQgcHJvcHMsIHdoaWNoIGNvdWxkIGJlIGEgc3Vic2V0IG9mXG4gICAgICAvLyB0aGUgYWN0dWFsIHByb3BzIENvbXBvbmVudCBtaWdodCByZWNlaXZlIGR1ZSB0byBtZXJnaW5nIHdpdGggZGVmYXVsdFByb3BzLlxuICAgICAgLy8gU28gY29weWluZyBpdCBoZXJlIHdvdWxkIGdpdmUgdXMgdGhlIHNhbWUgcmVzdWx0IGluIHRoZSB3cmFwcGVyIGFzIHdlbGwuXG5cblxuICAgICAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMoX2V4dGVuZHMoe30sIENvbXBvbmVudC5kZWZhdWx0UHJvcHMsIHByb3BzKSk7XG4gICAgICB2YXIgdGhlbWU7XG4gICAgICB2YXIgbW9yZSA9IG90aGVyO1xuXG4gICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnIHx8IHdpdGhUaGVtZSkge1xuICAgICAgICAvLyBuYW1lIGFuZCB3aXRoVGhlbWUgYXJlIGludmFyaWFudCBpbiB0aGUgb3V0ZXIgc2NvcGVcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIHRoZW1lID0gdXNlVGhlbWUoKSB8fCBkZWZhdWx0VGhlbWU7XG5cbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICBtb3JlID0gZ2V0VGhlbWVQcm9wcyh7XG4gICAgICAgICAgICB0aGVtZTogdGhlbWUsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgcHJvcHM6IG90aGVyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gLy8gUHJvdmlkZSB0aGUgdGhlbWUgdG8gdGhlIHdyYXBwZWQgY29tcG9uZW50LlxuICAgICAgICAvLyBTbyB3ZSBkb24ndCBoYXZlIHRvIHVzZSB0aGUgYHdpdGhUaGVtZSgpYCBIaWdoZXItb3JkZXIgQ29tcG9uZW50LlxuXG5cbiAgICAgICAgaWYgKHdpdGhUaGVtZSAmJiAhbW9yZS50aGVtZSkge1xuICAgICAgICAgIG1vcmUudGhlbWUgPSB0aGVtZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgICAgIHJlZjogaW5uZXJSZWYgfHwgcmVmLFxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzXG4gICAgICB9LCBtb3JlKSk7XG4gICAgfSk7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gV2l0aFN0eWxlcy5wcm9wVHlwZXMgPSB7XG4gICAgICAvKipcbiAgICAgICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICAgICAqL1xuICAgICAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgICAgLyoqXG4gICAgICAgKiBVc2UgdGhhdCBwcm9wIHRvIHBhc3MgYSByZWYgdG8gdGhlIGRlY29yYXRlZCBjb21wb25lbnQuXG4gICAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAgICovXG4gICAgICBpbm5lclJlZjogY2hhaW5Qcm9wVHlwZXMoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3RdKSwgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5pbm5lclJlZiA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDsgLy8gcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgLy8gICAnTWF0ZXJpYWwtVUk6IFRoZSBgaW5uZXJSZWZgIHByb3AgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHY1LiAnICtcbiAgICAgICAgLy8gICAgICdSZWZzIGFyZSBub3cgYXV0b21hdGljYWxseSBmb3J3YXJkZWQgdG8gdGhlIGlubmVyIGNvbXBvbmVudC4nLFxuICAgICAgICAvLyApO1xuICAgICAgfSlcbiAgICB9IDogdm9pZCAwO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIFdpdGhTdHlsZXMuZGlzcGxheU5hbWUgPSBcIldpdGhTdHlsZXMoXCIuY29uY2F0KGdldERpc3BsYXlOYW1lKENvbXBvbmVudCksIFwiKVwiKTtcbiAgICB9XG5cbiAgICBob2lzdE5vblJlYWN0U3RhdGljcyhXaXRoU3R5bGVzLCBDb21wb25lbnQpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIEV4cG9zZWQgZm9yIHRlc3QgcHVycG9zZXMuXG4gICAgICBXaXRoU3R5bGVzLk5ha2VkID0gQ29tcG9uZW50O1xuICAgICAgV2l0aFN0eWxlcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIFdpdGhTdHlsZXMudXNlU3R5bGVzID0gdXNlU3R5bGVzO1xuICAgIH1cblxuICAgIHJldHVybiBXaXRoU3R5bGVzO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlczsiLCJpbXBvcnQgY3JlYXRlTXVpVGhlbWUgZnJvbSAnLi9jcmVhdGVNdWlUaGVtZSc7XG52YXIgZGVmYXVsdFRoZW1lID0gY3JlYXRlTXVpVGhlbWUoKTtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRUaGVtZTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMgYXMgd2l0aFN0eWxlc1dpdGhvdXREZWZhdWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcblxuZnVuY3Rpb24gd2l0aFN0eWxlcyhzdHlsZXNPckNyZWF0b3IsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHdpdGhTdHlsZXNXaXRob3V0RGVmYXVsdChzdHlsZXNPckNyZWF0b3IsIF9leHRlbmRzKHtcbiAgICBkZWZhdWx0VGhlbWU6IGRlZmF1bHRUaGVtZVxuICB9LCBvcHRpb25zKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXM7IiwiaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG4vLyBJdCBzaG91bGQgdG8gYmUgbm90ZWQgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzbid0IGVxdWl2YWxlbnQgdG8gYHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplYC5cbi8vXG4vLyBBIHN0cmljdCBjYXBpdGFsaXphdGlvbiBzaG91bGQgdXBwZXJjYXNlIHRoZSBmaXJzdCBsZXR0ZXIgb2YgZWFjaCB3b3JkIGEgdGhlIHNlbnRlbmNlLlxuLy8gV2Ugb25seSBoYW5kbGUgdGhlIGZpcnN0IHdvcmQuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogY2FwaXRhbGl6ZShzdHJpbmcpIGV4cGVjdHMgYSBzdHJpbmcgYXJndW1lbnQuXCIgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDcpKTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgyNCksXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ2ZpbGwnLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInByaW1hcnlcImAuICovXG4gICAgY29sb3JQcmltYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJzZWNvbmRhcnlcImAuICovXG4gICAgY29sb3JTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwiYWN0aW9uXCJgLiAqL1xuICAgIGNvbG9yQWN0aW9uOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uYWN0aXZlXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwiZXJyb3JcImAuICovXG4gICAgY29sb3JFcnJvcjoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpblxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cImRpc2FibGVkXCJgLiAqL1xuICAgIGNvbG9yRGlzYWJsZWQ6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmb250U2l6ZT1cImluaGVyaXRcImAuICovXG4gICAgZm9udFNpemVJbmhlcml0OiB7XG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGZvbnRTaXplPVwic21hbGxcImAuICovXG4gICAgZm9udFNpemVTbWFsbDoge1xuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgyMClcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZm9udFNpemU9XCJsYXJnZVwiYC4gKi9cbiAgICBmb250U2l6ZUxhcmdlOiB7XG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDM1KVxuICAgIH1cbiAgfTtcbn07XG52YXIgU3ZnSWNvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFN2Z0ljb24ocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjb2xvciA9IF9wcm9wcyRjb2xvciA9PT0gdm9pZCAwID8gJ2luaGVyaXQnIDogX3Byb3BzJGNvbG9yLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdzdmcnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRmb250U2l6ZSA9IHByb3BzLmZvbnRTaXplLFxuICAgICAgZm9udFNpemUgPSBfcHJvcHMkZm9udFNpemUgPT09IHZvaWQgMCA/ICdkZWZhdWx0JyA6IF9wcm9wcyRmb250U2l6ZSxcbiAgICAgIGh0bWxDb2xvciA9IHByb3BzLmh0bWxDb2xvcixcbiAgICAgIHRpdGxlQWNjZXNzID0gcHJvcHMudGl0bGVBY2Nlc3MsXG4gICAgICBfcHJvcHMkdmlld0JveCA9IHByb3BzLnZpZXdCb3gsXG4gICAgICB2aWV3Qm94ID0gX3Byb3BzJHZpZXdCb3ggPT09IHZvaWQgMCA/ICcwIDAgMjQgMjQnIDogX3Byb3BzJHZpZXdCb3gsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJjb21wb25lbnRcIiwgXCJmb250U2l6ZVwiLCBcImh0bWxDb2xvclwiLCBcInRpdGxlQWNjZXNzXCIsIFwidmlld0JveFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgY29sb3IgIT09ICdpbmhlcml0JyAmJiBjbGFzc2VzW1wiY29sb3JcIi5jb25jYXQoY2FwaXRhbGl6ZShjb2xvcikpXSwgZm9udFNpemUgIT09ICdkZWZhdWx0JyAmJiBjbGFzc2VzW1wiZm9udFNpemVcIi5jb25jYXQoY2FwaXRhbGl6ZShmb250U2l6ZSkpXSksXG4gICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgdmlld0JveDogdmlld0JveCxcbiAgICBjb2xvcjogaHRtbENvbG9yLFxuICAgIFwiYXJpYS1oaWRkZW5cIjogdGl0bGVBY2Nlc3MgPyB1bmRlZmluZWQgOiB0cnVlLFxuICAgIHJvbGU6IHRpdGxlQWNjZXNzID8gJ2ltZycgOiB1bmRlZmluZWQsXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBjaGlsZHJlbiwgdGl0bGVBY2Nlc3MgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIG51bGwsIHRpdGxlQWNjZXNzKSA6IG51bGwpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTdmdJY29uLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIE5vZGUgcGFzc2VkIGludG8gdGhlIFNWRyBlbGVtZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKiBZb3UgY2FuIHVzZSB0aGUgYGh0bWxDb2xvcmAgcHJvcCB0byBhcHBseSBhIGNvbG9yIGF0dHJpYnV0ZSB0byB0aGUgU1ZHIGVsZW1lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnYWN0aW9uJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2luaGVyaXQnLCAncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBUaGUgZm9udFNpemUgYXBwbGllZCB0byB0aGUgaWNvbi4gRGVmYXVsdHMgdG8gMjRweCwgYnV0IGNhbiBiZSBjb25maWd1cmUgdG8gaW5oZXJpdCBmb250IHNpemUuXG4gICAqL1xuICBmb250U2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdpbmhlcml0JywgJ2xhcmdlJywgJ3NtYWxsJ10pLFxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGEgY29sb3IgYXR0cmlidXRlIHRvIHRoZSBTVkcgZWxlbWVudC5cbiAgICovXG4gIGh0bWxDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIHNoYXBlLXJlbmRlcmluZyBhdHRyaWJ1dGUuIFRoZSBiZWhhdmlvciBvZiB0aGUgZGlmZmVyZW50IG9wdGlvbnMgaXMgZGVzY3JpYmVkIG9uIHRoZVxuICAgKiBbTUROIFdlYiBEb2NzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3NoYXBlLXJlbmRlcmluZykuXG4gICAqIElmIHlvdSBhcmUgaGF2aW5nIGlzc3VlcyB3aXRoIGJsdXJyeSBpY29ucyB5b3Ugc2hvdWxkIGludmVzdGlnYXRlIHRoaXMgcHJvcGVydHkuXG4gICAqL1xuICBzaGFwZVJlbmRlcmluZzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogUHJvdmlkZXMgYSBodW1hbi1yZWFkYWJsZSB0aXRsZSBmb3IgdGhlIGVsZW1lbnQgdGhhdCBjb250YWlucyBpdC5cbiAgICogaHR0cHM6Ly93d3cudzMub3JnL1RSL1NWRy1hY2Nlc3MvI0VxdWl2YWxlbnRcbiAgICovXG4gIHRpdGxlQWNjZXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBBbGxvd3MgeW91IHRvIHJlZGVmaW5lIHdoYXQgdGhlIGNvb3JkaW5hdGVzIHdpdGhvdXQgdW5pdHMgbWVhbiBpbnNpZGUgYW4gU1ZHIGVsZW1lbnQuXG4gICAqIEZvciBleGFtcGxlLCBpZiB0aGUgU1ZHIGVsZW1lbnQgaXMgNTAwICh3aWR0aCkgYnkgMjAwIChoZWlnaHQpLFxuICAgKiBhbmQgeW91IHBhc3Mgdmlld0JveD1cIjAgMCA1MCAyMFwiLFxuICAgKiB0aGlzIG1lYW5zIHRoYXQgdGhlIGNvb3JkaW5hdGVzIGluc2lkZSB0aGUgU1ZHIHdpbGwgZ28gZnJvbSB0aGUgdG9wIGxlZnQgY29ybmVyICgwLDApXG4gICAqIHRvIGJvdHRvbSByaWdodCAoNTAsMjApIGFuZCBlYWNoIHVuaXQgd2lsbCBiZSB3b3J0aCAxMHB4LlxuICAgKi9cbiAgdmlld0JveDogUHJvcFR5cGVzLnN0cmluZ1xufSA6IHZvaWQgMDtcblN2Z0ljb24ubXVpTmFtZSA9ICdTdmdJY29uJztcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlTdmdJY29uJ1xufSkoU3ZnSWNvbik7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vU3ZnSWNvbic7XG4vKipcbiAqIFByaXZhdGUgbW9kdWxlIHJlc2VydmVkIGZvciBAbWF0ZXJpYWwtdWkveCBwYWNrYWdlcy5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTdmdJY29uKHBhdGgsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciBDb21wb25lbnQgPSBmdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIHJlZikge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTdmdJY29uLCBfZXh0ZW5kcyh7XG4gICAgICByZWY6IHJlZlxuICAgIH0sIHByb3BzKSwgcGF0aCk7XG4gIH07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBOZWVkIHRvIHNldCBgZGlzcGxheU5hbWVgIG9uIHRoZSBpbm5lciBjb21wb25lbnQgZm9yIFJlYWN0Lm1lbW8uXG4gICAgLy8gUmVhY3QgcHJpb3IgdG8gMTYuMTQgaWdub3JlcyBgZGlzcGxheU5hbWVgIG9uIHRoZSB3cmFwcGVyLlxuICAgIENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IFwiXCIuY29uY2F0KGRpc3BsYXlOYW1lLCBcIkljb25cIik7XG4gIH1cblxuICBDb21wb25lbnQubXVpTmFtZSA9IFN2Z0ljb24ubXVpTmFtZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5tZW1vKCAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihDb21wb25lbnQpKTtcbn0iXSwibmFtZXMiOlsiUmVhY3RQcm9wVHlwZXNTZWNyZXQiLCJyZXF1aXJlJCQwIiwiX2Zvcm1hdE11aUVycm9yTWVzc2FnZSIsIm9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJhcnJheUxpa2VUb0FycmF5IiwiYXJyYXlXaXRob3V0SG9sZXMiLCJpdGVyYWJsZVRvQXJyYXkiLCJ1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm5vbkl0ZXJhYmxlU3ByZWFkIiwiX3R5cGVvZiIsInNldFByb3RvdHlwZU9mIiwiaXNJbkJyb3dzZXIiLCJzZXBhcmF0b3JSZWdFeHAiLCJyZWZSZWdFeHAiLCJoeXBoZW5hdGUiLCJwbHVnaW5zIiwiY2FjaGUiLCJjYWNoZSQxIiwiZnVuY3Rpb25zIiwiZ2xvYmFsIiwibmVzdGVkIiwidmVuZG9yUHJlZml4ZXIiLCJwcm9wc1NvcnQiLCJSZWFjdCIsImpzcyIsImhvaXN0Tm9uUmVhY3RTdGF0aWNzIiwid2l0aFN0eWxlcyIsIndpdGhTdHlsZXNXaXRob3V0RGVmYXVsdCIsIlJlYWN0LmZvcndhcmRSZWYiLCJSZWFjdC5jcmVhdGVFbGVtZW50IiwiU3ZnSWNvbiJdLCJtYXBwaW5ncyI6Ijs7O0FBQUcsSUFBQyxNQUFNLEdBQUc7QUFDYixFQUFFLEtBQUssRUFBRSxNQUFNO0FBQ2YsRUFBRSxLQUFLLEVBQUUsTUFBTTtBQUNmOztBQ0hHLElBQUMsR0FBRyxHQUFHO0FBQ1YsRUFBRSxFQUFFLEVBQUUsU0FBUztBQUNmLEVBQUUsR0FBRyxFQUFFLFNBQVM7QUFDaEIsRUFBRSxHQUFHLEVBQUUsU0FBUztBQUNoQixFQUFFLEdBQUcsRUFBRSxTQUFTO0FBQ2hCLEVBQUUsR0FBRyxFQUFFLFNBQVM7QUFDaEIsRUFBRSxHQUFHLEVBQUUsU0FBUztBQUNoQixFQUFFLEdBQUcsRUFBRSxTQUFTO0FBQ2hCLEVBQUUsR0FBRyxFQUFFLFNBQVM7QUFDaEIsRUFBRSxHQUFHLEVBQUUsU0FBUztBQUNoQixFQUFFLEdBQUcsRUFBRSxTQUFTO0FBQ2hCLEVBQUUsSUFBSSxFQUFFLFNBQVM7QUFDakIsRUFBRSxJQUFJLEVBQUUsU0FBUztBQUNqQixFQUFFLElBQUksRUFBRSxTQUFTO0FBQ2pCLEVBQUUsSUFBSSxFQUFFLFNBQVM7QUFDakI7O0FDZkcsSUFBQyxJQUFJLEdBQUc7QUFDWCxFQUFFLEVBQUUsRUFBRSxTQUFTO0FBQ2YsRUFBRSxHQUFHLEVBQUUsU0FBUztBQUNoQixFQUFFLEdBQUcsRUFBRSxTQUFTO0FBQ2hCLEVBQUUsR0FBRyxFQUFFLFNBQVM7QUFDaEIsRUFBRSxHQUFHLEVBQUUsU0FBUztBQUNoQixFQUFFLEdB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TUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUMxQixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakM7QUFDQSxFQUFFLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUN4QixJQUFJLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO0FBQ2xHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzRCxHQUFHLENBQUM7QUFDSjtBQUNBLEVBQUUsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ25CLEVBQUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JGO0FBQ0EsRUFBRSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO0FBQzdCLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUNoQixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxD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QUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksRUFBRSxHQUFHLFNBQVMsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksRUFBRSxHQUFHLFNBQVMsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdDdCLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSxPQUFPLEdBQUcsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsRUFBRSxF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LElBQUksSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNyQixJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDeEIsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzFCLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7QUFDN0IsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzdCLElBQUksSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMxQztBQUNBLElBQUksSUFBSSxTQUFTLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ25DLE1BQU0sSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IsS0FBSyxNQUFNO0FBQ1gsTUFBTSxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUUzQixLQUFLO0FBQ0w7QUFDQSxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUMzQyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQzNCLElBQUksSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU07QUFDL0IsUUFBUSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUs7QUFDN0IsUUFBUSxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUN4QyxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxLQUFLLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDN0UsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFF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O0FBQ3pDLElBQUksTUFBTSxJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzVDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sSUFBSSxJQUFJLENBQUM7QUFDckMsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBQ0Q7QUFDQSxTQUFTLCtCQUErQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDdEQsRUFBRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztBQUM1QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3pCLEVBQUUsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDdkMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU87QUFDckI7QUFDQSxFQUFFLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFO0FBQzFCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFO0FBQzNELE1BQU0sUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUM3QyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ1IsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBQ0Q7QUFDQSxTQUFTLHdCQUF3QixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDL0MsRUFBRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztBQUM1QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3pCO0FBQ0EsRUFBRSxLQUFLLElBQUksSUFBSSxJQUFJ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
