webpackJsonp([0],{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _router = __webpack_require__(32);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_router2.default, null), document.getElementById('root'));

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _route = __webpack_require__(33);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_route).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(34);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(_layout2.default, null);
};

exports.default = App;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = __webpack_require__(35);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_layout).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout() {
  return _react2.default.createElement(
    "div",
    { className: "mdl-layout mdl-js-layout mdl-layout--fixed-header" },
    _react2.default.createElement(
      "header",
      { className: "mdl-layout__header", style: { backgroundColor: "hsl(210, 76 %, 46 %) !important" } },
      _react2.default.createElement(
        "div",
        { className: "mdl-layout__header-row" },
        _react2.default.createElement("span", { className: "mdl-layout__title" }),
        _react2.default.createElement(
          "div",
          { className: "mdl-layout-spacer" },
          _react2.default.createElement(
            "h6",
            null,
            _react2.default.createElement(
              "span",
              null,
              "Development ( @Html.Raw(s.Replace(\"Initial Catalog=\", \"DB being Used\")))"
            )
          )
        ),
        _react2.default.createElement(
          "nav",
          { className: "mdl-navigation mdl-layout--large-screen-only" },
          _react2.default.createElement(
            "button",
            { id: "demo-menu-lower-right",
              className: "mdl-button mdl-js-button", style: { color: "white" } },
            "Hello ",
            _react2.default.createElement(
              "strong",
              null,
              "@User.Identity.GetUserName()"
            ),
            _react2.default.createElement(
              "i",
              { className: "material-icons" },
              "more_vert"
            )
          ),
          _react2.default.createElement(
            "ul",
            { className: "mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect", htmlFor: "demo-menu-lower-right" },
            _react2.default.createElement(
              "li",
              { className: "mdl-menu__item" },
              _react2.default.createElement(
                "a",
                { href: "javascript:document.getElementById('logoutForm').submit()" },
                "Log off"
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "mdl-layout__drawer" },
      _react2.default.createElement(
        "span",
        { className: "mdl-layout__title" },
        "Menu"
      ),
      _react2.default.createElement(
        "nav",
        { className: "mdl-navigation" },
        _react2.default.createElement(
          "a",
          { className: "mdl-navigation__link", href: "~/Home/Index" },
          _react2.default.createElement(
            "i",
            { className: "material-icons" },
            "build"
          ),
          " Upload Consent"
        ),
        _react2.default.createElement(
          "a",
          { className: "mdl-navigation__link", href: "~/Home/CurrentConsents" },
          _react2.default.createElement(
            "i",
            { className: "material-icons" },
            "visibility"
          ),
          " Consents"
        ),
        _react2.default.createElement(
          "a",
          { className: "mdl-navigation__link", href: "" },
          _react2.default.createElement(
            "i",
            { className: "material-icons" },
            "dashboard"
          ),
          " Metrics"
        ),
        _react2.default.createElement(
          "a",
          { className: "mdl-navigation__link", href: "~/Access/Index" },
          _react2.default.createElement(
            "i",
            { className: "material-icons" },
            "face"
          ),
          " Consent Users"
        ),
        _react2.default.createElement(
          "a",
          { className: "mdl-navigation__link", href: "~//Documentation/Index" },
          _react2.default.createElement(
            "i",
            { className: "material-icons" },
            "mode_comment"
          ),
          "Documentation"
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "page-content" },
      _react2.default.createElement(
        "div",
        { className: "demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--10-col" },
        "body hhhhhhhhhhhhhhh"
      )
    )
  );
};

exports.default = Layout;

/***/ })

},[16]);