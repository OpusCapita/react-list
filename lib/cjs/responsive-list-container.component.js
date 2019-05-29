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
  var data = _taggedTemplateLiteralLoose(["\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 0px;\n  min-width: 0;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n"]);

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

var ItemContainer = _styledComponents["default"].div(_templateObject2());

var Item = function Item(_ref) {
  var value = _ref.value;
  return _react["default"].createElement(ItemContainer, null, value);
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
      reactInfiniteProps = _ref3.reactInfiniteProps;
  return _react["default"].createElement(_reactInfinite["default"], reactInfiniteProps, items.map(function (value, index) {
    return _react["default"].createElement(SortableItem, {
      key: "item-" + index // eslint-disable-line
      ,
      index: index,
      value: value
    });
  }));
});
SortableInfiniteList.propTypes = {
  items: _propTypes["default"].array.isRequired,
  // eslint-disable-line
  reactInfiniteProps: _propTypes["default"].shape({}).isRequired
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
      onSortEnd: onSortEnd
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTGlzdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaGVhZGVySGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NyIsIkl0ZW1Db250YWluZXIiLCJJdGVtIiwidmFsdWUiLCJJbmZpbml0ZUxpc3QiLCJpdGVtcyIsInJlYWN0SW5maW5pdGVQcm9wcyIsIm1hcCIsImluZGV4IiwiU29ydGFibGVJdGVtIiwiU29ydGFibGVJbmZpbml0ZUxpc3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJzaGFwZSIsIlJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIiwibGlzdENvbnRhaW5lclJlZiIsInNldFN0YXRlIiwibGlzdENvbnRhaW5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInN0YXRlIiwiaGVpZ2h0IiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVmcmVzaEVsZW1lbnRIZWlnaHRzIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwiaXNDb2x1bW5IZWFkZXJWaXNpYmxlIiwiaXNIZWFkZXJWaXNpYmxlIiwiY29sdW1uSGVhZGVySGVpZ2h0IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJpZCIsIml0ZW1IZWlnaHQiLCJpc1NvcnRhYmxlIiwib25Tb3J0RW5kIiwibGlzdFByb3BzIiwiY29udGFpbmVySGVpZ2h0IiwiZWxlbWVudEhlaWdodCIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwiciIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RCxxQkFQSyxnQkFPTEEscUJBUEs7QUFBQSxRQVFMUyxVQVJLLGdCQVFMQSxVQVJLO0FBQUEsUUFTTGhDLGtCQVRLLGdCQVNMQSxrQkFUSztBQUFBLFFBVUxpQyxTQVZLLGdCQVVMQSxTQVZLO0FBQUEsUUFhTHBCLG1CQWJLLEdBY0gsS0FBS0UsS0FkRixDQWFMRixtQkFiSztBQWVQLFFBQU1xQixTQUFTLEdBQUc7QUFDaEJsQyxNQUFBQSxrQkFBa0I7QUFDaEJtQyxRQUFBQSxlQUFlLEVBQUV0QixtQkFERDtBQUVoQnVCLFFBQUFBLGFBQWEsRUFBRUw7QUFGQyxTQUdiL0Isa0JBSGEsQ0FERjtBQU1oQkQsTUFBQUEsS0FBSyxFQUFFc0Msa0JBQU1DLFFBQU4sQ0FBZUMsT0FBZixDQUF1QlYsUUFBdkIsQ0FOUztBQU9oQkcsTUFBQUEsVUFBVSxFQUFWQSxVQVBnQjtBQVFoQkMsTUFBQUEsU0FBUyxFQUFUQTtBQVJnQixLQUFsQjtBQVVBLFFBQUkxQyxZQUFZLEdBQUdnQyxxQkFBcUIsR0FBR0Usa0JBQUgsR0FBd0IsQ0FBaEU7QUFDQSxRQUFJRCxlQUFKLEVBQXFCakMsWUFBWSxJQUFJLEVBQWhCO0FBQ3JCLFdBQ0UsZ0NBQUMsYUFBRDtBQUNFLE1BQUEsRUFBRSxFQUFFdUMsRUFETjtBQUVFLE1BQUEsWUFBWSxFQUFFdkMsWUFGaEI7QUFHRSxNQUFBLEdBQUcsRUFBRSxhQUFDaUQsQ0FBRCxFQUFPO0FBQUUsUUFBQSxNQUFJLENBQUM3QixnQkFBTCxHQUF3QjZCLENBQXhCO0FBQTRCO0FBSDVDLE9BS0lSLFVBQVUsR0FDUixnQ0FBQyxvQkFBRCxlQUEwQkUsU0FBMUI7QUFBcUMsTUFBQSxhQUFhO0FBQWxELE9BRFEsR0FFUixnQ0FBQyxZQUFELEVBQWtCQSxTQUFsQixDQVBOLENBREY7QUFZRCxHOzs7RUE1R2tERyxrQkFBTUksYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzb3J0YWJsZUNvbnRhaW5lciwgc29ydGFibGVFbGVtZW50IH0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJztcbmltcG9ydCBJbmZpbml0ZSBmcm9tICdyZWFjdC1pbmZpbml0ZSc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2RlYm91bmNlJztcblxuY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogJHtwcm9wcyA9PiBgY2FsYygxMDAlIC0gJHtwcm9wcy5oZWFkZXJIZWlnaHR9cHgpYH07XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5N307XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWluLWhlaWdodDogMHB4O1xuICBtaW4td2lkdGg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbmA7XG5cbmNvbnN0IEl0ZW0gPSAoeyB2YWx1ZSB9KSA9PiA8SXRlbUNvbnRhaW5lcj57dmFsdWV9PC9JdGVtQ29udGFpbmVyPjtcbkl0ZW0ucHJvcFR5cGVzID0ge1xuICB2YWx1ZTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IEluZmluaXRlTGlzdCA9ICh7IGl0ZW1zLCByZWFjdEluZmluaXRlUHJvcHMgfSkgPT4gKFxuICA8SW5maW5pdGUgey4uLnJlYWN0SW5maW5pdGVQcm9wc30+XG4gICAge2l0ZW1zLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICA8SXRlbVxuICAgICAgICBrZXk9e2BpdGVtLSR7aW5kZXh9YH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIC8+XG4gICAgKSl9XG4gIDwvSW5maW5pdGU+XG4pO1xuSW5maW5pdGVMaXN0LnByb3BUeXBlcyA9IHtcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIHJlYWN0SW5maW5pdGVQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KS5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgU29ydGFibGVJdGVtID0gc29ydGFibGVFbGVtZW50KEl0ZW0pO1xuY29uc3QgU29ydGFibGVJbmZpbml0ZUxpc3QgPSBzb3J0YWJsZUNvbnRhaW5lcigoeyBpdGVtcywgcmVhY3RJbmZpbml0ZVByb3BzIH0pID0+IChcbiAgPEluZmluaXRlIHsuLi5yZWFjdEluZmluaXRlUHJvcHN9PlxuICAgIHtpdGVtcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxuICAgICAgPFNvcnRhYmxlSXRlbVxuICAgICAgICBrZXk9e2BpdGVtLSR7aW5kZXh9YH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIC8+XG4gICAgKSl9XG4gIDwvSW5maW5pdGU+XG4pKTtcblNvcnRhYmxlSW5maW5pdGVMaXN0LnByb3BUeXBlcyA9IHtcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIHJlYWN0SW5maW5pdGVQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2l2ZUxpc3RDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICAgIGl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjb2x1bW5IZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBpc0hlYWRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzU29ydGFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgcmVhY3RJbmZpbml0ZVByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLmlzUmVxdWlyZWQsXG4gICAgb25Tb3J0RW5kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gcmVmcyBmb3IgZGVsaXZlcmluZyBjb250YWluZXIgYW5kIGl0ZW0gaGVpZ2h0cyB0byBpbmZpbml0ZSBsaXN0XG4gICAgdGhpcy5saXN0Q29udGFpbmVyUmVmID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlzdENvbnRhaW5lckhlaWdodDogcHJvcHMuaGVpZ2h0ID09PSAnYXV0bycgPyA0MDAgOiAocHJvcHMuaGVpZ2h0IC0gMiksIC8vIDJweCBib3JkZXJzXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChoZWlnaHQgPT09ICdhdXRvJykge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlKHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cyk7IC8vIGZvciBtb2JpbGUgc3VwcG9ydFxuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cygpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZSxcbiAgICAgIGlzSGVhZGVyVmlzaWJsZSxcbiAgICAgIGNvbHVtbkhlYWRlckhlaWdodCxcbiAgICAgIGhlaWdodCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoXG4gICAgICAocHJldlByb3BzLmlzQ29sdW1uSGVhZGVyVmlzaWJsZSAhPT0gaXNDb2x1bW5IZWFkZXJWaXNpYmxlKVxuICAgICAgfHwgKHByZXZQcm9wcy5pc0hlYWRlclZpc2libGUgIT09IGlzSGVhZGVyVmlzaWJsZSlcbiAgICAgIHx8IChwcmV2UHJvcHMuY29sdW1uSGVhZGVySGVpZ2h0ICE9PSBjb2x1bW5IZWFkZXJIZWlnaHQpXG4gICAgICB8fCAocHJldlByb3BzLmhlaWdodCAhPT0gaGVpZ2h0KVxuICAgICkge1xuICAgICAgdGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMoKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IGhlaWdodCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaGVpZ2h0ID09PSAnYXV0bycpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZSh0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cykpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpOyAvLyBmb3IgbW9iaWxlIHN1cHBvcnRcbiAgICB9XG4gIH1cblxuICAvLyBSZWZyZXNoIGhlaWdodHMgZm9yIHRoZSBsaXN0XG4gIHJlZnJlc2hFbGVtZW50SGVpZ2h0cyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5saXN0Q29udGFpbmVyUmVmKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGlzdENvbnRhaW5lckhlaWdodDogdGhpcy5saXN0Q29udGFpbmVyUmVmLmNsaWVudEhlaWdodCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGlkLFxuICAgICAgaXRlbUhlaWdodCxcbiAgICAgIGNvbHVtbkhlYWRlckhlaWdodCxcbiAgICAgIGlzSGVhZGVyVmlzaWJsZSxcbiAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZSxcbiAgICAgIGlzU29ydGFibGUsXG4gICAgICByZWFjdEluZmluaXRlUHJvcHMsXG4gICAgICBvblNvcnRFbmQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgbGlzdENvbnRhaW5lckhlaWdodCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBsaXN0UHJvcHMgPSB7XG4gICAgICByZWFjdEluZmluaXRlUHJvcHM6IHtcbiAgICAgICAgY29udGFpbmVySGVpZ2h0OiBsaXN0Q29udGFpbmVySGVpZ2h0LFxuICAgICAgICBlbGVtZW50SGVpZ2h0OiBpdGVtSGVpZ2h0LFxuICAgICAgICAuLi5yZWFjdEluZmluaXRlUHJvcHMsXG4gICAgICB9LFxuICAgICAgaXRlbXM6IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLFxuICAgICAgaXNTb3J0YWJsZSxcbiAgICAgIG9uU29ydEVuZCxcbiAgICB9O1xuICAgIGxldCBoZWFkZXJIZWlnaHQgPSBpc0NvbHVtbkhlYWRlclZpc2libGUgPyBjb2x1bW5IZWFkZXJIZWlnaHQgOiAwO1xuICAgIGlmIChpc0hlYWRlclZpc2libGUpIGhlYWRlckhlaWdodCArPSA0MDtcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RDb250YWluZXJcbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBoZWFkZXJIZWlnaHQ9e2hlYWRlckhlaWdodH1cbiAgICAgICAgcmVmPXsocikgPT4geyB0aGlzLmxpc3RDb250YWluZXJSZWYgPSByOyB9fVxuICAgICAgPlxuICAgICAgICB7IGlzU29ydGFibGVcbiAgICAgICAgICA/IDxTb3J0YWJsZUluZmluaXRlTGlzdCB7Li4ubGlzdFByb3BzfSB1c2VEcmFnSGFuZGxlIC8+XG4gICAgICAgICAgOiA8SW5maW5pdGVMaXN0IHsuLi5saXN0UHJvcHN9IC8+XG4gICAgICAgIH1cbiAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iXX0=