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

      if (typeof column.render === 'function') {
        cell = column.render(item, idx);
      } else if (column.valueKey) {
        cell = _react.default.createElement(DefaultCellContainer, null, item[column.valueKey]);
      }

      return _react.default.createElement(_column.default, {
        id: id + "-col-" + key,
        key: key,
        width: column.width || 200,
        alignment: column.alignment || 'flex-start'
      }, cell);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSb3ciLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImhlaWdodCIsImlzSXRlbUJvcmRlclZpc2libGUiLCJ0aGVtZSIsImNvbG9ycyIsImdyZXk2Iiwic2VsZWN0ZWQiLCJncmV5NSIsIndoaXRlIiwiZ3JleTQiLCJEZWZhdWx0Q2VsbENvbnRhaW5lciIsInNwYW4iLCJpbnNpZGVUb29sdGlwIiwiTGlzdCIsImlkIiwiaXNTZWxlY3RlZCIsIm9uU2VsZWN0Q2hhbmdlIiwicm93SW5kZXgiLCJjb2x1bW4iLCJpZHgiLCJpdGVtIiwia2V5IiwidmFsdWVLZXkiLCJjZWxsIiwicmVuZGVyIiwid2lkdGgiLCJhbGlnbm1lbnQiLCJpc1NlbGVjdGFibGUiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImNvbHVtbnMiLCJpdGVtSGVpZ2h0IiwicmVuZGVyU2VsZWN0Q2VsbCIsInJlbmRlckluZGV4Q2VsbCIsIm1hcCIsInJlbmRlckl0ZW1DZWxsIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEdBQUcsR0FBR0MsMEJBQU9DLEdBQVYsb0JBRUcsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsTUFBVjtBQUFBLENBRlIsRUFHVSxVQUFBRCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDRSxtQkFBTixrQkFBeUNGLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxNQUFaLENBQW1CQyxLQUE1RCxHQUFzRSxNQUEzRTtBQUFBLENBSGYsRUFNTyxVQUFBTCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDTSxRQUFOLEdBQWlCTixLQUFLLENBQUNHLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkcsS0FBcEMsR0FBNENQLEtBQUssQ0FBQ0csS0FBTixDQUFZ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Z0JBQUwsRUFEbkIsRUFFR0gsb0JBQW9CLElBQUksS0FBS0ksZUFBTCxFQUYzQixFQUdHSCxPQUFPLENBQUNJLEdBQVIsQ0FBWSxLQUFLQyxjQUFqQixDQUhILENBREY7QUFPRCxHOzs7RUExRitCQyxlQUFNQyxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1jaGVja2JveCc7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4vY29sdW1uLmNvbXBvbmVudCc7XG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9cHg7XG4gIGJvcmRlci1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLmlzSXRlbUJvcmRlclZpc2libGUgPyBgMXB4IHNvbGlkICR7cHJvcHMudGhlbWUuY29sb3JzLmdyZXk2fWAgOiAnbm9uZScpfTtcbiAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IChwcm9wcy5zZWxlY3RlZCA/IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NSA6IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZSl9O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NH07XG4gIH1cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5gO1xuXG5jb25zdCBEZWZhdWx0Q2VsbENvbnRhaW5lciA9IHN0eWxlZC5zcGFuYFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6ICR7cHJvcHMgPT4gKCFwcm9wcy5pbnNpZGVUb29sdGlwID8gJ25vd3JhcCcgOiAnbm9ybWFsJyl9O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaXRlbTogUHJvcFR5cGVzLnNoYXBlKHt9KS5pc1JlcXVpcmVkLFxuICAgIGl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzSXRlbUJvcmRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcbiAgICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzU2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBvblNlbGVjdENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIHJlbmRlclNlbGVjdENlbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpc1NlbGVjdGVkLFxuICAgICAgb25TZWxlY3RDaGFuZ2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgaWQ9e2Ake2lkfS1jb2wtaW5kZXhgfVxuICAgICAgICB3aWR0aD17MzV9XG4gICAgICAgIGFsaWdubWVudD1cImZsZXgtc3RhcnRcIlxuICAgICAgPlxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICBpZD17YCR7aWR9LXNlbGVjdGl0ZW1gfVxuICAgICAgICAgIGNoZWNrZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9Db2x1bW4+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckluZGV4Q2VsbCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHJvd0luZGV4LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGlkPXtgJHtpZH0tY29sLWluZGV4YH1cbiAgICAgICAgd2lkdGg9ezM1fVxuICAgICAgICBhbGlnbm1lbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgID5cbiAgICAgICAge3Jvd0luZGV4ICsgMX1cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJJdGVtQ2VsbCA9IChjb2x1bW4sIGlkeCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXRlbSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBrZXkgPSBjb2x1bW4udmFsdWVLZXkgfHwgaWR4O1xuICAgIGxldCBjZWxsID0gbnVsbDtcbiAgICBpZiAodHlwZW9mIGNvbHVtbi5yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNlbGwgPSBjb2x1bW4ucmVuZGVyKGl0ZW0sIGlkeCk7XG4gICAgfSBlbHNlIGlmIChjb2x1bW4udmFsdWVLZXkpIHtcbiAgICAgIGNlbGwgPSA8RGVmYXVsdENlbGxDb250YWluZXI+e2l0ZW1bY29sdW1uLnZhbHVlS2V5XX08L0RlZmF1bHRDZWxsQ29udGFpbmVyPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgaWQ9e2Ake2lkfS1jb2wtJHtrZXl9YH1cbiAgICAgICAga2V5PXtrZXl9XG4gICAgICAgIHdpZHRoPXtjb2x1bW4ud2lkdGggfHwgMjAwfVxuICAgICAgICBhbGlnbm1lbnQ9e2NvbHVtbi5hbGlnbm1lbnQgfHwgJ2ZsZXgtc3RhcnQnfVxuICAgICAgPlxuICAgICAgICB7Y2VsbH1cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNTZWxlY3RhYmxlLFxuICAgICAgaXNJbmRleENvbHVtblZpc2libGUsXG4gICAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3cgaGVpZ2h0PXtpdGVtSGVpZ2h0fSBpc0l0ZW1Cb3JkZXJWaXNpYmxlPXtpc0l0ZW1Cb3JkZXJWaXNpYmxlfT5cbiAgICAgICAge2lzU2VsZWN0YWJsZSAmJiB0aGlzLnJlbmRlclNlbGVjdENlbGwoKX1cbiAgICAgICAge2lzSW5kZXhDb2x1bW5WaXNpYmxlICYmIHRoaXMucmVuZGVySW5kZXhDZWxsKCl9XG4gICAgICAgIHtjb2x1bW5zLm1hcCh0aGlzLnJlbmRlckl0ZW1DZWxsKX1cbiAgICAgIDwvUm93PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==