"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

// A divider to separate each of our Angular Sections; stylized in
// an angular fashion.
var AngularDivider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(AngularDivider, _React$Component);

  function AngularDivider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AngularDivider);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AngularDivider).call(this, props));
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
      return React.createElement("div", {
        "class": "ang-div-wrapper",
        style: this.getParentBackgroundForWrapper()
      }, React.createElement("div", {
        ref: this.element,
        "class": cName
      }));
    }
  }]);
  return AngularDivider;
}(React.Component);