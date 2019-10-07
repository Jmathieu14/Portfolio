"use strict";

// Load react variables
var React = require('react');

var ReactDOM = require('react-dom'); // Used to be joined into other files, negating the need to write this into each file for test purposes"use strict";

var JssorSlider = require('jssor-slider');"use strict";

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
// Utility functions ------------------------------------------------
// 
// Return a key for given it's name (n)
function genKey(n) {
  var k = n + "-" + Math.random().toString().substr(2);
  return k;
} // Variable to store our display dimensions


var my_display_dimensions = {
  "width": 0,
  "height": 0
}; // Record body dimensions to our display dimensions variable (above)

function recordDisplayDimensions(debug) {
  var b = document.getElementsByTagName("body")[0];
  my_display_dimensions.height = b.clientHeight;
  my_display_dimensions.width = b.clientWidth; // Print to console if debugging enabled

  if (debug) console.log(my_display_dimensions);
} // Variables that store the section list class name and whether 
// or not the section list is displayed


var SECT_LIST_CLASS = "section-list";
var SECT_DISPLAYED = false; // Represents the maximum allowed width for the mobile view (in pixels)

var MOBILE_VIEW_MAX_WIDTH = 450; // Show the section list

function showSectionList() {
  if (!SECT_DISPLAYED) {
    var sectList = document.getElementsByClassName(SECT_LIST_CLASS)[0]; // If there is a section list on the page

    if (sectList !== undefined && sectList !== null) {
      sectList.className = SECT_LIST_CLASS + " show";
      SECT_DISPLAYED = true;
    }
  }
} // Selectors for angular dividers


var ANGLR_DIV_SEL = ".angular-divider";
var ANGLR_DIV_REV_SEL = ".angular-divider-rev"; // Update dimensions of Angular Section Dividers on page
// (the non-react way)

function resizeDividersOnPageResize() {
  // Enable or disable debugging screen dimensions
  var debug = false; // Record the display dimensions

  recordDisplayDimensions(debug);
  var dividers = document.querySelectorAll(ANGLR_DIV_SEL + ", " + ANGLR_DIV_REV_SEL); // Iterate through each angular divider on page

  for (var i = 0; i < dividers.length; ++i) {
    var d = dividers[i];
    var wrapper = d.parentElement;
    var angContent = wrapper.previousElementSibling.previousElementSibling;
    var dBorderH = wrapper.clientHeight - d.clientHeight; // Set element d's width to 0, b/c border width takes up space

    d.style.width = "0px";
    d.style.borderTop = dBorderH + "px solid transparent"; // Apply proper styling to reverse angular divider

    if (d.className.indexOf("-rev") > 0) {
      d.style.borderLeft = wrapper.clientWidth + "px solid black"; // Else apply normal styling
    } else {
      d.style.borderRight = wrapper.clientWidth + "px solid black";
    }
  } // Show the section list if not yet shown


  showSectionList();
} // Return the string repeated n times (as a string)


function repeatStringNTimes(str, n, sep) {
  if (n <= 0) return "";
  var strPlusSep = str + sep;
  var res = "";
  var ctr = 0;

  while (ctr < n - 1) {
    res = res + strPlusSep;
    ++ctr;
  }

  return res + str;
} // Return true if the object 'o' is not undefined and contains the key 'k'


function checkObjAndKey(o, k) {
  return o != null && k in o;
} // End of Utility functions -----------------------------------------
// Begin custom react components
// A divider for our Angular Sections


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
    _this.element = React.createRef();
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
    } // Best compromise between React and non-react approach

  }, {
    key: "resizeDividerOnMount",
    value: function resizeDividerOnMount() {
      var d = this.element.current;

      if (d != null) {
        d.style.width = "0px";
        var wrapper = d.parentElement;
        var dBorderH = wrapper.clientHeight - d.clientHeight;
        var borderLRText = wrapper.clientWidth + 'px solid black';
        d.style.borderTop = dBorderH + 'px solid transparent'; // Apply proper styling to reverse angular divider

        if (d.className.indexOf("-rev") > 0) {
          d.style.borderLeft = borderLRText; // Else apply normal styling
        } else {
          d.style.borderRight = borderLRText;
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resizeDividerOnMount();
    } // Get the correct background color from the parent object

  }, {
    key: "getParentBackgroundForWrapper",
    value: function getParentBackgroundForWrapper() {
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
        style: this.getParentBackgroundForWrapper()
      }, React.createElement("div", {
        ref: this.element,
        "class": cName
      }));
    }
  }]);

  return AngularDivider;
}(React.Component);

