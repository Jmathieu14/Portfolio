"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// An Angularly stylized section of a web page
var AngularSection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AngularSection, _React$Component);

  function AngularSection(props) {
    var _this;

    _classCallCheck(this, AngularSection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AngularSection).call(this, props));
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
    _this.toggleState = _this.toggleState.bind(_assertThisInitialized(_this)); // Keep track of the priorities set forth by the last active section link

    _this.prevSectionLinkPriority = -1;
    _this.childSetParentSectBGAndHoverText = _this.childSetParentSectBGAndHoverText.bind(_assertThisInitialized(_this));
    _this.handleContentExpansion = _this.handleContentExpansion.bind(_assertThisInitialized(_this));
    _this.sectionRef = React.createRef();
    return _this;
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
      var _this3 = this;

      var section_links = null;

      if (this.sectionLinks !== undefined && this.sectionLinks !== null && this.sectionLinks.length > 0) {
        section_links = this.sectionLinks.map(function (obj) {
          return React.createElement(SectionLink, {
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