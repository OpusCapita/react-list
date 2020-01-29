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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      var onShowOnlySelectedChange = _this.props.onShowOnlySelectedChange;

      _this.setState(function (prevState) {
        if (onShowOnlySelectedChange) {
          onShowOnlySelectedChange(!prevState.showOnlySelected);
        }

        return {
          showOnlySelected: !prevState.showOnlySelected
        };
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
      showOnlySelected: props.showOnlySelectedInitialValue
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
  showOnlySelectedInitialValue: false,
  onSelectedChange: function onSelectedChange() {},
  onShowOnlySelectedChange: function onShowOnlySelectedChange() {},
  onRowClick: function onRowClick() {},
  onRowDoubleClick: function onRowDoubleClick() {},
  onRowContextMenu: function onRowContextMenu() {},
  onSelectAllClick: function onSelectAllClick() {},
  onSortEnd: function onSortEnd() {
    console.warn('@opuscapita/react-list: You must implement onSortEnd function to make sorting work! example: https://github.com/clauderic/react-sortable-hoc#basic-example'); // eslint-disable-line
  }
}), _temp)) || _class;

exports["default"] = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTGlzdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaGVpZ2h0Iiwid2lkdGgiLCJOb1Jlc3VsdHNUZXh0IiwicCIsIkxpc3QiLCJ3aXRoVGhlbWUiLCJpdGVtcyIsInNlbGVjdGVkSXRlbXMiLCJpZEtleSIsIm9uU2VsZWN0ZWRDaGFuZ2UiLCJvblNlbGVjdEFsbENsaWNrIiwibGVuZ3RoIiwibWFwIiwiaSIsIml0ZW1JZCIsImlzU2VsZWN0ZWQiLCJmaWx0ZXIiLCJpZCIsImNvbmNhdCIsInNlYXJjaEtleXdvcmQiLCJzZXRTdGF0ZSIsIm9uU2hvd09ubHlTZWxlY3RlZENoYW5nZSIsInByZXZTdGF0ZSIsInNob3dPbmx5U2VsZWN0ZWQiLCJjb2x1bW5zIiwiaGl0IiwiaXNBbHdheXNWaXNpYmxlIiwiaW5jbHVkZXMiLCJzdHJpbmdNYXRjaGVyIiwiZGF0YSIsImtleXdvcmQiLCJlc2NhcGVkS2V5d29yZCIsInNwZWNpYWxDaGFycyIsIlJlZ0V4cCIsInRlc3QiLCJmb3JFYWNoIiwiYyIsInZhbHVlS2V5IiwiaXRlbSIsInJvd0luZGV4IiwiaXRlbUhlaWdodCIsImlzSW5kZXhDb2x1bW5WaXNpYmxlIiwiaXNJdGVtQm9yZGVyVmlzaWJsZSIsImlzU2VsZWN0Q29sdW1uVmlzaWJsZSIsImlzU29ydGFibGUiLCJvblJvd0NsaWNrIiwib25Sb3dEb3VibGVDbGljayIsIm9uUm93Q29udGV4dE1lbnUiLCJoaWdobGlnaHRlZEl0ZW1zIiwiaGFuZGxlSXRlbVNlbGVjdENoYW5nZSIsImNsYXNzTmFtZSIsImNvbHVtbkhlYWRlckhlaWdodCIsImRyYWdJdGVtWmluZGV4IiwiaXNDb2x1bW5IZWFkZXJWaXNpYmxlIiwiaXNTZWFyY2hhYmxlIiwiaXNTZWxlY3RBbGxWaXNpYmxlIiwiaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZSIsImlzQWxsU2VsZWN0ZWQiLCJ0cmFuc2xhdGlvbnMiLCJyZWFjdEluZmluaXRlUHJvcHMiLCJvblNvcnRFbmQiLCJzdGF0ZSIsImZpbHRlcmVkSXRlbXMiLCJpc0hlYWRlclZpc2libGUiLCJpc0FsbFNlbGVjdGVkVmFsdWUiLCJoYW5kbGVTZWxlY3RBbGxDaGFuZ2UiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJoYW5kbGVTaG93T25seVNlbGVjdGVkQ2hhbmdlIiwicmVuZGVyUm93Iiwibm9SZXN1bHRzIiwidGhlbWVPYmoiLCJyZW5kZXJMaXN0Iiwic2hvd09ubHlTZWxlY3RlZEluaXRpYWxWYWx1ZSIsInJlbmRlciIsImN1c3RvbVRoZW1lIiwidGhlbWUiLCJyZW5kZXJXaXRoVGhlbWUiLCJ0aGVtZURlZmF1bHRzIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwidGl0bGUiLCJzZWFyY2giLCJzZWxlY3RBbGwiLCJjb25zb2xlIiwid2FybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUNQLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLE1BQU4sS0FBaUIsTUFBakIsR0FBMEIsTUFBMUIsR0FBc0NELEtBQUssQ0FBQ0MsTUFBNUMsT0FBTDtBQUFBLENBREUsRUFFUixVQUFBRCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDRSxLQUFOLEtBQWdCLE1BQWhCLEdBQXlCLE1BQXpCLEdBQXFDRixLQUFLLENBQUNFLEtBQTNDLE9BQUw7QUFBQSxDQUZHLENBQW5COztBQUtBLElBQU1DLGFBQWEsR0FBR0wsNkJBQU9NLENBQVYsb0JBQW5COztJQU9NQyxJLE9BRExDLDJCOzs7OztBQXdHQyxnQkFBWU4sS0FBWixFQUFtQjtBQUFBOztBQUNqQiw0Q0FBTUEsS0FBTjs7QUFEaUIsNEVBUUssWUFBTTtBQUFBLHdCQU94QixNQUFL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RUFBQUEsb0JBQW9CLEVBQUUsS0ExQkY7QUEyQnBCQyxFQUFBQSxtQkFBbUIsRUFBRSxJQTNCRDtBQTRCcEJlLEVBQUFBLGFBQWEsRUFBRSxJQTVCSztBQTZCcEJiLEVBQUFBLFVBQVUsRUFBRSxLQTdCUTtBQThCcEI0QixFQUFBQSw0QkFBNEIsRUFBRSxLQTlCVjtBQStCcEIvRCxFQUFBQSxnQkFBZ0IsRUFBRSw0QkFBTSxDQUFFLENBL0JOO0FBZ0NwQlksRUFBQUEsd0JBQXdCLEVBQUUsb0NBQU0sQ0FBRSxDQWhDZDtBQWlDcEJ3QixFQUFBQSxVQUFVLEVBQUUsc0JBQU0sQ0FBRSxDQWpDQTtBQWtDcEJDLEVBQUFBLGdCQUFnQixFQUFFLDRCQUFNLENBQUUsQ0FsQ047QUFtQ3BCQyxFQUFBQSxnQkFBZ0IsRUFBRSw0QkFBTSxDQUFFLENBbkNOO0FBb0NwQnJDLEVBQUFBLGdCQUFnQixFQUFFLDRCQUFNLENBQUUsQ0FwQ047QUFxQ3BCa0QsRUFBQUEsU0FBUyxFQUFFLHFCQUFNO0FBQ2Z1QixJQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSw0SkFBYixFQURlLENBQzZKO0FBQzdLO0FBdkNtQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIsIHdpdGhUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBtZW1vaXplIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCBSZXNwb25zaXZlTGlzdENvbnRhaW5lciBmcm9tICcuL3Jlc3BvbnNpdmUtbGlzdC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCBDb2x1bW5IZWFkZXIgZnJvbSAnLi9jb2x1bW4taGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgUm93IGZyb20gJy4vcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyB0aGVtZURlZmF1bHRzLCB0aGVtZVNoYXBlIH0gZnJvbSAnLi90aGVtZSc7XG5cbmNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmhlaWdodCA9PT0gJ2F1dG8nID8gJzEwMCUnIDogYCR7cHJvcHMuaGVpZ2h0fXB4YCl9O1xuICB3aWR0aDogJHtwcm9wcyA9PiAocHJvcHMud2lkdGggPT09ICdhdXRvJyA/ICcxMDAlJyA6IGAke3Byb3BzLndpZHRofXB4YCl9O1xuYDtcblxuY29uc3QgTm9SZXN1bHRzVGV4dCA9IHN0eWxlZC5wYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG5gO1xuXG5leHBvcnQgZGVmYXVsdFxuQHdpdGhUaGVtZVxuY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIFNwZWNpYWwgcHJvcCBmcm9tIHN0eWxlZC1jb21wb25lbnRzIFRoZW1lUHJvdmlkZXIgKGlmIGluIHVzZSlcbiAgICB0aGVtZTogdGhlbWVTaGFwZSxcblxuICAgIC8vIERhdGEgcHJvcHNcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG4gICAgc2VsZWN0ZWRJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBdKSksXG4gICAgaGlnaGxpZ2h0ZWRJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBdKSksXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSksXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLFxuICAgIF0pLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLFxuICAgIF0pLFxuICAgIGl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY29sdW1uSGVhZGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGRyYWdJdGVtWmluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGlkS2V5OiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBrZXkgb2YgaWQgaW4gbGlzdCBkYXRhXG4gICAgdHJhbnNsYXRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc2VhcmNoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc2VsZWN0QWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc2hvd09ubHlTZWxlY3RlZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIG5vUmVzdWx0czogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KSxcbiAgICBjdXN0b21UaGVtZTogdGhlbWVTaGFwZSwgLy8gdGhlbWUgb3ZlcnJpZGVcbiAgICByZWFjdEluZmluaXRlUHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSksXG5cbiAgICAvLyBCb29sZWFuc1xuICAgIGlzU2VhcmNoYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1NlbGVjdEFsbFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNJbmRleENvbHVtblZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzSXRlbUJvcmRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzQWxsU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU29ydGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dPbmx5U2VsZWN0ZWRJbml0aWFsVmFsdWU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gYWN0aW9uc1xuICAgIG9uU2VsZWN0ZWRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2hvd09ubHlTZWxlY3RlZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dEb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dDb250ZXh0TWVudTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3RBbGxDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Tb3J0RW5kOiBQcm9wVHlwZXMuZnVuYyxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGhlbWU6IG51bGwsXG4gICAgaWQ6ICdvYy1yZWFjdC1saXN0JyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHNlbGVjdGVkSXRlbXM6IFtdLFxuICAgIGhpZ2hsaWdodGVkSXRlbXM6IFtdLFxuICAgIGNvbHVtbnM6IFt7IHZhbHVlS2V5OiAndmFsdWUnLCB0aXRsZTogJ1ZhbHVlJyB9XSxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGl0ZW1IZWlnaHQ6IDQwLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogNDAsXG4gICAgZHJhZ0l0ZW1aaW5kZXg6IDEwNjAsXG4gICAgaWRLZXk6ICdpZCcsXG4gICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICBzZWFyY2g6ICdTZWFyY2gnLFxuICAgICAgc2VsZWN0QWxsOiAnQWxsJyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6ICdTaG93IG9ubHkgc2VsZWN0ZWQnLFxuICAgICAgbm9SZXN1bHRzOiAnVGhlcmUgYXJlIG5vIGl0ZW1zIHRvIHNob3cgaW4gdGhpcyBsaXN0LicsXG4gICAgfSxcbiAgICBjdXN0b21UaGVtZTogbnVsbCxcbiAgICByZWFjdEluZmluaXRlUHJvcHM6IHt9LFxuICAgIGlzU2VhcmNoYWJsZTogZmFsc2UsXG4gICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlOiBmYWxzZSxcbiAgICBpc1NlbGVjdEFsbFZpc2libGU6IGZhbHNlLFxuICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGU6IGZhbHNlLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogZmFsc2UsXG4gICAgaXNJbmRleENvbHVtblZpc2libGU6IGZhbHNlLFxuICAgIGlzSXRlbUJvcmRlclZpc2libGU6IHRydWUsXG4gICAgaXNBbGxTZWxlY3RlZDogbnVsbCxcbiAgICBpc1NvcnRhYmxlOiBmYWxzZSxcbiAgICBzaG93T25seVNlbGVjdGVkSW5pdGlhbFZhbHVlOiBmYWxzZSxcbiAgICBvblNlbGVjdGVkQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvblNob3dPbmx5U2VsZWN0ZWRDaGFuZ2U6ICgpID0+IHt9LFxuICAgIG9uUm93Q2xpY2s6ICgpID0+IHt9LFxuICAgIG9uUm93RG91YmxlQ2xpY2s6ICgpID0+IHt9LFxuICAgIG9uUm93Q29udGV4dE1lbnU6ICgpID0+IHt9LFxuICAgIG9uU2VsZWN0QWxsQ2xpY2s6ICgpID0+IHt9LFxuICAgIG9uU29ydEVuZDogKCkgPT4ge1xuICAgICAgY29uc29sZS53YXJuKCdAb3B1c2NhcGl0YS9yZWFjdC1saXN0OiBZb3UgbXVzdCBpbXBsZW1lbnQgb25Tb3J0RW5kIGZ1bmN0aW9uIHRvIG1ha2Ugc29ydGluZyB3b3JrISBleGFtcGxlOiBodHRwczovL2dpdGh1Yi5jb20vY2xhdWRlcmljL3JlYWN0LXNvcnRhYmxlLWhvYyNiYXNpYy1leGFtcGxlJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9LFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaEtleXdvcmQ6ICcnLFxuICAgICAgc2hvd09ubHlTZWxlY3RlZDogcHJvcHMuc2hvd09ubHlTZWxlY3RlZEluaXRpYWxWYWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0QWxsQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGl0ZW1zLFxuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIGlkS2V5LFxuICAgICAgb25TZWxlY3RlZENoYW5nZSxcbiAgICAgIG9uU2VsZWN0QWxsQ2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA+IHNlbGVjdGVkSXRlbXMubGVuZ3RoKSB7XG4gICAgICAvLyBTZWxlY3QgYWxsXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlKGl0ZW1zLm1hcChpID0+IGlbaWRLZXldKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlc2VsZWN0IGFsbFxuICAgICAgb25TZWxlY3RlZENoYW5nZShbXSk7XG4gICAgfVxuICAgIG9uU2VsZWN0QWxsQ2xpY2soKTtcbiAgfVxuXG4gIGhhbmRsZUl0ZW1TZWxlY3RDaGFuZ2UgPSAoaXRlbUlkLCBpc1NlbGVjdGVkKSA9PiAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2Uoc2VsZWN0ZWRJdGVtcy5maWx0ZXIoaWQgPT4gaWQgIT09IGl0ZW1JZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvblNlbGVjdGVkQ2hhbmdlKHNlbGVjdGVkSXRlbXMuY29uY2F0KFtpdGVtSWRdKSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKHNlYXJjaEtleXdvcmQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoS2V5d29yZCB9KTtcbiAgfTtcblxuICBoYW5kbGVTaG93T25seVNlbGVjdGVkQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25TaG93T25seVNlbGVjdGVkQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgaWYgKG9uU2hvd09ubHlTZWxlY3RlZENoYW5nZSkge1xuICAgICAgICBvblNob3dPbmx5U2VsZWN0ZWRDaGFuZ2UoIXByZXZTdGF0ZS5zaG93T25seVNlbGVjdGVkKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoeyBzaG93T25seVNlbGVjdGVkOiAhcHJldlN0YXRlLnNob3dPbmx5U2VsZWN0ZWQgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZmlsdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkS2V5LFxuICAgICAgY29sdW1ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbCN3aGF0LWFib3V0LW1lbW9pemF0aW9uXG4gICAgcmV0dXJuIG1lbW9pemUoKGl0ZW1zLCBzZWxlY3RlZEl0ZW1zLCBzZWFyY2hLZXl3b3JkLCBzaG93T25seVNlbGVjdGVkKSA9PiBpdGVtcy5maWx0ZXIoKGkpID0+IHtcbiAgICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICAgIGlmIChpLmlzQWx3YXlzVmlzaWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChzaG93T25seVNlbGVjdGVkICYmICFzZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGlbaWRLZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoc2VhcmNoS2V5d29yZCA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBjb25zdCBzdHJpbmdNYXRjaGVyID0gKGRhdGEsIGtleXdvcmQpID0+IHtcbiAgICAgICAgbGV0IGVzY2FwZWRLZXl3b3JkID0ga2V5d29yZDtcbiAgICAgICAgY29uc3Qgc3BlY2lhbENoYXJzID0gJ1tdXFxcXF4kLnw/KisoKSc7XG5cbiAgICAgICAgLy8gSWYga2V5d29yZCB2YWwgc3RhcnRzIHdpdGggYSBSZWdleCBzcGVjaWFsIGNoYXJhY3Rlciwgd2UgbXVzdCBlc2NhcGUgaXRcbiAgICAgICAgaWYgKHNwZWNpYWxDaGFycy5pbmNsdWRlcyhrZXl3b3JkWzBdKSkgZXNjYXBlZEtleXdvcmQgPSBgXFxcXCR7a2V5d29yZH1gO1xuICAgICAgICByZXR1cm4gKG5ldyBSZWdFeHAoZXNjYXBlZEtleXdvcmQsICdpJykpLnRlc3QoZGF0YSk7XG4gICAgICB9O1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlS2V5ID0gYy52YWx1ZUtleSB8fCAndmFsdWUnO1xuICAgICAgICBpZiAodHlwZW9mIGlbdmFsdWVLZXldID09PSAnc3RyaW5nJyAmJiBzdHJpbmdNYXRjaGVyKGlbdmFsdWVLZXldLCBzZWFyY2hLZXl3b3JkKSkge1xuICAgICAgICAgIGhpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGhpdDtcbiAgICB9KSk7XG4gIH1cblxuICByZW5kZXJSb3cgPSAoaXRlbSwgcm93SW5kZXgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgaWRLZXksXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgICAgaXNJbmRleENvbHVtblZpc2libGUsXG4gICAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlLFxuICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNTb3J0YWJsZSxcbiAgICAgIG9uUm93Q2xpY2ssXG4gICAgICBvblJvd0RvdWJsZUNsaWNrLFxuICAgICAgb25Sb3dDb250ZXh0TWVudSxcbiAgICAgIGhpZ2hsaWdodGVkSXRlbXMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaXRlbVtpZEtleV0pO1xuICAgIHJldHVybiAoXG4gICAgICA8Um93XG4gICAgICAgIGlkPXtgJHtpZH0tcm93LSR7cm93SW5kZXh9YH1cbiAgICAgICAgaWRLZXk9e2lkS2V5fVxuICAgICAgICBrZXk9e2l0ZW1baWRLZXldfVxuICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICByb3dJbmRleD17cm93SW5kZXh9XG4gICAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlPXtpc0luZGV4Q29sdW1uVmlzaWJsZX1cbiAgICAgICAgaXRlbUhlaWdodD17aXRlbUhlaWdodH1cbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlPXtpc1NlbGVjdENvbHVtblZpc2libGV9XG4gICAgICAgIGlzSXRlbUJvcmRlclZpc2libGU9e2lzSXRlbUJvcmRlclZpc2libGV9XG4gICAgICAgIGlzU29ydGFibGU9e2lzU29ydGFibGV9XG4gICAgICAgIG9uU2VsZWN0Q2hhbmdlPXt0aGlzLmhhbmRsZUl0ZW1TZWxlY3RDaGFuZ2UoaXRlbVtpZEtleV0sIGlzU2VsZWN0ZWQpfVxuICAgICAgICBvblJvd0NsaWNrPXtvblJvd0NsaWNrfVxuICAgICAgICBvblJvd0RvdWJsZUNsaWNrPXtvblJvd0RvdWJsZUNsaWNrfVxuICAgICAgICBvblJvd0NvbnRleHRNZW51PXtvblJvd0NvbnRleHRNZW51fVxuICAgICAgICBoaWdobGlnaHRlZEl0ZW1zPXtoaWdobGlnaHRlZEl0ZW1zfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGl0ZW1zLFxuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoLFxuICAgICAgaXRlbUhlaWdodCxcbiAgICAgIGNvbHVtbkhlYWRlckhlaWdodCxcbiAgICAgIGRyYWdJdGVtWmluZGV4LFxuICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlLFxuICAgICAgaXNTZWFyY2hhYmxlLFxuICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlLFxuICAgICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZSxcbiAgICAgIGlzQWxsU2VsZWN0ZWQsXG4gICAgICBpc1NvcnRhYmxlLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgcmVhY3RJbmZpbml0ZVByb3BzLFxuICAgICAgb25Tb3J0RW5kLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQsXG4gICAgICBzZWFyY2hLZXl3b3JkLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIC8vIG1lbW9pemUgZmlsdGVyZWRJdGVtcyB3aGVuIHByb3BzIGhhcyBub3QgY2hhbmdlZCB0byBpbXByb3ZlIHBlcmZvcm1hbmNlXG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHRoaXMuZmlsdGVyKCkoaXRlbXMsIHNlbGVjdGVkSXRlbXMsIHNlYXJjaEtleXdvcmQsIHNob3dPbmx5U2VsZWN0ZWQpO1xuICAgIGNvbnN0IGlzSGVhZGVyVmlzaWJsZSA9IChcbiAgICAgIChpc1NlbGVjdEFsbFZpc2libGUgJiYgIWlzQ29sdW1uSGVhZGVyVmlzaWJsZSlcbiAgICAgIHx8IChpc1NlYXJjaGFibGUpXG4gICAgICB8fCAoaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZSlcbiAgICApO1xuICAgIC8vIG92ZXJyaWRlIGZyb20gcHJvcHMgb3IgY2FsY3VsYXRlIGZyb20gZGF0YVxuICAgIGNvbnN0IGlzQWxsU2VsZWN0ZWRWYWx1ZSA9IChcbiAgICAgIGlzQWxsU2VsZWN0ZWQgIT09IG51bGxcbiAgICAgICAgPyBpc0FsbFNlbGVjdGVkXG4gICAgICAgIDogKGl0ZW1zLmxlbmd0aCA+IDAgJiYgaXRlbXMubGVuZ3RoID09PSBzZWxlY3RlZEl0ZW1zLmxlbmd0aClcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdENvbnRhaW5lciBpZD17aWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBoZWlnaHQ9e2hlaWdodH0gd2lkdGg9e3dpZHRofT5cbiAgICAgICAge2lzSGVhZGVyVmlzaWJsZSAmJiAoXG4gICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgaWQ9e2Ake2lkfS1oZWFkZXJgfVxuICAgICAgICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlPXtpc0NvbHVtbkhlYWRlclZpc2libGV9XG4gICAgICAgICAgICBpc1NlYXJjaGFibGU9e2lzU2VhcmNoYWJsZX1cbiAgICAgICAgICAgIGlzU2VsZWN0QWxsVmlzaWJsZT17aXNTZWxlY3RBbGxWaXNpYmxlfVxuICAgICAgICAgICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZT17aXNTaG93T25seVNlbGVjdGVkVmlzaWJsZX1cbiAgICAgICAgICAgIGlzQWxsU2VsZWN0ZWQ9e2lzQWxsU2VsZWN0ZWRWYWx1ZX1cbiAgICAgICAgICAgIGlzU2hvd09ubHlTZWxlY3RlZD17c2hvd09ubHlTZWxlY3RlZH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpdGVtcy5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICBvblNlbGVjdEFsbENoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RBbGxDaGFuZ2V9XG4gICAgICAgICAgICBvblNlYXJjaENoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgICAgICBvblNob3dPbmx5U2VsZWN0ZWRDaGFuZ2U9e3RoaXMuaGFuZGxlU2hvd09ubHlTZWxlY3RlZENoYW5nZX1cbiAgICAgICAgICAgIHRyYW5zbGF0aW9ucz17dHJhbnNsYXRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtpc0NvbHVtbkhlYWRlclZpc2libGUgJiYgKFxuICAgICAgICAgIDxDb2x1bW5IZWFkZXJcbiAgICAgICAgICAgIGlkPXtgJHtpZH0tY29sdW1uLWhlYWRlcmB9XG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlPXtpc1NlbGVjdENvbHVtblZpc2libGV9XG4gICAgICAgICAgICBpc1NlbGVjdEFsbFZpc2libGU9e2lzU2VsZWN0QWxsVmlzaWJsZX1cbiAgICAgICAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlPXtpc0luZGV4Q29sdW1uVmlzaWJsZX1cbiAgICAgICAgICAgIGlzQWxsU2VsZWN0ZWQ9e2lzQWxsU2VsZWN0ZWRWYWx1ZX1cbiAgICAgICAgICAgIGhlaWdodD17Y29sdW1uSGVhZGVySGVpZ2h0fVxuICAgICAgICAgICAgb25TZWxlY3RBbGxDaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QWxsQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxSZXNwb25zaXZlTGlzdENvbnRhaW5lclxuICAgICAgICAgIGlkPXtgJHtpZH0taXRlbXNgfVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGl0ZW1IZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgICAgY29sdW1uSGVhZGVySGVpZ2h0PXtjb2x1bW5IZWFkZXJIZWlnaHR9XG4gICAgICAgICAgZHJhZ0l0ZW1aaW5kZXg9e2RyYWdJdGVtWmluZGV4fVxuICAgICAgICAgIGlzSGVhZGVyVmlzaWJsZT17aXNIZWFkZXJWaXNpYmxlfVxuICAgICAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZT17aXNDb2x1bW5IZWFkZXJWaXNpYmxlfVxuICAgICAgICAgIGlzU29ydGFibGU9e2lzU29ydGFibGV9XG4gICAgICAgICAgcmVhY3RJbmZpbml0ZVByb3BzPXtyZWFjdEluZmluaXRlUHJvcHN9XG4gICAgICAgICAgb25Tb3J0RW5kPXtvblNvcnRFbmR9XG4gICAgICAgID5cbiAgICAgICAgICB7ZmlsdGVyZWRJdGVtcy5tYXAodGhpcy5yZW5kZXJSb3cpfVxuICAgICAgICAgIHshZmlsdGVyZWRJdGVtcy5sZW5ndGggJiYgPE5vUmVzdWx0c1RleHQ+e3RyYW5zbGF0aW9ucy5ub1Jlc3VsdHN9PC9Ob1Jlc3VsdHNUZXh0Pn1cbiAgICAgICAgPC9SZXNwb25zaXZlTGlzdENvbnRhaW5lcj5cbiAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyV2l0aFRoZW1lID0gdGhlbWVPYmogPT4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZU9ian0+XG4gICAgICB7dGhpcy5yZW5kZXJMaXN0KCl9XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGN1c3RvbVRoZW1lLCB0aGVtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoY3VzdG9tVGhlbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcldpdGhUaGVtZShjdXN0b21UaGVtZSk7IC8vIG92ZXJyaWRlIHdpdGggY3VzdG9tIHRoZW1lXG4gICAgfVxuICAgIGlmICghdGhlbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcldpdGhUaGVtZSh0aGVtZURlZmF1bHRzKTsgLy8gdXNlIGRlZmF1bHRzIGlmIG5vIHRoZW1lIGlzIHByb3ZpZGVkXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbmRlckxpc3QoKTsgLy8gVGhlbWVQcm92aWRlciBpcyBmb3VuZCFcbiAgfVxufVxuIl19