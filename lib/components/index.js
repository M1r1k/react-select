"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultComponents = exports.components = void 0;

var _containers = require("./containers");

var _indicators = require("./indicators");

var _Control = _interopRequireDefault(require("./Control"));

var _Group = _interopRequireWildcard(require("./Group"));

var _Input = _interopRequireDefault(require("./Input"));

var _Menu = _interopRequireWildcard(require("./Menu"));

var _MultiValue = _interopRequireWildcard(require("./MultiValue"));

var _Option = _interopRequireDefault(require("./Option"));

var _Placeholder = _interopRequireDefault(require("./Placeholder"));

var _SingleValue = _interopRequireDefault(require("./SingleValue"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var components = {
  ClearIndicator: _indicators.ClearIndicator,
  Control: _Control.default,
  DropdownIndicator: _indicators.DropdownIndicator,
  DownChevron: _indicators.DownChevron,
  CrossIcon: _indicators.CrossIcon,
  Group: _Group.default,
  GroupHeading: _Group.GroupHeading,
  IndicatorsContainer: _containers.IndicatorsContainer,
  IndicatorSeparator: _indicators.IndicatorSeparator,
  Input: _Input.default,
  LoadingIndicator: _indicators.LoadingIndicator,
  Menu: _Menu.default,
  MenuList: _Menu.MenuList,
  MenuPortal: _Menu.MenuPortal,
  LoadingMessage: _Menu.LoadingMessage,
  NoOptionsMessage: _Menu.NoOptionsMessage,
  MultiValue: _MultiValue.default,
  MultiValueContainer: _MultiValue.MultiValueContainer,
  MultiValueLabel: _MultiValue.MultiValueLabel,
  MultiValueRemove: _MultiValue.MultiValueRemove,
  Option: _Option.default,
  Placeholder: _Placeholder.default,
  SelectContainer: _containers.SelectContainer,
  SingleValue: _SingleValue.default,
  ValueContainer: _containers.ValueContainer
};
exports.components = components;

var defaultComponents = function defaultComponents(props) {
  return _objectSpread(_objectSpread({}, components), props.components);
};

exports.defaultComponents = defaultComponents;