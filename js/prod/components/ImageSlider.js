"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

// An image slider component that uses the slick jQuery library
var ImageSlider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(ImageSlider, _React$Component);

  function ImageSlider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ImageSlider);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ImageSlider).call(this, props));
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
        return React.createElement("div", {
          key: genKey(obj.text)
        }, React.createElement("img", {
          alt: obj.text,
          src: obj.path
        }));
      });
      return React.createElement("div", {
        id: this.id,
        className: "ec-image-slider container"
      }, imageElements);
    }
  }]);
  return ImageSlider;
}(React.Component);