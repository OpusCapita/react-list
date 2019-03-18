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
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  height: ", "px;\n  border-bottom: ", ";\n  /* cursor: pointer; */\n  align-items: center;\n  background: ", ";\n  /* &:hover {\n    background: ", ";\n  } */\n  user-select: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from '@opuscapita/react-checkbox';
import Column from './column.component';
var Row = styled.div(_templateObject(), function (props) {
  return props.height;
}, function (props) {
  return props.isItemBorderVisible ? "1px solid " + props.theme.colors.grey6 : 'none';
}, function (props) {
  return props.selected ? props.theme.colors.grey5 : props.theme.colors.white;
}, function (props) {
  return props.theme.colors.grey4;
});
var DefaultTextContainer = styled.span(_templateObject2(), function (props) {
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
      return React.createElement(Column, {
        id: id + "-col-index",
        width: 35,
        alignment: "flex-start"
      }, React.createElement(Checkbox, {
        id: id + "-selectitem",
        checked: isSelected,
        onChange: onSelectChange
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderIndexColumn", function () {
      var _this$props2 = _this.props,
          id = _this$props2.id,
          rowIndex = _this$props2.rowIndex;
      return React.createElement(Column, {
        id: id + "-col-index",
        width: 35,
        alignment: "flex-start"
      }, rowIndex + 1);
    });

    _defineProperty(_assertThisInitialized(_this), "renderItemColumn", function (column) {
      var _this$props3 = _this.props,
          id = _this$props3.id,
          item = _this$props3.item;
      return React.createElement(Column, {
        id: id + "-col-" + column.valueKey,
        key: column.valueKey,
        width: column.width || 200,
        alignment: column.alignment || 'flex-start'
      }, React.createElement(DefaultTextContainer, null, item[column.valueKey]));
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
    return React.createElement(Row, {
      height: itemHeight,
      isItemBordersVisible: isItemBorderVisible
    }, isSelectable && this.renderSelectColumn(), isIndexColumnVisible && this.renderIndexColumn(), columns.map(this.renderItemColumn));
  };

  return List;
}(React.PureComponent);

export { List as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsIkNoZWNrYm94IiwiQ29sdW1uIiwiUm93IiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJpc0l0ZW1Cb3JkZXJWaXNpYmxlIiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NiIsInNlbGVjdGVkIiwiZ3JleTUiLCJ3aGl0ZSIsImdyZXk0IiwiRGVmYXVsdFRleHRDb250YWluZXIiLCJzcGFuIiwiaW5zaWRlVG9vbHRpcCIsIkxpc3QiLCJpZCIsImlzU2VsZWN0ZWQiLCJvblNlbGVjdENoYW5nZSIsInJvd0luZGV4IiwiY29sdW1uIiwiaXRlbSIsInZhbHVlS2V5Iiwid2lkdGgiLCJhbGlnbm1lbnQiLCJyZW5kZXIiLCJpc1NlbGVjdGFibGUiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImNvbHVtbnMiLCJpdGVtSGVpZ2h0IiwicmVuZGVyU2VsZWN0Q29sdW1uIiwicmVuZGVySW5kZXhDb2x1bW4iLCJtYXAiLCJyZW5kZXJJdGVtQ29sdW1uIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLDRCQUFyQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsb0JBQW5CO0FBRUEsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLEdBQVYsb0JBRUcsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsTUFBVjtBQUFBLENBRlIsRUFHVSxVQUFBRCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDRSxtQkFBTixrQkFBeUNGLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxNQUFaLENBQW1CQyxLQUE1RCxHQUFzRSxNQUEz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bkJuQixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1jaGVja2JveCc7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4vY29sdW1uLmNvbXBvbmVudCc7XG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9cHg7XG4gIGJvcmRlci1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLmlzSXRlbUJvcmRlclZpc2libGUgPyBgMXB4IHNvbGlkICR7cHJvcHMudGhlbWUuY29sb3JzLmdyZXk2fWAgOiAnbm9uZScpfTtcbiAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IChwcm9wcy5zZWxlY3RlZCA/IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NSA6IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZSl9O1xuICAvKiAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NH07XG4gIH0gKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5gO1xuXG5jb25zdCBEZWZhdWx0VGV4dENvbnRhaW5lciA9IHN0eWxlZC5zcGFuYFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6ICR7cHJvcHMgPT4gKCFwcm9wcy5pbnNpZGVUb29sdGlwID8gJ25vd3JhcCcgOiAnbm9ybWFsJyl9O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaXRlbTogUHJvcFR5cGVzLnNoYXBlKHt9KS5pc1JlcXVpcmVkLFxuICAgIGl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzSXRlbUJvcmRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcbiAgICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzU2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBvblNlbGVjdENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIHJlbmRlclNlbGVjdENvbHVtbiA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGlzU2VsZWN0ZWQsXG4gICAgICBvblNlbGVjdENoYW5nZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbHVtblxuICAgICAgICBpZD17YCR7aWR9LWNvbC1pbmRleGB9XG4gICAgICAgIHdpZHRoPXszNX1cbiAgICAgICAgYWxpZ25tZW50PVwiZmxleC1zdGFydFwiXG4gICAgICA+XG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIGlkPXtgJHtpZH0tc2VsZWN0aXRlbWB9XG4gICAgICAgICAgY2hlY2tlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbHVtbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVySW5kZXhDb2x1bW4gPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICByb3dJbmRleCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbHVtblxuICAgICAgICBpZD17YCR7aWR9LWNvbC1pbmRleGB9XG4gICAgICAgIHdpZHRoPXszNX1cbiAgICAgICAgYWxpZ25tZW50PVwiZmxleC1zdGFydFwiXG4gICAgICA+XG4gICAgICAgIHtyb3dJbmRleCArIDF9XG4gICAgICA8L0NvbHVtbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVySXRlbUNvbHVtbiA9IChjb2x1bW4pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGl0ZW0sXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgaWQ9e2Ake2lkfS1jb2wtJHtjb2x1bW4udmFsdWVLZXl9YH1cbiAgICAgICAga2V5PXtjb2x1bW4udmFsdWVLZXl9XG4gICAgICAgIHdpZHRoPXtjb2x1bW4ud2lkdGggfHwgMjAwfVxuICAgICAgICBhbGlnbm1lbnQ9e2NvbHVtbi5hbGlnbm1lbnQgfHwgJ2ZsZXgtc3RhcnQnfVxuICAgICAgPlxuICAgICAgICA8RGVmYXVsdFRleHRDb250YWluZXI+XG4gICAgICAgICAge2l0ZW1bY29sdW1uLnZhbHVlS2V5XX1cbiAgICAgICAgPC9EZWZhdWx0VGV4dENvbnRhaW5lcj5cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNTZWxlY3RhYmxlLFxuICAgICAgaXNJbmRleENvbHVtblZpc2libGUsXG4gICAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3cgaGVpZ2h0PXtpdGVtSGVpZ2h0fSBpc0l0ZW1Cb3JkZXJzVmlzaWJsZT17aXNJdGVtQm9yZGVyVmlzaWJsZX0+XG4gICAgICAgIHtpc1NlbGVjdGFibGUgJiYgdGhpcy5yZW5kZXJTZWxlY3RDb2x1bW4oKX1cbiAgICAgICAge2lzSW5kZXhDb2x1bW5WaXNpYmxlICYmIHRoaXMucmVuZGVySW5kZXhDb2x1bW4oKX1cbiAgICAgICAge2NvbHVtbnMubWFwKHRoaXMucmVuZGVySXRlbUNvbHVtbil9XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9XG59XG4iXX0=