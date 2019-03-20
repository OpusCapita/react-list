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
  var data = _taggedTemplateLiteralLoose(["\n  text-overflow: ellipsis;\n  white-space: ", ";\n  overflow: hidden;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  height: ", "px;\n  border-bottom: ", ";\n  /* cursor: pointer; */\n  align-items: center;\n  background: ", ";\n  &:hover {\n    background: ", ";\n  }\n  user-select: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Row = _styledComponents.default.div(_templateObject(), function (props) {
  return props.height;
}, function (props) {
  return props.isItemBorderVisible ? "1px solid " + props.theme.colors.grey6 : 'none';
}, function (props) {
  return props.selected ? props.theme.colors.grey5 : props.theme.colors.white;
}, function (props) {
  return props.theme.colors.grey4;
});

var DefaultTextContainer = _styledComponents.default.span(_templateObject2(), function (props) {
  return !props.insideTooltip ? 'nowrap' : 'normal';
});

var List =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(List, _React$PureComponent);

  function List() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "renderSelectColumn", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          isSelected = _this$props.isSelected,
          onSelectChange = _this$props.onSelectChange;
      return _react.default.createElement(_column.default, {
        id: id + "-col-index",
        width: 35,
        alignment: "flex-start"
      }, _react.default.createElement(_reactCheckbox.default, {
        id: id + "-selectitem",
        checked: isSelected,
        onChange: onSelectChange
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderIndexColumn", function () {
      var _this$props2 = _this.props,
          id = _this$props2.id,
          rowIndex = _this$props2.rowIndex;
      return _react.default.createElement(_column.default, {
        id: id + "-col-index",
        width: 35,
        alignment: "flex-start"
      }, rowIndex + 1);
    });

    _defineProperty(_assertThisInitialized(_this), "renderItemColumn", function (column) {
      var _this$props3 = _this.props,
          id = _this$props3.id,
          item = _this$props3.item;
      return _react.default.createElement(_column.default, {
        id: id + "-col-" + column.valueKey,
        key: column.valueKey,
        width: column.width || 200,
        alignment: column.alignment || 'flex-start'
      }, _react.default.createElement(DefaultTextContainer, null, item[column.valueKey]));
    });

    return _this;
  }

  var _proto = List.prototype;

  _proto.render = function render() {
    var _this$props4 = this.props,
        isSelectable = _this$props4.isSelectable,
        isIndexColumnVisible = _this$props4.isIndexColumnVisible,
        isItemBorderVisible = _this$props4.isItemBorderVisible,
        columns = _this$props4.columns,
        itemHeight = _this$props4.itemHeight;
    return _react.default.createElement(Row, {
      height: itemHeight,
      isItemBorderVisible: isItemBorderVisible
    }, isSelectable && this.renderSelectColumn(), isIndexColumnVisible && this.renderIndexColumn(), columns.map(this.renderItemColumn));
  };

  return List;
}(_react.default.PureComponent);

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSb3ciLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImhlaWdodCIsImlzSXRlbUJvcmRlclZpc2libGUiLCJ0aGVtZSIsImNvbG9ycyIsImdyZXk2Iiwic2VsZWN0ZWQiLCJncmV5NSIsIndoaXRlIiwiZ3JleTQiLCJEZWZhdWx0VGV4dENvbnRhaW5lciIsInNwYW4iLCJpbnNpZGVUb29sdGlwIiwiTGlzdCIsImlkIiwiaXNTZWxlY3RlZCIsIm9uU2VsZWN0Q2hhbmdlIiwicm93SW5kZXgiLCJjb2x1bW4iLCJpdGVtIiwidmFsdWVLZXkiLCJ3aWR0aCIsImFsaWdubWVudCIsInJlbmRlciIsImlzU2VsZWN0YWJsZSIsImlzSW5kZXhDb2x1bW5WaXNpYmxlIiwiY29sdW1ucyIsIml0ZW1IZWlnaHQiLCJyZW5kZXJTZWxlY3RDb2x1bW4iLCJyZW5kZXJJbmRleENvbHVtbiIsIm1hcCIsInJlbmRlckl0ZW1Db2x1bW4iLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHQywwQkFBT0MsR0FBVixvQkFFRyxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxNQUFWO0FBQUEsQ0FGUixFQUdVLFVBQUFELEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNFLG1CQUFOLGtCQUF5Q0YsS0FBSyxDQUFDRyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLEtBQTVELEdBQXNFLE1BQTNFO0FBQUEsQ0FIZixFQU1PLFVBQUFMLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNNLFFBQU4sR0FBaUJOLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxNQUFaLENBQW1CRyxLQUFwQyxHQUE0Q1AsS0FBSyxDQUFDRyxLQUFOLENBQVlDLE1BQVosQ0FBbUJJLEtBQXBFO0FBQUEsQ0FOWixFQVFTLFVBQUFSLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNHLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkssS0FBdkI7QUFBQSxDQVJkLENBQVQ7O0FBYUEsSUFBTUMsb0JBQW9CLEdBQUdaLDBCQUFPYSxJQUFWLHFCQUVULFVBQUFYLEtBQUs7QUFBQSxTQUFLLENBQUNBLEtBQUssQ0FBQ1ksYUFBUCxHQUF1QixRQUF2QixHQUFrQyxRQUF2QztBQUFBLENBRkksQ0FBMUI7O0lBTXFCQyxJOzs7Ozs7Ozs7Ozs7Ozt5RUFjRSxZQUFNO0FBQUEsd0JBS3JCLE1BQUtiLEtBTGdCO0FBQUEsVUFFdkJjLEVBRnVCLGVBRXZCQSxFQUZ1QjtBQUFBLFVBR3ZCQyxVQUh1QixlQUd2QkEsVUFIdUI7QUFBQSxVQUl2QkMsY0FKdUIsZUFJdkJBLGNBSnVCO0FBTXpCLGFBQ0UsNkJBQUMsZUFBRDtBQUNFLFFBQUEsRUFBRSxFQUFLRixFQUFMLGVBREo7QUFFRSxRQUFBLEtBQUssRUFBRSxFQUZUO0FBR0UsUUFBQSxTQUFTLEVBQUM7QUFIWixTQUtFLDZCQUFDLHNCQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUtBLEVBQUwsZ0JBREo7QUFFRSxRQUFBLE9BQU8sRUFBRUMsVUFGWDtBQUdFLFFBQUEsUUFBUSxFQUFFQztBQUhaLFFBTEYsQ0FERjtBQWFELEs7O3dFQUVtQixZQUFNO0FBQUEseUJBSXBCLE1BQUtoQixLQUplO0FBQUEsVUFFdEJjLEVBRnNCLGdCQUV0QkEsRUFGc0I7QUFBQSxVQUd0QkcsUUFIc0IsZ0JBR3RCQSxRQUhzQjtBQUt4QixhQUNFLDZCQUFDLGVBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBS0gsRUFBTCxlQURKO0FBRUUsUUFBQSxLQUFLLEVBQUUsRUFGVDtBQUdFLFFBQUEsU0FBUyxFQUFDO0FBSFosU0FLR0csUUFBUSxHQUFHLENBTGQsQ0FERjtBQVNELEs7O3VFQUVrQixVQUFDQyxNQUFELEVBQVk7QUFBQSx5QkFJekIsTUFBS2xCLEtBSm9CO0FBQUEsVUFFM0JjLEVBRjJCLGdCQUUzQkEsRUFGMkI7QUFBQSxVQUczQkssSUFIMkIsZ0JBRzNCQSxJQUgyQjtBQUs3QixhQUNFLDZCQUFDLGVBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBS0wsRUFBTCxhQUFlSSxNQUFNLENBQUNFLFFBRDFCO0FBRUUsUUFBQSxHQUFHLEVBQUVGLE1BQU0sQ0FBQ0UsUUFGZDtBQUdFLFFBQUEsS0FBSyxFQUFFRixNQUFNLENBQUNHLEtBQVAsSUFBZ0IsR0FIekI7QUFJRSxRQUFBLFNBQVMsRUFBRUgsTUFBTSxDQUFDSSxTQUFQLElBQW9CO0FBSmpDLFNBTUUsNkJBQUMsb0JBQUQsUUFDR0gsSUFBSSxDQUFDRCxNQUFNLENBQUNFLFFBQVIsQ0FEUCxDQU5GLENBREY7QUFZRCxLOzs7Ozs7O1NBRURHLE0sR0FBQSxrQkFBUztBQUFBLHVCQU9ILEtBQUt2QixLQVBGO0FBQUEsUUFFTHdCLFlBRkssZ0JBRUxBLFlBRks7QUFBQSxRQUdMQyxvQkFISyxnQkFHTEEsb0JBSEs7QUFBQSxRQUlMdkIsbUJBSkssZ0JBSUxBLG1CQUpLO0FBQUEsUUFLTHdCLE9BTEssZ0JBS0xBLE9BTEs7QUFBQSxRQU1MQyxVQU5LLGdCQU1MQSxVQU5LO0FBUVAsV0FDRSw2QkFBQyxHQUFEO0FBQUssTUFBQSxNQUFNLEVBQUVBLFVBQWI7QUFBeUIsTUFBQSxtQkFBbUIsRUFBRXpCO0FBQTlDLE9BQ0dzQixZQUFZLElBQUksS0FBS0ksa0JBQUwsRUFEbkIsRUFFR0gsb0JBQW9CLElBQUksS0FBS0ksaUJBQUwsRUFGM0IsRUFHR0gsT0FBTyxDQUFDSSxHQUFSLENBQVksS0FBS0MsZ0JBQWpCLENBSEgsQ0FERjtBQU9ELEc7OztFQXJGK0JDLGVBQU1DLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWNoZWNrYm94JztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9jb2x1bW4uY29tcG9uZW50JztcblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodH1weDtcbiAgYm9yZGVyLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMuaXNJdGVtQm9yZGVyVmlzaWJsZSA/IGAxcHggc29saWQgJHtwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTZ9YCA6ICdub25lJyl9O1xuICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gKHByb3BzLnNlbGVjdGVkID8gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk1IDogcHJvcHMudGhlbWUuY29sb3JzLndoaXRlKX07XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk0fTtcbiAgfVxuICB1c2VyLXNlbGVjdDogbm9uZTtcbmA7XG5cbmNvbnN0IERlZmF1bHRUZXh0Q29udGFpbmVyID0gc3R5bGVkLnNwYW5gXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogJHtwcm9wcyA9PiAoIXByb3BzLmluc2lkZVRvb2x0aXAgPyAnbm93cmFwJyA6ICdub3JtYWwnKX07XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpdGVtOiBQcm9wVHlwZXMuc2hhcGUoe30pLmlzUmVxdWlyZWQsXG4gICAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaXNJbmRleENvbHVtblZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNJdGVtQm9yZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuICAgIGlzU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNTZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIG9uU2VsZWN0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9XG5cbiAgcmVuZGVyU2VsZWN0Q29sdW1uID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXNTZWxlY3RlZCxcbiAgICAgIG9uU2VsZWN0Q2hhbmdlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGlkPXtgJHtpZH0tY29sLWluZGV4YH1cbiAgICAgICAgd2lkdGg9ezM1fVxuICAgICAgICBhbGlnbm1lbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgID5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgaWQ9e2Ake2lkfS1zZWxlY3RpdGVtYH1cbiAgICAgICAgICBjaGVja2VkPXtpc1NlbGVjdGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdENoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJJbmRleENvbHVtbiA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHJvd0luZGV4LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGlkPXtgJHtpZH0tY29sLWluZGV4YH1cbiAgICAgICAgd2lkdGg9ezM1fVxuICAgICAgICBhbGlnbm1lbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgID5cbiAgICAgICAge3Jvd0luZGV4ICsgMX1cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJJdGVtQ29sdW1uID0gKGNvbHVtbikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXRlbSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbHVtblxuICAgICAgICBpZD17YCR7aWR9LWNvbC0ke2NvbHVtbi52YWx1ZUtleX1gfVxuICAgICAgICBrZXk9e2NvbHVtbi52YWx1ZUtleX1cbiAgICAgICAgd2lkdGg9e2NvbHVtbi53aWR0aCB8fCAyMDB9XG4gICAgICAgIGFsaWdubWVudD17Y29sdW1uLmFsaWdubWVudCB8fCAnZmxleC1zdGFydCd9XG4gICAgICA+XG4gICAgICAgIDxEZWZhdWx0VGV4dENvbnRhaW5lcj5cbiAgICAgICAgICB7aXRlbVtjb2x1bW4udmFsdWVLZXldfVxuICAgICAgICA8L0RlZmF1bHRUZXh0Q29udGFpbmVyPlxuICAgICAgPC9Db2x1bW4+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc1NlbGVjdGFibGUsXG4gICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZSxcbiAgICAgIGlzSXRlbUJvcmRlclZpc2libGUsXG4gICAgICBjb2x1bW5zLFxuICAgICAgaXRlbUhlaWdodCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdyBoZWlnaHQ9e2l0ZW1IZWlnaHR9IGlzSXRlbUJvcmRlclZpc2libGU9e2lzSXRlbUJvcmRlclZpc2libGV9PlxuICAgICAgICB7aXNTZWxlY3RhYmxlICYmIHRoaXMucmVuZGVyU2VsZWN0Q29sdW1uKCl9XG4gICAgICAgIHtpc0luZGV4Q29sdW1uVmlzaWJsZSAmJiB0aGlzLnJlbmRlckluZGV4Q29sdW1uKCl9XG4gICAgICAgIHtjb2x1bW5zLm1hcCh0aGlzLnJlbmRlckl0ZW1Db2x1bW4pfVxuICAgICAgPC9Sb3c+XG4gICAgKTtcbiAgfVxufVxuIl19