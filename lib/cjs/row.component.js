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

var DefaultCellContainer = _styledComponents.default.span(_templateObject2(), function (props) {
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

    _defineProperty(_assertThisInitialized(_this), "renderSelectCell", function () {
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

    _defineProperty(_assertThisInitialized(_this), "renderIndexCell", function () {
      var _this$props2 = _this.props,
          id = _this$props2.id,
          rowIndex = _this$props2.rowIndex;
      return _react.default.createElement(_column.default, {
        id: id + "-col-index",
        width: 35,
        alignment: "flex-start"
      }, rowIndex + 1);
    });

    _defineProperty(_assertThisInitialized(_this), "renderItemCell", function (column, idx) {
      var _this$props3 = _this.props,
          id = _this$props3.id,
          item = _this$props3.item;
      var key = column.valueKey || idx;
      var cell = null;

      if (column.render === 'function') {
        cell = column.render(item, idx);
      } else {
        cell = item[column.valueKey];
      }

      return _react.default.createElement(_column.default, {
        id: id + "-col-" + key,
        key: key,
        width: column.width || 200,
        alignment: column.alignment || 'flex-start'
      }, column.render ? column.render(item) : column.valueKey && _react.default.createElement(DefaultCellContainer, null, cell));
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
    }, isSelectable && this.renderSelectCell(), isIndexColumnVisible && this.renderIndexCell(), columns.map(this.renderItemCell));
  };

  return List;
}(_react.default.PureComponent);

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSb3ciLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImhlaWdodCIsImlzSXRlbUJvcmRlclZpc2libGUiLCJ0aGVtZSIsImNvbG9ycyIsImdyZXk2Iiwic2VsZWN0ZWQiLCJncmV5NSIsIndoaXRlIiwiZ3JleTQiLCJEZWZhdWx0Q2VsbENvbnRhaW5lciIsInNwYW4iLCJpbnNpZGVUb29sdGlwIiwiTGlzdCIsImlkIiwiaXNTZWxlY3RlZCIsIm9uU2VsZWN0Q2hhbmdlIiwicm93SW5kZXgiLCJjb2x1bW4iLCJpZHgiLCJpdGVtIiwia2V5IiwidmFsdWVLZXkiLCJjZWxsIiwicmVuZGVyIiwid2lkdGgiLCJhbGlnbm1lbnQiLCJpc1NlbGVjdGFibGUiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImNvbHVtbnMiLCJpdGVtSGVpZ2h0IiwicmVuZGVyU2VsZWN0Q2VsbCIsInJlbmRlckluZGV4Q2VsbCIsIm1hcCIsInJlbmRlckl0ZW1DZWxsIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEdBQUcsR0FBR0MsMEJBQU9DLEdBQVYsb0JBRUcsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsTUFBVjtBQUFBLENBRlIsRUFHVSxVQUFBRCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDRSxtQkFBTixrQkFBeUNGLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxNQUFaLENBQW1CQyxLQUE1RCxHQUFzRSxNQUEzRTtBQUFBLENBSGYsRUFNTyxVQUFBTCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDTSxRQUFOLEdBQWlCTixLQUFLLENBQUNHLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkcsS0FBcEMsR0FBNENQLEtBQUssQ0FBQ0csS0FBTixDQUFZ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LE1BQUEsbUJBQW1CLEVBQUU1QjtBQUE5QyxPQUNHeUIsWUFBWSxJQUFJLEtBQUtJLGdCQUFMLEVBRG5CLEVBRUdILG9CQUFvQixJQUFJLEtBQUtJLGVBQUwsRUFGM0IsRUFHR0gsT0FBTyxDQUFDSSxHQUFSLENBQVksS0FBS0MsY0FBakIsQ0FISCxDQURGO0FBT0QsRzs7O0VBaEcrQkMsZUFBTUMsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtY2hlY2tib3gnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL2NvbHVtbi5jb21wb25lbnQnO1xuXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xuICBib3JkZXItYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5pc0l0ZW1Cb3JkZXJWaXNpYmxlID8gYDFweCBzb2xpZCAke3Byb3BzLnRoZW1lLmNvbG9ycy5ncmV5Nn1gIDogJ25vbmUnKX07XG4gIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiAocHJvcHMuc2VsZWN0ZWQgPyBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTUgOiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGUpfTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTR9O1xuICB9XG4gIHVzZXItc2VsZWN0OiBub25lO1xuYDtcblxuY29uc3QgRGVmYXVsdENlbGxDb250YWluZXIgPSBzdHlsZWQuc3BhbmBcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiAke3Byb3BzID0+ICghcHJvcHMuaW5zaWRlVG9vbHRpcCA/ICdub3dyYXAnIDogJ25vcm1hbCcpfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGl0ZW06IFByb3BUeXBlcy5zaGFwZSh7fSkuaXNSZXF1aXJlZCxcbiAgICBpdGVtSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgcm93SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBpc0luZGV4Q29sdW1uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG4gICAgaXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc1NlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgb25TZWxlY3RDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH1cblxuICByZW5kZXJTZWxlY3RDZWxsID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXNTZWxlY3RlZCxcbiAgICAgIG9uU2VsZWN0Q2hhbmdlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGlkPXtgJHtpZH0tY29sLWluZGV4YH1cbiAgICAgICAgd2lkdGg9ezM1fVxuICAgICAgICBhbGlnbm1lbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgID5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgaWQ9e2Ake2lkfS1zZWxlY3RpdGVtYH1cbiAgICAgICAgICBjaGVja2VkPXtpc1NlbGVjdGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdENoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJJbmRleENlbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICByb3dJbmRleCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbHVtblxuICAgICAgICBpZD17YCR7aWR9LWNvbC1pbmRleGB9XG4gICAgICAgIHdpZHRoPXszNX1cbiAgICAgICAgYWxpZ25tZW50PVwiZmxleC1zdGFydFwiXG4gICAgICA+XG4gICAgICAgIHtyb3dJbmRleCArIDF9XG4gICAgICA8L0NvbHVtbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVySXRlbUNlbGwgPSAoY29sdW1uLCBpZHgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGl0ZW0sXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qga2V5ID0gY29sdW1uLnZhbHVlS2V5IHx8IGlkeDtcbiAgICBsZXQgY2VsbCA9IG51bGw7XG4gICAgaWYgKGNvbHVtbi5yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNlbGwgPSBjb2x1bW4ucmVuZGVyKGl0ZW0sIGlkeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNlbGwgPSBpdGVtW2NvbHVtbi52YWx1ZUtleV07XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGlkPXtgJHtpZH0tY29sLSR7a2V5fWB9XG4gICAgICAgIGtleT17a2V5fVxuICAgICAgICB3aWR0aD17Y29sdW1uLndpZHRoIHx8IDIwMH1cbiAgICAgICAgYWxpZ25tZW50PXtjb2x1bW4uYWxpZ25tZW50IHx8ICdmbGV4LXN0YXJ0J31cbiAgICAgID5cbiAgICAgICAge2NvbHVtbi5yZW5kZXIgPyBjb2x1bW4ucmVuZGVyKGl0ZW0pIDogKFxuICAgICAgICAgIGNvbHVtbi52YWx1ZUtleSAmJiAoXG4gICAgICAgICAgICA8RGVmYXVsdENlbGxDb250YWluZXI+XG4gICAgICAgICAgICAgIHtjZWxsfVxuICAgICAgICAgICAgPC9EZWZhdWx0Q2VsbENvbnRhaW5lcj5cbiAgICAgICAgICApXG4gICAgICAgICl9XG4gICAgICA8L0NvbHVtbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzU2VsZWN0YWJsZSxcbiAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNJdGVtQm9yZGVyVmlzaWJsZSxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Um93IGhlaWdodD17aXRlbUhlaWdodH0gaXNJdGVtQm9yZGVyVmlzaWJsZT17aXNJdGVtQm9yZGVyVmlzaWJsZX0+XG4gICAgICAgIHtpc1NlbGVjdGFibGUgJiYgdGhpcy5yZW5kZXJTZWxlY3RDZWxsKCl9XG4gICAgICAgIHtpc0luZGV4Q29sdW1uVmlzaWJsZSAmJiB0aGlzLnJlbmRlckluZGV4Q2VsbCgpfVxuICAgICAgICB7Y29sdW1ucy5tYXAodGhpcy5yZW5kZXJJdGVtQ2VsbCl9XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9XG59XG4iXX0=