var BottomSpawnModal =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(BottomSpawnModal, _React$Component2);

  function BottomSpawnModal(props) {
    var _this2;

    _classCallCheck(this, BottomSpawnModal);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(BottomSpawnModal).call(this, props));
    _this2.specs = props.modalSpecs;
    _this2.state = {
      show: false
    };
    _this2.toggleState = _this2.toggleState.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(BottomSpawnModal, [{
    key: "toggleState",
    value: function toggleState() {
      this.setState({
        show: !this.state.show
      });
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      if (checkObjAndKey(this.specs, 'style')) {
        return this.specs['style'];
      }
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      if (checkObjAndKey(this.specs, 'title')) {
        return this.specs['title'];
      }

      return "";
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      var baseCName = "bottom-spawn-modal";

      if (this.state.show) {
        return baseCName + " show";
      }

      return baseCName;
    }
  }, {
    key: "getCloseImagePath",
    value: function getCloseImagePath() {
      if (checkObjAndKey(this.specs, 'close')) {
        return this.specs['close'];
      }
    }
  }, {
    key: "render",
    value: function render() {
      var imageSlider = null;

      if (checkObjAndKey(this.specs, 'imageSliderSpecs') && this.specs.imageSliderSpecs !== null) {
        imageSlider = React.createElement(JssorImageSlider, {
          specs: this.specs.imageSliderSpecs,
          id: genKey("IMAGE_SLIDER"),
          key: genKey("IMAGE_SLIDER_KEY")
        });
      }

      return React.createElement("span", {
        "class": this.getClassName(),
        style: this.getStyle()
      }, React.createElement("span", {
        "class": "bs-modal-menu-bar"
      }, React.createElement("span", {
        "class": "bs-modal-header"
      }, this.getTitle()), React.createElement("span", {
        "class": "bs-modal-close",
        onClick: this.toggleState
      }, React.createElement("img", {
        src: this.getCloseImagePath()
      }))), React.createElement("span", {
        "class": "bs-modal-content"
      }, imageSlider));
    }
  }]);

  return BottomSpawnModal;
}(React.Component); // Header for section links (to add clarity and ease of use to site)


var SectionLinksHeader =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(SectionLinksHeader, _React$Component3);

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
}(React.Component); // Links that appear under their respective Angular Sections


