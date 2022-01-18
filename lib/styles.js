"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStyles = void 0;
exports.mergeStyles = mergeStyles;

var _containers = require("./components/containers");

var _Control = require("./components/Control");

var _Group = require("./components/Group");

var _indicators = require("./components/indicators");

var _Input = require("./components/Input");

var _Placeholder = require("./components/Placeholder");

var _Option = require("./components/Option");

var _Menu = require("./components/Menu");

var _SingleValue = require("./components/SingleValue");

var _MultiValue = require("./components/MultiValue");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultStyles = {
  clearIndicator: _indicators.clearIndicatorCSS,
  container: _containers.containerCSS,
  control: _Control.css,
  dropdownIndicator: _indicators.dropdownIndicatorCSS,
  group: _Group.groupCSS,
  groupHeading: _Group.groupHeadingCSS,
  indicatorsContainer: _containers.indicatorsContainerCSS,
  indicatorSeparator: _indicators.indicatorSeparatorCSS,
  input: _Input.inputCSS,
  loadingIndicator: _indicators.loadingIndicatorCSS,
  loadingMessage: _Menu.loadingMessageCSS,
  menu: _Menu.menuCSS,
  menuList: _Menu.menuListCSS,
  menuPortal: _Menu.menuPortalCSS,
  multiValue: _MultiValue.multiValueCSS,
  multiValueLabel: _MultiValue.multiValueLabelCSS,
  multiValueRemove: _MultiValue.multiValueRemoveCSS,
  noOptionsMessage: _Menu.noOptionsMessageCSS,
  option: _Option.optionCSS,
  placeholder: _Placeholder.placeholderCSS,
  singleValue: _SingleValue.css,
  valueContainer: _containers.valueContainerCSS
}; // Merge Utility
// Allows consumers to extend a base Select with additional styles

exports.defaultStyles = defaultStyles;

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // initialize with source styles
  var styles = _objectSpread({}, source); // massage in target styles


  Object.keys(target).forEach(function (key) {
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}