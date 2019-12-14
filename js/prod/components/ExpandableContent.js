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

// Part of an Angular Section that allows one to expand and view additional content (if included in layout file)
var ExpandableContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ExpandableContent, _React$Component);

  function ExpandableContent(props) {
    var _this;

    _classCallCheck(this, ExpandableContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExpandableContent).call(this, props));
    _this.eCSpecs = props.eCSpecs;
    _this.handleContentExpansion = props.handleContentExpansion;
    _this.state = props.state;
    _this.updateParentObject = _this.updateParentObject.bind(_assertThisInitialized(_this));
    _this.toggleLocalState = _this.toggleLocalState.bind(_assertThisInitialized(_this));
    return _this;
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