"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// A divider to separate each of our Angular Sections; stylized in
// an angular fashion.
var AngularDivider = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(AngularDivider, _React$Component);

  var _super = _createSuper(AngularDivider);

  function AngularDivider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AngularDivider);
    _this = _super.call(this, props);
    _this.divOrientation = props.divOrientation;
    _this.baseName = "angular-divider";
    _this.element = React.createRef();
    return _this;
  }

  (0, _createClass2["default"])(AngularDivider, [{
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
      return /*#__PURE__*/React.createElement("div", {
        "class": "ang-div-wrapper",
        style: this.getParentBackgroundForWrapper()
      }, /*#__PURE__*/React.createElement("div", {
        ref: this.element,
        "class": cName
      }));
    }
  }]);
  return AngularDivider;
}(React.Component);"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// An Angularly stylized section of a web page
var AngularSection = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(AngularSection, _React$Component);

  var _super = _createSuper(AngularSection);

  function AngularSection(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AngularSection);
    _this = _super.call(this, props);
    _this.name = props.name;
    _this.hoverBG = props.hoverBG;
    _this.bannerSpecs = props.bannerSpecs;
    _this.eCSpecs = props.eCSpecs;
    _this.sectionLinks = props.sectionLinks;
    _this.divOrientation = props.divOrientation;
    _this.state = {
      text: "normal",
      backgroundColor: "",
      hoverText: "test",
      hoverTextShow: false,
      contentExpanded: false
    };
    _this.toggleState = _this.toggleState.bind((0, _assertThisInitialized2["default"])(_this)); // Keep track of the priorities set forth by the last active section link

    _this.prevSectionLinkPriority = -1;
    _this.childSetParentSectBGAndHoverText = _this.childSetParentSectBGAndHoverText.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleContentExpansion = _this.handleContentExpansion.bind((0, _assertThisInitialized2["default"])(_this));
    _this.sectionRef = React.createRef();
    return _this;
  }

  (0, _createClass2["default"])(AngularSection, [{
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
      var _this2 = this;

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
            _this2.setState({
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
        return /*#__PURE__*/React.createElement("div", {
          "class": "banner-title-text",
          style: this.getBannerTextStyle()
        }, this.bannerSpecs['bannerText']);
      } else return null;
    }
  }, {
    key: "getBannerImgHTML",
    value: function getBannerImgHTML() {
      if (checkObjAndKey(this.bannerSpecs, 'bannerImg')) {
        return /*#__PURE__*/React.createElement("div", {
          "class": "banner-title-img",
          style: this.getBannerImgStyle()
        }, /*#__PURE__*/React.createElement("img", {
          src: this.bannerSpecs['bannerImg']
        }));
      } else return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var section_links = null;

      if (this.sectionLinks !== undefined && this.sectionLinks !== null && this.sectionLinks.length > 0) {
        section_links = this.sectionLinks.map(function (obj) {
          return /*#__PURE__*/React.createElement(SectionLink, {
            key: genKey(obj.name),
            specs: obj,
            state: _this3.state,
            parentBG: _this3.hoverBG,
            childSetParentSectBGAndHoverText: _this3.childSetParentSectBGAndHoverText
          });
        });
      }

      var banner_text = this.getBannerTextHTML();
      var banner_img = this.getBannerImgHTML();
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        onMouseLeave: this.toggleState,
        onMouseEnter: this.toggleState,
        id: this.name,
        style: this.getStyle(),
        "class": "angular-section",
        ref: this.sectionRef
      }, /*#__PURE__*/React.createElement("div", {
        "class": "angular-content"
      }, banner_text, banner_img, /*#__PURE__*/React.createElement("div", {
        "class": "section-links-wrapper"
      }, /*#__PURE__*/React.createElement(SectionLinksHeader, null), section_links)), /*#__PURE__*/React.createElement(ExpandableContent, {
        eCSpecs: this.eCSpecs,
        state: this.state,
        handleContentExpansion: this.handleContentExpansion
      })), /*#__PURE__*/React.createElement(SectionLinkHoverText, {
        specs: this.getSLHoverTextSpecs()
      }), /*#__PURE__*/React.createElement(AngularDivider, {
        divOrientation: this.divOrientation,
        state: this.state
      }));
    }
  }]);
  return AngularSection;
}(React.Component);"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// Part of an Angular Section that allows one to expand and view additional content (if included in layout file)
var ExpandableContent = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ExpandableContent, _React$Component);

  var _super = _createSuper(ExpandableContent);

  function ExpandableContent(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ExpandableContent);
    _this = _super.call(this, props);
    _this.eCSpecs = props.eCSpecs;
    _this.handleContentExpansion = props.handleContentExpansion;
    _this.state = props.state;
    _this.updateParentObject = _this.updateParentObject.bind((0, _assertThisInitialized2["default"])(_this));
    _this.toggleLocalState = _this.toggleLocalState.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  } // Toggle the local state of this object


  (0, _createClass2["default"])(ExpandableContent, [{
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
          imageSlider = /*#__PURE__*/React.createElement(ImageSlider, {
            specs: this.eCSpecs.imageSliderSpecs,
            id: genKey("IMAGE_SLIDER"),
            key: genKey("IMAGE_SLIDER_KEY")
          });
        }

        return /*#__PURE__*/React.createElement("div", {
          className: this.getECClassName()
        }, /*#__PURE__*/React.createElement("div", {
          className: "ec-menu-bar"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: this.updateParentObject,
          className: "ec-button"
        }, /*#__PURE__*/React.createElement("img", {
          className: "ec-icon",
          src: this.eCSpecs['icon']
        }))), /*#__PURE__*/React.createElement("div", {
          className: "expandable-content"
        }, imageSlider));
      } else return null;
    }
  }]);
  return ExpandableContent;
}(React.Component);"use strict";

