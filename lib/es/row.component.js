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
  return props.selected ? props.theme.colors.grey5 : props.theme.colors.white;
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

    _defineProperty(_assertThisInitialized(_this), "renderSelectCell", function () {
      var _this$props4 = _this.props,
          id = _this$props4.id,
          isSelected = _this$props4.isSelected,
          onSelectChange = _this$props4.onSelectChange;
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
      var _this$props5 = _this.props,
          id = _this$props5.id,
          rowIndex = _this$props5.rowIndex;
      return React.createElement(Column, {
        id: id + "-col-index",
        width: 35,
        alignment: "flex-start"
      }, rowIndex + 1);
    });

    _defineProperty(_assertThisInitialized(_this), "renderItemCell", function (column, idx) {
      var _this$props6 = _this.props,
          id = _this$props6.id,
          item = _this$props6.item,
          rowIndex = _this$props6.rowIndex;
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
    var _this$props7 = this.props,
        isSelectColumnVisible = _this$props7.isSelectColumnVisible,
        isIndexColumnVisible = _this$props7.isIndexColumnVisible,
        isItemBorderVisible = _this$props7.isItemBorderVisible,
        isSortable = _this$props7.isSortable,
        columns = _this$props7.columns,
        itemHeight = _this$props7.itemHeight;
    return React.createElement(Row, {
      height: itemHeight,
      isItemBorderVisible: isItemBorderVisible,
      onClick: this.handleOnClick,
      onDoubleClick: this.handleOnDoubleClick,
      onContextMenu: this.handleOnContextMenu
    }, isSelectColumnVisible && this.renderSelectCell(), isIndexColumnVisible && this.renderIndexCell(), columns.map(this.renderItemCell), isSortable && React.createElement(DragHandle, null));
  };

  return List;
}(React.PureComponent);

