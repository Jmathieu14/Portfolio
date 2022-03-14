"use strict";

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
}(React.Component);