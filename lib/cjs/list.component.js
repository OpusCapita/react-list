"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

var _responsiveListContainer = _interopRequireDefault(require("./responsive-list-container.component"));

var _header = _interopRequireDefault(require("./header.component"));

var _columnHeader = _interopRequireDefault(require("./column-header.component"));

var _row = _interopRequireDefault(require("./row.component"));

var _theme = require("./theme");

var _class, _class2, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  height: ", ";\n  width: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var ListContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.height === 'auto' ? '100%' : props.height + "px";
}, function (props) {
  return props.width === 'auto' ? '100%' : props.width + "px";
});

var List = (0, _styledComponents.withTheme)(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(List, _React$PureComponent);

  function List(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "handleRowClick", function (rowIndex, item) {
      var onRowClick = _this.props.onRowClick;
      onRowClick(rowIndex, item);
    });

    _defineProperty(_assertThisInitialized(_this), "handleRowDoubleClick", function (rowIndex, item) {
      var onRowDoubleClick = _this.props.onRowDoubleClick;
      onRowDoubleClick(rowIndex, item);
    });

    _defineProperty(_assertThisInitialized(_this), "handleRowRightClick", function (rowIndex, item) {
      var onRowRightClick = _this.props.onRowRightClick;
      onRowRightClick(rowIndex, item);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectAllChange", function () {
      var _this$props = _this.props,
          items = _this$props.items,
          selectedItems = _this$props.selectedItems,
          idKey = _this$props.idKey,
          isSelectable = _this$props.isSelectable,
          onSelectedChange = _this$props.onSelectedChange;

      if (isSelectable) {
        if (items.length > selectedItems.length) {
          // Select all
          onSelectedChange(items.map(function (i) {
            return i[idKey];
          }));
        } else {
          // Deselect all
          onSelectedChange([]);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleItemSelectChange", function (itemId, isSelected) {
      return function () {
        var _this$props2 = _this.props,
            selectedItems = _this$props2.selectedItems,
            onSelectedChange = _this$props2.onSelectedChange;

        if (isSelected) {
          onSelectedChange(selectedItems.filter(function (id) {
            return id !== itemId;
          }));
        } else {
          onSelectedChange(selectedItems.concat([itemId]));
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchChange", function (searchKeyword) {
      _this.setState({
        searchKeyword: searchKeyword
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleShowOnlySelectedChange", function () {
      _this.setState({
        showOnlySelected: !_this.state.showOnlySelected
      });
    });

    _defineProperty(_assertThisInitialized(_this), "filter", function () {
      var _this$props3 = _this.props,
          idKey = _this$props3.idKey,
          columns = _this$props3.columns;
      return (0, _memoizeOne.default)(function (items, selectedItems, searchKeyword, showOnlySelected) {
        return items.filter(function (i) {
          var hit = false;

          if (showOnlySelected && !selectedItems.includes(i[idKey])) {
            return false;
          }

          if (searchKeyword === '') {
            return true;
          }

          var stringMatcher = function stringMatcher(data, keyword) {
            var escapedKeyword = keyword;
            var specialChars = '[]\\^$.|?*+()'; // If keyword val starts with a Regex special character, we must escape it

            if (specialChars.includes(keyword[0])) escapedKeyword = "\\" + keyword;
            return new RegExp(escapedKeyword, 'i').test(data);
          };

          columns.forEach(function (c) {
            if (typeof i[c.valueKey] === 'string' && stringMatcher(i[c.valueKey], searchKeyword)) {
              hit = true;
            }
          });
          return hit;
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderRow", function (item, rowIndex) {
      var _this$props4 = _this.props,
          id = _this$props4.id,
          selectedItems = _this$props4.selectedItems,
          idKey = _this$props4.idKey,
          itemHeight = _this$props4.itemHeight,
          isIndexColumnVisible = _this$props4.isIndexColumnVisible,
          isItemBorderVisible = _this$props4.isItemBorderVisible,
          columns = _this$props4.columns,
          isSelectable = _this$props4.isSelectable;
      var isSelected = selectedItems.includes(item[idKey]);
      return _react.default.createElement(_row.default, {
        id: id + "-row-" + rowIndex,
        key: item[idKey],
        item: item,
        rowIndex: rowIndex,
        isIndexColumnVisible: isIndexColumnVisible,
        itemHeight: itemHeight,
        columns: columns,
        isSelected: isSelected,
        isSelectable: isSelectable,
        isItemBorderVisible: isItemBorderVisible,
        onSelectChange: _this.handleItemSelectChange(item[idKey], isSelected)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderList", function () {
      var _this$props5 = _this.props,
          id = _this$props5.id,
          className = _this$props5.className,
          items = _this$props5.items,
          selectedItems = _this$props5.selectedItems,
          columns = _this$props5.columns,
          isIndexColumnVisible = _this$props5.isIndexColumnVisible,
          height = _this$props5.height,
          width = _this$props5.width,
          itemHeight = _this$props5.itemHeight,
          columnHeaderHeight = _this$props5.columnHeaderHeight,
          isColumnHeaderVisible = _this$props5.isColumnHeaderVisible,
          isSearchable = _this$props5.isSearchable,
          isSelectable = _this$props5.isSelectable,
          isSelectAllVisible = _this$props5.isSelectAllVisible,
          isShowOnlySelectedVisible = _this$props5.isShowOnlySelectedVisible,
          translations = _this$props5.translations,
          reactInfiniteProps = _this$props5.reactInfiniteProps;
      var _this$state = _this.state,
          showOnlySelected = _this$state.showOnlySelected,
          searchKeyword = _this$state.searchKeyword;

      var filteredItems = _this.filter()(items, selectedItems, searchKeyword, showOnlySelected);

      var isHeaderVisible = isSelectAllVisible && !isColumnHeaderVisible || isSearchable || isShowOnlySelectedVisible;
      var isAllSelected = items.length > 0 && items.length === selectedItems.length;
      return _react.default.createElement(ListContainer, {
        id: id,
        className: className,
        height: height,
        width: width
      }, isHeaderVisible && _react.default.createElement(_header.default, {
        id: id + "-header",
        isColumnHeaderVisible: isColumnHeaderVisible,
        isSearchable: isSearchable,
        isSelectAllVisible: isSelectAllVisible,
        isShowOnlySelectedVisible: isShowOnlySelectedVisible,
        isAllSelected: isAllSelected,
        isShowOnlySelected: showOnlySelected,
        searchKeyword: searchKeyword,
        disabled: items.length === 0,
        onSelectAllChange: _this.handleSelectAllChange,
        onSearchChange: _this.handleSearchChange,
        onShowOnlySelectedChange: _this.handleShowOnlySelectedChange,
        translations: translations
      }), isColumnHeaderVisible && _react.default.createElement(_columnHeader.default, {
        id: id + "-column-header",
        columns: columns,
        isSelectable: isSelectable,
        isSelectAllVisible: isSelectAllVisible,
        isIndexColumnVisible: isIndexColumnVisible,
        isAllSelected: isAllSelected,
        height: columnHeaderHeight,
        onSelectAllChange: _this.handleSelectAllChange
      }), _react.default.createElement(_responsiveListContainer.default, {
        id: id + "-items",
        height: height,
        itemHeight: itemHeight,
        columns: columns,
        columnHeaderHeight: columnHeaderHeight,
        isHeaderVisible: isHeaderVisible,
        isColumnHeaderVisible: isColumnHeaderVisible,
        reactInfiniteProps: reactInfiniteProps
      }, filteredItems.map(_this.renderRow)));
    });

    _defineProperty(_assertThisInitialized(_this), "renderWithTheme", function (themeObj) {
      return _react.default.createElement(_styledComponents.ThemeProvider, {
        theme: themeObj
      }, _this.renderList());
    });

    _this.state = {
      searchKeyword: '',
      showOnlySelected: false
    };
    return _this;
  }

  var _proto = List.prototype;

  _proto.render = function render() {
    var _this$props6 = this.props,
        customTheme = _this$props6.customTheme,
        theme = _this$props6.theme;

    if (customTheme) {
      return this.renderWithTheme(customTheme); // override with custom theme
    }

    if (!theme) {
      return this.renderWithTheme(_theme.themeDefaults); // use defaults if no theme is provided
    }

    return this.renderList(); // ThemeProvider is found!
  };

  return List;
}(_react.default.PureComponent), _defineProperty(_class2, "defaultProps", {
  theme: null,
  id: 'oc-react-list',
  className: '',
  selectedItems: [],
  columns: [{
    valueKey: 'value',
    title: 'Value'
  }],
  height: 'auto',
  width: 'auto',
  itemHeight: 40,
  columnHeaderHeight: 40,
  idKey: 'id',
  translations: {
    search: 'Search',
    selectAll: 'All',
    showOnlySelected: 'Show only selected'
  },
  customTheme: null,
  reactInfiniteProps: {},
  isSearchable: false,
  isSelectable: false,
  isSelectAllVisible: false,
  isShowOnlySelectedVisible: false,
  isColumnHeaderVisible: false,
  isIndexColumnVisible: false,
  isItemBorderVisible: true,
  onSelectedChange: function onSelectedChange() {},
  onRowClick: function onRowClick() {},
  onRowDoubleClick: function onRowDoubleClick() {},
  onRowRightClick: function onRowRightClick() {}
}), _temp)) || _class;

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTGlzdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaGVpZ2h0Iiwid2lkdGgiLCJMaXN0Iiwid2l0aFRoZW1lIiwicm93SW5kZXgiLCJpdGVtIiwib25Sb3dDbGljayIsIm9uUm93RG91YmxlQ2xpY2siLCJvblJvd1JpZ2h0Q2xpY2siLCJpdGVtcyIsInNlbGVjdGVkSXRlbXMiLCJpZEtleSIsImlzU2VsZWN0YWJsZSIsIm9uU2VsZWN0ZWRDaGFuZ2UiLCJsZW5ndGgiLCJtYXAiLCJpIiwiaXRlbUlkIiwiaXNTZWxlY3RlZCIsImZpbHRlciIsImlkIiwiY29uY2F0Iiwic2VhcmNoS2V5d29yZCIsInNldFN0YXRlIiwic2hvd09ubHlTZWxlY3RlZCIsInN0YXRlIiwiY29sdW1ucyIsImhpdCIsImluY2x1ZGVzIiwic3RyaW5nTWF0Y2hlciIsImRhdGEiLCJrZXl3b3JkIiwiZXNjYXBlZEtleXdvcmQiLCJzcGVjaWFsQ2hhcnMiLCJSZWdFeHAiLCJ0ZXN0IiwiZm9yRWFjaCIsImMiLCJ2YWx1ZUtleSIsIml0ZW1IZWlnaHQiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImlzSXRlbUJvcmRlclZpc2libGUiLCJoYW5kbGVJdGVtU2VsZWN0Q2hhbmdlIiwiY2xhc3NOYW1lIiwiY29sdW1uSGVhZGVySGVpZ2h0IiwiaXNDb2x1bW5IZWFkZXJWaXNpYmxlIiwiaXNTZWFyY2hhYmxlIiwiaXNTZWxlY3RBbGxWaXNpYmxlIiwiaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZSIsInRyYW5zbGF0aW9ucyIsInJlYWN0SW5maW5pdGVQcm9wcyIsImZpbHRlcmVkSXRlbXMiLCJpc0hlYWRlclZpc2libGUiLCJpc0FsbFNlbGVjdGVkIiwiaGFuZGxlU2VsZWN0QWxsQ2hhbmdlIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiaGFuZGxlU2hvd09ubHlTZWxlY3RlZENoYW5nZSIsInJlbmRlclJvdyIsInRoZW1lT2JqIiwicmVuZGVyTGlzdCIsInJlbmRlciIsImN1c3RvbVRoZW1lIiwidGhlbWUiLCJyZW5kZXJXaXRoVGhlbWUiLCJ0aGVtZURlZmF1bHRzIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwidGl0bGUiLCJzZWFyY2giLCJzZWxlY3RBbGwiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHQywwQkFBT0MsR0FBVixvQkFDUCxVQUFBQyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxNQUFOLEtBQWlCLE1BQWpCLEdBQTBCLE1BQTFCLEdBQXNDRCxLQUFLLENBQUNDLE1BQTVDLE9BQUw7QUFBQSxDQURFLEVBRVIsVUFBQUQsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0UsS0FBTixLQUFnQixNQUFoQixHQUF5QixNQUF6QixHQUFxQ0YsS0FBSyxDQUFDRSxLQUEzQyxPQUFMO0FBQUEsQ0FGRyxDQUFuQjs7SUFPTUMsSSxPQURMQywyQjs7Ozs7QUFpRkMsZ0JBQVlKLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsNENBQU1BLEtBQU47O0FBRGlCLHFFQVFGLFVBQUNLLFFBQUQsRUFBV0MsSUFBWCxFQUFvQjtBQUFBLFVBRWpDQyxVQUZpQyxHQUcvQixNQUFLUCxLQUgwQixDQUVqQ08sVUFGaUM7QUFJbkNBLE1BQUFBLFVBQVUsQ0FBQ0YsUUFBRCxFQUFXQyxJQUFYLENBQVY7QUFDRCxLQWJrQjs7QUFBQSwyRUFlSSxVQUFDRCxRQUFELEVBQVdDLElBQVgsRUFBb0I7QUFBQSxVQUV2Q0UsZ0JBRnVDLEdBR3JDLE1BQUtSLEtBSGdDLENBRXZDUSxnQkFGdUM7QUFJekNBLE1BQUFBLGdCQUFnQixDQUFDSCxRQUFELEVBQVdDLElBQVgsQ0FBaEI7QUFDRCxLQXBCa0I7O0FBQUEsMEVBc0JHLFVBQUNELFFBQUQsRUFBV0MsSUFBWCxFQUFv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c0JwQkgsRUFBQUEscUJBQXFCLEVBQUUsS0F0Qkg7QUF1QnBCTCxFQUFBQSxvQkFBb0IsRUFBRSxLQXZCRjtBQXdCcEJDLEVBQUFBLG1CQUFtQixFQUFFLElBeEJEO0FBeUJwQjVCLEVBQUFBLGdCQUFnQixFQUFFLDRCQUFNLENBQUUsQ0F6Qk47QUEwQnBCUCxFQUFBQSxVQUFVLEVBQUUsc0JBQU0sQ0FBRSxDQTFCQTtBQTJCcEJDLEVBQUFBLGdCQUFnQixFQUFFLDRCQUFNLENBQUUsQ0EzQk47QUE0QnBCQyxFQUFBQSxlQUFlLEVBQUUsMkJBQU0sQ0FBRTtBQTVCTCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIsIHdpdGhUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBtZW1vaXplIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCBSZXNwb25zaXZlTGlzdENvbnRhaW5lciBmcm9tICcuL3Jlc3BvbnNpdmUtbGlzdC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCBDb2x1bW5IZWFkZXIgZnJvbSAnLi9jb2x1bW4taGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgUm93IGZyb20gJy4vcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyB0aGVtZURlZmF1bHRzLCB0aGVtZVNoYXBlIH0gZnJvbSAnLi90aGVtZSc7XG5cbmNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmhlaWdodCA9PT0gJ2F1dG8nID8gJzEwMCUnIDogYCR7cHJvcHMuaGVpZ2h0fXB4YCl9O1xuICB3aWR0aDogJHtwcm9wcyA9PiAocHJvcHMud2lkdGggPT09ICdhdXRvJyA/ICcxMDAlJyA6IGAke3Byb3BzLndpZHRofXB4YCl9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHRcbkB3aXRoVGhlbWVcbmNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyBTcGVjaWFsIHByb3AgZnJvbSBzdHlsZWQtY29tcG9uZW50cyBUaGVtZVByb3ZpZGVyIChpZiBpbiB1c2UpXG4gICAgdGhlbWU6IHRoZW1lU2hhcGUsXG5cbiAgICAvLyBEYXRhIHByb3BzXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuICAgIHNlbGVjdGVkSXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgXSkpLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSxcbiAgICBdKSxcbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSxcbiAgICBdKSxcbiAgICBpdGVtSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpZEtleTogUHJvcFR5cGVzLnN0cmluZywgLy8ga2V5IG9mIGlkIGluIGxpc3QgZGF0YVxuICAgIHRyYW5zbGF0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHNlYXJjaDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHNlbGVjdEFsbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gICAgY3VzdG9tVGhlbWU6IHRoZW1lU2hhcGUsIC8vIHRoZW1lIG92ZXJyaWRlXG4gICAgcmVhY3RJbmZpbml0ZVByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLFxuXG4gICAgLy8gQm9vbGVhbnNcbiAgICBpc1NlYXJjaGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RBbGxWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0NvbHVtbkhlYWRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8vIGFjdGlvbnNcbiAgICBvblNlbGVjdGVkQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd0RvdWJsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd1JpZ2h0Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aGVtZTogbnVsbCxcbiAgICBpZDogJ29jLXJlYWN0LWxpc3QnLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgc2VsZWN0ZWRJdGVtczogW10sXG4gICAgY29sdW1uczogW3sgdmFsdWVLZXk6ICd2YWx1ZScsIHRpdGxlOiAnVmFsdWUnIH1dLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgaXRlbUhlaWdodDogNDAsXG4gICAgY29sdW1uSGVhZGVySGVpZ2h0OiA0MCxcbiAgICBpZEtleTogJ2lkJyxcbiAgICB0cmFuc2xhdGlvbnM6IHtcbiAgICAgIHNlYXJjaDogJ1NlYXJjaCcsXG4gICAgICBzZWxlY3RBbGw6ICdBbGwnLFxuICAgICAgc2hvd09ubHlTZWxlY3RlZDogJ1Nob3cgb25seSBzZWxlY3RlZCcsXG4gICAgfSxcbiAgICBjdXN0b21UaGVtZTogbnVsbCxcbiAgICByZWFjdEluZmluaXRlUHJvcHM6IHt9LFxuICAgIGlzU2VhcmNoYWJsZTogZmFsc2UsXG4gICAgaXNTZWxlY3RhYmxlOiBmYWxzZSxcbiAgICBpc1NlbGVjdEFsbFZpc2libGU6IGZhbHNlLFxuICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGU6IGZhbHNlLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogZmFsc2UsXG4gICAgaXNJbmRleENvbHVtblZpc2libGU6IGZhbHNlLFxuICAgIGlzSXRlbUJvcmRlclZpc2libGU6IHRydWUsXG4gICAgb25TZWxlY3RlZENoYW5nZTogKCkgPT4ge30sXG4gICAgb25Sb3dDbGljazogKCkgPT4ge30sXG4gICAgb25Sb3dEb3VibGVDbGljazogKCkgPT4ge30sXG4gICAgb25Sb3dSaWdodENsaWNrOiAoKSA9PiB7fSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hLZXl3b3JkOiAnJyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVSb3dDbGljayA9IChyb3dJbmRleCwgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uUm93Q2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgb25Sb3dDbGljayhyb3dJbmRleCwgaXRlbSk7XG4gIH1cblxuICBoYW5kbGVSb3dEb3VibGVDbGljayA9IChyb3dJbmRleCwgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uUm93RG91YmxlQ2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgb25Sb3dEb3VibGVDbGljayhyb3dJbmRleCwgaXRlbSk7XG4gIH1cblxuICBoYW5kbGVSb3dSaWdodENsaWNrID0gKHJvd0luZGV4LCBpdGVtKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb25Sb3dSaWdodENsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uUm93UmlnaHRDbGljayhyb3dJbmRleCwgaXRlbSk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3RBbGxDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbXMsXG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgaWRLZXksXG4gICAgICBpc1NlbGVjdGFibGUsXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChpc1NlbGVjdGFibGUpIHtcbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPiBzZWxlY3RlZEl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAvLyBTZWxlY3QgYWxsXG4gICAgICAgIG9uU2VsZWN0ZWRDaGFuZ2UoaXRlbXMubWFwKGkgPT4gaVtpZEtleV0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERlc2VsZWN0IGFsbFxuICAgICAgICBvblNlbGVjdGVkQ2hhbmdlKFtdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVJdGVtU2VsZWN0Q2hhbmdlID0gKGl0ZW1JZCwgaXNTZWxlY3RlZCkgPT4gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICBvblNlbGVjdGVkQ2hhbmdlKHNlbGVjdGVkSXRlbXMuZmlsdGVyKGlkID0+IGlkICE9PSBpdGVtSWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb25TZWxlY3RlZENoYW5nZShzZWxlY3RlZEl0ZW1zLmNvbmNhdChbaXRlbUlkXSkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNlYXJjaENoYW5nZSA9IChzZWFyY2hLZXl3b3JkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaEtleXdvcmQgfSk7XG4gIH07XG5cbiAgaGFuZGxlU2hvd09ubHlTZWxlY3RlZENoYW5nZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd09ubHlTZWxlY3RlZDogIXRoaXMuc3RhdGUuc2hvd09ubHlTZWxlY3RlZCB9KTtcbiAgfTtcblxuICBmaWx0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWRLZXksXG4gICAgICBjb2x1bW5zLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBtZW1vaXplKChpdGVtcywgc2VsZWN0ZWRJdGVtcywgc2VhcmNoS2V5d29yZCwgc2hvd09ubHlTZWxlY3RlZCkgPT5cbiAgICAgIGl0ZW1zLmZpbHRlcigoaSkgPT4ge1xuICAgICAgICBsZXQgaGl0ID0gZmFsc2U7XG4gICAgICAgIGlmIChzaG93T25seVNlbGVjdGVkICYmICFzZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGlbaWRLZXldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VhcmNoS2V5d29yZCA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHJpbmdNYXRjaGVyID0gKGRhdGEsIGtleXdvcmQpID0+IHtcbiAgICAgICAgICBsZXQgZXNjYXBlZEtleXdvcmQgPSBrZXl3b3JkO1xuICAgICAgICAgIGNvbnN0IHNwZWNpYWxDaGFycyA9ICdbXVxcXFxeJC58PyorKCknO1xuXG4gICAgICAgICAgLy8gSWYga2V5d29yZCB2YWwgc3RhcnRzIHdpdGggYSBSZWdleCBzcGVjaWFsIGNoYXJhY3Rlciwgd2UgbXVzdCBlc2NhcGUgaXRcbiAgICAgICAgICBpZiAoc3BlY2lhbENoYXJzLmluY2x1ZGVzKGtleXdvcmRbMF0pKSBlc2NhcGVkS2V5d29yZCA9IGBcXFxcJHtrZXl3b3JkfWA7XG4gICAgICAgICAgcmV0dXJuIChuZXcgUmVnRXhwKGVzY2FwZWRLZXl3b3JkLCAnaScpKS50ZXN0KGRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICBjb2x1bW5zLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGlbYy52YWx1ZUtleV0gPT09ICdzdHJpbmcnICYmIHN0cmluZ01hdGNoZXIoaVtjLnZhbHVlS2V5XSwgc2VhcmNoS2V5d29yZCkpIHtcbiAgICAgICAgICAgIGhpdCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGhpdDtcbiAgICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlclJvdyA9IChpdGVtLCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIGlkS2V5LFxuICAgICAgaXRlbUhlaWdodCxcbiAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNJdGVtQm9yZGVyVmlzaWJsZSxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBpc1NlbGVjdGFibGUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaXRlbVtpZEtleV0pO1xuICAgIHJldHVybiAoXG4gICAgICA8Um93XG4gICAgICAgIGlkPXtgJHtpZH0tcm93LSR7cm93SW5kZXh9YH1cbiAgICAgICAga2V5PXtpdGVtW2lkS2V5XX1cbiAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgcm93SW5kZXg9e3Jvd0luZGV4fVxuICAgICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZT17aXNJbmRleENvbHVtblZpc2libGV9XG4gICAgICAgIGl0ZW1IZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgIGlzU2VsZWN0YWJsZT17aXNTZWxlY3RhYmxlfVxuICAgICAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlPXtpc0l0ZW1Cb3JkZXJWaXNpYmxlfVxuICAgICAgICBvblNlbGVjdENoYW5nZT17dGhpcy5oYW5kbGVJdGVtU2VsZWN0Q2hhbmdlKGl0ZW1baWRLZXldLCBpc1NlbGVjdGVkKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBpdGVtcyxcbiAgICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgICBjb2x1bW5zLFxuICAgICAgaXNJbmRleENvbHVtblZpc2libGUsXG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aCxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICBjb2x1bW5IZWFkZXJIZWlnaHQsXG4gICAgICBpc0NvbHVtbkhlYWRlclZpc2libGUsXG4gICAgICBpc1NlYXJjaGFibGUsXG4gICAgICBpc1NlbGVjdGFibGUsXG4gICAgICBpc1NlbGVjdEFsbFZpc2libGUsXG4gICAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgcmVhY3RJbmZpbml0ZVByb3BzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQsXG4gICAgICBzZWFyY2hLZXl3b3JkLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSB0aGlzLmZpbHRlcigpKGl0ZW1zLCBzZWxlY3RlZEl0ZW1zLCBzZWFyY2hLZXl3b3JkLCBzaG93T25seVNlbGVjdGVkKTtcbiAgICBjb25zdCBpc0hlYWRlclZpc2libGUgPSAoXG4gICAgICAoaXNTZWxlY3RBbGxWaXNpYmxlICYmICFpc0NvbHVtbkhlYWRlclZpc2libGUpIHx8XG4gICAgICAoaXNTZWFyY2hhYmxlKSB8fFxuICAgICAgKGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGUpXG4gICAgKTtcbiAgICBjb25zdCBpc0FsbFNlbGVjdGVkID0gaXRlbXMubGVuZ3RoID4gMCAmJiBpdGVtcy5sZW5ndGggPT09IHNlbGVjdGVkSXRlbXMubGVuZ3RoO1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdENvbnRhaW5lciBpZD17aWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBoZWlnaHQ9e2hlaWdodH0gd2lkdGg9e3dpZHRofT5cbiAgICAgICAge2lzSGVhZGVyVmlzaWJsZSAmJiAoXG4gICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgaWQ9e2Ake2lkfS1oZWFkZXJgfVxuICAgICAgICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlPXtpc0NvbHVtbkhlYWRlclZpc2libGV9XG4gICAgICAgICAgICBpc1NlYXJjaGFibGU9e2lzU2VhcmNoYWJsZX1cbiAgICAgICAgICAgIGlzU2VsZWN0QWxsVmlzaWJsZT17aXNTZWxlY3RBbGxWaXNpYmxlfVxuICAgICAgICAgICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZT17aXNTaG93T25seVNlbGVjdGVkVmlzaWJsZX1cbiAgICAgICAgICAgIGlzQWxsU2VsZWN0ZWQ9e2lzQWxsU2VsZWN0ZWR9XG4gICAgICAgICAgICBpc1Nob3dPbmx5U2VsZWN0ZWQ9e3Nob3dPbmx5U2VsZWN0ZWR9XG4gICAgICAgICAgICBzZWFyY2hLZXl3b3JkPXtzZWFyY2hLZXl3b3JkfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2l0ZW1zLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgIG9uU2VsZWN0QWxsQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdEFsbENoYW5nZX1cbiAgICAgICAgICAgIG9uU2VhcmNoQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgIG9uU2hvd09ubHlTZWxlY3RlZENoYW5nZT17dGhpcy5oYW5kbGVTaG93T25seVNlbGVjdGVkQ2hhbmdlfVxuICAgICAgICAgICAgdHJhbnNsYXRpb25zPXt0cmFuc2xhdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2lzQ29sdW1uSGVhZGVyVmlzaWJsZSAmJiAoXG4gICAgICAgICAgPENvbHVtbkhlYWRlclxuICAgICAgICAgICAgaWQ9e2Ake2lkfS1jb2x1bW4taGVhZGVyYH1cbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICBpc1NlbGVjdGFibGU9e2lzU2VsZWN0YWJsZX1cbiAgICAgICAgICAgIGlzU2VsZWN0QWxsVmlzaWJsZT17aXNTZWxlY3RBbGxWaXNpYmxlfVxuICAgICAgICAgICAgaXNJbmRleENvbHVtblZpc2libGU9e2lzSW5kZXhDb2x1bW5WaXNpYmxlfVxuICAgICAgICAgICAgaXNBbGxTZWxlY3RlZD17aXNBbGxTZWxlY3RlZH1cbiAgICAgICAgICAgIGhlaWdodD17Y29sdW1uSGVhZGVySGVpZ2h0fVxuICAgICAgICAgICAgb25TZWxlY3RBbGxDaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QWxsQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxSZXNwb25zaXZlTGlzdENvbnRhaW5lclxuICAgICAgICAgIGlkPXtgJHtpZH0taXRlbXNgfVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGl0ZW1IZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICBjb2x1bW5IZWFkZXJIZWlnaHQ9e2NvbHVtbkhlYWRlckhlaWdodH1cbiAgICAgICAgICBpc0hlYWRlclZpc2libGU9e2lzSGVhZGVyVmlzaWJsZX1cbiAgICAgICAgICBpc0NvbHVtbkhlYWRlclZpc2libGU9e2lzQ29sdW1uSGVhZGVyVmlzaWJsZX1cbiAgICAgICAgICByZWFjdEluZmluaXRlUHJvcHM9e3JlYWN0SW5maW5pdGVQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtmaWx0ZXJlZEl0ZW1zLm1hcCh0aGlzLnJlbmRlclJvdyl9XG4gICAgICAgIDwvUmVzcG9uc2l2ZUxpc3RDb250YWluZXI+XG4gICAgICA8L0xpc3RDb250YWluZXI+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcldpdGhUaGVtZSA9IHRoZW1lT2JqID0+IChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWVPYmp9PlxuICAgICAge3RoaXMucmVuZGVyTGlzdCgpfVxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjdXN0b21UaGVtZSwgdGhlbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGN1c3RvbVRoZW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJXaXRoVGhlbWUoY3VzdG9tVGhlbWUpOyAvLyBvdmVycmlkZSB3aXRoIGN1c3RvbSB0aGVtZVxuICAgIH1cbiAgICBpZiAoIXRoZW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJXaXRoVGhlbWUodGhlbWVEZWZhdWx0cyk7IC8vIHVzZSBkZWZhdWx0cyBpZiBubyB0aGVtZSBpcyBwcm92aWRlZFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJMaXN0KCk7IC8vIFRoZW1lUHJvdmlkZXIgaXMgZm91bmQhXG4gIH1cbn1cbiJdfQ==