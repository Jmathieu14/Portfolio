"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

// Top menu bar 'buttons' used to scroll to specified angular section
var HeaderTab =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(HeaderTab, _React$Component);

  function HeaderTab(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, HeaderTab);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(HeaderTab).call(this, props));
    _this.name = props.name;
    _this.opacityAsTab = props.opacityAsTab;
    _this.mobileVersion = props.mobileVersion;
    _this.toggleMobileTabsHelper = props.toggleMobileTabsHelper;
    _this.delay = 200;
    _this.scrollToSection = _this.scrollToSection.bind((0, _assertThisInitialized2["default"])(_this));
    _this.mobileScrollToSection = _this.mobileScrollToSection.bind((0, _assertThisInitialized2["default"])(_this));
    _this.mobileMenuActive = props.mobileMenuActive;
    return _this;
  }

  (0, _createClass2["default"])(HeaderTab, [{
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