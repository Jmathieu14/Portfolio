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
    _this2.childSetParentSectBG = props.childSetParentSectBG;
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
      // Set priority to 1 so that when one moves the mouse from one link to the next, the 
      // background color is not overwritten by the delayed by the dehovering of this link
      var priority = 1;
      this.props.childSetParentSectBG("hover", this.hoverBG, priority);
    }
  }, {
    key: "mouseLeaveLogo",
    value: function mouseLeaveLogo() {
      // Set priority to 0 so that this does not overwrite mouse enter of a different link
      var priority = 0;
      this.props.childSetParentSectBG("hover", this.parentBG, priority);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("div", {
        "class": "section-link"
      }, React.createElement("a", {
        href: this.url,
        target: "_blank"
      }, React.createElement("img", {
        src: this.logo,
        onMouseEnter: this.mouseEnterLogo,
        onMouseLeave: this.mouseLeaveLogo
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
    var _this4;

    _classCallCheck(this, AngularSection);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(AngularSection).call(this, props));
    _this4.name = props.name;
    _this4.hoverBG = props.hoverBG;
    _this4.bannerImg = props.bannerImg;
    _this4.sectionLinks = props.sectionLinks;
    _this4.divOrientation = props.divOrientation;
    _this4.state = {
      text: "normal",
      backgroundColor: ""
    };
    _this4.toggleState = _this4.toggleState.bind(_assertThisInitialized(_this4)); // Keep track of the priorities set forth by the last active section link

    _this4.prevSectionLinkPriority = -1;
    _this4.childSetParentSectBG = _this4.childSetParentSectBG.bind(_assertThisInitialized(_this4));
    return _this4;
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
    } // Set the background and state text with the given state text and color; Will be called from the child
    // section links

  }, {
    key: "childSetParentSectBG",
    value: function childSetParentSectBG(s_text, color, priority) {
      var _this5 = this;

      if (priority < this.prevSectionLinkPriority) {
        this.setState({
          text: s_text,
          backgroundColor: color
        });
      } else {
        window.setTimeout(function () {
          _this5.setState({
            text: s_text,
            backgroundColor: color
          });
        }, 25);
      }

      this.prevSectionLinkPriority = priority;
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
            childSetParentSectBG: _this6.childSetParentSectBG
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

var HeaderTab =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(HeaderTab, _React$Component5);

  function HeaderTab(props) {
    var _this7;

    _classCallCheck(this, HeaderTab);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(HeaderTab).call(this, props));
    _this7.name = props.name;
    _this7.opacityAsTab = props.opacityAsTab;
    _this7.scrollToSection = _this7.scrollToSection.bind(_assertThisInitialized(_this7));
    return _this7;
  }

  _createClass(HeaderTab, [{
    key: "scrollToSection",
    value: function scrollToSection() {
      var thisE = document.getElementById(this.name);

      if (thisE != null) {
        thisE.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("a", {
        "class": "header-tab",
        onClick: this.scrollToSection,
        style: this.opacityAsTab
      }, this.name);
    }
  }]);

  return HeaderTab;
}(React.Component);

var PageHeader =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(PageHeader, _React$Component6);

  function PageHeader(props) {
    var _this8;

    _classCallCheck(this, PageHeader);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(PageHeader).call(this, props));
    _this8.sections = props.sections;
    _this8.key = "PAGE_HEADER";
    _this8.pageHeaderSpecs = props.pageHeader;
    _this8.state = {
      "description": "active",
      "backgroundColor": _this8.pageHeaderSpecs['background'],
      "fontColor": _this8.pageHeaderSpecs['fontColor'],
      "fontFamily": _this8.pageHeaderSpecs['fontFamily'],
      "logoOpacity": _this8.pageHeaderSpecs['logoOpacity'],
      "headerOpacity": _this8.pageHeaderSpecs['headerOpacity']
    };
    return _this8;
  }

  _createClass(PageHeader, [{
    key: "getStyle",
    value: function getStyle() {
      return {
        backgroundColor: this.state.backgroundColor,
        color: this.state.fontColor,
        fontFamily: this.state.fontFamily
      };
    }
  }, {
    key: "getLogoStyle",
    value: function getLogoStyle() {
      return {
        opacity: this.state.logoOpacity
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
    key: "getHeaderFontOpacity",
    value: function getHeaderFontOpacity() {
      return {
        opacity: this.state.headerFontOpacity
      };
    }
  }, {
    key: "render",
    value: function render() {
      var my_opacity = this.getHeaderFontOpacity();
      var my_tabs = this.sections.map(function (obj) {
        return React.createElement(HeaderTab, {
          opacityAsTab: obj.opacityAsTab,
          name: obj.name,
          key: genKey(obj.name)
        });
      });
      return React.createElement("section", {
        id: this.key,
        "class": "page-header",
        style: this.getStyle()
      }, React.createElement("div", {
        "class": "header-title",
        style: this.getHeaderStyle()
      }, this.pageHeaderSpecs['title']), React.createElement("div", {
        "class": "header-logo-wrapper",
        style: this.getLogoStyle()
      }, React.createElement("a", {
        href: "#"
      }, React.createElement("img", {
        src: this.pageHeaderSpecs['logo']
      }))), React.createElement("div", {
        "class": "header-tabs"
      }, my_tabs));
    }
  }]);

  return PageHeader;
}(React.Component); // Import our custom font(s)


function FontImport(props) {
  return React.createElement("link", {
    href: props.path,
    rel: "stylesheet"
  });
}

var SectionList =
/*#__PURE__*/
function (_React$Component7) {
  _inherits(SectionList, _React$Component7);

  function SectionList(props) {
    var _this9;

    _classCallCheck(this, SectionList);

    _this9 = _possibleConstructorReturn(this, _getPrototypeOf(SectionList).call(this, props));
    _this9.sections = props.sections;
    _this9.counter = 0;
    _this9.key = "SECT_LIST";
    _this9.pageHeader = props.pageHeader;
    _this9.customFontPath = props.customFontPath;
    return _this9;
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
      var _this10 = this;

      var my_sections = this.sections.map(function (obj) {
        return React.createElement(AngularSection, {
          key: genKey(obj.name),
          name: obj.name,
          hoverBG: obj.hoverBG,
          bannerImg: obj.bannerImg,
          divOrientation: _this10.divOrientation(),
          sectionLinks: obj.sectionLinks
        });
      });
      return React.createElement(React.Fragment, null, React.createElement(FontImport, {
        path: this.customFontPath
      }), React.createElement(PageHeader, {
        pageHeader: this.pageHeader,
        sections: this.sections
      }), React.createElement("section", {
        "class": "section-list"
      }, my_sections));
    }
  }]);

  return SectionList;
}(React.Component);