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
var DefaultCellContainer = styled.span(_templateObject2(), function (props) {
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

    _defineProperty(_assertThisInitialized(_this), "renderIndexCell", function () {
      var _this$props2 = _this.props,
          id = _this$props2.id,
          rowIndex = _this$props2.rowIndex;
      return React.createElement(Column, {
        id: id + "-col-index",
        width: 35,
        alignment: "flex-start"
      }, rowIndex + 1);
    });

    _defineProperty(_assertThisInitialized(_this), "renderItemCell", function (column, idx) {
      var _this$props3 = _this.props,
          id = _this$props3.id,
          item = _this$props3.item,
          rowIndex = _this$props3.rowIndex;
      var key = column.valueKey || idx;
      var cell = null;

      if (typeof column.render === 'function') {
        cell = column.render(item, rowIndex);
      } else if (column.valueKey) {
        cell = React.createElement(DefaultCellContainer, null, item[column.valueKey]);
      }

      return React.createElement(Column, {
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
    return React.createElement(Row, {
      height: itemHeight,
      isItemBorderVisible: isItemBorderVisible
    }, isSelectable && this.renderSelectCell(), isIndexColumnVisible && this.renderIndexCell(), columns.map(this.renderItemCell));
  };

  return List;
}(React.PureComponent);

export { List as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsIkNoZWNrYm94IiwiQ29sdW1uIiwiUm93IiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJpc0l0ZW1Cb3JkZXJWaXNpYmxlIiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NiIsInNlbGVjdGVkIiwiZ3JleTUiLCJ3aGl0ZSIsImdyZXk0IiwiRGVmYXVsdENlbGxDb250YWluZXIiLCJzcGFuIiwiaW5zaWRlVG9vbHRpcCIsIkxpc3QiLCJpZCIsImlzU2VsZWN0ZWQiLCJvblNlbGVjdENoYW5nZSIsInJvd0luZGV4IiwiY29sdW1uIiwiaWR4IiwiaXRlbSIsImtleSIsInZhbHVlS2V5IiwiY2VsbCIsInJlbmRlciIsIndpZHRoIiwiYWxpZ25tZW50IiwiaXNTZWxlY3RhYmxlIiwiaXNJbmRleENvbHVtblZpc2libGUiLCJjb2x1bW5zIiwiaXRlbUhlaWdodCIsInJlbmRlclNlbGVjdENlbGwiLCJyZW5kZXJJbmRleENlbGwiLCJtYXAiLCJyZW5kZXJJdGVtQ2VsbCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQiw0QkFBckI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG9CQUFuQjtBQUVBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxHQUFWLG9CQUVHLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE1BQVY7QUFBQSxDQUZSLEVBR1UsVUFBQUQsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0UsbUJBQU4sa0JBQXlDRixLQUFLLENBQUNHLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsS0FB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bUJBSkssZ0JBSUxBLG1CQUpLO0FBQUEsUUFLTDJCLE9BTEssZ0JBS0xBLE9BTEs7QUFBQSxRQU1MQyxVQU5LLGdCQU1MQSxVQU5LO0FBUVAsV0FDRSxvQkFBQyxHQUFEO0FBQUssTUFBQSxNQUFNLEVBQUVBLFVBQWI7QUFBeUIsTUFBQSxtQkFBbUIsRUFBRTVCO0FBQTlDLE9BQ0d5QixZQUFZLElBQUksS0FBS0ksZ0JBQUwsRUFEbkIsRUFFR0gsb0JBQW9CLElBQUksS0FBS0ksZUFBTCxFQUYzQixFQUdHSCxPQUFPLENBQUNJLEdBQVIsQ0FBWSxLQUFLQyxjQUFqQixDQUhILENBREY7QUFPRCxHOzs7RUEzRitCekMsS0FBSyxDQUFDMEMsYTs7U0FBbkJ0QixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1jaGVja2JveCc7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4vY29sdW1uLmNvbXBvbmVudCc7XG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9cHg7XG4gIGJvcmRlci1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLmlzSXRlbUJvcmRlclZpc2libGUgPyBgMXB4IHNvbGlkICR7cHJvcHMudGhlbWUuY29sb3JzLmdyZXk2fWAgOiAnbm9uZScpfTtcbiAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IChwcm9wcy5zZWxlY3RlZCA/IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NSA6IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZSl9O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NH07XG4gIH1cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5gO1xuXG5jb25zdCBEZWZhdWx0Q2VsbENvbnRhaW5lciA9IHN0eWxlZC5zcGFuYFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6ICR7cHJvcHMgPT4gKCFwcm9wcy5pbnNpZGVUb29sdGlwID8gJ25vd3JhcCcgOiAnbm9ybWFsJyl9O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaXRlbTogUHJvcFR5cGVzLnNoYXBlKHt9KS5pc1JlcXVpcmVkLFxuICAgIGl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzSXRlbUJvcmRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcbiAgICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzU2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBvblNlbGVjdENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIHJlbmRlclNlbGVjdENlbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpc1NlbGVjdGVkLFxuICAgICAgb25TZWxlY3RDaGFuZ2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgaWQ9e2Ake2lkfS1jb2wtaW5kZXhgfVxuICAgICAgICB3aWR0aD17MzV9XG4gICAgICAgIGFsaWdubWVudD1cImZsZXgtc3RhcnRcIlxuICAgICAgPlxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICBpZD17YCR7aWR9LXNlbGVjdGl0ZW1gfVxuICAgICAgICAgIGNoZWNrZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9Db2x1bW4+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckluZGV4Q2VsbCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHJvd0luZGV4LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGlkPXtgJHtpZH0tY29sLWluZGV4YH1cbiAgICAgICAgd2lkdGg9ezM1fVxuICAgICAgICBhbGlnbm1lbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgID5cbiAgICAgICAge3Jvd0luZGV4ICsgMX1cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJJdGVtQ2VsbCA9IChjb2x1bW4sIGlkeCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXRlbSxcbiAgICAgIHJvd0luZGV4LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGtleSA9IGNvbHVtbi52YWx1ZUtleSB8fCBpZHg7XG4gICAgbGV0IGNlbGwgPSBudWxsO1xuICAgIGlmICh0eXBlb2YgY29sdW1uLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2VsbCA9IGNvbHVtbi5yZW5kZXIoaXRlbSwgcm93SW5kZXgpO1xuICAgIH0gZWxzZSBpZiAoY29sdW1uLnZhbHVlS2V5KSB7XG4gICAgICBjZWxsID0gPERlZmF1bHRDZWxsQ29udGFpbmVyPntpdGVtW2NvbHVtbi52YWx1ZUtleV19PC9EZWZhdWx0Q2VsbENvbnRhaW5lcj47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGlkPXtgJHtpZH0tY29sLSR7a2V5fWB9XG4gICAgICAgIGtleT17a2V5fVxuICAgICAgICB3aWR0aD17Y29sdW1uLndpZHRoIHx8IDIwMH1cbiAgICAgICAgYWxpZ25tZW50PXtjb2x1bW4uYWxpZ25tZW50IHx8ICdmbGV4LXN0YXJ0J31cbiAgICAgID5cbiAgICAgICAge2NlbGx9XG4gICAgICA8L0NvbHVtbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzU2VsZWN0YWJsZSxcbiAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNJdGVtQm9yZGVyVmlzaWJsZSxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Um93IGhlaWdodD17aXRlbUhlaWdodH0gaXNJdGVtQm9yZGVyVmlzaWJsZT17aXNJdGVtQm9yZGVyVmlzaWJsZX0+XG4gICAgICAgIHtpc1NlbGVjdGFibGUgJiYgdGhpcy5yZW5kZXJTZWxlY3RDZWxsKCl9XG4gICAgICAgIHtpc0luZGV4Q29sdW1uVmlzaWJsZSAmJiB0aGlzLnJlbmRlckluZGV4Q2VsbCgpfVxuICAgICAgICB7Y29sdW1ucy5tYXAodGhpcy5yZW5kZXJJdGVtQ2VsbCl9XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9XG59XG4iXX0=