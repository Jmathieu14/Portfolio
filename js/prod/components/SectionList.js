"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// A component that wraps one or more AngularSection
var SectionList = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(SectionList, _React$Component);

  var _super = _createSuper(SectionList);

  function SectionList(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SectionList);
    _this = _super.call(this, props);
    _this.sections = props.sections;
    _this.counter = 0;
    _this.key = "SECT_LIST";
    _this.showSectionList = false;
    _this.modalSpecs = {
      'title': 'My Modal',
      'close': '../img/page/Google Icons/baseline_close_white_48dp.png'
    };
    return _this;
  } // Get orientation of angular divider given the section index


  (0, _createClass2["default"])(SectionList, [{
    key: "divOrientation",
    value: function divOrientation() {
      this.counter++;

      if (this.counter % 2 === 0) {
        return "rev";
      }

      return "";
    } // Add 'show' to end of the class name if mobile view is enabled;
    // Otherwise, onload will handle it.

  }, {
    key: "handleClassName",
    value: function handleClassName() {
      if (showSectionList) {
        SECT_DISPLAYED = true;
        return SECT_LIST_CLASS + " show";
      } else {
        return SECT_LIST_CLASS;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      redirectToGitHubPages();
      this.showSectionList = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var my_sections = this.sections.map(function (obj) {
        return /*#__PURE__*/React.createElement(AngularSection, {
          key: genKey(obj.name),
          name: obj.name,
          hoverBG: obj.hoverBG,
          bannerSpecs: obj.bannerSpecs,
          eCSpecs: obj.expandableContentSpecs,
          divOrientation: _this2.divOrientation(),
          sectionLinks: obj.sectionLinks
        });
      });
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
        "class": this.handleClassName()
      }, my_sections));
    }
  }]);
  return SectionList;
}(React.Component);