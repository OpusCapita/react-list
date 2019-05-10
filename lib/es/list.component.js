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
      var showOnlySelected = _this.state.showOnlySelected;

      _this.setState({
        showOnlySelected: !showOnlySelected
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
          selectedItems = _this$props4.selectedItems,
          idKey = _this$props4.idKey,
          itemHeight = _this$props4.itemHeight,
          isIndexColumnVisible = _this$props4.isIndexColumnVisible,
          isItemBorderVisible = _this$props4.isItemBorderVisible,
          columns = _this$props4.columns,
          isSelectColumnVisible = _this$props4.isSelectColumnVisible,
          onRowClick = _this$props4.onRowClick,
          onRowDoubleClick = _this$props4.onRowDoubleClick,
          onRowContextMenu = _this$props4.onRowContextMenu;
      var isSelected = selectedItems.includes(item[idKey]);
      return React.createElement(Row, {
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
          translations = _this$props5.translations,
          reactInfiniteProps = _this$props5.reactInfiniteProps;
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
        isHeaderVisible: isHeaderVisible,
        isColumnHeaderVisible: isColumnHeaderVisible,
        reactInfiniteProps: reactInfiniteProps
      }, filteredItems.map(_this.renderRow), !filteredItems.length && React.createElement(NoResultsText, null, translations.noResults)));
    });

    _defineProperty(_assertThisInitialized(_this), "renderWithTheme", function (themeObj) {
      return React.createElement(ThemeProvider, {
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
  onSelectedChange: function onSelectedChange() {},
  onRowClick: function onRowClick() {},
  onRowDoubleClick: function onRowDoubleClick() {},
  onRowContextMenu: function onRowContextMenu() {},
  onSelectAllClick: function onSelectAllClick() {}
}), _temp)) || _class;

