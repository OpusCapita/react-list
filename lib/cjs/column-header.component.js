"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactCheckbox = _interopRequireDefault(require("@opuscapita/react-checkbox"));

var _column = _interopRequireDefault(require("./column.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
}, function (props) {
  return props.theme.colors.grey7;
}, function (props) {
  return props.theme.colors.grey7;
}, function (props) {
  return props.theme.colors.grey7;
}, function (props) {
  return props.theme.colors.grey4;
});

var HeaderColumn = (0, _styledComponents.default)(_column.default)(_templateObject2(), function (props) {
  return props.theme.colors.grey7;
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
      return _react.default.createElement(HeaderColumn, {
        width: 35
      }, isSelectAllVisible && _react.default.createElement(_reactCheckbox.default, {
        id: id + "-selectall",
        checked: isAllSelected,
        onChange: onSelectAllChange
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderColumn", function (column) {
      return _react.default.createElement(HeaderColumn, {
        key: column.valueKey,
        width: column.width || 200,
        alignment: column.alignment || 'flex-start'
      }, _react.default.createElement("span", null, column.title));
    });

    return _this;
  }

  var _proto = ColumnHeader.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        id = _this$props2.id,
        isIndexColumnVisible = _this$props2.isIndexColumnVisible,
        isSelectable = _this$props2.isSelectable,
        columns = _this$props2.columns,
        height = _this$props2.height;
    return _react.default.createElement(Header, {
      id: id,
      height: height
    }, isSelectable && this.renderSelectAllColumn(), isIndexColumnVisible && _react.default.createElement(HeaderColumn, {
      width: 35
    }, "#"), columns && columns.map(this.renderColumn));
  };

  return ColumnHeader;
}(_react.default.PureComponent);

