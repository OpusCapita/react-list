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
  return props.selected || props.isHighlighted ? props.theme.colors.grey5 : props.theme.colors.white;
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
      var _this$props6 = _this.props,
          id = _this$props6.id,
          rowIndex = _this$props6.rowIndex;
      return _react["default"].createElement(_column["default"], {
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
    var _this$props8 = this.props,
        isSelectColumnVisible = _this$props8.isSelectColumnVisible,
        isIndexColumnVisible = _this$props8.isIndexColumnVisible,
        isItemBorderVisible = _this$props8.isItemBorderVisible,
        isSortable = _this$props8.isSortable,
        columns = _this$props8.columns,
        itemHeight = _this$props8.itemHeight;
    return _react["default"].createElement(Row, {
      height: itemHeight,
      isItemBorderVisible: isItemBorderVisible,
      onClick: this.handleRowClick,
      onDoubleClick: this.handleRowDoubleClick,
      onContextMenu: this.handleOnContextMenu,
      isHighlighted: this.isRowHighlighted()
    }, isSelectColumnVisible && this.renderSelectCell(), isIndexColumnVisible && this.renderIndexCell(), columns.map(this.renderItemCell), isSortable && _react["default"].createElement(DragHandle, null));
  };

  return List;
}(_react["default"].PureComponent);

