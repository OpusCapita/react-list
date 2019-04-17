"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  min-width: ", ";\n  width: ", ";\n  display: flex;\n  padding: 0 ", ";\n  justify-content: ", ";\n  font-size: 1.2rem;\n  overflow: hidden;\n  height: 100%;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Column = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.width === 'auto' ? 'auto' : props.width + "px";
}, function (props) {
  return props.width === 'auto' ? 'auto' : props.width + "px";
}, function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return props.alignment;
});

var _default = Column;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2x1bW4uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJDb2x1bW4iLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsIndpZHRoIiwidGhlbWUiLCJoYWxmR3V0dGVyV2lkdGgiLCJhbGlnbm1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUNHLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsTUFBaEIsR0FBeUIsTUFBekIsR0FBcUNELEtBQUssQ0FBQ0MsS0FBM0MsT0FBTDtBQUFBLENBRFIsRUFFRCxVQUFBRCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxLQUFOLEtBQWdCLE1BQWhCLEdBQXlCLE1BQXpCLEdBQXFDRCxLQUFLLENBQUNDLEtBQTNDLE9BQUw7QUFBQSxDQUZKLEVBSUcsVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxlQUFoQjtBQUFBLENBSlIsRUFLUyxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDSSxTQUFWO0FBQUEsQ0FMZCxDQUFaOztlQVllUCxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IENvbHVtbiA9IHN0eWxlZC5kaXZgXG4gIG1pbi13aWR0aDogJHtwcm9wcyA9PiAocHJvcHMud2lkdGggPT09ICdhdXRvJyA/ICdhdXRvJyA6IGAke3Byb3BzLndpZHRofXB4YCl9O1xuICB3aWR0aDogJHtwcm9wcyA9PiAocHJvcHMud2lkdGggPT09ICdhdXRvJyA/ICdhdXRvJyA6IGAke3Byb3BzLndpZHRofXB4YCl9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAganVzdGlmeS1jb250ZW50OiAke3Byb3BzID0+IHByb3BzLmFsaWdubWVudH07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBDb2x1bW47XG4iXX0=