exports.default = ColumnHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2x1bW4taGVhZGVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiSGVhZGVyIiwic3R5bGVkIiwiaGVhZGVyIiwicHJvcHMiLCJoZWlnaHQiLCJ0aGVtZSIsImNvbG9ycyIsImdyZXk3IiwiZ3JleTQiLCJIZWFkZXJDb2x1bW4iLCJDb2x1bW4iLCJDb2x1bW5IZWFkZXIiLCJpZCIsImlzQWxsU2VsZWN0ZWQiLCJpc1NlbGVjdEFsbFZpc2libGUiLCJvblNlbGVjdEFsbENoYW5nZSIsImNvbHVtbiIsInZhbHVlS2V5Iiwid2lkdGgiLCJhbGlnbm1lbnQiLCJ0aXRsZSIsInJlbmRlciIsImlzSW5kZXhDb2x1bW5WaXNpYmxlIiwiaXNTZWxlY3RhYmxlIiwiY29sdW1ucyIsInJlbmRlclNlbGVjdEFsbENvbHVtbiIsIm1hcCIsInJlbmRlckNvbHVtbiIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLDBCQUFPQyxNQUFWLG9CQUVBLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE1BQVY7QUFBQSxDQUZMLEVBSWMsVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxLQUF2QjtBQUFBLENBSm5CLEVBS2UsVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxLQUF2QjtBQUFBLENBTHBCLEVBTWdCLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsS0FBdkI7QUFBQSxDQU5yQixFQU9JLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkUsS0FBdkI7QUFBQSxDQVBULENBQVo7O0FBVUEsSUFBTUMsWUFBWSxHQUFHLCtCQUFPQyxlQUFQLENBQUgscUJBQ1UsVUFBQVAsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxLQUF2QjtBQUFBLENBRGYsQ0FBbEI7O0lBSXFCSSxZOzs7Ozs7Ozs7Ozs7Ozs0RUFZSyxZQUFNO0FBQUEsd0JBTXhCLE1BQUtSLEtBTm1CO0FBQUEsVUFFMUJTLEVBRjBCLGVBRTFCQSxFQUYwQjtBQUFBLFVBRzFCQyxhQUgwQixlQUcxQkEsYUFIMEI7QUFBQSxVQUkxQkMsa0JBSjBCLGVBSTFCQSxrQkFKMEI7QUFBQSxVQUsxQkMsaUJBTDBCLGVBSzFCQSxpQkFMMEI7QUFPNUIsYUFDRSw2QkFBQyxZQUFEO0FBQWMsUUFBQSxLQUFLLEVBQUU7QUFBckIsU0FDR0Qsa0JBQWtCLElBQ2pCLDZCQUFDLHNCQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUtGLEVBQUwsZUFESjtBQUVFLFFBQUEsT0FBTyxFQUFFQyxhQUZYO0FBR0UsUUFBQSxRQUFRLEVBQUVFO0FBSFosUUFGSixDQURGO0FBV0QsSzs7bUVBRWMsVUFBQUMsTUFBTTtBQUFBLGFBQ25CLDZCQUFDLFlBQUQ7QUFDRSxRQUFBLEdBQUcsRUFBRUEsTUFBTSxDQUFDQyxRQURkO0FBRUUsUUFBQSxLQUFLLEVBQUVELE1BQU0sQ0FBQ0UsS0FBUCxJQUFnQixHQUZ6QjtBQUdFLFFBQUEsU0FBUyxFQUFFRixNQUFNLENBQUNHLFNBQVAsSUFBb0I7QUFIakMsU0FLRSwyQ0FBT0gsTUFBTSxDQUFDSSxLQUFkLENBTEYsQ0FEbUI7QUFBQSxLOzs7Ozs7O1NBVXJCQyxNLEdBQUEsa0JBQVM7QUFBQSx1QkFPSCxLQUFLbEIsS0FQRjtBQUFBLFFBRUxTLEVBRkssZ0JBRUxBLEVBRks7QUFBQSxRQUdMVSxvQkFISyxnQkFHTEEsb0JBSEs7QUFBQSxRQUlMQyxZQUpLLGdCQUlMQSxZQUpLO0FBQUEsUUFLTEMsT0FMSyxnQkFLTEEsT0FMSztBQUFBLFFBTUxwQixNQU5LLGdCQU1MQSxNQU5LO0FBUVAsV0FDRSw2QkFBQyxNQUFEO0FBQ0UsTUFBQSxFQUFFLEVBQUVRLEVBRE47QUFFRSxNQUFBLE1BQU0sRUFBRVI7QUFGVixPQUlHbUIsWUFBWSxJQUFJLEtBQUtFLHFCQUFMLEVBSm5CLEVBS0dILG9CQUFvQixJQUFJLDZCQUFDLFlBQUQ7QUFBYyxNQUFBLEtBQUssRUFBRTtBQUFyQixXQUwzQixFQU1HRSxPQUFPLElBQUlBLE9BQU8sQ0FBQ0UsR0FBUixDQUFZLEtBQUtDLFlBQWpCLENBTmQsQ0FERjtBQVVELEc7OztFQTVEdUNDLGVBQU1DLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWNoZWNrYm94JztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9jb2x1bW4uY29tcG9uZW50JztcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodH1weDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk3fTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5N307XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk3fTtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTR9O1xuYDtcblxuY29uc3QgSGVhZGVyQ29sdW1uID0gc3R5bGVkKENvbHVtbilgXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk3fTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbHVtbkhlYWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaXNTZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzU2VsZWN0QWxsVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc0luZGV4Q29sdW1uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGlzQWxsU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgb25TZWxlY3RBbGxDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH1cblxuICByZW5kZXJTZWxlY3RBbGxDb2x1bW4gPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpc0FsbFNlbGVjdGVkLFxuICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlLFxuICAgICAgb25TZWxlY3RBbGxDaGFuZ2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkZXJDb2x1bW4gd2lkdGg9ezM1fT5cbiAgICAgICAge2lzU2VsZWN0QWxsVmlzaWJsZSAmJiAoXG4gICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICBpZD17YCR7aWR9LXNlbGVjdGFsbGB9XG4gICAgICAgICAgICBjaGVja2VkPXtpc0FsbFNlbGVjdGVkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0QWxsQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0hlYWRlckNvbHVtbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyQ29sdW1uID0gY29sdW1uID0+IChcbiAgICA8SGVhZGVyQ29sdW1uXG4gICAgICBrZXk9e2NvbHVtbi52YWx1ZUtleX1cbiAgICAgIHdpZHRoPXtjb2x1bW4ud2lkdGggfHwgMjAwfVxuICAgICAgYWxpZ25tZW50PXtjb2x1bW4uYWxpZ25tZW50IHx8ICdmbGV4LXN0YXJ0J31cbiAgICA+XG4gICAgICA8c3Bhbj57Y29sdW1uLnRpdGxlfTwvc3Bhbj5cbiAgICA8L0hlYWRlckNvbHVtbj5cbiAgKVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNTZWxlY3RhYmxlLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGhlaWdodCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEhlYWRlclxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgPlxuICAgICAgICB7aXNTZWxlY3RhYmxlICYmIHRoaXMucmVuZGVyU2VsZWN0QWxsQ29sdW1uKCl9XG4gICAgICAgIHtpc0luZGV4Q29sdW1uVmlzaWJsZSAmJiA8SGVhZGVyQ29sdW1uIHdpZHRoPXszNX0+IzwvSGVhZGVyQ29sdW1uPn1cbiAgICAgICAge2NvbHVtbnMgJiYgY29sdW1ucy5tYXAodGhpcy5yZW5kZXJDb2x1bW4pfVxuICAgICAgPC9IZWFkZXI+XG4gICAgKTtcbiAgfVxufVxuIl19