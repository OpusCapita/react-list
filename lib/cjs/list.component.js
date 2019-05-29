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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTGlzdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaGVpZ2h0Iiwid2lkdGgiLCJOb1Jlc3VsdHNUZXh0IiwicCIsIkxpc3QiLCJ3aXRoVGhlbWUiLCJpdGVtcyIsInNlbGVjdGVkSXRlbXMiLCJpZEtleSIsIm9uU2VsZWN0ZWRDaGFuZ2UiLCJvblNlbGVjdEFsbENsaWNrIiwibGVuZ3RoIiwibWFwIiwiaSIsIml0ZW1JZCIsImlzU2VsZWN0ZWQiLCJmaWx0ZXIiLCJpZCIsImNvbmNhdCIsInNlYXJjaEtleXdvcmQiLCJzZXRTdGF0ZSIsInNob3dPbmx5U2VsZWN0ZWQiLCJzdGF0ZSIsImNvbHVtbnMiLCJoaXQiLCJpc0Fsd2F5c1Zpc2libGUiLCJpbmNsdWRlcyIsInN0cmluZ01hdGNoZXIiLCJkYXRhIiwia2V5d29yZCIsImVzY2FwZWRLZXl3b3JkIiwic3BlY2lhbENoYXJzIiwiUmVnRXhwIiwidGVzdCIsImZvckVhY2giLCJjIiwidmFsdWVLZXkiLCJpdGVtIiwicm93SW5kZXgiLCJpdGVtSGVpZ2h0IiwiaXNJbmRleENvbHVtblZpc2libGUiLCJpc0l0ZW1Cb3JkZXJWaXNpYmxlIiwiaXNTZWxlY3RDb2x1bW5WaXNpYmxlIiwiaXNTb3J0YWJsZSIsIm9uUm93Q2xpY2siLCJvblJvd0RvdWJsZUNsaWNrIiwib25Sb3dDb250ZXh0TWVudSIsImhhbmRsZUl0ZW1TZWxlY3RDaGFuZ2UiLCJjbGFzc05hbWUiLCJjb2x1bW5IZWFkZXJIZWlnaHQiLCJpc0NvbHVtbkhlYWRlclZpc2libGUiLCJpc1NlYXJjaGFibGUiLCJpc1NlbGVjdEFsbFZpc2libGUiLCJpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlIiwiaXNBbGxTZWxlY3RlZCIsInRyYW5zbGF0aW9ucyIsInJlYWN0SW5maW5pdGVQcm9wcyIsIm9uU29ydEVuZCIsImZpbHRlcmVkSXRlbXMiLCJpc0hlYWRlclZpc2libGUiLCJpc0FsbFNlbGVjdGVkVmFsdWUiLCJoYW5kbGVTZWxlY3RBbGxDaGFuZ2UiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJoYW5kbGVTaG93T25seVNlbGVjdGVkQ2hhbmdlIiwicmVuZGVyUm93Iiwibm9SZXN1bHRzIiwidGhlbWVPYmoiLCJyZW5kZXJMaXN0IiwicmVuZGVyIiwiY3VzdG9tVGhlbWUiLCJ0aGVtZSIsInJlbmRlcldpdGhUaGVtZSIsInRoZW1lRGVmYXVsdHMiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJ0aXRsZSIsInNlYXJjaCIsInNlbGVjdEFsbCIsImNvbnNvbGUiLCJ3YXJuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUNQLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLE1BQU4sS0FBaUIsTUFBakIsR0FBMEIsTUFBMUIsR0FBc0NELEtBQUssQ0FBQ0MsTUFBNUMsT0FBTDtBQUFBLENBREUsRUFFUixVQUFBRCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDRSxLQUFOLEtBQWdCLE1BQWhCLEdBQXlCLE1BQXpCLEdBQXFDRixLQUFLLENBQUNFLEtBQTNDLE9BQUw7QUFBQSxDQUZHLENBQW5COztBQUtBLElBQU1DLGFBQWEsR0FBR0wsNkJBQU9NLENBQVYsb0JBQW5COztJQU9NQyxJLE9BRExDLDJCOzs7OztBQTZGQyxnQkFBWU4sS0FBWixFQUFtQjtBQUFBOztBQUNqQiw0Q0FBTUEsS0FBTjs7QUFEaUIsNEVBUUssWUFBTTtBQUFBLHdCQU94QixNQUFLQSxLQVBtQjtBQUFBLFVBRTFCTyxLQUYwQixlQUUxQkEsS0FGMEI7QUFBQSxVQUcxQkMsYUFIMEIsZUFHMUJBLGFBSDBCO0FBQUEsVUFJMUJDLEtBSjBCLGVBSTFCQSxLQUowQjtBQUFBLFVB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JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIsIHdpdGhUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBtZW1vaXplIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCBSZXNwb25zaXZlTGlzdENvbnRhaW5lciBmcm9tICcuL3Jlc3BvbnNpdmUtbGlzdC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCBDb2x1bW5IZWFkZXIgZnJvbSAnLi9jb2x1bW4taGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgUm93IGZyb20gJy4vcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyB0aGVtZURlZmF1bHRzLCB0aGVtZVNoYXBlIH0gZnJvbSAnLi90aGVtZSc7XG5cbmNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmhlaWdodCA9PT0gJ2F1dG8nID8gJzEwMCUnIDogYCR7cHJvcHMuaGVpZ2h0fXB4YCl9O1xuICB3aWR0aDogJHtwcm9wcyA9PiAocHJvcHMud2lkdGggPT09ICdhdXRvJyA/ICcxMDAlJyA6IGAke3Byb3BzLndpZHRofXB4YCl9O1xuYDtcblxuY29uc3QgTm9SZXN1bHRzVGV4dCA9IHN0eWxlZC5wYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG5gO1xuXG5leHBvcnQgZGVmYXVsdFxuQHdpdGhUaGVtZVxuY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIFNwZWNpYWwgcHJvcCBmcm9tIHN0eWxlZC1jb21wb25lbnRzIFRoZW1lUHJvdmlkZXIgKGlmIGluIHVzZSlcbiAgICB0aGVtZTogdGhlbWVTaGFwZSxcblxuICAgIC8vIERhdGEgcHJvcHNcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG4gICAgc2VsZWN0ZWRJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBdKSksXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSksXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLFxuICAgIF0pLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLFxuICAgIF0pLFxuICAgIGl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY29sdW1uSGVhZGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGlkS2V5OiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBrZXkgb2YgaWQgaW4gbGlzdCBkYXRhXG4gICAgdHJhbnNsYXRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc2VhcmNoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc2VsZWN0QWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc2hvd09ubHlTZWxlY3RlZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIG5vUmVzdWx0czogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KSxcbiAgICBjdXN0b21UaGVtZTogdGhlbWVTaGFwZSwgLy8gdGhlbWUgb3ZlcnJpZGVcbiAgICByZWFjdEluZmluaXRlUHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSksXG5cbiAgICAvLyBCb29sZWFuc1xuICAgIGlzU2VhcmNoYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1NlbGVjdEFsbFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNJbmRleENvbHVtblZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzSXRlbUJvcmRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzQWxsU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU29ydGFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gYWN0aW9uc1xuICAgIG9uU2VsZWN0ZWRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm93Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm93RG91YmxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm93Q29udGV4dE1lbnU6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0QWxsQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU29ydEVuZDogUHJvcFR5cGVzLmZ1bmMsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRoZW1lOiBudWxsLFxuICAgIGlkOiAnb2MtcmVhY3QtbGlzdCcsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBzZWxlY3RlZEl0ZW1zOiBbXSxcbiAgICBjb2x1bW5zOiBbeyB2YWx1ZUtleTogJ3ZhbHVlJywgdGl0bGU6ICdWYWx1ZScgfV0sXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgd2lkdGg6ICdhdXRvJyxcbiAgICBpdGVtSGVpZ2h0OiA0MCxcbiAgICBjb2x1bW5IZWFkZXJIZWlnaHQ6IDQwLFxuICAgIGlkS2V5OiAnaWQnLFxuICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgICAgIHNlbGVjdEFsbDogJ0FsbCcsXG4gICAgICBzaG93T25seVNlbGVjdGVkOiAnU2hvdyBvbmx5IHNlbGVjdGVkJyxcbiAgICAgIG5vUmVzdWx0czogJ1RoZXJlIGFyZSBubyBpdGVtcyB0byBzaG93IGluIHRoaXMgbGlzdC4nLFxuICAgIH0sXG4gICAgY3VzdG9tVGhlbWU6IG51bGwsXG4gICAgcmVhY3RJbmZpbml0ZVByb3BzOiB7fSxcbiAgICBpc1NlYXJjaGFibGU6IGZhbHNlLFxuICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZTogZmFsc2UsXG4gICAgaXNTZWxlY3RBbGxWaXNpYmxlOiBmYWxzZSxcbiAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlOiBmYWxzZSxcbiAgICBpc0NvbHVtbkhlYWRlclZpc2libGU6IGZhbHNlLFxuICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlOiBmYWxzZSxcbiAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlOiB0cnVlLFxuICAgIGlzQWxsU2VsZWN0ZWQ6IG51bGwsXG4gICAgaXNTb3J0YWJsZTogZmFsc2UsXG4gICAgb25TZWxlY3RlZENoYW5nZTogKCkgPT4ge30sXG4gICAgb25Sb3dDbGljazogKCkgPT4ge30sXG4gICAgb25Sb3dEb3VibGVDbGljazogKCkgPT4ge30sXG4gICAgb25Sb3dDb250ZXh0TWVudTogKCkgPT4ge30sXG4gICAgb25TZWxlY3RBbGxDbGljazogKCkgPT4ge30sXG4gICAgb25Tb3J0RW5kOiAoKSA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oJ0BvcHVzY2FwaXRhL3JlYWN0LWxpc3Q6IFlvdSBtdXN0IGltcGxlbWVudCBvblNvcnRFbmQgZnVuY3Rpb24gdG8gbWFrZSBzb3J0aW5nIHdvcmshIGV4YW1wbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9jbGF1ZGVyaWMvcmVhY3Qtc29ydGFibGUtaG9jI2Jhc2ljLWV4YW1wbGUnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIH0sXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoS2V5d29yZDogJycsXG4gICAgICBzaG93T25seVNlbGVjdGVkOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0QWxsQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGl0ZW1zLFxuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIGlkS2V5LFxuICAgICAgb25TZWxlY3RlZENoYW5nZSxcbiAgICAgIG9uU2VsZWN0QWxsQ2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA+IHNlbGVjdGVkSXRlbXMubGVuZ3RoKSB7XG4gICAgICAvLyBTZWxlY3QgYWxsXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlKGl0ZW1zLm1hcChpID0+IGlbaWRLZXldKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlc2VsZWN0IGFsbFxuICAgICAgb25TZWxlY3RlZENoYW5nZShbXSk7XG4gICAgfVxuICAgIG9uU2VsZWN0QWxsQ2xpY2soKTtcbiAgfVxuXG4gIGhhbmRsZUl0ZW1TZWxlY3RDaGFuZ2UgPSAoaXRlbUlkLCBpc1NlbGVjdGVkKSA9PiAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2Uoc2VsZWN0ZWRJdGVtcy5maWx0ZXIoaWQgPT4gaWQgIT09IGl0ZW1JZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvblNlbGVjdGVkQ2hhbmdlKHNlbGVjdGVkSXRlbXMuY29uY2F0KFtpdGVtSWRdKSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKHNlYXJjaEtleXdvcmQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoS2V5d29yZCB9KTtcbiAgfTtcblxuICBoYW5kbGVTaG93T25seVNlbGVjdGVkQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2hvd09ubHlTZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd09ubHlTZWxlY3RlZDogIXNob3dPbmx5U2VsZWN0ZWQgfSk7XG4gIH07XG5cbiAgZmlsdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkS2V5LFxuICAgICAgY29sdW1ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbCN3aGF0LWFib3V0LW1lbW9pemF0aW9uXG4gICAgcmV0dXJuIG1lbW9pemUoKGl0ZW1zLCBzZWxlY3RlZEl0ZW1zLCBzZWFyY2hLZXl3b3JkLCBzaG93T25seVNlbGVjdGVkKSA9PiBpdGVtcy5maWx0ZXIoKGkpID0+IHtcbiAgICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICAgIGlmIChpLmlzQWx3YXlzVmlzaWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChzaG93T25seVNlbGVjdGVkICYmICFzZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGlbaWRLZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoc2VhcmNoS2V5d29yZCA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBjb25zdCBzdHJpbmdNYXRjaGVyID0gKGRhdGEsIGtleXdvcmQpID0+IHtcbiAgICAgICAgbGV0IGVzY2FwZWRLZXl3b3JkID0ga2V5d29yZDtcbiAgICAgICAgY29uc3Qgc3BlY2lhbENoYXJzID0gJ1tdXFxcXF4kLnw/KisoKSc7XG5cbiAgICAgICAgLy8gSWYga2V5d29yZCB2YWwgc3RhcnRzIHdpdGggYSBSZWdleCBzcGVjaWFsIGNoYXJhY3Rlciwgd2UgbXVzdCBlc2NhcGUgaXRcbiAgICAgICAgaWYgKHNwZWNpYWxDaGFycy5pbmNsdWRlcyhrZXl3b3JkWzBdKSkgZXNjYXBlZEtleXdvcmQgPSBgXFxcXCR7a2V5d29yZH1gO1xuICAgICAgICByZXR1cm4gKG5ldyBSZWdFeHAoZXNjYXBlZEtleXdvcmQsICdpJykpLnRlc3QoZGF0YSk7XG4gICAgICB9O1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlS2V5ID0gYy52YWx1ZUtleSB8fCAndmFsdWUnO1xuICAgICAgICBpZiAodHlwZW9mIGlbdmFsdWVLZXldID09PSAnc3RyaW5nJyAmJiBzdHJpbmdNYXRjaGVyKGlbdmFsdWVLZXldLCBzZWFyY2hLZXl3b3JkKSkge1xuICAgICAgICAgIGhpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGhpdDtcbiAgICB9KSk7XG4gIH1cblxuICByZW5kZXJSb3cgPSAoaXRlbSwgcm93SW5kZXgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgaWRLZXksXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgICAgaXNJbmRleENvbHVtblZpc2libGUsXG4gICAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlLFxuICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNTb3J0YWJsZSxcbiAgICAgIG9uUm93Q2xpY2ssXG4gICAgICBvblJvd0RvdWJsZUNsaWNrLFxuICAgICAgb25Sb3dDb250ZXh0TWVudSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcy5pbmNsdWRlcyhpdGVtW2lkS2V5XSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3dcbiAgICAgICAgaWQ9e2Ake2lkfS1yb3ctJHtyb3dJbmRleH1gfVxuICAgICAgICBrZXk9e2l0ZW1baWRLZXldfVxuICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICByb3dJbmRleD17cm93SW5kZXh9XG4gICAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlPXtpc0luZGV4Q29sdW1uVmlzaWJsZX1cbiAgICAgICAgaXRlbUhlaWdodD17aXRlbUhlaWdodH1cbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlPXtpc1NlbGVjdENvbHVtblZpc2libGV9XG4gICAgICAgIGlzSXRlbUJvcmRlclZpc2libGU9e2lzSXRlbUJvcmRlclZpc2libGV9XG4gICAgICAgIGlzU29ydGFibGU9e2lzU29ydGFibGV9XG4gICAgICAgIG9uU2VsZWN0Q2hhbmdlPXt0aGlzLmhhbmRsZUl0ZW1TZWxlY3RDaGFuZ2UoaXRlbVtpZEtleV0sIGlzU2VsZWN0ZWQpfVxuICAgICAgICBvblJvd0NsaWNrPXtvblJvd0NsaWNrfVxuICAgICAgICBvblJvd0RvdWJsZUNsaWNrPXtvblJvd0RvdWJsZUNsaWNrfVxuICAgICAgICBvblJvd0NvbnRleHRNZW51PXtvblJvd0NvbnRleHRNZW51fVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGl0ZW1zLFxuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoLFxuICAgICAgaXRlbUhlaWdodCxcbiAgICAgIGNvbHVtbkhlYWRlckhlaWdodCxcbiAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZSxcbiAgICAgIGlzU2VhcmNoYWJsZSxcbiAgICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZSxcbiAgICAgIGlzU2VsZWN0QWxsVmlzaWJsZSxcbiAgICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGUsXG4gICAgICBpc0FsbFNlbGVjdGVkLFxuICAgICAgaXNTb3J0YWJsZSxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgIHJlYWN0SW5maW5pdGVQcm9wcyxcbiAgICAgIG9uU29ydEVuZCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBzaG93T25seVNlbGVjdGVkLFxuICAgICAgc2VhcmNoS2V5d29yZCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAvLyBtZW1vaXplIGZpbHRlcmVkSXRlbXMgd2hlbiBwcm9wcyBoYXMgbm90IGNoYW5nZWQgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZVxuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSB0aGlzLmZpbHRlcigpKGl0ZW1zLCBzZWxlY3RlZEl0ZW1zLCBzZWFyY2hLZXl3b3JkLCBzaG93T25seVNlbGVjdGVkKTtcbiAgICBjb25zdCBpc0hlYWRlclZpc2libGUgPSAoXG4gICAgICAoaXNTZWxlY3RBbGxWaXNpYmxlICYmICFpc0NvbHVtbkhlYWRlclZpc2libGUpXG4gICAgICB8fCAoaXNTZWFyY2hhYmxlKVxuICAgICAgfHwgKGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGUpXG4gICAgKTtcbiAgICAvLyBvdmVycmlkZSBmcm9tIHByb3BzIG9yIGNhbGN1bGF0ZSBmcm9tIGRhdGFcbiAgICBjb25zdCBpc0FsbFNlbGVjdGVkVmFsdWUgPSAoXG4gICAgICBpc0FsbFNlbGVjdGVkICE9PSBudWxsXG4gICAgICAgID8gaXNBbGxTZWxlY3RlZFxuICAgICAgICA6IChpdGVtcy5sZW5ndGggPiAwICYmIGl0ZW1zLmxlbmd0aCA9PT0gc2VsZWN0ZWRJdGVtcy5sZW5ndGgpXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RDb250YWluZXIgaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaGVpZ2h0PXtoZWlnaHR9IHdpZHRoPXt3aWR0aH0+XG4gICAgICAgIHtpc0hlYWRlclZpc2libGUgJiYgKFxuICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgIGlkPXtgJHtpZH0taGVhZGVyYH1cbiAgICAgICAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZT17aXNDb2x1bW5IZWFkZXJWaXNpYmxlfVxuICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXtpc1NlYXJjaGFibGV9XG4gICAgICAgICAgICBpc1NlbGVjdEFsbFZpc2libGU9e2lzU2VsZWN0QWxsVmlzaWJsZX1cbiAgICAgICAgICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGU9e2lzU2hvd09ubHlTZWxlY3RlZFZpc2libGV9XG4gICAgICAgICAgICBpc0FsbFNlbGVjdGVkPXtpc0FsbFNlbGVjdGVkVmFsdWV9XG4gICAgICAgICAgICBpc1Nob3dPbmx5U2VsZWN0ZWQ9e3Nob3dPbmx5U2VsZWN0ZWR9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXRlbXMubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgb25TZWxlY3RBbGxDaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QWxsQ2hhbmdlfVxuICAgICAgICAgICAgb25TZWFyY2hDaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgICAgb25TaG93T25seVNlbGVjdGVkQ2hhbmdlPXt0aGlzLmhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2V9XG4gICAgICAgICAgICB0cmFuc2xhdGlvbnM9e3RyYW5zbGF0aW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7aXNDb2x1bW5IZWFkZXJWaXNpYmxlICYmIChcbiAgICAgICAgICA8Q29sdW1uSGVhZGVyXG4gICAgICAgICAgICBpZD17YCR7aWR9LWNvbHVtbi1oZWFkZXJgfVxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZT17aXNTZWxlY3RDb2x1bW5WaXNpYmxlfVxuICAgICAgICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlPXtpc1NlbGVjdEFsbFZpc2libGV9XG4gICAgICAgICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZT17aXNJbmRleENvbHVtblZpc2libGV9XG4gICAgICAgICAgICBpc0FsbFNlbGVjdGVkPXtpc0FsbFNlbGVjdGVkVmFsdWV9XG4gICAgICAgICAgICBoZWlnaHQ9e2NvbHVtbkhlYWRlckhlaWdodH1cbiAgICAgICAgICAgIG9uU2VsZWN0QWxsQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdEFsbENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8UmVzcG9uc2l2ZUxpc3RDb250YWluZXJcbiAgICAgICAgICBpZD17YCR7aWR9LWl0ZW1zYH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBpdGVtSGVpZ2h0PXtpdGVtSGVpZ2h0fVxuICAgICAgICAgIGNvbHVtbkhlYWRlckhlaWdodD17Y29sdW1uSGVhZGVySGVpZ2h0fVxuICAgICAgICAgIGlzSGVhZGVyVmlzaWJsZT17aXNIZWFkZXJWaXNpYmxlfVxuICAgICAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZT17aXNDb2x1bW5IZWFkZXJWaXNpYmxlfVxuICAgICAgICAgIGlzU29ydGFibGU9e2lzU29ydGFibGV9XG4gICAgICAgICAgcmVhY3RJbmZpbml0ZVByb3BzPXtyZWFjdEluZmluaXRlUHJvcHN9XG4gICAgICAgICAgb25Tb3J0RW5kPXtvblNvcnRFbmR9XG4gICAgICAgID5cbiAgICAgICAgICB7ZmlsdGVyZWRJdGVtcy5tYXAodGhpcy5yZW5kZXJSb3cpfVxuICAgICAgICAgIHshZmlsdGVyZWRJdGVtcy5sZW5ndGggJiYgPE5vUmVzdWx0c1RleHQ+e3RyYW5zbGF0aW9ucy5ub1Jlc3VsdHN9PC9Ob1Jlc3VsdHNUZXh0Pn1cbiAgICAgICAgPC9SZXNwb25zaXZlTGlzdENvbnRhaW5lcj5cbiAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyV2l0aFRoZW1lID0gdGhlbWVPYmogPT4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZU9ian0+XG4gICAgICB7dGhpcy5yZW5kZXJMaXN0KCl9XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGN1c3RvbVRoZW1lLCB0aGVtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoY3VzdG9tVGhlbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcldpdGhUaGVtZShjdXN0b21UaGVtZSk7IC8vIG92ZXJyaWRlIHdpdGggY3VzdG9tIHRoZW1lXG4gICAgfVxuICAgIGlmICghdGhlbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcldpdGhUaGVtZSh0aGVtZURlZmF1bHRzKTsgLy8gdXNlIGRlZmF1bHRzIGlmIG5vIHRoZW1lIGlzIHByb3ZpZGVkXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbmRlckxpc3QoKTsgLy8gVGhlbWVQcm92aWRlciBpcyBmb3VuZCFcbiAgfVxufVxuIl19