exports["default"] = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSb3ciLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImhlaWdodCIsImlzSXRlbUJvcmRlclZpc2libGUiLCJ0aGVtZSIsImNvbG9ycyIsImdyZXk2Iiwic2VsZWN0ZWQiLCJpc0hpZ2hsaWdodGVkIiwiZ3JleTUiLCJ3aGl0ZSIsImdyZXk0IiwiRGVmYXVsdENlbGxDb250YWluZXIiLCJzcGFuIiwiaW5zaWRlVG9vbHRpcCIsIkhhbmRsZUljb24iLCJJY29uIiwiRHJhZ0hhbmRsZSIsIkxpc3QiLCJpdGVtIiwicm93SW5kZXgiLCJvblJvd0NsaWNrIiwib25Sb3dEb3VibGVDbGljayIsImUiLCJvblJvd0NvbnRleHRNZW51IiwicHJldmVudERlZmF1bHQiLCJoaWdobGlnaHRlZEl0ZW1zIiwiaWRLZXkiLCJpbmNsdWRlcyIsImlkIiwiaXNTZWxlY3RlZCIsIm9uU2VsZWN0Q2hhbmdlIiwiY29sdW1uIiwiaWR4Iiwia2V5IiwidmFsdWVLZXkiLCJjZWxsIiwicmVuZGVyIiwid2lkdGgiLCJhbGlnbm1lbnQiLCJpc1NlbGVjdENvbHVtblZpc2libGUiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImlzU29ydGFibGUiLCJjb2x1bW5zIiwiaXRlbUhlaWdodCIsImhhbmRsZVJvd0NsaWNrIiwiaGFuZGxlUm93RG91YmxlQ2xpY2siLCJoYW5kbGVPbkNvbnRleHRNZW51IiwiaXNSb3dIaWdobGlnaHRlZCIsInJlbmRlclNlbGVjdENlbGwiLCJyZW5kZXJJbmRleENlbGwiLCJtYXAiLCJyZW5kZXJJdGVtQ2VsbCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHQyw2QkFBT0MsR0FBVixv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RUEsR0FGUDtBQUdFLFFBQUEsS0FBSyxFQUFFRixNQUFNLENBQUNNLEtBQVAsSUFBZ0IsR0FIekI7QUFJRSxRQUFBLFNBQVMsRUFBRU4sTUFBTSxDQUFDTyxTQUFQLElBQW9CO0FBSmpDLFNBTUdILElBTkgsQ0FERjtBQVVELEs7Ozs7Ozs7U0FFREMsTSxHQUFBLGtCQUFTO0FBQUEsdUJBUUgsS0FBS3BDLEtBUkY7QUFBQSxRQUVMdUMscUJBRkssZ0JBRUxBLHFCQUZLO0FBQUEsUUFHTEMsb0JBSEssZ0JBR0xBLG9CQUhLO0FBQUEsUUFJTHRDLG1CQUpLLGdCQUlMQSxtQkFKSztBQUFBLFFBS0x1QyxVQUxLLGdCQUtMQSxVQUxLO0FBQUEsUUFNTEMsT0FOSyxnQkFNTEEsT0FOSztBQUFBLFFBT0xDLFVBUEssZ0JBT0xBLFVBUEs7QUFTUCxXQUNFLGdDQUFDLEdBQUQ7QUFDRSxNQUFBLE1BQU0sRUFBRUEsVUFEVjtBQUVFLE1BQUEsbUJBQW1CLEVBQUV6QyxtQkFGdkI7QUFHRSxNQUFBLE9BQU8sRUFBRSxLQUFLMEMsY0FIaEI7QUFJRSxNQUFBLGFBQWEsRUFBRSxLQUFLQyxvQkFKdEI7QUFLRSxNQUFBLGFBQWEsRUFBRSxLQUFLQyxtQkFMdEI7QUFNRSxNQUFBLGFBQWEsRUFBRSxLQUFLQyxnQkFBTDtBQU5qQixPQVFHUixxQkFBcUIsSUFBSSxLQUFLUyxnQkFBTCxFQVI1QixFQVNHUixvQkFBb0IsSUFBSSxLQUFLUyxlQUFMLEVBVDNCLEVBVUdQLE9BQU8sQ0FBQ1EsR0FBUixDQUFZLEtBQUtDLGNBQWpCLENBVkgsRUFXR1YsVUFBVSxJQUFJLGdDQUFDLFVBQUQsT0FYakIsQ0FERjtBQWVELEc7OztFQTlJK0JXLGtCQUFNQyxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IFNvcnRhYmxlSGFuZGxlIH0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1jaGVja2JveCc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL2NvbHVtbi5jb21wb25lbnQnO1xuXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xuICBib3JkZXItYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5pc0l0ZW1Cb3JkZXJWaXNpYmxlID8gYDFweCBzb2xpZCAke3Byb3BzLnRoZW1lLmNvbG9ycy5ncmV5Nn1gIDogJ25vbmUnKX07XG4gIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiAocHJvcHMuc2VsZWN0ZWQgfHwgcHJvcHMuaXNIaWdobGlnaHRlZCA/IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NSA6IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZSl9O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NH07XG4gIH1cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5gO1xuXG5jb25zdCBEZWZhdWx0Q2VsbENvbnRhaW5lciA9IHN0eWxlZC5zcGFuYFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6ICR7cHJvcHMgPT4gKCFwcm9wcy5pbnNpZGVUb29sdGlwID8gJ25vd3JhcCcgOiAnbm9ybWFsJyl9O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuY29uc3QgSGFuZGxlSWNvbiA9IHN0eWxlZChJY29uKWBcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDRyZW07XG5gO1xuXG5jb25zdCBEcmFnSGFuZGxlID0gU29ydGFibGVIYW5kbGUoKCkgPT4gPEhhbmRsZUljb24gdHlwZT1cImluZGljYXRvclwiIG5hbWU9XCJkcmFnZ2luZ0Fycm93c1wiIC8+KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaWRLZXk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpdGVtOiBQcm9wVHlwZXMuc2hhcGUoe30pLmlzUmVxdWlyZWQsXG4gICAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaXNJbmRleENvbHVtblZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNJdGVtQm9yZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuICAgIGlzU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzU29ydGFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgb25TZWxlY3RDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Sb3dDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblJvd0RvdWJsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUm93Q29udGV4dE1lbnU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaGlnaGxpZ2h0ZWRJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBdKSkuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGhhbmRsZVJvd0NsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGl0ZW0sXG4gICAgICByb3dJbmRleCxcbiAgICAgIG9uUm93Q2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgb25Sb3dDbGljayhpdGVtLCByb3dJbmRleCk7XG4gIH1cblxuICBoYW5kbGVSb3dEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpdGVtLFxuICAgICAgcm93SW5kZXgsXG4gICAgICBvblJvd0RvdWJsZUNsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uUm93RG91YmxlQ2xpY2soaXRlbSwgcm93SW5kZXgpO1xuICB9XG5cbiAgaGFuZGxlT25Db250ZXh0TWVudSA9IChlKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbSxcbiAgICAgIHJvd0luZGV4LFxuICAgICAgb25Sb3dDb250ZXh0TWVudSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBvblJvd0NvbnRleHRNZW51KGl0ZW0sIHJvd0luZGV4KTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBpc1Jvd0hpZ2hsaWdodGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaGlnaGxpZ2h0ZWRJdGVtcywgaXRlbSwgaWRLZXkgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIGhpZ2hsaWdodGVkSXRlbXMuaW5jbHVkZXMoaXRlbVtpZEtleV0pO1xuICB9XG5cbiAgcmVuZGVyU2VsZWN0Q2VsbCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGlzU2VsZWN0ZWQsXG4gICAgICBvblNlbGVjdENoYW5nZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbHVtblxuICAgICAgICBpZD17YCR7aWR9LWNvbC1pbmRleGB9XG4gICAgICAgIHdpZHRoPXszNX1cbiAgICAgICAgYWxpZ25tZW50PVwiZmxleC1zdGFydFwiXG4gICAgICA+XG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIGlkPXtgJHtpZH0tc2VsZWN0aXRlbWB9XG4gICAgICAgICAgY2hlY2tlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbHVtbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVySW5kZXhDZWxsID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgcm93SW5kZXgsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgaWQ9e2Ake2lkfS1jb2wtaW5kZXhgfVxuICAgICAgICB3aWR0aD17MzV9XG4gICAgICAgIGFsaWdubWVudD1cImZsZXgtc3RhcnRcIlxuICAgICAgPlxuICAgICAgICB7cm93SW5kZXggKyAxfVxuICAgICAgPC9Db2x1bW4+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1DZWxsID0gKGNvbHVtbiwgaWR4KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpdGVtLFxuICAgICAgcm93SW5kZXgsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qga2V5ID0gY29sdW1uLnZhbHVlS2V5IHx8IGlkeDtcbiAgICBsZXQgY2VsbCA9IG51bGw7XG4gICAgaWYgKHR5cGVvZiBjb2x1bW4ucmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjZWxsID0gY29sdW1uLnJlbmRlcihpdGVtLCByb3dJbmRleCk7XG4gICAgfSBlbHNlIGlmIChjb2x1bW4udmFsdWVLZXkpIHtcbiAgICAgIGNlbGwgPSA8RGVmYXVsdENlbGxDb250YWluZXI+e2l0ZW1bY29sdW1uLnZhbHVlS2V5XX08L0RlZmF1bHRDZWxsQ29udGFpbmVyPjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgaWQ9e2Ake2lkfS1jb2wtJHtrZXl9YH1cbiAgICAgICAga2V5PXtrZXl9XG4gICAgICAgIHdpZHRoPXtjb2x1bW4ud2lkdGggfHwgMjAwfVxuICAgICAgICBhbGlnbm1lbnQ9e2NvbHVtbi5hbGlnbm1lbnQgfHwgJ2ZsZXgtc3RhcnQnfVxuICAgICAgPlxuICAgICAgICB7Y2VsbH1cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNJbmRleENvbHVtblZpc2libGUsXG4gICAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlLFxuICAgICAgaXNTb3J0YWJsZSxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Um93XG4gICAgICAgIGhlaWdodD17aXRlbUhlaWdodH1cbiAgICAgICAgaXNJdGVtQm9yZGVyVmlzaWJsZT17aXNJdGVtQm9yZGVyVmlzaWJsZX1cbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSb3dDbGlja31cbiAgICAgICAgb25Eb3VibGVDbGljaz17dGhpcy5oYW5kbGVSb3dEb3VibGVDbGlja31cbiAgICAgICAgb25Db250ZXh0TWVudT17dGhpcy5oYW5kbGVPbkNvbnRleHRNZW51fVxuICAgICAgICBpc0hpZ2hsaWdodGVkPXt0aGlzLmlzUm93SGlnaGxpZ2h0ZWQoKX1cbiAgICAgID5cbiAgICAgICAge2lzU2VsZWN0Q29sdW1uVmlzaWJsZSAmJiB0aGlzLnJlbmRlclNlbGVjdENlbGwoKX1cbiAgICAgICAge2lzSW5kZXhDb2x1bW5WaXNpYmxlICYmIHRoaXMucmVuZGVySW5kZXhDZWxsKCl9XG4gICAgICAgIHtjb2x1bW5zLm1hcCh0aGlzLnJlbmRlckl0ZW1DZWxsKX1cbiAgICAgICAge2lzU29ydGFibGUgJiYgPERyYWdIYW5kbGUgLz59XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9XG59XG4iXX0=