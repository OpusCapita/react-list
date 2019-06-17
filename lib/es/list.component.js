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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJUaGVtZVByb3ZpZGVyIiwid2l0aFRoZW1lIiwibWVtb2l6ZSIsIlJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIiwiSGVhZGVyIiwiQ29sdW1uSGVhZGVyIiwiUm93IiwidGhlbWVEZWZhdWx0cyIsInRoZW1lU2hhcGUiLCJMaXN0Q29udGFpbmVyIiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJ3aWR0aCIsIk5vUmVzdWx0c1RleHQiLCJwIiwiTGlzdCIsIml0ZW1zIiwic2VsZWN0ZWRJdGVtcyIsImlkS2V5Iiwib25TZWxlY3RlZENoYW5nZSIsIm9uU2VsZWN0QWxsQ2xpY2siLCJsZW5ndGgiLCJtYXAiLCJpIiwiaXRlbUlkIiwiaXNTZWxlY3RlZCIsImZpbHRlciIsImlkIiwiY29uY2F0Iiwic2VhcmNoS2V5d29yZCIsInNldFN0YXRlIiwic2hvd09ubHlTZWxlY3RlZCIsInN0YXRlIiwiY29sdW1ucyIsImhpdCIsImlzQWx3YXlzVmlzaWJsZSIsImluY2x1ZGVzIiwic3RyaW5nTWF0Y2hlciIsImRhdGEiLCJrZXl3b3JkIiwiZXNjYXBlZEtleXdvcmQiLCJzcGVjaWFsQ2hhcnMiLCJSZWdFeHAiLCJ0ZXN0IiwiZm9yRWFjaCIsImMiLCJ2YWx1ZUtleSIsIml0ZW0iLCJyb3dJbmRleCIsIml0ZW1IZWlnaHQiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImlzSXRlbUJvcmRlclZpc2libGUiLCJpc1NlbGVjdENvbHVtblZpc2libGUiLCJpc1NvcnRhYmxlIiwib25Sb3dDbGljayIsIm9uUm93RG91YmxlQ2xpY2siLCJvblJvd0NvbnRleHRNZW51IiwiaGFuZGxlSXRlbVNlbGVjdENoYW5nZSIsImNsYXNzTmFtZSIsImNvbHVtbkhlYWRlckhlaWdodCIsImRyYWdJdGVtWmluZGV4IiwiaXNDb2x1bW5IZWFkZXJWaXNpYmxlIiwiaXNTZWFyY2hhYmxlIiwiaXNTZWxlY3RBbGxWaXNpYmxlIiwiaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZSIsImlzQWxsU2VsZWN0ZWQiLCJ0cmFuc2xhdGlvbnMiLCJyZWFjdEluZmluaXRlUHJvcHMiLCJvblNvcnRFbmQiLCJmaWx0ZXJlZEl0ZW1zIiwiaXNIZWFkZXJWaXNpYmxlIiwiaXNBbGxTZWxlY3RlZFZhbHVlIiwiaGFuZGxlU2VsZWN0QWxsQ2hhbmdlIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiaGFuZGxlU2hvd09ubHlTZWxlY3RlZENoYW5nZSIsInJlbmRlclJvdyIsIm5vUmVzdWx0cyIsInRoZW1lT2JqIiwicmVuZGVyTGlzdCIsInJlbmRlciIsImN1c3RvbVRoZW1lIiwidGhlbWUiLCJyZW5kZXJXaXRoVGhlbWUiLCJQdXJlQ29tcG9uZW50IiwidGl0bGUiLCJzZWFyY2giLCJzZWxlY3RBbGwiLCJjb25zb2xlIiwid2FybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLElBQWlCQyxhQUFqQixFQUFnQ0MsU0FBaEMsUUFBaUQsbUJBQWpEO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixhQUFwQjtBQUNBLE9BQU9DLHVCQUFQLE1BQW9DLHVDQUFwQztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsb0JBQW5CO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QiwyQkFBekI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLGlCQUFoQjtBQUNBLFNBQVNDLGFBQVQsRUFBd0JDLFVBQXhCLFFBQTBDLFNBQTFDO0FBRUEsSUFBTUMsYUFBYSxHQUFHVixNQUFNLENBQUNXLEdBQVYsb0JBQ1AsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsTUFBTixLQUFpQixNQUFqQixHQUEwQixNQUExQixHQUFzQ0QsS0FBSyxDQUFDQyxNQUE1QyxPQUFMO0FBQUEsQ0FERSxFQUVS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RUFBRSxLQXpCRjtBQTBCcEJDLEVBQUFBLG1CQUFtQixFQUFFLElBMUJEO0FBMkJwQmMsRUFBQUEsYUFBYSxFQUFFLElBM0JLO0FBNEJwQlosRUFBQUEsVUFBVSxFQUFFLEtBNUJRO0FBNkJwQmxDLEVBQUFBLGdCQUFnQixFQUFFLDRCQUFNLENBQUUsQ0E3Qk47QUE4QnBCbUMsRUFBQUEsVUFBVSxFQUFFLHNCQUFNLENBQUUsQ0E5QkE7QUErQnBCQyxFQUFBQSxnQkFBZ0IsRUFBRSw0QkFBTSxDQUFFLENBL0JOO0FBZ0NwQkMsRUFBQUEsZ0JBQWdCLEVBQUUsNEJBQU0sQ0FBRSxDQWhDTjtBQWlDcEJwQyxFQUFBQSxnQkFBZ0IsRUFBRSw0QkFBTSxDQUFFLENBakNOO0FBa0NwQmdELEVBQUFBLFNBQVMsRUFBRSxxQkFBTTtBQUNmbUIsSUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsNEpBQWIsRUFEZSxDQUM2SjtBQUM3SztBQXBDbUIsQzs7U0F2RGxCekUsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyLCB3aXRoVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgUmVzcG9uc2l2ZUxpc3RDb250YWluZXIgZnJvbSAnLi9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgQ29sdW1uSGVhZGVyIGZyb20gJy4vY29sdW1uLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IFJvdyBmcm9tICcuL3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgdGhlbWVEZWZhdWx0cywgdGhlbWVTaGFwZSB9IGZyb20gJy4vdGhlbWUnO1xuXG5jb25zdCBMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5oZWlnaHQgPT09ICdhdXRvJyA/ICcxMDAlJyA6IGAke3Byb3BzLmhlaWdodH1weGApfTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLndpZHRoID09PSAnYXV0bycgPyAnMTAwJScgOiBgJHtwcm9wcy53aWR0aH1weGApfTtcbmA7XG5cbmNvbnN0IE5vUmVzdWx0c1RleHQgPSBzdHlsZWQucGBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuYDtcblxuZXhwb3J0IGRlZmF1bHRcbkB3aXRoVGhlbWVcbmNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyBTcGVjaWFsIHByb3AgZnJvbSBzdHlsZWQtY29tcG9uZW50cyBUaGVtZVByb3ZpZGVyIChpZiBpbiB1c2UpXG4gICAgdGhlbWU6IHRoZW1lU2hhcGUsXG5cbiAgICAvLyBEYXRhIHByb3BzXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuICAgIHNlbGVjdGVkSXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgXSkpLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSxcbiAgICBdKSxcbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSxcbiAgICBdKSxcbiAgICBpdGVtSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBkcmFnSXRlbVppbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpZEtleTogUHJvcFR5cGVzLnN0cmluZywgLy8ga2V5IG9mIGlkIGluIGxpc3QgZGF0YVxuICAgIHRyYW5zbGF0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHNlYXJjaDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHNlbGVjdEFsbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBub1Jlc3VsdHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gICAgY3VzdG9tVGhlbWU6IHRoZW1lU2hhcGUsIC8vIHRoZW1lIG92ZXJyaWRlXG4gICAgcmVhY3RJbmZpbml0ZVByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLFxuXG4gICAgLy8gQm9vbGVhbnNcbiAgICBpc1NlYXJjaGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RBbGxWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0NvbHVtbkhlYWRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0FsbFNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1NvcnRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8vIGFjdGlvbnNcbiAgICBvblNlbGVjdGVkQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd0RvdWJsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd0NvbnRleHRNZW51OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdEFsbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNvcnRFbmQ6IFByb3BUeXBlcy5mdW5jLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aGVtZTogbnVsbCxcbiAgICBpZDogJ29jLXJlYWN0LWxpc3QnLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgc2VsZWN0ZWRJdGVtczogW10sXG4gICAgY29sdW1uczogW3sgdmFsdWVLZXk6ICd2YWx1ZScsIHRpdGxlOiAnVmFsdWUnIH1dLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgaXRlbUhlaWdodDogNDAsXG4gICAgY29sdW1uSGVhZGVySGVpZ2h0OiA0MCxcbiAgICBkcmFnSXRlbVppbmRleDogMTA2MCxcbiAgICBpZEtleTogJ2lkJyxcbiAgICB0cmFuc2xhdGlvbnM6IHtcbiAgICAgIHNlYXJjaDogJ1NlYXJjaCcsXG4gICAgICBzZWxlY3RBbGw6ICdBbGwnLFxuICAgICAgc2hvd09ubHlTZWxlY3RlZDogJ1Nob3cgb25seSBzZWxlY3RlZCcsXG4gICAgICBub1Jlc3VsdHM6ICdUaGVyZSBhcmUgbm8gaXRlbXMgdG8gc2hvdyBpbiB0aGlzIGxpc3QuJyxcbiAgICB9LFxuICAgIGN1c3RvbVRoZW1lOiBudWxsLFxuICAgIHJlYWN0SW5maW5pdGVQcm9wczoge30sXG4gICAgaXNTZWFyY2hhYmxlOiBmYWxzZSxcbiAgICBpc1NlbGVjdENvbHVtblZpc2libGU6IGZhbHNlLFxuICAgIGlzU2VsZWN0QWxsVmlzaWJsZTogZmFsc2UsXG4gICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZTogZmFsc2UsXG4gICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlOiBmYWxzZSxcbiAgICBpc0luZGV4Q29sdW1uVmlzaWJsZTogZmFsc2UsXG4gICAgaXNJdGVtQm9yZGVyVmlzaWJsZTogdHJ1ZSxcbiAgICBpc0FsbFNlbGVjdGVkOiBudWxsLFxuICAgIGlzU29ydGFibGU6IGZhbHNlLFxuICAgIG9uU2VsZWN0ZWRDaGFuZ2U6ICgpID0+IHt9LFxuICAgIG9uUm93Q2xpY2s6ICgpID0+IHt9LFxuICAgIG9uUm93RG91YmxlQ2xpY2s6ICgpID0+IHt9LFxuICAgIG9uUm93Q29udGV4dE1lbnU6ICgpID0+IHt9LFxuICAgIG9uU2VsZWN0QWxsQ2xpY2s6ICgpID0+IHt9LFxuICAgIG9uU29ydEVuZDogKCkgPT4ge1xuICAgICAgY29uc29sZS53YXJuKCdAb3B1c2NhcGl0YS9yZWFjdC1saXN0OiBZb3UgbXVzdCBpbXBsZW1lbnQgb25Tb3J0RW5kIGZ1bmN0aW9uIHRvIG1ha2Ugc29ydGluZyB3b3JrISBleGFtcGxlOiBodHRwczovL2dpdGh1Yi5jb20vY2xhdWRlcmljL3JlYWN0LXNvcnRhYmxlLWhvYyNiYXNpYy1leGFtcGxlJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9LFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaEtleXdvcmQ6ICcnLFxuICAgICAgc2hvd09ubHlTZWxlY3RlZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdEFsbENoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpdGVtcyxcbiAgICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgICBpZEtleSxcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2UsXG4gICAgICBvblNlbGVjdEFsbENsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChpdGVtcy5sZW5ndGggPiBzZWxlY3RlZEl0ZW1zLmxlbmd0aCkge1xuICAgICAgLy8gU2VsZWN0IGFsbFxuICAgICAgb25TZWxlY3RlZENoYW5nZShpdGVtcy5tYXAoaSA9PiBpW2lkS2V5XSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEZXNlbGVjdCBhbGxcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2UoW10pO1xuICAgIH1cbiAgICBvblNlbGVjdEFsbENsaWNrKCk7XG4gIH1cblxuICBoYW5kbGVJdGVtU2VsZWN0Q2hhbmdlID0gKGl0ZW1JZCwgaXNTZWxlY3RlZCkgPT4gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICBvblNlbGVjdGVkQ2hhbmdlKHNlbGVjdGVkSXRlbXMuZmlsdGVyKGlkID0+IGlkICE9PSBpdGVtSWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb25TZWxlY3RlZENoYW5nZShzZWxlY3RlZEl0ZW1zLmNvbmNhdChbaXRlbUlkXSkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNlYXJjaENoYW5nZSA9IChzZWFyY2hLZXl3b3JkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaEtleXdvcmQgfSk7XG4gIH07XG5cbiAgaGFuZGxlU2hvd09ubHlTZWxlY3RlZENoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNob3dPbmx5U2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dPbmx5U2VsZWN0ZWQ6ICFzaG93T25seVNlbGVjdGVkIH0pO1xuICB9O1xuXG4gIGZpbHRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZEtleSxcbiAgICAgIGNvbHVtbnMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWwjd2hhdC1hYm91dC1tZW1vaXphdGlvblxuICAgIHJldHVybiBtZW1vaXplKChpdGVtcywgc2VsZWN0ZWRJdGVtcywgc2VhcmNoS2V5d29yZCwgc2hvd09ubHlTZWxlY3RlZCkgPT4gaXRlbXMuZmlsdGVyKChpKSA9PiB7XG4gICAgICBsZXQgaGl0ID0gZmFsc2U7XG4gICAgICBpZiAoaS5pc0Fsd2F5c1Zpc2libGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoc2hvd09ubHlTZWxlY3RlZCAmJiAhc2VsZWN0ZWRJdGVtcy5pbmNsdWRlcyhpW2lkS2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHNlYXJjaEtleXdvcmQgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RyaW5nTWF0Y2hlciA9IChkYXRhLCBrZXl3b3JkKSA9PiB7XG4gICAgICAgIGxldCBlc2NhcGVkS2V5d29yZCA9IGtleXdvcmQ7XG4gICAgICAgIGNvbnN0IHNwZWNpYWxDaGFycyA9ICdbXVxcXFxeJC58PyorKCknO1xuXG4gICAgICAgIC8vIElmIGtleXdvcmQgdmFsIHN0YXJ0cyB3aXRoIGEgUmVnZXggc3BlY2lhbCBjaGFyYWN0ZXIsIHdlIG11c3QgZXNjYXBlIGl0XG4gICAgICAgIGlmIChzcGVjaWFsQ2hhcnMuaW5jbHVkZXMoa2V5d29yZFswXSkpIGVzY2FwZWRLZXl3b3JkID0gYFxcXFwke2tleXdvcmR9YDtcbiAgICAgICAgcmV0dXJuIChuZXcgUmVnRXhwKGVzY2FwZWRLZXl3b3JkLCAnaScpKS50ZXN0KGRhdGEpO1xuICAgICAgfTtcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZUtleSA9IGMudmFsdWVLZXkgfHwgJ3ZhbHVlJztcbiAgICAgICAgaWYgKHR5cGVvZiBpW3ZhbHVlS2V5XSA9PT0gJ3N0cmluZycgJiYgc3RyaW5nTWF0Y2hlcihpW3ZhbHVlS2V5XSwgc2VhcmNoS2V5d29yZCkpIHtcbiAgICAgICAgICBoaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBoaXQ7XG4gICAgfSkpO1xuICB9XG5cbiAgcmVuZGVyUm93ID0gKGl0ZW0sIHJvd0luZGV4KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBjb2x1bW5zLFxuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIGlkS2V5LFxuICAgICAgaXRlbUhlaWdodCxcbiAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNJdGVtQm9yZGVyVmlzaWJsZSxcbiAgICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZSxcbiAgICAgIGlzU29ydGFibGUsXG4gICAgICBvblJvd0NsaWNrLFxuICAgICAgb25Sb3dEb3VibGVDbGljayxcbiAgICAgIG9uUm93Q29udGV4dE1lbnUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaXRlbVtpZEtleV0pO1xuICAgIHJldHVybiAoXG4gICAgICA8Um93XG4gICAgICAgIGlkPXtgJHtpZH0tcm93LSR7cm93SW5kZXh9YH1cbiAgICAgICAga2V5PXtpdGVtW2lkS2V5XX1cbiAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgcm93SW5kZXg9e3Jvd0luZGV4fVxuICAgICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZT17aXNJbmRleENvbHVtblZpc2libGV9XG4gICAgICAgIGl0ZW1IZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZT17aXNTZWxlY3RDb2x1bW5WaXNpYmxlfVxuICAgICAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlPXtpc0l0ZW1Cb3JkZXJWaXNpYmxlfVxuICAgICAgICBpc1NvcnRhYmxlPXtpc1NvcnRhYmxlfVxuICAgICAgICBvblNlbGVjdENoYW5nZT17dGhpcy5oYW5kbGVJdGVtU2VsZWN0Q2hhbmdlKGl0ZW1baWRLZXldLCBpc1NlbGVjdGVkKX1cbiAgICAgICAgb25Sb3dDbGljaz17b25Sb3dDbGlja31cbiAgICAgICAgb25Sb3dEb3VibGVDbGljaz17b25Sb3dEb3VibGVDbGlja31cbiAgICAgICAgb25Sb3dDb250ZXh0TWVudT17b25Sb3dDb250ZXh0TWVudX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBpdGVtcyxcbiAgICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgICBjb2x1bW5zLFxuICAgICAgaXNJbmRleENvbHVtblZpc2libGUsXG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aCxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICBjb2x1bW5IZWFkZXJIZWlnaHQsXG4gICAgICBkcmFnSXRlbVppbmRleCxcbiAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZSxcbiAgICAgIGlzU2VhcmNoYWJsZSxcbiAgICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZSxcbiAgICAgIGlzU2VsZWN0QWxsVmlzaWJsZSxcbiAgICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGUsXG4gICAgICBpc0FsbFNlbGVjdGVkLFxuICAgICAgaXNTb3J0YWJsZSxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgIHJlYWN0SW5maW5pdGVQcm9wcyxcbiAgICAgIG9uU29ydEVuZCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBzaG93T25seVNlbGVjdGVkLFxuICAgICAgc2VhcmNoS2V5d29yZCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAvLyBtZW1vaXplIGZpbHRlcmVkSXRlbXMgd2hlbiBwcm9wcyBoYXMgbm90IGNoYW5nZWQgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZVxuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSB0aGlzLmZpbHRlcigpKGl0ZW1zLCBzZWxlY3RlZEl0ZW1zLCBzZWFyY2hLZXl3b3JkLCBzaG93T25seVNlbGVjdGVkKTtcbiAgICBjb25zdCBpc0hlYWRlclZpc2libGUgPSAoXG4gICAgICAoaXNTZWxlY3RBbGxWaXNpYmxlICYmICFpc0NvbHVtbkhlYWRlclZpc2libGUpXG4gICAgICB8fCAoaXNTZWFyY2hhYmxlKVxuICAgICAgfHwgKGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGUpXG4gICAgKTtcbiAgICAvLyBvdmVycmlkZSBmcm9tIHByb3BzIG9yIGNhbGN1bGF0ZSBmcm9tIGRhdGFcbiAgICBjb25zdCBpc0FsbFNlbGVjdGVkVmFsdWUgPSAoXG4gICAgICBpc0FsbFNlbGVjdGVkICE9PSBudWxsXG4gICAgICAgID8gaXNBbGxTZWxlY3RlZFxuICAgICAgICA6IChpdGVtcy5sZW5ndGggPiAwICYmIGl0ZW1zLmxlbmd0aCA9PT0gc2VsZWN0ZWRJdGVtcy5sZW5ndGgpXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RDb250YWluZXIgaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaGVpZ2h0PXtoZWlnaHR9IHdpZHRoPXt3aWR0aH0+XG4gICAgICAgIHtpc0hlYWRlclZpc2libGUgJiYgKFxuICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgIGlkPXtgJHtpZH0taGVhZGVyYH1cbiAgICAgICAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZT17aXNDb2x1bW5IZWFkZXJWaXNpYmxlfVxuICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXtpc1NlYXJjaGFibGV9XG4gICAgICAgICAgICBpc1NlbGVjdEFsbFZpc2libGU9e2lzU2VsZWN0QWxsVmlzaWJsZX1cbiAgICAgICAgICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGU9e2lzU2hvd09ubHlTZWxlY3RlZFZpc2libGV9XG4gICAgICAgICAgICBpc0FsbFNlbGVjdGVkPXtpc0FsbFNlbGVjdGVkVmFsdWV9XG4gICAgICAgICAgICBpc1Nob3dPbmx5U2VsZWN0ZWQ9e3Nob3dPbmx5U2VsZWN0ZWR9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXRlbXMubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgb25TZWxlY3RBbGxDaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QWxsQ2hhbmdlfVxuICAgICAgICAgICAgb25TZWFyY2hDaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgICAgb25TaG93T25seVNlbGVjdGVkQ2hhbmdlPXt0aGlzLmhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2V9XG4gICAgICAgICAgICB0cmFuc2xhdGlvbnM9e3RyYW5zbGF0aW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7aXNDb2x1bW5IZWFkZXJWaXNpYmxlICYmIChcbiAgICAgICAgICA8Q29sdW1uSGVhZGVyXG4gICAgICAgICAgICBpZD17YCR7aWR9LWNvbHVtbi1oZWFkZXJgfVxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZT17aXNTZWxlY3RDb2x1bW5WaXNpYmxlfVxuICAgICAgICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlPXtpc1NlbGVjdEFsbFZpc2libGV9XG4gICAgICAgICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZT17aXNJbmRleENvbHVtblZpc2libGV9XG4gICAgICAgICAgICBpc0FsbFNlbGVjdGVkPXtpc0FsbFNlbGVjdGVkVmFsdWV9XG4gICAgICAgICAgICBoZWlnaHQ9e2NvbHVtbkhlYWRlckhlaWdodH1cbiAgICAgICAgICAgIG9uU2VsZWN0QWxsQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdEFsbENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8UmVzcG9uc2l2ZUxpc3RDb250YWluZXJcbiAgICAgICAgICBpZD17YCR7aWR9LWl0ZW1zYH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBpdGVtSGVpZ2h0PXtpdGVtSGVpZ2h0fVxuICAgICAgICAgIGNvbHVtbkhlYWRlckhlaWdodD17Y29sdW1uSGVhZGVySGVpZ2h0fVxuICAgICAgICAgIGRyYWdJdGVtWmluZGV4PXtkcmFnSXRlbVppbmRleH1cbiAgICAgICAgICBpc0hlYWRlclZpc2libGU9e2lzSGVhZGVyVmlzaWJsZX1cbiAgICAgICAgICBpc0NvbHVtbkhlYWRlclZpc2libGU9e2lzQ29sdW1uSGVhZGVyVmlzaWJsZX1cbiAgICAgICAgICBpc1NvcnRhYmxlPXtpc1NvcnRhYmxlfVxuICAgICAgICAgIHJlYWN0SW5maW5pdGVQcm9wcz17cmVhY3RJbmZpbml0ZVByb3BzfVxuICAgICAgICAgIG9uU29ydEVuZD17b25Tb3J0RW5kfVxuICAgICAgICA+XG4gICAgICAgICAge2ZpbHRlcmVkSXRlbXMubWFwKHRoaXMucmVuZGVyUm93KX1cbiAgICAgICAgICB7IWZpbHRlcmVkSXRlbXMubGVuZ3RoICYmIDxOb1Jlc3VsdHNUZXh0Pnt0cmFuc2xhdGlvbnMubm9SZXN1bHRzfTwvTm9SZXN1bHRzVGV4dD59XG4gICAgICAgIDwvUmVzcG9uc2l2ZUxpc3RDb250YWluZXI+XG4gICAgICA8L0xpc3RDb250YWluZXI+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcldpdGhUaGVtZSA9IHRoZW1lT2JqID0+IChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWVPYmp9PlxuICAgICAge3RoaXMucmVuZGVyTGlzdCgpfVxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjdXN0b21UaGVtZSwgdGhlbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGN1c3RvbVRoZW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJXaXRoVGhlbWUoY3VzdG9tVGhlbWUpOyAvLyBvdmVycmlkZSB3aXRoIGN1c3RvbSB0aGVtZVxuICAgIH1cbiAgICBpZiAoIXRoZW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJXaXRoVGhlbWUodGhlbWVEZWZhdWx0cyk7IC8vIHVzZSBkZWZhdWx0cyBpZiBubyB0aGVtZSBpcyBwcm92aWRlZFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJMaXN0KCk7IC8vIFRoZW1lUHJvdmlkZXIgaXMgZm91bmQhXG4gIH1cbn1cbiJdfQ==