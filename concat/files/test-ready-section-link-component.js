"use strict";

// Load react variables
var React = require('react');

var ReactDOM = require('react-dom'); // Used to be joined into other files, negating the need to write this into each file for test purposes"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

// One of multiple links that appear under their respective Angular Sections
var SectionLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(SectionLink, _React$Component);

  function SectionLink(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SectionLink);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SectionLink).call(this, props));
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
  (0, _inherits2["default"])(SectionLinksHeader, _React$Component2);

  function SectionLinksHeader(props) {
    (0, _classCallCheck2["default"])(this, SectionLinksHeader);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SectionLinksHeader).call(this, props));
  }

  (0, _createClass2["default"])(SectionLinksHeader, [{
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
}"use strict";

module.exports = {
  SectionLink: SectionLink,
  SectionLinksHeader: SectionLinksHeader,
  SectionLinkHoverText: SectionLinkHoverText
};