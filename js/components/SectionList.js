"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// A component that wraps one or more AngularSection
var SectionList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SectionList, _React$Component);

  function SectionList(props) {
    var _this;

    _classCallCheck(this, SectionList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SectionList).call(this, props));
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


  _createClass(SectionList, [{
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