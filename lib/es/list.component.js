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
          columns = _this$props3.columns;
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
        searchKeyword: searchKeyword,
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
        columns: columns,
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
  onSelectedChange: function onSelectedChange() {},
  onRowClick: function onRowClick() {},
  onRowDoubleClick: function onRowDoubleClick() {},
  onRowRightClick: function onRowRightClick() {}
}), _temp)) || _class;

export { List as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJUaGVtZVByb3ZpZGVyIiwid2l0aFRoZW1lIiwibWVtb2l6ZSIsIlJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIiwiSGVhZGVyIiwiQ29sdW1uSGVhZGVyIiwiUm93IiwidGhlbWVEZWZhdWx0cyIsInRoZW1lU2hhcGUiLCJMaXN0Q29udGFpbmVyIiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJ3aWR0aCIsIkxpc3QiLCJyb3dJbmRleCIsIml0ZW0iLCJvblJvd0NsaWNrIiwib25Sb3dEb3VibGVDbGljayIsIm9uUm93UmlnaHRDbGljayIsIml0ZW1zIiwic2VsZWN0ZWRJdGVtcyIsImlkS2V5IiwiaXNTZWxlY3RhYmxlIiwib25TZWxlY3RlZENoYW5nZSIsImxlbmd0aCIsIm1hcCIsImkiLCJpdGVtSWQiLCJpc1NlbGVjdGVkIiwiZmlsdGVyIiwiaWQiLCJjb25jYXQiLCJzZWFyY2hLZXl3b3JkIiwic2V0U3RhdGUiLCJzaG93T25seVNlbGVjdGVkIiwic3RhdGUiLCJjb2x1bW5zIiwiaGl0IiwiaW5jbHVkZXMiLCJzdHJpbmdNYXRjaGVyIiwiZGF0YSIsImtleXdvcmQiLCJlc2NhcGVkS2V5d29yZCIsInNwZWNpYWxDaGFycyIsIlJlZ0V4cCIsInRlc3QiLCJmb3JFYWNoIiwiYyIsInZhbHVlS2V5IiwiaXRlbUhlaWdodCIsImlzSW5kZXhDb2x1bW5WaXNpYmxlIiwiaGFuZGxlSXRlbVNlbGVjdENoYW5nZSIsImNsYXNzTmFtZSIsImNvbHVtbkhlYWRlckhlaWdodCIsImlzQ29sdW1uSGVhZGVyVmlzaWJsZSIsImlzU2VhcmNoYWJsZSIsImlzU2VsZWN0QWxsVmlzaWJsZSIsImlzU2hvd09ubHlTZWxlY3RlZFZpc2libGUiLCJ0cmFuc2xhdGlvbnMiLCJyZWFjdEluZmluaXRlUHJvcHMiLCJmaWx0ZXJlZEl0ZW1zIiwiaXNIZWFkZXJWaXNpYmxlIiwiaXNBbGxTZWxlY3RlZCIsImhhbmRsZVNlbGVjdEFsbENoYW5nZSIsImhhbmRsZVNlYXJjaENoYW5nZSIsImhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2UiLCJyZW5kZXJSb3ciLCJ0aGVtZU9iaiIsInJlbmRlckxpc3QiLCJyZW5kZXIiLCJjdXN0b21UaGVtZSIsInRoZW1lIiwicmVuZGVyV2l0aFRoZW1lIiwiUHVyZUNvbXBvbmVudCIsInRpdGxlIiwic2VhcmNoIiwic2VsZWN0QWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxJQUFpQkMsYUFBakIsRUFBZ0NDLFNBQWhDLFFBQWlELG1CQUFqRDtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsYUFBcEI7QUFDQSxPQUFPQyx1QkFBUCxNQUFvQyx1Q0FBcEM7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG9CQUFuQjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsMkJBQXpCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixpQkFBaEI7QUFDQSxTQUFTQyxhQUFULEVBQXdCQyxVQUF4QixRQUEwQyxTQUExQztBQUVBLElBQU1DLGFBQWEsR0FBR1YsTUFBTSxDQUFDVyxHQUFWLG9CQUNQLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLE1BQU4sS0FBaUIsTUFBakIsR0FBMEIsTUFBMUIsR0FBc0NELEtBQUssQ0FBQ0MsTUFBNUMsT0FBTDtBQUFBLENBREUsRUFFUixVQUFBRCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDRSxLQUFOLEtBQWdCLE1BQWhCLEdBQXlCLE1BQXpCLEdBQXFDRixLQUFLLENBQUNFLEtBQTNDLE9BQUw7QUFBQSxDQUZHLENBQW5COztJQU9NQyxJLEdBRExiLFM7Ozs7O0FBK0VDLGdCQUFZVSxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLDRDQUFNQSxLQUFOOztBQURpQixxRUFRRixV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QSxNQUFNLEVBQUUsUUFESTtBQUVaQyxJQUFBQSxTQUFTLEVBQUUsS0FGQztBQUdaMUMsSUFBQUEsZ0JBQWdCLEVBQUU7QUFITixHQVhNO0FBZ0JwQm9DLEVBQUFBLFdBQVcsRUFBRSxJQWhCTztBQWlCcEJYLEVBQUFBLGtCQUFrQixFQUFFLEVBakJBO0FBa0JwQkosRUFBQUEsWUFBWSxFQUFFLEtBbEJNO0FBbUJwQmpDLEVBQUFBLFlBQVksRUFBRSxLQW5CTTtBQW9CcEJrQyxFQUFBQSxrQkFBa0IsRUFBRSxLQXBCQTtBQXFCcEJDLEVBQUFBLHlCQUF5QixFQUFFLEtBckJQO0FBc0JwQkgsRUFBQUEscUJBQXFCLEVBQUUsS0F0Qkg7QUF1QnBCSixFQUFBQSxvQkFBb0IsRUFBRSxLQXZCRjtBQXdCcEIzQixFQUFBQSxnQkFBZ0IsRUFBRSw0QkFBTSxDQUFFLENBeEJOO0FBeUJwQlAsRUFBQUEsVUFBVSxFQUFFLHNCQUFNLENBQUUsQ0F6QkE7QUEwQnBCQyxFQUFBQSxnQkFBZ0IsRUFBRSw0QkFBTSxDQUFFLENBMUJOO0FBMkJwQkMsRUFBQUEsZUFBZSxFQUFFLDJCQUFNLENBQUU7QUEzQkwsQzs7U0FoRGxCTCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIsIHdpdGhUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBtZW1vaXplIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCBSZXNwb25zaXZlTGlzdENvbnRhaW5lciBmcm9tICcuL3Jlc3BvbnNpdmUtbGlzdC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCBDb2x1bW5IZWFkZXIgZnJvbSAnLi9jb2x1bW4taGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgUm93IGZyb20gJy4vcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyB0aGVtZURlZmF1bHRzLCB0aGVtZVNoYXBlIH0gZnJvbSAnLi90aGVtZSc7XG5cbmNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmhlaWdodCA9PT0gJ2F1dG8nID8gJzEwMCUnIDogYCR7cHJvcHMuaGVpZ2h0fXB4YCl9O1xuICB3aWR0aDogJHtwcm9wcyA9PiAocHJvcHMud2lkdGggPT09ICdhdXRvJyA/ICcxMDAlJyA6IGAke3Byb3BzLndpZHRofXB4YCl9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHRcbkB3aXRoVGhlbWVcbmNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyBTcGVjaWFsIHByb3AgZnJvbSBzdHlsZWQtY29tcG9uZW50cyBUaGVtZVByb3ZpZGVyIChpZiBpbiB1c2UpXG4gICAgdGhlbWU6IHRoZW1lU2hhcGUsXG5cbiAgICAvLyBEYXRhIHByb3BzXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuICAgIHNlbGVjdGVkSXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgXSkpLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSxcbiAgICBdKSxcbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSxcbiAgICBdKSxcbiAgICBpdGVtSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpZEtleTogUHJvcFR5cGVzLnN0cmluZywgLy8ga2V5IG9mIGlkIGluIGxpc3QgZGF0YVxuICAgIHRyYW5zbGF0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHNlYXJjaDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHNlbGVjdEFsbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gICAgY3VzdG9tVGhlbWU6IHRoZW1lU2hhcGUsIC8vIHRoZW1lIG92ZXJyaWRlXG4gICAgcmVhY3RJbmZpbml0ZVByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLFxuXG4gICAgLy8gQm9vbGVhbnNcbiAgICBpc1NlYXJjaGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RBbGxWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0NvbHVtbkhlYWRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8vIGFjdGlvbnNcbiAgICBvblNlbGVjdGVkQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd0RvdWJsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd1JpZ2h0Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aGVtZTogbnVsbCxcbiAgICBpZDogJ29jLXJlYWN0LWxpc3QnLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgc2VsZWN0ZWRJdGVtczogW10sXG4gICAgY29sdW1uczogW3sgdmFsdWVLZXk6ICd2YWx1ZScsIHRpdGxlOiAnVmFsdWUnIH1dLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgaXRlbUhlaWdodDogNDAsXG4gICAgY29sdW1uSGVhZGVySGVpZ2h0OiA0MCxcbiAgICBpZEtleTogJ2lkJyxcbiAgICB0cmFuc2xhdGlvbnM6IHtcbiAgICAgIHNlYXJjaDogJ1NlYXJjaCcsXG4gICAgICBzZWxlY3RBbGw6ICdBbGwnLFxuICAgICAgc2hvd09ubHlTZWxlY3RlZDogJ1Nob3cgb25seSBzZWxlY3RlZCcsXG4gICAgfSxcbiAgICBjdXN0b21UaGVtZTogbnVsbCxcbiAgICByZWFjdEluZmluaXRlUHJvcHM6IHt9LFxuICAgIGlzU2VhcmNoYWJsZTogZmFsc2UsXG4gICAgaXNTZWxlY3RhYmxlOiBmYWxzZSxcbiAgICBpc1NlbGVjdEFsbFZpc2libGU6IGZhbHNlLFxuICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGU6IGZhbHNlLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogZmFsc2UsXG4gICAgaXNJbmRleENvbHVtblZpc2libGU6IGZhbHNlLFxuICAgIG9uU2VsZWN0ZWRDaGFuZ2U6ICgpID0+IHt9LFxuICAgIG9uUm93Q2xpY2s6ICgpID0+IHt9LFxuICAgIG9uUm93RG91YmxlQ2xpY2s6ICgpID0+IHt9LFxuICAgIG9uUm93UmlnaHRDbGljazogKCkgPT4ge30sXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoS2V5d29yZDogJycsXG4gICAgICBzaG93T25seVNlbGVjdGVkOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlUm93Q2xpY2sgPSAocm93SW5kZXgsIGl0ZW0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvblJvd0NsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uUm93Q2xpY2socm93SW5kZXgsIGl0ZW0pO1xuICB9XG5cbiAgaGFuZGxlUm93RG91YmxlQ2xpY2sgPSAocm93SW5kZXgsIGl0ZW0pID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvblJvd0RvdWJsZUNsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uUm93RG91YmxlQ2xpY2socm93SW5kZXgsIGl0ZW0pO1xuICB9XG5cbiAgaGFuZGxlUm93UmlnaHRDbGljayA9IChyb3dJbmRleCwgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uUm93UmlnaHRDbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBvblJvd1JpZ2h0Q2xpY2socm93SW5kZXgsIGl0ZW0pO1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0QWxsQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGl0ZW1zLFxuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIGlkS2V5LFxuICAgICAgaXNTZWxlY3RhYmxlLFxuICAgICAgb25TZWxlY3RlZENoYW5nZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXNTZWxlY3RhYmxlKSB7XG4gICAgICBpZiAoaXRlbXMubGVuZ3RoID4gc2VsZWN0ZWRJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gU2VsZWN0IGFsbFxuICAgICAgICBvblNlbGVjdGVkQ2hhbmdlKGl0ZW1zLm1hcChpID0+IGlbaWRLZXldKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEZXNlbGVjdCBhbGxcbiAgICAgICAgb25TZWxlY3RlZENoYW5nZShbXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSXRlbVNlbGVjdENoYW5nZSA9IChpdGVtSWQsIGlzU2VsZWN0ZWQpID0+ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgb25TZWxlY3RlZENoYW5nZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgb25TZWxlY3RlZENoYW5nZShzZWxlY3RlZEl0ZW1zLmZpbHRlcihpZCA9PiBpZCAhPT0gaXRlbUlkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2Uoc2VsZWN0ZWRJdGVtcy5jb25jYXQoW2l0ZW1JZF0pKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAoc2VhcmNoS2V5d29yZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hLZXl3b3JkIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dPbmx5U2VsZWN0ZWQ6ICF0aGlzLnN0YXRlLnNob3dPbmx5U2VsZWN0ZWQgfSk7XG4gIH07XG5cbiAgZmlsdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkS2V5LFxuICAgICAgY29sdW1ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gbWVtb2l6ZSgoaXRlbXMsIHNlbGVjdGVkSXRlbXMsIHNlYXJjaEtleXdvcmQsIHNob3dPbmx5U2VsZWN0ZWQpID0+XG4gICAgICBpdGVtcy5maWx0ZXIoKGkpID0+IHtcbiAgICAgICAgbGV0IGhpdCA9IGZhbHNlO1xuICAgICAgICBpZiAoc2hvd09ubHlTZWxlY3RlZCAmJiAhc2VsZWN0ZWRJdGVtcy5pbmNsdWRlcyhpW2lkS2V5XSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlYXJjaEtleXdvcmQgPT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RyaW5nTWF0Y2hlciA9IChkYXRhLCBrZXl3b3JkKSA9PiB7XG4gICAgICAgICAgbGV0IGVzY2FwZWRLZXl3b3JkID0ga2V5d29yZDtcbiAgICAgICAgICBjb25zdCBzcGVjaWFsQ2hhcnMgPSAnW11cXFxcXiQufD8qKygpJztcblxuICAgICAgICAgIC8vIElmIGtleXdvcmQgdmFsIHN0YXJ0cyB3aXRoIGEgUmVnZXggc3BlY2lhbCBjaGFyYWN0ZXIsIHdlIG11c3QgZXNjYXBlIGl0XG4gICAgICAgICAgaWYgKHNwZWNpYWxDaGFycy5pbmNsdWRlcyhrZXl3b3JkWzBdKSkgZXNjYXBlZEtleXdvcmQgPSBgXFxcXCR7a2V5d29yZH1gO1xuICAgICAgICAgIHJldHVybiAobmV3IFJlZ0V4cChlc2NhcGVkS2V5d29yZCwgJ2knKSkudGVzdChkYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29sdW1ucy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBpW2MudmFsdWVLZXldID09PSAnc3RyaW5nJyAmJiBzdHJpbmdNYXRjaGVyKGlbYy52YWx1ZUtleV0sIHNlYXJjaEtleXdvcmQpKSB7XG4gICAgICAgICAgICBoaXQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBoaXQ7XG4gICAgICB9KSk7XG4gIH1cblxuICByZW5kZXJSb3cgPSAoaXRlbSwgcm93SW5kZXgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgICBpZEtleSxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZSxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBpc1NlbGVjdGFibGUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaXRlbVtpZEtleV0pO1xuICAgIHJldHVybiAoXG4gICAgICA8Um93XG4gICAgICAgIGlkPXtgJHtpZH0tcm93LSR7cm93SW5kZXh9YH1cbiAgICAgICAga2V5PXtpdGVtW2lkS2V5XX1cbiAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgcm93SW5kZXg9e3Jvd0luZGV4fVxuICAgICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZT17aXNJbmRleENvbHVtblZpc2libGV9XG4gICAgICAgIGl0ZW1IZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgIGlzU2VsZWN0YWJsZT17aXNTZWxlY3RhYmxlfVxuICAgICAgICBvblNlbGVjdENoYW5nZT17dGhpcy5oYW5kbGVJdGVtU2VsZWN0Q2hhbmdlKGl0ZW1baWRLZXldLCBpc1NlbGVjdGVkKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBpdGVtcyxcbiAgICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgICBjb2x1bW5zLFxuICAgICAgaXNJbmRleENvbHVtblZpc2libGUsXG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aCxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICBjb2x1bW5IZWFkZXJIZWlnaHQsXG4gICAgICBpc0NvbHVtbkhlYWRlclZpc2libGUsXG4gICAgICBpc1NlYXJjaGFibGUsXG4gICAgICBpc1NlbGVjdGFibGUsXG4gICAgICBpc1NlbGVjdEFsbFZpc2libGUsXG4gICAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgcmVhY3RJbmZpbml0ZVByb3BzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQsXG4gICAgICBzZWFyY2hLZXl3b3JkLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSB0aGlzLmZpbHRlcigpKGl0ZW1zLCBzZWxlY3RlZEl0ZW1zLCBzZWFyY2hLZXl3b3JkLCBzaG93T25seVNlbGVjdGVkKTtcbiAgICBjb25zdCBpc0hlYWRlclZpc2libGUgPSAoXG4gICAgICAoaXNTZWxlY3RBbGxWaXNpYmxlICYmICFpc0NvbHVtbkhlYWRlclZpc2libGUpIHx8XG4gICAgICAoaXNTZWFyY2hhYmxlKSB8fFxuICAgICAgKGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGUpXG4gICAgKTtcbiAgICBjb25zdCBpc0FsbFNlbGVjdGVkID0gaXRlbXMubGVuZ3RoID4gMCAmJiBpdGVtcy5sZW5ndGggPT09IHNlbGVjdGVkSXRlbXMubGVuZ3RoO1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdENvbnRhaW5lciBpZD17aWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBoZWlnaHQ9e2hlaWdodH0gd2lkdGg9e3dpZHRofT5cbiAgICAgICAge2lzSGVhZGVyVmlzaWJsZSAmJiAoXG4gICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgaWQ9e2Ake2lkfS1oZWFkZXJgfVxuICAgICAgICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlPXtpc0NvbHVtbkhlYWRlclZpc2libGV9XG4gICAgICAgICAgICBpc1NlYXJjaGFibGU9e2lzU2VhcmNoYWJsZX1cbiAgICAgICAgICAgIGlzU2VsZWN0QWxsVmlzaWJsZT17aXNTZWxlY3RBbGxWaXNpYmxlfVxuICAgICAgICAgICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZT17aXNTaG93T25seVNlbGVjdGVkVmlzaWJsZX1cbiAgICAgICAgICAgIGlzQWxsU2VsZWN0ZWQ9e2lzQWxsU2VsZWN0ZWR9XG4gICAgICAgICAgICBpc1Nob3dPbmx5U2VsZWN0ZWQ9e3Nob3dPbmx5U2VsZWN0ZWR9XG4gICAgICAgICAgICBzZWFyY2hLZXl3b3JkPXtzZWFyY2hLZXl3b3JkfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2l0ZW1zLmxlbmd0aCA9PT0gMH1cbiAgICAgICAgICAgIG9uU2VsZWN0QWxsQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdEFsbENoYW5nZX1cbiAgICAgICAgICAgIG9uU2VhcmNoQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgIG9uU2hvd09ubHlTZWxlY3RlZENoYW5nZT17dGhpcy5oYW5kbGVTaG93T25seVNlbGVjdGVkQ2hhbmdlfVxuICAgICAgICAgICAgdHJhbnNsYXRpb25zPXt0cmFuc2xhdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2lzQ29sdW1uSGVhZGVyVmlzaWJsZSAmJiAoXG4gICAgICAgICAgPENvbHVtbkhlYWRlclxuICAgICAgICAgICAgaWQ9e2Ake2lkfS1jb2x1bW4taGVhZGVyYH1cbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICBpc1NlbGVjdGFibGU9e2lzU2VsZWN0YWJsZX1cbiAgICAgICAgICAgIGlzU2VsZWN0QWxsVmlzaWJsZT17aXNTZWxlY3RBbGxWaXNpYmxlfVxuICAgICAgICAgICAgaXNJbmRleENvbHVtblZpc2libGU9e2lzSW5kZXhDb2x1bW5WaXNpYmxlfVxuICAgICAgICAgICAgaXNBbGxTZWxlY3RlZD17aXNBbGxTZWxlY3RlZH1cbiAgICAgICAgICAgIGhlaWdodD17Y29sdW1uSGVhZGVySGVpZ2h0fVxuICAgICAgICAgICAgb25TZWxlY3RBbGxDaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QWxsQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxSZXNwb25zaXZlTGlzdENvbnRhaW5lclxuICAgICAgICAgIGlkPXtgJHtpZH0taXRlbXNgfVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGl0ZW1IZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICBjb2x1bW5IZWFkZXJIZWlnaHQ9e2NvbHVtbkhlYWRlckhlaWdodH1cbiAgICAgICAgICBpc0hlYWRlclZpc2libGU9e2lzSGVhZGVyVmlzaWJsZX1cbiAgICAgICAgICBpc0NvbHVtbkhlYWRlclZpc2libGU9e2lzQ29sdW1uSGVhZGVyVmlzaWJsZX1cbiAgICAgICAgICByZWFjdEluZmluaXRlUHJvcHM9e3JlYWN0SW5maW5pdGVQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtmaWx0ZXJlZEl0ZW1zLm1hcCh0aGlzLnJlbmRlclJvdyl9XG4gICAgICAgIDwvUmVzcG9uc2l2ZUxpc3RDb250YWluZXI+XG4gICAgICA8L0xpc3RDb250YWluZXI+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcldpdGhUaGVtZSA9IHRoZW1lT2JqID0+IChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWVPYmp9PlxuICAgICAge3RoaXMucmVuZGVyTGlzdCgpfVxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjdXN0b21UaGVtZSwgdGhlbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGN1c3RvbVRoZW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJXaXRoVGhlbWUoY3VzdG9tVGhlbWUpOyAvLyBvdmVycmlkZSB3aXRoIGN1c3RvbSB0aGVtZVxuICAgIH1cbiAgICBpZiAoIXRoZW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJXaXRoVGhlbWUodGhlbWVEZWZhdWx0cyk7IC8vIHVzZSBkZWZhdWx0cyBpZiBubyB0aGVtZSBpcyBwcm92aWRlZFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJMaXN0KCk7IC8vIFRoZW1lUHJvdmlkZXIgaXMgZm91bmQhXG4gIH1cbn1cbiJdfQ==