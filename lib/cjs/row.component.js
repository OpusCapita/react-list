"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSortableHoc = require("react-sortable-hoc");

var _reactCheckbox = _interopRequireDefault(require("@opuscapita/react-checkbox"));

var _reactIcons = require("@opuscapita/react-icons");

var _column = _interopRequireDefault(require("./column.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var Row = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.height;
}, function (props) {
  return props.isItemBorderVisible ? "1px solid " + props.theme.colors.grey6 : 'none';
}, function (props) {
  return props.selected ? props.theme.colors.grey5 : props.theme.colors.white;
}, function (props) {
  return props.theme.colors.grey4;
});

var DefaultCellContainer = _styledComponents["default"].span(_templateObject2(), function (props) {
  return !props.insideTooltip ? 'nowrap' : 'normal';
});

var HandleIcon = (0, _styledComponents["default"])(_reactIcons.Icon)(_templateObject3());
var DragHandle = (0, _reactSortableHoc.SortableHandle)(function () {
  return _react["default"].createElement(HandleIcon, {
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
      return _react["default"].createElement(_column["default"], {
        id: id + "-col-index",
        width: 35,
        alignment: "flex-start"
      }, _react["default"].createElement(_reactCheckbox["default"], {
        id: id + "-selectitem",
        checked: isSelected,
        onChange: onSelectChange
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderIndexCell", function () {
      var _this$props5 = _this.props,
          id = _this$props5.id,
          rowIndex = _this$props5.rowIndex;
      return _react["default"].createElement(_column["default"], {
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
        cell = _react["default"].createElement(DefaultCellContainer, null, item[column.valueKey]);
      }

      return _react["default"].createElement(_column["default"], {
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
    return _react["default"].createElement(Row, {
      height: itemHeight,
      isItemBorderVisible: isItemBorderVisible,
      onClick: this.handleRowClick,
      onDoubleClick: this.handleOnDoubleClick,
      onContextMenu: this.handleOnContextMenu
    }, isSelectColumnVisible && this.renderSelectCell(), isIndexColumnVisible && this.renderIndexCell(), columns.map(this.renderItemCell), isSortable && _react["default"].createElement(DragHandle, null));
  };

  return List;
}(_react["default"].PureComponent);

exports["default"] = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSb3ciLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImhlaWdodCIsImlzSXRlbUJvcmRlclZpc2libGUiLCJ0aGVtZSIsImNvbG9ycyIsImdyZXk2Iiwic2VsZWN0ZWQiLCJncmV5NSIsIndoaXRlIiwiZ3JleTQiLCJEZWZhdWx0Q2VsbENvbnRhaW5lciIsInNwYW4iLCJpbnNpZGVUb29sdGlwIiwiSGFuZGxlSWNvbiIsIkljb24iLCJEcmFnSGFuZGxlIiwiTGlzdCIsIml0ZW0iLCJyb3dJbmRleCIsIm9uUm93Q2xpY2siLCJvblJvd0RvdWJsZUNsaWNrIiwiZSIsIm9uUm93Q29udGV4dE1lbnUiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwiaXNTZWxlY3RlZCIsIm9uU2VsZWN0Q2hhbmdlIiwiY29sdW1uIiwiaWR4Iiwia2V5IiwidmFsdWVLZXkiLCJjZWxsIiwicmVuZGVyIiwid2lkdGgiLCJhbGlnbm1lbnQiLCJpc1NlbGVjdENvbHVtblZpc2libGUiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImlzU29ydGFibGUiLCJjb2x1bW5zIiwiaXRlbUhlaWdodCIsImhhbmRsZVJvd0NsaWNrIiwiaGFuZGxlT25Eb3VibGVDbGljayIsImhhbmRsZU9uQ29udGV4dE1lbnUiLCJyZW5kZXJTZWxlY3RDZWxsIiwicmVuZGVySW5kZXhDZWxsIiwibWFwIiwicmVuZGVySXRlbUNlbGwiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEdBQUcsR0FBR0MsNkJBQU9DLEdBQVYsb0JBRUcsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsTUFBVjtBQUFBLENBRlIsRUFHVSxVQUFBRCxLQUFLO0FBQUEs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O0FBQUEsUUFNTEMsT0FOSyxnQkFNTEEsT0FOSztBQUFBLFFBT0xDLFVBUEssZ0JBT0xBLFVBUEs7QUFTUCxXQUNFLGdDQUFDLEdBQUQ7QUFDRSxNQUFBLE1BQU0sRUFBRUEsVUFEVjtBQUVFLE1BQUEsbUJBQW1CLEVBQUVyQyxtQkFGdkI7QUFHRSxNQUFBLE9BQU8sRUFBRSxLQUFLc0MsY0FIaEI7QUFJRSxNQUFBLGFBQWEsRUFBRSxLQUFLQyxtQkFKdEI7QUFLRSxNQUFBLGFBQWEsRUFBRSxLQUFLQztBQUx0QixPQU9HUCxxQkFBcUIsSUFBSSxLQUFLUSxnQkFBTCxFQVA1QixFQVFHUCxvQkFBb0IsSUFBSSxLQUFLUSxlQUFMLEVBUjNCLEVBU0dOLE9BQU8sQ0FBQ08sR0FBUixDQUFZLEtBQUtDLGNBQWpCLENBVEgsRUFVR1QsVUFBVSxJQUFJLGdDQUFDLFVBQUQsT0FWakIsQ0FERjtBQWNELEc7OztFQW5JK0JVLGtCQUFNQyxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IFNvcnRhYmxlSGFuZGxlIH0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1jaGVja2JveCc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL2NvbHVtbi5jb21wb25lbnQnO1xuXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xuICBib3JkZXItYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5pc0l0ZW1Cb3JkZXJWaXNpYmxlID8gYDFweCBzb2xpZCAke3Byb3BzLnRoZW1lLmNvbG9ycy5ncmV5Nn1gIDogJ25vbmUnKX07XG4gIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiAocHJvcHMuc2VsZWN0ZWQgPyBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTUgOiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGUpfTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTR9O1xuICB9XG4gIHVzZXItc2VsZWN0OiBub25lO1xuYDtcblxuY29uc3QgRGVmYXVsdENlbGxDb250YWluZXIgPSBzdHlsZWQuc3BhbmBcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiAke3Byb3BzID0+ICghcHJvcHMuaW5zaWRlVG9vbHRpcCA/ICdub3dyYXAnIDogJ25vcm1hbCcpfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IEhhbmRsZUljb24gPSBzdHlsZWQoSWNvbilgXG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0cmVtO1xuYDtcblxuY29uc3QgRHJhZ0hhbmRsZSA9IFNvcnRhYmxlSGFuZGxlKCgpID0+IDxIYW5kbGVJY29uIHR5cGU9XCJpbmRpY2F0b3JcIiBuYW1lPVwiZHJhZ2dpbmdBcnJvd3NcIiAvPik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGl0ZW06IFByb3BUeXBlcy5zaGFwZSh7fSkuaXNSZXF1aXJlZCxcbiAgICBpdGVtSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgcm93SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBpc0luZGV4Q29sdW1uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG4gICAgaXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc1NlbGVjdENvbHVtblZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNTb3J0YWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBvblNlbGVjdENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblJvd0NsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUm93RG91YmxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Sb3dDb250ZXh0TWVudTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGhhbmRsZVJvd0NsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGl0ZW0sXG4gICAgICByb3dJbmRleCxcbiAgICAgIG9uUm93Q2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgb25Sb3dDbGljayhpdGVtLCByb3dJbmRleCk7XG4gIH1cblxuICBoYW5kbGVSb3dEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpdGVtLFxuICAgICAgcm93SW5kZXgsXG4gICAgICBvblJvd0RvdWJsZUNsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uUm93RG91YmxlQ2xpY2soaXRlbSwgcm93SW5kZXgpO1xuICB9XG5cbiAgaGFuZGxlT25Db250ZXh0TWVudSA9IChlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbSxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgb25Sb3dDb250ZXh0TWVudSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBvblJvd0NvbnRleHRNZW51KGl0ZW0sIHJvd0luZGV4KTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICByZW5kZXJTZWxlY3RDZWxsID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXNTZWxlY3RlZCxcbiAgICAgIG9uU2VsZWN0Q2hhbmdlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGlkPXtgJHtpZH0tY29sLWluZGV4YH1cbiAgICAgICAgd2lkdGg9ezM1fVxuICAgICAgICBhbGlnbm1lbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgID5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgaWQ9e2Ake2lkfS1zZWxlY3RpdGVtYH1cbiAgICAgICAgICBjaGVja2VkPXtpc1NlbGVjdGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdENoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJJbmRleENlbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICByb3dJbmRleCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbHVtblxuICAgICAgICBpZD17YCR7aWR9LWNvbC1pbmRleGB9XG4gICAgICAgIHdpZHRoPXszNX1cbiAgICAgICAgYWxpZ25tZW50PVwiZmxleC1zdGFydFwiXG4gICAgICA+XG4gICAgICAgIHtyb3dJbmRleCArIDF9XG4gICAgICA8L0NvbHVtbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVySXRlbUNlbGwgPSAoY29sdW1uLCBpZHgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGl0ZW0sXG4gICAgICByb3dJbmRleCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBrZXkgPSBjb2x1bW4udmFsdWVLZXkgfHwgaWR4O1xuICAgIGxldCBjZWxsID0gbnVsbDtcbiAgICBpZiAodHlwZW9mIGNvbHVtbi5yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNlbGwgPSBjb2x1bW4ucmVuZGVyKGl0ZW0sIHJvd0luZGV4KTtcbiAgICB9IGVsc2UgaWYgKGNvbHVtbi52YWx1ZUtleSkge1xuICAgICAgY2VsbCA9IDxEZWZhdWx0Q2VsbENvbnRhaW5lcj57aXRlbVtjb2x1bW4udmFsdWVLZXldfTwvRGVmYXVsdENlbGxDb250YWluZXI+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPENvbHVtblxuICAgICAgICBpZD17YCR7aWR9LWNvbC0ke2tleX1gfVxuICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgd2lkdGg9e2NvbHVtbi53aWR0aCB8fCAyMDB9XG4gICAgICAgIGFsaWdubWVudD17Y29sdW1uLmFsaWdubWVudCB8fCAnZmxleC1zdGFydCd9XG4gICAgICA+XG4gICAgICAgIHtjZWxsfVxuICAgICAgPC9Db2x1bW4+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc1NlbGVjdENvbHVtblZpc2libGUsXG4gICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZSxcbiAgICAgIGlzSXRlbUJvcmRlclZpc2libGUsXG4gICAgICBpc1NvcnRhYmxlLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3dcbiAgICAgICAgaGVpZ2h0PXtpdGVtSGVpZ2h0fVxuICAgICAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlPXtpc0l0ZW1Cb3JkZXJWaXNpYmxlfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJvd0NsaWNrfVxuICAgICAgICBvbkRvdWJsZUNsaWNrPXt0aGlzLmhhbmRsZU9uRG91YmxlQ2xpY2t9XG4gICAgICAgIG9uQ29udGV4dE1lbnU9e3RoaXMuaGFuZGxlT25Db250ZXh0TWVudX1cbiAgICAgID5cbiAgICAgICAge2lzU2VsZWN0Q29sdW1uVmlzaWJsZSAmJiB0aGlzLnJlbmRlclNlbGVjdENlbGwoKX1cbiAgICAgICAge2lzSW5kZXhDb2x1bW5WaXNpYmxlICYmIHRoaXMucmVuZGVySW5kZXhDZWxsKCl9XG4gICAgICAgIHtjb2x1bW5zLm1hcCh0aGlzLnJlbmRlckl0ZW1DZWxsKX1cbiAgICAgICAge2lzU29ydGFibGUgJiYgPERyYWdIYW5kbGUgLz59XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9XG59XG4iXX0=