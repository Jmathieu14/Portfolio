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

// Component that wraps one or more HeaderTab
var HeaderTabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeaderTabs, _React$Component);

  function HeaderTabs(props) {
    var _this;

    _classCallCheck(this, HeaderTabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeaderTabs).call(this, props));
    _this.sections = props.sections;
    _this.moreIcon = props.moreIcon;
    _this.moreStyle = props.moreStyle;
    _this.state = {
      mobileTabsOpacity: 0,
      mobileTabsMaxHeight: '0px',
      mobileMenuActive: false
    };
    _this.toggleMobileTabs = _this.toggleMobileTabs.bind(_assertThisInitialized(_this));
    _this.toggleMobileTabsHelper = _this.toggleMobileTabsHelper.bind(_assertThisInitialized(_this));
    return _this;
  } // Get the height of the section list, and use that to set the mobile tab sections' max height


  _createClass(HeaderTabs, [{
    key: "getSectionListHeight",
    value: function getSectionListHeight() {
      var my_sl = document.querySelector('section.section-list');

      if (my_sl != null) {
        return my_sl.offsetHeight;
      } else {
        return 0;
      }
    }
  }, {
    key: "toggleMobileTabsHelper",
    value: function toggleMobileTabsHelper(delay) {
      if (delay > 0) {
        this.toggleMobileTabs();
      } else {
        this.toggleMobileTabs();
      }
    }
  }, {
    key: "toggleMobileTabs",
    value: function toggleMobileTabs() {
      var slHeight = (this.getSectionListHeight() * 0.6).toString() + 'px';

      if (this.state.mobileTabsOpacity == 1) {
        this.setState({
          mobileTabsOpacity: 0,
          mobileTabsMaxHeight: '0px',
          mobileMenuActive: false
        });
      } else {
        this.setState({
          mobileTabsOpacity: 1,
          mobileTabsMaxHeight: slHeight,
          mobileMenuActive: true
        });
      }
    }
  }, {
    key: "getMobileTabsStyle",
    value: function getMobileTabsStyle() {
      return {
        opacity: this.state.mobileTabsOpacity,
        maxHeight: this.state.mobileTabsMaxHeight
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var my_tabs = this.sections.map(function (obj) {
        return React.createElement(HeaderTab, {
          opacityAsTab: obj.opacityAsTab,
          name: obj.name,
          key: genKey(obj.name),
          mobileVersion: false
        });
      });
      var my_mobile_tabs = this.sections.map(function (obj) {
        return React.createElement(HeaderTab, {
          opacityAsTab: obj.opacityAsTab,
          name: obj.name,
          key: genKey(obj.name),
          mobileVersion: true,
          toggleMobileTabsHelper: _this2.toggleMobileTabsHelper,
          mobileMenuActive: _this2.state.mobileMenuActive
        });
      });
      return React.createElement(React.Fragment, null, React.createElement("div", {
        onClick: this.toggleMobileTabs,
        "class": "mobile-show-tabs-icon"
      }, React.createElement("img", {
        src: this.moreIcon,
        style: this.moreStyle
      })), React.createElement("div", {
        "class": "mobile-header-tabs",
        style: this.getMobileTabsStyle()
      }, my_mobile_tabs), React.createElement("div", {
        "class": "header-tabs"
      }, my_tabs));
    }
  }]);

  return HeaderTabs;
}(React.Component);