// Return html element that will serve as the target to render a modal on activation
function ModalRenderTarget(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "MODAL_RENDER_TARGET"
  });
} // Import our custom font(s) by creating HTML link tag with path to custom font


function FontImport(props) {
  return /*#__PURE__*/React.createElement("link", {
    href: props.path,
    rel: "stylesheet"
  });
} // Set title for tab of web page in browser


function PageTitle(props) {
  return /*#__PURE__*/React.createElement("title", null, props.text);
}"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// Top menu bar 'buttons' used to scroll to specified angular section
var HeaderTab = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(HeaderTab, _React$Component);

  var _super = _createSuper(HeaderTab);

  function HeaderTab(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, HeaderTab);
    _this = _super.call(this, props);
    _this.name = props.name;
    _this.opacityAsTab = props.opacityAsTab;
    _this.mobileVersion = props.mobileVersion;
    _this.toggleMobileTabsHelper = props.toggleMobileTabsHelper;
    _this.delay = 200;
    _this.scrollToSection = _this.scrollToSection.bind((0, _assertThisInitialized2["default"])(_this));
    _this.mobileScrollToSection = _this.mobileScrollToSection.bind((0, _assertThisInitialized2["default"])(_this));
    _this.mobileMenuActive = props.mobileMenuActive;
    return _this;
  }

  (0, _createClass2["default"])(HeaderTab, [{
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
        return /*#__PURE__*/React.createElement("a", {
          "class": "header-tab",
          onClick: this.scrollToSection,
          style: this.opacityAsTab
        }, this.name);
      } else {
        return /*#__PURE__*/React.createElement("a", {
          "class": "mobile-header-tab",
          onClick: this.mobileScrollToSection,
          style: this.opacityAsTab
        }, this.name);
      }
    }
  }]);
  return HeaderTab;
}(React.Component);"use strict";

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
}(React.Component);"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// An image slider component that uses the slick jQuery library
var ImageSlider = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ImageSlider, _React$Component);

  var _super = _createSuper(ImageSlider);

  function ImageSlider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ImageSlider);
    _this = _super.call(this, props);
    _this.specs = props.specs;
    _this.images = _this.specs.images;
    _this.slider = null;
    _this.id = props.id;
    _this.settings = {
      dots: true,
      arrows: true
    };
    return _this;
  }

  (0, _createClass2["default"])(ImageSlider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $('#' + this.id).slick(this.settings);
    }
  }, {
    key: "render",
    value: function render() {
      var imageElements = this.images.map(function (obj) {
        return /*#__PURE__*/React.createElement("div", {
          key: genKey(obj.text)
        }, /*#__PURE__*/React.createElement("img", {
          alt: obj.text,
          src: obj.path
        }));
      });
      return /*#__PURE__*/React.createElement("div", {
        id: this.id,
        className: "ec-image-slider container"
      }, imageElements);
    }
  }]);
  return ImageSlider;
}(React.Component);"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// A modal that spawns from the bottom of the page
var BottomSpawnModal = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(BottomSpawnModal, _React$Component);

  var _super = _createSuper(BottomSpawnModal);

  function BottomSpawnModal(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, BottomSpawnModal);
    _this = _super.call(this, props);
    _this.specs = props.specs;
    _this.state = props.state;
    _this.toggleState = _this.toggleState.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(BottomSpawnModal, [{
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
        imageSlider = /*#__PURE__*/React.createElement(ImageSlider, {
          specs: this.specs.imageSliderSpecs,
          id: genKey("IMAGE_SLIDER"),
          key: genKey("IMAGE_SLIDER_KEY")
        });
      }

      return /*#__PURE__*/React.createElement("span", {
        "class": this.getClassName(),
        style: this.getStyle()
      }, /*#__PURE__*/React.createElement("span", {
        "class": "bs-modal-menu-bar"
      }, /*#__PURE__*/React.createElement("span", {
        "class": "bs-modal-header"
      }, this.getTitle()), /*#__PURE__*/React.createElement("span", {
        "class": "bs-modal-close",
        onClick: this.toggleState
      }, /*#__PURE__*/React.createElement("img", {
        src: this.getCloseImagePath()
      }))), /*#__PURE__*/React.createElement("span", {
        "class": "bs-modal-content"
      }, imageSlider));
    }
  }]);
  return BottomSpawnModal;
}(React.Component);"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// Top menu bar for site
var PageHeader = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(PageHeader, _React$Component);

  var _super = _createSuper(PageHeader);

  function PageHeader(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, PageHeader);
    _this = _super.call(this, props);
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
      return /*#__PURE__*/React.createElement("section", {
        id: this.key,
        className: "page-header",
        style: this.getStyle()
      }, /*#__PURE__*/React.createElement("div", {
        className: "header-logo-wrapper",
        style: this.pageHeaderSpecs['logoStyle']
      }, /*#__PURE__*/React.createElement("a", {
        href: this.pageHeaderSpecs['logoURL']
      }, /*#__PURE__*/React.createElement("img", {
        src: this.pageHeaderSpecs['logo']
      }))), /*#__PURE__*/React.createElement("div", {
        className: "header-title",
        style: this.getHeaderStyle()
      }, this.pageHeaderSpecs['title']), /*#__PURE__*/React.createElement(HeaderTabs, {
        sections: this.sections,
        moreIcon: this.pageHeaderSpecs['mobileMoreIcon'],
        moreStyle: this.pageHeaderSpecs['mobileMoreStyle']
      }));
    }
  }]);
  return PageHeader;
}(React.Component);"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// One of multiple links that appear under their respective Angular Sections
var SectionLink = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(SectionLink, _React$Component);

  var _super = _createSuper(SectionLink);

  function SectionLink(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SectionLink);
    _this = _super.call(this, props);
    _this.specs = props.specs; // this.specs has the following keys:
    // name, url, logo, hoverBG, hoverBGname, target
    // ---------------------------------------------
    // it sometimes has:
    // modalSpecs

    _this.parentBG = props.parentBG;
    _this.childSetParentSectBGAndHoverText = props.childSetParentSectBGAndHoverText;
    _this.mouseEnterLogo = _this.mouseEnterLogo.bind((0, _assertThisInitialized2["default"])(_this));
    _this.mouseLeaveLogo = _this.mouseLeaveLogo.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.arrowClassName = "sl-hover-arrow";
    _this.arrowRef = React.createRef();
    _this.arrowStyle = {
      width: "0.5rem"
    };

    _this.centerArrow();

    return _this;
  } // Center the hover arrow to middle of section link


  (0, _createClass2["default"])(SectionLink, [{
    key: "centerArrow",
    value: function centerArrow() {
      var _this2 = this;

      window.setTimeout(function () {
        var arrow = _this2.arrowRef.current;

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
      var hoverText = this.specs.name;
      this.props.childSetParentSectBGAndHoverText("hover", this.specs.hoverBG, priority, hoverText, hoverTextShow);
    }
  }, {
    key: "mouseLeaveLogo",
    value: function mouseLeaveLogo() {
      // Set priority to 0 so that this does not overwrite mouse enter of a different link
      var priority = 0;
      var hoverTextShow = false;
      var hoverText = this.specs.name;
      this.props.childSetParentSectBGAndHoverText("hover", this.parentBG, priority, hoverText, hoverTextShow);
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      if (this.specs.target === "MODAL" && checkObjAndKey(this.specs, "modalSpecs")) {
        var modalTarget = document.getElementById('MODAL_RENDER_TARGET');
        var initialState = {
          show: true
        }; // Remove previous modal if it exists

        ReactDOM.unmountComponentAtNode(modalTarget);
        ReactDOM.render( /*#__PURE__*/React.createElement(BottomSpawnModal, {
          specs: this.specs.modalSpecs,
          state: initialState
        }), modalTarget);
      } else {
        window.open(this.specs.url, this.specs.target);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        "class": "section-link"
      }, /*#__PURE__*/React.createElement("a", {
        onClick: this.handleClick
      }, /*#__PURE__*/React.createElement("img", {
        src: this.specs.logo,
        onMouseEnter: this.mouseEnterLogo,
        onMouseLeave: this.mouseLeaveLogo
      })), /*#__PURE__*/React.createElement("div", {
        style: this.arrowStyle,
        id: this.specs.name + "-arrow",
        "class": this.arrowClassName,
        ref: this.arrowRef
      })));
    }
  }]);
  return SectionLink;
}(React.Component); // Header for section links (to add clarity and ease of use to site)


