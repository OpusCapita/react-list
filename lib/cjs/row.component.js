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
      onClick: this.handleOnClick,
      onDoubleClick: this.handleOnDoubleClick,
      onContextMenu: this.handleOnContextMenu
    }, isSelectColumnVisible && this.renderSelectCell(), isIndexColumnVisible && this.renderIndexCell(), columns.map(this.renderItemCell), isSortable && _react["default"].createElement(DragHandle, null));
  };

  return List;
}(_react["default"].PureComponent);

exports["default"] = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSb3ciLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImhlaWdodCIsImlzSXRlbUJvcmRlclZpc2libGUiLCJ0aGVtZSIsImNvbG9ycyIsImdyZXk2Iiwic2VsZWN0ZWQiLCJncmV5NSIsIndoaXRlIiwiZ3JleTQiLCJEZWZhdWx0Q2VsbENvbnRhaW5lciIsInNwYW4iLCJpbnNpZGVUb29sdGlwIiwiSGFuZGxlSWNvbiIsIkljb24iLCJEcmFnSGFuZGxlIiwiTGlzdCIsIml0ZW0iLCJyb3dJbmRleCIsIm9uUm93Q2xpY2siLCJvblJvd0RvdWJsZUNsaWNrIiwiZSIsIm9uUm93Q29udGV4dE1lbnUiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwiaXNTZWxlY3RlZCIsIm9uU2VsZWN0Q2hhbmdlIiwiY29sdW1uIiwiaWR4Iiwia2V5IiwidmFsdWVLZXkiLCJjZWxsIiwicmVuZGVyIiwid2lkdGgiLCJhbGlnbm1lbnQiLCJpc1NlbGVjdENvbHVtblZpc2libGUiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImlzU29ydGFibGUiLCJjb2x1bW5zIiwiaXRlbUhlaWdodCIsImhhbmRsZU9uQ2xpY2siLCJoYW5kbGVPbkRvdWJsZUNsaWNrIiwiaGFuZGxlT25Db250ZXh0TWVudSIsInJlbmRlclNlbGVjdENlbGwiLCJyZW5kZXJJbmRleENlbGwiLCJtYXAiLCJyZW5kZXJJdGVtQ2VsbCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHQyw2QkFBT0MsR0FBVixvQkFFRyxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxNQUFWO0FBQUEsQ0FGUixFQUdVLFVBQUFELEtBQUs7QUFBQSxT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QUFBQSxRQU1MQyxPQU5LLGdCQU1MQSxPQU5LO0FBQUEsUUFPTEMsVUFQSyxnQkFPTEEsVUFQSztBQVNQLFdBQ0UsZ0NBQUMsR0FBRDtBQUNFLE1BQUEsTUFBTSxFQUFFQSxVQURWO0FBRUUsTUFBQSxtQkFBbUIsRUFBRXJDLG1CQUZ2QjtBQUdFLE1BQUEsT0FBTyxFQUFFLEtBQUtzQyxhQUhoQjtBQUlFLE1BQUEsYUFBYSxFQUFFLEtBQUtDLG1CQUp0QjtBQUtFLE1BQUEsYUFBYSxFQUFFLEtBQUtDO0FBTHRCLE9BT0dQLHFCQUFxQixJQUFJLEtBQUtRLGdCQUFMLEVBUDVCLEVBUUdQLG9CQUFvQixJQUFJLEtBQUtRLGVBQUwsRUFSM0IsRUFTR04sT0FBTyxDQUFDTyxHQUFSLENBQVksS0FBS0MsY0FBakIsQ0FUSCxFQVVHVCxVQUFVLElBQUksZ0NBQUMsVUFBRCxPQVZqQixDQURGO0FBY0QsRzs7O0VBbkkrQlUsa0JBQU1DLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgU29ydGFibGVIYW5kbGUgfSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWNoZWNrYm94JztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1pY29ucyc7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4vY29sdW1uLmNvbXBvbmVudCc7XG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9cHg7XG4gIGJvcmRlci1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLmlzSXRlbUJvcmRlclZpc2libGUgPyBgMXB4IHNvbGlkICR7cHJvcHMudGhlbWUuY29sb3JzLmdyZXk2fWAgOiAnbm9uZScpfTtcbiAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IChwcm9wcy5zZWxlY3RlZCA/IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NSA6IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZSl9O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NH07XG4gIH1cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5gO1xuXG5jb25zdCBEZWZhdWx0Q2VsbENvbnRhaW5lciA9IHN0eWxlZC5zcGFuYFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6ICR7cHJvcHMgPT4gKCFwcm9wcy5pbnNpZGVUb29sdGlwID8gJ25vd3JhcCcgOiAnbm9ybWFsJyl9O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuY29uc3QgSGFuZGxlSWNvbiA9IHN0eWxlZChJY29uKWBcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDRyZW07XG5gO1xuXG5jb25zdCBEcmFnSGFuZGxlID0gU29ydGFibGVIYW5kbGUoKCkgPT4gPEhhbmRsZUljb24gdHlwZT1cImluZGljYXRvclwiIG5hbWU9XCJkcmFnZ2luZ0Fycm93c1wiIC8+KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaXRlbTogUHJvcFR5cGVzLnNoYXBlKHt9KS5pc1JlcXVpcmVkLFxuICAgIGl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzSXRlbUJvcmRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcbiAgICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc1NvcnRhYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIG9uU2VsZWN0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUm93Q2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Sb3dEb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblJvd0NvbnRleHRNZW51OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9XG5cbiAgaGFuZGxlUm93Q2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbSxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgb25Sb3dDbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBvblJvd0NsaWNrKGl0ZW0sIHJvd0luZGV4KTtcbiAgfVxuXG4gIGhhbmRsZVJvd0RvdWJsZUNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGl0ZW0sXG4gICAgICByb3dJbmRleCxcbiAgICAgIG9uUm93RG91YmxlQ2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgb25Sb3dEb3VibGVDbGljayhpdGVtLCByb3dJbmRleCk7XG4gIH1cblxuICBoYW5kbGVPbkNvbnRleHRNZW51ID0gKGUpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpdGVtLFxuICAgICAgcm93SW5kZXgsXG4gICAgICBvblJvd0NvbnRleHRNZW51LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uUm93Q29udGV4dE1lbnUoaXRlbSwgcm93SW5kZXgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHJlbmRlclNlbGVjdENlbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpc1NlbGVjdGVkLFxuICAgICAgb25TZWxlY3RDaGFuZ2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgaWQ9e2Ake2lkfS1jb2wtaW5kZXhgfVxuICAgICAgICB3aWR0aD17MzV9XG4gICAgICAgIGFsaWdubWVudD1cImZsZXgtc3RhcnRcIlxuICAgICAgPlxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICBpZD17YCR7aWR9LXNlbGVjdGl0ZW1gfVxuICAgICAgICAgIGNoZWNrZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9Db2x1bW4+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckluZGV4Q2VsbCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHJvd0luZGV4LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGlkPXtgJHtpZH0tY29sLWluZGV4YH1cbiAgICAgICAgd2lkdGg9ezM1fVxuICAgICAgICBhbGlnbm1lbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgID5cbiAgICAgICAge3Jvd0luZGV4ICsgMX1cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJJdGVtQ2VsbCA9IChjb2x1bW4sIGlkeCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXRlbSxcbiAgICAgIHJvd0luZGV4LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGtleSA9IGNvbHVtbi52YWx1ZUtleSB8fCBpZHg7XG4gICAgbGV0IGNlbGwgPSBudWxsO1xuICAgIGlmICh0eXBlb2YgY29sdW1uLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2VsbCA9IGNvbHVtbi5yZW5kZXIoaXRlbSwgcm93SW5kZXgpO1xuICAgIH0gZWxzZSBpZiAoY29sdW1uLnZhbHVlS2V5KSB7XG4gICAgICBjZWxsID0gPERlZmF1bHRDZWxsQ29udGFpbmVyPntpdGVtW2NvbHVtbi52YWx1ZUtleV19PC9EZWZhdWx0Q2VsbENvbnRhaW5lcj47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGlkPXtgJHtpZH0tY29sLSR7a2V5fWB9XG4gICAgICAgIGtleT17a2V5fVxuICAgICAgICB3aWR0aD17Y29sdW1uLndpZHRoIHx8IDIwMH1cbiAgICAgICAgYWxpZ25tZW50PXtjb2x1bW4uYWxpZ25tZW50IHx8ICdmbGV4LXN0YXJ0J31cbiAgICAgID5cbiAgICAgICAge2NlbGx9XG4gICAgICA8L0NvbHVtbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZSxcbiAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNJdGVtQm9yZGVyVmlzaWJsZSxcbiAgICAgIGlzU29ydGFibGUsXG4gICAgICBjb2x1bW5zLFxuICAgICAgaXRlbUhlaWdodCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJvd1xuICAgICAgICBoZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgIGlzSXRlbUJvcmRlclZpc2libGU9e2lzSXRlbUJvcmRlclZpc2libGV9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlT25DbGlja31cbiAgICAgICAgb25Eb3VibGVDbGljaz17dGhpcy5oYW5kbGVPbkRvdWJsZUNsaWNrfVxuICAgICAgICBvbkNvbnRleHRNZW51PXt0aGlzLmhhbmRsZU9uQ29udGV4dE1lbnV9XG4gICAgICA+XG4gICAgICAgIHtpc1NlbGVjdENvbHVtblZpc2libGUgJiYgdGhpcy5yZW5kZXJTZWxlY3RDZWxsKCl9XG4gICAgICAgIHtpc0luZGV4Q29sdW1uVmlzaWJsZSAmJiB0aGlzLnJlbmRlckluZGV4Q2VsbCgpfVxuICAgICAgICB7Y29sdW1ucy5tYXAodGhpcy5yZW5kZXJJdGVtQ2VsbCl9XG4gICAgICAgIHtpc1NvcnRhYmxlICYmIDxEcmFnSGFuZGxlIC8+fVxuICAgICAgPC9Sb3c+XG4gICAgKTtcbiAgfVxufVxuIl19