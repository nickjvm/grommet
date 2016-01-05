"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var Label = (function (_Component) {
  _inherits(Label, _Component);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Label).apply(this, arguments));
  }

  _createClass(Label, [{
    key: "render",
    value: function render() {
      var icon = null;
      var text = null;
      if (this.props.icon) {
        icon = _react2.default.createElement(
          "span",
          { className: "label__icon control-icon" },
          this.props.icon
        );
      }
      if (this.props.text) {
        text = _react2.default.createElement(
          "span",
          { className: "label__text" },
          this.props.text
        );
      }
      return _react2.default.createElement(
        "div",
        { className: "label" },
        icon,
        text
      );
    }
  }]);

  return Label;
})(_react.Component);

exports.default = Label;

Label.propTypes = {
  icon: _react.PropTypes.node,
  text: _react.PropTypes.string
};
module.exports = exports['default'];