"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactCheckbox = _interopRequireDefault(require("@opuscapita/react-checkbox"));

var _column = _interopRequireDefault(require("./column.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  border-right: ", ";\n"]);

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

var Header = _styledComponents["default"].header(_templateObject(), function (props) {
  return props.height;
}, function (props) {
  return props.theme.colors.grey7;
}, function (props) {
  return props.theme.colors.grey7;
}, function (props) {
  return props.theme.colors.grey7;
}, function (props) {
  return props.theme.colors.grey4;
});

var HeaderColumn = (0, _styledComponents["default"])(_column["default"])(_templateObject2(), function (props) {
  return props.isLastColumn ? 'none' : "1px solid " + props.theme.colors.grey7;
});

var ColumnHeader =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ColumnHeader, _React$PureComponent);

  function ColumnHeader() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "renderSelectAllColumn", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          isAllSelected = _this$props.isAllSelected,
          isSelectAllVisible = _this$props.isSelectAllVisible,
          onSelectAllChange = _this$props.onSelectAllChange;
      return _react["default"].createElement(HeaderColumn, {
        width: 35
      }, isSelectAllVisible && _react["default"].createElement(_reactCheckbox["default"], {
        id: id + "-selectall",
        checked: isAllSelected,
        onChange: onSelectAllChange
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderColumn", function (column, idx) {
      var columns = _this.props.columns;
      return _react["default"].createElement(HeaderColumn, {
        key: column.valueKey || idx,
        width: column.width || 200,
        alignment: column.alignment || 'flex-start',
        isLastColumn: columns.length - 1 === idx
      }, _react["default"].createElement("span", null, column.title || ''));
    });

    return _this;
  }

  var _proto = ColumnHeader.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        id = _this$props2.id,
        isIndexColumnVisible = _this$props2.isIndexColumnVisible,
        isSelectColumnVisible = _this$props2.isSelectColumnVisible,
        columns = _this$props2.columns,
        height = _this$props2.height;
    return _react["default"].createElement(Header, {
      id: id,
      height: height
    }, isSelectColumnVisible && this.renderSelectAllColumn(), isIndexColumnVisible && _react["default"].createElement(HeaderColumn, {
      width: 35
    }, "#"), columns && columns.map(this.renderColumn));
  };

  return ColumnHeader;
}(_react["default"].PureComponent);

