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
      onDoubleClick: this.handleRowDoubleClick,
      onContextMenu: this.handleOnContextMenu
    }, isSelectColumnVisible && this.renderSelectCell(), isIndexColumnVisible && this.renderIndexCell(), columns.map(this.renderItemCell), isSortable && _react["default"].createElement(DragHandle, null));
  };

  return List;
}(_react["default"].PureComponent);

exports["default"] = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSb3ciLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImhlaWdodCIsImlzSXRlbUJvcmRlclZpc2libGUiLCJ0aGVtZSIsImNvbG9ycyIsImdyZXk2Iiwic2VsZWN0ZWQiLCJncmV5NSIsIndoaXRlIiwiZ3JleTQiLCJEZWZhdWx0Q2VsbENvbnRhaW5lciIsInNwYW4iLCJpbnNpZGVUb29sdGlwIiwiSGFuZGxlSWNvbiIsIkljb24iLCJEcmFnSGFuZGxlIiwiTGlzdCIsIml0ZW0iLCJyb3dJbmRleCIsIm9uUm93Q2xpY2siLCJvblJvd0RvdWJsZUNsaWNrIiwiZSIsIm9uUm93Q29udGV4dE1lbnUiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwiaXNTZWxlY3RlZCIsIm9uU2VsZWN0Q2hhbmdlIiwiY29sdW1uIiwiaWR4Iiwia2V5IiwidmFsdWVLZXkiLCJjZWxsIiwicmVuZGVyIiwid2lkdGgiLCJhbGlnbm1lbnQiLCJpc1NlbGVjdENvbHVtblZpc2libGUiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImlzU29ydGFibGUiLCJjb2x1bW5zIiwiaXRlbUhlaWdodCIsImhhbmRsZVJvd0NsaWNrIiwiaGFuZGxlUm93RG91YmxlQ2xpY2siLCJoYW5kbGVPbkNvbnRleHRNZW51IiwicmVuZGVyU2VsZWN0Q2VsbCIsInJlbmRlckluZGV4Q2VsbCIsIm1hcCIsInJlbmRlckl0ZW1DZWxsIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUVHLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE1BQVY7QUFBQSxDQUZSLEVBR1UsVUFBQUQsS0FBSztBQUFB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SztBQUFBLFFBTUxDLE9BTkssZ0JBTUxBLE9BTks7QUFBQSxRQU9MQyxVQVBLLGdCQU9MQSxVQVBLO0FBU1AsV0FDRSxnQ0FBQyxHQUFEO0FBQ0UsTUFBQSxNQUFNLEVBQUVBLFVBRFY7QUFFRSxNQUFBLG1CQUFtQixFQUFFckMsbUJBRnZCO0FBR0UsTUFBQSxPQUFPLEVBQUUsS0FBS3NDLGNBSGhCO0FBSUUsTUFBQSxhQUFhLEVBQUUsS0FBS0Msb0JBSnRCO0FBS0UsTUFBQSxhQUFhLEVBQUUsS0FBS0M7QUFMdEIsT0FPR1AscUJBQXFCLElBQUksS0FBS1EsZ0JBQUwsRUFQNUIsRUFRR1Asb0JBQW9CLElBQUksS0FBS1EsZUFBTCxFQVIzQixFQVNHTixPQUFPLENBQUNPLEdBQVIsQ0FBWSxLQUFLQyxjQUFqQixDQVRILEVBVUdULFVBQVUsSUFBSSxnQ0FBQyxVQUFELE9BVmpCLENBREY7QUFjRCxHOzs7RUFuSStCVSxrQkFBTUMsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTb3J0YWJsZUhhbmRsZSB9IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtY2hlY2tib3gnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWljb25zJztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9jb2x1bW4uY29tcG9uZW50JztcblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodH1weDtcbiAgYm9yZGVyLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMuaXNJdGVtQm9yZGVyVmlzaWJsZSA/IGAxcHggc29saWQgJHtwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTZ9YCA6ICdub25lJyl9O1xuICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gKHByb3BzLnNlbGVjdGVkID8gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk1IDogcHJvcHMudGhlbWUuY29sb3JzLndoaXRlKX07XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk0fTtcbiAgfVxuICB1c2VyLXNlbGVjdDogbm9uZTtcbmA7XG5cbmNvbnN0IERlZmF1bHRDZWxsQ29udGFpbmVyID0gc3R5bGVkLnNwYW5gXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogJHtwcm9wcyA9PiAoIXByb3BzLmluc2lkZVRvb2x0aXAgPyAnbm93cmFwJyA6ICdub3JtYWwnKX07XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuXG5jb25zdCBIYW5kbGVJY29uID0gc3R5bGVkKEljb24pYFxuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNHJlbTtcbmA7XG5cbmNvbnN0IERyYWdIYW5kbGUgPSBTb3J0YWJsZUhhbmRsZSgoKSA9PiA8SGFuZGxlSWNvbiB0eXBlPVwiaW5kaWNhdG9yXCIgbmFtZT1cImRyYWdnaW5nQXJyb3dzXCIgLz4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpdGVtOiBQcm9wVHlwZXMuc2hhcGUoe30pLmlzUmVxdWlyZWQsXG4gICAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaXNJbmRleENvbHVtblZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNJdGVtQm9yZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuICAgIGlzU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzU29ydGFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgb25TZWxlY3RDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Sb3dDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblJvd0RvdWJsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUm93Q29udGV4dE1lbnU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH1cblxuICBoYW5kbGVSb3dDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpdGVtLFxuICAgICAgcm93SW5kZXgsXG4gICAgICBvblJvd0NsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uUm93Q2xpY2soaXRlbSwgcm93SW5kZXgpO1xuICB9XG5cbiAgaGFuZGxlUm93RG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbSxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgb25Sb3dEb3VibGVDbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBvblJvd0RvdWJsZUNsaWNrKGl0ZW0sIHJvd0luZGV4KTtcbiAgfVxuXG4gIGhhbmRsZU9uQ29udGV4dE1lbnUgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGl0ZW0sXG4gICAgICByb3dJbmRleCxcbiAgICAgIG9uUm93Q29udGV4dE1lbnUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgb25Sb3dDb250ZXh0TWVudShpdGVtLCByb3dJbmRleCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgcmVuZGVyU2VsZWN0Q2VsbCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGlzU2VsZWN0ZWQsXG4gICAgICBvblNlbGVjdENoYW5nZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbHVtblxuICAgICAgICBpZD17YCR7aWR9LWNvbC1pbmRleGB9XG4gICAgICAgIHdpZHRoPXszNX1cbiAgICAgICAgYWxpZ25tZW50PVwiZmxleC1zdGFydFwiXG4gICAgICA+XG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIGlkPXtgJHtpZH0tc2VsZWN0aXRlbWB9XG4gICAgICAgICAgY2hlY2tlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbHVtbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVySW5kZXhDZWxsID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgcm93SW5kZXgsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgaWQ9e2Ake2lkfS1jb2wtaW5kZXhgfVxuICAgICAgICB3aWR0aD17MzV9XG4gICAgICAgIGFsaWdubWVudD1cImZsZXgtc3RhcnRcIlxuICAgICAgPlxuICAgICAgICB7cm93SW5kZXggKyAxfVxuICAgICAgPC9Db2x1bW4+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1DZWxsID0gKGNvbHVtbiwgaWR4KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpdGVtLFxuICAgICAgcm93SW5kZXgsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qga2V5ID0gY29sdW1uLnZhbHVlS2V5IHx8IGlkeDtcbiAgICBsZXQgY2VsbCA9IG51bGw7XG4gICAgaWYgKHR5cGVvZiBjb2x1bW4ucmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjZWxsID0gY29sdW1uLnJlbmRlcihpdGVtLCByb3dJbmRleCk7XG4gICAgfSBlbHNlIGlmIChjb2x1bW4udmFsdWVLZXkpIHtcbiAgICAgIGNlbGwgPSA8RGVmYXVsdENlbGxDb250YWluZXI+e2l0ZW1bY29sdW1uLnZhbHVlS2V5XX08L0RlZmF1bHRDZWxsQ29udGFpbmVyPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgaWQ9e2Ake2lkfS1jb2wtJHtrZXl9YH1cbiAgICAgICAga2V5PXtrZXl9XG4gICAgICAgIHdpZHRoPXtjb2x1bW4ud2lkdGggfHwgMjAwfVxuICAgICAgICBhbGlnbm1lbnQ9e2NvbHVtbi5hbGlnbm1lbnQgfHwgJ2ZsZXgtc3RhcnQnfVxuICAgICAgPlxuICAgICAgICB7Y2VsbH1cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNJbmRleENvbHVtblZpc2libGUsXG4gICAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlLFxuICAgICAgaXNTb3J0YWJsZSxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Um93XG4gICAgICAgIGhlaWdodD17aXRlbUhlaWdodH1cbiAgICAgICAgaXNJdGVtQm9yZGVyVmlzaWJsZT17aXNJdGVtQm9yZGVyVmlzaWJsZX1cbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSb3dDbGlja31cbiAgICAgICAgb25Eb3VibGVDbGljaz17dGhpcy5oYW5kbGVSb3dEb3VibGVDbGlja31cbiAgICAgICAgb25Db250ZXh0TWVudT17dGhpcy5oYW5kbGVPbkNvbnRleHRNZW51fVxuICAgICAgPlxuICAgICAgICB7aXNTZWxlY3RDb2x1bW5WaXNpYmxlICYmIHRoaXMucmVuZGVyU2VsZWN0Q2VsbCgpfVxuICAgICAgICB7aXNJbmRleENvbHVtblZpc2libGUgJiYgdGhpcy5yZW5kZXJJbmRleENlbGwoKX1cbiAgICAgICAge2NvbHVtbnMubWFwKHRoaXMucmVuZGVySXRlbUNlbGwpfVxuICAgICAgICB7aXNTb3J0YWJsZSAmJiA8RHJhZ0hhbmRsZSAvPn1cbiAgICAgIDwvUm93PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==