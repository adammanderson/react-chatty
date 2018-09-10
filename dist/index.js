'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _emotionTheming = require('emotion-theming');

var _themes = require('./themes');

var _themes2 = _interopRequireDefault(_themes);

var _ChattyWrapper = require('./components/ChattyWrapper');

var _ChattyWrapper2 = _interopRequireDefault(_ChattyWrapper);

var _Header = require('./components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Chat = require('./components/Chat');

var _Chat2 = _interopRequireDefault(_Chat);

var _Composer = require('./components/Composer');

var _Composer2 = _interopRequireDefault(_Composer);

var _messages = require('./messages');

var _messages2 = _interopRequireDefault(_messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chatty = function (_React$Component) {
  _inherits(Chatty, _React$Component);

  function Chatty(props) {
    _classCallCheck(this, Chatty);

    var _this = _possibleConstructorReturn(this, (Chatty.__proto__ || Object.getPrototypeOf(Chatty)).call(this, props));

    _this.state = {
      isFocused: true
    };
    return _this;
  }

  _createClass(Chatty, [{
    key: 'toggleFocus',
    value: function toggleFocus() {
      this.setState(function (state) {
        return {
          isFocused: !state.isFocused
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var isFocused = this.state.isFocused;


      return _react2.default.createElement(
        _emotionTheming.ThemeProvider,
        { theme: _themes2.default[this.props.theme] },
        _react2.default.createElement(
          _ChattyWrapper2.default,
          null,
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(_Chat2.default, {
            conversation: _messages2.default,
            isFocused: isFocused
          }),
          _react2.default.createElement(_Composer2.default, {
            isFocused: isFocused,
            onActive: this.toggleFocus.bind(this)
          })
        )
      );
    }
  }]);

  return Chatty;
}(_react2.default.Component);

Chatty.defaultProps = {
  theme: 'light'
};

exports.default = Chatty;