exports["default"] = ColumnHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2x1bW4taGVhZGVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiSGVhZGVyIiwic3R5bGVkIiwiaGVhZGVyIiwicHJvcHMiLCJoZWlnaHQiLCJ0aGVtZSIsImNvbG9ycyIsImdyZXk3IiwiZ3JleTQiLCJIZWFkZXJDb2x1bW4iLCJDb2x1bW4iLCJpc0xhc3RDb2x1bW4iLCJDb2x1bW5IZWFkZXIiLCJpZCIsImlzQWxsU2VsZWN0ZWQiLCJpc1NlbGVjdEFsbFZpc2libGUiLCJvblNlbGVjdEFsbENoYW5nZSIsImNvbHVtbiIsImlkeCIsImNvbHVtbnMiLCJ2YWx1ZUtleSIsIndpZHRoIiwiYWxpZ25tZW50IiwibGVuZ3RoIiwidGl0bGUiLCJyZW5kZXIiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImlzU2VsZWN0Q29sdW1uVmlzaWJsZSIsInJlbmRlclNlbGVjdEFsbENvbHVtbiIsIm1hcCIsInJlbmRlckNvbHVtbiIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFNQSxNQUFNLEdBQUdDLDZCQUFPQyxNQUFWLG9CQUVBLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE1BQVY7QUFBQSxDQUZMLEVBSWMsVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxLQUF2QjtBQUFBLENBSm5CLEVBS2UsVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxLQUF2QjtBQUFBLENBTHBCLEVBTWdCLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsS0FBdkI7QUFBQSxDQU5yQixFQU9JLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkUsS0FBdkI7QUFBQSxDQVBULENBQVo7O0FBVUEsSUFBTUMsWUFBWSxHQUFHLGtDQUFPQyxrQkFBUCxDQUFILHFCQUNBLFVBQUFQLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNRLFlBQU4sR0FBcUIsTUFBckIsa0JBQTJDUixLQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsS0FBbkU7QUFBQSxDQURMLENBQWxCOztJQUlxQkssWTs7Ozs7Ozs7Ozs7Ozs7NEVBWUssWUFBTTtBQUFBLHdCQU14QixNQUFLVCxLQU5tQjtBQUFBLFVBRTFCVSxFQUYwQixlQUUxQkEsRUFGMEI7QUFBQSxVQUcxQkMsYUFIMEIsZUFHMUJBLGFBSDBCO0FBQUEsVUFJMUJDLGtCQUowQixlQUkxQkEsa0JBSjBCO0FBQUEsVUFLMUJDLGlCQUwwQixlQUsxQkEsaUJBTDBCO0FBTzVCLGFBQ0UsZ0NBQUMsWUFBRDtBQUFjLFFBQUEsS0FBSyxFQUFFO0FBQXJCLFNBQ0dELGtCQUFrQixJQUNqQixnQ0FBQyx5QkFBRDtBQUNFLFFBQUEsRUFBRSxFQUFLRixFQUFMLGVBREo7QUFFRSxRQUFBLE9BQU8sRUFBRUMsYUFGWDtBQUdFLFFBQUEsUUFBUSxFQUFFRTtBQUhaLFFBRkosQ0FERjtBQVdELEs7O21FQUVjLFVBQUNDLE1BQUQsRUFBU0MsR0FBVCxFQUFpQjtBQUFBLFVBQ3RCQyxPQURzQixHQUNWLE1BQUtoQixLQURLLENBQ3RCZ0IsT0FEc0I7QUFHOUIsYUFDRSxnQ0FBQyxZQUFEO0FBQ0UsUUFBQSxHQUFHLEVBQUVGLE1BQU0sQ0FBQ0csUUFBUCxJQUFtQkYsR0FEMUI7QUFFRSxRQUFBLEtBQUssRUFBRUQsTUFBTSxDQUFDSSxLQUFQLElBQWdCLEdBRnpCO0FBR0UsUUFBQSxTQUFTLEVBQUVKLE1BQU0sQ0FBQ0ssU0FBUCxJQUFvQixZQUhqQztBQUlFLFFBQUEsWUFBWSxFQUFFSCxPQUFPLENBQUNJLE1BQVIsR0FBaUIsQ0FBakIsS0FBdUJMO0FBSnZDLFNBTUUsOENBQU9ELE1BQU0sQ0FBQ08sS0FBUCxJQUFnQixFQUF2QixDQU5GLENBREY7QUFVRCxLOzs7Ozs7O1NBRURDLE0sR0FBQSxrQkFBUztBQUFBLHVCQU9ILEtBQUt0QixLQVBGO0FBQUEsUUFFTFUsRUFGSyxnQkFFTEEsRUFGSztBQUFBLFFBR0xhLG9CQUhLLGdCQUdMQSxvQkFISztBQUFBLFFBSUxDLHFCQUpLLGdCQUlMQSxxQkFKSztBQUFBLFFBS0xSLE9BTEssZ0JBS0xBLE9BTEs7QUFBQSxRQU1MZixNQU5LLGdCQU1MQSxNQU5LO0FBUVAsV0FDRSxnQ0FBQyxNQUFEO0FBQ0UsTUFBQSxFQUFFLEVBQUVTLEVBRE47QUFFRSxNQUFBLE1BQU0sRUFBRVQ7QUFGVixPQUlHdUIscUJBQXFCLElBQUksS0FBS0MscUJBQUwsRUFKNUIsRUFLR0Ysb0JBQW9CLElBQUksZ0NBQUMsWUFBRDtBQUFjLE1BQUEsS0FBSyxFQUFFO0FBQXJCLFdBTDNCLEVBTUdQLE9BQU8sSUFBSUEsT0FBTyxDQUFDVSxHQUFSLENBQVksS0FBS0MsWUFBakIsQ0FOZCxDQURGO0FBVUQsRzs7O0VBakV1Q0Msa0JBQU1DLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWNoZWNrYm94JztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9jb2x1bW4uY29tcG9uZW50JztcblxuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTd9O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk3fTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTd9O1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NH07XG5gO1xuXG5jb25zdCBIZWFkZXJDb2x1bW4gPSBzdHlsZWQoQ29sdW1uKWBcbiAgYm9yZGVyLXJpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5pc0xhc3RDb2x1bW4gPyAnbm9uZScgOiBgMXB4IHNvbGlkICR7cHJvcHMudGhlbWUuY29sb3JzLmdyZXk3fWApfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbHVtbkhlYWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzU2VsZWN0QWxsVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc0luZGV4Q29sdW1uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGlzQWxsU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgb25TZWxlY3RBbGxDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH1cblxuICByZW5kZXJTZWxlY3RBbGxDb2x1bW4gPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpc0FsbFNlbGVjdGVkLFxuICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlLFxuICAgICAgb25TZWxlY3RBbGxDaGFuZ2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkZXJDb2x1bW4gd2lkdGg9ezM1fT5cbiAgICAgICAge2lzU2VsZWN0QWxsVmlzaWJsZSAmJiAoXG4gICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICBpZD17YCR7aWR9LXNlbGVjdGFsbGB9XG4gICAgICAgICAgICBjaGVja2VkPXtpc0FsbFNlbGVjdGVkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0QWxsQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0hlYWRlckNvbHVtbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyQ29sdW1uID0gKGNvbHVtbiwgaWR4KSA9PiB7XG4gICAgY29uc3QgeyBjb2x1bW5zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkZXJDb2x1bW5cbiAgICAgICAga2V5PXtjb2x1bW4udmFsdWVLZXkgfHwgaWR4fVxuICAgICAgICB3aWR0aD17Y29sdW1uLndpZHRoIHx8IDIwMH1cbiAgICAgICAgYWxpZ25tZW50PXtjb2x1bW4uYWxpZ25tZW50IHx8ICdmbGV4LXN0YXJ0J31cbiAgICAgICAgaXNMYXN0Q29sdW1uPXtjb2x1bW5zLmxlbmd0aCAtIDEgPT09IGlkeH1cbiAgICAgID5cbiAgICAgICAgPHNwYW4+e2NvbHVtbi50aXRsZSB8fCAnJ308L3NwYW4+XG4gICAgICA8L0hlYWRlckNvbHVtbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXNJbmRleENvbHVtblZpc2libGUsXG4gICAgICBpc1NlbGVjdENvbHVtblZpc2libGUsXG4gICAgICBjb2x1bW5zLFxuICAgICAgaGVpZ2h0LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGVyXG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICA+XG4gICAgICAgIHtpc1NlbGVjdENvbHVtblZpc2libGUgJiYgdGhpcy5yZW5kZXJTZWxlY3RBbGxDb2x1bW4oKX1cbiAgICAgICAge2lzSW5kZXhDb2x1bW5WaXNpYmxlICYmIDxIZWFkZXJDb2x1bW4gd2lkdGg9ezM1fT4jPC9IZWFkZXJDb2x1bW4+fVxuICAgICAgICB7Y29sdW1ucyAmJiBjb2x1bW5zLm1hcCh0aGlzLnJlbmRlckNvbHVtbil9XG4gICAgICA8L0hlYWRlcj5cbiAgICApO1xuICB9XG59XG4iXX0=