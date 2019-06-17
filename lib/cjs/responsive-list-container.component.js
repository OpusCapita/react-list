"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSortableHoc = require("react-sortable-hoc");

var _reactInfinite = _interopRequireDefault(require("react-infinite"));

var _debounce = require("debounce");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 0px;\n  min-width: 0;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  z-index: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  height: ", ";\n  width: 100%;\n  border: 1px solid ", ";\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var ListContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return "calc(100% - " + props.headerHeight + "px)";
}, function (props) {
  return props.theme.colors.grey7;
});

var ItemContainer = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.dragItemZindex;
});

var Item = function Item(_ref) {
  var value = _ref.value,
      dragItemZindex = _ref.dragItemZindex;
  return _react["default"].createElement(ItemContainer, {
    dragItemZindex: dragItemZindex
  }, value);
};

var InfiniteList = function InfiniteList(_ref2) {
  var items = _ref2.items,
      reactInfiniteProps = _ref2.reactInfiniteProps;
  return _react["default"].createElement(_reactInfinite["default"], reactInfiniteProps, items.map(function (value, index) {
    return _react["default"].createElement(Item, {
      key: "item-" + index // eslint-disable-line
      ,
      index: index,
      value: value
    });
  }));
};

var SortableItem = (0, _reactSortableHoc.sortableElement)(Item);
var SortableInfiniteList = (0, _reactSortableHoc.sortableContainer)(function (_ref3) {
  var items = _ref3.items,
      reactInfiniteProps = _ref3.reactInfiniteProps,
      dragItemZindex = _ref3.dragItemZindex;
  return _react["default"].createElement(_reactInfinite["default"], reactInfiniteProps, items.map(function (value, index) {
    return _react["default"].createElement(SortableItem, {
      key: "item-" + index // eslint-disable-line
      ,
      index: index,
      value: value,
      dragItemZindex: dragItemZindex
    });
  }));
});
SortableInfiniteList.propTypes = {
  items: _propTypes["default"].array.isRequired,
  // eslint-disable-line
  reactInfiniteProps: _propTypes["default"].shape({}).isRequired,
  dragItemZindex: _propTypes["default"].number.isRequired
};

var ResponsiveListContainer =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ResponsiveListContainer, _React$PureComponent);

  function ResponsiveListContainer(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this; // refs for delivering container and item heights to infinite list

    _defineProperty(_assertThisInitialized(_this), "refreshElementHeights", function () {
      if (_this.listContainerRef) {
        _this.setState({
          listContainerHeight: _this.listContainerRef.clientHeight
        });
      }
    });

    _this.listContainerRef = null;
    _this.state = {
      listContainerHeight: props.height === 'auto' ? 400 : props.height - 2 // 2px borders

    };
    return _this;
  }

  var _proto = ResponsiveListContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var height = this.props.height;

    if (height === 'auto') {
      window.addEventListener('resize', (0, _debounce.debounce)(this.refreshElementHeights));
      window.addEventListener('orientationchange', this.refreshElementHeights); // for mobile support
    }

    this.refreshElementHeights();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props = this.props,
        isColumnHeaderVisible = _this$props.isColumnHeaderVisible,
        isHeaderVisible = _this$props.isHeaderVisible,
        columnHeaderHeight = _this$props.columnHeaderHeight,
        height = _this$props.height;

    if (prevProps.isColumnHeaderVisible !== isColumnHeaderVisible || prevProps.isHeaderVisible !== isHeaderVisible || prevProps.columnHeaderHeight !== columnHeaderHeight || prevProps.height !== height) {
      this.refreshElementHeights();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var height = this.props.height;

    if (height === 'auto') {
      window.removeEventListener('resize', (0, _debounce.debounce)(this.refreshElementHeights));
      window.removeEventListener('orientationchange', this.refreshElementHeights); // for mobile support
    }
  } // Refresh heights for the list
  ;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        id = _this$props2.id,
        itemHeight = _this$props2.itemHeight,
        columnHeaderHeight = _this$props2.columnHeaderHeight,
        dragItemZindex = _this$props2.dragItemZindex,
        isHeaderVisible = _this$props2.isHeaderVisible,
        isColumnHeaderVisible = _this$props2.isColumnHeaderVisible,
        isSortable = _this$props2.isSortable,
        reactInfiniteProps = _this$props2.reactInfiniteProps,
        onSortEnd = _this$props2.onSortEnd;
    var listContainerHeight = this.state.listContainerHeight;
    var listProps = {
      reactInfiniteProps: _extends({
        containerHeight: listContainerHeight,
        elementHeight: itemHeight
      }, reactInfiniteProps),
      items: _react["default"].Children.toArray(children),
      isSortable: isSortable,
      onSortEnd: onSortEnd,
      dragItemZindex: dragItemZindex
    };
    var headerHeight = isColumnHeaderVisible ? columnHeaderHeight : 0;
    if (isHeaderVisible) headerHeight += 40;
    return _react["default"].createElement(ListContainer, {
      id: id,
      headerHeight: headerHeight,
      ref: function ref(r) {
        _this2.listContainerRef = r;
      }
    }, isSortable ? _react["default"].createElement(SortableInfiniteList, _extends({}, listProps, {
      useDragHandle: true
    })) : _react["default"].createElement(InfiniteList, listProps));
  };

  return ResponsiveListContainer;
}(_react["default"].PureComponent);

