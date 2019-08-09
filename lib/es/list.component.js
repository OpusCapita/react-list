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

export { List as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJUaGVtZVByb3ZpZGVyIiwid2l0aFRoZW1lIiwibWVtb2l6ZSIsIlJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIiwiSGVhZGVyIiwiQ29sdW1uSGVhZGVyIiwiUm93IiwidGhlbWVEZWZhdWx0cyIsInRoZW1lU2hhcGUiLCJMaXN0Q29udGFpbmVyIiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJ3aWR0aCIsIk5vUmVzdWx0c1RleHQiLCJwIiwiTGlzdCIsIml0ZW1zIiwic2VsZWN0ZWRJdGVtcyIsImlkS2V5Iiwib25TZWxlY3RlZENoYW5nZSIsIm9uU2VsZWN0QWxsQ2xpY2siLCJsZW5ndGgiLCJtYXAiLCJpIiwiaXRlbUlkIiwiaXNTZWxlY3RlZCIsImZpbHRlciIsImlkIiwiY29uY2F0Iiwic2VhcmNoS2V5d29yZCIsInNldFN0YXRlIiwic2hvd09ubHlTZWxlY3RlZCIsInN0YXRlIiwiY29sdW1ucyIsImhpdCIsImlzQWx3YXlzVmlzaWJsZSIsImluY2x1ZGVzIiwic3RyaW5nTWF0Y2hlciIsImRhdGEiLCJrZXl3b3JkIiwiZXNjYXBlZEtleXdvcmQiLCJzcGVjaWFsQ2hhcnMiLCJSZWdFeHAiLCJ0ZXN0IiwiZm9yRWFjaCIsImMiLCJ2YWx1ZUtleSIsIml0ZW0iLCJyb3dJbmRleCIsIml0ZW1IZWlnaHQiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImlzSXRlbUJvcmRlclZpc2libGUiLCJpc1NlbGVjdENvbHVtblZpc2libGUiLCJpc1NvcnRhYmxlIiwib25Sb3dDbGljayIsIm9uUm93RG91YmxlQ2xpY2siLCJvblJvd0NvbnRleHRNZW51IiwiaGlnaGxpZ2h0ZWRJdGVtcyIsImhhbmRsZUl0ZW1TZWxlY3RDaGFuZ2UiLCJjbGFzc05hbWUiLCJjb2x1bW5IZWFkZXJIZWlnaHQiLCJkcmFnSXRlbVppbmRleCIsImlzQ29sdW1uSGVhZGVyVmlzaWJsZSIsImlzU2VhcmNoYWJsZSIsImlzU2VsZWN0QWxsVmlzaWJsZSIsImlzU2hvd09ubHlTZWxlY3RlZFZpc2libGUiLCJpc0FsbFNlbGVjdGVkIiwidHJhbnNsYXRpb25zIiwicmVhY3RJbmZpbml0ZVByb3BzIiwib25Tb3J0RW5kIiwiZmlsdGVyZWRJdGVtcyIsImlzSGVhZGVyVmlzaWJsZSIsImlzQWxsU2VsZWN0ZWRWYWx1ZSIsImhhbmRsZVNlbGVjdEFsbENoYW5nZSIsImhhbmRsZVNlYXJjaENoYW5nZSIsImhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2UiLCJyZW5kZXJSb3ciLCJub1Jlc3VsdHMiLCJ0aGVtZU9iaiIsInJlbmRlckxpc3QiLCJyZW5kZXIiLCJjdXN0b21UaGVtZSIsInRoZW1lIiwicmVuZGVyV2l0aFRoZW1lIiwiUHVyZUNvbXBvbmVudCIsInRpdGxlIiwic2VhcmNoIiwic2VsZWN0QWxsIiwiY29uc29sZSIsIndhcm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxJQUFpQkMsYUFBakIsRUFBZ0NDLFNBQWhDLFFBQWlELG1CQUFqRDtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsYUFBcEI7QUFDQSxPQUFPQyx1QkFBUCxNQUFvQyx1Q0FBcEM7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG9CQUFuQjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsMkJBQXpCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixpQkFBaEI7QUFDQSxTQUFTQyxhQUFULEVBQXdCQyxVQUF4QixRQUEwQyxTQUExQztBQUVBLElBQU1DLGFBQWEsR0FBR1YsTUFBTSxDQUFDVyxHQUFWLG9CQUNQLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLE1BQU4sS0FBaUIsTUFBakIsR0FBMEIsTUFBMUIsR0FBc0NELEtBQUssQ0FBQ0MsTUFBNUMsT0FBTDtBQUFBLENBREUsRUFFUixVQUFBRCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDRSxLQUFOLEtBQWdCLE1BQWhCLEdBQXlCLE1BQXpCLEdBQXFDRixLQUFLLENBQUNFLEtBQTNDLE9BQUw7QUFBQSxDQUZHLENBQW5CO0FBS0EsSUFBTUMsYUFBYSxHQUFHZixNQUFNLENBQUNnQixDQUFWLG9CQUFuQjs7SUFPTUMsSSxHQURMZixTOzs7OztBQW9HQyxnQkFBWVUsS0FBWixFQUFtQjtBQUFBOztBQUNqQiw0Q0FBTUEsS0FBTjs7QUFEaUIsNEVBUUssWUFBTTtBQUFBLHdCQU94QixNQUFLQSxLQVBtQjtBQUFBLFVBRTFCTSxLQUYwQixlQUUxQkEsS0FGMEI7QUFBQSxVQUcxQkMsYUFIMEIsZUFHMUJBLGFBSDBCO0FBQUEsVUFJMUJDLEtBSjBCLGVBSTFCQSxLQUowQjtBQUFBLFVBSzFCQyxnQkFMMEIsZUFLMUJBLGdCQUwwQjtBQUFBLFVBTTFCQyxnQkFOMEIsZUFNMUJBLGdCQU4wQjs7QUFRNUIsVUFBSUosS0FBSyxDQUFDSyxNQUFOLEdBQWVKLGFBQWEsQ0FBQ0ksTUFBakMsRUFBeUM7QUFDdkM7QUFDQUYsUUFBQUEsZ0JBQWdCLENBQUNILEtBQUssQ0FBQ00sR0FBTixDQUFVLFVBQUFDLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxDQUFDTCxLQUFELENBQUw7QUFBQSxTQUFYLENBQUQsQ0FBaEI7QUFDRCxPQUhELE1BR087QUFDTDtBQUNBQyxRQUFBQSxnQkFBZ0IsQ0FBQyxFQUFELENBQWhCO0FBQ0Q7O0FBQ0RDLE1BQUFBLGdCQUFnQjtBQUNqQixLQXhCa0I7O0FBQUEsNkVBMEJNLFVBQUNJLE1BQUQsRUFBU0MsVUFBVDtBQUFBLGFBQXdCLFlBQU07QUFBQSwyQkFJakQsTUFBS2YsS0FKNEM7QUFBQSxZQUVuRE8sYUFGbUQsZ0JBRW5EQSxhQUZtRDtBQUFBLFlBR25ERSxnQkFIbUQsZ0JBR25EQSxnQkFIbUQ7O0FBS3JELFlBQUlNLFVBQUosRUFBZ0I7QUFDZE4sVUFBQUEsZ0JBQWdCLENBQUNGLGFBQWEsQ0FBQ1MsTUFBZCxDQUFxQixVQUFBQyxFQUFFO0FBQUEsbUJBQUlBLEVBQUUsS0FBS0gsTUFBWDtBQUFBLFdBQXZCLENBQUQsQ0FBaEI7QUFDRCxTQUZELE1BRU87QUFDTEwsVUFBQUEsZ0JBQWdCLENBQUNGLGFBQWEsQ0FBQ1csTUFBZCxDQUFxQixDQUFDSixNQUFELENBQXJCLENBQUQsQ0FBaEI7QUFDRDtBQUNGLE9BVndCO0FBQUEsS0ExQk47O0FBQUEseUVBc0NFLFVBQUNLLGFBQUQsRUFBbUI7QUFDdEMsWUFBS0MsUUFBTCxDQUFjO0FBQUVELFFBQUFBLGFBQWEsRUFBYkE7QUFBRixPQUFkO0FBQ0QsS0F4Q2tCOztBQUFBLG1GQTBDWSxZQUFNO0FBQUEsVUFDM0JFLGdCQUQyQixHQUNOLE1BQUtDLEtBREMsQ0FDM0JELGdCQUQyQjs7QUFFbkMsWUFBS0QsUUFBTCxDQUFjO0FBQUVDLFFBQUFBLGdCQUFnQixFQUFFLENBQUNBO0FBQXJCLE9BQWQ7QUFDRCxLQTdDa0I7O0FBQUEsNkRBK0NWLFlBQU07QUFBQSx5QkFJVCxNQUFLckIsS0FKSTtBQUFBLFVBRVhRLEtBRlcsZ0JBRVhBLEtBRlc7QUFBQSxVQUdYZSxPQUhXLGdCQUdYQSxPQUhXLEVBS2I7O0FBQ0EsYUFBT2hDLE9BQU8sQ0FBQyxVQUFDZSxLQUFELEVBQVFDLGFBQVIsRUFBdUJZLGFBQXZCLEVBQXNDRSxnQkFBdEM7QUFBQSxlQUEyRGYsS0FBSyxDQUFDVSxNQUFOLENBQWEsVUFBQ0gsQ0FBRCxFQUFPO0FBQzVGLGNBQUlXLEdBQUcsR0FBRyxLQUFWOztBQUNBLGNBQUlYLENBQUMsQ0FBQ1ksZUFBTixFQUF1QjtBQUNyQixtQkFBTyxJQUFQO0FBQ0Q7O0FBQ0QsY0FBSUosZ0JBQWdCLElBQUksQ0FBQ2QsYUFBYSxDQUFDbUIsUUFBZCxDQUF1QmIsQ0FBQyxDQUFDTCxLQUFELENBQXhCLENBQXpCLEVBQTJEO0FBQ3pELG1CQUFPLEtBQVA7QUFDRDs7QUFDRCxjQUFJVyxhQUFhLEtBQUssRUFBdEIsRUFBMEI7QUFDeEIsbUJBQU8sSUFBUDtBQUNEOztBQUNELGNBQU1RLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFPQyxPQUFQLEVBQW1CO0FBQ3ZDLGdCQUFJQyxjQUFjLEdBQUdELE9BQXJCO0FBQ0EsZ0JBQU1FLFlBQVksR0FBRyxlQUFyQixDQUZ1QyxDQUl2Qzs7QUFDQSxnQkFBSUEsWUFBWSxDQUFDTCxRQUFiLENBQXNCRyxPQUFPLENBQUMsQ0FBRCxDQUE3QixDQUFKLEVBQXVDQyxjQUFjLFVBQVFELE9BQXRCO0FBQ3ZDLG1CQUFRLElBQUlHLE1BQUosQ0FBV0YsY0FBWCxFQUEyQixHQUEzQixDQUFELENBQWtDRyxJQUFsQyxDQUF1Q0wsSUFBdkMsQ0FBUDtBQUNELFdBUEQ7O0FBUUFMLFVBQUFBLE9BQU8sQ0FBQ1csT0FBUixDQUFnQixVQUFDQyxDQUFELEVBQU87QUFDckIsZ0JBQU1DLFFBQVEsR0FBR0QsQ0FBQyxDQUFDQyxRQUFGLElBQWMsT0FBL0I7O0FBQ0EsZ0JBQUksT0FBT3ZCLENBQUMsQ0FBQ3VCLFFBQUQsQ0FBUixLQUF1QixRQUF2QixJQUFtQ1QsYUFBYSxDQUFDZCxDQUFDLENBQUN1QixRQUFELENBQUYsRUFBY2pCLGFBQWQsQ0FBcEQsRUFBa0Y7QUFDaEZLLGNBQUFBLEdBQUcsR0FBRyxJQUFOO0FBQ0Q7QUFDRixXQUxEO0FBTUEsaUJBQU9BLEdBQVA7QUFDRCxTQTFCeUUsQ0FBM0Q7QUFBQSxPQUFELENBQWQ7QUEyQkQsS0FoRmtCOztBQUFBLGdFQWtGUCxVQUFDYSxJQUFELEVBQU9DLFFBQVAsRUFBb0I7QUFBQSx5QkFlMUIsTUFBS3RDLEtBZnFCO0FBQUEsVUFFNUJpQixFQUY0QixnQkFFNUJBLEVBRjRCO0FBQUEsVUFHNUJNLE9BSDRCLGdCQUc1QkEsT0FINEI7QUFBQSxVQUk1QmhCLGFBSjRCLGdCQUk1QkEsYUFKNEI7QUFBQSxVQUs1QkMsS0FMNEIsZ0JBSzVCQSxLQUw0QjtBQUFBLFVBTTVCK0IsVUFONEIsZ0JBTTVCQSxVQU40QjtBQUFBLFVBTzVCQyxvQkFQNEIsZ0JBTzVCQSxvQkFQNEI7QUFBQSxVQVE1QkMsbUJBUjRCLGdCQVE1QkEsbUJBUjRCO0FBQUEsVUFTNUJDLHFCQVQ0QixnQkFTNUJBLHFCQVQ0QjtBQUFBLFVBVTVCQyxVQVY0QixnQkFVNUJBLFVBVjRCO0FBQUEsVUFXNUJDLFVBWDRCLGdCQVc1QkEsVUFYNEI7QUFBQSxVQVk1QkMsZ0JBWjRCLGdCQVk1QkEsZ0JBWjRCO0FBQUEsVUFhNUJDLGdCQWI0QixnQkFhNUJBLGdCQWI0QjtBQUFBLFVBYzVCQyxnQkFkNEIsZ0JBYzVCQSxnQkFkNEI7QUFnQjlCLFVBQU1oQyxVQUFVLEdBQUdSLGFBQWEsQ0FBQ21CLFFBQWQsQ0FBdUJXLElBQUksQ0FBQzdCLEtBQUQsQ0FBM0IsQ0FBbkI7QUFDQSxhQUNFLG9CQUFDLEdBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBS1MsRUFBTCxhQUFlcUIsUUFEbkI7QUFFRSxRQUFBLEtBQUssRUFBRTlCLEtBRlQ7QUFHRSxRQUFBLEdBQUcsRUFBRTZCLElBQUksQ0FBQzdCLEtBQUQsQ0FIWDtBQUlFLFFBQUEsSUFBSSxFQUFFNkIsSUFKUjtBQUtFLFFBQUEsUUFBUSxFQUFFQyxRQUxaO0FBTUUsUUFBQSxvQkFBb0IsRUFBRUUsb0JBTnhCO0FBT0UsUUFBQSxVQUFVLEVBQUVELFVBUGQ7QUFRRSxRQUFBLE9BQU8sRUFBRWhCLE9BUlg7QUFTRSxRQUFBLFVBQVUsRUFBRVIsVUFUZDtBQVVFLFFBQUEscUJBQXFCLEVBQUUyQixxQkFWekI7QUFXRSxRQUFBLG1CQUFtQixFQUFFRCxtQkFYdkI7QUFZRSxRQUFBLFVBQVUsRUFBRUUsVUFaZDtBQWFFLFFBQUEsY0FBYyxFQUFFLE1BQUtLLHNCQUFMLENBQTRCWCxJQUFJLENBQUM3QixLQUFELENBQWhDLEVBQXlDTyxVQUF6QyxDQWJsQjtBQWNFLFFBQUEsVUFBVSxFQUFFNkIsVUFkZDtBQWVFLFFBQUEsZ0JBQWdCLEVBQUVDLGdCQWZwQjtBQWdCRSxRQUFBLGdCQUFnQixFQUFFQyxnQkFoQnBCO0FBaUJFLFFBQUEsZ0JBQWdCLEVBQUVDO0FBakJwQixRQURGO0FBcUJELEtBeEhrQjs7QUFBQSxpRUEwSE4sWUFBTTtBQUFBLHlCQXVCYixNQUFLL0MsS0F2QlE7QUFBQSxVQUVmaUIsRUFGZSxnQkFFZkEsRUFGZTtBQUFBLFVBR2ZnQyxTQUhlLGdCQUdmQSxTQUhlO0FBQUEsVUFJZjNDLEtBSmUsZ0JBSWZBLEtBSmU7QUFBQSxVQUtmQyxhQUxlLGdCQUtmQSxhQUxlO0FBQUEsVUFNZmdCLE9BTmUsZ0JBTWZBLE9BTmU7QUFBQSxVQU9maUIsb0JBUGUsZ0JBT2ZBLG9CQVBlO0FBQUEsVUFRZnZDLE1BUmUsZ0JBUWZBLE1BUmU7QUFBQSxVQVNmQyxLQVRlLGdCQVNmQSxLQVRlO0FBQUEsVUFVZnFDLFVBVmUsZ0JBVWZBLFVBVmU7QUFBQSxVQVdmVyxrQkFYZSxnQkFXZkEsa0JBWGU7QUFBQSxVQVlmQyxjQVplLGdCQVlmQSxjQVplO0FBQUEsVUFhZkMscUJBYmUsZ0JBYWZBLHFCQWJlO0FBQUEsVUFjZkMsWUFkZSxnQkFjZkEsWUFkZTtBQUFBLFVBZWZYLHFCQWZlLGdCQWVmQSxxQkFmZTtBQUFBLFVBZ0JmWSxrQkFoQmUsZ0JBZ0JmQSxrQkFoQmU7QUFBQSxVQWlCZkMseUJBakJlLGdCQWlCZkEseUJBakJlO0FBQUEsVUFrQmZDLGFBbEJlLGdCQWtCZkEsYUFsQmU7QUFBQSxVQW1CZmIsVUFuQmUsZ0JBbUJmQSxVQW5CZTtBQUFBLFVBb0JmYyxZQXBCZSxnQkFvQmZBLFlBcEJlO0FBQUEsVUFxQmZDLGtCQXJCZSxnQkFxQmZBLGtCQXJCZTtBQUFBLFVBc0JmQyxTQXRCZSxnQkFzQmZBLFNBdEJlO0FBQUEsd0JBMkJiLE1BQUtyQyxLQTNCUTtBQUFBLFVBeUJmRCxnQkF6QmUsZUF5QmZBLGdCQXpCZTtBQUFBLFVBMEJmRixhQTFCZSxlQTBCZkEsYUExQmUsRUE0QmpCOztBQUNBLFVBQU15QyxhQUFhLEdBQUcsTUFBSzVDLE1BQUwsR0FBY1YsS0FBZCxFQUFxQkMsYUFBckIsRUFBb0NZLGFBQXBDLEVBQW1ERSxnQkFBbkQsQ0FBdEI7O0FBQ0EsVUFBTXdDLGVBQWUsR0FDbEJQLGtCQUFrQixJQUFJLENBQUNGLHFCQUF4QixJQUNJQyxZQURKLElBRUlFLHlCQUhOLENBOUJpQixDQW1DakI7O0FBQ0EsVUFBTU8sa0JBQWtCLEdBQ3RCTixhQUFhLEtBQUssSUFBbEIsR0FDSUEsYUFESixHQUVLbEQsS0FBSyxDQUFDSyxNQUFOLEdBQWUsQ0FBZixJQUFvQkwsS0FBSyxDQUFDSyxNQUFOLEtBQWlCSixhQUFhLENBQUNJLE1BSDFEO0FBS0EsYUFDRSxvQkFBQyxhQUFEO0FBQWUsUUFBQSxFQUFFLEVBQUVNLEVBQW5CO0FBQXVCLFFBQUEsU0FBUyxFQUFFZ0MsU0FBbEM7QUFBNkMsUUFBQSxNQUFNLEVBQUVoRCxNQUFyRDtBQUE2RCxRQUFBLEtBQUssRUFBRUM7QUFBcEUsU0FDRzJELGVBQWUsSUFDZCxvQkFBQyxNQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUs1QyxFQUFMLFlBREo7QUFFRSxRQUFBLHFCQUFxQixFQUFFbUMscUJBRnpCO0FBR0UsUUFBQSxZQUFZLEVBQUVDLFlBSGhCO0FBSUUsUUFBQSxrQkFBa0IsRUFBRUMsa0JBSnRCO0FBS0UsUUFBQSx5QkFBeUIsRUFBRUMseUJBTDdCO0FBTUUsUUFBQSxhQUFhLEVBQUVPLGtCQU5qQjtBQU9FLFFBQUEsa0JBQWtCLEVBQUV6QyxnQkFQdEI7QUFRRSxRQUFBLFFBQVEsRUFBRWYsS0FBSyxDQUFDSyxNQUFOLEtBQWlCLENBUjdCO0FBU0UsUUFBQSxpQkFBaUIsRUFBRSxNQUFLb0QscUJBVDFCO0FBVUUsUUFBQSxjQUFjLEVBQUUsTUFBS0Msa0JBVnZCO0FBV0UsUUFBQSx3QkFBd0IsRUFBRSxNQUFLQyw0QkFYakM7QUFZRSxRQUFBLFlBQVksRUFBRVI7QUFaaEIsUUFGSixFQWlCR0wscUJBQXFCLElBQ3BCLG9CQUFDLFlBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBS25DLEVBQUwsbUJBREo7QUFFRSxRQUFBLE9BQU8sRUFBRU0sT0FGWDtBQUdFLFFBQUEscUJBQXFCLEVBQUVtQixxQkFIekI7QUFJRSxRQUFBLGtCQUFrQixFQUFFWSxrQkFKdEI7QUFLRSxRQUFBLG9CQUFvQixFQUFFZCxvQkFMeEI7QUFNRSxRQUFBLGFBQWEsRUFBRXNCLGtCQU5qQjtBQU9FLFFBQUEsTUFBTSxFQUFFWixrQkFQVjtBQVFFLFFBQUEsaUJBQWlCLEVBQUUsTUFBS2E7QUFSMUIsUUFsQkosRUE2QkUsb0JBQUMsdUJBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBSzlDLEVBQUwsV0FESjtBQUVFLFFBQUEsTUFBTSxFQUFFaEIsTUFGVjtBQUdFLFFBQUEsVUFBVSxFQUFFc0MsVUFIZDtBQUlFLFFBQUEsa0JBQWtCLEVBQUVXLGtCQUp0QjtBQUtFLFFBQUEsY0FBYyxFQUFFQyxjQUxsQjtBQU1FLFFBQUEsZUFBZSxFQUFFVSxlQU5uQjtBQU9FLFFBQUEscUJBQXFCLEVBQUVULHFCQVB6QjtBQVFFLFFBQUEsVUFBVSxFQUFFVCxVQVJkO0FBU0UsUUFBQSxrQkFBa0IsRUFBRWUsa0JBVHRCO0FBVUUsUUFBQSxTQUFTLEVBQUVDO0FBVmIsU0FZR0MsYUFBYSxDQUFDaEQsR0FBZCxDQUFrQixNQUFLc0QsU0FBdkIsQ0FaSCxFQWFHLENBQUNOLGFBQWEsQ0FBQ2pELE1BQWYsSUFBeUIsb0JBQUMsYUFBRCxRQUFnQjhDLFlBQVksQ0FBQ1UsU0FBN0IsQ0FiNUIsQ0E3QkYsQ0FERjtBQStDRCxLQWxOa0I7O0FBQUEsc0VBb05ELFVBQUFDLFFBQVE7QUFBQSxhQUN4QixvQkFBQyxhQUFEO0FBQWUsUUFBQSxLQUFLLEVBQUVBO0FBQXRCLFNBQ0csTUFBS0MsVUFBTCxFQURILENBRHdCO0FBQUEsS0FwTlA7O0FBRWpCLFVBQUsvQyxLQUFMLEdBQWE7QUFDWEgsTUFBQUEsYUFBYSxFQUFFLEVBREo7QUFFWEUsTUFBQUEsZ0JBQWdCLEVBQUU7QUFGUCxLQUFiO0FBRmlCO0FBTWxCOzs7O1NBb05EaUQsTSxHQUFBLGtCQUFTO0FBQUEsdUJBQ3dCLEtBQUt0RSxLQUQ3QjtBQUFBLFFBQ0N1RSxXQURELGdCQUNDQSxXQUREO0FBQUEsUUFDY0MsS0FEZCxnQkFDY0EsS0FEZDs7QUFFUCxRQUFJRCxXQUFKLEVBQWlCO0FBQ2YsYUFBTyxLQUFLRSxlQUFMLENBQXFCRixXQUFyQixDQUFQLENBRGUsQ0FDMkI7QUFDM0M7O0FBQ0QsUUFBSSxDQUFDQyxLQUFMLEVBQVk7QUFDVixhQUFPLEtBQUtDLGVBQUwsQ0FBcUI3RSxhQUFyQixDQUFQLENBRFUsQ0FDa0M7QUFDN0M7O0FBQ0QsV0FBTyxLQUFLeUUsVUFBTCxFQUFQLENBUk8sQ0FRbUI7QUFDM0IsRzs7O0VBdFVnQm5GLEtBQUssQ0FBQ3dGLGEsNENBMkREO0FBQ3BCRixFQUFBQSxLQUFLLEVBQUUsSUFEYTtBQUVwQnZELEVBQUFBLEVBQUUsRUFBRSxlQUZnQjtBQUdwQmdDLEVBQUFBLFNBQVMsRUFBRSxFQUhTO0FBSXBCMUMsRUFBQUEsYUFBYSxFQUFFLEVBSks7QUFLcEJ3QyxFQUFBQSxnQkFBZ0IsRUFBRSxFQUxFO0FBTXBCeEIsRUFBQUEsT0FBTyxFQUFFLENBQUM7QUFBRWEsSUFBQUEsUUFBUSxFQUFFLE9BQVo7QUFBcUJ1QyxJQUFBQSxLQUFLLEVBQUU7QUFBNUIsR0FBRCxDQU5XO0FBT3BCMUUsRUFBQUEsTUFBTSxFQUFFLE1BUFk7QUFRcEJDLEVBQUFBLEtBQUssRUFBRSxNQVJhO0FBU3BCcUMsRUFBQUEsVUFBVSxFQUFFLEVBVFE7QUFVcEJXLEVBQUFBLGtCQUFrQixFQUFFLEVBVkE7QUFXcEJDLEVBQUFBLGNBQWMsRUFBRSxJQVhJO0FBWXBCM0MsRUFBQUEsS0FBSyxFQUFFLElBWmE7QUFhcEJpRCxFQUFBQSxZQUFZLEVBQUU7QUFDWm1CLElBQUFBLE1BQU0sRUFBRSxRQURJO0FBRVpDLElBQUFBLFNBQVMsRUFBRSxLQUZDO0FBR1p4RCxJQUFBQSxnQkFBZ0IsRUFBRSxvQkFITjtBQUlaOEMsSUFBQUEsU0FBUyxFQUFFO0FBSkMsR0FiTTtBQW1CcEJJLEVBQUFBLFdBQVcsRUFBRSxJQW5CTztBQW9CcEJiLEVBQUFBLGtCQUFrQixFQUFFLEVBcEJBO0FBcUJwQkwsRUFBQUEsWUFBWSxFQUFFLEtBckJNO0FBc0JwQlgsRUFBQUEscUJBQXFCLEVBQUUsS0F0Qkg7QUF1QnBCWSxFQUFBQSxrQkFBa0IsRUFBRSxLQXZCQTtBQXdCcEJDLEVBQUFBLHlCQUF5QixFQUFFLEtBeEJQO0FBeUJwQkgsRUFBQUEscUJBQXFCLEVBQUUsS0F6Qkg7QUEwQnBCWixFQUFBQSxvQkFBb0IsRUFBRSxLQTFCRjtBQTJCcEJDLEVBQUFBLG1CQUFtQixFQUFFLElBM0JEO0FBNEJwQmUsRUFBQUEsYUFBYSxFQUFFLElBNUJLO0FBNkJwQmIsRUFBQUEsVUFBVSxFQUFFLEtBN0JRO0FBOEJwQmxDLEVBQUFBLGdCQUFnQixFQUFFLDRCQUFNLENBQUUsQ0E5Qk47QUErQnBCbUMsRUFBQUEsVUFBVSxFQUFFLHNCQUFNLENBQUUsQ0EvQkE7QUFnQ3BCQyxFQUFBQSxnQkFBZ0IsRUFBRSw0QkFBTSxDQUFFLENBaENOO0FBaUNwQkMsRUFBQUEsZ0JBQWdCLEVBQUUsNEJBQU0sQ0FBRSxDQWpDTjtBQWtDcEJwQyxFQUFBQSxnQkFBZ0IsRUFBRSw0QkFBTSxDQUFFLENBbENOO0FBbUNwQmlELEVBQUFBLFNBQVMsRUFBRSxxQkFBTTtBQUNmbUIsSUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsNEpBQWIsRUFEZSxDQUM2SjtBQUM3SztBQXJDbUIsQzs7U0EzRGxCMUUsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyLCB3aXRoVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgUmVzcG9uc2l2ZUxpc3RDb250YWluZXIgZnJvbSAnLi9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgQ29sdW1uSGVhZGVyIGZyb20gJy4vY29sdW1uLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IFJvdyBmcm9tICcuL3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgdGhlbWVEZWZhdWx0cywgdGhlbWVTaGFwZSB9IGZyb20gJy4vdGhlbWUnO1xuXG5jb25zdCBMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5oZWlnaHQgPT09ICdhdXRvJyA/ICcxMDAlJyA6IGAke3Byb3BzLmhlaWdodH1weGApfTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLndpZHRoID09PSAnYXV0bycgPyAnMTAwJScgOiBgJHtwcm9wcy53aWR0aH1weGApfTtcbmA7XG5cbmNvbnN0IE5vUmVzdWx0c1RleHQgPSBzdHlsZWQucGBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuYDtcblxuZXhwb3J0IGRlZmF1bHRcbkB3aXRoVGhlbWVcbmNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyBTcGVjaWFsIHByb3AgZnJvbSBzdHlsZWQtY29tcG9uZW50cyBUaGVtZVByb3ZpZGVyIChpZiBpbiB1c2UpXG4gICAgdGhlbWU6IHRoZW1lU2hhcGUsXG5cbiAgICAvLyBEYXRhIHByb3BzXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuICAgIHNlbGVjdGVkSXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgXSkpLFxuICAgIGhpZ2hsaWdodGVkSXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgXSkpLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSxcbiAgICBdKSxcbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSxcbiAgICBdKSxcbiAgICBpdGVtSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBkcmFnSXRlbVppbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpZEtleTogUHJvcFR5cGVzLnN0cmluZywgLy8ga2V5IG9mIGlkIGluIGxpc3QgZGF0YVxuICAgIHRyYW5zbGF0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHNlYXJjaDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHNlbGVjdEFsbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBub1Jlc3VsdHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gICAgY3VzdG9tVGhlbWU6IHRoZW1lU2hhcGUsIC8vIHRoZW1lIG92ZXJyaWRlXG4gICAgcmVhY3RJbmZpbml0ZVByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLFxuXG4gICAgLy8gQm9vbGVhbnNcbiAgICBpc1NlYXJjaGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RBbGxWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0NvbHVtbkhlYWRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0FsbFNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1NvcnRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8vIGFjdGlvbnNcbiAgICBvblNlbGVjdGVkQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd0RvdWJsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd0NvbnRleHRNZW51OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdEFsbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNvcnRFbmQ6IFByb3BUeXBlcy5mdW5jLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aGVtZTogbnVsbCxcbiAgICBpZDogJ29jLXJlYWN0LWxpc3QnLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgc2VsZWN0ZWRJdGVtczogW10sXG4gICAgaGlnaGxpZ2h0ZWRJdGVtczogW10sXG4gICAgY29sdW1uczogW3sgdmFsdWVLZXk6ICd2YWx1ZScsIHRpdGxlOiAnVmFsdWUnIH1dLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgaXRlbUhlaWdodDogNDAsXG4gICAgY29sdW1uSGVhZGVySGVpZ2h0OiA0MCxcbiAgICBkcmFnSXRlbVppbmRleDogMTA2MCxcbiAgICBpZEtleTogJ2lkJyxcbiAgICB0cmFuc2xhdGlvbnM6IHtcbiAgICAgIHNlYXJjaDogJ1NlYXJjaCcsXG4gICAgICBzZWxlY3RBbGw6ICdBbGwnLFxuICAgICAgc2hvd09ubHlTZWxlY3RlZDogJ1Nob3cgb25seSBzZWxlY3RlZCcsXG4gICAgICBub1Jlc3VsdHM6ICdUaGVyZSBhcmUgbm8gaXRlbXMgdG8gc2hvdyBpbiB0aGlzIGxpc3QuJyxcbiAgICB9LFxuICAgIGN1c3RvbVRoZW1lOiBudWxsLFxuICAgIHJlYWN0SW5maW5pdGVQcm9wczoge30sXG4gICAgaXNTZWFyY2hhYmxlOiBmYWxzZSxcbiAgICBpc1NlbGVjdENvbHVtblZpc2libGU6IGZhbHNlLFxuICAgIGlzU2VsZWN0QWxsVmlzaWJsZTogZmFsc2UsXG4gICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZTogZmFsc2UsXG4gICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlOiBmYWxzZSxcbiAgICBpc0luZGV4Q29sdW1uVmlzaWJsZTogZmFsc2UsXG4gICAgaXNJdGVtQm9yZGVyVmlzaWJsZTogdHJ1ZSxcbiAgICBpc0FsbFNlbGVjdGVkOiBudWxsLFxuICAgIGlzU29ydGFibGU6IGZhbHNlLFxuICAgIG9uU2VsZWN0ZWRDaGFuZ2U6ICgpID0+IHt9LFxuICAgIG9uUm93Q2xpY2s6ICgpID0+IHt9LFxuICAgIG9uUm93RG91YmxlQ2xpY2s6ICgpID0+IHt9LFxuICAgIG9uUm93Q29udGV4dE1lbnU6ICgpID0+IHt9LFxuICAgIG9uU2VsZWN0QWxsQ2xpY2s6ICgpID0+IHt9LFxuICAgIG9uU29ydEVuZDogKCkgPT4ge1xuICAgICAgY29uc29sZS53YXJuKCdAb3B1c2NhcGl0YS9yZWFjdC1saXN0OiBZb3UgbXVzdCBpbXBsZW1lbnQgb25Tb3J0RW5kIGZ1bmN0aW9uIHRvIG1ha2Ugc29ydGluZyB3b3JrISBleGFtcGxlOiBodHRwczovL2dpdGh1Yi5jb20vY2xhdWRlcmljL3JlYWN0LXNvcnRhYmxlLWhvYyNiYXNpYy1leGFtcGxlJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9LFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaEtleXdvcmQ6ICcnLFxuICAgICAgc2hvd09ubHlTZWxlY3RlZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdEFsbENoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpdGVtcyxcbiAgICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgICBpZEtleSxcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2UsXG4gICAgICBvblNlbGVjdEFsbENsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChpdGVtcy5sZW5ndGggPiBzZWxlY3RlZEl0ZW1zLmxlbmd0aCkge1xuICAgICAgLy8gU2VsZWN0IGFsbFxuICAgICAgb25TZWxlY3RlZENoYW5nZShpdGVtcy5tYXAoaSA9PiBpW2lkS2V5XSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEZXNlbGVjdCBhbGxcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2UoW10pO1xuICAgIH1cbiAgICBvblNlbGVjdEFsbENsaWNrKCk7XG4gIH1cblxuICBoYW5kbGVJdGVtU2VsZWN0Q2hhbmdlID0gKGl0ZW1JZCwgaXNTZWxlY3RlZCkgPT4gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICBvblNlbGVjdGVkQ2hhbmdlKHNlbGVjdGVkSXRlbXMuZmlsdGVyKGlkID0+IGlkICE9PSBpdGVtSWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb25TZWxlY3RlZENoYW5nZShzZWxlY3RlZEl0ZW1zLmNvbmNhdChbaXRlbUlkXSkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNlYXJjaENoYW5nZSA9IChzZWFyY2hLZXl3b3JkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaEtleXdvcmQgfSk7XG4gIH07XG5cbiAgaGFuZGxlU2hvd09ubHlTZWxlY3RlZENoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNob3dPbmx5U2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dPbmx5U2VsZWN0ZWQ6ICFzaG93T25seVNlbGVjdGVkIH0pO1xuICB9O1xuXG4gIGZpbHRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZEtleSxcbiAgICAgIGNvbHVtbnMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWwjd2hhdC1hYm91dC1tZW1vaXphdGlvblxuICAgIHJldHVybiBtZW1vaXplKChpdGVtcywgc2VsZWN0ZWRJdGVtcywgc2VhcmNoS2V5d29yZCwgc2hvd09ubHlTZWxlY3RlZCkgPT4gaXRlbXMuZmlsdGVyKChpKSA9PiB7XG4gICAgICBsZXQgaGl0ID0gZmFsc2U7XG4gICAgICBpZiAoaS5pc0Fsd2F5c1Zpc2libGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoc2hvd09ubHlTZWxlY3RlZCAmJiAhc2VsZWN0ZWRJdGVtcy5pbmNsdWRlcyhpW2lkS2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHNlYXJjaEtleXdvcmQgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RyaW5nTWF0Y2hlciA9IChkYXRhLCBrZXl3b3JkKSA9PiB7XG4gICAgICAgIGxldCBlc2NhcGVkS2V5d29yZCA9IGtleXdvcmQ7XG4gICAgICAgIGNvbnN0IHNwZWNpYWxDaGFycyA9ICdbXVxcXFxeJC58PyorKCknO1xuXG4gICAgICAgIC8vIElmIGtleXdvcmQgdmFsIHN0YXJ0cyB3aXRoIGEgUmVnZXggc3BlY2lhbCBjaGFyYWN0ZXIsIHdlIG11c3QgZXNjYXBlIGl0XG4gICAgICAgIGlmIChzcGVjaWFsQ2hhcnMuaW5jbHVkZXMoa2V5d29yZFswXSkpIGVzY2FwZWRLZXl3b3JkID0gYFxcXFwke2tleXdvcmR9YDtcbiAgICAgICAgcmV0dXJuIChuZXcgUmVnRXhwKGVzY2FwZWRLZXl3b3JkLCAnaScpKS50ZXN0KGRhdGEpO1xuICAgICAgfTtcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZUtleSA9IGMudmFsdWVLZXkgfHwgJ3ZhbHVlJztcbiAgICAgICAgaWYgKHR5cGVvZiBpW3ZhbHVlS2V5XSA9PT0gJ3N0cmluZycgJiYgc3RyaW5nTWF0Y2hlcihpW3ZhbHVlS2V5XSwgc2VhcmNoS2V5d29yZCkpIHtcbiAgICAgICAgICBoaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBoaXQ7XG4gICAgfSkpO1xuICB9XG5cbiAgcmVuZGVyUm93ID0gKGl0ZW0sIHJvd0luZGV4KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBjb2x1bW5zLFxuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIGlkS2V5LFxuICAgICAgaXRlbUhlaWdodCxcbiAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNJdGVtQm9yZGVyVmlzaWJsZSxcbiAgICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZSxcbiAgICAgIGlzU29ydGFibGUsXG4gICAgICBvblJvd0NsaWNrLFxuICAgICAgb25Sb3dEb3VibGVDbGljayxcbiAgICAgIG9uUm93Q29udGV4dE1lbnUsXG4gICAgICBoaWdobGlnaHRlZEl0ZW1zLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGl0ZW1baWRLZXldKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvd1xuICAgICAgICBpZD17YCR7aWR9LXJvdy0ke3Jvd0luZGV4fWB9XG4gICAgICAgIGlkS2V5PXtpZEtleX1cbiAgICAgICAga2V5PXtpdGVtW2lkS2V5XX1cbiAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgcm93SW5kZXg9e3Jvd0luZGV4fVxuICAgICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZT17aXNJbmRleENvbHVtblZpc2libGV9XG4gICAgICAgIGl0ZW1IZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZT17aXNTZWxlY3RDb2x1bW5WaXNpYmxlfVxuICAgICAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlPXtpc0l0ZW1Cb3JkZXJWaXNpYmxlfVxuICAgICAgICBpc1NvcnRhYmxlPXtpc1NvcnRhYmxlfVxuICAgICAgICBvblNlbGVjdENoYW5nZT17dGhpcy5oYW5kbGVJdGVtU2VsZWN0Q2hhbmdlKGl0ZW1baWRLZXldLCBpc1NlbGVjdGVkKX1cbiAgICAgICAgb25Sb3dDbGljaz17b25Sb3dDbGlja31cbiAgICAgICAgb25Sb3dEb3VibGVDbGljaz17b25Sb3dEb3VibGVDbGlja31cbiAgICAgICAgb25Sb3dDb250ZXh0TWVudT17b25Sb3dDb250ZXh0TWVudX1cbiAgICAgICAgaGlnaGxpZ2h0ZWRJdGVtcz17aGlnaGxpZ2h0ZWRJdGVtc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBpdGVtcyxcbiAgICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgICBjb2x1bW5zLFxuICAgICAgaXNJbmRleENvbHVtblZpc2libGUsXG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aCxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICBjb2x1bW5IZWFkZXJIZWlnaHQsXG4gICAgICBkcmFnSXRlbVppbmRleCxcbiAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZSxcbiAgICAgIGlzU2VhcmNoYWJsZSxcbiAgICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZSxcbiAgICAgIGlzU2VsZWN0QWxsVmlzaWJsZSxcbiAgICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGUsXG4gICAgICBpc0FsbFNlbGVjdGVkLFxuICAgICAgaXNTb3J0YWJsZSxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgIHJlYWN0SW5maW5pdGVQcm9wcyxcbiAgICAgIG9uU29ydEVuZCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBzaG93T25seVNlbGVjdGVkLFxuICAgICAgc2VhcmNoS2V5d29yZCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAvLyBtZW1vaXplIGZpbHRlcmVkSXRlbXMgd2hlbiBwcm9wcyBoYXMgbm90IGNoYW5nZWQgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZVxuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSB0aGlzLmZpbHRlcigpKGl0ZW1zLCBzZWxlY3RlZEl0ZW1zLCBzZWFyY2hLZXl3b3JkLCBzaG93T25seVNlbGVjdGVkKTtcbiAgICBjb25zdCBpc0hlYWRlclZpc2libGUgPSAoXG4gICAgICAoaXNTZWxlY3RBbGxWaXNpYmxlICYmICFpc0NvbHVtbkhlYWRlclZpc2libGUpXG4gICAgICB8fCAoaXNTZWFyY2hhYmxlKVxuICAgICAgfHwgKGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGUpXG4gICAgKTtcbiAgICAvLyBvdmVycmlkZSBmcm9tIHByb3BzIG9yIGNhbGN1bGF0ZSBmcm9tIGRhdGFcbiAgICBjb25zdCBpc0FsbFNlbGVjdGVkVmFsdWUgPSAoXG4gICAgICBpc0FsbFNlbGVjdGVkICE9PSBudWxsXG4gICAgICAgID8gaXNBbGxTZWxlY3RlZFxuICAgICAgICA6IChpdGVtcy5sZW5ndGggPiAwICYmIGl0ZW1zLmxlbmd0aCA9PT0gc2VsZWN0ZWRJdGVtcy5sZW5ndGgpXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RDb250YWluZXIgaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaGVpZ2h0PXtoZWlnaHR9IHdpZHRoPXt3aWR0aH0+XG4gICAgICAgIHtpc0hlYWRlclZpc2libGUgJiYgKFxuICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgIGlkPXtgJHtpZH0taGVhZGVyYH1cbiAgICAgICAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZT17aXNDb2x1bW5IZWFkZXJWaXNpYmxlfVxuICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXtpc1NlYXJjaGFibGV9XG4gICAgICAgICAgICBpc1NlbGVjdEFsbFZpc2libGU9e2lzU2VsZWN0QWxsVmlzaWJsZX1cbiAgICAgICAgICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGU9e2lzU2hvd09ubHlTZWxlY3RlZFZpc2libGV9XG4gICAgICAgICAgICBpc0FsbFNlbGVjdGVkPXtpc0FsbFNlbGVjdGVkVmFsdWV9XG4gICAgICAgICAgICBpc1Nob3dPbmx5U2VsZWN0ZWQ9e3Nob3dPbmx5U2VsZWN0ZWR9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXRlbXMubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgb25TZWxlY3RBbGxDaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QWxsQ2hhbmdlfVxuICAgICAgICAgICAgb25TZWFyY2hDaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgICAgb25TaG93T25seVNlbGVjdGVkQ2hhbmdlPXt0aGlzLmhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2V9XG4gICAgICAgICAgICB0cmFuc2xhdGlvbnM9e3RyYW5zbGF0aW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7aXNDb2x1bW5IZWFkZXJWaXNpYmxlICYmIChcbiAgICAgICAgICA8Q29sdW1uSGVhZGVyXG4gICAgICAgICAgICBpZD17YCR7aWR9LWNvbHVtbi1oZWFkZXJgfVxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZT17aXNTZWxlY3RDb2x1bW5WaXNpYmxlfVxuICAgICAgICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlPXtpc1NlbGVjdEFsbFZpc2libGV9XG4gICAgICAgICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZT17aXNJbmRleENvbHVtblZpc2libGV9XG4gICAgICAgICAgICBpc0FsbFNlbGVjdGVkPXtpc0FsbFNlbGVjdGVkVmFsdWV9XG4gICAgICAgICAgICBoZWlnaHQ9e2NvbHVtbkhlYWRlckhlaWdodH1cbiAgICAgICAgICAgIG9uU2VsZWN0QWxsQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdEFsbENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8UmVzcG9uc2l2ZUxpc3RDb250YWluZXJcbiAgICAgICAgICBpZD17YCR7aWR9LWl0ZW1zYH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBpdGVtSGVpZ2h0PXtpdGVtSGVpZ2h0fVxuICAgICAgICAgIGNvbHVtbkhlYWRlckhlaWdodD17Y29sdW1uSGVhZGVySGVpZ2h0fVxuICAgICAgICAgIGRyYWdJdGVtWmluZGV4PXtkcmFnSXRlbVppbmRleH1cbiAgICAgICAgICBpc0hlYWRlclZpc2libGU9e2lzSGVhZGVyVmlzaWJsZX1cbiAgICAgICAgICBpc0NvbHVtbkhlYWRlclZpc2libGU9e2lzQ29sdW1uSGVhZGVyVmlzaWJsZX1cbiAgICAgICAgICBpc1NvcnRhYmxlPXtpc1NvcnRhYmxlfVxuICAgICAgICAgIHJlYWN0SW5maW5pdGVQcm9wcz17cmVhY3RJbmZpbml0ZVByb3BzfVxuICAgICAgICAgIG9uU29ydEVuZD17b25Tb3J0RW5kfVxuICAgICAgICA+XG4gICAgICAgICAge2ZpbHRlcmVkSXRlbXMubWFwKHRoaXMucmVuZGVyUm93KX1cbiAgICAgICAgICB7IWZpbHRlcmVkSXRlbXMubGVuZ3RoICYmIDxOb1Jlc3VsdHNUZXh0Pnt0cmFuc2xhdGlvbnMubm9SZXN1bHRzfTwvTm9SZXN1bHRzVGV4dD59XG4gICAgICAgIDwvUmVzcG9uc2l2ZUxpc3RDb250YWluZXI+XG4gICAgICA8L0xpc3RDb250YWluZXI+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcldpdGhUaGVtZSA9IHRoZW1lT2JqID0+IChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWVPYmp9PlxuICAgICAge3RoaXMucmVuZGVyTGlzdCgpfVxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjdXN0b21UaGVtZSwgdGhlbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGN1c3RvbVRoZW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJXaXRoVGhlbWUoY3VzdG9tVGhlbWUpOyAvLyBvdmVycmlkZSB3aXRoIGN1c3RvbSB0aGVtZVxuICAgIH1cbiAgICBpZiAoIXRoZW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJXaXRoVGhlbWUodGhlbWVEZWZhdWx0cyk7IC8vIHVzZSBkZWZhdWx0cyBpZiBubyB0aGVtZSBpcyBwcm92aWRlZFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJMaXN0KCk7IC8vIFRoZW1lUHJvdmlkZXIgaXMgZm91bmQhXG4gIH1cbn1cbiJdfQ==