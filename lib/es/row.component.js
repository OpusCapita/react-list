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
      onClick: this.handleRowClick,
      onDoubleClick: this.handleRowDoubleClick,
      onContextMenu: this.handleOnContextMenu
    }, isSelectColumnVisible && this.renderSelectCell(), isIndexColumnVisible && this.renderIndexCell(), columns.map(this.renderItemCell), isSortable && React.createElement(DragHandle, null));
  };

  return List;
}(React.PureComponent);

export { List as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsIlNvcnRhYmxlSGFuZGxlIiwiQ2hlY2tib3giLCJJY29uIiwiQ29sdW1uIiwiUm93IiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJpc0l0ZW1Cb3JkZXJWaXNpYmxlIiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NiIsInNlbGVjdGVkIiwiZ3JleTUiLCJ3aGl0ZSIsImdyZXk0IiwiRGVmYXVsdENlbGxDb250YWluZXIiLCJzcGFuIiwiaW5zaWRlVG9vbHRpcCIsIkhhbmRsZUljb24iLCJEcmFnSGFuZGxlIiwiTGlzdCIsIml0ZW0iLCJyb3dJbmRleCIsIm9uUm93Q2xpY2siLCJvblJvd0RvdWJsZUNsaWNrIiwiZSIsIm9uUm93Q29udGV4dE1lbnUiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwiaXNTZWxlY3RlZCIsIm9uU2VsZWN0Q2hhbmdlIiwiY29sdW1uIiwiaWR4Iiwia2V5IiwidmFsdWVLZXkiLCJjZWxsIiwicmVuZGVyIiwid2lkdGgiLCJhbGlnbm1lbnQiLCJpc1NlbGVjdENvbHVtblZpc2libGUiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImlzU29ydGFibGUiLCJjb2x1bW5zIiwiaXRlbUhlaWdodCIsImhhbmRsZVJvd0NsaWNrIiwiaGFuZGxlUm93RG91YmxlQ2xpY2siLCJoYW5kbGVPbkNvbnRleHRNZW51IiwicmVuZGVyU2VsZWN0Q2VsbCIsInJlbmRlckluZGV4Q2VsbCIsIm1hcCIsInJlbmRlckl0ZW1DZWxsIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsU0FBU0MsY0FBVCxRQUErQixv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QUFNLENBQUNPLFNBQVAsSUFBb0I7QUFKakMsU0FNR0gsSUFOSCxDQURGO0FBVUQsSzs7Ozs7OztTQUVEQyxNLEdBQUEsa0JBQVM7QUFBQSx1QkFRSCxLQUFLL0IsS0FSRjtBQUFBLFFBRUxrQyxxQkFGSyxnQkFFTEEscUJBRks7QUFBQSxRQUdMQyxvQkFISyxnQkFHTEEsb0JBSEs7QUFBQSxRQUlMakMsbUJBSkssZ0JBSUxBLG1CQUpLO0FBQUEsUUFLTGtDLFVBTEssZ0JBS0xBLFVBTEs7QUFBQSxRQU1MQyxPQU5LLGdCQU1MQSxPQU5LO0FBQUEsUUFPTEMsVUFQSyxnQkFPTEEsVUFQSztBQVNQLFdBQ0Usb0JBQUMsR0FBRDtBQUNFLE1BQUEsTUFBTSxFQUFFQSxVQURWO0FBRUUsTUFBQSxtQkFBbUIsRUFBRXBDLG1CQUZ2QjtBQUdFLE1BQUEsT0FBTyxFQUFFLEtBQUtxQyxjQUhoQjtBQUlFLE1BQUEsYUFBYSxFQUFFLEtBQUtDLG9CQUp0QjtBQUtFLE1BQUEsYUFBYSxFQUFFLEtBQUtDO0FBTHRCLE9BT0dQLHFCQUFxQixJQUFJLEtBQUtRLGdCQUFMLEVBUDVCLEVBUUdQLG9CQUFvQixJQUFJLEtBQUtRLGVBQUwsRUFSM0IsRUFTR04sT0FBTyxDQUFDTyxHQUFSLENBQVksS0FBS0MsY0FBakIsQ0FUSCxFQVVHVCxVQUFVLElBQUksb0JBQUMsVUFBRCxPQVZqQixDQURGO0FBY0QsRzs7O0VBbkkrQjdDLEtBQUssQ0FBQ3VELGE7O1NBQW5CL0IsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTb3J0YWJsZUhhbmRsZSB9IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtY2hlY2tib3gnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWljb25zJztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9jb2x1bW4uY29tcG9uZW50JztcblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodH1weDtcbiAgYm9yZGVyLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMuaXNJdGVtQm9yZGVyVmlzaWJsZSA/IGAxcHggc29saWQgJHtwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTZ9YCA6ICdub25lJyl9O1xuICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gKHByb3BzLnNlbGVjdGVkID8gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk1IDogcHJvcHMudGhlbWUuY29sb3JzLndoaXRlKX07XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk0fTtcbiAgfVxuICB1c2VyLXNlbGVjdDogbm9uZTtcbmA7XG5cbmNvbnN0IERlZmF1bHRDZWxsQ29udGFpbmVyID0gc3R5bGVkLnNwYW5gXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogJHtwcm9wcyA9PiAoIXByb3BzLmluc2lkZVRvb2x0aXAgPyAnbm93cmFwJyA6ICdub3JtYWwnKX07XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuXG5jb25zdCBIYW5kbGVJY29uID0gc3R5bGVkKEljb24pYFxuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNHJlbTtcbmA7XG5cbmNvbnN0IERyYWdIYW5kbGUgPSBTb3J0YWJsZUhhbmRsZSgoKSA9PiA8SGFuZGxlSWNvbiB0eXBlPVwiaW5kaWNhdG9yXCIgbmFtZT1cImRyYWdnaW5nQXJyb3dzXCIgLz4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpdGVtOiBQcm9wVHlwZXMuc2hhcGUoe30pLmlzUmVxdWlyZWQsXG4gICAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaXNJbmRleENvbHVtblZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNJdGVtQm9yZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuICAgIGlzU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzU29ydGFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgb25TZWxlY3RDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Sb3dDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblJvd0RvdWJsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUm93Q29udGV4dE1lbnU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH1cblxuICBoYW5kbGVSb3dDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpdGVtLFxuICAgICAgcm93SW5kZXgsXG4gICAgICBvblJvd0NsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uUm93Q2xpY2soaXRlbSwgcm93SW5kZXgpO1xuICB9XG5cbiAgaGFuZGxlUm93RG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbSxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgb25Sb3dEb3VibGVDbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBvblJvd0RvdWJsZUNsaWNrKGl0ZW0sIHJvd0luZGV4KTtcbiAgfVxuXG4gIGhhbmRsZU9uQ29udGV4dE1lbnUgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGl0ZW0sXG4gICAgICByb3dJbmRleCxcbiAgICAgIG9uUm93Q29udGV4dE1lbnUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgb25Sb3dDb250ZXh0TWVudShpdGVtLCByb3dJbmRleCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgcmVuZGVyU2VsZWN0Q2VsbCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGlzU2VsZWN0ZWQsXG4gICAgICBvblNlbGVjdENoYW5nZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbHVtblxuICAgICAgICBpZD17YCR7aWR9LWNvbC1pbmRleGB9XG4gICAgICAgIHdpZHRoPXszNX1cbiAgICAgICAgYWxpZ25tZW50PVwiZmxleC1zdGFydFwiXG4gICAgICA+XG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIGlkPXtgJHtpZH0tc2VsZWN0aXRlbWB9XG4gICAgICAgICAgY2hlY2tlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbHVtbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVySW5kZXhDZWxsID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgcm93SW5kZXgsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgaWQ9e2Ake2lkfS1jb2wtaW5kZXhgfVxuICAgICAgICB3aWR0aD17MzV9XG4gICAgICAgIGFsaWdubWVudD1cImZsZXgtc3RhcnRcIlxuICAgICAgPlxuICAgICAgICB7cm93SW5kZXggKyAxfVxuICAgICAgPC9Db2x1bW4+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1DZWxsID0gKGNvbHVtbiwgaWR4KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpdGVtLFxuICAgICAgcm93SW5kZXgsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qga2V5ID0gY29sdW1uLnZhbHVlS2V5IHx8IGlkeDtcbiAgICBsZXQgY2VsbCA9IG51bGw7XG4gICAgaWYgKHR5cGVvZiBjb2x1bW4ucmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjZWxsID0gY29sdW1uLnJlbmRlcihpdGVtLCByb3dJbmRleCk7XG4gICAgfSBlbHNlIGlmIChjb2x1bW4udmFsdWVLZXkpIHtcbiAgICAgIGNlbGwgPSA8RGVmYXVsdENlbGxDb250YWluZXI+e2l0ZW1bY29sdW1uLnZhbHVlS2V5XX08L0RlZmF1bHRDZWxsQ29udGFpbmVyPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgaWQ9e2Ake2lkfS1jb2wtJHtrZXl9YH1cbiAgICAgICAga2V5PXtrZXl9XG4gICAgICAgIHdpZHRoPXtjb2x1bW4ud2lkdGggfHwgMjAwfVxuICAgICAgICBhbGlnbm1lbnQ9e2NvbHVtbi5hbGlnbm1lbnQgfHwgJ2ZsZXgtc3RhcnQnfVxuICAgICAgPlxuICAgICAgICB7Y2VsbH1cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNJbmRleENvbHVtblZpc2libGUsXG4gICAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlLFxuICAgICAgaXNTb3J0YWJsZSxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Um93XG4gICAgICAgIGhlaWdodD17aXRlbUhlaWdodH1cbiAgICAgICAgaXNJdGVtQm9yZGVyVmlzaWJsZT17aXNJdGVtQm9yZGVyVmlzaWJsZX1cbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSb3dDbGlja31cbiAgICAgICAgb25Eb3VibGVDbGljaz17dGhpcy5oYW5kbGVSb3dEb3VibGVDbGlja31cbiAgICAgICAgb25Db250ZXh0TWVudT17dGhpcy5oYW5kbGVPbkNvbnRleHRNZW51fVxuICAgICAgPlxuICAgICAgICB7aXNTZWxlY3RDb2x1bW5WaXNpYmxlICYmIHRoaXMucmVuZGVyU2VsZWN0Q2VsbCgpfVxuICAgICAgICB7aXNJbmRleENvbHVtblZpc2libGUgJiYgdGhpcy5yZW5kZXJJbmRleENlbGwoKX1cbiAgICAgICAge2NvbHVtbnMubWFwKHRoaXMucmVuZGVySXRlbUNlbGwpfVxuICAgICAgICB7aXNTb3J0YWJsZSAmJiA8RHJhZ0hhbmRsZSAvPn1cbiAgICAgIDwvUm93PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==