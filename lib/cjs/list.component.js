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

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  text-align: center;\n  margin-top: 1rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

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

var NoResultsText = _styledComponents["default"].p(_templateObject2());

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

          if (i.isAlwaysVisible) {
            return true;
          }

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
          columns = _this$props4.columns,
          selectedItems = _this$props4.selectedItems,
          idKey = _this$props4.idKey,
          itemHeight = _this$props4.itemHeight,
          isIndexColumnVisible = _this$props4.isIndexColumnVisible,
          isItemBorderVisible = _this$props4.isItemBorderVisible,
          isSelectColumnVisible = _this$props4.isSelectColumnVisible,
          isSortable = _this$props4.isSortable,
          onRowClick = _this$props4.onRowClick,
          onRowDoubleClick = _this$props4.onRowDoubleClick,
          onRowContextMenu = _this$props4.onRowContextMenu;
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
        isSortable: isSortable,
        onSelectChange: _this.handleItemSelectChange(item[idKey], isSelected),
        onRowClick: onRowClick,
        onRowDoubleClick: onRowDoubleClick,
        onRowContextMenu: onRowContextMenu
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
          dragItemZindex = _this$props5.dragItemZindex,
          isColumnHeaderVisible = _this$props5.isColumnHeaderVisible,
          isSearchable = _this$props5.isSearchable,
          isSelectColumnVisible = _this$props5.isSelectColumnVisible,
          isSelectAllVisible = _this$props5.isSelectAllVisible,
          isShowOnlySelectedVisible = _this$props5.isShowOnlySelectedVisible,
          isAllSelected = _this$props5.isAllSelected,
          isSortable = _this$props5.isSortable,
          translations = _this$props5.translations,
          reactInfiniteProps = _this$props5.reactInfiniteProps,
          onSortEnd = _this$props5.onSortEnd;
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
        dragItemZindex: dragItemZindex,
        isHeaderVisible: isHeaderVisible,
        isColumnHeaderVisible: isColumnHeaderVisible,
        isSortable: isSortable,
        reactInfiniteProps: reactInfiniteProps,
        onSortEnd: onSortEnd
      }, filteredItems.map(_this.renderRow), !filteredItems.length && _react["default"].createElement(NoResultsText, null, translations.noResults)));
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
  dragItemZindex: 1060,
  idKey: 'id',
  translations: {
    search: 'Search',
    selectAll: 'All',
    showOnlySelected: 'Show only selected',
    noResults: 'There are no items to show in this list.'
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
  isSortable: false,
  onSelectedChange: function onSelectedChange() {},
  onRowClick: function onRowClick() {},
  onRowDoubleClick: function onRowDoubleClick() {},
  onRowContextMenu: function onRowContextMenu() {},
  onSelectAllClick: function onSelectAllClick() {},
  onSortEnd: function onSortEnd() {
    console.warn('@opuscapita/react-list: You must implement onSortEnd function to make sorting work! example: https://github.com/clauderic/react-sortable-hoc#basic-example'); // eslint-disable-line
  }
}), _temp)) || _class;

