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
        reactInfiniteProps: reactInfiniteProps
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
  onSelectedChange: function onSelectedChange() {},
  onRowClick: function onRowClick() {},
  onRowDoubleClick: function onRowDoubleClick() {},
  onRowContextMenu: function onRowContextMenu() {},
  onSelectAllClick: function onSelectAllClick() {}
}), _temp)) || _class;

exports["default"] = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTGlzdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaGVpZ2h0Iiwid2lkdGgiLCJOb1Jlc3VsdHNUZXh0IiwicCIsIkxpc3QiLCJ3aXRoVGhlbWUiLCJpdGVtcyIsInNlbGVjdGVkSXRlbXMiLCJpZEtleSIsIm9uU2VsZWN0ZWRDaGFuZ2UiLCJvblNlbGVjdEFsbENsaWNrIiwibGVuZ3RoIiwibWFwIiwiaSIsIml0ZW1JZCIsImlzU2VsZWN0ZWQiLCJmaWx0ZXIiLCJpZCIsImNvbmNhdCIsInNlYXJjaEtleXdvcmQiLCJzZXRTdGF0ZSIsInNob3dPbmx5U2VsZWN0ZWQiLCJzdGF0ZSIsImNvbHVtbnMiLCJoaXQiLCJpc0Fsd2F5c1Zpc2libGUiLCJpbmNsdWRlcyIsInN0cmluZ01hdGNoZXIiLCJkYXRhIiwia2V5d29yZCIsImVzY2FwZWRLZXl3b3JkIiwic3BlY2lhbENoYXJzIiwiUmVnRXhwIiwidGVzdCIsImZvckVhY2giLCJjIiwidmFsdWVLZXkiLCJpdGVtIiwicm93SW5kZXgiLCJpdGVtSGVpZ2h0IiwiaXNJbmRleENvbHVtblZpc2libGUiLCJpc0l0ZW1Cb3JkZXJWaXNpYmxlIiwiaXNTZWxlY3RDb2x1bW5WaXNpYmxlIiwib25Sb3dDbGljayIsIm9uUm93RG91YmxlQ2xpY2siLCJvblJvd0NvbnRleHRNZW51IiwiaGFuZGxlSXRlbVNlbGVjdENoYW5nZSIsImNsYXNzTmFtZSIsImNvbHVtbkhlYWRlckhlaWdodCIsImlzQ29sdW1uSGVhZGVyVmlzaWJsZSIsImlzU2VhcmNoYWJsZSIsImlzU2VsZWN0QWxsVmlzaWJsZSIsImlzU2hvd09ubHlTZWxlY3RlZFZpc2libGUiLCJpc0FsbFNlbGVjdGVkIiwidHJhbnNsYXRpb25zIiwicmVhY3RJbmZpbml0ZVByb3BzIiwiZmlsdGVyZWRJdGVtcyIsImlzSGVhZGVyVmlzaWJsZSIsImlzQWxsU2VsZWN0ZWRWYWx1ZSIsImhhbmRsZVNlbGVjdEFsbENoYW5nZSIsImhhbmRsZVNlYXJjaENoYW5nZSIsImhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2UiLCJyZW5kZXJSb3ciLCJub1Jlc3VsdHMiLCJ0aGVtZU9iaiIsInJlbmRlckxpc3QiLCJyZW5kZXIiLCJjdXN0b21UaGVtZSIsInRoZW1lIiwicmVuZGVyV2l0aFRoZW1lIiwidGhlbWVEZWZhdWx0cyIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsInRpdGxlIiwic2VhcmNoIiwic2VsZWN0QWxsIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUNQLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLE1BQU4sS0FBaUIsTUFBakIsR0FBMEIsTUFBMUIsR0FBc0NELEtBQUssQ0FBQ0MsTUFBNUMsT0FBTDtBQUFBLENBREUsRUFFUixVQUFBRCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDRSxLQUFOLEtBQWdCLE1BQWhCLEdBQXlCLE1BQXpCLEdBQXFDRixLQUFLLENBQUNFLEtBQTNDLE9BQUw7QUFBQSxDQUZHLENBQW5COztBQUtBLElBQU1DLGFBQWEsR0FBR0wsNkJBQU9NLENBQVYsb0JBQW5COztJQU9NQyxJLE9BRExDLDJCOzs7OztBQXVGQyxnQkFBWU4sS0FBWixFQUFtQjtBQUFBOztBQUNqQiw0Q0FBTUEsS0FBTjs7QUFEaUIsNEVBUUssWUFBTTtBQUFBLHdCQU94QixNQUFLQSxLQVBtQjtBQUFBLFVBRTFCTyxLQUYwQixlQUUxQkEsS0FGMEI7QUFBQSxVQUcxQkMsYUFIMEIsZUFHMUJBLGFBSDBCO0FBQUEsVUFJMUJDLEtBSjBCLGVBSTFCQSxLQUowQjtBQUFBLFVBSzFCQyxnQkFMMEIsZUFLMUJBLGdCQUwwQjtBQUFBLFVBTTFCQyxnQkFO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VyxFQUFFLElBakJPO0FBa0JwQlosRUFBQUEsa0JBQWtCLEVBQUUsRUFsQkE7QUFtQnBCTCxFQUFBQSxZQUFZLEVBQUUsS0FuQk07QUFvQnBCUixFQUFBQSxxQkFBcUIsRUFBRSxLQXBCSDtBQXFCcEJTLEVBQUFBLGtCQUFrQixFQUFFLEtBckJBO0FBc0JwQkMsRUFBQUEseUJBQXlCLEVBQUUsS0F0QlA7QUF1QnBCSCxFQUFBQSxxQkFBcUIsRUFBRSxLQXZCSDtBQXdCcEJULEVBQUFBLG9CQUFvQixFQUFFLEtBeEJGO0FBeUJwQkMsRUFBQUEsbUJBQW1CLEVBQUUsSUF6QkQ7QUEwQnBCWSxFQUFBQSxhQUFhLEVBQUUsSUExQks7QUEyQnBCNUMsRUFBQUEsZ0JBQWdCLEVBQUUsNEJBQU0sQ0FBRSxDQTNCTjtBQTRCcEJrQyxFQUFBQSxVQUFVLEVBQUUsc0JBQU0sQ0FBRSxDQTVCQTtBQTZCcEJDLEVBQUFBLGdCQUFnQixFQUFFLDRCQUFNLENBQUUsQ0E3Qk47QUE4QnBCQyxFQUFBQSxnQkFBZ0IsRUFBRSw0QkFBTSxDQUFFLENBOUJOO0FBK0JwQm5DLEVBQUFBLGdCQUFnQixFQUFFLDRCQUFNLENBQUU7QUEvQk4sQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyLCB3aXRoVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgUmVzcG9uc2l2ZUxpc3RDb250YWluZXIgZnJvbSAnLi9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgQ29sdW1uSGVhZGVyIGZyb20gJy4vY29sdW1uLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IFJvdyBmcm9tICcuL3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgdGhlbWVEZWZhdWx0cywgdGhlbWVTaGFwZSB9IGZyb20gJy4vdGhlbWUnO1xuXG5jb25zdCBMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5oZWlnaHQgPT09ICdhdXRvJyA/ICcxMDAlJyA6IGAke3Byb3BzLmhlaWdodH1weGApfTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLndpZHRoID09PSAnYXV0bycgPyAnMTAwJScgOiBgJHtwcm9wcy53aWR0aH1weGApfTtcbmA7XG5cbmNvbnN0IE5vUmVzdWx0c1RleHQgPSBzdHlsZWQucGBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuYDtcblxuZXhwb3J0IGRlZmF1bHRcbkB3aXRoVGhlbWVcbmNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyBTcGVjaWFsIHByb3AgZnJvbSBzdHlsZWQtY29tcG9uZW50cyBUaGVtZVByb3ZpZGVyIChpZiBpbiB1c2UpXG4gICAgdGhlbWU6IHRoZW1lU2hhcGUsXG5cbiAgICAvLyBEYXRhIHByb3BzXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuICAgIHNlbGVjdGVkSXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgXSkpLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSxcbiAgICBdKSxcbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSxcbiAgICBdKSxcbiAgICBpdGVtSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpZEtleTogUHJvcFR5cGVzLnN0cmluZywgLy8ga2V5IG9mIGlkIGluIGxpc3QgZGF0YVxuICAgIHRyYW5zbGF0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHNlYXJjaDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHNlbGVjdEFsbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBub1Jlc3VsdHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gICAgY3VzdG9tVGhlbWU6IHRoZW1lU2hhcGUsIC8vIHRoZW1lIG92ZXJyaWRlXG4gICAgcmVhY3RJbmZpbml0ZVByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLFxuXG4gICAgLy8gQm9vbGVhbnNcbiAgICBpc1NlYXJjaGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RBbGxWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0NvbHVtbkhlYWRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0FsbFNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8vIGFjdGlvbnNcbiAgICBvblNlbGVjdGVkQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd0RvdWJsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJvd0NvbnRleHRNZW51OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdEFsbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGhlbWU6IG51bGwsXG4gICAgaWQ6ICdvYy1yZWFjdC1saXN0JyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHNlbGVjdGVkSXRlbXM6IFtdLFxuICAgIGNvbHVtbnM6IFt7IHZhbHVlS2V5OiAndmFsdWUnLCB0aXRsZTogJ1ZhbHVlJyB9XSxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIGl0ZW1IZWlnaHQ6IDQwLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogNDAsXG4gICAgaWRLZXk6ICdpZCcsXG4gICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICBzZWFyY2g6ICdTZWFyY2gnLFxuICAgICAgc2VsZWN0QWxsOiAnQWxsJyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6ICdTaG93IG9ubHkgc2VsZWN0ZWQnLFxuICAgICAgbm9SZXN1bHRzOiAnVGhlcmUgYXJlIG5vIGl0ZW1zIHRvIHNob3cgaW4gdGhpcyBsaXN0LicsXG4gICAgfSxcbiAgICBjdXN0b21UaGVtZTogbnVsbCxcbiAgICByZWFjdEluZmluaXRlUHJvcHM6IHt9LFxuICAgIGlzU2VhcmNoYWJsZTogZmFsc2UsXG4gICAgaXNTZWxlY3RDb2x1bW5WaXNpYmxlOiBmYWxzZSxcbiAgICBpc1NlbGVjdEFsbFZpc2libGU6IGZhbHNlLFxuICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGU6IGZhbHNlLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogZmFsc2UsXG4gICAgaXNJbmRleENvbHVtblZpc2libGU6IGZhbHNlLFxuICAgIGlzSXRlbUJvcmRlclZpc2libGU6IHRydWUsXG4gICAgaXNBbGxTZWxlY3RlZDogbnVsbCxcbiAgICBvblNlbGVjdGVkQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvblJvd0NsaWNrOiAoKSA9PiB7fSxcbiAgICBvblJvd0RvdWJsZUNsaWNrOiAoKSA9PiB7fSxcbiAgICBvblJvd0NvbnRleHRNZW51OiAoKSA9PiB7fSxcbiAgICBvblNlbGVjdEFsbENsaWNrOiAoKSA9PiB7fSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hLZXl3b3JkOiAnJyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVTZWxlY3RBbGxDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbXMsXG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgaWRLZXksXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlLFxuICAgICAgb25TZWxlY3RBbGxDbGljayxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXRlbXMubGVuZ3RoID4gc2VsZWN0ZWRJdGVtcy5sZW5ndGgpIHtcbiAgICAgIC8vIFNlbGVjdCBhbGxcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2UoaXRlbXMubWFwKGkgPT4gaVtpZEtleV0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVzZWxlY3QgYWxsXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlKFtdKTtcbiAgICB9XG4gICAgb25TZWxlY3RBbGxDbGljaygpO1xuICB9XG5cbiAgaGFuZGxlSXRlbVNlbGVjdENoYW5nZSA9IChpdGVtSWQsIGlzU2VsZWN0ZWQpID0+ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgb25TZWxlY3RlZENoYW5nZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgb25TZWxlY3RlZENoYW5nZShzZWxlY3RlZEl0ZW1zLmZpbHRlcihpZCA9PiBpZCAhPT0gaXRlbUlkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uU2VsZWN0ZWRDaGFuZ2Uoc2VsZWN0ZWRJdGVtcy5jb25jYXQoW2l0ZW1JZF0pKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAoc2VhcmNoS2V5d29yZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hLZXl3b3JkIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T25seVNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93T25seVNlbGVjdGVkOiAhc2hvd09ubHlTZWxlY3RlZCB9KTtcbiAgfTtcblxuICBmaWx0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWRLZXksXG4gICAgICBjb2x1bW5zLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sI3doYXQtYWJvdXQtbWVtb2l6YXRpb25cbiAgICByZXR1cm4gbWVtb2l6ZSgoaXRlbXMsIHNlbGVjdGVkSXRlbXMsIHNlYXJjaEtleXdvcmQsIHNob3dPbmx5U2VsZWN0ZWQpID0+IGl0ZW1zLmZpbHRlcigoaSkgPT4ge1xuICAgICAgbGV0IGhpdCA9IGZhbHNlO1xuICAgICAgaWYgKGkuaXNBbHdheXNWaXNpYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHNob3dPbmx5U2VsZWN0ZWQgJiYgIXNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaVtpZEtleV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWFyY2hLZXl3b3JkID09PSAnJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0cmluZ01hdGNoZXIgPSAoZGF0YSwga2V5d29yZCkgPT4ge1xuICAgICAgICBsZXQgZXNjYXBlZEtleXdvcmQgPSBrZXl3b3JkO1xuICAgICAgICBjb25zdCBzcGVjaWFsQ2hhcnMgPSAnW11cXFxcXiQufD8qKygpJztcblxuICAgICAgICAvLyBJZiBrZXl3b3JkIHZhbCBzdGFydHMgd2l0aCBhIFJlZ2V4IHNwZWNpYWwgY2hhcmFjdGVyLCB3ZSBtdXN0IGVzY2FwZSBpdFxuICAgICAgICBpZiAoc3BlY2lhbENoYXJzLmluY2x1ZGVzKGtleXdvcmRbMF0pKSBlc2NhcGVkS2V5d29yZCA9IGBcXFxcJHtrZXl3b3JkfWA7XG4gICAgICAgIHJldHVybiAobmV3IFJlZ0V4cChlc2NhcGVkS2V5d29yZCwgJ2knKSkudGVzdChkYXRhKTtcbiAgICAgIH07XG4gICAgICBjb2x1bW5zLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVLZXkgPSBjLnZhbHVlS2V5IHx8ICd2YWx1ZSc7XG4gICAgICAgIGlmICh0eXBlb2YgaVt2YWx1ZUtleV0gPT09ICdzdHJpbmcnICYmIHN0cmluZ01hdGNoZXIoaVt2YWx1ZUtleV0sIHNlYXJjaEtleXdvcmQpKSB7XG4gICAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaGl0O1xuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlclJvdyA9IChpdGVtLCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIGlkS2V5LFxuICAgICAgaXRlbUhlaWdodCxcbiAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNJdGVtQm9yZGVyVmlzaWJsZSxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBpc1NlbGVjdENvbHVtblZpc2libGUsXG4gICAgICBvblJvd0NsaWNrLFxuICAgICAgb25Sb3dEb3VibGVDbGljayxcbiAgICAgIG9uUm93Q29udGV4dE1lbnUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkSXRlbXMuaW5jbHVkZXMoaXRlbVtpZEtleV0pO1xuICAgIHJldHVybiAoXG4gICAgICA8Um93XG4gICAgICAgIGlkPXtgJHtpZH0tcm93LSR7cm93SW5kZXh9YH1cbiAgICAgICAga2V5PXtpdGVtW2lkS2V5XX1cbiAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgcm93SW5kZXg9e3Jvd0luZGV4fVxuICAgICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZT17aXNJbmRleENvbHVtblZpc2libGV9XG4gICAgICAgIGl0ZW1IZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgIGlzU2VsZWN0ZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZT17aXNTZWxlY3RDb2x1bW5WaXNpYmxlfVxuICAgICAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlPXtpc0l0ZW1Cb3JkZXJWaXNpYmxlfVxuICAgICAgICBvblNlbGVjdENoYW5nZT17dGhpcy5oYW5kbGVJdGVtU2VsZWN0Q2hhbmdlKGl0ZW1baWRLZXldLCBpc1NlbGVjdGVkKX1cbiAgICAgICAgb25Sb3dDbGljaz17b25Sb3dDbGlja31cbiAgICAgICAgb25Sb3dEb3VibGVDbGljaz17b25Sb3dEb3VibGVDbGlja31cbiAgICAgICAgb25Sb3dDb250ZXh0TWVudT17b25Sb3dDb250ZXh0TWVudX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBpdGVtcyxcbiAgICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgICBjb2x1bW5zLFxuICAgICAgaXNJbmRleENvbHVtblZpc2libGUsXG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aCxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICBjb2x1bW5IZWFkZXJIZWlnaHQsXG4gICAgICBpc0NvbHVtbkhlYWRlclZpc2libGUsXG4gICAgICBpc1NlYXJjaGFibGUsXG4gICAgICBpc1NlbGVjdENvbHVtblZpc2libGUsXG4gICAgICBpc1NlbGVjdEFsbFZpc2libGUsXG4gICAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlLFxuICAgICAgaXNBbGxTZWxlY3RlZCxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgIHJlYWN0SW5maW5pdGVQcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBzaG93T25seVNlbGVjdGVkLFxuICAgICAgc2VhcmNoS2V5d29yZCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAvLyBtZW1vaXplIGZpbHRlcmVkSXRlbXMgd2hlbiBwcm9wcyBoYXMgbm90IGNoYW5nZWQgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZVxuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSB0aGlzLmZpbHRlcigpKGl0ZW1zLCBzZWxlY3RlZEl0ZW1zLCBzZWFyY2hLZXl3b3JkLCBzaG93T25seVNlbGVjdGVkKTtcbiAgICBjb25zdCBpc0hlYWRlclZpc2libGUgPSAoXG4gICAgICAoaXNTZWxlY3RBbGxWaXNpYmxlICYmICFpc0NvbHVtbkhlYWRlclZpc2libGUpXG4gICAgICB8fCAoaXNTZWFyY2hhYmxlKVxuICAgICAgfHwgKGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGUpXG4gICAgKTtcbiAgICAvLyBvdmVycmlkZSBmcm9tIHByb3BzIG9yIGNhbGN1bGF0ZSBmcm9tIGRhdGFcbiAgICBjb25zdCBpc0FsbFNlbGVjdGVkVmFsdWUgPSAoXG4gICAgICBpc0FsbFNlbGVjdGVkICE9PSBudWxsXG4gICAgICAgID8gaXNBbGxTZWxlY3RlZFxuICAgICAgICA6IChpdGVtcy5sZW5ndGggPiAwICYmIGl0ZW1zLmxlbmd0aCA9PT0gc2VsZWN0ZWRJdGVtcy5sZW5ndGgpXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RDb250YWluZXIgaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaGVpZ2h0PXtoZWlnaHR9IHdpZHRoPXt3aWR0aH0+XG4gICAgICAgIHtpc0hlYWRlclZpc2libGUgJiYgKFxuICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgIGlkPXtgJHtpZH0taGVhZGVyYH1cbiAgICAgICAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZT17aXNDb2x1bW5IZWFkZXJWaXNpYmxlfVxuICAgICAgICAgICAgaXNTZWFyY2hhYmxlPXtpc1NlYXJjaGFibGV9XG4gICAgICAgICAgICBpc1NlbGVjdEFsbFZpc2libGU9e2lzU2VsZWN0QWxsVmlzaWJsZX1cbiAgICAgICAgICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGU9e2lzU2hvd09ubHlTZWxlY3RlZFZpc2libGV9XG4gICAgICAgICAgICBpc0FsbFNlbGVjdGVkPXtpc0FsbFNlbGVjdGVkVmFsdWV9XG4gICAgICAgICAgICBpc1Nob3dPbmx5U2VsZWN0ZWQ9e3Nob3dPbmx5U2VsZWN0ZWR9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXRlbXMubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgb25TZWxlY3RBbGxDaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QWxsQ2hhbmdlfVxuICAgICAgICAgICAgb25TZWFyY2hDaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgICAgb25TaG93T25seVNlbGVjdGVkQ2hhbmdlPXt0aGlzLmhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2V9XG4gICAgICAgICAgICB0cmFuc2xhdGlvbnM9e3RyYW5zbGF0aW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7aXNDb2x1bW5IZWFkZXJWaXNpYmxlICYmIChcbiAgICAgICAgICA8Q29sdW1uSGVhZGVyXG4gICAgICAgICAgICBpZD17YCR7aWR9LWNvbHVtbi1oZWFkZXJgfVxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZT17aXNTZWxlY3RDb2x1bW5WaXNpYmxlfVxuICAgICAgICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlPXtpc1NlbGVjdEFsbFZpc2libGV9XG4gICAgICAgICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZT17aXNJbmRleENvbHVtblZpc2libGV9XG4gICAgICAgICAgICBpc0FsbFNlbGVjdGVkPXtpc0FsbFNlbGVjdGVkVmFsdWV9XG4gICAgICAgICAgICBoZWlnaHQ9e2NvbHVtbkhlYWRlckhlaWdodH1cbiAgICAgICAgICAgIG9uU2VsZWN0QWxsQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdEFsbENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8UmVzcG9uc2l2ZUxpc3RDb250YWluZXJcbiAgICAgICAgICBpZD17YCR7aWR9LWl0ZW1zYH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBpdGVtSGVpZ2h0PXtpdGVtSGVpZ2h0fVxuICAgICAgICAgIGNvbHVtbkhlYWRlckhlaWdodD17Y29sdW1uSGVhZGVySGVpZ2h0fVxuICAgICAgICAgIGlzSGVhZGVyVmlzaWJsZT17aXNIZWFkZXJWaXNpYmxlfVxuICAgICAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZT17aXNDb2x1bW5IZWFkZXJWaXNpYmxlfVxuICAgICAgICAgIHJlYWN0SW5maW5pdGVQcm9wcz17cmVhY3RJbmZpbml0ZVByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2ZpbHRlcmVkSXRlbXMubWFwKHRoaXMucmVuZGVyUm93KX1cbiAgICAgICAgICB7IWZpbHRlcmVkSXRlbXMubGVuZ3RoICYmIDxOb1Jlc3VsdHNUZXh0Pnt0cmFuc2xhdGlvbnMubm9SZXN1bHRzfTwvTm9SZXN1bHRzVGV4dD59XG4gICAgICAgIDwvUmVzcG9uc2l2ZUxpc3RDb250YWluZXI+XG4gICAgICA8L0xpc3RDb250YWluZXI+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcldpdGhUaGVtZSA9IHRoZW1lT2JqID0+IChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWVPYmp9PlxuICAgICAge3RoaXMucmVuZGVyTGlzdCgpfVxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjdXN0b21UaGVtZSwgdGhlbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGN1c3RvbVRoZW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJXaXRoVGhlbWUoY3VzdG9tVGhlbWUpOyAvLyBvdmVycmlkZSB3aXRoIGN1c3RvbSB0aGVtZVxuICAgIH1cbiAgICBpZiAoIXRoZW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJXaXRoVGhlbWUodGhlbWVEZWZhdWx0cyk7IC8vIHVzZSBkZWZhdWx0cyBpZiBubyB0aGVtZSBpcyBwcm92aWRlZFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJMaXN0KCk7IC8vIFRoZW1lUHJvdmlkZXIgaXMgZm91bmQhXG4gIH1cbn1cbiJdfQ==