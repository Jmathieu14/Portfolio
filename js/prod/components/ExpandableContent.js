"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

// Part of an Angular Section that allows one to expand and view additional content (if included in layout file)
var ExpandableContent =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(ExpandableContent, _React$Component);

  function ExpandableContent(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ExpandableContent);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ExpandableContent).call(this, props));
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
          imageSlider = React.createElement(ImageSlider, {
            specs: this.eCSpecs.imageSliderSpecs,
            id: genKey("IMAGE_SLIDER"),
            key: genKey("IMAGE_SLIDER_KEY")
          });
        }

        return React.createElement("div", {
          className: this.getECClassName()
        }, React.createElement("div", {
          className: "ec-menu-bar"
        }, React.createElement("button", {
          onClick: this.updateParentObject,
          className: "ec-button"
        }, React.createElement("img", {
          className: "ec-icon",
          src: this.eCSpecs['icon']
        }))), React.createElement("div", {
          className: "expandable-content"
        }, imageSlider));
      } else return null;
    }
  }]);
  return ExpandableContent;
}(React.Component);