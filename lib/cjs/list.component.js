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
          onRowContextMenu = _this$props4.onRowContextMenu,
          highlightedItems = _this$props4.highlightedItems;
      var isSelected = selectedItems.includes(item[idKey]);
      return _react["default"].createElement(_row["default"], {
        id: id + "-row-" + rowIndex,
        idKey: idKey,
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
        onRowContextMenu: onRowContextMenu,
        highlightedItems: highlightedItems
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
  highlightedItems: [],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTGlzdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaGVpZ2h0Iiwid2lkdGgiLCJOb1Jlc3VsdHNUZXh0IiwicCIsIkxpc3QiLCJ3aXRoVGhlbWUiLCJpdGVtcyIsInNlbGVjdGVkSXRlbXMiLCJpZEtleSIsIm9uU2VsZWN0ZWRDaGFuZ2UiLCJvblNlbGVjdEFsbENsaWNrIiwibGVuZ3RoIiwibWFwIiwiaSIsIml0ZW1JZCIsImlzU2VsZWN0ZWQiLCJmaWx0ZXIiLCJpZCIsImNvbmNhdCIsInNlYXJjaEtleXdvcmQiLCJzZXRTdGF0ZSIsInNob3dPbmx5U2VsZWN0ZWQiLCJzdGF0ZSIsImNvbHVtbnMiLCJoaXQiLCJpc0Fsd2F5c1Zpc2libGUiLCJpbmNsdWRlcyIsInN0cmluZ01hdGNoZXIiLCJkYXRhIiwia2V5d29yZCIsImVzY2FwZWRLZXl3b3JkIiwic3BlY2lhbENoYXJzIiwiUmVnRXhwIiwidGVzdCIsImZvckVhY2giLCJjIiwidmFsdWVLZXkiLCJpdGVtIiwicm93SW5kZXgiLCJpdGVtSGVpZ2h0IiwiaXNJbmRleENvbHVtblZpc2libGUiLCJpc0l0ZW1Cb3JkZXJWaXNpYmxlIiwiaXNTZWxlY3RDb2x1bW5WaXNpYmxlIiwiaXNTb3J0YWJsZSIsIm9uUm93Q2xpY2siLCJvblJvd0RvdWJsZUNsaWNrIiwib25Sb3dDb250ZXh0TWVudSIsImhpZ2hsaWdodGVkSXRlbXMiLCJoYW5kbGVJdGVtU2VsZWN0Q2hhbmdlIiwiY2xhc3NOYW1lIiwiY29sdW1uSGVhZGVySGVpZ2h0IiwiZHJhZ0l0ZW1aaW5kZXgiLCJpc0NvbHVtbkhlYWRlclZpc2libGUiLCJpc1NlYXJjaGFibGUiLCJpc1NlbGVjdEFsbFZpc2libGUiLCJpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlIiwiaXNBbGxTZWxlY3RlZCIsInRyYW5zbGF0aW9ucyIsInJlYWN0SW5maW5pdGVQcm9wcyIsIm9uU29ydEVuZCIsImZpbHRlcmVkSXRlbXMiLCJpc0hlYWRlclZpc2libGUiLCJpc0FsbFNlbGVjdGVkVmFsdWUiLCJoYW5kbGVTZWxlY3RBbGxDaGFuZ2UiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJoYW5kbGVTaG93T25seVNlbGVjdGVkQ2hhbmdlIiwicmVuZGVyUm93Iiwibm9SZXN1bHRzIiwidGhlbWVPYmoiLCJyZW5kZXJMaXN0IiwicmVuZGVyIiwiY3VzdG9tVGhlbWUiLCJ0aGVtZSIsInJlbmRlcldpdGhUaGVtZSIsInRoZW1lRGVmYXVsdHMiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJ0aXRsZSIsInNlYXJjaCIsInNlbGVjdEFsbCIsImNvbnNvbGUiLCJ3YXJuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUNQLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLE1BQU4sS0FBaUIsTUFBakIsR0FBMEIsTUFBMUIsR0FBc0NELEtBQUssQ0FBQ0MsTUFBNUMsT0FBTDtBQUFBLENBREUsRUFFUixVQUFBRCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDRSxLQUFOLEtBQWdCLE1BQWhCLEdBQXlCLE1BQXpCLEdBQXFDRixLQUFLLENBQUNFLEtBQTNDLE9BQUw7QUFBQSxDQUZHLENBQW5COztBQUtBLElBQU1DLGFBQWEsR0FBR0wsNkJBQU9NLENBQVYsb0JBQW5COztJQU9NQyxJLE9BRExDLDJCOzs7OztBQW9HQyxnQkFBWU4sS0FBWixFQUFtQjtBQUFBOztBQUNqQiw0Q0FBTUEsS0FBTjs7QUFEaUIsNEVBUUssWUFBTTtBQUFBLHdCQU94QixNQUFLQSxLQVBtQjtBQUFBLFVBRTFCTyxLQUYwQixlQUUxQkEsS0FGMEI7QUFBQSxVQUcxQkMsYUFIMEIsZUFHMUJBLGFBSDBCO0FB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LEVBQUUsNEJBQU0sQ0FBRSxDQWhDTjtBQWlDcEJDLEVBQUFBLGdCQUFnQixFQUFFLDRCQUFNLENBQUUsQ0FqQ047QUFrQ3BCcEMsRUFBQUEsZ0JBQWdCLEVBQUUsNEJBQU0sQ0FBRSxDQWxDTjtBQW1DcEJpRCxFQUFBQSxTQUFTLEVBQUUscUJBQU07QUFDZnFCLElBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLDRKQUFiLEVBRGUsQ0FDNko7QUFDN0s7QUFyQ21CLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciwgd2l0aFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnbWVtb2l6ZS1vbmUnO1xuaW1wb3J0IFJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIGZyb20gJy4vcmVzcG9uc2l2ZS1saXN0LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IENvbHVtbkhlYWRlciBmcm9tICcuL2NvbHVtbi1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCBSb3cgZnJvbSAnLi9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IHRoZW1lRGVmYXVsdHMsIHRoZW1lU2hhcGUgfSBmcm9tICcuL3RoZW1lJztcblxuY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogJHtwcm9wcyA9PiAocHJvcHMuaGVpZ2h0ID09PSAnYXV0bycgPyAnMTAwJScgOiBgJHtwcm9wcy5oZWlnaHR9cHhgKX07XG4gIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy53aWR0aCA9PT0gJ2F1dG8nID8gJzEwMCUnIDogYCR7cHJvcHMud2lkdGh9cHhgKX07XG5gO1xuXG5jb25zdCBOb1Jlc3VsdHNUZXh0ID0gc3R5bGVkLnBgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0XG5Ad2l0aFRoZW1lXG5jbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gU3BlY2lhbCBwcm9wIGZyb20gc3R5bGVkLWNvbXBvbmVudHMgVGhlbWVQcm92aWRlciAoaWYgaW4gdXNlKVxuICAgIHRoZW1lOiB0aGVtZVNoYXBlLFxuXG4gICAgLy8gRGF0YSBwcm9wc1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcbiAgICBzZWxlY3RlZEl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIF0pKSxcbiAgICBoaWdobGlnaHRlZEl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIF0pKSxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKSxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSksXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSksXG4gICAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb2x1bW5IZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZHJhZ0l0ZW1aaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaWRLZXk6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGtleSBvZiBpZCBpbiBsaXN0IGRhdGFcbiAgICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzZWFyY2g6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzZWxlY3RBbGw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzaG93T25seVNlbGVjdGVkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgbm9SZXN1bHRzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICAgIGN1c3RvbVRoZW1lOiB0aGVtZVNoYXBlLCAvLyB0aGVtZSBvdmVycmlkZVxuICAgIHJlYWN0SW5maW5pdGVQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KSxcblxuICAgIC8vIEJvb2xlYW5zXG4gICAgaXNTZWFyY2hhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1NlbGVjdENvbHVtblZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2VsZWN0QWxsVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0luZGV4Q29sdW1uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNJdGVtQm9yZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNBbGxTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTb3J0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvLyBhY3Rpb25zXG4gICAgb25TZWxlY3RlZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dEb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dDb250ZXh0TWVudTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3RBbGxDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Tb3J0RW5kOiBQcm9wVHlwZXMuZnVuYyxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGhlbWU6IG51bGwsXG4gICAgaWQ6ICdvYy1yZWFjdC1saXN0JyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHNlbGVjdGVkSXRlbXM6IFtdLFxuICAgIGhpZ2hsaWdodGVkSXRlbXM6IFtdLFxuICAgIGNvbHVtbnM6IFt7IHZhbHVlS2V5OiAndmFsdWUnLCB0aXRsZTogJ1ZhbHVlJyB9XSxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGl0ZW1IZWlnaHQ6IDQwLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogNDAsXG4gICAgZHJhZ0l0ZW1aaW5kZXg6IDEwNjAsXG4gICAgaWRLZXk6ICdpZCcsXG4gICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICBzZWFyY2g6ICdTZWFyY2gnLFxuICAgICAgc2VsZWN0QWxsOiAnQWxsJyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6ICdTaG93IG9ubHkgc2VsZWN0ZWQnLFxuICAgICAgbm9SZXN1bHRzOiAnVGhlcmUgYXJlIG5vIGl0ZW1zIHRvIHNob3cgaW4gdGhpcyBsaXN0LicsXG4gICAgfSxcbiAgICBjdXN0b21UaGVtZTogbnVsbCxcbiAgICByZWFjdEluZmluaXRlUHJvcHM6IHt9LFxuICAgIGlzU2VhcmNoYWJsZTogZmFsc2UsXG4gICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlOiBmYWxzZSxcbiAgICBpc1NlbGVjdEFsbFZpc2libGU6IGZhbHNlLFxuICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGU6IGZhbHNlLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogZmFsc2UsXG4gICAgaXNJbmRleENvbHVtblZpc2libGU6IGZhbHNlLFxuICAgIGlzSXRlbUJvcmRlclZpc2libGU6IHRydWUsXG4gICAgaXNBbGxTZWxlY3RlZDogbnVsbCxcbiAgICBpc1NvcnRhYmxlOiBmYWxzZSxcbiAgICBvblNlbGVjdGVkQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvblJvd0NsaWNrOiAoKSA9PiB7fSxcbiAgICBvblJvd0RvdWJsZUNsaWNrOiAoKSA9PiB7fSxcbiAgICBvblJvd0NvbnRleHRNZW51OiAoKSA9PiB7fSxcbiAgICBvblNlbGVjdEFsbENsaWNrOiAoKSA9PiB7fSxcbiAgICBvblNvcnRFbmQ6ICgpID0+IHtcbiAgICAgIGNvbnNvbGUud2FybignQG9wdXNjYXBpdGEvcmVhY3QtbGlzdDogWW91IG11c3QgaW1wbGVtZW50IG9uU29ydEVuZCBmdW5jdGlvbiB0byBtYWtlIHNvcnRpbmcgd29yayEgZXhhbXBsZTogaHR0cHM6Ly9naXRodWIuY29tL2NsYXVkZXJpYy9yZWFjdC1zb3J0YWJsZS1ob2MjYmFzaWMtZXhhbXBsZScpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hLZXl3b3JkOiAnJyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVTZWxlY3RBbGxDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbXMsXG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgaWRLZXksXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlLFxuICAgICAgb25TZWxlY3RBbGxDbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXRlbXMubGVuZ3RoID4gc2VsZWN0ZWRJdGVtcy5sZW5ndGgpIHtcbiAgICAgIC8vIFNlbGVjdCBhbGxcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2UoaXRlbXMubWFwKGkgPT4gaVtpZEtleV0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVzZWxlY3QgYWxsXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlKFtdKTtcbiAgICB9XG4gICAgb25TZWxlY3RBbGxDbGljaygpO1xuICB9XG5cbiAgaGFuZGxlSXRlbVNlbGVjdENoYW5nZSA9IChpdGVtSWQsIGlzU2VsZWN0ZWQpID0+ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgb25TZWxlY3RlZENoYW5nZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgb25TZWxlY3RlZENoYW5nZShzZWxlY3RlZEl0ZW1zLmZpbHRlcihpZCA9PiBpZCAhPT0gaXRlbUlkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2Uoc2VsZWN0ZWRJdGVtcy5jb25jYXQoW2l0ZW1JZF0pKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAoc2VhcmNoS2V5d29yZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hLZXl3b3JkIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T25seVNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93T25seVNlbGVjdGVkOiAhc2hvd09ubHlTZWxlY3RlZCB9KTtcbiAgfTtcblxuICBmaWx0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWRLZXksXG4gICAgICBjb2x1bW5zLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sI3doYXQtYWJvdXQtbWVtb2l6YXRpb25cbiAgICByZXR1cm4gbWVtb2l6ZSgoaXRlbXMsIHNlbGVjdGVkSXRlbXMsIHNlYXJjaEtleXdvcmQsIHNob3dPbmx5U2VsZWN0ZWQpID0+IGl0ZW1zLmZpbHRlcigoaSkgPT4ge1xuICAgICAgbGV0IGhpdCA9IGZhbHNlO1xuICAgICAgaWYgKGkuaXNBbHdheXNWaXNpYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHNob3dPbmx5U2VsZWN0ZWQgJiYgIXNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaVtpZEtleV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWFyY2hLZXl3b3JkID09PSAnJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0cmluZ01hdGNoZXIgPSAoZGF0YSwga2V5d29yZCkgPT4ge1xuICAgICAgICBsZXQgZXNjYXBlZEtleXdvcmQgPSBrZXl3b3JkO1xuICAgICAgICBjb25zdCBzcGVjaWFsQ2hhcnMgPSAnW11cXFxcXiQufD8qKygpJztcblxuICAgICAgICAvLyBJZiBrZXl3b3JkIHZhbCBzdGFydHMgd2l0aCBhIFJlZ2V4IHNwZWNpYWwgY2hhcmFjdGVyLCB3ZSBtdXN0IGVzY2FwZSBpdFxuICAgICAgICBpZiAoc3BlY2lhbENoYXJzLmluY2x1ZGVzKGtleXdvcmRbMF0pKSBlc2NhcGVkS2V5d29yZCA9IGBcXFxcJHtrZXl3b3JkfWA7XG4gICAgICAgIHJldHVybiAobmV3IFJlZ0V4cChlc2NhcGVkS2V5d29yZCwgJ2knKSkudGVzdChkYXRhKTtcbiAgICAgIH07XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVLZXkgPSBjLnZhbHVlS2V5IHx8ICd2YWx1ZSc7XG4gICAgICAgIGlmICh0eXBlb2YgaVt2YWx1ZUtleV0gPT09ICdzdHJpbmcnICYmIHN0cmluZ01hdGNoZXIoaVt2YWx1ZUtleV0sIHNlYXJjaEtleXdvcmQpKSB7XG4gICAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaGl0O1xuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlclJvdyA9IChpdGVtLCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgY29sdW1ucyxcbiAgICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgICBpZEtleSxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZSxcbiAgICAgIGlzSXRlbUJvcmRlclZpc2libGUsXG4gICAgICBpc1NlbGVjdENvbHVtblZpc2libGUsXG4gICAgICBpc1NvcnRhYmxlLFxuICAgICAgb25Sb3dDbGljayxcbiAgICAgIG9uUm93RG91YmxlQ2xpY2ssXG4gICAgICBvblJvd0NvbnRleHRNZW51LFxuICAgICAgaGlnaGxpZ2h0ZWRJdGVtcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcy5pbmNsdWRlcyhpdGVtW2lkS2V5XSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3dcbiAgICAgICAgaWQ9e2Ake2lkfS1yb3ctJHtyb3dJbmRleH1gfVxuICAgICAgICBpZEtleT17aWRLZXl9XG4gICAgICAgIGtleT17aXRlbVtpZEtleV19XG4gICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgIHJvd0luZGV4PXtyb3dJbmRleH1cbiAgICAgICAgaXNJbmRleENvbHVtblZpc2libGU9e2lzSW5kZXhDb2x1bW5WaXNpYmxlfVxuICAgICAgICBpdGVtSGVpZ2h0PXtpdGVtSGVpZ2h0fVxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfVxuICAgICAgICBpc1NlbGVjdENvbHVtblZpc2libGU9e2lzU2VsZWN0Q29sdW1uVmlzaWJsZX1cbiAgICAgICAgaXNJdGVtQm9yZGVyVmlzaWJsZT17aXNJdGVtQm9yZGVyVmlzaWJsZX1cbiAgICAgICAgaXNTb3J0YWJsZT17aXNTb3J0YWJsZX1cbiAgICAgICAgb25TZWxlY3RDaGFuZ2U9e3RoaXMuaGFuZGxlSXRlbVNlbGVjdENoYW5nZShpdGVtW2lkS2V5XSwgaXNTZWxlY3RlZCl9XG4gICAgICAgIG9uUm93Q2xpY2s9e29uUm93Q2xpY2t9XG4gICAgICAgIG9uUm93RG91YmxlQ2xpY2s9e29uUm93RG91YmxlQ2xpY2t9XG4gICAgICAgIG9uUm93Q29udGV4dE1lbnU9e29uUm93Q29udGV4dE1lbnV9XG4gICAgICAgIGhpZ2hsaWdodGVkSXRlbXM9e2hpZ2hsaWdodGVkSXRlbXN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaXRlbXMsXG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGgsXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgICAgY29sdW1uSGVhZGVySGVpZ2h0LFxuICAgICAgZHJhZ0l0ZW1aaW5kZXgsXG4gICAgICBpc0NvbHVtbkhlYWRlclZpc2libGUsXG4gICAgICBpc1NlYXJjaGFibGUsXG4gICAgICBpc1NlbGVjdENvbHVtblZpc2libGUsXG4gICAgICBpc1NlbGVjdEFsbFZpc2libGUsXG4gICAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlLFxuICAgICAgaXNBbGxTZWxlY3RlZCxcbiAgICAgIGlzU29ydGFibGUsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICByZWFjdEluZmluaXRlUHJvcHMsXG4gICAgICBvblNvcnRFbmQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgc2hvd09ubHlTZWxlY3RlZCxcbiAgICAgIHNlYXJjaEtleXdvcmQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgLy8gbWVtb2l6ZSBmaWx0ZXJlZEl0ZW1zIHdoZW4gcHJvcHMgaGFzIG5vdCBjaGFuZ2VkIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5maWx0ZXIoKShpdGVtcywgc2VsZWN0ZWRJdGVtcywgc2VhcmNoS2V5d29yZCwgc2hvd09ubHlTZWxlY3RlZCk7XG4gICAgY29uc3QgaXNIZWFkZXJWaXNpYmxlID0gKFxuICAgICAgKGlzU2VsZWN0QWxsVmlzaWJsZSAmJiAhaXNDb2x1bW5IZWFkZXJWaXNpYmxlKVxuICAgICAgfHwgKGlzU2VhcmNoYWJsZSlcbiAgICAgIHx8IChpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlKVxuICAgICk7XG4gICAgLy8gb3ZlcnJpZGUgZnJvbSBwcm9wcyBvciBjYWxjdWxhdGUgZnJvbSBkYXRhXG4gICAgY29uc3QgaXNBbGxTZWxlY3RlZFZhbHVlID0gKFxuICAgICAgaXNBbGxTZWxlY3RlZCAhPT0gbnVsbFxuICAgICAgICA/IGlzQWxsU2VsZWN0ZWRcbiAgICAgICAgOiAoaXRlbXMubGVuZ3RoID4gMCAmJiBpdGVtcy5sZW5ndGggPT09IHNlbGVjdGVkSXRlbXMubGVuZ3RoKVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0Q29udGFpbmVyIGlkPXtpZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGhlaWdodD17aGVpZ2h0fSB3aWR0aD17d2lkdGh9PlxuICAgICAgICB7aXNIZWFkZXJWaXNpYmxlICYmIChcbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICBpZD17YCR7aWR9LWhlYWRlcmB9XG4gICAgICAgICAgICBpc0NvbHVtbkhlYWRlclZpc2libGU9e2lzQ29sdW1uSGVhZGVyVmlzaWJsZX1cbiAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17aXNTZWFyY2hhYmxlfVxuICAgICAgICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlPXtpc1NlbGVjdEFsbFZpc2libGV9XG4gICAgICAgICAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlPXtpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlfVxuICAgICAgICAgICAgaXNBbGxTZWxlY3RlZD17aXNBbGxTZWxlY3RlZFZhbHVlfVxuICAgICAgICAgICAgaXNTaG93T25seVNlbGVjdGVkPXtzaG93T25seVNlbGVjdGVkfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2l0ZW1zLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgIG9uU2VsZWN0QWxsQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdEFsbENoYW5nZX1cbiAgICAgICAgICAgIG9uU2VhcmNoQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgIG9uU2hvd09ubHlTZWxlY3RlZENoYW5nZT17dGhpcy5oYW5kbGVTaG93T25seVNlbGVjdGVkQ2hhbmdlfVxuICAgICAgICAgICAgdHJhbnNsYXRpb25zPXt0cmFuc2xhdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2lzQ29sdW1uSGVhZGVyVmlzaWJsZSAmJiAoXG4gICAgICAgICAgPENvbHVtbkhlYWRlclxuICAgICAgICAgICAgaWQ9e2Ake2lkfS1jb2x1bW4taGVhZGVyYH1cbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICBpc1NlbGVjdENvbHVtblZpc2libGU9e2lzU2VsZWN0Q29sdW1uVmlzaWJsZX1cbiAgICAgICAgICAgIGlzU2VsZWN0QWxsVmlzaWJsZT17aXNTZWxlY3RBbGxWaXNpYmxlfVxuICAgICAgICAgICAgaXNJbmRleENvbHVtblZpc2libGU9e2lzSW5kZXhDb2x1bW5WaXNpYmxlfVxuICAgICAgICAgICAgaXNBbGxTZWxlY3RlZD17aXNBbGxTZWxlY3RlZFZhbHVlfVxuICAgICAgICAgICAgaGVpZ2h0PXtjb2x1bW5IZWFkZXJIZWlnaHR9XG4gICAgICAgICAgICBvblNlbGVjdEFsbENoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RBbGxDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPFJlc3BvbnNpdmVMaXN0Q29udGFpbmVyXG4gICAgICAgICAgaWQ9e2Ake2lkfS1pdGVtc2B9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgaXRlbUhlaWdodD17aXRlbUhlaWdodH1cbiAgICAgICAgICBjb2x1bW5IZWFkZXJIZWlnaHQ9e2NvbHVtbkhlYWRlckhlaWdodH1cbiAgICAgICAgICBkcmFnSXRlbVppbmRleD17ZHJhZ0l0ZW1aaW5kZXh9XG4gICAgICAgICAgaXNIZWFkZXJWaXNpYmxlPXtpc0hlYWRlclZpc2libGV9XG4gICAgICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlPXtpc0NvbHVtbkhlYWRlclZpc2libGV9XG4gICAgICAgICAgaXNTb3J0YWJsZT17aXNTb3J0YWJsZX1cbiAgICAgICAgICByZWFjdEluZmluaXRlUHJvcHM9e3JlYWN0SW5maW5pdGVQcm9wc31cbiAgICAgICAgICBvblNvcnRFbmQ9e29uU29ydEVuZH1cbiAgICAgICAgPlxuICAgICAgICAgIHtmaWx0ZXJlZEl0ZW1zLm1hcCh0aGlzLnJlbmRlclJvdyl9XG4gICAgICAgICAgeyFmaWx0ZXJlZEl0ZW1zLmxlbmd0aCAmJiA8Tm9SZXN1bHRzVGV4dD57dHJhbnNsYXRpb25zLm5vUmVzdWx0c308L05vUmVzdWx0c1RleHQ+fVxuICAgICAgICA8L1Jlc3BvbnNpdmVMaXN0Q29udGFpbmVyPlxuICAgICAgPC9MaXN0Q29udGFpbmVyPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJXaXRoVGhlbWUgPSB0aGVtZU9iaiA9PiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lT2JqfT5cbiAgICAgIHt0aGlzLnJlbmRlckxpc3QoKX1cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY3VzdG9tVGhlbWUsIHRoZW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChjdXN0b21UaGVtZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyV2l0aFRoZW1lKGN1c3RvbVRoZW1lKTsgLy8gb3ZlcnJpZGUgd2l0aCBjdXN0b20gdGhlbWVcbiAgICB9XG4gICAgaWYgKCF0aGVtZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyV2l0aFRoZW1lKHRoZW1lRGVmYXVsdHMpOyAvLyB1c2UgZGVmYXVsdHMgaWYgbm8gdGhlbWUgaXMgcHJvdmlkZWRcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyTGlzdCgpOyAvLyBUaGVtZVByb3ZpZGVyIGlzIGZvdW5kIVxuICB9XG59XG4iXX0=