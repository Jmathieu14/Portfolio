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
// Return a key for given it's name (n)
function genKey(n) {
  var k = n + "-" + Math.random().toString().substr(2);
  return k;
}

var AngularDivider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AngularDivider, _React$Component);

  function AngularDivider(props) {
    var _this;

    _classCallCheck(this, AngularDivider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AngularDivider).call(this, props));
    _this.divOrientation = props.divOrientation;
    _this.baseName = "angular-divider";
    return _this;
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
}(React.Component); // Header for section links (to add clarity and ease of use to site)


var SectionLinksHeader =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(SectionLinksHeader, _React$Component2);

  function SectionLinksHeader(props) {
    _classCallCheck(this, SectionLinksHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionLinksHeader).call(this, props));
  }

  _createClass(SectionLinksHeader, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        "class": "section-links-header"
      }, "Links");
    }
  }]);

  return SectionLinksHeader;
}(React.Component);

var SectionLink =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(SectionLink, _React$Component3);

  function SectionLink(props) {
    var _this2;

    _classCallCheck(this, SectionLink);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(SectionLink).call(this, props));
    _this2.url = props.url;
    _this2.logo = props.logo;
    _this2.name = props.name;
    _this2.hoverBG = props.hoverBG;
    _this2.hoverBGName = props.hoverBGName;
    _this2.parentBG = props.parentBG;
    _this2.setBackground = props.setBackground;
    _this2.mouseEnterLogo = _this2.mouseEnterLogo.bind(_assertThisInitialized(_this2));
    _this2.mouseLeaveLogo = _this2.mouseLeaveLogo.bind(_assertThisInitialized(_this2));
    _this2.arrowClassName = "sl-hover-arrow";
    _this2.arrowID = props.arrowID;
    _this2.arrowRef = React.createRef();
    _this2.arrowStyle = {
      width: "0.5rem"
    };

    _this2.centerArrow();

    return _this2;
  } // Center the hover arrow to middle of section link


  _createClass(SectionLink, [{
    key: "centerArrow",
    value: function centerArrow() {
      var _this3 = this;

      window.setTimeout(function () {
        var arrow = _this3.arrowRef.current;

        if (arrow !== null) {
          var imgNode = arrow.previousSibling.children[0];
          var imgWidth = imgNode.clientWidth;
          var nWidth = arrow.clientWidth; // Set arrow back to width 0 so we get an arrow shape and not trapezoid shape

          arrow.style.width = "0px";
          var centeringAmount = imgWidth / 2 - nWidth;
          arrow.style.left = centeringAmount + "px";
        }
      }, 25);
    }
  }, {
    key: "mouseEnterLogo",
    value: function mouseEnterLogo() {
      this.props.setBackground("hover", this.hoverBG);
    }
  }, {
    key: "mouseLeaveLogo",
    value: function mouseLeaveLogo() {
      var _this4 = this;

      // Delay update to allow transition to occur (only needed for mouse out)
      window.setTimeout(function () {
        _this4.props.setBackground("hover", _this4.parentBG);
      }, 75);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("div", {
        onMouseEnter: this.mouseEnterLogo,
        onMouseLeave: this.mouseLeaveLogo,
        "class": "section-link"
      }, React.createElement("a", {
        href: this.url,
        target: "_blank"
      }, React.createElement("img", {
        src: this.logo
      })), React.createElement("div", {
        style: this.arrowStyle,
        id: this.name + "-arrow",
        "class": this.arrowClassName,
        ref: this.arrowRef
      })));
    }
  }]);

  return SectionLink;
}(React.Component);

var AngularSection =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(AngularSection, _React$Component4);

  function AngularSection(props) {
    var _this5;

    _classCallCheck(this, AngularSection);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(AngularSection).call(this, props));
    _this5.name = props.name;
    _this5.hoverBG = props.hoverBG;
    _this5.bannerImg = props.bannerImg;
    _this5.sectionLinks = props.sectionLinks;
    _this5.divOrientation = props.divOrientation;
    _this5.state = {
      text: "normal",
      backgroundColor: ""
    };
    _this5.toggleState = _this5.toggleState.bind(_assertThisInitialized(_this5));
    _this5.setBackground = _this5.setBackground.bind(_assertThisInitialized(_this5));
    return _this5;
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
    } // Set the background and state text with the given state text and color

  }, {
    key: "setBackground",
    value: function setBackground(s_text, color) {
      this.setState({
        text: s_text,
        backgroundColor: color
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var section_links = null;

      if (this.sectionLinks !== undefined && this.sectionLinks !== null && this.sectionLinks.length > 0) {
        section_links = this.sectionLinks.map(function (obj) {
          return React.createElement(SectionLink, {
            key: genKey(obj.name),
            name: obj.name,
            url: obj.url,
            logo: obj.logo,
            state: _this6.state,
            hoverBG: obj.hoverBG,
            hoverBGName: obj.hoverBGName,
            parentBG: _this6.hoverBG,
            setBackground: _this6.setBackground
          });
        });
      }

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
      })), React.createElement("div", {
        "class": "section-links-wrapper"
      }, React.createElement(SectionLinksHeader, null), section_links))), React.createElement(AngularDivider, {
        divOrientation: this.divOrientation,
        state: this.state
      }));
    }
  }]);

  return AngularSection;
}(React.Component);

var SectionList =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(SectionList, _React$Component5);

  function SectionList(props) {
    var _this7;

    _classCallCheck(this, SectionList);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(SectionList).call(this, props));
    _this7.sections = props.sections;
    _this7.counter = 0;
    _this7.key = "SECT_LIST";
    return _this7;
  } // Get orientation of angular divider given the section index


  _createClass(SectionList, [{
    key: "divOrientation",
    value: function divOrientation() {
      this.counter++;

      if (this.counter % 2 === 0) {
        return "rev";
      }

      return "";
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      var my_sections = this.sections.map(function (obj) {
        return React.createElement(AngularSection, {
          key: genKey(obj.name),
          name: obj.name,
          hoverBG: obj.hoverBG,
          bannerImg: obj.bannerImg,
          divOrientation: _this8.divOrientation(),
          sectionLinks: obj.sectionLinks
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
    "hoverBGName": "lightGrey",
    "hoverBG": "#DDD",
    "bannerImg": "../img/page/jm logo 3 -- music - clean.svg",
    "sectionLinks": [{
      "name": "jmSoundcloud",
      "url": "https://soundcloud.com/jacques_mathieu",
      "logo": "../../img/page/Social Media/SVG/24/4419136 - cloud logo sound sound cloud soundcloud square icon.svg",
      "hoverBG": "#F50",
      "hoverBGName": "scloudOrange"
    }]
  }, {
    "name": "jprojects",
    //            "hoverBGName": "sharpYellow",
    //            "hoverBG": "#FFDD0E",
    "hoverBGName": "lightBlueGrey",
    "hoverBG": "#DDEEDD",
    "bannerImg": "../img/page/jm logo 3 -- project.svg",
    "sectionLinks": [{
      "name": "GitHub",
      "url": "https://github.com/Jmathieu14",
      "logo": "../../img/page/Social Media/SVG/24/4419165 - circle github outline social-media icon.svg",
      "hoverBG": "#A54AB0",
      "hoverBGName": "githubDesktopPurple"
    }]
  }] // Render to main view

};
ReactDOM.render(React.createElement(SectionList, {
  sections: mainPageSects["angular-sections"]
}), document.getElementById('page-content'));