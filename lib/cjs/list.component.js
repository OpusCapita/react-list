"use strict";

exports.__esModule = true;
exports.default = void 0;

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ListContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.height === 'auto' ? '100%' : props.height + "px";
}, function (props) {
  return props.width === 'auto' ? '100%' : props.width + "px";
});

var List = (0, _styledComponents.withTheme)(_class = (_temp = _class2 =
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
      return (0, _memoizeOne.default)(function (items, selectedItems, searchKeyword, showOnlySelected) {
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
      return _react.default.createElement(_row.default, {
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
      return _react.default.createElement(ListContainer, {
        id: id,
        className: className,
        height: height,
        width: width
      }, isHeaderVisible && _react.default.createElement(_header.default, {
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
      }), isColumnHeaderVisible && _react.default.createElement(_columnHeader.default, {
        id: id + "-column-header",
        columns: columns,
        isSelectable: isSelectable,
        isSelectAllVisible: isSelectAllVisible,
        isIndexColumnVisible: isIndexColumnVisible,
        isAllSelected: isAllSelected,
        height: columnHeaderHeight,
        onSelectAllChange: _this.handleSelectAllChange
      }), _react.default.createElement(_responsiveListContainer.default, {
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
      return _react.default.createElement(_styledComponents.ThemeProvider, {
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
}(_react.default.PureComponent), _defineProperty(_class2, "defaultProps", {
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

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTGlzdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaGVpZ2h0Iiwid2lkdGgiLCJMaXN0Iiwid2l0aFRoZW1lIiwicm93SW5kZXgiLCJpdGVtIiwib25Sb3dDbGljayIsIm9uUm93RG91YmxlQ2xpY2siLCJvblJvd1JpZ2h0Q2xpY2siLCJpdGVtcyIsInNlbGVjdGVkSXRlbXMiLCJpZEtleSIsImlzU2VsZWN0YWJsZSIsIm9uU2VsZWN0ZWRDaGFuZ2UiLCJsZW5ndGgiLCJtYXAiLCJpIiwiaXRlbUlkIiwiaXNTZWxlY3RlZCIsImZpbHRlciIsImlkIiwiY29uY2F0Iiwic2VhcmNoS2V5d29yZCIsInNldFN0YXRlIiwic2hvd09ubHlTZWxlY3RlZCIsInN0YXRlIiwiY29sdW1ucyIsImhpdCIsImluY2x1ZGVzIiwic3RyaW5nTWF0Y2hlciIsImRhdGEiLCJrZXl3b3JkIiwiZXNjYXBlZEtleXdvcmQiLCJzcGVjaWFsQ2hhcnMiLCJSZWdFeHAiLCJ0ZXN0IiwiZm9yRWFjaCIsImMiLCJ2YWx1ZUtleSIsIml0ZW1IZWlnaHQiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImhhbmRsZUl0ZW1TZWxlY3RDaGFuZ2UiLCJjbGFzc05hbWUiLCJjb2x1bW5IZWFkZXJIZWlnaHQiLCJpc0NvbHVtbkhlYWRlclZpc2libGUiLCJpc1NlYXJjaGFibGUiLCJpc1NlbGVjdEFsbFZpc2libGUiLCJpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlIiwidHJhbnNsYXRpb25zIiwicmVhY3RJbmZpbml0ZVByb3BzIiwiZmlsdGVyZWRJdGVtcyIsImlzSGVhZGVyVmlzaWJsZSIsImlzQWxsU2VsZWN0ZWQiLCJoYW5kbGVTZWxlY3RBbGxDaGFuZ2UiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJoYW5kbGVTaG93T25seVNlbGVjdGVkQ2hhbmdlIiwicmVuZGVyUm93IiwidGhlbWVPYmoiLCJyZW5kZXJMaXN0IiwicmVuZGVyIiwiY3VzdG9tVGhlbWUiLCJ0aGVtZSIsInJlbmRlcldpdGhUaGVtZSIsInRoZW1lRGVmYXVsdHMiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJ0aXRsZSIsInNlYXJjaCIsInNlbGVjdEFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDBCQUFPQyxHQUFWLG9CQUNQLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLE1BQU4sS0FBaUIsTUFBakIsR0FBMEIsTUFBMUIsR0FBc0NELEtBQUssQ0FBQ0MsTUFBNUMsT0FBTDtBQUFBLENBREUsRUFFUixVQUFBRCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDRSxLQUFOLEtBQWdCLE1BQWhCLEdBQXlCLE1BQXpCLEdBQXFDRixLQUFLLENBQUNFLEtBQTNDLE9BQUw7QUFBQSxDQUZHLENBQW5COztJQU9NQyxJLE9BRExDLDJCOzs7OztBQStFQyxnQkFBWUosS0FBWixFQUFtQjtBQUFBOztBQUNqQiw0Q0FBTUEsS0FBTjs7QUFEaUIscUVBUUYsVUFBQ0ssUUFBRCxFQUFXQyxJQUFYLEVBQW9CO0FBQUEsVUFFakNDLFVBRmlDLEdBRy9CLE1BQUtQLEtBSDBCLENBRWpDTyxVQUZpQztBQUluQ0EsTUFBQUEsVUFBVSxDQUFDRixRQUFELEVBQVdDLElBQVgsQ0FBVjtBQUNELEtBYmtCOztBQUFBLDJFQWVJLFVBQUNELFFBQUQsRUFBV0MsSUFBWCxFQUFvQjtBQUFBLFVBRXZDRSxnQkFGdUMsR0FHckMsTUFBS1IsS0FIZ0MsQ0FFdkNRLGdCQUZ1QztBQUl6Q0EsTUFBQUEsZ0JBQWdCLENBQUNILFFBQUQsRUFBV0MsSUFBWCxDQUFoQjtBQUNELEtBcEJrQjs7QUFBQSwwRUFzQkcsVUFBQ0QsUUFBRCxFQUFXQyxJQUFYLEVBQW9CO0FBQUEsVUFFdENHLGVBRnNDLEdB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QUUsNEJBQU0sQ0FBRSxDQXhCTjtBQXlCcEJQLEVBQUFBLFVBQVUsRUFBRSxzQkFBTSxDQUFFLENBekJBO0FBMEJwQkMsRUFBQUEsZ0JBQWdCLEVBQUUsNEJBQU0sQ0FBRSxDQTFCTjtBQTJCcEJDLEVBQUFBLGVBQWUsRUFBRSwyQkFBTSxDQUFFO0FBM0JMLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciwgd2l0aFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnbWVtb2l6ZS1vbmUnO1xuaW1wb3J0IFJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIGZyb20gJy4vcmVzcG9uc2l2ZS1saXN0LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IENvbHVtbkhlYWRlciBmcm9tICcuL2NvbHVtbi1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCBSb3cgZnJvbSAnLi9yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IHRoZW1lRGVmYXVsdHMsIHRoZW1lU2hhcGUgfSBmcm9tICcuL3RoZW1lJztcblxuY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogJHtwcm9wcyA9PiAocHJvcHMuaGVpZ2h0ID09PSAnYXV0bycgPyAnMTAwJScgOiBgJHtwcm9wcy5oZWlnaHR9cHhgKX07XG4gIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy53aWR0aCA9PT0gJ2F1dG8nID8gJzEwMCUnIDogYCR7cHJvcHMud2lkdGh9cHhgKX07XG5gO1xuXG5leHBvcnQgZGVmYXVsdFxuQHdpdGhUaGVtZVxuY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIFNwZWNpYWwgcHJvcCBmcm9tIHN0eWxlZC1jb21wb25lbnRzIFRoZW1lUHJvdmlkZXIgKGlmIGluIHVzZSlcbiAgICB0aGVtZTogdGhlbWVTaGFwZSxcblxuICAgIC8vIERhdGEgcHJvcHNcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG4gICAgc2VsZWN0ZWRJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBdKSksXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSksXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLFxuICAgIF0pLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLFxuICAgIF0pLFxuICAgIGl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY29sdW1uSGVhZGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGlkS2V5OiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBrZXkgb2YgaWQgaW4gbGlzdCBkYXRhXG4gICAgdHJhbnNsYXRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc2VhcmNoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc2VsZWN0QWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc2hvd09ubHlTZWxlY3RlZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KSxcbiAgICBjdXN0b21UaGVtZTogdGhlbWVTaGFwZSwgLy8gdGhlbWUgb3ZlcnJpZGVcbiAgICByZWFjdEluZmluaXRlUHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSksXG5cbiAgICAvLyBCb29sZWFuc1xuICAgIGlzU2VhcmNoYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1NlbGVjdEFsbFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNJbmRleENvbHVtblZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gYWN0aW9uc1xuICAgIG9uU2VsZWN0ZWRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm93Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm93RG91YmxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUm93UmlnaHRDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRoZW1lOiBudWxsLFxuICAgIGlkOiAnb2MtcmVhY3QtbGlzdCcsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBzZWxlY3RlZEl0ZW1zOiBbXSxcbiAgICBjb2x1bW5zOiBbeyB2YWx1ZUtleTogJ3ZhbHVlJywgdGl0bGU6ICdWYWx1ZScgfV0sXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgd2lkdGg6ICdhdXRvJyxcbiAgICBpdGVtSGVpZ2h0OiA0MCxcbiAgICBjb2x1bW5IZWFkZXJIZWlnaHQ6IDQwLFxuICAgIGlkS2V5OiAnaWQnLFxuICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgICAgIHNlbGVjdEFsbDogJ0FsbCcsXG4gICAgICBzaG93T25seVNlbGVjdGVkOiAnU2hvdyBvbmx5IHNlbGVjdGVkJyxcbiAgICB9LFxuICAgIGN1c3RvbVRoZW1lOiBudWxsLFxuICAgIHJlYWN0SW5maW5pdGVQcm9wczoge30sXG4gICAgaXNTZWFyY2hhYmxlOiBmYWxzZSxcbiAgICBpc1NlbGVjdGFibGU6IGZhbHNlLFxuICAgIGlzU2VsZWN0QWxsVmlzaWJsZTogZmFsc2UsXG4gICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZTogZmFsc2UsXG4gICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlOiBmYWxzZSxcbiAgICBpc0luZGV4Q29sdW1uVmlzaWJsZTogZmFsc2UsXG4gICAgb25TZWxlY3RlZENoYW5nZTogKCkgPT4ge30sXG4gICAgb25Sb3dDbGljazogKCkgPT4ge30sXG4gICAgb25Sb3dEb3VibGVDbGljazogKCkgPT4ge30sXG4gICAgb25Sb3dSaWdodENsaWNrOiAoKSA9PiB7fSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hLZXl3b3JkOiAnJyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVSb3dDbGljayA9IChyb3dJbmRleCwgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uUm93Q2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgb25Sb3dDbGljayhyb3dJbmRleCwgaXRlbSk7XG4gIH1cblxuICBoYW5kbGVSb3dEb3VibGVDbGljayA9IChyb3dJbmRleCwgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uUm93RG91YmxlQ2xpY2ssXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgb25Sb3dEb3VibGVDbGljayhyb3dJbmRleCwgaXRlbSk7XG4gIH1cblxuICBoYW5kbGVSb3dSaWdodENsaWNrID0gKHJvd0luZGV4LCBpdGVtKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb25Sb3dSaWdodENsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uUm93UmlnaHRDbGljayhyb3dJbmRleCwgaXRlbSk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3RBbGxDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbXMsXG4gICAgICBzZWxlY3RlZEl0ZW1zLFxuICAgICAgaWRLZXksXG4gICAgICBpc1NlbGVjdGFibGUsXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChpc1NlbGVjdGFibGUpIHtcbiAgICAgIGlmIChpdGVtcy5sZW5ndGggPiBzZWxlY3RlZEl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAvLyBTZWxlY3QgYWxsXG4gICAgICAgIG9uU2VsZWN0ZWRDaGFuZ2UoaXRlbXMubWFwKGkgPT4gaVtpZEtleV0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERlc2VsZWN0IGFsbFxuICAgICAgICBvblNlbGVjdGVkQ2hhbmdlKFtdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVJdGVtU2VsZWN0Q2hhbmdlID0gKGl0ZW1JZCwgaXNTZWxlY3RlZCkgPT4gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdGVkSXRlbXMsXG4gICAgICBvblNlbGVjdGVkQ2hhbmdlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICBvblNlbGVjdGVkQ2hhbmdlKHNlbGVjdGVkSXRlbXMuZmlsdGVyKGlkID0+IGlkICE9PSBpdGVtSWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb25TZWxlY3RlZENoYW5nZShzZWxlY3RlZEl0ZW1zLmNvbmNhdChbaXRlbUlkXSkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNlYXJjaENoYW5nZSA9IChzZWFyY2hLZXl3b3JkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaEtleXdvcmQgfSk7XG4gIH07XG5cbiAgaGFuZGxlU2hvd09ubHlTZWxlY3RlZENoYW5nZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd09ubHlTZWxlY3RlZDogIXRoaXMuc3RhdGUuc2hvd09ubHlTZWxlY3RlZCB9KTtcbiAgfTtcblxuICBmaWx0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWRLZXksXG4gICAgICBjb2x1bW5zLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBtZW1vaXplKChpdGVtcywgc2VsZWN0ZWRJdGVtcywgc2VhcmNoS2V5d29yZCwgc2hvd09ubHlTZWxlY3RlZCkgPT5cbiAgICAgIGl0ZW1zLmZpbHRlcigoaSkgPT4ge1xuICAgICAgICBsZXQgaGl0ID0gZmFsc2U7XG4gICAgICAgIGlmIChzaG93T25seVNlbGVjdGVkICYmICFzZWxlY3RlZEl0ZW1zLmluY2x1ZGVzKGlbaWRLZXldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VhcmNoS2V5d29yZCA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHJpbmdNYXRjaGVyID0gKGRhdGEsIGtleXdvcmQpID0+IHtcbiAgICAgICAgICBsZXQgZXNjYXBlZEtleXdvcmQgPSBrZXl3b3JkO1xuICAgICAgICAgIGNvbnN0IHNwZWNpYWxDaGFycyA9ICdbXVxcXFxeJC58PyorKCknO1xuXG4gICAgICAgICAgLy8gSWYga2V5d29yZCB2YWwgc3RhcnRzIHdpdGggYSBSZWdleCBzcGVjaWFsIGNoYXJhY3Rlciwgd2UgbXVzdCBlc2NhcGUgaXRcbiAgICAgICAgICBpZiAoc3BlY2lhbENoYXJzLmluY2x1ZGVzKGtleXdvcmRbMF0pKSBlc2NhcGVkS2V5d29yZCA9IGBcXFxcJHtrZXl3b3JkfWA7XG4gICAgICAgICAgcmV0dXJuIChuZXcgUmVnRXhwKGVzY2FwZWRLZXl3b3JkLCAnaScpKS50ZXN0KGRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICBjb2x1bW5zLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGlbYy52YWx1ZUtleV0gPT09ICdzdHJpbmcnICYmIHN0cmluZ01hdGNoZXIoaVtjLnZhbHVlS2V5XSwgc2VhcmNoS2V5d29yZCkpIHtcbiAgICAgICAgICAgIGhpdCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGhpdDtcbiAgICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlclJvdyA9IChpdGVtLCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIGlkS2V5LFxuICAgICAgaXRlbUhlaWdodCxcbiAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGlzU2VsZWN0YWJsZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRJdGVtcy5pbmNsdWRlcyhpdGVtW2lkS2V5XSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3dcbiAgICAgICAgaWQ9e2Ake2lkfS1yb3ctJHtyb3dJbmRleH1gfVxuICAgICAgICBrZXk9e2l0ZW1baWRLZXldfVxuICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICByb3dJbmRleD17cm93SW5kZXh9XG4gICAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlPXtpc0luZGV4Q29sdW1uVmlzaWJsZX1cbiAgICAgICAgaXRlbUhlaWdodD17aXRlbUhlaWdodH1cbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgaXNTZWxlY3RhYmxlPXtpc1NlbGVjdGFibGV9XG4gICAgICAgIG9uU2VsZWN0Q2hhbmdlPXt0aGlzLmhhbmRsZUl0ZW1TZWxlY3RDaGFuZ2UoaXRlbVtpZEtleV0sIGlzU2VsZWN0ZWQpfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGl0ZW1zLFxuICAgICAgc2VsZWN0ZWRJdGVtcyxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoLFxuICAgICAgaXRlbUhlaWdodCxcbiAgICAgIGNvbHVtbkhlYWRlckhlaWdodCxcbiAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZSxcbiAgICAgIGlzU2VhcmNoYWJsZSxcbiAgICAgIGlzU2VsZWN0YWJsZSxcbiAgICAgIGlzU2VsZWN0QWxsVmlzaWJsZSxcbiAgICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGUsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICByZWFjdEluZmluaXRlUHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgc2hvd09ubHlTZWxlY3RlZCxcbiAgICAgIHNlYXJjaEtleXdvcmQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHRoaXMuZmlsdGVyKCkoaXRlbXMsIHNlbGVjdGVkSXRlbXMsIHNlYXJjaEtleXdvcmQsIHNob3dPbmx5U2VsZWN0ZWQpO1xuICAgIGNvbnN0IGlzSGVhZGVyVmlzaWJsZSA9IChcbiAgICAgIChpc1NlbGVjdEFsbFZpc2libGUgJiYgIWlzQ29sdW1uSGVhZGVyVmlzaWJsZSkgfHxcbiAgICAgIChpc1NlYXJjaGFibGUpIHx8XG4gICAgICAoaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZSlcbiAgICApO1xuICAgIGNvbnN0IGlzQWxsU2VsZWN0ZWQgPSBpdGVtcy5sZW5ndGggPiAwICYmIGl0ZW1zLmxlbmd0aCA9PT0gc2VsZWN0ZWRJdGVtcy5sZW5ndGg7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0Q29udGFpbmVyIGlkPXtpZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGhlaWdodD17aGVpZ2h0fSB3aWR0aD17d2lkdGh9PlxuICAgICAgICB7aXNIZWFkZXJWaXNpYmxlICYmIChcbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICBpZD17YCR7aWR9LWhlYWRlcmB9XG4gICAgICAgICAgICBpc0NvbHVtbkhlYWRlclZpc2libGU9e2lzQ29sdW1uSGVhZGVyVmlzaWJsZX1cbiAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17aXNTZWFyY2hhYmxlfVxuICAgICAgICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlPXtpc1NlbGVjdEFsbFZpc2libGV9XG4gICAgICAgICAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlPXtpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlfVxuICAgICAgICAgICAgaXNBbGxTZWxlY3RlZD17aXNBbGxTZWxlY3RlZH1cbiAgICAgICAgICAgIGlzU2hvd09ubHlTZWxlY3RlZD17c2hvd09ubHlTZWxlY3RlZH1cbiAgICAgICAgICAgIHNlYXJjaEtleXdvcmQ9e3NlYXJjaEtleXdvcmR9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXRlbXMubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgb25TZWxlY3RBbGxDaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0QWxsQ2hhbmdlfVxuICAgICAgICAgICAgb25TZWFyY2hDaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgICAgb25TaG93T25seVNlbGVjdGVkQ2hhbmdlPXt0aGlzLmhhbmRsZVNob3dPbmx5U2VsZWN0ZWRDaGFuZ2V9XG4gICAgICAgICAgICB0cmFuc2xhdGlvbnM9e3RyYW5zbGF0aW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7aXNDb2x1bW5IZWFkZXJWaXNpYmxlICYmIChcbiAgICAgICAgICA8Q29sdW1uSGVhZGVyXG4gICAgICAgICAgICBpZD17YCR7aWR9LWNvbHVtbi1oZWFkZXJgfVxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgIGlzU2VsZWN0YWJsZT17aXNTZWxlY3RhYmxlfVxuICAgICAgICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlPXtpc1NlbGVjdEFsbFZpc2libGV9XG4gICAgICAgICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZT17aXNJbmRleENvbHVtblZpc2libGV9XG4gICAgICAgICAgICBpc0FsbFNlbGVjdGVkPXtpc0FsbFNlbGVjdGVkfVxuICAgICAgICAgICAgaGVpZ2h0PXtjb2x1bW5IZWFkZXJIZWlnaHR9XG4gICAgICAgICAgICBvblNlbGVjdEFsbENoYW5nZT17dGhpcy5oYW5kbGVTZWxlY3RBbGxDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPFJlc3BvbnNpdmVMaXN0Q29udGFpbmVyXG4gICAgICAgICAgaWQ9e2Ake2lkfS1pdGVtc2B9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgaXRlbUhlaWdodD17aXRlbUhlaWdodH1cbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgIGNvbHVtbkhlYWRlckhlaWdodD17Y29sdW1uSGVhZGVySGVpZ2h0fVxuICAgICAgICAgIGlzSGVhZGVyVmlzaWJsZT17aXNIZWFkZXJWaXNpYmxlfVxuICAgICAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZT17aXNDb2x1bW5IZWFkZXJWaXNpYmxlfVxuICAgICAgICAgIHJlYWN0SW5maW5pdGVQcm9wcz17cmVhY3RJbmZpbml0ZVByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2ZpbHRlcmVkSXRlbXMubWFwKHRoaXMucmVuZGVyUm93KX1cbiAgICAgICAgPC9SZXNwb25zaXZlTGlzdENvbnRhaW5lcj5cbiAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyV2l0aFRoZW1lID0gdGhlbWVPYmogPT4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZU9ian0+XG4gICAgICB7dGhpcy5yZW5kZXJMaXN0KCl9XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGN1c3RvbVRoZW1lLCB0aGVtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoY3VzdG9tVGhlbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcldpdGhUaGVtZShjdXN0b21UaGVtZSk7IC8vIG92ZXJyaWRlIHdpdGggY3VzdG9tIHRoZW1lXG4gICAgfVxuICAgIGlmICghdGhlbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcldpdGhUaGVtZSh0aGVtZURlZmF1bHRzKTsgLy8gdXNlIGRlZmF1bHRzIGlmIG5vIHRoZW1lIGlzIHByb3ZpZGVkXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbmRlckxpc3QoKTsgLy8gVGhlbWVQcm92aWRlciBpcyBmb3VuZCFcbiAgfVxufVxuIl19