var _class, _class2, _temp;

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
      }, filteredItems.map(_this.renderRow)));
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

export { List as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJUaGVtZVByb3ZpZGVyIiwid2l0aFRoZW1lIiwibWVtb2l6ZSIsIlJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIiwiSGVhZGVyIiwiQ29sdW1uSGVhZGVyIiwiUm93IiwidGhlbWVEZWZhdWx0cyIsInRoZW1lU2hhcGUiLCJMaXN0Q29udGFpbmVyIiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJ3aWR0aCIsIkxpc3QiLCJpdGVtcyIsInNlbGVjdGVkSXRlbXMiLCJpZEtleSIsIm9uU2VsZWN0ZWRDaGFuZ2UiLCJvblNlbGVjdEFsbENsaWNrIiwibGVuZ3RoIiwibWFwIiwiaSIsIml0ZW1JZCIsImlzU2VsZWN0ZWQiLCJmaWx0ZXIiLCJpZCIsImNvbmNhdCIsInNlYXJjaEtleXdvcmQiLCJzZXRTdGF0ZSIsInNob3dPbmx5U2VsZWN0ZWQiLCJzdGF0ZSIsImNvbHVtbnMiLCJoaXQiLCJpbmNsdWRlcyIsInN0cmluZ01hdGNoZXIiLCJkYXRhIiwia2V5d29yZCIsImVzY2FwZWRLZXl3b3JkIiwic3BlY2lhbENoYXJzIiwiUmVnRXhwIiwidGVzdCIsImZvckVhY2giLCJjIiwidmFsdWVLZXkiLCJpdGVtIiwicm93SW5kZXgiLCJpdGVtSGVpZ2h0IiwiaXNJbmRleENvbHVtblZpc2libGUiLCJpc0l0ZW1Cb3JkZXJWaXNpYmxlIiwiaXNTZWxlY3RDb2x1bW5WaXNpYmxlIiwib25Sb3dDbGljayIsIm9uUm93RG91YmxlQ2xpY2siLCJvblJvd1JpZ2h0Q2xpY2siLCJoYW5kbGVJdGVtU2VsZWN0Q2hhbmdlIiwiY2xhc3NOYW1lIiwiY29sdW1uSGVhZGVySGVpZ2h0IiwiaXNDb2x1bW5IZWFkZXJWaXNpYmxlIiwiaXNTZWFyY2hhYmxlIiwiaXNTZWxlY3RBbGxWaXNpYmxlIiwiaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZSIsImlzQWxsU2VsZWN0ZWQiLCJ0cmFuc2xhdGlvbnMiLCJyZWFjdEluZmluaXRlUHJvcHMiLCJmaWx0ZXJlZEl0ZW1zIiwiaXNIZWFkZXJWaXNpYmxlIiwiaXNBbGxTZWxlY3RlZFZhbHVlIiwiaGFuZGxlU2VsZWN0QWxsQ2hhbmdlIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiaGFuZGxlU2hvd09ubHlTZWxlY3RlZENoYW5nZSIsInJlbmRlclJvdyIsInRoZW1lT2JqIiwicmVuZGVyTGlzdCIsInJlbmRlciIsImN1c3RvbVRoZW1lIiwidGhlbWUiLCJyZW5kZXJXaXRoVGhlbWUiLCJQdXJlQ29tcG9uZW50IiwidGl0bGUiLCJzZWFyY2giLCJzZWxlY3RBbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLElBQWlCQyxhQUFqQixFQUFnQ0MsU0FBaEMsUUFBaUQsbUJBQWpEO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixhQUFwQjtBQUNBLE9BQU9DLHVCQUFQLE1BQW9DLHVDQUFwQztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsb0JBQW5CO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QiwyQkFBekI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLGlCQUFoQjtBQUNBLFNBQVNDLGFBQVQsRUFBd0JDLFVBQXhCLFFBQTBDLFNBQTFDO0FBRUEsSUFBTUMsYUFBYSxHQUFHVixNQUFNLENBQUNXLEdBQVYsb0JBQ1AsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsTUFBTixLQUFpQixNQUFqQixHQUEwQixNQUExQixHQUFzQ0QsS0FBSyxDQUFDQyxNQUE1QyxPQUFMO0FBQUEsQ0FERSxFQUVSLFVBQUFELEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNFLEtBQU4sS0FBZ0IsTUFBaEIsR0FBeUIsTUFBekIsR0FBcUNGLEtBQUssQ0FBQ0UsS0FBM0MsT0FBTDtBQUFBLENBRkcsQ0FBbkI7O0lBT01DLEksR0FE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O0FBRVpDLElBQUFBLFNBQVMsRUFBRSxLQUZDO0FBR1psRCxJQUFBQSxnQkFBZ0IsRUFBRTtBQUhOLEdBWE07QUFnQnBCNEMsRUFBQUEsV0FBVyxFQUFFLElBaEJPO0FBaUJwQlgsRUFBQUEsa0JBQWtCLEVBQUUsRUFqQkE7QUFrQnBCTCxFQUFBQSxZQUFZLEVBQUUsS0FsQk07QUFtQnBCUixFQUFBQSxxQkFBcUIsRUFBRSxLQW5CSDtBQW9CcEJTLEVBQUFBLGtCQUFrQixFQUFFLEtBcEJBO0FBcUJwQkMsRUFBQUEseUJBQXlCLEVBQUUsS0FyQlA7QUFzQnBCSCxFQUFBQSxxQkFBcUIsRUFBRSxLQXRCSDtBQXVCcEJULEVBQUFBLG9CQUFvQixFQUFFLEtBdkJGO0FBd0JwQkMsRUFBQUEsbUJBQW1CLEVBQUUsSUF4QkQ7QUF5QnBCWSxFQUFBQSxhQUFhLEVBQUUsSUF6Qks7QUEwQnBCM0MsRUFBQUEsZ0JBQWdCLEVBQUUsNEJBQU0sQ0FBRSxDQTFCTjtBQTJCcEJpQyxFQUFBQSxVQUFVLEVBQUUsc0JBQU0sQ0FBRSxDQTNCQTtBQTRCcEJDLEVBQUFBLGdCQUFnQixFQUFFLDRCQUFNLENBQUUsQ0E1Qk47QUE2QnBCQyxFQUFBQSxlQUFlLEVBQUUsMkJBQU0sQ0FBRSxDQTdCTDtBQThCcEJsQyxFQUFBQSxnQkFBZ0IsRUFBRSw0QkFBTSxDQUFFO0FBOUJOLEM7O1NBbkRsQkwsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyLCB3aXRoVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgUmVzcG9uc2l2ZUxpc3RDb250YWluZXIgZnJvbSAnLi9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgQ29sdW1uSGVhZGVyIGZyb20gJy4vY29sdW1uLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IFJvdyBmcm9tICcuL3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgdGhlbWVEZWZhdWx0cywgdGhlbWVTaGFwZSB9IGZyb20gJy4vdGhlbWUnO1xuXG5jb25zdCBMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5oZWlnaHQgPT09ICdhdXRvJyA/ICcxMDAlJyA6IGAke3Byb3BzLmhlaWdodH1weGApfTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLndpZHRoID09PSAnYXV0bycgPyAnMTAwJScgOiBgJHtwcm9wcy53aWR0aH1weGApfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0XG5Ad2l0aFRoZW1lXG5jbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gU3BlY2lhbCBwcm9wIGZyb20gc3R5bGVkLWNvbXBvbmVudHMgVGhlbWVQcm92aWRlciAoaWYgaW4gdXNlKVxuICAgIHRoZW1lOiB0aGVtZVNoYXBlLFxuXG4gICAgLy8gRGF0YSBwcm9wc1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcbiAgICBzZWxlY3RlZEl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIF0pKSxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKSxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSksXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSksXG4gICAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb2x1bW5IZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaWRLZXk6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGtleSBvZiBpZCBpbiBsaXN0IGRhdGFcbiAgICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzZWFyY2g6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzZWxlY3RBbGw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzaG93T25seVNlbGVjdGVkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICAgIGN1c3RvbVRoZW1lOiB0aGVtZVNoYXBlLCAvLyB0aGVtZSBvdmVycmlkZVxuICAgIHJlYWN0SW5maW5pdGVQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KSxcblxuICAgIC8vIEJvb2xlYW5zXG4gICAgaXNTZWFyY2hhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1NlbGVjdENvbHVtblZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2VsZWN0QWxsVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0luZGV4Q29sdW1uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNJdGVtQm9yZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNBbGxTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvLyBhY3Rpb25zXG4gICAgb25TZWxlY3RlZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dEb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dSaWdodENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdEFsbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGhlbWU6IG51bGwsXG4gICAgaWQ6ICdvYy1yZWFjdC1saXN0JyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHNlbGVjdGVkSXRlbXM6IFtdLFxuICAgIGNvbHVtbnM6IFt7IHZhbHVlS2V5OiAndmFsdWUnLCB0aXRsZTogJ1ZhbHVlJyB9XSxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGl0ZW1IZWlnaHQ6IDQwLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogNDAsXG4gICAgaWRLZXk6ICdpZCcsXG4gICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICBzZWFyY2g6ICdTZWFyY2gnLFxuICAgICAgc2VsZWN0QWxsOiAnQWxsJyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6ICdTaG93IG9ubHkgc2VsZWN0ZWQnLFxuICAgIH0sXG4gICAgY3VzdG9tVGhlbWU6IG51bGwsXG4gICAgcmVhY3RJbmZpbml0ZVByb3BzOiB7fSxcbiAgICBpc1NlYXJjaGFibGU6IGZhbHNlLFxuICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZTogZmFsc2UsXG4gICAgaXNTZWxlY3RBbGxWaXNpYmxlOiBmYWxzZSxcbiAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlOiBmYWxzZSxcbiAgICBpc0NvbHVtbkhlYWRlclZpc2libGU6IGZhbHNlLFxuICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlOiBmYWxzZSxcbiAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlOiB0cnVlLFxuICAgIGlzQWxsU2VsZWN0ZWQ6IG51bGwsXG4gICAgb25TZWxlY3RlZENoYW5nZTogKCkgPT4ge30sXG4gICAgb25Sb3dDbGljazogKCkgPT4ge30sXG4gICAgb25Sb3dEb3VibGVDbGljazogKCkgPT4ge30sXG4gICAgb25Sb3dSaWdodENsaWNrOiAoKSA9PiB7fSxcbiAgICBvblNlbGVjdEFsbENsaWNrOiAoKSA9PiB7fSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hLZXl3b3JkOiAnJyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVTZWxlY3RBbGxDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbXMsXG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgaWRLZXksXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlLFxuICAgICAgb25TZWxlY3RBbGxDbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXRlbXMubGVuZ3RoID4gc2VsZWN0ZWRJdGVtcy5sZW5ndGgpIHtcbiAgICAgIC8vIFNlbGVjdCBhbGxcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2UoaXRlbXMubWFwKGkgPT4gaVtpZEtleV0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVzZWxlY3QgYWxsXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlKFtdKTtcbiAgICB9XG4gICAgb25TZWxlY3RBbGxDbGljaygpO1xuICB9XG5cbiAgaGFuZGxlSXRlbVNlbGVjdENoYW5nZSA9IChpdGVtSWQsIGlzU2VsZWN0ZWQpID0+ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgb25TZWxlY3RlZENoYW5nZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgb25TZWxlY3RlZENoYW5nZShzZWxlY3RlZEl0ZW1zLmZpbHRlcihpZCA9PiBpZCAhPT0gaXRlbUlkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2Uoc2VsZWN0ZWRJdGVtcy5jb25jYXQoW2l0ZW1JZF0pKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAoc2VhcmNoS2V5d29yZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hLZXl3b3JkIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T25seVNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93T25seVNlbGVjdGVkOiAhc2hvd09ubHlTZWxlY3RlZCB9KTtcbiAgfTtcblxuICBmaWx0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWRLZXksXG4gICAgICBjb2x1bW5zLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sI3doYXQtYWJvdXQtbWVtb2l6YXRpb25cbiAgICByZXR1cm4gbWVtb2l6ZSgoaXRlbXMsIHNlbGVjdGVkSXRlbXMsIHNlYXJjaEtleXdvcmQsIHNob3dPbmx5U2VsZWN0ZWQpID0+IGl0ZW1zLmZpbHRlcigoaSkgPT4ge1xuICAgICAgbGV0IGhpdCA9IGZhbHNlO1xuICAgICAgaWYgKHNob3dPbmx5U2VsZWN0ZWQgJiYgIXNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaVtpZEtleV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWFyY2hLZXl3b3JkID09PSAnJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0cmluZ01hdGNoZXIgPSAoZGF0YSwga2V5d29yZCkgPT4ge1xuICAgICAgICBsZXQgZXNjYXBlZEtleXdvcmQgPSBrZXl3b3JkO1xuICAgICAgICBjb25zdCBzcGVjaWFsQ2hhcnMgPSAnW11cXFxcXiQufD8qKygpJztcblxuICAgICAgICAvLyBJZiBrZXl3b3JkIHZhbCBzdGFydHMgd2l0aCBhIFJlZ2V4IHNwZWNpYWwgY2hhcmFjdGVyLCB3ZSBtdXN0IGVzY2FwZSBpdFxuICAgICAgICBpZiAoc3BlY2lhbENoYXJzLmluY2x1ZGVzKGtleXdvcmRbMF0pKSBlc2NhcGVkS2V5d29yZCA9IGBcXFxcJHtrZXl3b3JkfWA7XG4gICAgICAgIHJldHVybiAobmV3IFJlZ0V4cChlc2NhcGVkS2V5d29yZCwgJ2knKSkudGVzdChkYXRhKTtcbiAgICAgIH07XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVLZXkgPSBjLnZhbHVlS2V5IHx8ICd2YWx1ZSc7XG4gICAgICAgIGlmICh0eXBlb2YgaVt2YWx1ZUtleV0gPT09ICdzdHJpbmcnICYmIHN0cmluZ01hdGNoZXIoaVt2YWx1ZUtleV0sIHNlYXJjaEtleXdvcmQpKSB7XG4gICAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaGl0O1xuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlclJvdyA9IChpdGVtLCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIGlkS2V5LFxuICAgICAgaXRlbUhlaWdodCxcbiAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNJdGVtQm9yZGVyVmlzaWJsZSxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBpc1NlbGVjdENvbHVtblZpc2libGUsXG4gICAgICBvblJvd0NsaWNrLFxuICAgICAgb25Sb3dEb3VibGVDbGljayxcbiAgICAgIG9uUm93UmlnaHRDbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcy5pbmNsdWRlcyhpdGVtW2lkS2V5XSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3dcbiAgICAgICAgaWQ9e2Ake2lkfS1yb3ctJHtyb3dJbmRleH1gfVxuICAgICAgICBrZXk9e2l0ZW1baWRLZXldfVxuICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICByb3dJbmRleD17cm93SW5kZXh9XG4gICAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlPXtpc0luZGV4Q29sdW1uVmlzaWJsZX1cbiAgICAgICAgaXRlbUhlaWdodD17aXRlbUhlaWdodH1cbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlPXtpc1NlbGVjdENvbHVtblZpc2libGV9XG4gICAgICAgIGlzSXRlbUJvcmRlclZpc2libGU9e2lzSXRlbUJvcmRlclZpc2libGV9XG4gICAgICAgIG9uU2VsZWN0Q2hhbmdlPXt0aGlzLmhhbmRsZUl0ZW1TZWxlY3RDaGFuZ2UoaXRlbVtpZEtleV0sIGlzU2VsZWN0ZWQpfVxuICAgICAgICBvblJvd0NsaWNrPXtvblJvd0NsaWNrfVxuICAgICAgICBvblJvd0RvdWJsZUNsaWNrPXtvblJvd0RvdWJsZUNsaWNrfVxuICAgICAgICBvblJvd1JpZ2h0Q2xpY2s9e29uUm93UmlnaHRDbGlja31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBpdGVtcyxcbiAgICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgICBjb2x1bW5zLFxuICAgICAgaXNJbmRleENvbHVtblZpc2libGUsXG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aCxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICBjb2x1bW5IZWFkZXJIZWlnaHQsXG4gICAgICBpc0NvbHVtbkhlYWRlclZpc2libGUsXG4gICAgICBpc1NlYXJjaGFibGUsXG4gICAgICBpc1NlbGVjdENvbHVtblZpc2libGUsXG4gICAgICBpc1NlbGVjdEFsbFZpc2libGUsXG4gICAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlLFxuICAgICAgaXNBbGxTZWxlY3RlZCxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgIHJlYWN0SW5maW5pdGVQcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBzaG93T25seVNlbGVjdGVkLFxuICAgICAgc2VhcmNoS2V5d29yZCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAvLyBtZW1vaXplIGZpbHRlcmVkSXRlbXMgd2hlbiBwcm9wcyBoYXMgbm90IGNoYW5nZWQgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZVxuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSB0aGlzLmZpbHRlcigpKGl0ZW1zLCBzZWxlY3RlZEl0ZW1zLCBzZWFyY2hLZXl3b3JkLCBzaG93T25seVNlbGVjdGVkKTtcbiAgICBjb25zdCBpc0hlYWRlclZpc2libGUgPSAoXG4gICAgICAoaXNTZWxlY3RBbGxWaXNpYmxlICYmICFpc0NvbHVtbkhlYWRlclZpc2libGUpXG4gICAgICB8fCAoaXNTZWFyY2hhYmxlKVxuICAgICAgfHwgKGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGUpXG4gICAgKTtcbiAgICAvLyBvdmVycmlkZSBmcm9tIHByb3BzIG9yIGNhbGN1bGF0ZSBmcm9tIGRhdGFcbiAgICBjb25zdCBpc0FsbFNlbGVjdGVkVmFsdWUgPSAoXG4gICAgICBpc0FsbFNlbGVjdGVkICE9PSBudWxsXG4gICAgICAgID8gaXNBbGxTZWxlY3RlZFxuICAgICAgICA6IChpdGVtcy5sZW5ndGggPiAwICYmIGl0ZW1zLmxlbmd0aCA9PT0gc2VsZWN0ZWRJdGVtcy5sZW5ndGgpXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RDb250YWluZXIgaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaGVpZ2h0PXtoZWlnaHR9IHdpZHRoPXt3aWR0aH0+XG4gICAgICAgIHtpc0hlYWRlclZpc2libGUgJiYgKFxuICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgIGlkPXtgJHtpZH0taGVhZGVyYH1cbiAgICAgICAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZT17aXNDb2x1bW5IZWFkZXJWaXNpYmxlfVxuICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXtpc1NlYXJjaGFibGV9XG4gICAgICAgICAgICBpc1NlbGVjdEFsbFZpc2libGU9e2lzU2VsZWN0QWxsVmlzaWJsZX1cbiAgICAgICAgICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGU9e2lzU2hvd09ubHlTZWxlY3RlZFZpc2libGV9XG4gICAgICAgICAgICBpc0FsbFNlbGVjdGVkPXtpc0FsbFNlbGVjdGVkVmFsdWV9XG4gICAgICAgICAgICBpc1Nob3dPbmx5U2VsZWN0ZWQ9e3Nob3dPbmx5U2VsZWN0ZWR9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXRlbXMubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgb25TZWxlY3RBbGxDaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QWxsQ2hhbmdlfVxuICAgICAgICAgICAgb25TZWFyY2hDaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgICAgb25TaG93T25seVNlbGVjdGVkQ2hhbmdlPXt0aGlzLmhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2V9XG4gICAgICAgICAgICB0cmFuc2xhdGlvbnM9e3RyYW5zbGF0aW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7aXNDb2x1bW5IZWFkZXJWaXNpYmxlICYmIChcbiAgICAgICAgICA8Q29sdW1uSGVhZGVyXG4gICAgICAgICAgICBpZD17YCR7aWR9LWNvbHVtbi1oZWFkZXJgfVxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZT17aXNTZWxlY3RDb2x1bW5WaXNpYmxlfVxuICAgICAgICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlPXtpc1NlbGVjdEFsbFZpc2libGV9XG4gICAgICAgICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZT17aXNJbmRleENvbHVtblZpc2libGV9XG4gICAgICAgICAgICBpc0FsbFNlbGVjdGVkPXtpc0FsbFNlbGVjdGVkVmFsdWV9XG4gICAgICAgICAgICBoZWlnaHQ9e2NvbHVtbkhlYWRlckhlaWdodH1cbiAgICAgICAgICAgIG9uU2VsZWN0QWxsQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdEFsbENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8UmVzcG9uc2l2ZUxpc3RDb250YWluZXJcbiAgICAgICAgICBpZD17YCR7aWR9LWl0ZW1zYH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBpdGVtSGVpZ2h0PXtpdGVtSGVpZ2h0fVxuICAgICAgICAgIGNvbHVtbkhlYWRlckhlaWdodD17Y29sdW1uSGVhZGVySGVpZ2h0fVxuICAgICAgICAgIGlzSGVhZGVyVmlzaWJsZT17aXNIZWFkZXJWaXNpYmxlfVxuICAgICAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZT17aXNDb2x1bW5IZWFkZXJWaXNpYmxlfVxuICAgICAgICAgIHJlYWN0SW5maW5pdGVQcm9wcz17cmVhY3RJbmZpbml0ZVByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2ZpbHRlcmVkSXRlbXMubWFwKHRoaXMucmVuZGVyUm93KX1cbiAgICAgICAgPC9SZXNwb25zaXZlTGlzdENvbnRhaW5lcj5cbiAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyV2l0aFRoZW1lID0gdGhlbWVPYmogPT4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZU9ian0+XG4gICAgICB7dGhpcy5yZW5kZXJMaXN0KCl9XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGN1c3RvbVRoZW1lLCB0aGVtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoY3VzdG9tVGhlbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcldpdGhUaGVtZShjdXN0b21UaGVtZSk7IC8vIG92ZXJyaWRlIHdpdGggY3VzdG9tIHRoZW1lXG4gICAgfVxuICAgIGlmICghdGhlbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcldpdGhUaGVtZSh0aGVtZURlZmF1bHRzKTsgLy8gdXNlIGRlZmF1bHRzIGlmIG5vIHRoZW1lIGlzIHByb3ZpZGVkXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbmRlckxpc3QoKTsgLy8gVGhlbWVQcm92aWRlciBpcyBmb3VuZCFcbiAgfVxufVxuIl19