exports["default"] = ResponsiveListContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTGlzdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaGVhZGVySGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NyIsIkl0ZW1Db250YWluZXIiLCJkcmFnSXRlbVppbmRleCIsIkl0ZW0iLCJ2YWx1ZSIsIkluZmluaXRlTGlzdCIsIml0ZW1zIiwicmVhY3RJbmZpbml0ZVByb3BzIiwibWFwIiwiaW5kZXgiLCJTb3J0YWJsZUl0ZW0iLCJTb3J0YWJsZUluZmluaXRlTGlzdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsInNoYXBlIiwibnVtYmVyIiwiUmVzcG9uc2l2ZUxpc3RDb250YWluZXIiLCJsaXN0Q29udGFpbmVyUmVmIiwic2V0U3RhdGUiLCJsaXN0Q29udGFpbmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3RhdGUiLCJoZWlnaHQiLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZWZyZXNoRWxlbWVudEhlaWdodHMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJpc0NvbHVtbkhlYWRlclZpc2libGUiLCJpc0hlYWRlclZpc2libGUiLCJjb2x1bW5IZWFkZXJIZWlnaHQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImlkIiwiaXRlbUhlaWdodCIsImlzU29ydGFibGUiLCJvblNvcnRFbmQiLCJsaXN0UHJvcHMiLCJjb250YWluZXJIZWlnaHQiLCJlbGVtZW50SGVpZ2h0IiwiUmVhY3QiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJyIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBR0MsNkJBQU9DLEdBQVYsb0JBQ1AsVUFBQUMsS0FBSztBQUFBLDBCQUFtQkEsS0FBSyxDQUFDQyxZQUF6QjtBQUFBLENBREUsRUFHRyxVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLEtBQXZCO0FBQUEsQ0FIUixDQUFuQjs7QUFTQSxJQUFNQyxhQUFhLEdBQUdQLDZCQUFPQyxHQUFWLHFCQVFOLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNNLGNBQVY7QUFBQSxDQVJDLENBQW5COztBQVdBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsTUFDWEMsS0FEVyxRQUNYQSxLQURXO0FBQUEsTUFFWEYsY0FGVyxRQUVYQSxjQUZXO0FBQUEsU0FHUCxnQ0FBQyxhQUFEO0FBQWUsSUFBQSxjQUFjLEVBQUVBO0FBQS9CLEtBQWdERSxLQUFoRCxDQUhPO0FBQUEsQ0FBYjs7QUFTQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLE1BQVVDLGtCQUFWLFNBQVVBLGtCQUFWO0FBQUEsU0FDbkIsZ0NBQUMseUJBQUQsRUFBY0Esa0JBQWQsRUFDR0QsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQ0osS0FBRCxFQUFRSyxLQUFSO0FBQUEsV0FDVCxnQ0FBQyxJQUFEO0FBQ0UsTUFBQSxHQUFHLFlBQVVBLEtBRGYsQ0FDd0I7QUFEeEI7QUFFRSxNQUFBLEtBQUssRUFBRUEsS0FGVDtBQUdFLE1BQUEsS0FBSyxFQUFFTDtBQUhULE1BRFM7QUFBQSxHQUFWLENBREgsQ0FEbUI7QUFBQSxDQUFyQjs7QUFnQkEsSUFBTU0sWUFBWSxHQUFHLHVDQUFnQlAsSUFBaEIsQ0FBckI7QUFDQSxJQUFNUSxvQkFBb0IsR0FBRyx5Q0FBa0I7QUFBQSxNQUFHTCxLQUFILFNBQUdBLEtBQUg7QUFBQSxNQUFVQyxrQkFBVixTQUFVQSxrQkFBVjtBQUFBLE1BQThCTCxjQUE5QixTQUE4QkEsY0FBOUI7QUFBQSxTQUM3QyxnQ0FBQyx5QkFBRCxFQUFjSyxrQkFBZCxFQUNHRCxLQUFLLENBQUNFLEdBQU4sQ0FBVSxVQUFDSixLQUFELEVBQVFLLEtBQVI7QUFBQSxXQUNULGdDQUFDLFlBQUQ7QUFDRSxNQUFBLEdBQUcsWUFBVUEsS0FEZixDQUN3QjtBQUR4QjtBQUVFLE1BQUEsS0FBSyxFQUFFQSxLQUZUO0FBR0UsTUFBQSxLQUFLLEVBQUVMLEtBSFQ7QUFJRSxNQUFBLGNBQWMsRUFBRUY7QUFKbEIsTUFEUztBQUFBLEdBQVYsQ0FESCxDQUQ2QztBQUFBLENBQWxCLENBQTdCO0FBWUFTLG9CQUFvQixDQUFDQyxTQUFyQixHQUFpQztBQUMvQk4sRUFBQUEsS0FBSyxFQUFFTyxzQkFBVUMsS0FBVixDQUFnQkMsVUFEUTtBQUNJO0FBQ25DUixFQUFBQSxrQkFBa0IsRUFBRU0sc0JBQVVHLEtBQVYsQ0FBZ0IsRUFBaEIsRUFBb0JELFVBRlQ7QUFHL0JiLEVBQUFBLGNBQWMsRUFBRVcsc0JBQVVJLE1BQVYsQ0FBaUJGO0FBSEYsQ0FBakM7O0lBTXFCRyx1Qjs7Ozs7QUFrQm5CLG1DQUFZdEIsS0FBWixFQUFtQjtBQUFBOztBQUNqQiw0Q0FBTUEsS0FBTixVQURpQixDQUVqQjs7QUFGaUIsNEVBNENLLFlBQU07QUFDNUIsVUFBSSxNQUFLdUIsZ0JBQVQsRUFBMkI7QUFDekIsY0FBS0MsUUFBTCxDQUFjO0FBQ1pDLFVBQUFBLG1CQUFtQixFQUFFLE1BQUtGLGdCQUFMLENBQXNCRztBQUQvQixTQUFkO0FBR0Q7QUFDRixLQWxEa0I7O0FBR2pCLFVBQUtILGdCQUFMLEdBQXdCLElBQXhCO0FBQ0EsVUFBS0ksS0FBTCxHQUFhO0FBQ1hGLE1BQUFBLG1CQUFtQixFQUFFekIsS0FBSyxDQUFDNEIsTUFBTixLQUFpQixNQUFqQixHQUEwQixHQUExQixHQUFpQzVCLEtBQUssQ0FBQzRCLE1BQU4sR0FBZSxDQUQxRCxDQUM4RDs7QUFEOUQsS0FBYjtBQUppQjtBQU9sQjs7OztTQUVEQyxpQixHQUFBLDZCQUFvQjtBQUFBLFFBQ1ZELE1BRFUsR0FDQyxLQUFLNUIsS0FETixDQUNWNEIsTUFEVTs7QUFFbEIsUUFBSUEsTUFBTSxLQUFLLE1BQWYsRUFBdUI7QUFDckJFLE1BQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0Msd0JBQVMsS0FBS0MscUJBQWQsQ0FBbEM7QUFDQUYsTUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixtQkFBeEIsRUFBNkMsS0FBS0MscUJBQWxELEVBRnFCLENBRXFEO0FBQzNFOztBQUNELFNBQUtBLHFCQUFMO0FBQ0QsRzs7U0FFREMsa0IsR0FBQSw0QkFBbUJDLFNBQW5CLEVBQThCO0FBQUEsc0JBTXhCLEtBQUtsQyxLQU5tQjtBQUFBLFFBRTFCbUMscUJBRjBCLGVBRTFCQSxxQkFGMEI7QUFBQSxRQUcxQkMsZUFIMEIsZUFHMUJBLGVBSDBCO0FBQUEsUUFJMUJDLGtCQUowQixlQUkxQkEsa0JBSjBCO0FBQUEsUUFLMUJULE1BTDBCLGVBSzFCQSxNQUwwQjs7QUFPNUIsUUFDR00sU0FBUyxDQUFDQyxxQkFBVixLQUFvQ0EscUJBQXJDLElBQ0lELFNBQVMsQ0FBQ0UsZUFBVixLQUE4QkEsZUFEbEMsSUFFSUYsU0FBUyxDQUFDRyxrQkFBVixLQUFpQ0Esa0JBRnJDLElBR0lILFNBQVMsQ0FBQ04sTUFBVixLQUFxQkEsTUFKM0IsRUFLRTtBQUNBLFdBQUtJLHFCQUFMO0FBQ0Q7QUFDRixHOztTQUVETSxvQixHQUFBLGdDQUF1QjtBQUFBLFFBQ2JWLE1BRGEsR0FDRixLQUFLNUIsS0FESCxDQUNiNEIsTUFEYTs7QUFFckIsUUFBSUEsTUFBTSxLQUFLLE1BQWYsRUFBdUI7QUFDckJFLE1BQUFBLE1BQU0sQ0FBQ1MsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsd0JBQVMsS0FBS1AscUJBQWQsQ0FBckM7QUFDQUYsTUFBQUEsTUFBTSxDQUFDUyxtQkFBUCxDQUEyQixtQkFBM0IsRUFBZ0QsS0FBS1AscUJBQXJELEVBRnFCLENBRXdEO0FBQzlFO0FBQ0YsRyxDQUVEOzs7U0FTQVEsTSxHQUFBLGtCQUFTO0FBQUE7O0FBQUEsdUJBWUgsS0FBS3hDLEtBWkY7QUFBQSxRQUVMeUMsUUFGSyxnQkFFTEEsUUFGSztBQUFBLFFBR0xDLEVBSEssZ0JBR0xBLEVBSEs7QUFBQSxRQUlMQyxVQUpLLGdCQUlMQSxVQUpLO0FBQUEsUUFLTE4sa0JBTEssZ0JBS0xBLGtCQUxLO0FBQUEsUUFNTC9CLGNBTkssZ0JBTUxBLGNBTks7QUFBQSxRQU9MOEIsZUFQSyxnQkFPTEEsZUFQSztBQUFBLFFBUUxELHFCQVJLLGdCQVFMQSxxQkFSSztBQUFBLFFBU0xTLFVBVEssZ0JBU0xBLFVBVEs7QUFBQSxRQVVMakMsa0JBVkssZ0JBVUxBLGtCQVZLO0FBQUEsUUFXTGtDLFNBWEssZ0JBV0xBLFNBWEs7QUFBQSxRQWNMcEIsbUJBZEssR0FlSCxLQUFLRSxLQWZGLENBY0xGLG1CQWRLO0FBZ0JQLFFBQU1xQixTQUFTLEdBQUc7QUFDaEJuQyxNQUFBQSxrQkFBa0I7QUFDaEJvQyxRQUFBQSxlQUFlLEVBQUV0QixtQkFERDtBQUVoQnVCLFFBQUFBLGFBQWEsRUFBRUw7QUFGQyxTQUdiaEMsa0JBSGEsQ0FERjtBQU1oQkQsTUFBQUEsS0FBSyxFQUFFdUMsa0JBQU1DLFFBQU4sQ0FBZUMsT0FBZixDQUF1QlYsUUFBdkIsQ0FOUztBQU9oQkcsTUFBQUEsVUFBVSxFQUFWQSxVQVBnQjtBQVFoQkMsTUFBQUEsU0FBUyxFQUFUQSxTQVJnQjtBQVNoQnZDLE1BQUFBLGNBQWMsRUFBZEE7QUFUZ0IsS0FBbEI7QUFXQSxRQUFJTCxZQUFZLEdBQUdrQyxxQkFBcUIsR0FBR0Usa0JBQUgsR0FBd0IsQ0FBaEU7QUFDQSxRQUFJRCxlQUFKLEVBQXFCbkMsWUFBWSxJQUFJLEVBQWhCO0FBQ3JCLFdBQ0UsZ0NBQUMsYUFBRDtBQUNFLE1BQUEsRUFBRSxFQUFFeUMsRUFETjtBQUVFLE1BQUEsWUFBWSxFQUFFekMsWUFGaEI7QUFHRSxNQUFBLEdBQUcsRUFBRSxhQUFDbUQsQ0FBRCxFQUFPO0FBQUUsUUFBQSxNQUFJLENBQUM3QixnQkFBTCxHQUF3QjZCLENBQXhCO0FBQTRCO0FBSDVDLE9BS0lSLFVBQVUsR0FDUixnQ0FBQyxvQkFBRCxlQUEwQkUsU0FBMUI7QUFBcUMsTUFBQSxhQUFhO0FBQWxELE9BRFEsR0FFUixnQ0FBQyxZQUFELEVBQWtCQSxTQUFsQixDQVBOLENBREY7QUFZRCxHOzs7RUEvR2tERyxrQkFBTUksYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzb3J0YWJsZUNvbnRhaW5lciwgc29ydGFibGVFbGVtZW50IH0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJztcbmltcG9ydCBJbmZpbml0ZSBmcm9tICdyZWFjdC1pbmZpbml0ZSc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2RlYm91bmNlJztcblxuY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogJHtwcm9wcyA9PiBgY2FsYygxMDAlIC0gJHtwcm9wcy5oZWFkZXJIZWlnaHR9cHgpYH07XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5N307XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWluLWhlaWdodDogMHB4O1xuICBtaW4td2lkdGg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgei1pbmRleDogJHtwcm9wcyA9PiBwcm9wcy5kcmFnSXRlbVppbmRleH07XG5gO1xuXG5jb25zdCBJdGVtID0gKHtcbiAgdmFsdWUsXG4gIGRyYWdJdGVtWmluZGV4LFxufSkgPT4gPEl0ZW1Db250YWluZXIgZHJhZ0l0ZW1aaW5kZXg9e2RyYWdJdGVtWmluZGV4fT57dmFsdWV9PC9JdGVtQ29udGFpbmVyPjtcbkl0ZW0ucHJvcFR5cGVzID0ge1xuICB2YWx1ZTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgZHJhZ0l0ZW1aaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IEluZmluaXRlTGlzdCA9ICh7IGl0ZW1zLCByZWFjdEluZmluaXRlUHJvcHMgfSkgPT4gKFxuICA8SW5maW5pdGUgey4uLnJlYWN0SW5maW5pdGVQcm9wc30+XG4gICAge2l0ZW1zLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICA8SXRlbVxuICAgICAgICBrZXk9e2BpdGVtLSR7aW5kZXh9YH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIC8+XG4gICAgKSl9XG4gIDwvSW5maW5pdGU+XG4pO1xuSW5maW5pdGVMaXN0LnByb3BUeXBlcyA9IHtcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIHJlYWN0SW5maW5pdGVQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KS5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgU29ydGFibGVJdGVtID0gc29ydGFibGVFbGVtZW50KEl0ZW0pO1xuY29uc3QgU29ydGFibGVJbmZpbml0ZUxpc3QgPSBzb3J0YWJsZUNvbnRhaW5lcigoeyBpdGVtcywgcmVhY3RJbmZpbml0ZVByb3BzLCBkcmFnSXRlbVppbmRleCB9KSA9PiAoXG4gIDxJbmZpbml0ZSB7Li4ucmVhY3RJbmZpbml0ZVByb3BzfT5cbiAgICB7aXRlbXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcbiAgICAgIDxTb3J0YWJsZUl0ZW1cbiAgICAgICAga2V5PXtgaXRlbS0ke2luZGV4fWB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGRyYWdJdGVtWmluZGV4PXtkcmFnSXRlbVppbmRleH1cbiAgICAgIC8+XG4gICAgKSl9XG4gIDwvSW5maW5pdGU+XG4pKTtcblNvcnRhYmxlSW5maW5pdGVMaXN0LnByb3BUeXBlcyA9IHtcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIHJlYWN0SW5maW5pdGVQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KS5pc1JlcXVpcmVkLFxuICBkcmFnSXRlbVppbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2l2ZUxpc3RDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICAgIGl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjb2x1bW5IZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBkcmFnSXRlbVppbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGlzSGVhZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc0NvbHVtbkhlYWRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNTb3J0YWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICByZWFjdEluZmluaXRlUHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSkuaXNSZXF1aXJlZCxcbiAgICBvblNvcnRFbmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvLyByZWZzIGZvciBkZWxpdmVyaW5nIGNvbnRhaW5lciBhbmQgaXRlbSBoZWlnaHRzIHRvIGluZmluaXRlIGxpc3RcbiAgICB0aGlzLmxpc3RDb250YWluZXJSZWYgPSBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaXN0Q29udGFpbmVySGVpZ2h0OiBwcm9wcy5oZWlnaHQgPT09ICdhdXRvJyA/IDQwMCA6IChwcm9wcy5oZWlnaHQgLSAyKSwgLy8gMnB4IGJvcmRlcnNcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBoZWlnaHQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGhlaWdodCA9PT0gJ2F1dG8nKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UodGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKTsgLy8gZm9yIG1vYmlsZSBzdXBwb3J0XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlLFxuICAgICAgaXNIZWFkZXJWaXNpYmxlLFxuICAgICAgY29sdW1uSGVhZGVySGVpZ2h0LFxuICAgICAgaGVpZ2h0LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChcbiAgICAgIChwcmV2UHJvcHMuaXNDb2x1bW5IZWFkZXJWaXNpYmxlICE9PSBpc0NvbHVtbkhlYWRlclZpc2libGUpXG4gICAgICB8fCAocHJldlByb3BzLmlzSGVhZGVyVmlzaWJsZSAhPT0gaXNIZWFkZXJWaXNpYmxlKVxuICAgICAgfHwgKHByZXZQcm9wcy5jb2x1bW5IZWFkZXJIZWlnaHQgIT09IGNvbHVtbkhlYWRlckhlaWdodClcbiAgICAgIHx8IChwcmV2UHJvcHMuaGVpZ2h0ICE9PSBoZWlnaHQpXG4gICAgKSB7XG4gICAgICB0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cygpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChoZWlnaHQgPT09ICdhdXRvJykge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlKHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cyk7IC8vIGZvciBtb2JpbGUgc3VwcG9ydFxuICAgIH1cbiAgfVxuXG4gIC8vIFJlZnJlc2ggaGVpZ2h0cyBmb3IgdGhlIGxpc3RcbiAgcmVmcmVzaEVsZW1lbnRIZWlnaHRzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmxpc3RDb250YWluZXJSZWYpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsaXN0Q29udGFpbmVySGVpZ2h0OiB0aGlzLmxpc3RDb250YWluZXJSZWYuY2xpZW50SGVpZ2h0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaWQsXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgICAgY29sdW1uSGVhZGVySGVpZ2h0LFxuICAgICAgZHJhZ0l0ZW1aaW5kZXgsXG4gICAgICBpc0hlYWRlclZpc2libGUsXG4gICAgICBpc0NvbHVtbkhlYWRlclZpc2libGUsXG4gICAgICBpc1NvcnRhYmxlLFxuICAgICAgcmVhY3RJbmZpbml0ZVByb3BzLFxuICAgICAgb25Tb3J0RW5kLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGxpc3RDb250YWluZXJIZWlnaHQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgbGlzdFByb3BzID0ge1xuICAgICAgcmVhY3RJbmZpbml0ZVByb3BzOiB7XG4gICAgICAgIGNvbnRhaW5lckhlaWdodDogbGlzdENvbnRhaW5lckhlaWdodCxcbiAgICAgICAgZWxlbWVudEhlaWdodDogaXRlbUhlaWdodCxcbiAgICAgICAgLi4ucmVhY3RJbmZpbml0ZVByb3BzLFxuICAgICAgfSxcbiAgICAgIGl0ZW1zOiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKSxcbiAgICAgIGlzU29ydGFibGUsXG4gICAgICBvblNvcnRFbmQsXG4gICAgICBkcmFnSXRlbVppbmRleCxcbiAgICB9O1xuICAgIGxldCBoZWFkZXJIZWlnaHQgPSBpc0NvbHVtbkhlYWRlclZpc2libGUgPyBjb2x1bW5IZWFkZXJIZWlnaHQgOiAwO1xuICAgIGlmIChpc0hlYWRlclZpc2libGUpIGhlYWRlckhlaWdodCArPSA0MDtcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RDb250YWluZXJcbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBoZWFkZXJIZWlnaHQ9e2hlYWRlckhlaWdodH1cbiAgICAgICAgcmVmPXsocikgPT4geyB0aGlzLmxpc3RDb250YWluZXJSZWYgPSByOyB9fVxuICAgICAgPlxuICAgICAgICB7IGlzU29ydGFibGVcbiAgICAgICAgICA/IDxTb3J0YWJsZUluZmluaXRlTGlzdCB7Li4ubGlzdFByb3BzfSB1c2VEcmFnSGFuZGxlIC8+XG4gICAgICAgICAgOiA8SW5maW5pdGVMaXN0IHsuLi5saXN0UHJvcHN9IC8+XG4gICAgICAgIH1cbiAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iXX0=