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

export { List as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJUaGVtZVByb3ZpZGVyIiwid2l0aFRoZW1lIiwibWVtb2l6ZSIsIlJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIiwiSGVhZGVyIiwiQ29sdW1uSGVhZGVyIiwiUm93IiwidGhlbWVEZWZhdWx0cyIsInRoZW1lU2hhcGUiLCJMaXN0Q29udGFpbmVyIiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJ3aWR0aCIsIk5vUmVzdWx0c1RleHQiLCJwIiwiTGlzdCIsIml0ZW1zIiwic2VsZWN0ZWRJdGVtcyIsImlkS2V5Iiwib25TZWxlY3RlZENoYW5nZSIsIm9uU2VsZWN0QWxsQ2xpY2siLCJsZW5ndGgiLCJtYXAiLCJpIiwiaXRlbUlkIiwiaXNTZWxlY3RlZCIsImZpbHRlciIsImlkIiwiY29uY2F0Iiwic2VhcmNoS2V5d29yZCIsInNldFN0YXRlIiwic2hvd09ubHlTZWxlY3RlZCIsInN0YXRlIiwiY29sdW1ucyIsImhpdCIsImlzQWx3YXlzVmlzaWJsZSIsImluY2x1ZGVzIiwic3RyaW5nTWF0Y2hlciIsImRhdGEiLCJrZXl3b3JkIiwiZXNjYXBlZEtleXdvcmQiLCJzcGVjaWFsQ2hhcnMiLCJSZWdFeHAiLCJ0ZXN0IiwiZm9yRWFjaCIsImMiLCJ2YWx1ZUtleSIsIml0ZW0iLCJyb3dJbmRleCIsIml0ZW1IZWlnaHQiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImlzSXRlbUJvcmRlclZpc2libGUiLCJpc1NlbGVjdENvbHVtblZpc2libGUiLCJpc1NvcnRhYmxlIiwib25Sb3dDbGljayIsIm9uUm93RG91YmxlQ2xpY2siLCJvblJvd0NvbnRleHRNZW51IiwiaGFuZGxlSXRlbVNlbGVjdENoYW5nZSIsImNsYXNzTmFtZSIsImNvbHVtbkhlYWRlckhlaWdodCIsImlzQ29sdW1uSGVhZGVyVmlzaWJsZSIsImlzU2VhcmNoYWJsZSIsImlzU2VsZWN0QWxsVmlzaWJsZSIsImlzU2hvd09ubHlTZWxlY3RlZFZpc2libGUiLCJpc0FsbFNlbGVjdGVkIiwidHJhbnNsYXRpb25zIiwicmVhY3RJbmZpbml0ZVByb3BzIiwib25Tb3J0RW5kIiwiZmlsdGVyZWRJdGVtcyIsImlzSGVhZGVyVmlzaWJsZSIsImlzQWxsU2VsZWN0ZWRWYWx1ZSIsImhhbmRsZVNlbGVjdEFsbENoYW5nZSIsImhhbmRsZVNlYXJjaENoYW5nZSIsImhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2UiLCJyZW5kZXJSb3ciLCJub1Jlc3VsdHMiLCJ0aGVtZU9iaiIsInJlbmRlckxpc3QiLCJyZW5kZXIiLCJjdXN0b21UaGVtZSIsInRoZW1lIiwicmVuZGVyV2l0aFRoZW1lIiwiUHVyZUNvbXBvbmVudCIsInRpdGxlIiwic2VhcmNoIiwic2VsZWN0QWxsIiwiY29uc29sZSIsIndhcm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxJQUFpQkMsYUFBakIsRUFBZ0NDLFNBQWhDLFFBQWlELG1CQUFqRDtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsYUFBcEI7QUFDQSxPQUFPQyx1QkFBUCxNQUFvQyx1Q0FBcEM7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG9CQUFuQjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsMkJBQXpCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixpQkFBaEI7QUFDQSxTQUFTQyxhQUFULEVBQXdCQyxVQUF4QixRQUEwQyxTQUExQztBQUVBLElBQU1DLGFBQWEsR0FBR1YsTUFBTSxDQUFDVyxHQUFWLG9CQUNQLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLE1BQU4sS0FBaUIsTUFBakIsR0FBMEIsTUFBMUIsR0FBc0NELEtBQUssQ0FBQ0MsTUFBNUMsT0FBTDtBQUFBLENBREUsRUFFUixVQUFBRCxLQUFLO0FBQUEs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QTRCcEJsQyxFQUFBQSxnQkFBZ0IsRUFBRSw0QkFBTSxDQUFFLENBNUJOO0FBNkJwQm1DLEVBQUFBLFVBQVUsRUFBRSxzQkFBTSxDQUFFLENBN0JBO0FBOEJwQkMsRUFBQUEsZ0JBQWdCLEVBQUUsNEJBQU0sQ0FBRSxDQTlCTjtBQStCcEJDLEVBQUFBLGdCQUFnQixFQUFFLDRCQUFNLENBQUUsQ0EvQk47QUFnQ3BCcEMsRUFBQUEsZ0JBQWdCLEVBQUUsNEJBQU0sQ0FBRSxDQWhDTjtBQWlDcEIrQyxFQUFBQSxTQUFTLEVBQUUscUJBQU07QUFDZm1CLElBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLDRKQUFiLEVBRGUsQ0FDNko7QUFDN0s7QUFuQ21CLEM7O1NBdERsQnhFLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciwgd2l0aFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnbWVtb2l6ZS1vbmUnO1xuaW1wb3J0IFJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIGZyb20gJy4vcmVzcG9uc2l2ZS1saXN0LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IENvbHVtbkhlYWRlciBmcm9tICcuL2NvbHVtbi1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCBSb3cgZnJvbSAnLi9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IHRoZW1lRGVmYXVsdHMsIHRoZW1lU2hhcGUgfSBmcm9tICcuL3RoZW1lJztcblxuY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogJHtwcm9wcyA9PiAocHJvcHMuaGVpZ2h0ID09PSAnYXV0bycgPyAnMTAwJScgOiBgJHtwcm9wcy5oZWlnaHR9cHhgKX07XG4gIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy53aWR0aCA9PT0gJ2F1dG8nID8gJzEwMCUnIDogYCR7cHJvcHMud2lkdGh9cHhgKX07XG5gO1xuXG5jb25zdCBOb1Jlc3VsdHNUZXh0ID0gc3R5bGVkLnBgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0XG5Ad2l0aFRoZW1lXG5jbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gU3BlY2lhbCBwcm9wIGZyb20gc3R5bGVkLWNvbXBvbmVudHMgVGhlbWVQcm92aWRlciAoaWYgaW4gdXNlKVxuICAgIHRoZW1lOiB0aGVtZVNoYXBlLFxuXG4gICAgLy8gRGF0YSBwcm9wc1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcbiAgICBzZWxlY3RlZEl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIF0pKSxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKSxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSksXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSksXG4gICAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb2x1bW5IZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaWRLZXk6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGtleSBvZiBpZCBpbiBsaXN0IGRhdGFcbiAgICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzZWFyY2g6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzZWxlY3RBbGw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzaG93T25seVNlbGVjdGVkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgbm9SZXN1bHRzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICAgIGN1c3RvbVRoZW1lOiB0aGVtZVNoYXBlLCAvLyB0aGVtZSBvdmVycmlkZVxuICAgIHJlYWN0SW5maW5pdGVQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KSxcblxuICAgIC8vIEJvb2xlYW5zXG4gICAgaXNTZWFyY2hhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1NlbGVjdENvbHVtblZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2VsZWN0QWxsVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0luZGV4Q29sdW1uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNJdGVtQm9yZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNBbGxTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTb3J0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvLyBhY3Rpb25zXG4gICAgb25TZWxlY3RlZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dEb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dDb250ZXh0TWVudTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3RBbGxDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Tb3J0RW5kOiBQcm9wVHlwZXMuZnVuYyxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGhlbWU6IG51bGwsXG4gICAgaWQ6ICdvYy1yZWFjdC1saXN0JyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHNlbGVjdGVkSXRlbXM6IFtdLFxuICAgIGNvbHVtbnM6IFt7IHZhbHVlS2V5OiAndmFsdWUnLCB0aXRsZTogJ1ZhbHVlJyB9XSxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGl0ZW1IZWlnaHQ6IDQwLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogNDAsXG4gICAgaWRLZXk6ICdpZCcsXG4gICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICBzZWFyY2g6ICdTZWFyY2gnLFxuICAgICAgc2VsZWN0QWxsOiAnQWxsJyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6ICdTaG93IG9ubHkgc2VsZWN0ZWQnLFxuICAgICAgbm9SZXN1bHRzOiAnVGhlcmUgYXJlIG5vIGl0ZW1zIHRvIHNob3cgaW4gdGhpcyBsaXN0LicsXG4gICAgfSxcbiAgICBjdXN0b21UaGVtZTogbnVsbCxcbiAgICByZWFjdEluZmluaXRlUHJvcHM6IHt9LFxuICAgIGlzU2VhcmNoYWJsZTogZmFsc2UsXG4gICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlOiBmYWxzZSxcbiAgICBpc1NlbGVjdEFsbFZpc2libGU6IGZhbHNlLFxuICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGU6IGZhbHNlLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogZmFsc2UsXG4gICAgaXNJbmRleENvbHVtblZpc2libGU6IGZhbHNlLFxuICAgIGlzSXRlbUJvcmRlclZpc2libGU6IHRydWUsXG4gICAgaXNBbGxTZWxlY3RlZDogbnVsbCxcbiAgICBpc1NvcnRhYmxlOiBmYWxzZSxcbiAgICBvblNlbGVjdGVkQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvblJvd0NsaWNrOiAoKSA9PiB7fSxcbiAgICBvblJvd0RvdWJsZUNsaWNrOiAoKSA9PiB7fSxcbiAgICBvblJvd0NvbnRleHRNZW51OiAoKSA9PiB7fSxcbiAgICBvblNlbGVjdEFsbENsaWNrOiAoKSA9PiB7fSxcbiAgICBvblNvcnRFbmQ6ICgpID0+IHtcbiAgICAgIGNvbnNvbGUud2FybignQG9wdXNjYXBpdGEvcmVhY3QtbGlzdDogWW91IG11c3QgaW1wbGVtZW50IG9uU29ydEVuZCBmdW5jdGlvbiB0byBtYWtlIHNvcnRpbmcgd29yayEgZXhhbXBsZTogaHR0cHM6Ly9naXRodWIuY29tL2NsYXVkZXJpYy9yZWFjdC1zb3J0YWJsZS1ob2MjYmFzaWMtZXhhbXBsZScpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hLZXl3b3JkOiAnJyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVTZWxlY3RBbGxDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbXMsXG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgaWRLZXksXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlLFxuICAgICAgb25TZWxlY3RBbGxDbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXRlbXMubGVuZ3RoID4gc2VsZWN0ZWRJdGVtcy5sZW5ndGgpIHtcbiAgICAgIC8vIFNlbGVjdCBhbGxcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2UoaXRlbXMubWFwKGkgPT4gaVtpZEtleV0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVzZWxlY3QgYWxsXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlKFtdKTtcbiAgICB9XG4gICAgb25TZWxlY3RBbGxDbGljaygpO1xuICB9XG5cbiAgaGFuZGxlSXRlbVNlbGVjdENoYW5nZSA9IChpdGVtSWQsIGlzU2VsZWN0ZWQpID0+ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgb25TZWxlY3RlZENoYW5nZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgb25TZWxlY3RlZENoYW5nZShzZWxlY3RlZEl0ZW1zLmZpbHRlcihpZCA9PiBpZCAhPT0gaXRlbUlkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2Uoc2VsZWN0ZWRJdGVtcy5jb25jYXQoW2l0ZW1JZF0pKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAoc2VhcmNoS2V5d29yZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hLZXl3b3JkIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T25seVNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93T25seVNlbGVjdGVkOiAhc2hvd09ubHlTZWxlY3RlZCB9KTtcbiAgfTtcblxuICBmaWx0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWRLZXksXG4gICAgICBjb2x1bW5zLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sI3doYXQtYWJvdXQtbWVtb2l6YXRpb25cbiAgICByZXR1cm4gbWVtb2l6ZSgoaXRlbXMsIHNlbGVjdGVkSXRlbXMsIHNlYXJjaEtleXdvcmQsIHNob3dPbmx5U2VsZWN0ZWQpID0+IGl0ZW1zLmZpbHRlcigoaSkgPT4ge1xuICAgICAgbGV0IGhpdCA9IGZhbHNlO1xuICAgICAgaWYgKGkuaXNBbHdheXNWaXNpYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHNob3dPbmx5U2VsZWN0ZWQgJiYgIXNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaVtpZEtleV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWFyY2hLZXl3b3JkID09PSAnJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0cmluZ01hdGNoZXIgPSAoZGF0YSwga2V5d29yZCkgPT4ge1xuICAgICAgICBsZXQgZXNjYXBlZEtleXdvcmQgPSBrZXl3b3JkO1xuICAgICAgICBjb25zdCBzcGVjaWFsQ2hhcnMgPSAnW11cXFxcXiQufD8qKygpJztcblxuICAgICAgICAvLyBJZiBrZXl3b3JkIHZhbCBzdGFydHMgd2l0aCBhIFJlZ2V4IHNwZWNpYWwgY2hhcmFjdGVyLCB3ZSBtdXN0IGVzY2FwZSBpdFxuICAgICAgICBpZiAoc3BlY2lhbENoYXJzLmluY2x1ZGVzKGtleXdvcmRbMF0pKSBlc2NhcGVkS2V5d29yZCA9IGBcXFxcJHtrZXl3b3JkfWA7XG4gICAgICAgIHJldHVybiAobmV3IFJlZ0V4cChlc2NhcGVkS2V5d29yZCwgJ2knKSkudGVzdChkYXRhKTtcbiAgICAgIH07XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVLZXkgPSBjLnZhbHVlS2V5IHx8ICd2YWx1ZSc7XG4gICAgICAgIGlmICh0eXBlb2YgaVt2YWx1ZUtleV0gPT09ICdzdHJpbmcnICYmIHN0cmluZ01hdGNoZXIoaVt2YWx1ZUtleV0sIHNlYXJjaEtleXdvcmQpKSB7XG4gICAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaGl0O1xuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlclJvdyA9IChpdGVtLCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgY29sdW1ucyxcbiAgICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgICBpZEtleSxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZSxcbiAgICAgIGlzSXRlbUJvcmRlclZpc2libGUsXG4gICAgICBpc1NlbGVjdENvbHVtblZpc2libGUsXG4gICAgICBpc1NvcnRhYmxlLFxuICAgICAgb25Sb3dDbGljayxcbiAgICAgIG9uUm93RG91YmxlQ2xpY2ssXG4gICAgICBvblJvd0NvbnRleHRNZW51LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGl0ZW1baWRLZXldKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvd1xuICAgICAgICBpZD17YCR7aWR9LXJvdy0ke3Jvd0luZGV4fWB9XG4gICAgICAgIGtleT17aXRlbVtpZEtleV19XG4gICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgIHJvd0luZGV4PXtyb3dJbmRleH1cbiAgICAgICAgaXNJbmRleENvbHVtblZpc2libGU9e2lzSW5kZXhDb2x1bW5WaXNpYmxlfVxuICAgICAgICBpdGVtSGVpZ2h0PXtpdGVtSGVpZ2h0fVxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfVxuICAgICAgICBpc1NlbGVjdENvbHVtblZpc2libGU9e2lzU2VsZWN0Q29sdW1uVmlzaWJsZX1cbiAgICAgICAgaXNJdGVtQm9yZGVyVmlzaWJsZT17aXNJdGVtQm9yZGVyVmlzaWJsZX1cbiAgICAgICAgaXNTb3J0YWJsZT17aXNTb3J0YWJsZX1cbiAgICAgICAgb25TZWxlY3RDaGFuZ2U9e3RoaXMuaGFuZGxlSXRlbVNlbGVjdENoYW5nZShpdGVtW2lkS2V5XSwgaXNTZWxlY3RlZCl9XG4gICAgICAgIG9uUm93Q2xpY2s9e29uUm93Q2xpY2t9XG4gICAgICAgIG9uUm93RG91YmxlQ2xpY2s9e29uUm93RG91YmxlQ2xpY2t9XG4gICAgICAgIG9uUm93Q29udGV4dE1lbnU9e29uUm93Q29udGV4dE1lbnV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaXRlbXMsXG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGgsXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgICAgY29sdW1uSGVhZGVySGVpZ2h0LFxuICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlLFxuICAgICAgaXNTZWFyY2hhYmxlLFxuICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlLFxuICAgICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZSxcbiAgICAgIGlzQWxsU2VsZWN0ZWQsXG4gICAgICBpc1NvcnRhYmxlLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgcmVhY3RJbmZpbml0ZVByb3BzLFxuICAgICAgb25Tb3J0RW5kLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQsXG4gICAgICBzZWFyY2hLZXl3b3JkLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIC8vIG1lbW9pemUgZmlsdGVyZWRJdGVtcyB3aGVuIHByb3BzIGhhcyBub3QgY2hhbmdlZCB0byBpbXByb3ZlIHBlcmZvcm1hbmNlXG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHRoaXMuZmlsdGVyKCkoaXRlbXMsIHNlbGVjdGVkSXRlbXMsIHNlYXJjaEtleXdvcmQsIHNob3dPbmx5U2VsZWN0ZWQpO1xuICAgIGNvbnN0IGlzSGVhZGVyVmlzaWJsZSA9IChcbiAgICAgIChpc1NlbGVjdEFsbFZpc2libGUgJiYgIWlzQ29sdW1uSGVhZGVyVmlzaWJsZSlcbiAgICAgIHx8IChpc1NlYXJjaGFibGUpXG4gICAgICB8fCAoaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZSlcbiAgICApO1xuICAgIC8vIG92ZXJyaWRlIGZyb20gcHJvcHMgb3IgY2FsY3VsYXRlIGZyb20gZGF0YVxuICAgIGNvbnN0IGlzQWxsU2VsZWN0ZWRWYWx1ZSA9IChcbiAgICAgIGlzQWxsU2VsZWN0ZWQgIT09IG51bGxcbiAgICAgICAgPyBpc0FsbFNlbGVjdGVkXG4gICAgICAgIDogKGl0ZW1zLmxlbmd0aCA+IDAgJiYgaXRlbXMubGVuZ3RoID09PSBzZWxlY3RlZEl0ZW1zLmxlbmd0aClcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdENvbnRhaW5lciBpZD17aWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBoZWlnaHQ9e2hlaWdodH0gd2lkdGg9e3dpZHRofT5cbiAgICAgICAge2lzSGVhZGVyVmlzaWJsZSAmJiAoXG4gICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgaWQ9e2Ake2lkfS1oZWFkZXJgfVxuICAgICAgICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlPXtpc0NvbHVtbkhlYWRlclZpc2libGV9XG4gICAgICAgICAgICBpc1NlYXJjaGFibGU9e2lzU2VhcmNoYWJsZX1cbiAgICAgICAgICAgIGlzU2VsZWN0QWxsVmlzaWJsZT17aXNTZWxlY3RBbGxWaXNpYmxlfVxuICAgICAgICAgICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZT17aXNTaG93T25seVNlbGVjdGVkVmlzaWJsZX1cbiAgICAgICAgICAgIGlzQWxsU2VsZWN0ZWQ9e2lzQWxsU2VsZWN0ZWRWYWx1ZX1cbiAgICAgICAgICAgIGlzU2hvd09ubHlTZWxlY3RlZD17c2hvd09ubHlTZWxlY3RlZH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpdGVtcy5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICBvblNlbGVjdEFsbENoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RBbGxDaGFuZ2V9XG4gICAgICAgICAgICBvblNlYXJjaENoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgICAgICBvblNob3dPbmx5U2VsZWN0ZWRDaGFuZ2U9e3RoaXMuaGFuZGxlU2hvd09ubHlTZWxlY3RlZENoYW5nZX1cbiAgICAgICAgICAgIHRyYW5zbGF0aW9ucz17dHJhbnNsYXRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtpc0NvbHVtbkhlYWRlclZpc2libGUgJiYgKFxuICAgICAgICAgIDxDb2x1bW5IZWFkZXJcbiAgICAgICAgICAgIGlkPXtgJHtpZH0tY29sdW1uLWhlYWRlcmB9XG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlPXtpc1NlbGVjdENvbHVtblZpc2libGV9XG4gICAgICAgICAgICBpc1NlbGVjdEFsbFZpc2libGU9e2lzU2VsZWN0QWxsVmlzaWJsZX1cbiAgICAgICAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlPXtpc0luZGV4Q29sdW1uVmlzaWJsZX1cbiAgICAgICAgICAgIGlzQWxsU2VsZWN0ZWQ9e2lzQWxsU2VsZWN0ZWRWYWx1ZX1cbiAgICAgICAgICAgIGhlaWdodD17Y29sdW1uSGVhZGVySGVpZ2h0fVxuICAgICAgICAgICAgb25TZWxlY3RBbGxDaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QWxsQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxSZXNwb25zaXZlTGlzdENvbnRhaW5lclxuICAgICAgICAgIGlkPXtgJHtpZH0taXRlbXNgfVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGl0ZW1IZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgICAgY29sdW1uSGVhZGVySGVpZ2h0PXtjb2x1bW5IZWFkZXJIZWlnaHR9XG4gICAgICAgICAgaXNIZWFkZXJWaXNpYmxlPXtpc0hlYWRlclZpc2libGV9XG4gICAgICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlPXtpc0NvbHVtbkhlYWRlclZpc2libGV9XG4gICAgICAgICAgaXNTb3J0YWJsZT17aXNTb3J0YWJsZX1cbiAgICAgICAgICByZWFjdEluZmluaXRlUHJvcHM9e3JlYWN0SW5maW5pdGVQcm9wc31cbiAgICAgICAgICBvblNvcnRFbmQ9e29uU29ydEVuZH1cbiAgICAgICAgPlxuICAgICAgICAgIHtmaWx0ZXJlZEl0ZW1zLm1hcCh0aGlzLnJlbmRlclJvdyl9XG4gICAgICAgICAgeyFmaWx0ZXJlZEl0ZW1zLmxlbmd0aCAmJiA8Tm9SZXN1bHRzVGV4dD57dHJhbnNsYXRpb25zLm5vUmVzdWx0c308L05vUmVzdWx0c1RleHQ+fVxuICAgICAgICA8L1Jlc3BvbnNpdmVMaXN0Q29udGFpbmVyPlxuICAgICAgPC9MaXN0Q29udGFpbmVyPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJXaXRoVGhlbWUgPSB0aGVtZU9iaiA9PiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lT2JqfT5cbiAgICAgIHt0aGlzLnJlbmRlckxpc3QoKX1cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY3VzdG9tVGhlbWUsIHRoZW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChjdXN0b21UaGVtZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyV2l0aFRoZW1lKGN1c3RvbVRoZW1lKTsgLy8gb3ZlcnJpZGUgd2l0aCBjdXN0b20gdGhlbWVcbiAgICB9XG4gICAgaWYgKCF0aGVtZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyV2l0aFRoZW1lKHRoZW1lRGVmYXVsdHMpOyAvLyB1c2UgZGVmYXVsdHMgaWYgbm8gdGhlbWUgaXMgcHJvdmlkZWRcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyTGlzdCgpOyAvLyBUaGVtZVByb3ZpZGVyIGlzIGZvdW5kIVxuICB9XG59XG4iXX0=