export { List as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsIlNvcnRhYmxlSGFuZGxlIiwiQ2hlY2tib3giLCJJY29uIiwiQ29sdW1uIiwiUm93IiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJpc0l0ZW1Cb3JkZXJWaXNpYmxlIiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NiIsInNlbGVjdGVkIiwiZ3JleTUiLCJ3aGl0ZSIsImdyZXk0IiwiRGVmYXVsdENlbGxDb250YWluZXIiLCJzcGFuIiwiaW5zaWRlVG9vbHRpcCIsIkhhbmRsZUljb24iLCJEcmFnSGFuZGxlIiwiTGlzdCIsIml0ZW0iLCJyb3dJbmRleCIsIm9uUm93Q2xpY2siLCJvblJvd0RvdWJsZUNsaWNrIiwiZSIsIm9uUm93Q29udGV4dE1lbnUiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwiaXNTZWxlY3RlZCIsIm9uU2VsZWN0Q2hhbmdlIiwiY29sdW1uIiwiaWR4Iiwia2V5IiwidmFsdWVLZXkiLCJjZWxsIiwicmVuZGVyIiwid2lkdGgiLCJhbGlnbm1lbnQiLCJpc1NlbGVjdENvbHVtblZpc2libGUiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImlzU29ydGFibGUiLCJjb2x1bW5zIiwiaXRlbUhlaWdodCIsImhhbmRsZU9uQ2xpY2siLCJoYW5kbGVPbkRvdWJsZUNsaWNrIiwiaGFuZGxlT25Db250ZXh0TWVudSIsInJlbmRlclNlbGVjdENlbGwiLCJyZW5kZXJJbmRleENlbGwiLCJtYXAiLCJyZW5kZXJJdGVtQ2VsbCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLFNBQVNDLGNBQVQsUUFBK0Isb0JB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TSxDQUFDTyxTQUFQLElBQW9CO0FBSmpDLFNBTUdILElBTkgsQ0FERjtBQVVELEs7Ozs7Ozs7U0FFREMsTSxHQUFBLGtCQUFTO0FBQUEsdUJBUUgsS0FBSy9CLEtBUkY7QUFBQSxRQUVMa0MscUJBRkssZ0JBRUxBLHFCQUZLO0FBQUEsUUFHTEMsb0JBSEssZ0JBR0xBLG9CQUhLO0FBQUEsUUFJTGpDLG1CQUpLLGdCQUlMQSxtQkFKSztBQUFBLFFBS0xrQyxVQUxLLGdCQUtMQSxVQUxLO0FBQUEsUUFNTEMsT0FOSyxnQkFNTEEsT0FOSztBQUFBLFFBT0xDLFVBUEssZ0JBT0xBLFVBUEs7QUFTUCxXQUNFLG9CQUFDLEdBQUQ7QUFDRSxNQUFBLE1BQU0sRUFBRUEsVUFEVjtBQUVFLE1BQUEsbUJBQW1CLEVBQUVwQyxtQkFGdkI7QUFHRSxNQUFBLE9BQU8sRUFBRSxLQUFLcUMsYUFIaEI7QUFJRSxNQUFBLGFBQWEsRUFBRSxLQUFLQyxtQkFKdEI7QUFLRSxNQUFBLGFBQWEsRUFBRSxLQUFLQztBQUx0QixPQU9HUCxxQkFBcUIsSUFBSSxLQUFLUSxnQkFBTCxFQVA1QixFQVFHUCxvQkFBb0IsSUFBSSxLQUFLUSxlQUFMLEVBUjNCLEVBU0dOLE9BQU8sQ0FBQ08sR0FBUixDQUFZLEtBQUtDLGNBQWpCLENBVEgsRUFVR1QsVUFBVSxJQUFJLG9CQUFDLFVBQUQsT0FWakIsQ0FERjtBQWNELEc7OztFQW5JK0I3QyxLQUFLLENBQUN1RCxhOztTQUFuQi9CLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgU29ydGFibGVIYW5kbGUgfSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWNoZWNrYm94JztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1pY29ucyc7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4vY29sdW1uLmNvbXBvbmVudCc7XG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9cHg7XG4gIGJvcmRlci1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLmlzSXRlbUJvcmRlclZpc2libGUgPyBgMXB4IHNvbGlkICR7cHJvcHMudGhlbWUuY29sb3JzLmdyZXk2fWAgOiAnbm9uZScpfTtcbiAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IChwcm9wcy5zZWxlY3RlZCA/IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NSA6IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZSl9O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NH07XG4gIH1cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5gO1xuXG5jb25zdCBEZWZhdWx0Q2VsbENvbnRhaW5lciA9IHN0eWxlZC5zcGFuYFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6ICR7cHJvcHMgPT4gKCFwcm9wcy5pbnNpZGVUb29sdGlwID8gJ25vd3JhcCcgOiAnbm9ybWFsJyl9O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuY29uc3QgSGFuZGxlSWNvbiA9IHN0eWxlZChJY29uKWBcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDRyZW07XG5gO1xuXG5jb25zdCBEcmFnSGFuZGxlID0gU29ydGFibGVIYW5kbGUoKCkgPT4gPEhhbmRsZUljb24gdHlwZT1cImluZGljYXRvclwiIG5hbWU9XCJkcmFnZ2luZ0Fycm93c1wiIC8+KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaXRlbTogUHJvcFR5cGVzLnNoYXBlKHt9KS5pc1JlcXVpcmVkLFxuICAgIGl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzSXRlbUJvcmRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcbiAgICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc1NvcnRhYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIG9uU2VsZWN0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUm93Q2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Sb3dEb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblJvd0NvbnRleHRNZW51OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9XG5cbiAgaGFuZGxlUm93Q2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbSxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgb25Sb3dDbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBvblJvd0NsaWNrKGl0ZW0sIHJvd0luZGV4KTtcbiAgfVxuXG4gIGhhbmRsZVJvd0RvdWJsZUNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGl0ZW0sXG4gICAgICByb3dJbmRleCxcbiAgICAgIG9uUm93RG91YmxlQ2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgb25Sb3dEb3VibGVDbGljayhpdGVtLCByb3dJbmRleCk7XG4gIH1cblxuICBoYW5kbGVPbkNvbnRleHRNZW51ID0gKGUpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpdGVtLFxuICAgICAgcm93SW5kZXgsXG4gICAgICBvblJvd0NvbnRleHRNZW51LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uUm93Q29udGV4dE1lbnUoaXRlbSwgcm93SW5kZXgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHJlbmRlclNlbGVjdENlbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpc1NlbGVjdGVkLFxuICAgICAgb25TZWxlY3RDaGFuZ2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgaWQ9e2Ake2lkfS1jb2wtaW5kZXhgfVxuICAgICAgICB3aWR0aD17MzV9XG4gICAgICAgIGFsaWdubWVudD1cImZsZXgtc3RhcnRcIlxuICAgICAgPlxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICBpZD17YCR7aWR9LXNlbGVjdGl0ZW1gfVxuICAgICAgICAgIGNoZWNrZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9Db2x1bW4+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckluZGV4Q2VsbCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHJvd0luZGV4LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGlkPXtgJHtpZH0tY29sLWluZGV4YH1cbiAgICAgICAgd2lkdGg9ezM1fVxuICAgICAgICBhbGlnbm1lbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgID5cbiAgICAgICAge3Jvd0luZGV4ICsgMX1cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJJdGVtQ2VsbCA9IChjb2x1bW4sIGlkeCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXRlbSxcbiAgICAgIHJvd0luZGV4LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGtleSA9IGNvbHVtbi52YWx1ZUtleSB8fCBpZHg7XG4gICAgbGV0IGNlbGwgPSBudWxsO1xuICAgIGlmICh0eXBlb2YgY29sdW1uLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2VsbCA9IGNvbHVtbi5yZW5kZXIoaXRlbSwgcm93SW5kZXgpO1xuICAgIH0gZWxzZSBpZiAoY29sdW1uLnZhbHVlS2V5KSB7XG4gICAgICBjZWxsID0gPERlZmF1bHRDZWxsQ29udGFpbmVyPntpdGVtW2NvbHVtbi52YWx1ZUtleV19PC9EZWZhdWx0Q2VsbENvbnRhaW5lcj47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGlkPXtgJHtpZH0tY29sLSR7a2V5fWB9XG4gICAgICAgIGtleT17a2V5fVxuICAgICAgICB3aWR0aD17Y29sdW1uLndpZHRoIHx8IDIwMH1cbiAgICAgICAgYWxpZ25tZW50PXtjb2x1bW4uYWxpZ25tZW50IHx8ICdmbGV4LXN0YXJ0J31cbiAgICAgID5cbiAgICAgICAge2NlbGx9XG4gICAgICA8L0NvbHVtbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZSxcbiAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNJdGVtQm9yZGVyVmlzaWJsZSxcbiAgICAgIGlzU29ydGFibGUsXG4gICAgICBjb2x1bW5zLFxuICAgICAgaXRlbUhlaWdodCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJvd1xuICAgICAgICBoZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgIGlzSXRlbUJvcmRlclZpc2libGU9e2lzSXRlbUJvcmRlclZpc2libGV9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlT25DbGlja31cbiAgICAgICAgb25Eb3VibGVDbGljaz17dGhpcy5oYW5kbGVPbkRvdWJsZUNsaWNrfVxuICAgICAgICBvbkNvbnRleHRNZW51PXt0aGlzLmhhbmRsZU9uQ29udGV4dE1lbnV9XG4gICAgICA+XG4gICAgICAgIHtpc1NlbGVjdENvbHVtblZpc2libGUgJiYgdGhpcy5yZW5kZXJTZWxlY3RDZWxsKCl9XG4gICAgICAgIHtpc0luZGV4Q29sdW1uVmlzaWJsZSAmJiB0aGlzLnJlbmRlckluZGV4Q2VsbCgpfVxuICAgICAgICB7Y29sdW1ucy5tYXAodGhpcy5yZW5kZXJJdGVtQ2VsbCl9XG4gICAgICAgIHtpc1NvcnRhYmxlICYmIDxEcmFnSGFuZGxlIC8+fVxuICAgICAgPC9Sb3c+XG4gICAgKTtcbiAgfVxufVxuIl19