exports["default"] = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTGlzdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaGVpZ2h0Iiwid2lkdGgiLCJOb1Jlc3VsdHNUZXh0IiwicCIsIkxpc3QiLCJ3aXRoVGhlbWUiLCJpdGVtcyIsInNlbGVjdGVkSXRlbXMiLCJpZEtleSIsIm9uU2VsZWN0ZWRDaGFuZ2UiLCJvblNlbGVjdEFsbENsaWNrIiwibGVuZ3RoIiwibWFwIiwiaSIsIml0ZW1JZCIsImlzU2VsZWN0ZWQiLCJmaWx0ZXIiLCJpZCIsImNvbmNhdCIsInNlYXJjaEtleXdvcmQiLCJzZXRTdGF0ZSIsInNob3dPbmx5U2VsZWN0ZWQiLCJzdGF0ZSIsImNvbHVtbnMiLCJoaXQiLCJpc0Fsd2F5c1Zpc2libGUiLCJpbmNsdWRlcyIsInN0cmluZ01hdGNoZXIiLCJkYXRhIiwia2V5d29yZCIsImVzY2FwZWRLZXl3b3JkIiwic3BlY2lhbENoYXJzIiwiUmVnRXhwIiwidGVzdCIsImZvckVhY2giLCJjIiwidmFsdWVLZXkiLCJpdGVtIiwicm93SW5kZXgiLCJpdGVtSGVpZ2h0IiwiaXNJbmRleENvbHVtblZpc2libGUiLCJpc0l0ZW1Cb3JkZXJWaXNpYmxlIiwiaXNTZWxlY3RDb2x1bW5WaXNpYmxlIiwiaXNTb3J0YWJsZSIsIm9uUm93Q2xpY2siLCJvblJvd0RvdWJsZUNsaWNrIiwib25Sb3dDb250ZXh0TWVudSIsImhhbmRsZUl0ZW1TZWxlY3RDaGFuZ2UiLCJjbGFzc05hbWUiLCJjb2x1bW5IZWFkZXJIZWlnaHQiLCJkcmFnSXRlbVppbmRleCIsImlzQ29sdW1uSGVhZGVyVmlzaWJsZSIsImlzU2VhcmNoYWJsZSIsImlzU2VsZWN0QWxsVmlzaWJsZSIsImlzU2hvd09ubHlTZWxlY3RlZFZpc2libGUiLCJpc0FsbFNlbGVjdGVkIiwidHJhbnNsYXRpb25zIiwicmVhY3RJbmZpbml0ZVByb3BzIiwib25Tb3J0RW5kIiwiZmlsdGVyZWRJdGVtcyIsImlzSGVhZGVyVmlzaWJsZSIsImlzQWxsU2VsZWN0ZWRWYWx1ZSIsImhhbmRsZVNlbGVjdEFsbENoYW5nZSIsImhhbmRsZVNlYXJjaENoYW5nZSIsImhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2UiLCJyZW5kZXJSb3ciLCJub1Jlc3VsdHMiLCJ0aGVtZU9iaiIsInJlbmRlckxpc3QiLCJyZW5kZXIiLCJjdXN0b21UaGVtZSIsInRoZW1lIiwicmVuZGVyV2l0aFRoZW1lIiwidGhlbWVEZWZhdWx0cyIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsInRpdGxlIiwic2VhcmNoIiwic2VsZWN0QWxsIiwiY29uc29sZSIsIndhcm4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBR0MsNkJBQU9DLEdBQVYsb0JBQ1AsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsTUFBTixLQUFpQixNQUFqQixHQUEwQixNQUExQixHQUFzQ0QsS0FBSyxDQUFDQyxNQUE1QyxPQUFMO0FBQUEsQ0FERSxFQUVSLFVBQUFELEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNFLEtBQU4sS0FBZ0IsTUFBaEIsR0FBeUIsTUFBekIsR0FBcUNGLEtBQUssQ0FBQ0UsS0FBM0MsT0FBTDtBQUFBLENBRkcsQ0FBbkI7O0FBS0EsSUFBTUMsYUFBYSxHQUFHTCw2QkFBT00sQ0FBVixvQkFBbkI7O0lBT01DLEksT0FETEMsMkI7Ozs7O0FBK0ZDLGdCQUFZTixLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLDRDQUFNQSxLQUFOOztBQURpQiw0RUFRSyxZQUFNO0FBQUEsd0JBT3hCLE1BQUtBLEtBUG1CO0FBQUEsVUFFMUJPLEtBRjBCLGVBRTFCQSxLQUYwQjtBQUFBLFVBRzFCQyxhQUgwQixlQUcxQkEsYUFIMEI7QUFBQSxVQUkxQkMsS0FKMEIsZUFJ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LElBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLDRKQUFiLEVBRGUsQ0FDNko7QUFDN0s7QUFwQ21CLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciwgd2l0aFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnbWVtb2l6ZS1vbmUnO1xuaW1wb3J0IFJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIGZyb20gJy4vcmVzcG9uc2l2ZS1saXN0LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IENvbHVtbkhlYWRlciBmcm9tICcuL2NvbHVtbi1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCBSb3cgZnJvbSAnLi9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IHRoZW1lRGVmYXVsdHMsIHRoZW1lU2hhcGUgfSBmcm9tICcuL3RoZW1lJztcblxuY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogJHtwcm9wcyA9PiAocHJvcHMuaGVpZ2h0ID09PSAnYXV0bycgPyAnMTAwJScgOiBgJHtwcm9wcy5oZWlnaHR9cHhgKX07XG4gIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy53aWR0aCA9PT0gJ2F1dG8nID8gJzEwMCUnIDogYCR7cHJvcHMud2lkdGh9cHhgKX07XG5gO1xuXG5jb25zdCBOb1Jlc3VsdHNUZXh0ID0gc3R5bGVkLnBgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0XG5Ad2l0aFRoZW1lXG5jbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gU3BlY2lhbCBwcm9wIGZyb20gc3R5bGVkLWNvbXBvbmVudHMgVGhlbWVQcm92aWRlciAoaWYgaW4gdXNlKVxuICAgIHRoZW1lOiB0aGVtZVNoYXBlLFxuXG4gICAgLy8gRGF0YSBwcm9wc1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcbiAgICBzZWxlY3RlZEl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIF0pKSxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKSxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSksXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSksXG4gICAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb2x1bW5IZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZHJhZ0l0ZW1aaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaWRLZXk6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGtleSBvZiBpZCBpbiBsaXN0IGRhdGFcbiAgICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzZWFyY2g6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzZWxlY3RBbGw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzaG93T25seVNlbGVjdGVkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgbm9SZXN1bHRzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICAgIGN1c3RvbVRoZW1lOiB0aGVtZVNoYXBlLCAvLyB0aGVtZSBvdmVycmlkZVxuICAgIHJlYWN0SW5maW5pdGVQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KSxcblxuICAgIC8vIEJvb2xlYW5zXG4gICAgaXNTZWFyY2hhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1NlbGVjdENvbHVtblZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2VsZWN0QWxsVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0luZGV4Q29sdW1uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNJdGVtQm9yZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNBbGxTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTb3J0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvLyBhY3Rpb25zXG4gICAgb25TZWxlY3RlZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dEb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dDb250ZXh0TWVudTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3RBbGxDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Tb3J0RW5kOiBQcm9wVHlwZXMuZnVuYyxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGhlbWU6IG51bGwsXG4gICAgaWQ6ICdvYy1yZWFjdC1saXN0JyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHNlbGVjdGVkSXRlbXM6IFtdLFxuICAgIGNvbHVtbnM6IFt7IHZhbHVlS2V5OiAndmFsdWUnLCB0aXRsZTogJ1ZhbHVlJyB9XSxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGl0ZW1IZWlnaHQ6IDQwLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogNDAsXG4gICAgZHJhZ0l0ZW1aaW5kZXg6IDEwNjAsXG4gICAgaWRLZXk6ICdpZCcsXG4gICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICBzZWFyY2g6ICdTZWFyY2gnLFxuICAgICAgc2VsZWN0QWxsOiAnQWxsJyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6ICdTaG93IG9ubHkgc2VsZWN0ZWQnLFxuICAgICAgbm9SZXN1bHRzOiAnVGhlcmUgYXJlIG5vIGl0ZW1zIHRvIHNob3cgaW4gdGhpcyBsaXN0LicsXG4gICAgfSxcbiAgICBjdXN0b21UaGVtZTogbnVsbCxcbiAgICByZWFjdEluZmluaXRlUHJvcHM6IHt9LFxuICAgIGlzU2VhcmNoYWJsZTogZmFsc2UsXG4gICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlOiBmYWxzZSxcbiAgICBpc1NlbGVjdEFsbFZpc2libGU6IGZhbHNlLFxuICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGU6IGZhbHNlLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogZmFsc2UsXG4gICAgaXNJbmRleENvbHVtblZpc2libGU6IGZhbHNlLFxuICAgIGlzSXRlbUJvcmRlclZpc2libGU6IHRydWUsXG4gICAgaXNBbGxTZWxlY3RlZDogbnVsbCxcbiAgICBpc1NvcnRhYmxlOiBmYWxzZSxcbiAgICBvblNlbGVjdGVkQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvblJvd0NsaWNrOiAoKSA9PiB7fSxcbiAgICBvblJvd0RvdWJsZUNsaWNrOiAoKSA9PiB7fSxcbiAgICBvblJvd0NvbnRleHRNZW51OiAoKSA9PiB7fSxcbiAgICBvblNlbGVjdEFsbENsaWNrOiAoKSA9PiB7fSxcbiAgICBvblNvcnRFbmQ6ICgpID0+IHtcbiAgICAgIGNvbnNvbGUud2FybignQG9wdXNjYXBpdGEvcmVhY3QtbGlzdDogWW91IG11c3QgaW1wbGVtZW50IG9uU29ydEVuZCBmdW5jdGlvbiB0byBtYWtlIHNvcnRpbmcgd29yayEgZXhhbXBsZTogaHR0cHM6Ly9naXRodWIuY29tL2NsYXVkZXJpYy9yZWFjdC1zb3J0YWJsZS1ob2MjYmFzaWMtZXhhbXBsZScpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hLZXl3b3JkOiAnJyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVTZWxlY3RBbGxDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbXMsXG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgaWRLZXksXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlLFxuICAgICAgb25TZWxlY3RBbGxDbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXRlbXMubGVuZ3RoID4gc2VsZWN0ZWRJdGVtcy5sZW5ndGgpIHtcbiAgICAgIC8vIFNlbGVjdCBhbGxcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2UoaXRlbXMubWFwKGkgPT4gaVtpZEtleV0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVzZWxlY3QgYWxsXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlKFtdKTtcbiAgICB9XG4gICAgb25TZWxlY3RBbGxDbGljaygpO1xuICB9XG5cbiAgaGFuZGxlSXRlbVNlbGVjdENoYW5nZSA9IChpdGVtSWQsIGlzU2VsZWN0ZWQpID0+ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgb25TZWxlY3RlZENoYW5nZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgb25TZWxlY3RlZENoYW5nZShzZWxlY3RlZEl0ZW1zLmZpbHRlcihpZCA9PiBpZCAhPT0gaXRlbUlkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2Uoc2VsZWN0ZWRJdGVtcy5jb25jYXQoW2l0ZW1JZF0pKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAoc2VhcmNoS2V5d29yZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hLZXl3b3JkIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T25seVNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93T25seVNlbGVjdGVkOiAhc2hvd09ubHlTZWxlY3RlZCB9KTtcbiAgfTtcblxuICBmaWx0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWRLZXksXG4gICAgICBjb2x1bW5zLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sI3doYXQtYWJvdXQtbWVtb2l6YXRpb25cbiAgICByZXR1cm4gbWVtb2l6ZSgoaXRlbXMsIHNlbGVjdGVkSXRlbXMsIHNlYXJjaEtleXdvcmQsIHNob3dPbmx5U2VsZWN0ZWQpID0+IGl0ZW1zLmZpbHRlcigoaSkgPT4ge1xuICAgICAgbGV0IGhpdCA9IGZhbHNlO1xuICAgICAgaWYgKGkuaXNBbHdheXNWaXNpYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHNob3dPbmx5U2VsZWN0ZWQgJiYgIXNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaVtpZEtleV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWFyY2hLZXl3b3JkID09PSAnJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0cmluZ01hdGNoZXIgPSAoZGF0YSwga2V5d29yZCkgPT4ge1xuICAgICAgICBsZXQgZXNjYXBlZEtleXdvcmQgPSBrZXl3b3JkO1xuICAgICAgICBjb25zdCBzcGVjaWFsQ2hhcnMgPSAnW11cXFxcXiQufD8qKygpJztcblxuICAgICAgICAvLyBJZiBrZXl3b3JkIHZhbCBzdGFydHMgd2l0aCBhIFJlZ2V4IHNwZWNpYWwgY2hhcmFjdGVyLCB3ZSBtdXN0IGVzY2FwZSBpdFxuICAgICAgICBpZiAoc3BlY2lhbENoYXJzLmluY2x1ZGVzKGtleXdvcmRbMF0pKSBlc2NhcGVkS2V5d29yZCA9IGBcXFxcJHtrZXl3b3JkfWA7XG4gICAgICAgIHJldHVybiAobmV3IFJlZ0V4cChlc2NhcGVkS2V5d29yZCwgJ2knKSkudGVzdChkYXRhKTtcbiAgICAgIH07XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVLZXkgPSBjLnZhbHVlS2V5IHx8ICd2YWx1ZSc7XG4gICAgICAgIGlmICh0eXBlb2YgaVt2YWx1ZUtleV0gPT09ICdzdHJpbmcnICYmIHN0cmluZ01hdGNoZXIoaVt2YWx1ZUtleV0sIHNlYXJjaEtleXdvcmQpKSB7XG4gICAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaGl0O1xuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlclJvdyA9IChpdGVtLCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgY29sdW1ucyxcbiAgICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgICBpZEtleSxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZSxcbiAgICAgIGlzSXRlbUJvcmRlclZpc2libGUsXG4gICAgICBpc1NlbGVjdENvbHVtblZpc2libGUsXG4gICAgICBpc1NvcnRhYmxlLFxuICAgICAgb25Sb3dDbGljayxcbiAgICAgIG9uUm93RG91YmxlQ2xpY2ssXG4gICAgICBvblJvd0NvbnRleHRNZW51LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGl0ZW1baWRLZXldKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvd1xuICAgICAgICBpZD17YCR7aWR9LXJvdy0ke3Jvd0luZGV4fWB9XG4gICAgICAgIGtleT17aXRlbVtpZEtleV19XG4gICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgIHJvd0luZGV4PXtyb3dJbmRleH1cbiAgICAgICAgaXNJbmRleENvbHVtblZpc2libGU9e2lzSW5kZXhDb2x1bW5WaXNpYmxlfVxuICAgICAgICBpdGVtSGVpZ2h0PXtpdGVtSGVpZ2h0fVxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfVxuICAgICAgICBpc1NlbGVjdENvbHVtblZpc2libGU9e2lzU2VsZWN0Q29sdW1uVmlzaWJsZX1cbiAgICAgICAgaXNJdGVtQm9yZGVyVmlzaWJsZT17aXNJdGVtQm9yZGVyVmlzaWJsZX1cbiAgICAgICAgaXNTb3J0YWJsZT17aXNTb3J0YWJsZX1cbiAgICAgICAgb25TZWxlY3RDaGFuZ2U9e3RoaXMuaGFuZGxlSXRlbVNlbGVjdENoYW5nZShpdGVtW2lkS2V5XSwgaXNTZWxlY3RlZCl9XG4gICAgICAgIG9uUm93Q2xpY2s9e29uUm93Q2xpY2t9XG4gICAgICAgIG9uUm93RG91YmxlQ2xpY2s9e29uUm93RG91YmxlQ2xpY2t9XG4gICAgICAgIG9uUm93Q29udGV4dE1lbnU9e29uUm93Q29udGV4dE1lbnV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaXRlbXMsXG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGgsXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgICAgY29sdW1uSGVhZGVySGVpZ2h0LFxuICAgICAgZHJhZ0l0ZW1aaW5kZXgsXG4gICAgICBpc0NvbHVtbkhlYWRlclZpc2libGUsXG4gICAgICBpc1NlYXJjaGFibGUsXG4gICAgICBpc1NlbGVjdENvbHVtblZpc2libGUsXG4gICAgICBpc1NlbGVjdEFsbFZpc2libGUsXG4gICAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlLFxuICAgICAgaXNBbGxTZWxlY3RlZCxcbiAgICAgIGlzU29ydGFibGUsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICByZWFjdEluZmluaXRlUHJvcHMsXG4gICAgICBvblNvcnRFbmQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgc2hvd09ubHlTZWxlY3RlZCxcbiAgICAgIHNlYXJjaEtleXdvcmQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgLy8gbWVtb2l6ZSBmaWx0ZXJlZEl0ZW1zIHdoZW4gcHJvcHMgaGFzIG5vdCBjaGFuZ2VkIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5maWx0ZXIoKShpdGVtcywgc2VsZWN0ZWRJdGVtcywgc2VhcmNoS2V5d29yZCwgc2hvd09ubHlTZWxlY3RlZCk7XG4gICAgY29uc3QgaXNIZWFkZXJWaXNpYmxlID0gKFxuICAgICAgKGlzU2VsZWN0QWxsVmlzaWJsZSAmJiAhaXNDb2x1bW5IZWFkZXJWaXNpYmxlKVxuICAgICAgfHwgKGlzU2VhcmNoYWJsZSlcbiAgICAgIHx8IChpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlKVxuICAgICk7XG4gICAgLy8gb3ZlcnJpZGUgZnJvbSBwcm9wcyBvciBjYWxjdWxhdGUgZnJvbSBkYXRhXG4gICAgY29uc3QgaXNBbGxTZWxlY3RlZFZhbHVlID0gKFxuICAgICAgaXNBbGxTZWxlY3RlZCAhPT0gbnVsbFxuICAgICAgICA/IGlzQWxsU2VsZWN0ZWRcbiAgICAgICAgOiAoaXRlbXMubGVuZ3RoID4gMCAmJiBpdGVtcy5sZW5ndGggPT09IHNlbGVjdGVkSXRlbXMubGVuZ3RoKVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0Q29udGFpbmVyIGlkPXtpZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGhlaWdodD17aGVpZ2h0fSB3aWR0aD17d2lkdGh9PlxuICAgICAgICB7aXNIZWFkZXJWaXNpYmxlICYmIChcbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICBpZD17YCR7aWR9LWhlYWRlcmB9XG4gICAgICAgICAgICBpc0NvbHVtbkhlYWRlclZpc2libGU9e2lzQ29sdW1uSGVhZGVyVmlzaWJsZX1cbiAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17aXNTZWFyY2hhYmxlfVxuICAgICAgICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlPXtpc1NlbGVjdEFsbFZpc2libGV9XG4gICAgICAgICAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlPXtpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlfVxuICAgICAgICAgICAgaXNBbGxTZWxlY3RlZD17aXNBbGxTZWxlY3RlZFZhbHVlfVxuICAgICAgICAgICAgaXNTaG93T25seVNlbGVjdGVkPXtzaG93T25seVNlbGVjdGVkfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2l0ZW1zLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgIG9uU2VsZWN0QWxsQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdEFsbENoYW5nZX1cbiAgICAgICAgICAgIG9uU2VhcmNoQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgIG9uU2hvd09ubHlTZWxlY3RlZENoYW5nZT17dGhpcy5oYW5kbGVTaG93T25seVNlbGVjdGVkQ2hhbmdlfVxuICAgICAgICAgICAgdHJhbnNsYXRpb25zPXt0cmFuc2xhdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2lzQ29sdW1uSGVhZGVyVmlzaWJsZSAmJiAoXG4gICAgICAgICAgPENvbHVtbkhlYWRlclxuICAgICAgICAgICAgaWQ9e2Ake2lkfS1jb2x1bW4taGVhZGVyYH1cbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICBpc1NlbGVjdENvbHVtblZpc2libGU9e2lzU2VsZWN0Q29sdW1uVmlzaWJsZX1cbiAgICAgICAgICAgIGlzU2VsZWN0QWxsVmlzaWJsZT17aXNTZWxlY3RBbGxWaXNpYmxlfVxuICAgICAgICAgICAgaXNJbmRleENvbHVtblZpc2libGU9e2lzSW5kZXhDb2x1bW5WaXNpYmxlfVxuICAgICAgICAgICAgaXNBbGxTZWxlY3RlZD17aXNBbGxTZWxlY3RlZFZhbHVlfVxuICAgICAgICAgICAgaGVpZ2h0PXtjb2x1bW5IZWFkZXJIZWlnaHR9XG4gICAgICAgICAgICBvblNlbGVjdEFsbENoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RBbGxDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPFJlc3BvbnNpdmVMaXN0Q29udGFpbmVyXG4gICAgICAgICAgaWQ9e2Ake2lkfS1pdGVtc2B9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgaXRlbUhlaWdodD17aXRlbUhlaWdodH1cbiAgICAgICAgICBjb2x1bW5IZWFkZXJIZWlnaHQ9e2NvbHVtbkhlYWRlckhlaWdodH1cbiAgICAgICAgICBkcmFnSXRlbVppbmRleD17ZHJhZ0l0ZW1aaW5kZXh9XG4gICAgICAgICAgaXNIZWFkZXJWaXNpYmxlPXtpc0hlYWRlclZpc2libGV9XG4gICAgICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlPXtpc0NvbHVtbkhlYWRlclZpc2libGV9XG4gICAgICAgICAgaXNTb3J0YWJsZT17aXNTb3J0YWJsZX1cbiAgICAgICAgICByZWFjdEluZmluaXRlUHJvcHM9e3JlYWN0SW5maW5pdGVQcm9wc31cbiAgICAgICAgICBvblNvcnRFbmQ9e29uU29ydEVuZH1cbiAgICAgICAgPlxuICAgICAgICAgIHtmaWx0ZXJlZEl0ZW1zLm1hcCh0aGlzLnJlbmRlclJvdyl9XG4gICAgICAgICAgeyFmaWx0ZXJlZEl0ZW1zLmxlbmd0aCAmJiA8Tm9SZXN1bHRzVGV4dD57dHJhbnNsYXRpb25zLm5vUmVzdWx0c308L05vUmVzdWx0c1RleHQ+fVxuICAgICAgICA8L1Jlc3BvbnNpdmVMaXN0Q29udGFpbmVyPlxuICAgICAgPC9MaXN0Q29udGFpbmVyPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJXaXRoVGhlbWUgPSB0aGVtZU9iaiA9PiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lT2JqfT5cbiAgICAgIHt0aGlzLnJlbmRlckxpc3QoKX1cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY3VzdG9tVGhlbWUsIHRoZW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChjdXN0b21UaGVtZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyV2l0aFRoZW1lKGN1c3RvbVRoZW1lKTsgLy8gb3ZlcnJpZGUgd2l0aCBjdXN0b20gdGhlbWVcbiAgICB9XG4gICAgaWYgKCF0aGVtZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyV2l0aFRoZW1lKHRoZW1lRGVmYXVsdHMpOyAvLyB1c2UgZGVmYXVsdHMgaWYgbm8gdGhlbWUgaXMgcHJvdmlkZWRcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyTGlzdCgpOyAvLyBUaGVtZVByb3ZpZGVyIGlzIGZvdW5kIVxuICB9XG59XG4iXX0=