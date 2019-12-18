"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

// A component that wraps one or more AngularSection
var SectionList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(SectionList, _React$Component);

  function SectionList(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SectionList);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SectionList).call(this, props));
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
        return React.createElement(AngularSection, {
          key: genKey(obj.name),
          name: obj.name,
          hoverBG: obj.hoverBG,
          bannerSpecs: obj.bannerSpecs,
          eCSpecs: obj.expandableContentSpecs,
          divOrientation: _this2.divOrientation(),
          sectionLinks: obj.sectionLinks
        });
      });
      return React.createElement(React.Fragment, null, React.createElement("section", {
        "class": this.handleClassName()
      }, my_sections));
    }
  }]);
  return SectionList;
}(React.Component);