"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// Component that wraps one or more HeaderTab
var HeaderTabs = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(HeaderTabs, _React$Component);

  var _super = _createSuper(HeaderTabs);

  function HeaderTabs(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, HeaderTabs);
    _this = _super.call(this, props);
    _this.sections = props.sections;
    _this.moreIcon = props.moreIcon;
    _this.moreStyle = props.moreStyle;
    _this.state = {
      mobileTabsOpacity: 0,
      mobileTabsMaxHeight: '0px',
      mobileMenuActive: false
    };
    _this.toggleMobileTabs = _this.toggleMobileTabs.bind((0, _assertThisInitialized2["default"])(_this));
    _this.toggleMobileTabsHelper = _this.toggleMobileTabsHelper.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  } // Get the height of the section list, and use that to set the mobile tab sections' max height


  (0, _createClass2["default"])(HeaderTabs, [{
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
        return /*#__PURE__*/React.createElement(HeaderTab, {
          opacityAsTab: obj.opacityAsTab,
          name: obj.name,
          key: genKey(obj.name),
          mobileVersion: false
        });
      });
      var my_mobile_tabs = this.sections.map(function (obj) {
        return /*#__PURE__*/React.createElement(HeaderTab, {
          opacityAsTab: obj.opacityAsTab,
          name: obj.name,
          key: genKey(obj.name),
          mobileVersion: true,
          toggleMobileTabsHelper: _this2.toggleMobileTabsHelper,
          mobileMenuActive: _this2.state.mobileMenuActive
        });
      });
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        onClick: this.toggleMobileTabs,
        "class": "mobile-show-tabs-icon"
      }, /*#__PURE__*/React.createElement("img", {
        src: this.moreIcon,
        style: this.moreStyle
      })), /*#__PURE__*/React.createElement("div", {
        "class": "mobile-header-tabs",
        style: this.getMobileTabsStyle()
      }, my_mobile_tabs), /*#__PURE__*/React.createElement("div", {
        "class": "header-tabs"
      }, my_tabs));
    }
  }]);
  return HeaderTabs;
}(React.Component);