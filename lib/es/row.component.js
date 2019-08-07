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
      onDoubleClick: this.handleOnDoubleClick,
      onContextMenu: this.handleOnContextMenu
    }, isSelectColumnVisible && this.renderSelectCell(), isIndexColumnVisible && this.renderIndexCell(), columns.map(this.renderItemCell), isSortable && React.createElement(DragHandle, null));
  };

  return List;
}(React.PureComponent);

export { List as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsIlNvcnRhYmxlSGFuZGxlIiwiQ2hlY2tib3giLCJJY29uIiwiQ29sdW1uIiwiUm93IiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJpc0l0ZW1Cb3JkZXJWaXNpYmxlIiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NiIsInNlbGVjdGVkIiwiZ3JleTUiLCJ3aGl0ZSIsImdyZXk0IiwiRGVmYXVsdENlbGxDb250YWluZXIiLCJzcGFuIiwiaW5zaWRlVG9vbHRpcCIsIkhhbmRsZUljb24iLCJEcmFnSGFuZGxlIiwiTGlzdCIsIml0ZW0iLCJyb3dJbmRleCIsIm9uUm93Q2xpY2siLCJvblJvd0RvdWJsZUNsaWNrIiwiZSIsIm9uUm93Q29udGV4dE1lbnUiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwiaXNTZWxlY3RlZCIsIm9uU2VsZWN0Q2hhbmdlIiwiY29sdW1uIiwiaWR4Iiwia2V5IiwidmFsdWVLZXkiLCJjZWxsIiwicmVuZGVyIiwid2lkdGgiLCJhbGlnbm1lbnQiLCJpc1NlbGVjdENvbHVtblZpc2libGUiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImlzU29ydGFibGUiLCJjb2x1bW5zIiwiaXRlbUhlaWdodCIsImhhbmRsZVJvd0NsaWNrIiwiaGFuZGxlT25Eb3VibGVDbGljayIsImhhbmRsZU9uQ29udGV4dE1lbnUiLCJyZW5kZXJTZWxlY3RDZWxsIiwicmVuZGVySW5kZXhDZWxsIiwibWFwIiwicmVuZGVySXRlbUNlbGwiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUFTQyxjQUFULFFBQStCLG9C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QU0sQ0FBQ08sU0FBUCxJQUFvQjtBQUpqQyxTQU1HSCxJQU5ILENBREY7QUFVRCxLOzs7Ozs7O1NBRURDLE0sR0FBQSxrQkFBUztBQUFBLHVCQVFILEtBQUsvQixLQVJGO0FBQUEsUUFFTGtDLHFCQUZLLGdCQUVMQSxxQkFGSztBQUFBLFFBR0xDLG9CQUhLLGdCQUdMQSxvQkFISztBQUFBLFFBSUxqQyxtQkFKSyxnQkFJTEEsbUJBSks7QUFBQSxRQUtMa0MsVUFMSyxnQkFLTEEsVUFMSztBQUFBLFFBTUxDLE9BTkssZ0JBTUxBLE9BTks7QUFBQSxRQU9MQyxVQVBLLGdCQU9MQSxVQVBLO0FBU1AsV0FDRSxvQkFBQyxHQUFEO0FBQ0UsTUFBQSxNQUFNLEVBQUVBLFVBRFY7QUFFRSxNQUFBLG1CQUFtQixFQUFFcEMsbUJBRnZCO0FBR0UsTUFBQSxPQUFPLEVBQUUsS0FBS3FDLGNBSGhCO0FBSUUsTUFBQSxhQUFhLEVBQUUsS0FBS0MsbUJBSnRCO0FBS0UsTUFBQSxhQUFhLEVBQUUsS0FBS0M7QUFMdEIsT0FPR1AscUJBQXFCLElBQUksS0FBS1EsZ0JBQUwsRUFQNUIsRUFRR1Asb0JBQW9CLElBQUksS0FBS1EsZUFBTCxFQVIzQixFQVNHTixPQUFPLENBQUNPLEdBQVIsQ0FBWSxLQUFLQyxjQUFqQixDQVRILEVBVUdULFVBQVUsSUFBSSxvQkFBQyxVQUFELE9BVmpCLENBREY7QUFjRCxHOzs7RUFuSStCN0MsS0FBSyxDQUFDdUQsYTs7U0FBbkIvQixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IFNvcnRhYmxlSGFuZGxlIH0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1jaGVja2JveCc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL2NvbHVtbi5jb21wb25lbnQnO1xuXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xuICBib3JkZXItYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5pc0l0ZW1Cb3JkZXJWaXNpYmxlID8gYDFweCBzb2xpZCAke3Byb3BzLnRoZW1lLmNvbG9ycy5ncmV5Nn1gIDogJ25vbmUnKX07XG4gIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiAocHJvcHMuc2VsZWN0ZWQgPyBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTUgOiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGUpfTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTR9O1xuICB9XG4gIHVzZXItc2VsZWN0OiBub25lO1xuYDtcblxuY29uc3QgRGVmYXVsdENlbGxDb250YWluZXIgPSBzdHlsZWQuc3BhbmBcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiAke3Byb3BzID0+ICghcHJvcHMuaW5zaWRlVG9vbHRpcCA/ICdub3dyYXAnIDogJ25vcm1hbCcpfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IEhhbmRsZUljb24gPSBzdHlsZWQoSWNvbilgXG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0cmVtO1xuYDtcblxuY29uc3QgRHJhZ0hhbmRsZSA9IFNvcnRhYmxlSGFuZGxlKCgpID0+IDxIYW5kbGVJY29uIHR5cGU9XCJpbmRpY2F0b3JcIiBuYW1lPVwiZHJhZ2dpbmdBcnJvd3NcIiAvPik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGl0ZW06IFByb3BUeXBlcy5zaGFwZSh7fSkuaXNSZXF1aXJlZCxcbiAgICBpdGVtSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgcm93SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBpc0luZGV4Q29sdW1uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG4gICAgaXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc1NlbGVjdENvbHVtblZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNTb3J0YWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBvblNlbGVjdENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblJvd0NsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUm93RG91YmxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Sb3dDb250ZXh0TWVudTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGhhbmRsZVJvd0NsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGl0ZW0sXG4gICAgICByb3dJbmRleCxcbiAgICAgIG9uUm93Q2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgb25Sb3dDbGljayhpdGVtLCByb3dJbmRleCk7XG4gIH1cblxuICBoYW5kbGVSb3dEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpdGVtLFxuICAgICAgcm93SW5kZXgsXG4gICAgICBvblJvd0RvdWJsZUNsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uUm93RG91YmxlQ2xpY2soaXRlbSwgcm93SW5kZXgpO1xuICB9XG5cbiAgaGFuZGxlT25Db250ZXh0TWVudSA9IChlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbSxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgb25Sb3dDb250ZXh0TWVudSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBvblJvd0NvbnRleHRNZW51KGl0ZW0sIHJvd0luZGV4KTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICByZW5kZXJTZWxlY3RDZWxsID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXNTZWxlY3RlZCxcbiAgICAgIG9uU2VsZWN0Q2hhbmdlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGlkPXtgJHtpZH0tY29sLWluZGV4YH1cbiAgICAgICAgd2lkdGg9ezM1fVxuICAgICAgICBhbGlnbm1lbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgID5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgaWQ9e2Ake2lkfS1zZWxlY3RpdGVtYH1cbiAgICAgICAgICBjaGVja2VkPXtpc1NlbGVjdGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdENoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJJbmRleENlbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICByb3dJbmRleCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbHVtblxuICAgICAgICBpZD17YCR7aWR9LWNvbC1pbmRleGB9XG4gICAgICAgIHdpZHRoPXszNX1cbiAgICAgICAgYWxpZ25tZW50PVwiZmxleC1zdGFydFwiXG4gICAgICA+XG4gICAgICAgIHtyb3dJbmRleCArIDF9XG4gICAgICA8L0NvbHVtbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVySXRlbUNlbGwgPSAoY29sdW1uLCBpZHgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGl0ZW0sXG4gICAgICByb3dJbmRleCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBrZXkgPSBjb2x1bW4udmFsdWVLZXkgfHwgaWR4O1xuICAgIGxldCBjZWxsID0gbnVsbDtcbiAgICBpZiAodHlwZW9mIGNvbHVtbi5yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNlbGwgPSBjb2x1bW4ucmVuZGVyKGl0ZW0sIHJvd0luZGV4KTtcbiAgICB9IGVsc2UgaWYgKGNvbHVtbi52YWx1ZUtleSkge1xuICAgICAgY2VsbCA9IDxEZWZhdWx0Q2VsbENvbnRhaW5lcj57aXRlbVtjb2x1bW4udmFsdWVLZXldfTwvRGVmYXVsdENlbGxDb250YWluZXI+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPENvbHVtblxuICAgICAgICBpZD17YCR7aWR9LWNvbC0ke2tleX1gfVxuICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgd2lkdGg9e2NvbHVtbi53aWR0aCB8fCAyMDB9XG4gICAgICAgIGFsaWdubWVudD17Y29sdW1uLmFsaWdubWVudCB8fCAnZmxleC1zdGFydCd9XG4gICAgICA+XG4gICAgICAgIHtjZWxsfVxuICAgICAgPC9Db2x1bW4+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc1NlbGVjdENvbHVtblZpc2libGUsXG4gICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZSxcbiAgICAgIGlzSXRlbUJvcmRlclZpc2libGUsXG4gICAgICBpc1NvcnRhYmxlLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3dcbiAgICAgICAgaGVpZ2h0PXtpdGVtSGVpZ2h0fVxuICAgICAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlPXtpc0l0ZW1Cb3JkZXJWaXNpYmxlfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJvd0NsaWNrfVxuICAgICAgICBvbkRvdWJsZUNsaWNrPXt0aGlzLmhhbmRsZU9uRG91YmxlQ2xpY2t9XG4gICAgICAgIG9uQ29udGV4dE1lbnU9e3RoaXMuaGFuZGxlT25Db250ZXh0TWVudX1cbiAgICAgID5cbiAgICAgICAge2lzU2VsZWN0Q29sdW1uVmlzaWJsZSAmJiB0aGlzLnJlbmRlclNlbGVjdENlbGwoKX1cbiAgICAgICAge2lzSW5kZXhDb2x1bW5WaXNpYmxlICYmIHRoaXMucmVuZGVySW5kZXhDZWxsKCl9XG4gICAgICAgIHtjb2x1bW5zLm1hcCh0aGlzLnJlbmRlckl0ZW1DZWxsKX1cbiAgICAgICAge2lzU29ydGFibGUgJiYgPERyYWdIYW5kbGUgLz59XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9XG59XG4iXX0=