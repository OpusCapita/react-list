function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-right: 0;\n  margin-left: auto;\n  display: flex;\n  width: 4rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

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
import { SortableHandle } from 'react-sortable-hoc';
import Checkbox from '@opuscapita/react-checkbox';
import { Icon } from '@opuscapita/react-icons';
import Column from './column.component';
var Row = styled.div(_templateObject(), function (props) {
  return props.height;
}, function (props) {
  return props.isItemBorderVisible ? "1px solid " + props.theme.colors.grey6 : 'none';
}, function (props) {
  return props.selected || props.isHighlighted ? props.theme.colors.grey5 : props.theme.colors.white;
}, function (props) {
  return props.theme.colors.grey4;
});
var DefaultCellContainer = styled.span(_templateObject2(), function (props) {
  return !props.insideTooltip ? 'nowrap' : 'normal';
});
var HandleIcon = styled(Icon)(_templateObject3());
var DragHandle = SortableHandle(function () {
  return React.createElement(HandleIcon, {
    type: "indicator",
    name: "draggingArrows"
  });
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

    _defineProperty(_assertThisInitialized(_this), "handleRowClick", function () {
      var _this$props = _this.props,
          item = _this$props.item,
          rowIndex = _this$props.rowIndex,
          onRowClick = _this$props.onRowClick;
      onRowClick(item, rowIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "handleRowDoubleClick", function () {
      var _this$props2 = _this.props,
          item = _this$props2.item,
          rowIndex = _this$props2.rowIndex,
          onRowDoubleClick = _this$props2.onRowDoubleClick;
      onRowDoubleClick(item, rowIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnContextMenu", function (e) {
      var _this$props3 = _this.props,
          item = _this$props3.item,
          rowIndex = _this$props3.rowIndex,
          onRowContextMenu = _this$props3.onRowContextMenu;
      onRowContextMenu(item, rowIndex);
      e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "isRowHighlighted", function () {
      var _this$props4 = _this.props,
          highlightedItems = _this$props4.highlightedItems,
          item = _this$props4.item,
          idKey = _this$props4.idKey;
      return highlightedItems.includes(item[idKey]);
    });

    _defineProperty(_assertThisInitialized(_this), "renderSelectCell", function () {
      var _this$props5 = _this.props,
          id = _this$props5.id,
          isSelected = _this$props5.isSelected,
          onSelectChange = _this$props5.onSelectChange;
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
      var _this$props6 = _this.props,
          id = _this$props6.id,
          rowIndex = _this$props6.rowIndex;
      return React.createElement(Column, {
        id: id + "-col-index",
        width: 35,
        alignment: "flex-start"
      }, rowIndex + 1);
    });

    _defineProperty(_assertThisInitialized(_this), "renderItemCell", function (column, idx) {
      var _this$props7 = _this.props,
          id = _this$props7.id,
          item = _this$props7.item,
          rowIndex = _this$props7.rowIndex;
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
    var _this$props8 = this.props,
        isSelectColumnVisible = _this$props8.isSelectColumnVisible,
        isIndexColumnVisible = _this$props8.isIndexColumnVisible,
        isItemBorderVisible = _this$props8.isItemBorderVisible,
        isSortable = _this$props8.isSortable,
        columns = _this$props8.columns,
        itemHeight = _this$props8.itemHeight;
    return React.createElement(Row, {
      height: itemHeight,
      isItemBorderVisible: isItemBorderVisible,
      onClick: this.handleRowClick,
      onDoubleClick: this.handleRowDoubleClick,
      onContextMenu: this.handleOnContextMenu,
      isHighlighted: this.isRowHighlighted()
    }, isSelectColumnVisible && this.renderSelectCell(), isIndexColumnVisible && this.renderIndexCell(), columns.map(this.renderItemCell), isSortable && React.createElement(DragHandle, null));
  };

  return List;
}(React.PureComponent);

export { List as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsIlNvcnRhYmxlSGFuZGxlIiwiQ2hlY2tib3giLCJJY29uIiwiQ29sdW1uIiwiUm93IiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJpc0l0ZW1Cb3JkZXJWaXNpYmxlIiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NiIsInNlbGVjdGVkIiwiaXNIaWdobGlnaHRlZCIsImdyZXk1Iiwid2hpdGUiLCJncmV5NCIsIkRlZmF1bHRDZWxsQ29udGFpbmVyIiwic3BhbiIsImluc2lkZVRvb2x0aXAiLCJIYW5kbGVJY29uIiwiRHJhZ0hhbmRsZSIsIkxpc3QiLCJpdGVtIiwicm93SW5kZXgiLCJvblJvd0NsaWNrIiwib25Sb3dEb3VibGVDbGljayIsImUiLCJvblJvd0NvbnRleHRNZW51IiwicHJldmVudERlZmF1bHQiLCJoaWdobGlnaHRlZEl0ZW1zIiwiaWRLZXkiLCJpbmNsdWRlcyIsImlkIiwiaXNTZWxlY3RlZCIsIm9uU2VsZWN0Q2hhbmdlIiwiY29sdW1uIiwiaWR4Iiwia2V5IiwidmFsdWVLZXkiLCJjZWxsIiwicmVuZGVyIiwid2lkdGgiLCJhbGlnbm1lbnQiLCJpc1NlbGVjdENvbHVtblZpc2libGUiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImlzU29ydGFibGUiLCJjb2x1bW5zIiwiaXRlbUhlaWdodCIsImhhbmRsZVJvd0NsaWNrIiwiaGFuZGxlUm93RG91YmxlQ2xpY2siLCJoYW5kbGVPbkNvbnRleHRNZW51IiwiaXNSb3dIaWdobGlnaHRlZCIsInJlbmRlclNlbGVjdENlbGwiLCJyZW5kZXJJbmRleENlbGwiLCJtYXAiLCJyZW5kZXJJdGVtQ2VsbCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9B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SCxFQVdHVixVQUFVLElBQUksb0JBQUMsVUFBRCxPQVhqQixDQURGO0FBZUQsRzs7O0VBOUkrQmpELEtBQUssQ0FBQzRELGE7O1NBQW5CbkMsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTb3J0YWJsZUhhbmRsZSB9IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtY2hlY2tib3gnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWljb25zJztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9jb2x1bW4uY29tcG9uZW50JztcblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodH1weDtcbiAgYm9yZGVyLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMuaXNJdGVtQm9yZGVyVmlzaWJsZSA/IGAxcHggc29saWQgJHtwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTZ9YCA6ICdub25lJyl9O1xuICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gKHByb3BzLnNlbGVjdGVkIHx8IHByb3BzLmlzSGlnaGxpZ2h0ZWQgPyBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTUgOiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGUpfTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTR9O1xuICB9XG4gIHVzZXItc2VsZWN0OiBub25lO1xuYDtcblxuY29uc3QgRGVmYXVsdENlbGxDb250YWluZXIgPSBzdHlsZWQuc3BhbmBcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiAke3Byb3BzID0+ICghcHJvcHMuaW5zaWRlVG9vbHRpcCA/ICdub3dyYXAnIDogJ25vcm1hbCcpfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IEhhbmRsZUljb24gPSBzdHlsZWQoSWNvbilgXG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0cmVtO1xuYDtcblxuY29uc3QgRHJhZ0hhbmRsZSA9IFNvcnRhYmxlSGFuZGxlKCgpID0+IDxIYW5kbGVJY29uIHR5cGU9XCJpbmRpY2F0b3JcIiBuYW1lPVwiZHJhZ2dpbmdBcnJvd3NcIiAvPik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGlkS2V5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaXRlbTogUHJvcFR5cGVzLnNoYXBlKHt9KS5pc1JlcXVpcmVkLFxuICAgIGl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzSXRlbUJvcmRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcbiAgICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc1NvcnRhYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIG9uU2VsZWN0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUm93Q2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Sb3dEb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblJvd0NvbnRleHRNZW51OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGhpZ2hsaWdodGVkSXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgXSkpLmlzUmVxdWlyZWQsXG4gIH1cblxuICBoYW5kbGVSb3dDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpdGVtLFxuICAgICAgcm93SW5kZXgsXG4gICAgICBvblJvd0NsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uUm93Q2xpY2soaXRlbSwgcm93SW5kZXgpO1xuICB9XG5cbiAgaGFuZGxlUm93RG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbSxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgb25Sb3dEb3VibGVDbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBvblJvd0RvdWJsZUNsaWNrKGl0ZW0sIHJvd0luZGV4KTtcbiAgfVxuXG4gIGhhbmRsZU9uQ29udGV4dE1lbnUgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGl0ZW0sXG4gICAgICByb3dJbmRleCxcbiAgICAgIG9uUm93Q29udGV4dE1lbnUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgb25Sb3dDb250ZXh0TWVudShpdGVtLCByb3dJbmRleCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgaXNSb3dIaWdobGlnaHRlZCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGhpZ2hsaWdodGVkSXRlbXMsIGl0ZW0sIGlkS2V5IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBoaWdobGlnaHRlZEl0ZW1zLmluY2x1ZGVzKGl0ZW1baWRLZXldKTtcbiAgfVxuXG4gIHJlbmRlclNlbGVjdENlbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpc1NlbGVjdGVkLFxuICAgICAgb25TZWxlY3RDaGFuZ2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgaWQ9e2Ake2lkfS1jb2wtaW5kZXhgfVxuICAgICAgICB3aWR0aD17MzV9XG4gICAgICAgIGFsaWdubWVudD1cImZsZXgtc3RhcnRcIlxuICAgICAgPlxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICBpZD17YCR7aWR9LXNlbGVjdGl0ZW1gfVxuICAgICAgICAgIGNoZWNrZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9Db2x1bW4+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckluZGV4Q2VsbCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHJvd0luZGV4LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGlkPXtgJHtpZH0tY29sLWluZGV4YH1cbiAgICAgICAgd2lkdGg9ezM1fVxuICAgICAgICBhbGlnbm1lbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgID5cbiAgICAgICAge3Jvd0luZGV4ICsgMX1cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJJdGVtQ2VsbCA9IChjb2x1bW4sIGlkeCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXRlbSxcbiAgICAgIHJvd0luZGV4LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGtleSA9IGNvbHVtbi52YWx1ZUtleSB8fCBpZHg7XG4gICAgbGV0IGNlbGwgPSBudWxsO1xuICAgIGlmICh0eXBlb2YgY29sdW1uLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2VsbCA9IGNvbHVtbi5yZW5kZXIoaXRlbSwgcm93SW5kZXgpO1xuICAgIH0gZWxzZSBpZiAoY29sdW1uLnZhbHVlS2V5KSB7XG4gICAgICBjZWxsID0gPERlZmF1bHRDZWxsQ29udGFpbmVyPntpdGVtW2NvbHVtbi52YWx1ZUtleV19PC9EZWZhdWx0Q2VsbENvbnRhaW5lcj47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGlkPXtgJHtpZH0tY29sLSR7a2V5fWB9XG4gICAgICAgIGtleT17a2V5fVxuICAgICAgICB3aWR0aD17Y29sdW1uLndpZHRoIHx8IDIwMH1cbiAgICAgICAgYWxpZ25tZW50PXtjb2x1bW4uYWxpZ25tZW50IHx8ICdmbGV4LXN0YXJ0J31cbiAgICAgID5cbiAgICAgICAge2NlbGx9XG4gICAgICA8L0NvbHVtbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZSxcbiAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNJdGVtQm9yZGVyVmlzaWJsZSxcbiAgICAgIGlzU29ydGFibGUsXG4gICAgICBjb2x1bW5zLFxuICAgICAgaXRlbUhlaWdodCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJvd1xuICAgICAgICBoZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgIGlzSXRlbUJvcmRlclZpc2libGU9e2lzSXRlbUJvcmRlclZpc2libGV9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUm93Q2xpY2t9XG4gICAgICAgIG9uRG91YmxlQ2xpY2s9e3RoaXMuaGFuZGxlUm93RG91YmxlQ2xpY2t9XG4gICAgICAgIG9uQ29udGV4dE1lbnU9e3RoaXMuaGFuZGxlT25Db250ZXh0TWVudX1cbiAgICAgICAgaXNIaWdobGlnaHRlZD17dGhpcy5pc1Jvd0hpZ2hsaWdodGVkKCl9XG4gICAgICA+XG4gICAgICAgIHtpc1NlbGVjdENvbHVtblZpc2libGUgJiYgdGhpcy5yZW5kZXJTZWxlY3RDZWxsKCl9XG4gICAgICAgIHtpc0luZGV4Q29sdW1uVmlzaWJsZSAmJiB0aGlzLnJlbmRlckluZGV4Q2VsbCgpfVxuICAgICAgICB7Y29sdW1ucy5tYXAodGhpcy5yZW5kZXJJdGVtQ2VsbCl9XG4gICAgICAgIHtpc1NvcnRhYmxlICYmIDxEcmFnSGFuZGxlIC8+fVxuICAgICAgPC9Sb3c+XG4gICAgKTtcbiAgfVxufVxuIl19