var SectionLink =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(SectionLink, _React$Component4);

  function SectionLink(props) {
    var _this3;

    _classCallCheck(this, SectionLink);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(SectionLink).call(this, props));
    _this3.url = props.url;
    _this3.logo = props.logo;
    _this3.name = props.name;
    _this3.hoverBG = props.hoverBG;
    _this3.hoverBGName = props.hoverBGName;
    _this3.parentBG = props.parentBG;
    _this3.childSetParentSectBGAndHoverText = props.childSetParentSectBGAndHoverText;
    _this3.mouseEnterLogo = _this3.mouseEnterLogo.bind(_assertThisInitialized(_this3));
    _this3.mouseLeaveLogo = _this3.mouseLeaveLogo.bind(_assertThisInitialized(_this3));
    _this3.handleClick = _this3.handleClick.bind(_assertThisInitialized(_this3));
    _this3.arrowClassName = "sl-hover-arrow";
    _this3.arrowID = props.arrowID;
    _this3.arrowRef = React.createRef();
    _this3.arrowStyle = {
      width: "0.5rem"
    };
    _this3.target = props.target;

    _this3.centerArrow();

    return _this3;
  } // Center the hover arrow to middle of section link


  _createClass(SectionLink, [{
    key: "centerArrow",
    value: function centerArrow() {
      var _this4 = this;

      window.setTimeout(function () {
        var arrow = _this4.arrowRef.current;

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
      var hoverTextShow = true;
      var hoverText = this.name;
      this.props.childSetParentSectBGAndHoverText("hover", this.hoverBG, priority, hoverText, hoverTextShow);
    }
  }, {
    key: "mouseLeaveLogo",
    value: function mouseLeaveLogo() {
      // Set priority to 0 so that this does not overwrite mouse enter of a different link
      var priority = 0;
      var hoverTextShow = false;
      var hoverText = this.name;
      this.props.childSetParentSectBGAndHoverText("hover", this.parentBG, priority, hoverText, hoverTextShow);
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      if (this.target === "MODAL") {
        console.log("Yo open this modal boi!");
      } else {
        window.open(this.url, this.target);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("div", {
        "class": "section-link"
      }, React.createElement("a", {
        onClick: this.handleClick
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

function SectionLinkHoverText(props) {
  return React.createElement("div", {
    "class": props.specs['className'],
    style: props.specs['textColor']
  }, repeatStringNTimes(props.specs['text'], 200, ' '));
}

var JssorImageSlider =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(JssorImageSlider, _React$Component5);

  function JssorImageSlider(props) {
    var _this5;

    _classCallCheck(this, JssorImageSlider);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(JssorImageSlider).call(this, props));
    _this5.specs = props.specs;
    _this5.images = _this5.specs.images;
    _this5.options = {
      $AutoPlay: 1,
      $FillMode: 1
    };
    _this5.slider = null;
    _this5.id = props.id;
    return _this5;
  }

  _createClass(JssorImageSlider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      new $JssorSlider$(this.id, this.options);
    }
  }, {
    key: "render",
    value: function render() {
      var imageElements = this.images.map(function (obj) {
        return React.createElement("div", null, React.createElement("img", {
          "data-u": "image",
          src: obj.path
        }));
      });
      return React.createElement("div", {
        id: this.id,
        "class": "ec-image-slider"
      }, React.createElement("div", {
        "data-u": "slides"
      }, imageElements));
    }
  }]);

  return JssorImageSlider;
}(React.Component);

var ExpandableContent =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(ExpandableContent, _React$Component6);

  function ExpandableContent(props) {
    var _this6;

    _classCallCheck(this, ExpandableContent);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(ExpandableContent).call(this, props));
    _this6.eCSpecs = props.eCSpecs;
    _this6.handleContentExpansion = props.handleContentExpansion;
    _this6.state = props.state;
    _this6.updateParentObject = _this6.updateParentObject.bind(_assertThisInitialized(_this6));
    _this6.toggleLocalState = _this6.toggleLocalState.bind(_assertThisInitialized(_this6));
    return _this6;
  } // Toggle the local state of this object


  _createClass(ExpandableContent, [{
    key: "toggleLocalState",
    value: function toggleLocalState() {
      if (this.state !== null) {
        this.setState({
          contentExpanded: !this.state.contentExpanded
        });
      }
    }
  }, {
    key: "updateParentObject",
    value: function updateParentObject() {
      this.toggleLocalState();
      this.props.handleContentExpansion();
    }
  }, {
    key: "getECClassName",
    value: function getECClassName() {
      if (this.state !== null && this.state.contentExpanded) {
        return "expandable-content-wrapper expanded";
      } else return "expandable-content-wrapper";
    }
  }, {
    key: "render",
    value: function render() {
      if (checkObjAndKey(this.eCSpecs, 'show') && this.eCSpecs['show']) {
        var imageSlider = null;

        if (checkObjAndKey(this.eCSpecs, 'imageSliderSpecs') && this.eCSpecs.imageSliderSpecs !== null) {
          imageSlider = React.createElement(JssorImageSlider, {
            specs: this.eCSpecs.imageSliderSpecs,
            id: genKey("IMAGE_SLIDER"),
            key: genKey("IMAGE_SLIDER_KEY")
          });
        }

        return React.createElement("div", {
          "class": this.getECClassName()
        }, React.createElement("div", {
          "class": "ec-menu-bar"
        }, React.createElement("button", {
          onClick: this.updateParentObject,
          "class": "ec-button"
        }, React.createElement("img", {
          "class": "ec-icon",
          src: this.eCSpecs['icon']
        }))), React.createElement("div", {
          "class": "expandable-content"
        }, imageSlider));
      } else return null;
    }
  }]);

  return ExpandableContent;
}(React.Component);

var AngularSection =
/*#__PURE__*/
function (_React$Component7) {
  _inherits(AngularSection, _React$Component7);

  function AngularSection(props) {
    var _this7;

    _classCallCheck(this, AngularSection);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(AngularSection).call(this, props));
    _this7.name = props.name;
    _this7.hoverBG = props.hoverBG;
    _this7.bannerSpecs = props.bannerSpecs;
    _this7.eCSpecs = props.eCSpecs;
    _this7.sectionLinks = props.sectionLinks;
    _this7.divOrientation = props.divOrientation;
    _this7.state = {
      text: "normal",
      backgroundColor: "",
      hoverText: "test",
      hoverTextShow: false,
      contentExpanded: false
    };
    _this7.toggleState = _this7.toggleState.bind(_assertThisInitialized(_this7)); // Keep track of the priorities set forth by the last active section link

    _this7.prevSectionLinkPriority = -1;
    _this7.childSetParentSectBGAndHoverText = _this7.childSetParentSectBGAndHoverText.bind(_assertThisInitialized(_this7));
    _this7.handleContentExpansion = _this7.handleContentExpansion.bind(_assertThisInitialized(_this7));
    _this7.sectionRef = React.createRef();
    return _this7;
  }

  _createClass(AngularSection, [{
    key: "toggleState",
    value: function toggleState() {
      // Do not update state if the expandable section is active
      if (!this.state.contentExpanded) {
        if (this.state.text === "normal") {
          this.setState({
            text: "hover",
            backgroundColor: this.hoverBG,
            hoverTextShow: false
          });
        } else this.setState({
          text: "normal",
          backgroundColor: "",
          hoverTextShow: false
        });
      }
    }
  }, {
    key: "handleContentExpansion",
    value: function handleContentExpansion() {
      if (this.state.contentExpanded) {
        this.setState({
          contentExpanded: false
        });
      } else this.setState({
        contentExpanded: true
      });
    } // Get style for the section

  }, {
    key: "getStyle",
    value: function getStyle() {
      var debug = false;
      recordDisplayDimensions(debug);
      var element = this.sectionRef.current;
      var as_style = {
        backgroundColor: this.state.backgroundColor
      };
      var new_height = my_display_dimensions.height * 0.8;

      if (element != null && this.state.contentExpanded && element.style.height != new_height) {
        as_style['height'] = new_height.toString() + 'px';
      }

      return as_style;
    } // Set the background and state text with the given state text and color; Will be called from the child
    // section links

  }, {
    key: "childSetParentSectBGAndHoverText",
    value: function childSetParentSectBGAndHoverText(s_text, color, priority, hoverText, hoverTextShow) {
      var _this8 = this;

      // Do not update background color if the expandable section is active
      if (!this.state.contentExpanded) {
        if (priority < this.prevSectionLinkPriority) {
          this.setState({
            text: s_text,
            backgroundColor: color,
            hoverText: hoverText,
            hoverTextShow: hoverTextShow
          });
        } else {
          window.setTimeout(function () {
            _this8.setState({
              text: s_text,
              backgroundColor: color,
              hoverText: hoverText,
              hoverTextShow: hoverTextShow
            });
          }, 25);
        }

        this.prevSectionLinkPriority = priority;
      }
    } // Get the specs needed for the section link hover text component

  }, {
    key: "getSLHoverTextSpecs",
    value: function getSLHoverTextSpecs() {
      var specs = {
        className: 'sl-hover-text',
        text: this.state['hoverText'],
        textColor: {
          color: this.state['backgroundColor']
        }
      };

      if (this.state['hoverTextShow']) {
        specs.className = specs.className + " show";
      }

      return specs;
    }
  }, {
    key: "getBannerTextStyle",
    value: function getBannerTextStyle() {
      if (checkObjAndKey(this.bannerSpecs, 'bannerTextStyle')) {
        return this.bannerSpecs['bannerTextStyle'];
      }
    }
  }, {
    key: "getBannerImgStyle",
    value: function getBannerImgStyle() {
      if (checkObjAndKey(this.bannerSpecs, 'bannerImgStyle')) {
        return this.bannerSpecs['bannerImgStyle'];
      }
    }
  }, {
    key: "getBannerTextHTML",
    value: function getBannerTextHTML() {
      if (checkObjAndKey(this.bannerSpecs, 'bannerText')) {
        return React.createElement("div", {
          "class": "banner-title-text",
          style: this.getBannerTextStyle()
        }, this.bannerSpecs['bannerText']);
      } else return null;
    }
  }, {
    key: "getBannerImgHTML",
    value: function getBannerImgHTML() {
      if (checkObjAndKey(this.bannerSpecs, 'bannerImg')) {
        return React.createElement("div", {
          "class": "banner-title-img",
          style: this.getBannerImgStyle()
        }, React.createElement("img", {
          src: this.bannerSpecs['bannerImg']
        }));
      } else return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      var section_links = null;

      if (this.sectionLinks !== undefined && this.sectionLinks !== null && this.sectionLinks.length > 0) {
        section_links = this.sectionLinks.map(function (obj) {
          return React.createElement(SectionLink, {
            key: genKey(obj.name),
            name: obj.name,
            url: obj.url,
            logo: obj.logo,
            state: _this9.state,
            hoverBG: obj.hoverBG,
            hoverBGName: obj.hoverBGName,
            parentBG: _this9.hoverBG,
            target: obj.target,
            childSetParentSectBGAndHoverText: _this9.childSetParentSectBGAndHoverText
          });
        });
      }

      var banner_text = this.getBannerTextHTML();
      var banner_img = this.getBannerImgHTML();
      return React.createElement(React.Fragment, null, React.createElement("div", {
        onMouseLeave: this.toggleState,
        onMouseEnter: this.toggleState,
        id: this.name,
        style: this.getStyle(),
        "class": "angular-section",
        ref: this.sectionRef
      }, React.createElement("div", {
        "class": "angular-content"
      }, banner_text, banner_img, React.createElement("div", {
        "class": "section-links-wrapper"
      }, React.createElement(SectionLinksHeader, null), section_links)), React.createElement(ExpandableContent, {
        eCSpecs: this.eCSpecs,
        state: this.state,
        handleContentExpansion: this.handleContentExpansion
      })), React.createElement(SectionLinkHoverText, {
        specs: this.getSLHoverTextSpecs()
      }), React.createElement(AngularDivider, {
        divOrientation: this.divOrientation,
        state: this.state
      }));
    }
  }]);

  return AngularSection;
}(React.Component);

var HeaderTab =
/*#__PURE__*/
function (_React$Component8) {
  _inherits(HeaderTab, _React$Component8);

  function HeaderTab(props) {
    var _this10;

    _classCallCheck(this, HeaderTab);

    _this10 = _possibleConstructorReturn(this, _getPrototypeOf(HeaderTab).call(this, props));
    _this10.name = props.name;
    _this10.opacityAsTab = props.opacityAsTab;
    _this10.mobileVersion = props.mobileVersion;
    _this10.toggleMobileTabsHelper = props.toggleMobileTabsHelper;
    _this10.delay = 200;
    _this10.scrollToSection = _this10.scrollToSection.bind(_assertThisInitialized(_this10));
    _this10.mobileScrollToSection = _this10.mobileScrollToSection.bind(_assertThisInitialized(_this10));
    _this10.mobileMenuActive = props.mobileMenuActive;
    return _this10;
  }

  _createClass(HeaderTab, [{
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

var HeaderTabs =
/*#__PURE__*/
function (_React$Component9) {
  _inherits(HeaderTabs, _React$Component9);

  function HeaderTabs(props) {
    var _this11;

    _classCallCheck(this, HeaderTabs);

    _this11 = _possibleConstructorReturn(this, _getPrototypeOf(HeaderTabs).call(this, props));
    _this11.sections = props.sections;
    _this11.moreIcon = props.moreIcon;
    _this11.moreStyle = props.moreStyle;
    _this11.state = {
      mobileTabsOpacity: 0,
      mobileTabsMaxHeight: '0px',
      mobileMenuActive: false
    };
    _this11.toggleMobileTabs = _this11.toggleMobileTabs.bind(_assertThisInitialized(_this11));
    _this11.toggleMobileTabsHelper = _this11.toggleMobileTabsHelper.bind(_assertThisInitialized(_this11));
    return _this11;
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
      var _this12 = this;

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
          toggleMobileTabsHelper: _this12.toggleMobileTabsHelper,
          mobileMenuActive: _this12.state.mobileMenuActive
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

var PageHeader =
/*#__PURE__*/
function (_React$Component10) {
  _inherits(PageHeader, _React$Component10);

  function PageHeader(props) {
    var _this13;

    _classCallCheck(this, PageHeader);

    _this13 = _possibleConstructorReturn(this, _getPrototypeOf(PageHeader).call(this, props));
    _this13.sections = props.sections;
    _this13.key = "PAGE_HEADER";
    _this13.pageHeaderSpecs = props.pageHeader;
    _this13.state = {
      "description": "active",
      "backgroundColor": _this13.pageHeaderSpecs['background'],
      "fontColor": _this13.pageHeaderSpecs['fontColor'],
      "fontFamily": _this13.pageHeaderSpecs['fontFamily'],
      "headerFontOpacity": _this13.pageHeaderSpecs['headerFontOpacity']
    };
    return _this13;
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
        "class": "page-header",
        style: this.getStyle()
      }, React.createElement("div", {
        "class": "header-logo-wrapper",
        style: this.pageHeaderSpecs['logoStyle']
      }, React.createElement("a", {
        href: this.pageHeaderSpecs['logoURL']
      }, React.createElement("img", {
        src: this.pageHeaderSpecs['logo']
      }))), React.createElement("div", {
        "class": "header-title",
        style: this.getHeaderStyle()
      }, this.pageHeaderSpecs['title']), React.createElement(HeaderTabs, {
        sections: this.sections,
        moreIcon: this.pageHeaderSpecs['mobileMoreIcon'],
        moreStyle: this.pageHeaderSpecs['mobileMoreStyle']
      }));
    }
  }]);

  return PageHeader;
}(React.Component); // Import our custom font(s)


function FontImport(props) {
  return React.createElement("link", {
    href: props.path,
    rel: "stylesheet"
  });
} // Set title for tab of web page in browser


function PageTitle(props) {
  return React.createElement("title", null, props.text);
}

var SectionList =
/*#__PURE__*/
function (_React$Component11) {
  _inherits(SectionList, _React$Component11);

  function SectionList(props) {
    var _this14;

    _classCallCheck(this, SectionList);

    _this14 = _possibleConstructorReturn(this, _getPrototypeOf(SectionList).call(this, props));
    _this14.sections = props.sections;
    _this14.counter = 0;
    _this14.key = "SECT_LIST";
    _this14.showSectionList = false;
    _this14.modalSpecs = {
      'title': 'My Modal',
      'close': '../img/page/Google Icons/baseline_close_white_48dp.png'
    };
    return _this14;
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
      this.showSectionList = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this15 = this;

      var my_sections = this.sections.map(function (obj) {
        return React.createElement(AngularSection, {
          key: genKey(obj.name),
          name: obj.name,
          hoverBG: obj.hoverBG,
          bannerSpecs: obj.bannerSpecs,
          eCSpecs: obj.expandableContentSpecs,
          divOrientation: _this15.divOrientation(),
          sectionLinks: obj.sectionLinks
        });
      });
      return React.createElement(React.Fragment, null, React.createElement("section", {
        "class": this.handleClassName()
      }, my_sections), React.createElement(BottomSpawnModal, {
        modalSpecs: this.modalSpecs
      }));
    }
  }]);

  return SectionList;
}(React.Component); // Add event listener to window resizing event


window.addEventListener("resize", resizeDividersOnPageResize); // Help for this from: https://www.tutorialrepublic.com/faq/how-to-capture-browser-window-resize-event-in-javascript.php"use strict";

// Function that defines what functions will be exported from my-react-components.js [for testing using mocha on node.js]
module.exports = {
  "genKey": genKey,
  "repeatStringNTimes": repeatStringNTimes,
  "checkObjAndKey": checkObjAndKey
};