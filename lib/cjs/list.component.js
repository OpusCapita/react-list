"use strict";

exports.__esModule = true;
exports["default"] = void 0;

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var ListContainer = _styledComponents["default"].div(_templateObject(), function (props) {
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

    _defineProperty(_assertThisInitialized(_this), "handleSelectAllChange", function () {
      var _this$props = _this.props,
          items = _this$props.items,
          selectedItems = _this$props.selectedItems,
          idKey = _this$props.idKey,
          onSelectedChange = _this$props.onSelectedChange,
          onSelectAllClick = _this$props.onSelectAllClick;

      if (items.length > selectedItems.length) {
        // Select all
        onSelectedChange(items.map(function (i) {
          return i[idKey];
        }));
      } else {
        // Deselect all
        onSelectedChange([]);
      }

      onSelectAllClick();
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
      var showOnlySelected = _this.state.showOnlySelected;

      _this.setState({
        showOnlySelected: !showOnlySelected
      });
    });

    _defineProperty(_assertThisInitialized(_this), "filter", function () {
      var _this$props3 = _this.props,
          idKey = _this$props3.idKey,
          columns = _this$props3.columns; // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization

      return (0, _memoizeOne["default"])(function (items, selectedItems, searchKeyword, showOnlySelected) {
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
            var valueKey = c.valueKey || 'value';

            if (typeof i[valueKey] === 'string' && stringMatcher(i[valueKey], searchKeyword)) {
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
          isSelectColumnVisible = _this$props4.isSelectColumnVisible,
          onRowClick = _this$props4.onRowClick,
          onRowDoubleClick = _this$props4.onRowDoubleClick,
          onRowRightClick = _this$props4.onRowRightClick;
      var isSelected = selectedItems.includes(item[idKey]);
      return _react["default"].createElement(_row["default"], {
        id: id + "-row-" + rowIndex,
        key: item[idKey],
        item: item,
        rowIndex: rowIndex,
        isIndexColumnVisible: isIndexColumnVisible,
        itemHeight: itemHeight,
        columns: columns,
        isSelected: isSelected,
        isSelectColumnVisible: isSelectColumnVisible,
        isItemBorderVisible: isItemBorderVisible,
        onSelectChange: _this.handleItemSelectChange(item[idKey], isSelected),
        onRowClick: onRowClick,
        onRowDoubleClick: onRowDoubleClick,
        onRowRightClick: onRowRightClick
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
          isSelectColumnVisible = _this$props5.isSelectColumnVisible,
          isSelectAllVisible = _this$props5.isSelectAllVisible,
          isShowOnlySelectedVisible = _this$props5.isShowOnlySelectedVisible,
          isAllSelected = _this$props5.isAllSelected,
          translations = _this$props5.translations,
          reactInfiniteProps = _this$props5.reactInfiniteProps;
      var _this$state = _this.state,
          showOnlySelected = _this$state.showOnlySelected,
          searchKeyword = _this$state.searchKeyword; // memoize filteredItems when props has not changed to improve performance

      var filteredItems = _this.filter()(items, selectedItems, searchKeyword, showOnlySelected);

      var isHeaderVisible = isSelectAllVisible && !isColumnHeaderVisible || isSearchable || isShowOnlySelectedVisible; // override from props or calculate from data

      var isAllSelectedValue = isAllSelected !== null ? isAllSelected : items.length > 0 && items.length === selectedItems.length;
      return _react["default"].createElement(ListContainer, {
        id: id,
        className: className,
        height: height,
        width: width
      }, isHeaderVisible && _react["default"].createElement(_header["default"], {
        id: id + "-header",
        isColumnHeaderVisible: isColumnHeaderVisible,
        isSearchable: isSearchable,
        isSelectAllVisible: isSelectAllVisible,
        isShowOnlySelectedVisible: isShowOnlySelectedVisible,
        isAllSelected: isAllSelectedValue,
        isShowOnlySelected: showOnlySelected,
        disabled: items.length === 0,
        onSelectAllChange: _this.handleSelectAllChange,
        onSearchChange: _this.handleSearchChange,
        onShowOnlySelectedChange: _this.handleShowOnlySelectedChange,
        translations: translations
      }), isColumnHeaderVisible && _react["default"].createElement(_columnHeader["default"], {
        id: id + "-column-header",
        columns: columns,
        isSelectColumnVisible: isSelectColumnVisible,
        isSelectAllVisible: isSelectAllVisible,
        isIndexColumnVisible: isIndexColumnVisible,
        isAllSelected: isAllSelectedValue,
        height: columnHeaderHeight,
        onSelectAllChange: _this.handleSelectAllChange
      }), _react["default"].createElement(_responsiveListContainer["default"], {
        id: id + "-items",
        height: height,
        itemHeight: itemHeight,
        columnHeaderHeight: columnHeaderHeight,
        isHeaderVisible: isHeaderVisible,
        isColumnHeaderVisible: isColumnHeaderVisible,
        reactInfiniteProps: reactInfiniteProps
      }, filteredItems.map(_this.renderRow)));
    });

    _defineProperty(_assertThisInitialized(_this), "renderWithTheme", function (themeObj) {
      return _react["default"].createElement(_styledComponents.ThemeProvider, {
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
}(_react["default"].PureComponent), _defineProperty(_class2, "defaultProps", {
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
  isSelectColumnVisible: false,
  isSelectAllVisible: false,
  isShowOnlySelectedVisible: false,
  isColumnHeaderVisible: false,
  isIndexColumnVisible: false,
  isItemBorderVisible: true,
  isAllSelected: null,
  onSelectedChange: function onSelectedChange() {},
  onRowClick: function onRowClick() {},
  onRowDoubleClick: function onRowDoubleClick() {},
  onRowRightClick: function onRowRightClick() {},
  onSelectAllClick: function onSelectAllClick() {}
}), _temp)) || _class;

exports["default"] = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTGlzdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaGVpZ2h0Iiwid2lkdGgiLCJMaXN0Iiwid2l0aFRoZW1lIiwiaXRlbXMiLCJzZWxlY3RlZEl0ZW1zIiwiaWRLZXkiLCJvblNlbGVjdGVkQ2hhbmdlIiwib25TZWxlY3RBbGxDbGljayIsImxlbmd0aCIsIm1hcCIsImkiLCJpdGVtSWQiLCJpc1NlbGVjdGVkIiwiZmlsdGVyIiwiaWQiLCJjb25jYXQiLCJzZWFyY2hLZXl3b3JkIiwic2V0U3RhdGUiLCJzaG93T25seVNlbGVjdGVkIiwic3RhdGUiLCJjb2x1bW5zIiwiaGl0IiwiaW5jbHVkZXMiLCJzdHJpbmdNYXRjaGVyIiwiZGF0YSIsImtleXdvcmQiLCJlc2NhcGVkS2V5d29yZCIsInNwZWNpYWxDaGFycyIsIlJlZ0V4cCIsInRlc3QiLCJmb3JFYWNoIiwiYyIsInZhbHVlS2V5IiwiaXRlbSIsInJvd0luZGV4IiwiaXRlbUhlaWdodCIsImlzSW5kZXhDb2x1bW5WaXNpYmxlIiwiaXNJdGVtQm9yZGVyVmlzaWJsZSIsImlzU2VsZWN0Q29sdW1uVmlzaWJsZSIsIm9uUm93Q2xpY2siLCJvblJvd0RvdWJsZUNsaWNrIiwib25Sb3dSaWdodENsaWNrIiwiaGFuZGxlSXRlbVNlbGVjdENoYW5nZSIsImNsYXNzTmFtZSIsImNvbHVtbkhlYWRlckhlaWdodCIsImlzQ29sdW1uSGVhZGVyVmlzaWJsZSIsImlzU2VhcmNoYWJsZSIsImlzU2VsZWN0QWxsVmlzaWJsZSIsImlzU2hvd09ubHlTZWxlY3RlZFZpc2libGUiLCJpc0FsbFNlbGVjdGVkIiwidHJhbnNsYXRpb25zIiwicmVhY3RJbmZpbml0ZVByb3BzIiwiZmlsdGVyZWRJdGVtcyIsImlzSGVhZGVyVmlzaWJsZSIsImlzQWxsU2VsZWN0ZWRWYWx1ZSIsImhhbmRsZVNlbGVjdEFsbENoYW5nZSIsImhhbmRsZVNlYXJjaENoYW5nZSIsImhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2UiLCJyZW5kZXJSb3ciLCJ0aGVtZU9iaiIsInJlbmRlckxpc3QiLCJyZW5kZXIiLCJjdXN0b21UaGVtZSIsInRoZW1lIiwicmVuZGVyV2l0aFRoZW1lIiwidGhlbWVEZWZhdWx0cyIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsInRpdGxlIiwic2VhcmNoIiwic2VsZWN0QWxsIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBR0MsNkJBQU9DLEdBQVYsb0JBQ1AsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsTUFBTixLQUFpQixNQUFqQixHQUEwQixNQUExQixHQUFzQ0QsS0FBSyxDQUFDQyxNQUE1QyxPQUFMO0FBQUEsQ0FERSxFQUVSLFVBQUFELEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNFLEtBQU4sS0FBZ0IsTUFBaEIsR0FBeUIsTUFBekIsR0FBcUNGLEtBQUssQ0FBQ0UsS0FBM0MsT0FBTDtBQUFBLENBRkcsQ0FBbkI7O0lBT01DLEksT0FETEMsMkI7Ozs7O0FBcUZDLGdCQUFZSixLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLDRDQUFNQSxLQUFOOztBQURpQiw0RUFRSyxZQUFNO0FBQUEsd0JBT3hCLE1BQUtBLEtBUG1CO0FBQUEsVUFFMUJLLEtBRjBCLGVBRTFCQSxLQUYwQjtBQUFBLFVBRzFCQyxhQUgwQixlQUcxQkEsYUFIMEI7QUFBQSxVQUkxQkMsS0FKMEIsZUFJMUJBLEtBSjBCO0FBQUEsVUFLMUJDLGdCQUwwQixlQUsxQkEsZ0JBTDBCO0FBQUEsVUFNMUJDLGdCQU4wQixlQU0xQkEsZ0JBTjBCOztBQVE1QixVQUFJSixLQUFLLENBQUNLLE1BQU4sR0FBZUosYUFBYSxDQUFDSSxNQUFqQyxFQUF5QztBQUN2QztBQUNBRixRQUFBQSxnQkFBZ0IsQ0FB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QnBCWSxFQUFBQSxhQUFhLEVBQUUsSUF6Qks7QUEwQnBCM0MsRUFBQUEsZ0JBQWdCLEVBQUUsNEJBQU0sQ0FBRSxDQTFCTjtBQTJCcEJpQyxFQUFBQSxVQUFVLEVBQUUsc0JBQU0sQ0FBRSxDQTNCQTtBQTRCcEJDLEVBQUFBLGdCQUFnQixFQUFFLDRCQUFNLENBQUUsQ0E1Qk47QUE2QnBCQyxFQUFBQSxlQUFlLEVBQUUsMkJBQU0sQ0FBRSxDQTdCTDtBQThCcEJsQyxFQUFBQSxnQkFBZ0IsRUFBRSw0QkFBTSxDQUFFO0FBOUJOLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciwgd2l0aFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnbWVtb2l6ZS1vbmUnO1xuaW1wb3J0IFJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIGZyb20gJy4vcmVzcG9uc2l2ZS1saXN0LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IENvbHVtbkhlYWRlciBmcm9tICcuL2NvbHVtbi1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCBSb3cgZnJvbSAnLi9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IHRoZW1lRGVmYXVsdHMsIHRoZW1lU2hhcGUgfSBmcm9tICcuL3RoZW1lJztcblxuY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogJHtwcm9wcyA9PiAocHJvcHMuaGVpZ2h0ID09PSAnYXV0bycgPyAnMTAwJScgOiBgJHtwcm9wcy5oZWlnaHR9cHhgKX07XG4gIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy53aWR0aCA9PT0gJ2F1dG8nID8gJzEwMCUnIDogYCR7cHJvcHMud2lkdGh9cHhgKX07XG5gO1xuXG5leHBvcnQgZGVmYXVsdFxuQHdpdGhUaGVtZVxuY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIFNwZWNpYWwgcHJvcCBmcm9tIHN0eWxlZC1jb21wb25lbnRzIFRoZW1lUHJvdmlkZXIgKGlmIGluIHVzZSlcbiAgICB0aGVtZTogdGhlbWVTaGFwZSxcblxuICAgIC8vIERhdGEgcHJvcHNcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG4gICAgc2VsZWN0ZWRJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBdKSksXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSksXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLFxuICAgIF0pLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLFxuICAgIF0pLFxuICAgIGl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY29sdW1uSGVhZGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGlkS2V5OiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBrZXkgb2YgaWQgaW4gbGlzdCBkYXRhXG4gICAgdHJhbnNsYXRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc2VhcmNoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc2VsZWN0QWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc2hvd09ubHlTZWxlY3RlZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KSxcbiAgICBjdXN0b21UaGVtZTogdGhlbWVTaGFwZSwgLy8gdGhlbWUgb3ZlcnJpZGVcbiAgICByZWFjdEluZmluaXRlUHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSksXG5cbiAgICAvLyBCb29sZWFuc1xuICAgIGlzU2VhcmNoYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1NlbGVjdEFsbFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNJbmRleENvbHVtblZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzSXRlbUJvcmRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzQWxsU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gYWN0aW9uc1xuICAgIG9uU2VsZWN0ZWRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm93Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm93RG91YmxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm93UmlnaHRDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3RBbGxDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRoZW1lOiBudWxsLFxuICAgIGlkOiAnb2MtcmVhY3QtbGlzdCcsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBzZWxlY3RlZEl0ZW1zOiBbXSxcbiAgICBjb2x1bW5zOiBbeyB2YWx1ZUtleTogJ3ZhbHVlJywgdGl0bGU6ICdWYWx1ZScgfV0sXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgd2lkdGg6ICdhdXRvJyxcbiAgICBpdGVtSGVpZ2h0OiA0MCxcbiAgICBjb2x1bW5IZWFkZXJIZWlnaHQ6IDQwLFxuICAgIGlkS2V5OiAnaWQnLFxuICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgICAgIHNlbGVjdEFsbDogJ0FsbCcsXG4gICAgICBzaG93T25seVNlbGVjdGVkOiAnU2hvdyBvbmx5IHNlbGVjdGVkJyxcbiAgICB9LFxuICAgIGN1c3RvbVRoZW1lOiBudWxsLFxuICAgIHJlYWN0SW5maW5pdGVQcm9wczoge30sXG4gICAgaXNTZWFyY2hhYmxlOiBmYWxzZSxcbiAgICBpc1NlbGVjdENvbHVtblZpc2libGU6IGZhbHNlLFxuICAgIGlzU2VsZWN0QWxsVmlzaWJsZTogZmFsc2UsXG4gICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZTogZmFsc2UsXG4gICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlOiBmYWxzZSxcbiAgICBpc0luZGV4Q29sdW1uVmlzaWJsZTogZmFsc2UsXG4gICAgaXNJdGVtQm9yZGVyVmlzaWJsZTogdHJ1ZSxcbiAgICBpc0FsbFNlbGVjdGVkOiBudWxsLFxuICAgIG9uU2VsZWN0ZWRDaGFuZ2U6ICgpID0+IHt9LFxuICAgIG9uUm93Q2xpY2s6ICgpID0+IHt9LFxuICAgIG9uUm93RG91YmxlQ2xpY2s6ICgpID0+IHt9LFxuICAgIG9uUm93UmlnaHRDbGljazogKCkgPT4ge30sXG4gICAgb25TZWxlY3RBbGxDbGljazogKCkgPT4ge30sXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoS2V5d29yZDogJycsXG4gICAgICBzaG93T25seVNlbGVjdGVkOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0QWxsQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGl0ZW1zLFxuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIGlkS2V5LFxuICAgICAgb25TZWxlY3RlZENoYW5nZSxcbiAgICAgIG9uU2VsZWN0QWxsQ2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA+IHNlbGVjdGVkSXRlbXMubGVuZ3RoKSB7XG4gICAgICAvLyBTZWxlY3QgYWxsXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlKGl0ZW1zLm1hcChpID0+IGlbaWRLZXldKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlc2VsZWN0IGFsbFxuICAgICAgb25TZWxlY3RlZENoYW5nZShbXSk7XG4gICAgfVxuICAgIG9uU2VsZWN0QWxsQ2xpY2soKTtcbiAgfVxuXG4gIGhhbmRsZUl0ZW1TZWxlY3RDaGFuZ2UgPSAoaXRlbUlkLCBpc1NlbGVjdGVkKSA9PiAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2Uoc2VsZWN0ZWRJdGVtcy5maWx0ZXIoaWQgPT4gaWQgIT09IGl0ZW1JZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvblNlbGVjdGVkQ2hhbmdlKHNlbGVjdGVkSXRlbXMuY29uY2F0KFtpdGVtSWRdKSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKHNlYXJjaEtleXdvcmQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoS2V5d29yZCB9KTtcbiAgfTtcblxuICBoYW5kbGVTaG93T25seVNlbGVjdGVkQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2hvd09ubHlTZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd09ubHlTZWxlY3RlZDogIXNob3dPbmx5U2VsZWN0ZWQgfSk7XG4gIH07XG5cbiAgZmlsdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkS2V5LFxuICAgICAgY29sdW1ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbCN3aGF0LWFib3V0LW1lbW9pemF0aW9uXG4gICAgcmV0dXJuIG1lbW9pemUoKGl0ZW1zLCBzZWxlY3RlZEl0ZW1zLCBzZWFyY2hLZXl3b3JkLCBzaG93T25seVNlbGVjdGVkKSA9PiBpdGVtcy5maWx0ZXIoKGkpID0+IHtcbiAgICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICAgIGlmIChzaG93T25seVNlbGVjdGVkICYmICFzZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGlbaWRLZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoc2VhcmNoS2V5d29yZCA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBjb25zdCBzdHJpbmdNYXRjaGVyID0gKGRhdGEsIGtleXdvcmQpID0+IHtcbiAgICAgICAgbGV0IGVzY2FwZWRLZXl3b3JkID0ga2V5d29yZDtcbiAgICAgICAgY29uc3Qgc3BlY2lhbENoYXJzID0gJ1tdXFxcXF4kLnw/KisoKSc7XG5cbiAgICAgICAgLy8gSWYga2V5d29yZCB2YWwgc3RhcnRzIHdpdGggYSBSZWdleCBzcGVjaWFsIGNoYXJhY3Rlciwgd2UgbXVzdCBlc2NhcGUgaXRcbiAgICAgICAgaWYgKHNwZWNpYWxDaGFycy5pbmNsdWRlcyhrZXl3b3JkWzBdKSkgZXNjYXBlZEtleXdvcmQgPSBgXFxcXCR7a2V5d29yZH1gO1xuICAgICAgICByZXR1cm4gKG5ldyBSZWdFeHAoZXNjYXBlZEtleXdvcmQsICdpJykpLnRlc3QoZGF0YSk7XG4gICAgICB9O1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlS2V5ID0gYy52YWx1ZUtleSB8fCAndmFsdWUnO1xuICAgICAgICBpZiAodHlwZW9mIGlbdmFsdWVLZXldID09PSAnc3RyaW5nJyAmJiBzdHJpbmdNYXRjaGVyKGlbdmFsdWVLZXldLCBzZWFyY2hLZXl3b3JkKSkge1xuICAgICAgICAgIGhpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGhpdDtcbiAgICB9KSk7XG4gIH1cblxuICByZW5kZXJSb3cgPSAoaXRlbSwgcm93SW5kZXgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgICBpZEtleSxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZSxcbiAgICAgIGlzSXRlbUJvcmRlclZpc2libGUsXG4gICAgICBjb2x1bW5zLFxuICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlLFxuICAgICAgb25Sb3dDbGljayxcbiAgICAgIG9uUm93RG91YmxlQ2xpY2ssXG4gICAgICBvblJvd1JpZ2h0Q2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaXRlbVtpZEtleV0pO1xuICAgIHJldHVybiAoXG4gICAgICA8Um93XG4gICAgICAgIGlkPXtgJHtpZH0tcm93LSR7cm93SW5kZXh9YH1cbiAgICAgICAga2V5PXtpdGVtW2lkS2V5XX1cbiAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgcm93SW5kZXg9e3Jvd0luZGV4fVxuICAgICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZT17aXNJbmRleENvbHVtblZpc2libGV9XG4gICAgICAgIGl0ZW1IZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZT17aXNTZWxlY3RDb2x1bW5WaXNpYmxlfVxuICAgICAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlPXtpc0l0ZW1Cb3JkZXJWaXNpYmxlfVxuICAgICAgICBvblNlbGVjdENoYW5nZT17dGhpcy5oYW5kbGVJdGVtU2VsZWN0Q2hhbmdlKGl0ZW1baWRLZXldLCBpc1NlbGVjdGVkKX1cbiAgICAgICAgb25Sb3dDbGljaz17b25Sb3dDbGlja31cbiAgICAgICAgb25Sb3dEb3VibGVDbGljaz17b25Sb3dEb3VibGVDbGlja31cbiAgICAgICAgb25Sb3dSaWdodENsaWNrPXtvblJvd1JpZ2h0Q2xpY2t9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaXRlbXMsXG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGgsXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgICAgY29sdW1uSGVhZGVySGVpZ2h0LFxuICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlLFxuICAgICAgaXNTZWFyY2hhYmxlLFxuICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlLFxuICAgICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZSxcbiAgICAgIGlzQWxsU2VsZWN0ZWQsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICByZWFjdEluZmluaXRlUHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgc2hvd09ubHlTZWxlY3RlZCxcbiAgICAgIHNlYXJjaEtleXdvcmQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgLy8gbWVtb2l6ZSBmaWx0ZXJlZEl0ZW1zIHdoZW4gcHJvcHMgaGFzIG5vdCBjaGFuZ2VkIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5maWx0ZXIoKShpdGVtcywgc2VsZWN0ZWRJdGVtcywgc2VhcmNoS2V5d29yZCwgc2hvd09ubHlTZWxlY3RlZCk7XG4gICAgY29uc3QgaXNIZWFkZXJWaXNpYmxlID0gKFxuICAgICAgKGlzU2VsZWN0QWxsVmlzaWJsZSAmJiAhaXNDb2x1bW5IZWFkZXJWaXNpYmxlKVxuICAgICAgfHwgKGlzU2VhcmNoYWJsZSlcbiAgICAgIHx8IChpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlKVxuICAgICk7XG4gICAgLy8gb3ZlcnJpZGUgZnJvbSBwcm9wcyBvciBjYWxjdWxhdGUgZnJvbSBkYXRhXG4gICAgY29uc3QgaXNBbGxTZWxlY3RlZFZhbHVlID0gKFxuICAgICAgaXNBbGxTZWxlY3RlZCAhPT0gbnVsbFxuICAgICAgICA/IGlzQWxsU2VsZWN0ZWRcbiAgICAgICAgOiAoaXRlbXMubGVuZ3RoID4gMCAmJiBpdGVtcy5sZW5ndGggPT09IHNlbGVjdGVkSXRlbXMubGVuZ3RoKVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0Q29udGFpbmVyIGlkPXtpZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGhlaWdodD17aGVpZ2h0fSB3aWR0aD17d2lkdGh9PlxuICAgICAgICB7aXNIZWFkZXJWaXNpYmxlICYmIChcbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICBpZD17YCR7aWR9LWhlYWRlcmB9XG4gICAgICAgICAgICBpc0NvbHVtbkhlYWRlclZpc2libGU9e2lzQ29sdW1uSGVhZGVyVmlzaWJsZX1cbiAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17aXNTZWFyY2hhYmxlfVxuICAgICAgICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlPXtpc1NlbGVjdEFsbFZpc2libGV9XG4gICAgICAgICAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlPXtpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlfVxuICAgICAgICAgICAgaXNBbGxTZWxlY3RlZD17aXNBbGxTZWxlY3RlZFZhbHVlfVxuICAgICAgICAgICAgaXNTaG93T25seVNlbGVjdGVkPXtzaG93T25seVNlbGVjdGVkfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2l0ZW1zLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgIG9uU2VsZWN0QWxsQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdEFsbENoYW5nZX1cbiAgICAgICAgICAgIG9uU2VhcmNoQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgIG9uU2hvd09ubHlTZWxlY3RlZENoYW5nZT17dGhpcy5oYW5kbGVTaG93T25seVNlbGVjdGVkQ2hhbmdlfVxuICAgICAgICAgICAgdHJhbnNsYXRpb25zPXt0cmFuc2xhdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2lzQ29sdW1uSGVhZGVyVmlzaWJsZSAmJiAoXG4gICAgICAgICAgPENvbHVtbkhlYWRlclxuICAgICAgICAgICAgaWQ9e2Ake2lkfS1jb2x1bW4taGVhZGVyYH1cbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICBpc1NlbGVjdENvbHVtblZpc2libGU9e2lzU2VsZWN0Q29sdW1uVmlzaWJsZX1cbiAgICAgICAgICAgIGlzU2VsZWN0QWxsVmlzaWJsZT17aXNTZWxlY3RBbGxWaXNpYmxlfVxuICAgICAgICAgICAgaXNJbmRleENvbHVtblZpc2libGU9e2lzSW5kZXhDb2x1bW5WaXNpYmxlfVxuICAgICAgICAgICAgaXNBbGxTZWxlY3RlZD17aXNBbGxTZWxlY3RlZFZhbHVlfVxuICAgICAgICAgICAgaGVpZ2h0PXtjb2x1bW5IZWFkZXJIZWlnaHR9XG4gICAgICAgICAgICBvblNlbGVjdEFsbENoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RBbGxDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPFJlc3BvbnNpdmVMaXN0Q29udGFpbmVyXG4gICAgICAgICAgaWQ9e2Ake2lkfS1pdGVtc2B9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgaXRlbUhlaWdodD17aXRlbUhlaWdodH1cbiAgICAgICAgICBjb2x1bW5IZWFkZXJIZWlnaHQ9e2NvbHVtbkhlYWRlckhlaWdodH1cbiAgICAgICAgICBpc0hlYWRlclZpc2libGU9e2lzSGVhZGVyVmlzaWJsZX1cbiAgICAgICAgICBpc0NvbHVtbkhlYWRlclZpc2libGU9e2lzQ29sdW1uSGVhZGVyVmlzaWJsZX1cbiAgICAgICAgICByZWFjdEluZmluaXRlUHJvcHM9e3JlYWN0SW5maW5pdGVQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtmaWx0ZXJlZEl0ZW1zLm1hcCh0aGlzLnJlbmRlclJvdyl9XG4gICAgICAgIDwvUmVzcG9uc2l2ZUxpc3RDb250YWluZXI+XG4gICAgICA8L0xpc3RDb250YWluZXI+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcldpdGhUaGVtZSA9IHRoZW1lT2JqID0+IChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWVPYmp9PlxuICAgICAge3RoaXMucmVuZGVyTGlzdCgpfVxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjdXN0b21UaGVtZSwgdGhlbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGN1c3RvbVRoZW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJXaXRoVGhlbWUoY3VzdG9tVGhlbWUpOyAvLyBvdmVycmlkZSB3aXRoIGN1c3RvbSB0aGVtZVxuICAgIH1cbiAgICBpZiAoIXRoZW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJXaXRoVGhlbWUodGhlbWVEZWZhdWx0cyk7IC8vIHVzZSBkZWZhdWx0cyBpZiBubyB0aGVtZSBpcyBwcm92aWRlZFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJMaXN0KCk7IC8vIFRoZW1lUHJvdmlkZXIgaXMgZm91bmQhXG4gIH1cbn1cbiJdfQ==