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

// A modal that spawns from the bottom of the page
var BottomSpawnModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BottomSpawnModal, _React$Component);

  function BottomSpawnModal(props) {
    var _this;

    _classCallCheck(this, BottomSpawnModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BottomSpawnModal).call(this, props));
    _this.specs = props.specs;
    _this.state = props.state;
    _this.toggleState = _this.toggleState.bind(_assertThisInitialized(_this));
    return _this;
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
        imageSlider = React.createElement(ImageSlider, {
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
}(React.Component);