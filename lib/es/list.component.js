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

    _defineProperty(_assertThisInitialized(_this), "handleRowClick", function (rowIndex, item) {
      var onRowClick = _this.props.onRowClick;
      onRowClick(rowIndex, item);
    });

    _defineProperty(_assertThisInitialized(_this), "handleRowDoubleClick", function (rowIndex, item) {
      var onRowDoubleClick = _this.props.onRowDoubleClick;
      onRowDoubleClick(rowIndex, item);
    });

    _defineProperty(_assertThisInitialized(_this), "handleRowRightClick", function (rowIndex, item) {
      var onRowRightClick = _this.props.onRowRightClick;
      onRowRightClick(rowIndex, item);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectAllChange", function () {
      var _this$props = _this.props,
          items = _this$props.items,
          selectedItems = _this$props.selectedItems,
          idKey = _this$props.idKey,
          isSelectable = _this$props.isSelectable,
          onSelectedChange = _this$props.onSelectedChange;

      if (isSelectable) {
        if (items.length > selectedItems.length) {
          // Select all
          onSelectedChange(items.map(function (i) {
            return i[idKey];
          }));
        } else {
          // Deselect all
          onSelectedChange([]);
        }
      }
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
      _this.setState({
        showOnlySelected: !_this.state.showOnlySelected
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
            if (typeof i[c.valueKey] === 'string' && stringMatcher(i[c.valueKey], searchKeyword)) {
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
          isSelectable = _this$props4.isSelectable;
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
        isSelectable: isSelectable,
        isItemBorderVisible: isItemBorderVisible,
        onSelectChange: _this.handleItemSelectChange(item[idKey], isSelected)
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
          isSelectable = _this$props5.isSelectable,
          isSelectAllVisible = _this$props5.isSelectAllVisible,
          isShowOnlySelectedVisible = _this$props5.isShowOnlySelectedVisible,
          translations = _this$props5.translations,
          reactInfiniteProps = _this$props5.reactInfiniteProps;
      var _this$state = _this.state,
          showOnlySelected = _this$state.showOnlySelected,
          searchKeyword = _this$state.searchKeyword;

      var filteredItems = _this.filter()(items, selectedItems, searchKeyword, showOnlySelected);

      var isHeaderVisible = isSelectAllVisible && !isColumnHeaderVisible || isSearchable || isShowOnlySelectedVisible;
      var isAllSelected = items.length > 0 && items.length === selectedItems.length;
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
        isAllSelected: isAllSelected,
        isShowOnlySelected: showOnlySelected,
        disabled: items.length === 0,
        onSelectAllChange: _this.handleSelectAllChange,
        onSearchChange: _this.handleSearchChange,
        onShowOnlySelectedChange: _this.handleShowOnlySelectedChange,
        translations: translations
      }), isColumnHeaderVisible && React.createElement(ColumnHeader, {
        id: id + "-column-header",
        columns: columns,
        isSelectable: isSelectable,
        isSelectAllVisible: isSelectAllVisible,
        isIndexColumnVisible: isIndexColumnVisible,
        isAllSelected: isAllSelected,
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
  isSelectable: false,
  isSelectAllVisible: false,
  isShowOnlySelectedVisible: false,
  isColumnHeaderVisible: false,
  isIndexColumnVisible: false,
  isItemBorderVisible: true,
  onSelectedChange: function onSelectedChange() {},
  onRowClick: function onRowClick() {},
  onRowDoubleClick: function onRowDoubleClick() {},
  onRowRightClick: function onRowRightClick() {}
}), _temp)) || _class;

export { List as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJUaGVtZVByb3ZpZGVyIiwid2l0aFRoZW1lIiwibWVtb2l6ZSIsIlJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIiwiSGVhZGVyIiwiQ29sdW1uSGVhZGVyIiwiUm93IiwidGhlbWVEZWZhdWx0cyIsInRoZW1lU2hhcGUiLCJMaXN0Q29udGFpbmVyIiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJ3aWR0aCIsIkxpc3QiLCJyb3dJbmRleCIsIml0ZW0iLCJvblJvd0NsaWNrIiwib25Sb3dEb3VibGVDbGljayIsIm9uUm93UmlnaHRDbGljayIsIml0ZW1zIiwic2VsZWN0ZWRJdGVtcyIsImlkS2V5IiwiaXNTZWxlY3RhYmxlIiwib25TZWxlY3RlZENoYW5nZSIsImxlbmd0aCIsIm1hcCIsImkiLCJpdGVtSWQiLCJpc1NlbGVjdGVkIiwiZmlsdGVyIiwiaWQiLCJjb25jYXQiLCJzZWFyY2hLZXl3b3JkIiwic2V0U3RhdGUiLCJzaG93T25seVNlbGVjdGVkIiwic3RhdGUiLCJjb2x1bW5zIiwiaGl0IiwiaW5jbHVkZXMiLCJzdHJpbmdNYXRjaGVyIiwiZGF0YSIsImtleXdvcmQiLCJlc2NhcGVkS2V5d29yZCIsInNwZWNpYWxDaGFycyIsIlJlZ0V4cCIsInRlc3QiLCJmb3JFYWNoIiwiYyIsInZhbHVlS2V5IiwiaXRlbUhlaWdodCIsImlzSW5kZXhDb2x1bW5WaXNpYmxlIiwiaXNJdGVtQm9yZGVyVmlzaWJsZSIsImhhbmRsZUl0ZW1TZWxlY3RDaGFuZ2UiLCJjbGFzc05hbWUiLCJjb2x1bW5IZWFkZXJIZWlnaHQiLCJpc0NvbHVtbkhlYWRlclZpc2libGUiLCJpc1NlYXJjaGFibGUiLCJpc1NlbGVjdEFsbFZpc2libGUiLCJpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlIiwidHJhbnNsYXRpb25zIiwicmVhY3RJbmZpbml0ZVByb3BzIiwiZmlsdGVyZWRJdGVtcyIsImlzSGVhZGVyVmlzaWJsZSIsImlzQWxsU2VsZWN0ZWQiLCJoYW5kbGVTZWxlY3RBbGxDaGFuZ2UiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJoYW5kbGVTaG93T25seVNlbGVjdGVkQ2hhbmdlIiwicmVuZGVyUm93IiwidGhlbWVPYmoiLCJyZW5kZXJMaXN0IiwicmVuZGVyIiwiY3VzdG9tVGhlbWUiLCJ0aGVtZSIsInJlbmRlcldpdGhUaGVtZSIsIlB1cmVDb21wb25lbnQiLCJ0aXRsZSIsInNlYXJjaCIsInNlbGVjdEFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsSUFBaUJDLGFBQWpCLEVBQWdDQyxTQUFoQyxRQUFpRCxtQkFBakQ7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLGFBQXBCO0FBQ0EsT0FBT0MsdUJBQVAsTUFBb0MsdUNBQXBDO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixvQkFBbkI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLDJCQUF6QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsaUJBQWhCO0FBQ0EsU0FBU0MsYUFBVCxFQUF3QkMsVUFBeEIsUUFBMEMsU0FBMUM7QUFFQSxJQUFNQyxhQUFhLEdBQUdWLE1BQU0sQ0FBQ1csR0FBVixvQkFDUCxVQUFBQyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxNQUFOLEtBQWlCLE1BQWpCLEdBQTBCLE1BQTFCLEdBQXNDRCxLQUFLLENBQUNDLE1BQTVDLE9BQUw7QUFBQSxDQURFLEVBRVIsVUFBQUQsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0UsS0FBTixLQUFnQixNQUFoQixHQUF5QixNQUF6QixHQUFxQ0YsS0FBSyxDQUFDRSxLQUEzQyxPQUFMO0FBQUEsQ0FGRyxDQUFuQjs7SUFPTUMsSSxHQURMYixTOzs7OztBQWlGQyxnQkFBWVUsS0FBWixFQUFtQjtBQUFBOztBQUNqQiw0Q0FB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VmE7QUFXcEJzQyxFQUFBQSxZQUFZLEVBQUU7QUFDWmlCLElBQUFBLE1BQU0sRUFBRSxRQURJO0FBRVpDLElBQUFBLFNBQVMsRUFBRSxLQUZDO0FBR1ozQyxJQUFBQSxnQkFBZ0IsRUFBRTtBQUhOLEdBWE07QUFnQnBCcUMsRUFBQUEsV0FBVyxFQUFFLElBaEJPO0FBaUJwQlgsRUFBQUEsa0JBQWtCLEVBQUUsRUFqQkE7QUFrQnBCSixFQUFBQSxZQUFZLEVBQUUsS0FsQk07QUFtQnBCbEMsRUFBQUEsWUFBWSxFQUFFLEtBbkJNO0FBb0JwQm1DLEVBQUFBLGtCQUFrQixFQUFFLEtBcEJBO0FBcUJwQkMsRUFBQUEseUJBQXlCLEVBQUUsS0FyQlA7QUFzQnBCSCxFQUFBQSxxQkFBcUIsRUFBRSxLQXRCSDtBQXVCcEJMLEVBQUFBLG9CQUFvQixFQUFFLEtBdkJGO0FBd0JwQkMsRUFBQUEsbUJBQW1CLEVBQUUsSUF4QkQ7QUF5QnBCNUIsRUFBQUEsZ0JBQWdCLEVBQUUsNEJBQU0sQ0FBRSxDQXpCTjtBQTBCcEJQLEVBQUFBLFVBQVUsRUFBRSxzQkFBTSxDQUFFLENBMUJBO0FBMkJwQkMsRUFBQUEsZ0JBQWdCLEVBQUUsNEJBQU0sQ0FBRSxDQTNCTjtBQTRCcEJDLEVBQUFBLGVBQWUsRUFBRSwyQkFBTSxDQUFFO0FBNUJMLEM7O1NBakRsQkwsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyLCB3aXRoVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgUmVzcG9uc2l2ZUxpc3RDb250YWluZXIgZnJvbSAnLi9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgQ29sdW1uSGVhZGVyIGZyb20gJy4vY29sdW1uLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IFJvdyBmcm9tICcuL3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgdGhlbWVEZWZhdWx0cywgdGhlbWVTaGFwZSB9IGZyb20gJy4vdGhlbWUnO1xuXG5jb25zdCBMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5oZWlnaHQgPT09ICdhdXRvJyA/ICcxMDAlJyA6IGAke3Byb3BzLmhlaWdodH1weGApfTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLndpZHRoID09PSAnYXV0bycgPyAnMTAwJScgOiBgJHtwcm9wcy53aWR0aH1weGApfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0XG5Ad2l0aFRoZW1lXG5jbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gU3BlY2lhbCBwcm9wIGZyb20gc3R5bGVkLWNvbXBvbmVudHMgVGhlbWVQcm92aWRlciAoaWYgaW4gdXNlKVxuICAgIHRoZW1lOiB0aGVtZVNoYXBlLFxuXG4gICAgLy8gRGF0YSBwcm9wc1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcbiAgICBzZWxlY3RlZEl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIF0pKSxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKSxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSksXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSksXG4gICAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb2x1bW5IZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaWRLZXk6IFByb3BUeXBlcy5zdHJpbmcsIC8vIGtleSBvZiBpZCBpbiBsaXN0IGRhdGFcbiAgICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzZWFyY2g6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzZWxlY3RBbGw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzaG93T25seVNlbGVjdGVkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICAgIGN1c3RvbVRoZW1lOiB0aGVtZVNoYXBlLCAvLyB0aGVtZSBvdmVycmlkZVxuICAgIHJlYWN0SW5maW5pdGVQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KSxcblxuICAgIC8vIEJvb2xlYW5zXG4gICAgaXNTZWFyY2hhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1NlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2VsZWN0QWxsVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0luZGV4Q29sdW1uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNJdGVtQm9yZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvLyBhY3Rpb25zXG4gICAgb25TZWxlY3RlZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dEb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Sb3dSaWdodENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGhlbWU6IG51bGwsXG4gICAgaWQ6ICdvYy1yZWFjdC1saXN0JyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHNlbGVjdGVkSXRlbXM6IFtdLFxuICAgIGNvbHVtbnM6IFt7IHZhbHVlS2V5OiAndmFsdWUnLCB0aXRsZTogJ1ZhbHVlJyB9XSxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGl0ZW1IZWlnaHQ6IDQwLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogNDAsXG4gICAgaWRLZXk6ICdpZCcsXG4gICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICBzZWFyY2g6ICdTZWFyY2gnLFxuICAgICAgc2VsZWN0QWxsOiAnQWxsJyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6ICdTaG93IG9ubHkgc2VsZWN0ZWQnLFxuICAgIH0sXG4gICAgY3VzdG9tVGhlbWU6IG51bGwsXG4gICAgcmVhY3RJbmZpbml0ZVByb3BzOiB7fSxcbiAgICBpc1NlYXJjaGFibGU6IGZhbHNlLFxuICAgIGlzU2VsZWN0YWJsZTogZmFsc2UsXG4gICAgaXNTZWxlY3RBbGxWaXNpYmxlOiBmYWxzZSxcbiAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlOiBmYWxzZSxcbiAgICBpc0NvbHVtbkhlYWRlclZpc2libGU6IGZhbHNlLFxuICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlOiBmYWxzZSxcbiAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlOiB0cnVlLFxuICAgIG9uU2VsZWN0ZWRDaGFuZ2U6ICgpID0+IHt9LFxuICAgIG9uUm93Q2xpY2s6ICgpID0+IHt9LFxuICAgIG9uUm93RG91YmxlQ2xpY2s6ICgpID0+IHt9LFxuICAgIG9uUm93UmlnaHRDbGljazogKCkgPT4ge30sXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoS2V5d29yZDogJycsXG4gICAgICBzaG93T25seVNlbGVjdGVkOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlUm93Q2xpY2sgPSAocm93SW5kZXgsIGl0ZW0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvblJvd0NsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uUm93Q2xpY2socm93SW5kZXgsIGl0ZW0pO1xuICB9XG5cbiAgaGFuZGxlUm93RG91YmxlQ2xpY2sgPSAocm93SW5kZXgsIGl0ZW0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvblJvd0RvdWJsZUNsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uUm93RG91YmxlQ2xpY2socm93SW5kZXgsIGl0ZW0pO1xuICB9XG5cbiAgaGFuZGxlUm93UmlnaHRDbGljayA9IChyb3dJbmRleCwgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uUm93UmlnaHRDbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBvblJvd1JpZ2h0Q2xpY2socm93SW5kZXgsIGl0ZW0pO1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0QWxsQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGl0ZW1zLFxuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIGlkS2V5LFxuICAgICAgaXNTZWxlY3RhYmxlLFxuICAgICAgb25TZWxlY3RlZENoYW5nZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXNTZWxlY3RhYmxlKSB7XG4gICAgICBpZiAoaXRlbXMubGVuZ3RoID4gc2VsZWN0ZWRJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gU2VsZWN0IGFsbFxuICAgICAgICBvblNlbGVjdGVkQ2hhbmdlKGl0ZW1zLm1hcChpID0+IGlbaWRLZXldKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEZXNlbGVjdCBhbGxcbiAgICAgICAgb25TZWxlY3RlZENoYW5nZShbXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSXRlbVNlbGVjdENoYW5nZSA9IChpdGVtSWQsIGlzU2VsZWN0ZWQpID0+ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgb25TZWxlY3RlZENoYW5nZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgb25TZWxlY3RlZENoYW5nZShzZWxlY3RlZEl0ZW1zLmZpbHRlcihpZCA9PiBpZCAhPT0gaXRlbUlkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2Uoc2VsZWN0ZWRJdGVtcy5jb25jYXQoW2l0ZW1JZF0pKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAoc2VhcmNoS2V5d29yZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hLZXl3b3JkIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dPbmx5U2VsZWN0ZWQ6ICF0aGlzLnN0YXRlLnNob3dPbmx5U2VsZWN0ZWQgfSk7XG4gIH07XG5cbiAgZmlsdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkS2V5LFxuICAgICAgY29sdW1ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbCN3aGF0LWFib3V0LW1lbW9pemF0aW9uXG4gICAgcmV0dXJuIG1lbW9pemUoKGl0ZW1zLCBzZWxlY3RlZEl0ZW1zLCBzZWFyY2hLZXl3b3JkLCBzaG93T25seVNlbGVjdGVkKSA9PlxuICAgICAgaXRlbXMuZmlsdGVyKChpKSA9PiB7XG4gICAgICAgIGxldCBoaXQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHNob3dPbmx5U2VsZWN0ZWQgJiYgIXNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaVtpZEtleV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWFyY2hLZXl3b3JkID09PSAnJykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0cmluZ01hdGNoZXIgPSAoZGF0YSwga2V5d29yZCkgPT4ge1xuICAgICAgICAgIGxldCBlc2NhcGVkS2V5d29yZCA9IGtleXdvcmQ7XG4gICAgICAgICAgY29uc3Qgc3BlY2lhbENoYXJzID0gJ1tdXFxcXF4kLnw/KisoKSc7XG5cbiAgICAgICAgICAvLyBJZiBrZXl3b3JkIHZhbCBzdGFydHMgd2l0aCBhIFJlZ2V4IHNwZWNpYWwgY2hhcmFjdGVyLCB3ZSBtdXN0IGVzY2FwZSBpdFxuICAgICAgICAgIGlmIChzcGVjaWFsQ2hhcnMuaW5jbHVkZXMoa2V5d29yZFswXSkpIGVzY2FwZWRLZXl3b3JkID0gYFxcXFwke2tleXdvcmR9YDtcbiAgICAgICAgICByZXR1cm4gKG5ldyBSZWdFeHAoZXNjYXBlZEtleXdvcmQsICdpJykpLnRlc3QoZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbHVtbnMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgaVtjLnZhbHVlS2V5XSA9PT0gJ3N0cmluZycgJiYgc3RyaW5nTWF0Y2hlcihpW2MudmFsdWVLZXldLCBzZWFyY2hLZXl3b3JkKSkge1xuICAgICAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaGl0O1xuICAgICAgfSkpO1xuICB9XG5cbiAgcmVuZGVyUm93ID0gKGl0ZW0sIHJvd0luZGV4KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgaWRLZXksXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgICAgaXNJbmRleENvbHVtblZpc2libGUsXG4gICAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGlzU2VsZWN0YWJsZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcy5pbmNsdWRlcyhpdGVtW2lkS2V5XSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3dcbiAgICAgICAgaWQ9e2Ake2lkfS1yb3ctJHtyb3dJbmRleH1gfVxuICAgICAgICBrZXk9e2l0ZW1baWRLZXldfVxuICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICByb3dJbmRleD17cm93SW5kZXh9XG4gICAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlPXtpc0luZGV4Q29sdW1uVmlzaWJsZX1cbiAgICAgICAgaXRlbUhlaWdodD17aXRlbUhlaWdodH1cbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgaXNTZWxlY3RhYmxlPXtpc1NlbGVjdGFibGV9XG4gICAgICAgIGlzSXRlbUJvcmRlclZpc2libGU9e2lzSXRlbUJvcmRlclZpc2libGV9XG4gICAgICAgIG9uU2VsZWN0Q2hhbmdlPXt0aGlzLmhhbmRsZUl0ZW1TZWxlY3RDaGFuZ2UoaXRlbVtpZEtleV0sIGlzU2VsZWN0ZWQpfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGl0ZW1zLFxuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoLFxuICAgICAgaXRlbUhlaWdodCxcbiAgICAgIGNvbHVtbkhlYWRlckhlaWdodCxcbiAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZSxcbiAgICAgIGlzU2VhcmNoYWJsZSxcbiAgICAgIGlzU2VsZWN0YWJsZSxcbiAgICAgIGlzU2VsZWN0QWxsVmlzaWJsZSxcbiAgICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGUsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICByZWFjdEluZmluaXRlUHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgc2hvd09ubHlTZWxlY3RlZCxcbiAgICAgIHNlYXJjaEtleXdvcmQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHRoaXMuZmlsdGVyKCkoaXRlbXMsIHNlbGVjdGVkSXRlbXMsIHNlYXJjaEtleXdvcmQsIHNob3dPbmx5U2VsZWN0ZWQpO1xuICAgIGNvbnN0IGlzSGVhZGVyVmlzaWJsZSA9IChcbiAgICAgIChpc1NlbGVjdEFsbFZpc2libGUgJiYgIWlzQ29sdW1uSGVhZGVyVmlzaWJsZSkgfHxcbiAgICAgIChpc1NlYXJjaGFibGUpIHx8XG4gICAgICAoaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZSlcbiAgICApO1xuICAgIGNvbnN0IGlzQWxsU2VsZWN0ZWQgPSBpdGVtcy5sZW5ndGggPiAwICYmIGl0ZW1zLmxlbmd0aCA9PT0gc2VsZWN0ZWRJdGVtcy5sZW5ndGg7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0Q29udGFpbmVyIGlkPXtpZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGhlaWdodD17aGVpZ2h0fSB3aWR0aD17d2lkdGh9PlxuICAgICAgICB7aXNIZWFkZXJWaXNpYmxlICYmIChcbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICBpZD17YCR7aWR9LWhlYWRlcmB9XG4gICAgICAgICAgICBpc0NvbHVtbkhlYWRlclZpc2libGU9e2lzQ29sdW1uSGVhZGVyVmlzaWJsZX1cbiAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17aXNTZWFyY2hhYmxlfVxuICAgICAgICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlPXtpc1NlbGVjdEFsbFZpc2libGV9XG4gICAgICAgICAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlPXtpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlfVxuICAgICAgICAgICAgaXNBbGxTZWxlY3RlZD17aXNBbGxTZWxlY3RlZH1cbiAgICAgICAgICAgIGlzU2hvd09ubHlTZWxlY3RlZD17c2hvd09ubHlTZWxlY3RlZH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpdGVtcy5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICBvblNlbGVjdEFsbENoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RBbGxDaGFuZ2V9XG4gICAgICAgICAgICBvblNlYXJjaENoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgICAgICBvblNob3dPbmx5U2VsZWN0ZWRDaGFuZ2U9e3RoaXMuaGFuZGxlU2hvd09ubHlTZWxlY3RlZENoYW5nZX1cbiAgICAgICAgICAgIHRyYW5zbGF0aW9ucz17dHJhbnNsYXRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtpc0NvbHVtbkhlYWRlclZpc2libGUgJiYgKFxuICAgICAgICAgIDxDb2x1bW5IZWFkZXJcbiAgICAgICAgICAgIGlkPXtgJHtpZH0tY29sdW1uLWhlYWRlcmB9XG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgaXNTZWxlY3RhYmxlPXtpc1NlbGVjdGFibGV9XG4gICAgICAgICAgICBpc1NlbGVjdEFsbFZpc2libGU9e2lzU2VsZWN0QWxsVmlzaWJsZX1cbiAgICAgICAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlPXtpc0luZGV4Q29sdW1uVmlzaWJsZX1cbiAgICAgICAgICAgIGlzQWxsU2VsZWN0ZWQ9e2lzQWxsU2VsZWN0ZWR9XG4gICAgICAgICAgICBoZWlnaHQ9e2NvbHVtbkhlYWRlckhlaWdodH1cbiAgICAgICAgICAgIG9uU2VsZWN0QWxsQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdEFsbENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8UmVzcG9uc2l2ZUxpc3RDb250YWluZXJcbiAgICAgICAgICBpZD17YCR7aWR9LWl0ZW1zYH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBpdGVtSGVpZ2h0PXtpdGVtSGVpZ2h0fVxuICAgICAgICAgIGNvbHVtbkhlYWRlckhlaWdodD17Y29sdW1uSGVhZGVySGVpZ2h0fVxuICAgICAgICAgIGlzSGVhZGVyVmlzaWJsZT17aXNIZWFkZXJWaXNpYmxlfVxuICAgICAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZT17aXNDb2x1bW5IZWFkZXJWaXNpYmxlfVxuICAgICAgICAgIHJlYWN0SW5maW5pdGVQcm9wcz17cmVhY3RJbmZpbml0ZVByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2ZpbHRlcmVkSXRlbXMubWFwKHRoaXMucmVuZGVyUm93KX1cbiAgICAgICAgPC9SZXNwb25zaXZlTGlzdENvbnRhaW5lcj5cbiAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyV2l0aFRoZW1lID0gdGhlbWVPYmogPT4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZU9ian0+XG4gICAgICB7dGhpcy5yZW5kZXJMaXN0KCl9XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGN1c3RvbVRoZW1lLCB0aGVtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoY3VzdG9tVGhlbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcldpdGhUaGVtZShjdXN0b21UaGVtZSk7IC8vIG92ZXJyaWRlIHdpdGggY3VzdG9tIHRoZW1lXG4gICAgfVxuICAgIGlmICghdGhlbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcldpdGhUaGVtZSh0aGVtZURlZmF1bHRzKTsgLy8gdXNlIGRlZmF1bHRzIGlmIG5vIHRoZW1lIGlzIHByb3ZpZGVkXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbmRlckxpc3QoKTsgLy8gVGhlbWVQcm92aWRlciBpcyBmb3VuZCFcbiAgfVxufVxuIl19