var SectionLinksHeader = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2["default"])(SectionLinksHeader, _React$Component2);

  var _super2 = _createSuper(SectionLinksHeader);

  function SectionLinksHeader(props) {
    (0, _classCallCheck2["default"])(this, SectionLinksHeader);
    return _super2.call(this, props);
  }

  (0, _createClass2["default"])(SectionLinksHeader, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        "class": "section-links-header"
      }, "Links");
    }
  }]);
  return SectionLinksHeader;
}(React.Component); // Section link hover text element


function SectionLinkHoverText(props) {
  return /*#__PURE__*/React.createElement("div", {
    "class": props.specs['className'],
    style: props.specs['textColor']
  }, repeatStringNTimes(props.specs['text'], 200, ' '));
}"use strict";

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
}(React.Component);"use strict";

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
} // Add event listener to window resizing event


window.addEventListener("resize", resizeDividersOnPageResize); // Help for this from: https://www.tutorialrepublic.com/faq/how-to-capture-browser-window-resize-event-in-javascript.php
// Return the string repeated n times (as a string)

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
} // Old domain we do not want users using any further
// Make sure it is in lowercase or redirect will fail!


var oldDomain = "rawgit.com"; // Redirect the user to the github pages location of the site if the url is of domain rawgit

function redirectToGitHubPages() {
  var curDomain = window.location.hostname;

  if (curDomain.toLowerCase() === oldDomain) {
    // Where to redirect to
    var updatedLoc = "https://jmathieu14.github.io/Portfolio/html/home.html";
    console.log("Redirecting to most up to date page");
    window.open(updatedLoc, "_self");
  }
}

var GLOBAL_IMAGE_SLIDER = null; // End of Utility functions -----------------------------------------