export { List as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJUaGVtZVByb3ZpZGVyIiwid2l0aFRoZW1lIiwibWVtb2l6ZSIsIlJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIiwiSGVhZGVyIiwiQ29sdW1uSGVhZGVyIiwiUm93IiwidGhlbWVEZWZhdWx0cyIsInRoZW1lU2hhcGUiLCJMaXN0Q29udGFpbmVyIiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJ3aWR0aCIsIk5vUmVzdWx0c1RleHQiLCJwIiwiTGlzdCIsIml0ZW1zIiwic2VsZWN0ZWRJdGVtcyIsImlkS2V5Iiwib25TZWxlY3RlZENoYW5nZSIsIm9uU2VsZWN0QWxsQ2xpY2siLCJsZW5ndGgiLCJtYXAiLCJpIiwiaXRlbUlkIiwiaXNTZWxlY3RlZCIsImZpbHRlciIsImlkIiwiY29uY2F0Iiwic2VhcmNoS2V5d29yZCIsInNldFN0YXRlIiwic2hvd09ubHlTZWxlY3RlZCIsInN0YXRlIiwiY29sdW1ucyIsImhpdCIsImlzQWx3YXlzVmlzaWJsZSIsImluY2x1ZGVzIiwic3RyaW5nTWF0Y2hlciIsImRhdGEiLCJrZXl3b3JkIiwiZXNjYXBlZEtleXdvcmQiLCJzcGVjaWFsQ2hhcnMiLCJSZWdFeHAiLCJ0ZXN0IiwiZm9yRWFjaCIsImMiLCJ2YWx1ZUtleSIsIml0ZW0iLCJyb3dJbmRleCIsIml0ZW1IZWlnaHQiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImlzSXRlbUJvcmRlclZpc2libGUiLCJpc1NlbGVjdENvbHVtblZpc2libGUiLCJvblJvd0NsaWNrIiwib25Sb3dEb3VibGVDbGljayIsIm9uUm93Q29udGV4dE1lbnUiLCJoYW5kbGVJdGVtU2VsZWN0Q2hhbmdlIiwiY2xhc3NOYW1lIiwiY29sdW1uSGVhZGVySGVpZ2h0IiwiaXNDb2x1bW5IZWFkZXJWaXNpYmxlIiwiaXNTZWFyY2hhYmxlIiwiaXNTZWxlY3RBbGxWaXNpYmxlIiwiaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZSIsImlzQWxsU2VsZWN0ZWQiLCJ0cmFuc2xhdGlvbnMiLCJyZWFjdEluZmluaXRlUHJvcHMiLCJmaWx0ZXJlZEl0ZW1zIiwiaXNIZWFkZXJWaXNpYmxlIiwiaXNBbGxTZWxlY3RlZFZhbHVlIiwiaGFuZGxlU2VsZWN0QWxsQ2hhbmdlIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiaGFuZGxlU2hvd09ubHlTZWxlY3RlZENoYW5nZSIsInJlbmRlclJvdyIsIm5vUmVzdWx0cyIsInRoZW1lT2JqIiwicmVuZGVyTGlzdCIsInJlbmRlciIsImN1c3RvbVRoZW1lIiwidGhlbWUiLCJyZW5kZXJXaXRoVGhlbWUiLCJQdXJlQ29tcG9uZW50IiwidGl0bGUiLCJzZWFyY2giLCJzZWxlY3RBbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxJQUFpQkMsYUFBakIsRUFBZ0NDLFNBQWhDLFFBQWlELG1CQUFqRDtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsYUFBcEI7QUFDQSxPQUFPQyx1QkFBUCxNQUFvQyx1Q0FBcEM7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG9CQUFuQjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsMkJBQXpCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixpQkFBaEI7QUFDQSxTQUFTQyxhQUFULEVBQXdCQyxVQUF4QixRQUEwQyxTQUExQztBQUVBLElBQU1DLGFBQWEsR0FBR1YsTUFBTSxDQUFDVyxHQUFWLG9CQUNQLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLE1BQU4sS0FBaUIsTUFBakIsR0FBMEIsTUFBMUIsR0FBc0NELEtBQUssQ0FBQ0MsTUFBNUMsT0FBTDtBQUFBLENBREUsRUFFUixVQUFBRCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDRSxLQUFOLEtBQWdCLE1BQWhCLEdBQXlCLE1B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WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciwgd2l0aFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnbWVtb2l6ZS1vbmUnO1xuaW1wb3J0IFJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIGZyb20gJy4vcmVzcG9uc2l2ZS1saXN0LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IENvbHVtbkhlYWRlciBmcm9tICcuL2NvbHVtbi1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCBSb3cgZnJvbSAnLi9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IHRoZW1lRGVmYXVsdHMsIHRoZW1lU2hhcGUgfSBmcm9tICcuL3RoZW1lJztcblxuY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogJHtwcm9wcyA9PiAocHJvcHMuaGVpZ2h0ID09PSAnYXV0bycgPyAnMTAwJScgOiBgJHtwcm9wcy5oZWlnaHR9cHhgKX07XG4gIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy53aWR0aCA9PT0gJ2F1dG8nID8gJzEwMCUnIDogYCR7cHJvcHMud2lkdGh9cHhgKX07XG5gO1xuXG5jb25zdCBOb1Jlc3VsdHNUZXh0ID0gc3R5bGVkLnBgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0XG5Ad2l0aFRoZW1lXG5jbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gU3BlY2lhbCBwcm9wIGZyb20gc3R5bGVkLWNvbXBvbmVudHMgVGhlbWVQcm92aWRlciAoaWYgaW4gdXNlKVxuICAgIHRoZW1lOiB0aGVtZVNoYXBlLFxuXG4gICAgLy8gRGF0YSBwcm9wc1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcbiAgICBzZWxlY3RlZEl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIF0pKSxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKSxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSksXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSksXG4gICAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb2x1bW5IZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaWRLZXk6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGtleSBvZiBpZCBpbiBsaXN0IGRhdGFcbiAgICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzZWFyY2g6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzZWxlY3RBbGw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzaG93T25seVNlbGVjdGVkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgbm9SZXN1bHRzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICAgIGN1c3RvbVRoZW1lOiB0aGVtZVNoYXBlLCAvLyB0aGVtZSBvdmVycmlkZVxuICAgIHJlYWN0SW5maW5pdGVQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KSxcblxuICAgIC8vIEJvb2xlYW5zXG4gICAgaXNTZWFyY2hhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1NlbGVjdENvbHVtblZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2VsZWN0QWxsVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0luZGV4Q29sdW1uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNJdGVtQm9yZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNBbGxTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvLyBhY3Rpb25zXG4gICAgb25TZWxlY3RlZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dEb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dDb250ZXh0TWVudTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3RBbGxDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRoZW1lOiBudWxsLFxuICAgIGlkOiAnb2MtcmVhY3QtbGlzdCcsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBzZWxlY3RlZEl0ZW1zOiBbXSxcbiAgICBjb2x1bW5zOiBbeyB2YWx1ZUtleTogJ3ZhbHVlJywgdGl0bGU6ICdWYWx1ZScgfV0sXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgd2lkdGg6ICdhdXRvJyxcbiAgICBpdGVtSGVpZ2h0OiA0MCxcbiAgICBjb2x1bW5IZWFkZXJIZWlnaHQ6IDQwLFxuICAgIGlkS2V5OiAnaWQnLFxuICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgICAgIHNlbGVjdEFsbDogJ0FsbCcsXG4gICAgICBzaG93T25seVNlbGVjdGVkOiAnU2hvdyBvbmx5IHNlbGVjdGVkJyxcbiAgICAgIG5vUmVzdWx0czogJ1RoZXJlIGFyZSBubyBpdGVtcyB0byBzaG93IGluIHRoaXMgbGlzdC4nLFxuICAgIH0sXG4gICAgY3VzdG9tVGhlbWU6IG51bGwsXG4gICAgcmVhY3RJbmZpbml0ZVByb3BzOiB7fSxcbiAgICBpc1NlYXJjaGFibGU6IGZhbHNlLFxuICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZTogZmFsc2UsXG4gICAgaXNTZWxlY3RBbGxWaXNpYmxlOiBmYWxzZSxcbiAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlOiBmYWxzZSxcbiAgICBpc0NvbHVtbkhlYWRlclZpc2libGU6IGZhbHNlLFxuICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlOiBmYWxzZSxcbiAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlOiB0cnVlLFxuICAgIGlzQWxsU2VsZWN0ZWQ6IG51bGwsXG4gICAgb25TZWxlY3RlZENoYW5nZTogKCkgPT4ge30sXG4gICAgb25Sb3dDbGljazogKCkgPT4ge30sXG4gICAgb25Sb3dEb3VibGVDbGljazogKCkgPT4ge30sXG4gICAgb25Sb3dDb250ZXh0TWVudTogKCkgPT4ge30sXG4gICAgb25TZWxlY3RBbGxDbGljazogKCkgPT4ge30sXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoS2V5d29yZDogJycsXG4gICAgICBzaG93T25seVNlbGVjdGVkOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0QWxsQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGl0ZW1zLFxuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIGlkS2V5LFxuICAgICAgb25TZWxlY3RlZENoYW5nZSxcbiAgICAgIG9uU2VsZWN0QWxsQ2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA+IHNlbGVjdGVkSXRlbXMubGVuZ3RoKSB7XG4gICAgICAvLyBTZWxlY3QgYWxsXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlKGl0ZW1zLm1hcChpID0+IGlbaWRLZXldKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlc2VsZWN0IGFsbFxuICAgICAgb25TZWxlY3RlZENoYW5nZShbXSk7XG4gICAgfVxuICAgIG9uU2VsZWN0QWxsQ2xpY2soKTtcbiAgfVxuXG4gIGhhbmRsZUl0ZW1TZWxlY3RDaGFuZ2UgPSAoaXRlbUlkLCBpc1NlbGVjdGVkKSA9PiAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2Uoc2VsZWN0ZWRJdGVtcy5maWx0ZXIoaWQgPT4gaWQgIT09IGl0ZW1JZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvblNlbGVjdGVkQ2hhbmdlKHNlbGVjdGVkSXRlbXMuY29uY2F0KFtpdGVtSWRdKSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKHNlYXJjaEtleXdvcmQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoS2V5d29yZCB9KTtcbiAgfTtcblxuICBoYW5kbGVTaG93T25seVNlbGVjdGVkQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2hvd09ubHlTZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd09ubHlTZWxlY3RlZDogIXNob3dPbmx5U2VsZWN0ZWQgfSk7XG4gIH07XG5cbiAgZmlsdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkS2V5LFxuICAgICAgY29sdW1ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbCN3aGF0LWFib3V0LW1lbW9pemF0aW9uXG4gICAgcmV0dXJuIG1lbW9pemUoKGl0ZW1zLCBzZWxlY3RlZEl0ZW1zLCBzZWFyY2hLZXl3b3JkLCBzaG93T25seVNlbGVjdGVkKSA9PiBpdGVtcy5maWx0ZXIoKGkpID0+IHtcbiAgICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICAgIGlmIChpLmlzQWx3YXlzVmlzaWJsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChzaG93T25seVNlbGVjdGVkICYmICFzZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGlbaWRLZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoc2VhcmNoS2V5d29yZCA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBjb25zdCBzdHJpbmdNYXRjaGVyID0gKGRhdGEsIGtleXdvcmQpID0+IHtcbiAgICAgICAgbGV0IGVzY2FwZWRLZXl3b3JkID0ga2V5d29yZDtcbiAgICAgICAgY29uc3Qgc3BlY2lhbENoYXJzID0gJ1tdXFxcXF4kLnw/KisoKSc7XG5cbiAgICAgICAgLy8gSWYga2V5d29yZCB2YWwgc3RhcnRzIHdpdGggYSBSZWdleCBzcGVjaWFsIGNoYXJhY3Rlciwgd2UgbXVzdCBlc2NhcGUgaXRcbiAgICAgICAgaWYgKHNwZWNpYWxDaGFycy5pbmNsdWRlcyhrZXl3b3JkWzBdKSkgZXNjYXBlZEtleXdvcmQgPSBgXFxcXCR7a2V5d29yZH1gO1xuICAgICAgICByZXR1cm4gKG5ldyBSZWdFeHAoZXNjYXBlZEtleXdvcmQsICdpJykpLnRlc3QoZGF0YSk7XG4gICAgICB9O1xuICAgICAgY29sdW1ucy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlS2V5ID0gYy52YWx1ZUtleSB8fCAndmFsdWUnO1xuICAgICAgICBpZiAodHlwZW9mIGlbdmFsdWVLZXldID09PSAnc3RyaW5nJyAmJiBzdHJpbmdNYXRjaGVyKGlbdmFsdWVLZXldLCBzZWFyY2hLZXl3b3JkKSkge1xuICAgICAgICAgIGhpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGhpdDtcbiAgICB9KSk7XG4gIH1cblxuICByZW5kZXJSb3cgPSAoaXRlbSwgcm93SW5kZXgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgICBpZEtleSxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZSxcbiAgICAgIGlzSXRlbUJvcmRlclZpc2libGUsXG4gICAgICBjb2x1bW5zLFxuICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlLFxuICAgICAgb25Sb3dDbGljayxcbiAgICAgIG9uUm93RG91YmxlQ2xpY2ssXG4gICAgICBvblJvd0NvbnRleHRNZW51LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGl0ZW1baWRLZXldKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvd1xuICAgICAgICBpZD17YCR7aWR9LXJvdy0ke3Jvd0luZGV4fWB9XG4gICAgICAgIGtleT17aXRlbVtpZEtleV19XG4gICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgIHJvd0luZGV4PXtyb3dJbmRleH1cbiAgICAgICAgaXNJbmRleENvbHVtblZpc2libGU9e2lzSW5kZXhDb2x1bW5WaXNpYmxlfVxuICAgICAgICBpdGVtSGVpZ2h0PXtpdGVtSGVpZ2h0fVxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfVxuICAgICAgICBpc1NlbGVjdENvbHVtblZpc2libGU9e2lzU2VsZWN0Q29sdW1uVmlzaWJsZX1cbiAgICAgICAgaXNJdGVtQm9yZGVyVmlzaWJsZT17aXNJdGVtQm9yZGVyVmlzaWJsZX1cbiAgICAgICAgb25TZWxlY3RDaGFuZ2U9e3RoaXMuaGFuZGxlSXRlbVNlbGVjdENoYW5nZShpdGVtW2lkS2V5XSwgaXNTZWxlY3RlZCl9XG4gICAgICAgIG9uUm93Q2xpY2s9e29uUm93Q2xpY2t9XG4gICAgICAgIG9uUm93RG91YmxlQ2xpY2s9e29uUm93RG91YmxlQ2xpY2t9XG4gICAgICAgIG9uUm93Q29udGV4dE1lbnU9e29uUm93Q29udGV4dE1lbnV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaXRlbXMsXG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGgsXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgICAgY29sdW1uSGVhZGVySGVpZ2h0LFxuICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlLFxuICAgICAgaXNTZWFyY2hhYmxlLFxuICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlLFxuICAgICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZSxcbiAgICAgIGlzQWxsU2VsZWN0ZWQsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICByZWFjdEluZmluaXRlUHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgc2hvd09ubHlTZWxlY3RlZCxcbiAgICAgIHNlYXJjaEtleXdvcmQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgLy8gbWVtb2l6ZSBmaWx0ZXJlZEl0ZW1zIHdoZW4gcHJvcHMgaGFzIG5vdCBjaGFuZ2VkIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5maWx0ZXIoKShpdGVtcywgc2VsZWN0ZWRJdGVtcywgc2VhcmNoS2V5d29yZCwgc2hvd09ubHlTZWxlY3RlZCk7XG4gICAgY29uc3QgaXNIZWFkZXJWaXNpYmxlID0gKFxuICAgICAgKGlzU2VsZWN0QWxsVmlzaWJsZSAmJiAhaXNDb2x1bW5IZWFkZXJWaXNpYmxlKVxuICAgICAgfHwgKGlzU2VhcmNoYWJsZSlcbiAgICAgIHx8IChpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlKVxuICAgICk7XG4gICAgLy8gb3ZlcnJpZGUgZnJvbSBwcm9wcyBvciBjYWxjdWxhdGUgZnJvbSBkYXRhXG4gICAgY29uc3QgaXNBbGxTZWxlY3RlZFZhbHVlID0gKFxuICAgICAgaXNBbGxTZWxlY3RlZCAhPT0gbnVsbFxuICAgICAgICA/IGlzQWxsU2VsZWN0ZWRcbiAgICAgICAgOiAoaXRlbXMubGVuZ3RoID4gMCAmJiBpdGVtcy5sZW5ndGggPT09IHNlbGVjdGVkSXRlbXMubGVuZ3RoKVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0Q29udGFpbmVyIGlkPXtpZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGhlaWdodD17aGVpZ2h0fSB3aWR0aD17d2lkdGh9PlxuICAgICAgICB7aXNIZWFkZXJWaXNpYmxlICYmIChcbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICBpZD17YCR7aWR9LWhlYWRlcmB9XG4gICAgICAgICAgICBpc0NvbHVtbkhlYWRlclZpc2libGU9e2lzQ29sdW1uSGVhZGVyVmlzaWJsZX1cbiAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17aXNTZWFyY2hhYmxlfVxuICAgICAgICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlPXtpc1NlbGVjdEFsbFZpc2libGV9XG4gICAgICAgICAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlPXtpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlfVxuICAgICAgICAgICAgaXNBbGxTZWxlY3RlZD17aXNBbGxTZWxlY3RlZFZhbHVlfVxuICAgICAgICAgICAgaXNTaG93T25seVNlbGVjdGVkPXtzaG93T25seVNlbGVjdGVkfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2l0ZW1zLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgIG9uU2VsZWN0QWxsQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdEFsbENoYW5nZX1cbiAgICAgICAgICAgIG9uU2VhcmNoQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgIG9uU2hvd09ubHlTZWxlY3RlZENoYW5nZT17dGhpcy5oYW5kbGVTaG93T25seVNlbGVjdGVkQ2hhbmdlfVxuICAgICAgICAgICAgdHJhbnNsYXRpb25zPXt0cmFuc2xhdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2lzQ29sdW1uSGVhZGVyVmlzaWJsZSAmJiAoXG4gICAgICAgICAgPENvbHVtbkhlYWRlclxuICAgICAgICAgICAgaWQ9e2Ake2lkfS1jb2x1bW4taGVhZGVyYH1cbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICBpc1NlbGVjdENvbHVtblZpc2libGU9e2lzU2VsZWN0Q29sdW1uVmlzaWJsZX1cbiAgICAgICAgICAgIGlzU2VsZWN0QWxsVmlzaWJsZT17aXNTZWxlY3RBbGxWaXNpYmxlfVxuICAgICAgICAgICAgaXNJbmRleENvbHVtblZpc2libGU9e2lzSW5kZXhDb2x1bW5WaXNpYmxlfVxuICAgICAgICAgICAgaXNBbGxTZWxlY3RlZD17aXNBbGxTZWxlY3RlZFZhbHVlfVxuICAgICAgICAgICAgaGVpZ2h0PXtjb2x1bW5IZWFkZXJIZWlnaHR9XG4gICAgICAgICAgICBvblNlbGVjdEFsbENoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RBbGxDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPFJlc3BvbnNpdmVMaXN0Q29udGFpbmVyXG4gICAgICAgICAgaWQ9e2Ake2lkfS1pdGVtc2B9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgaXRlbUhlaWdodD17aXRlbUhlaWdodH1cbiAgICAgICAgICBjb2x1bW5IZWFkZXJIZWlnaHQ9e2NvbHVtbkhlYWRlckhlaWdodH1cbiAgICAgICAgICBpc0hlYWRlclZpc2libGU9e2lzSGVhZGVyVmlzaWJsZX1cbiAgICAgICAgICBpc0NvbHVtbkhlYWRlclZpc2libGU9e2lzQ29sdW1uSGVhZGVyVmlzaWJsZX1cbiAgICAgICAgICByZWFjdEluZmluaXRlUHJvcHM9e3JlYWN0SW5maW5pdGVQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtmaWx0ZXJlZEl0ZW1zLm1hcCh0aGlzLnJlbmRlclJvdyl9XG4gICAgICAgICAgeyFmaWx0ZXJlZEl0ZW1zLmxlbmd0aCAmJiA8Tm9SZXN1bHRzVGV4dD57dHJhbnNsYXRpb25zLm5vUmVzdWx0c308L05vUmVzdWx0c1RleHQ+fVxuICAgICAgICA8L1Jlc3BvbnNpdmVMaXN0Q29udGFpbmVyPlxuICAgICAgPC9MaXN0Q29udGFpbmVyPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJXaXRoVGhlbWUgPSB0aGVtZU9iaiA9PiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lT2JqfT5cbiAgICAgIHt0aGlzLnJlbmRlckxpc3QoKX1cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY3VzdG9tVGhlbWUsIHRoZW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChjdXN0b21UaGVtZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyV2l0aFRoZW1lKGN1c3RvbVRoZW1lKTsgLy8gb3ZlcnJpZGUgd2l0aCBjdXN0b20gdGhlbWVcbiAgICB9XG4gICAgaWYgKCF0aGVtZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyV2l0aFRoZW1lKHRoZW1lRGVmYXVsdHMpOyAvLyB1c2UgZGVmYXVsdHMgaWYgbm8gdGhlbWUgaXMgcHJvdmlkZWRcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyTGlzdCgpOyAvLyBUaGVtZVByb3ZpZGVyIGlzIGZvdW5kIVxuICB9XG59XG4iXX0=