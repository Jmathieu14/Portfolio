"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// Top menu bar 'buttons' used to scroll to specified angular section
var HeaderTab =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeaderTab, _React$Component);

  function HeaderTab(props) {
    var _this;

    _classCallCheck(this, HeaderTab);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeaderTab).call(this, props));
    _this.name = props.name;
    _this.opacityAsTab = props.opacityAsTab;
    _this.mobileVersion = props.mobileVersion;
    _this.toggleMobileTabsHelper = props.toggleMobileTabsHelper;
    _this.delay = 200;
    _this.scrollToSection = _this.scrollToSection.bind(_assertThisInitialized(_this));
    _this.mobileScrollToSection = _this.mobileScrollToSection.bind(_assertThisInitialized(_this));
    _this.mobileMenuActive = props.mobileMenuActive;
    return _this;
  }

  _createClass(HeaderTab, [{
    key: "scrollToSection",
    value: function scrollToSection() {
      var thisE = document.getElementById(this.name);

      if (thisE != null) {
        window.setTimeout(function () {
          thisE.scrollIntoView({
            behavior: 'smooth'
          });
        }, this.delay);
      }
    }
  }, {
    key: "mobileScrollToSection",
    value: function mobileScrollToSection() {
      if (this.mobileMenuActive) {
        this.props.toggleMobileTabsHelper(this.delay * 1.5);
        var thisE = document.getElementById(this.name);

        if (thisE != null) {
          window.setTimeout(function () {
            thisE.scrollIntoView({
              behavior: 'smooth'
            });
          }, this.delay);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.mobileVersion) {
        return React.createElement("a", {
          "class": "header-tab",
          onClick: this.scrollToSection,
          style: this.opacityAsTab
        }, this.name);
      } else {
        return React.createElement("a", {
          "class": "mobile-header-tab",
          onClick: this.mobileScrollToSection,
          style: this.opacityAsTab
        }, this.name);
      }
    }
  }]);

  return HeaderTab;
}(React.Component);