"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* Les étapes pour executer la compilation automatique jsx vers js
1- installer les modules : (@babel/cli, @babel/core, @babel/preset-env, @babel/preset-react)
2- ajouter ("watch": "babel src --out-dir js --watch --verbose",) dans package.json
3- Créer le fichier .babelrc dans le dossier src et implémenter les presets de babel
4- lancer la commande "npm run watch"
5- Ajouter les liens Polyfill dans indexedDB.html
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script> 
*/
var ReactHeader = /*#__PURE__*/function (_React$Component) {
  _inherits(ReactHeader, _React$Component);

  var _super = _createSuper(ReactHeader);

  function ReactHeader() {
    _classCallCheck(this, ReactHeader);

    return _super.apply(this, arguments);
  }

  _createClass(ReactHeader, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for Header");
    }
  }]);

  return ReactHeader;
}(React.Component);

var ReactBody = /*#__PURE__*/function (_React$Component2) {
  _inherits(ReactBody, _React$Component2);

  var _super2 = _createSuper(ReactBody);

  function ReactBody() {
    _classCallCheck(this, ReactBody);

    return _super2.apply(this, arguments);
  }

  _createClass(ReactBody, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for Body");
    }
  }]);

  return ReactBody;
}(React.Component);

var ReactFooter = /*#__PURE__*/function (_React$Component3) {
  _inherits(ReactFooter, _React$Component3);

  var _super3 = _createSuper(ReactFooter);

  function ReactFooter() {
    _classCallCheck(this, ReactFooter);

    return _super3.apply(this, arguments);
  }

  _createClass(ReactFooter, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for Footer");
    }
  }]);

  return ReactFooter;
}(React.Component);

var ReactRoot = /*#__PURE__*/function (_React$Component4) {
  _inherits(ReactRoot, _React$Component4);

  var _super4 = _createSuper(ReactRoot);

  function ReactRoot() {
    _classCallCheck(this, ReactRoot);

    return _super4.apply(this, arguments);
  }

  _createClass(ReactRoot, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ReactHeader, null), /*#__PURE__*/React.createElement(ReactBody, null), /*#__PURE__*/React.createElement(ReactFooter, null));
    }
  }]);

  return ReactRoot;
}(React.Component);

var element = /*#__PURE__*/React.createElement(ReactRoot, null);
ReactDOM.render(element, document.getElementById('root'));
console.log('ok jsx to js run with auto compile');