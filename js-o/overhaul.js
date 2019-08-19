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

//babel --plugins @babel/plugin-transform-react-jsx pre/pre-jsx/overhaul.js -d pre/pre-build-js-o && 
var SectionLink =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SectionLink, _React$Component);

  function SectionLink(props) {
    var _this;

    _classCallCheck(this, SectionLink);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SectionLink).call(this, props));
    _this.url = props.url;
    _this.logo = props.logo;
    return _this;
  }

  _createClass(SectionLink, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        "class": "section-link"
      }, React.createElement("img", {
        src: this.logo
      }, React.createElement("a", {
        href: this.url,
        target: "_blank"
      })));
    }
  }]);

  return SectionLink;
}(React.Component);

var AngularDivider =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(AngularDivider, _React$Component2);

  function AngularDivider(props) {
    var _this2;

    _classCallCheck(this, AngularDivider);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AngularDivider).call(this, props));
    _this2.divOrientation = props.divOrientation;
    _this2.baseName = "angular-divider";
    return _this2;
  }

  _createClass(AngularDivider, [{
    key: "genClassName",
    value: function genClassName() {
      if (this.divOrientation === undefined || this.divOrientation === "") {
        return this.baseName;
      } else {
        return this.baseName + "-" + this.divOrientation;
      }
    } // Get the correct background color from the parent object

  }, {
    key: "getBackgroundFromParent",
    value: function getBackgroundFromParent() {
      return {
        backgroundColor: this.props.state.backgroundColor
      };
    }
  }, {
    key: "render",
    value: function render() {
      var cName = this.genClassName();
      return React.createElement("div", {
        "class": "ang-div-wrapper",
        style: this.getBackgroundFromParent()
      }, React.createElement("div", {
        "class": cName
      }));
    }
  }]);

  return AngularDivider;
}(React.Component);

var AngularSection =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(AngularSection, _React$Component3);

  function AngularSection(props) {
    var _this3;

    _classCallCheck(this, AngularSection);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(AngularSection).call(this, props));
    _this3.name = props.name;
    _this3.hoverBG = props.hoverBG;
    _this3.bannerImg = props.bannerImg;
    _this3.divOrientation = props.divOrientation;
    _this3.state = {
      text: "normal",
      backgroundColor: ""
    };
    _this3.toggleState = _this3.toggleState.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(AngularSection, [{
    key: "toggleState",
    value: function toggleState() {
      if (this.state.text === "normal") {
        this.setState({
          text: "hover",
          backgroundColor: this.hoverBG
        });
      } else {
        this.setState({
          text: "normal",
          backgroundColor: ""
        });
      }
    }
  }, {
    key: "getBackground",
    value: function getBackground() {
      return {
        backgroundColor: this.state.backgroundColor
      };
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("div", {
        onMouseLeave: this.toggleState,
        onMouseEnter: this.toggleState,
        id: this.name,
        style: this.getBackground(),
        "class": "angular-section"
      }, React.createElement("div", {
        "class": "angular-content"
      }, React.createElement("div", {
        "class": "banner-title-img"
      }, React.createElement("img", {
        src: this.bannerImg
      })))), React.createElement(AngularDivider, {
        divOrientation: this.divOrientation,
        state: this.state
      }));
    }
  }]);

  return AngularSection;
}(React.Component);

var SectionList =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(SectionList, _React$Component4);

  function SectionList(props) {
    var _this4;

    _classCallCheck(this, SectionList);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(SectionList).call(this, props));
    _this4.sections = props.sections;
    _this4.counter = 0;
    _this4.key = "SECT_LIST";
    return _this4;
  } // Get orientation of angular divider given the section index


  _createClass(SectionList, [{
    key: "divOrientation",
    value: function divOrientation() {
      this.counter++;

      if (this.counter % 2 === 0) {
        return "rev";
      }

      return "";
    } // Return a key for the current section given it's name

  }, {
    key: "genKey",
    value: function genKey(n) {
      var k = n + "-" + Math.random().toString().substr(2);
      return k;
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var my_sections = this.sections.map(function (obj) {
        return React.createElement(AngularSection, {
          key: _this5.genKey(obj.name),
          name: obj.name,
          hoverBG: obj.hoverBG,
          bannerImg: obj.bannerImg,
          divOrientation: _this5.divOrientation()
        });
      });
      return React.createElement("section", {
        "class": "section-list"
      }, my_sections);
    }
  }]);

  return SectionList;
}(React.Component); // Load in mainPageSects variable
//const mainPageSects = require("./layouts/main-page-layout.json");


var mainPageSects = {
  "angular-sections": [{
    "name": "jmusic",
    "hoverBGName": "scloudOrange",
    "hoverBG": "#F50",
    "bannerImg": "../img/page/jm logo 3 -- music - clean.svg"
  }, {
    "name": "jprojects",
    "hoverBGName": "sharpYellow",
    "hoverBG": "#FFDD0E",
    "bannerImg": "../img/page/jm logo 3 -- project.svg"
  }] // Render to main view

};
ReactDOM.render(React.createElement(SectionList, {
  sections: mainPageSects["angular-sections"]
}), document.getElementById('page-content'));