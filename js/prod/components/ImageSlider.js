"use strict";

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
}(React.Component);