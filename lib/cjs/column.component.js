"use strict";

exports.__esModule = true;
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  min-width: ", "px;\n  width: ", "px;\n  display: flex;\n  padding: 0 ", ";\n  justify-content: ", ";\n  font-size: 1.2rem;\n  overflow: hidden;\n  height: 100%;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Column = _styledComponents.default.div(_templateObject(), function (props) {
  return props.width;
}, function (props) {
  return props.width;
}, function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return props.alignment;
});

var _default = Column;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2x1bW4uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJDb2x1bW4iLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsIndpZHRoIiwidGhlbWUiLCJoYWxmR3V0dGVyV2lkdGgiLCJhbGlnbm1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLDBCQUFPQyxHQUFWLG9CQUNHLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQVY7QUFBQSxDQURSLEVBRUQsVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBVjtBQUFBLENBRkosRUFJRyxVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLGVBQWhCO0FBQUEsQ0FKUixFQUtTLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNJLFNBQVY7QUFBQSxDQUxkLENBQVo7O2VBWWVQLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ29sdW1uID0gc3R5bGVkLmRpdmBcbiAgbWluLXdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofXB4O1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH1weDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIGp1c3RpZnktY29udGVudDogJHtwcm9wcyA9PiBwcm9wcy5hbGlnbm1lbnR9O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ29sdW1uO1xuIl19