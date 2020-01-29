var _class, _class2, _temp;

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

import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, withTheme } from 'styled-components';
import memoize from 'memoize-one';
import ResponsiveListContainer from './responsive-list-container.component';
import Header from './header.component';
import ColumnHeader from './column-header.component';
import Row from './row.component';
import { themeDefaults, themeShape } from './theme';
var ListContainer = styled.div(_templateObject(), function (props) {
  return props.height === 'auto' ? '100%' : props.height + "px";
}, function (props) {
  return props.width === 'auto' ? '100%' : props.width + "px";
});
var NoResultsText = styled.p(_templateObject2());

var List = withTheme(_class = (_temp = _class2 =
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

      return memoize(function (items, selectedItems, searchKeyword, showOnlySelected) {
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
      return React.createElement(Row, {
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
      return React.createElement(ListContainer, {
        id: id,
        className: className,
        height: height,
        width: width
      }, isHeaderVisible && React.createElement(Header, {
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
      }), isColumnHeaderVisible && React.createElement(ColumnHeader, {
        id: id + "-column-header",
        columns: columns,
        isSelectColumnVisible: isSelectColumnVisible,
        isSelectAllVisible: isSelectAllVisible,
        isIndexColumnVisible: isIndexColumnVisible,
        isAllSelected: isAllSelectedValue,
        height: columnHeaderHeight,
        onSelectAllChange: _this.handleSelectAllChange
      }), React.createElement(ResponsiveListContainer, {
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
      }, filteredItems.map(_this.renderRow), !filteredItems.length && React.createElement(NoResultsText, null, translations.noResults)));
    });

    _defineProperty(_assertThisInitialized(_this), "renderWithTheme", function (themeObj) {
      return React.createElement(ThemeProvider, {
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
      return this.renderWithTheme(themeDefaults); // use defaults if no theme is provided
    }

    return this.renderList(); // ThemeProvider is found!
  };

  return List;
}(React.PureComponent), _defineProperty(_class2, "defaultProps", {
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

export { List as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJUaGVtZVByb3ZpZGVyIiwid2l0aFRoZW1lIiwibWVtb2l6ZSIsIlJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIiwiSGVhZGVyIiwiQ29sdW1uSGVhZGVyIiwiUm93IiwidGhlbWVEZWZhdWx0cyIsInRoZW1lU2hhcGUiLCJMaXN0Q29udGFpbmVyIiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJ3aWR0aCIsIk5vUmVzdWx0c1RleHQiLCJwIiwiTGlzdCIsIml0ZW1zIiwic2VsZWN0ZWRJdGVtcyIsImlkS2V5Iiwib25TZWxlY3RlZENoYW5nZSIsIm9uU2VsZWN0QWxsQ2xpY2siLCJsZW5ndGgiLCJtYXAiLCJpIiwiaXRlbUlkIiwiaXNTZWxlY3RlZCIsImZpbHRlciIsImlkIiwiY29uY2F0Iiwic2VhcmNoS2V5d29yZCIsInNldFN0YXRlIiwib25TaG93T25seVNlbGVjdGVkQ2hhbmdlIiwicHJldlN0YXRlIiwic2hvd09ubHlTZWxlY3RlZCIsImNvbHVtbnMiLCJoaXQiLCJpc0Fsd2F5c1Zpc2libGUiLCJpbmNsdWRlcyIsInN0cmluZ01hdGNoZXIiLCJkYXRhIiwia2V5d29yZCIsImVzY2FwZWRLZXl3b3JkIiwic3BlY2lhbENoYXJzIiwiUmVnRXhwIiwidGVzdCIsImZvckVhY2giLCJjIiwidmFsdWVLZXkiLCJpdGVtIiwicm93SW5kZXgiLCJpdGVtSGVpZ2h0IiwiaXNJbmRleENvbHVtblZpc2libGUiLCJpc0l0ZW1Cb3JkZXJWaXNpYmxlIiwiaXNTZWxlY3RDb2x1bW5WaXNpYmxlIiwiaXNTb3J0YWJsZSIsIm9uUm93Q2xpY2siLCJvblJvd0RvdWJsZUNsaWNrIiwib25Sb3dDb250ZXh0TWVudSIsImhpZ2hsaWdodGVkSXRlbXMiLCJoYW5kbGVJdGVtU2VsZWN0Q2hhbmdlIiwiY2xhc3NOYW1lIiwiY29sdW1uSGVhZGVySGVpZ2h0IiwiZHJhZ0l0ZW1aaW5kZXgiLCJpc0NvbHVtbkhlYWRlclZpc2libGUiLCJpc1NlYXJjaGFibGUiLCJpc1NlbGVjdEFsbFZpc2libGUiLCJpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlIiwiaXNBbGxTZWxlY3RlZCIsInRyYW5zbGF0aW9ucyIsInJlYWN0SW5maW5pdGVQcm9wcyIsIm9uU29ydEVuZCIsInN0YXRlIiwiZmlsdGVyZWRJdGVtcyIsImlzSGVhZGVyVmlzaWJsZSIsImlzQWxsU2VsZWN0ZWRWYWx1ZSIsImhhbmRsZVNlbGVjdEFsbENoYW5nZSIsImhhbmRsZVNlYXJjaENoYW5nZSIsImhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2UiLCJyZW5kZXJSb3ciLCJub1Jlc3VsdHMiLCJ0aGVtZU9iaiIsInJlbmRlckxpc3QiLCJzaG93T25seVNlbGVjdGVkSW5pdGlhbFZhbHVlIiwicmVuZGVyIiwiY3VzdG9tVGhlbWUiLCJ0aGVtZSIsInJlbmRlcldpdGhUaGVtZSIsIlB1cmVDb21wb25lbnQiLCJ0aXRsZSIsInNlYXJjaCIsInNlbGVjdEFsbCIsImNvbnNvbGUiLCJ3YXJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsSUFBaUJDLGFBQWpCLEVBQWdDQyxTQUFoQyxRQUFpRCxtQkFBakQ7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLGFBQXBCO0FBQ0EsT0FBT0MsdUJBQVAsTUFBb0MsdUNBQXBDO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixvQkFBbkI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLDJCQUF6QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsaUJBQWhCO0FBQ0EsU0FBU0MsYUFBVCxFQUF3QkMsVUFBeEIsUUFBMEMsU0FBMUM7QUFFQSxJQUFNQyxhQUFhLEdBQUdWLE1BQU0sQ0FBQ1csR0FBVixvQkFDUCxVQUFBQyxLQUFLO0FBQUEs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YWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIsIHdpdGhUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBtZW1vaXplIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCBSZXNwb25zaXZlTGlzdENvbnRhaW5lciBmcm9tICcuL3Jlc3BvbnNpdmUtbGlzdC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCBDb2x1bW5IZWFkZXIgZnJvbSAnLi9jb2x1bW4taGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgUm93IGZyb20gJy4vcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyB0aGVtZURlZmF1bHRzLCB0aGVtZVNoYXBlIH0gZnJvbSAnLi90aGVtZSc7XG5cbmNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmhlaWdodCA9PT0gJ2F1dG8nID8gJzEwMCUnIDogYCR7cHJvcHMuaGVpZ2h0fXB4YCl9O1xuICB3aWR0aDogJHtwcm9wcyA9PiAocHJvcHMud2lkdGggPT09ICdhdXRvJyA/ICcxMDAlJyA6IGAke3Byb3BzLndpZHRofXB4YCl9O1xuYDtcblxuY29uc3QgTm9SZXN1bHRzVGV4dCA9IHN0eWxlZC5wYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG5gO1xuXG5leHBvcnQgZGVmYXVsdFxuQHdpdGhUaGVtZVxuY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIFNwZWNpYWwgcHJvcCBmcm9tIHN0eWxlZC1jb21wb25lbnRzIFRoZW1lUHJvdmlkZXIgKGlmIGluIHVzZSlcbiAgICB0aGVtZTogdGhlbWVTaGFwZSxcblxuICAgIC8vIERhdGEgcHJvcHNcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG4gICAgc2VsZWN0ZWRJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBdKSksXG4gICAgaGlnaGxpZ2h0ZWRJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBdKSksXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSksXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLFxuICAgIF0pLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLFxuICAgIF0pLFxuICAgIGl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY29sdW1uSGVhZGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGRyYWdJdGVtWmluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGlkS2V5OiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBrZXkgb2YgaWQgaW4gbGlzdCBkYXRhXG4gICAgdHJhbnNsYXRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc2VhcmNoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc2VsZWN0QWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc2hvd09ubHlTZWxlY3RlZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIG5vUmVzdWx0czogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KSxcbiAgICBjdXN0b21UaGVtZTogdGhlbWVTaGFwZSwgLy8gdGhlbWUgb3ZlcnJpZGVcbiAgICByZWFjdEluZmluaXRlUHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSksXG5cbiAgICAvLyBCb29sZWFuc1xuICAgIGlzU2VhcmNoYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1NlbGVjdEFsbFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNJbmRleENvbHVtblZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzSXRlbUJvcmRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzQWxsU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU29ydGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dPbmx5U2VsZWN0ZWRJbml0aWFsVmFsdWU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gYWN0aW9uc1xuICAgIG9uU2VsZWN0ZWRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2hvd09ubHlTZWxlY3RlZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dEb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dDb250ZXh0TWVudTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3RBbGxDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Tb3J0RW5kOiBQcm9wVHlwZXMuZnVuYyxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGhlbWU6IG51bGwsXG4gICAgaWQ6ICdvYy1yZWFjdC1saXN0JyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHNlbGVjdGVkSXRlbXM6IFtdLFxuICAgIGhpZ2hsaWdodGVkSXRlbXM6IFtdLFxuICAgIGNvbHVtbnM6IFt7IHZhbHVlS2V5OiAndmFsdWUnLCB0aXRsZTogJ1ZhbHVlJyB9XSxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGl0ZW1IZWlnaHQ6IDQwLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogNDAsXG4gICAgZHJhZ0l0ZW1aaW5kZXg6IDEwNjAsXG4gICAgaWRLZXk6ICdpZCcsXG4gICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICBzZWFyY2g6ICdTZWFyY2gnLFxuICAgICAgc2VsZWN0QWxsOiAnQWxsJyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6ICdTaG93IG9ubHkgc2VsZWN0ZWQnLFxuICAgICAgbm9SZXN1bHRzOiAnVGhlcmUgYXJlIG5vIGl0ZW1zIHRvIHNob3cgaW4gdGhpcyBsaXN0LicsXG4gICAgfSxcbiAgICBjdXN0b21UaGVtZTogbnVsbCxcbiAgICByZWFjdEluZmluaXRlUHJvcHM6IHt9LFxuICAgIGlzU2VhcmNoYWJsZTogZmFsc2UsXG4gICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlOiBmYWxzZSxcbiAgICBpc1NlbGVjdEFsbFZpc2libGU6IGZhbHNlLFxuICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGU6IGZhbHNlLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogZmFsc2UsXG4gICAgaXNJbmRleENvbHVtblZpc2libGU6IGZhbHNlLFxuICAgIGlzSXRlbUJvcmRlclZpc2libGU6IHRydWUsXG4gICAgaXNBbGxTZWxlY3RlZDogbnVsbCxcbiAgICBpc1NvcnRhYmxlOiBmYWxzZSxcbiAgICBzaG93T25seVNlbGVjdGVkSW5pdGlhbFZhbHVlOiBmYWxzZSxcbiAgICBvblNlbGVjdGVkQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvblNob3dPbmx5U2VsZWN0ZWRDaGFuZ2U6ICgpID0+IHt9LFxuICAgIG9uUm93Q2xpY2s6ICgpID0+IHt9LFxuICAgIG9uUm93RG91YmxlQ2xpY2s6ICgpID0+IHt9LFxuICAgIG9uUm93Q29udGV4dE1lbnU6ICgpID0+IHt9LFxuICAgIG9uU2VsZWN0QWxsQ2xpY2s6ICgpID0+IHt9LFxuICAgIG9uU29ydEVuZDogKCkgPT4ge1xuICAgICAgY29uc29sZS53YXJuKCdAb3B1c2NhcGl0YS9yZWFjdC1saXN0OiBZb3UgbXVzdCBpbXBsZW1lbnQgb25Tb3J0RW5kIGZ1bmN0aW9uIHRvIG1ha2Ugc29ydGluZyB3b3JrISBleGFtcGxlOiBodHRwczovL2dpdGh1Yi5jb20vY2xhdWRlcmljL3JlYWN0LXNvcnRhYmxlLWhvYyNiYXNpYy1leGFtcGxlJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9LFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaEtleXdvcmQ6ICcnLFxuICAgICAgc2hvd09ubHlTZWxlY3RlZDogcHJvcHMuc2hvd09ubHlTZWxlY3RlZEluaXRpYWxWYWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0QWxsQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGl0ZW1zLFxuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIGlkS2V5LFxuICAgICAgb25TZWxlY3RlZENoYW5nZSxcbiAgICAgIG9uU2VsZWN0QWxsQ2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA+IHNlbGVjdGVkSXRlbXMubGVuZ3RoKSB7XG4gICAgICAvLyBTZWxlY3QgYWxsXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlKGl0ZW1zLm1hcChpID0+IGlbaWRLZXldKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlc2VsZWN0IGFsbFxuICAgICAgb25TZWxlY3RlZENoYW5nZShbXSk7XG4gICAgfVxuICAgIG9uU2VsZWN0QWxsQ2xpY2soKTtcbiAgfVxuXG4gIGhhbmRsZUl0ZW1TZWxlY3RDaGFuZ2UgPSAoaXRlbUlkLCBpc1NlbGVjdGVkKSA9PiAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2Uoc2VsZWN0ZWRJdGVtcy5maWx0ZXIoaWQgPT4gaWQgIT09IGl0ZW1JZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvblNlbGVjdGVkQ2hhbmdlKHNlbGVjdGVkSXRlbXMuY29uY2F0KFtpdGVtSWRdKSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKHNlYXJjaEtleXdvcmQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoS2V5d29yZCB9KTtcbiAgfTtcblxuICBoYW5kbGVTaG93T25seVNlbGVjdGVkQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25TaG93T25seVNlbGVjdGVkQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgaWYgKG9uU2hvd09ubHlTZWxlY3RlZENoYW5nZSkge1xuICAgICAgICBvblNob3dPbmx5U2VsZWN0ZWRDaGFuZ2UoIXByZXZTdGF0ZS5zaG93T25seVNlbGVjdGVkKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoeyBzaG93T25seVNlbGVjdGVkOiAhcHJldlN0YXRlLnNob3dPbmx5U2VsZWN0ZWQgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZmlsdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkS2V5LFxuICAgICAgY29sdW1ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbCN3aGF0LWFib3V0LW1lbW9pemF0aW9uXG4gICAgcmV0dXJuIG1lbW9pemUoKGl0ZW1zLCBzZWxlY3RlZEl0ZW1zLCBzZWFyY2hLZXl3b3JkLCBzaG93T25seVNlbGVjdGVkKSA9PiBpdGVtcy5maWx0ZXIoKGkpID0+IHtcbiAgICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICAgIGlmIChpLmlzQWx3YXlzVmlzaWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChzaG93T25seVNlbGVjdGVkICYmICFzZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGlbaWRLZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoc2VhcmNoS2V5d29yZCA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBjb25zdCBzdHJpbmdNYXRjaGVyID0gKGRhdGEsIGtleXdvcmQpID0+IHtcbiAgICAgICAgbGV0IGVzY2FwZWRLZXl3b3JkID0ga2V5d29yZDtcbiAgICAgICAgY29uc3Qgc3BlY2lhbENoYXJzID0gJ1tdXFxcXF4kLnw/KisoKSc7XG5cbiAgICAgICAgLy8gSWYga2V5d29yZCB2YWwgc3RhcnRzIHdpdGggYSBSZWdleCBzcGVjaWFsIGNoYXJhY3Rlciwgd2UgbXVzdCBlc2NhcGUgaXRcbiAgICAgICAgaWYgKHNwZWNpYWxDaGFycy5pbmNsdWRlcyhrZXl3b3JkWzBdKSkgZXNjYXBlZEtleXdvcmQgPSBgXFxcXCR7a2V5d29yZH1gO1xuICAgICAgICByZXR1cm4gKG5ldyBSZWdFeHAoZXNjYXBlZEtleXdvcmQsICdpJykpLnRlc3QoZGF0YSk7XG4gICAgICB9O1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlS2V5ID0gYy52YWx1ZUtleSB8fCAndmFsdWUnO1xuICAgICAgICBpZiAodHlwZW9mIGlbdmFsdWVLZXldID09PSAnc3RyaW5nJyAmJiBzdHJpbmdNYXRjaGVyKGlbdmFsdWVLZXldLCBzZWFyY2hLZXl3b3JkKSkge1xuICAgICAgICAgIGhpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGhpdDtcbiAgICB9KSk7XG4gIH1cblxuICByZW5kZXJSb3cgPSAoaXRlbSwgcm93SW5kZXgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgaWRLZXksXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgICAgaXNJbmRleENvbHVtblZpc2libGUsXG4gICAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlLFxuICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNTb3J0YWJsZSxcbiAgICAgIG9uUm93Q2xpY2ssXG4gICAgICBvblJvd0RvdWJsZUNsaWNrLFxuICAgICAgb25Sb3dDb250ZXh0TWVudSxcbiAgICAgIGhpZ2hsaWdodGVkSXRlbXMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaXRlbVtpZEtleV0pO1xuICAgIHJldHVybiAoXG4gICAgICA8Um93XG4gICAgICAgIGlkPXtgJHtpZH0tcm93LSR7cm93SW5kZXh9YH1cbiAgICAgICAgaWRLZXk9e2lkS2V5fVxuICAgICAgICBrZXk9e2l0ZW1baWRLZXldfVxuICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICByb3dJbmRleD17cm93SW5kZXh9XG4gICAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlPXtpc0luZGV4Q29sdW1uVmlzaWJsZX1cbiAgICAgICAgaXRlbUhlaWdodD17aXRlbUhlaWdodH1cbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlPXtpc1NlbGVjdENvbHVtblZpc2libGV9XG4gICAgICAgIGlzSXRlbUJvcmRlclZpc2libGU9e2lzSXRlbUJvcmRlclZpc2libGV9XG4gICAgICAgIGlzU29ydGFibGU9e2lzU29ydGFibGV9XG4gICAgICAgIG9uU2VsZWN0Q2hhbmdlPXt0aGlzLmhhbmRsZUl0ZW1TZWxlY3RDaGFuZ2UoaXRlbVtpZEtleV0sIGlzU2VsZWN0ZWQpfVxuICAgICAgICBvblJvd0NsaWNrPXtvblJvd0NsaWNrfVxuICAgICAgICBvblJvd0RvdWJsZUNsaWNrPXtvblJvd0RvdWJsZUNsaWNrfVxuICAgICAgICBvblJvd0NvbnRleHRNZW51PXtvblJvd0NvbnRleHRNZW51fVxuICAgICAgICBoaWdobGlnaHRlZEl0ZW1zPXtoaWdobGlnaHRlZEl0ZW1zfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGl0ZW1zLFxuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoLFxuICAgICAgaXRlbUhlaWdodCxcbiAgICAgIGNvbHVtbkhlYWRlckhlaWdodCxcbiAgICAgIGRyYWdJdGVtWmluZGV4LFxuICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlLFxuICAgICAgaXNTZWFyY2hhYmxlLFxuICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlLFxuICAgICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZSxcbiAgICAgIGlzQWxsU2VsZWN0ZWQsXG4gICAgICBpc1NvcnRhYmxlLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgcmVhY3RJbmZpbml0ZVByb3BzLFxuICAgICAgb25Tb3J0RW5kLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQsXG4gICAgICBzZWFyY2hLZXl3b3JkLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIC8vIG1lbW9pemUgZmlsdGVyZWRJdGVtcyB3aGVuIHByb3BzIGhhcyBub3QgY2hhbmdlZCB0byBpbXByb3ZlIHBlcmZvcm1hbmNlXG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHRoaXMuZmlsdGVyKCkoaXRlbXMsIHNlbGVjdGVkSXRlbXMsIHNlYXJjaEtleXdvcmQsIHNob3dPbmx5U2VsZWN0ZWQpO1xuICAgIGNvbnN0IGlzSGVhZGVyVmlzaWJsZSA9IChcbiAgICAgIChpc1NlbGVjdEFsbFZpc2libGUgJiYgIWlzQ29sdW1uSGVhZGVyVmlzaWJsZSlcbiAgICAgIHx8IChpc1NlYXJjaGFibGUpXG4gICAgICB8fCAoaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZSlcbiAgICApO1xuICAgIC8vIG92ZXJyaWRlIGZyb20gcHJvcHMgb3IgY2FsY3VsYXRlIGZyb20gZGF0YVxuICAgIGNvbnN0IGlzQWxsU2VsZWN0ZWRWYWx1ZSA9IChcbiAgICAgIGlzQWxsU2VsZWN0ZWQgIT09IG51bGxcbiAgICAgICAgPyBpc0FsbFNlbGVjdGVkXG4gICAgICAgIDogKGl0ZW1zLmxlbmd0aCA+IDAgJiYgaXRlbXMubGVuZ3RoID09PSBzZWxlY3RlZEl0ZW1zLmxlbmd0aClcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdENvbnRhaW5lciBpZD17aWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBoZWlnaHQ9e2hlaWdodH0gd2lkdGg9e3dpZHRofT5cbiAgICAgICAge2lzSGVhZGVyVmlzaWJsZSAmJiAoXG4gICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgaWQ9e2Ake2lkfS1oZWFkZXJgfVxuICAgICAgICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlPXtpc0NvbHVtbkhlYWRlclZpc2libGV9XG4gICAgICAgICAgICBpc1NlYXJjaGFibGU9e2lzU2VhcmNoYWJsZX1cbiAgICAgICAgICAgIGlzU2VsZWN0QWxsVmlzaWJsZT17aXNTZWxlY3RBbGxWaXNpYmxlfVxuICAgICAgICAgICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZT17aXNTaG93T25seVNlbGVjdGVkVmlzaWJsZX1cbiAgICAgICAgICAgIGlzQWxsU2VsZWN0ZWQ9e2lzQWxsU2VsZWN0ZWRWYWx1ZX1cbiAgICAgICAgICAgIGlzU2hvd09ubHlTZWxlY3RlZD17c2hvd09ubHlTZWxlY3RlZH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpdGVtcy5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICBvblNlbGVjdEFsbENoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RBbGxDaGFuZ2V9XG4gICAgICAgICAgICBvblNlYXJjaENoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgICAgICBvblNob3dPbmx5U2VsZWN0ZWRDaGFuZ2U9e3RoaXMuaGFuZGxlU2hvd09ubHlTZWxlY3RlZENoYW5nZX1cbiAgICAgICAgICAgIHRyYW5zbGF0aW9ucz17dHJhbnNsYXRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtpc0NvbHVtbkhlYWRlclZpc2libGUgJiYgKFxuICAgICAgICAgIDxDb2x1bW5IZWFkZXJcbiAgICAgICAgICAgIGlkPXtgJHtpZH0tY29sdW1uLWhlYWRlcmB9XG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlPXtpc1NlbGVjdENvbHVtblZpc2libGV9XG4gICAgICAgICAgICBpc1NlbGVjdEFsbFZpc2libGU9e2lzU2VsZWN0QWxsVmlzaWJsZX1cbiAgICAgICAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlPXtpc0luZGV4Q29sdW1uVmlzaWJsZX1cbiAgICAgICAgICAgIGlzQWxsU2VsZWN0ZWQ9e2lzQWxsU2VsZWN0ZWRWYWx1ZX1cbiAgICAgICAgICAgIGhlaWdodD17Y29sdW1uSGVhZGVySGVpZ2h0fVxuICAgICAgICAgICAgb25TZWxlY3RBbGxDaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QWxsQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxSZXNwb25zaXZlTGlzdENvbnRhaW5lclxuICAgICAgICAgIGlkPXtgJHtpZH0taXRlbXNgfVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGl0ZW1IZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgICAgY29sdW1uSGVhZGVySGVpZ2h0PXtjb2x1bW5IZWFkZXJIZWlnaHR9XG4gICAgICAgICAgZHJhZ0l0ZW1aaW5kZXg9e2RyYWdJdGVtWmluZGV4fVxuICAgICAgICAgIGlzSGVhZGVyVmlzaWJsZT17aXNIZWFkZXJWaXNpYmxlfVxuICAgICAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZT17aXNDb2x1bW5IZWFkZXJWaXNpYmxlfVxuICAgICAgICAgIGlzU29ydGFibGU9e2lzU29ydGFibGV9XG4gICAgICAgICAgcmVhY3RJbmZpbml0ZVByb3BzPXtyZWFjdEluZmluaXRlUHJvcHN9XG4gICAgICAgICAgb25Tb3J0RW5kPXtvblNvcnRFbmR9XG4gICAgICAgID5cbiAgICAgICAgICB7ZmlsdGVyZWRJdGVtcy5tYXAodGhpcy5yZW5kZXJSb3cpfVxuICAgICAgICAgIHshZmlsdGVyZWRJdGVtcy5sZW5ndGggJiYgPE5vUmVzdWx0c1RleHQ+e3RyYW5zbGF0aW9ucy5ub1Jlc3VsdHN9PC9Ob1Jlc3VsdHNUZXh0Pn1cbiAgICAgICAgPC9SZXNwb25zaXZlTGlzdENvbnRhaW5lcj5cbiAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyV2l0aFRoZW1lID0gdGhlbWVPYmogPT4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZU9ian0+XG4gICAgICB7dGhpcy5yZW5kZXJMaXN0KCl9XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGN1c3RvbVRoZW1lLCB0aGVtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoY3VzdG9tVGhlbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcldpdGhUaGVtZShjdXN0b21UaGVtZSk7IC8vIG92ZXJyaWRlIHdpdGggY3VzdG9tIHRoZW1lXG4gICAgfVxuICAgIGlmICghdGhlbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcldpdGhUaGVtZSh0aGVtZURlZmF1bHRzKTsgLy8gdXNlIGRlZmF1bHRzIGlmIG5vIHRoZW1lIGlzIHByb3ZpZGVkXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbmRlckxpc3QoKTsgLy8gVGhlbWVQcm92aWRlciBpcyBmb3VuZCFcbiAgfVxufVxuIl19