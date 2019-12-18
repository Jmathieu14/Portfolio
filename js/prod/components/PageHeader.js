"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

// Top menu bar for site
var PageHeader =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(PageHeader, _React$Component);

  function PageHeader(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, PageHeader);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PageHeader).call(this, props));
    _this.sections = props.sections;
    _this.key = "PAGE_HEADER";
    _this.pageHeaderSpecs = props.pageHeader;
    _this.state = {
      "description": "active",
      "backgroundColor": _this.pageHeaderSpecs['background'],
      "fontColor": _this.pageHeaderSpecs['fontColor'],
      "fontFamily": _this.pageHeaderSpecs['fontFamily'],
      "headerFontOpacity": _this.pageHeaderSpecs['headerFontOpacity']
    };
    return _this;
  }

  (0, _createClass2["default"])(PageHeader, [{
    key: "getStyle",
    value: function getStyle() {
      return {
        backgroundColor: this.state.backgroundColor,
        color: this.state.fontColor,
        fontFamily: this.state.fontFamily
      };
    }
  }, {
    key: "getHeaderStyle",
    value: function getHeaderStyle() {
      var hStyle = {
        opacity: this.state.headerFontOpacity
      };

      if (this.pageHeaderSpecs['title'].trim() == "") {
        hStyle.display = "None";
      }

      return hStyle;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("section", {
        id: this.key,
        className: "page-header",
        style: this.getStyle()
      }, React.createElement("div", {
        className: "header-logo-wrapper",
        style: this.pageHeaderSpecs['logoStyle']
      }, React.createElement("a", {
        href: this.pageHeaderSpecs['logoURL']
      }, React.createElement("img", {
        src: this.pageHeaderSpecs['logo']
      }))), React.createElement("div", {
        className: "header-title",
        style: this.getHeaderStyle()
      }, this.pageHeaderSpecs['title']), React.createElement(HeaderTabs, {
        sections: this.sections,
        moreIcon: this.pageHeaderSpecs['mobileMoreIcon'],
        moreStyle: this.pageHeaderSpecs['mobileMoreStyle']
      }));
    }
  }]);
  return PageHeader;
}(React.Component);