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

// One of multiple links that appear under their respective Angular Sections
var SectionLink =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SectionLink, _React$Component);

  function SectionLink(props) {
    var _this;

    _classCallCheck(this, SectionLink);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SectionLink).call(this, props));
    _this.specs = props.specs; // this.specs has the following keys:
    // name, url, logo, hoverBG, hoverBGname, target
    // ---------------------------------------------
    // it sometimes has:
    // modalSpecs

    _this.parentBG = props.parentBG;
    _this.childSetParentSectBGAndHoverText = props.childSetParentSectBGAndHoverText;
    _this.mouseEnterLogo = _this.mouseEnterLogo.bind(_assertThisInitialized(_this));
    _this.mouseLeaveLogo = _this.mouseLeaveLogo.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.arrowClassName = "sl-hover-arrow";
    _this.arrowRef = React.createRef();
    _this.arrowStyle = {
      width: "0.5rem"
    };

    _this.centerArrow();

    return _this;
  } // Center the hover arrow to middle of section link


  _createClass(SectionLink, [{
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
        ReactDOM.render(React.createElement(BottomSpawnModal, {
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
      return React.createElement(React.Fragment, null, React.createElement("div", {
        "class": "section-link"
      }, React.createElement("a", {
        onClick: this.handleClick
      }, React.createElement("img", {
        src: this.specs.logo,
        onMouseEnter: this.mouseEnterLogo,
        onMouseLeave: this.mouseLeaveLogo
      })), React.createElement("div", {
        style: this.arrowStyle,
        id: this.specs.name + "-arrow",
        "class": this.arrowClassName,
        ref: this.arrowRef
      })));
    }
  }]);

  return SectionLink;
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
}(React.Component); // Section link hover text element


function SectionLinkHoverText(props) {
  return React.createElement("div", {
    "class": props.specs['className'],
    style: props.specs['textColor']
  }, repeatStringNTimes(props.specs['text'], 200, ' '));
}