"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _column = _interopRequireDefault(require("./column.component"));

var _theme = _interopRequireDefault(require("./theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  border-right: 1px solid ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  height: ", "px;\n  font-weight: 600;\n  border-top: 1px solid ", ";\n  border-left: 1px solid ", ";\n  border-right: 1px solid ", ";\n  background: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Header = _styledComponents.default.header(_templateObject(), function (props) {
  return props.height;
}, _theme.default.colors.grey7, _theme.default.colors.grey7, _theme.default.colors.grey7, _theme.default.colors.grey4);

var HeaderColumn = (0, _styledComponents.default)(_column.default)(_templateObject2(), _theme.default.colors.grey7);

var ColumnHeader =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ColumnHeader, _React$PureComponent);

  function ColumnHeader() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = ColumnHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        showIndex = _this$props.showIndex,
        columns = _this$props.columns,
        height = _this$props.height;
    return _react.default.createElement(Header, {
      id: id,
      height: height
    }, showIndex && _react.default.createElement(HeaderColumn, {
      width: 30
    }, "#"), columns && columns.map(ColumnHeader.renderColumn));
  };

  return ColumnHeader;
}(_react.default.PureComponent);

exports.default = ColumnHeader;

_defineProperty(ColumnHeader, "renderColumn", function (column) {
  return _react.default.createElement(HeaderColumn, {
    key: column.valueKey,
    width: column.width || 200,
    alignment: column.alignment || 'flex-start'
  }, _react.default.createElement("span", null, column.title));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2x1bW4taGVhZGVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiSGVhZGVyIiwic3R5bGVkIiwiaGVhZGVyIiwicHJvcHMiLCJoZWlnaHQiLCJ0aGVtZSIsImNvbG9ycyIsImdyZXk3IiwiZ3JleTQiLCJIZWFkZXJDb2x1bW4iLCJDb2x1bW4iLCJDb2x1bW5IZWFkZXIiLCJyZW5kZXIiLCJpZCIsInNob3dJbmRleCIsImNvbHVtbnMiLCJtYXAiLCJyZW5kZXJDb2x1bW4iLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJjb2x1bW4iLCJ2YWx1ZUtleSIsIndpZHRoIiwiYWxpZ25tZW50IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsMEJBQU9DLE1BQVYsb0JBRUEsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsTUFBVjtBQUFBLENBRkwsRUFJY0MsZUFBTUMsTUFBTixDQUFhQyxLQUozQixFQUtlRixlQUFNQyxNQUFOLENBQWFDLEtBTDVCLEVBTWdCRixlQUFNQyxNQUFOLENBQWFDLEtBTjdCLEVBT0lGLGVBQU1DLE1BQU4sQ0FBYUUsS0FQakIsQ0FBWjs7QUFVQSxJQUFNQyxZQUFZLEdBQUcsK0JBQU9DLGVBQVAsQ0FBSCxxQkFDVUwsZUFBTUMsTUFBTixDQUFhQyxLQUR2QixDQUFsQjs7SUFJcUJJLFk7Ozs7Ozs7Ozs7O1NBa0JuQkMsTSxHQUFBLGtCQUFTO0FBQUEsc0JBTUgsS0FBS1QsS0FORjtBQUFBLFFBRUxVLEVBRkssZUFFTEEsRUFGSztBQUFBLFFBR0xDLFNBSEssZUFHTEEsU0FISztBQUFBLFFBSUxDLE9BSkssZUFJTEEsT0FKSztBQUFBLFFBS0xYLE1BTEssZUFLTEEsTUFMSztBQU9QLFdBQ0UsNkJBQUMsTUFBRDtBQUNFLE1BQUEsRUFBRSxFQUFFUyxFQUROO0FBRUUsTUFBQSxNQUFNLEVBQUVUO0FBRlYsT0FJR1UsU0FBUyxJQUFJLDZCQUFDLFlBQUQ7QUFBYyxNQUFBLEtBQUssRUFBRTtBQUFyQixXQUpoQixFQUtHQyxPQUFPLElBQUlBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxZQUFZLENBQUNNLFlBQXpCLENBTGQsQ0FERjtBQVNELEc7OztFQWxDdUNDLGVBQU1DLGE7Ozs7Z0JBQTNCUixZLGtCQVFHLFVBQUFTLE1BQU07QUFBQSxTQUMxQiw2QkFBQyxZQUFEO0FBQ0UsSUFBQSxHQUFHLEVBQUVBLE1BQU0sQ0FBQ0MsUUFEZDtBQUVFLElBQUEsS0FBSyxFQUFFRCxNQUFNLENBQUNFLEtBQVAsSUFBZ0IsR0FGekI7QUFHRSxJQUFBLFNBQVMsRUFBRUYsTUFBTSxDQUFDRyxTQUFQLElBQW9CO0FBSGpDLEtBS0UsMkNBQU9ILE1BQU0sQ0FBQ0ksS0FBZCxDQUxGLENBRDBCO0FBQUEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4vY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi90aGVtZSc7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ncmV5N307XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuZ3JleTd9O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ncmV5N307XG4gIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmdyZXk0fTtcbmA7XG5cbmNvbnN0IEhlYWRlckNvbHVtbiA9IHN0eWxlZChDb2x1bW4pYFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ncmV5N307XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2x1bW5IZWFkZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHNob3dJbmRleDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB9XG5cbiAgc3RhdGljIHJlbmRlckNvbHVtbiA9IGNvbHVtbiA9PiAoXG4gICAgPEhlYWRlckNvbHVtblxuICAgICAga2V5PXtjb2x1bW4udmFsdWVLZXl9XG4gICAgICB3aWR0aD17Y29sdW1uLndpZHRoIHx8IDIwMH1cbiAgICAgIGFsaWdubWVudD17Y29sdW1uLmFsaWdubWVudCB8fCAnZmxleC1zdGFydCd9XG4gICAgPlxuICAgICAgPHNwYW4+e2NvbHVtbi50aXRsZX08L3NwYW4+XG4gICAgPC9IZWFkZXJDb2x1bW4+XG4gIClcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBzaG93SW5kZXgsXG4gICAgICBjb2x1bW5zLFxuICAgICAgaGVpZ2h0LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGVyXG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICA+XG4gICAgICAgIHtzaG93SW5kZXggJiYgPEhlYWRlckNvbHVtbiB3aWR0aD17MzB9PiM8L0hlYWRlckNvbHVtbj59XG4gICAgICAgIHtjb2x1bW5zICYmIGNvbHVtbnMubWFwKENvbHVtbkhlYWRlci5yZW5kZXJDb2x1bW4pfVxuICAgICAgPC9IZWFkZXI+XG4gICAgKTtcbiAgfVxufVxuIl19