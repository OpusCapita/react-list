"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactInfinite = _interopRequireDefault(require("react-infinite"));

var _debounce = require("debounce");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  flex-direction: column;\n  min-height: 0px;\n  min-width: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  height: ", ";\n  width: 100%;\n  border: 1px solid ", ";\n  padding: 0;\n  margin: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var ListContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return "calc(100% - " + props.headerHeight + "px)";
}, function (props) {
  return props.theme.colors.grey7;
});

var ItemContainer = _styledComponents.default.div(_templateObject2());

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

    _defineProperty(_assertThisInitialized(_this), "renderItem", function () {
      return function (data, index) {
        return _react.default.createElement(ItemContainer, {
          key: index
        }, data);
      };
    });

    _this.listContainerRef = null;
    _this.state = {
      listContainerHeight: props.height === 'auto' ? 400 : props.height - 2 // 2px borders

    };
    return _this;
  }

  var _proto = ResponsiveListContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.height === 'auto') {
      window.addEventListener('resize', (0, _debounce.debounce)(this.refreshElementHeights));
      window.addEventListener('orientationchange', this.refreshElementHeights); // for mobile support
    }

    this.refreshElementHeights();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.isColumnHeaderVisible !== this.props.isColumnHeaderVisible || prevProps.isHeaderVisible !== this.props.isHeaderVisible) {
      this.refreshElementHeights();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.height === 'auto') {
      window.removeEventListener('resize', (0, _debounce.debounce)(this.refreshElementHeights));
      window.removeEventListener('orientationchange', this.refreshElementHeights); // for mobile support
    }
  } // Refresh heights for the list
  ;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        id = _this$props.id,
        columns = _this$props.columns,
        itemHeight = _this$props.itemHeight,
        columnHeaderHeight = _this$props.columnHeaderHeight,
        isHeaderVisible = _this$props.isHeaderVisible,
        isColumnHeaderVisible = _this$props.isColumnHeaderVisible,
        reactInfiniteProps = _this$props.reactInfiniteProps;
    var listContainerHeight = this.state.listContainerHeight;
    var headerHeight = isColumnHeaderVisible ? columnHeaderHeight : 0;
    if (isHeaderVisible) headerHeight += 40;
    return _react.default.createElement(ListContainer, {
      id: id,
      columns: columns,
      headerHeight: headerHeight,
      ref: function ref(r) {
        _this2.listContainerRef = r;
      }
    }, _react.default.createElement(_reactInfinite.default, _extends({
      containerHeight: listContainerHeight,
      elementHeight: itemHeight
    }, reactInfiniteProps), _react.default.Children.map(children, this.renderItem())));
  };

  return ResponsiveListContainer;
}(_react.default.PureComponent);

exports.default = ResponsiveListContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTGlzdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaGVhZGVySGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NyIsIkl0ZW1Db250YWluZXIiLCJSZXNwb25zaXZlTGlzdENvbnRhaW5lciIsImxpc3RDb250YWluZXJSZWYiLCJzZXRTdGF0ZSIsImxpc3RDb250YWluZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJkYXRhIiwiaW5kZXgiLCJzdGF0ZSIsImhlaWdodCIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlZnJlc2hFbGVtZW50SGVpZ2h0cyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsImlzQ29sdW1uSGVhZGVyVmlzaWJsZSIsImlzSGVhZGVyVmlzaWJsZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNoaWxkcmVuIiwiaWQiLCJjb2x1bW5zIiwiaXRlbUhlaWdodCIsImNvbHVtbkhlYWRlckhlaWdodCIsInJlYWN0SW5maW5pdGVQcm9wcyIsInIiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwicmVuZGVySXRlbSIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDBCQUFPQyxHQUFWLG9CQUNQLFVBQUFDLEtBQUs7QUFBQSwwQkFBbUJBLEtBQUssQ0FBQ0MsWUFBekI7QUFBQSxDQURFLEVBR0csVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxLQUF2QjtBQUFBLENBSFIsQ0FBbkI7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RSxRQUFBLE1BQUksQ0FBQ3pCLGdCQUFMLEdBQXdCeUIsQ0FBeEI7QUFBNEI7QUFKNUMsT0FNRSw2QkFBQyxzQkFBRDtBQUNFLE1BQUEsZUFBZSxFQUFFdkIsbUJBRG5CO0FBRUUsTUFBQSxhQUFhLEVBQUVvQjtBQUZqQixPQUdNRSxrQkFITixHQUtJRSxlQUFNQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJULFFBQW5CLEVBQTZCLEtBQUtVLFVBQUwsRUFBN0IsQ0FMSixDQU5GLENBREY7QUFnQkQsRzs7O0VBakdrREgsZUFBTUksYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSW5maW5pdGUgZnJvbSAncmVhY3QtaW5maW5pdGUnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdkZWJvdW5jZSc7XG5cbmNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gYGNhbGMoMTAwJSAtICR7cHJvcHMuaGVhZGVySGVpZ2h0fXB4KWB9O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTd9O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG5gO1xuXG5jb25zdCBJdGVtQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMHB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgICBpdGVtSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcbiAgICBjb2x1bW5IZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBpc0hlYWRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHJlYWN0SW5maW5pdGVQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KS5pc1JlcXVpcmVkLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gcmVmcyBmb3IgZGVsaXZlcmluZyBjb250YWluZXIgYW5kIGl0ZW0gaGVpZ2h0cyB0byBpbmZpbml0ZSBsaXN0XG4gICAgdGhpcy5saXN0Q29udGFpbmVyUmVmID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlzdENvbnRhaW5lckhlaWdodDogcHJvcHMuaGVpZ2h0ID09PSAnYXV0bycgPyA0MDAgOiAocHJvcHMuaGVpZ2h0IC0gMiksIC8vIDJweCBib3JkZXJzXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmhlaWdodCA9PT0gJ2F1dG8nKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UodGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKTsgLy8gZm9yIG1vYmlsZSBzdXBwb3J0XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKFxuICAgICAgKHByZXZQcm9wcy5pc0NvbHVtbkhlYWRlclZpc2libGUgIT09IHRoaXMucHJvcHMuaXNDb2x1bW5IZWFkZXJWaXNpYmxlKSB8fFxuICAgICAgKHByZXZQcm9wcy5pc0hlYWRlclZpc2libGUgIT09IHRoaXMucHJvcHMuaXNIZWFkZXJWaXNpYmxlKVxuICAgICkge1xuICAgICAgdGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMoKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5oZWlnaHQgPT09ICdhdXRvJykge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlKHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cyk7IC8vIGZvciBtb2JpbGUgc3VwcG9ydFxuICAgIH1cbiAgfVxuXG4gIC8vIFJlZnJlc2ggaGVpZ2h0cyBmb3IgdGhlIGxpc3RcbiAgcmVmcmVzaEVsZW1lbnRIZWlnaHRzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmxpc3RDb250YWluZXJSZWYpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsaXN0Q29udGFpbmVySGVpZ2h0OiB0aGlzLmxpc3RDb250YWluZXJSZWYuY2xpZW50SGVpZ2h0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gTGlzdCBpdGVtXG4gIHJlbmRlckl0ZW0gPSAoKSA9PiAoZGF0YSwgaW5kZXgpID0+IChcbiAgICA8SXRlbUNvbnRhaW5lciBrZXk9e2luZGV4fT5cbiAgICAgIHsgZGF0YSB9XG4gICAgPC9JdGVtQ29udGFpbmVyPlxuICApXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaWQsXG4gICAgICBjb2x1bW5zLFxuICAgICAgaXRlbUhlaWdodCxcbiAgICAgIGNvbHVtbkhlYWRlckhlaWdodCxcbiAgICAgIGlzSGVhZGVyVmlzaWJsZSxcbiAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZSxcbiAgICAgIHJlYWN0SW5maW5pdGVQcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBsaXN0Q29udGFpbmVySGVpZ2h0LFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBoZWFkZXJIZWlnaHQgPSBpc0NvbHVtbkhlYWRlclZpc2libGUgPyBjb2x1bW5IZWFkZXJIZWlnaHQgOiAwO1xuICAgIGlmIChpc0hlYWRlclZpc2libGUpIGhlYWRlckhlaWdodCArPSA0MDtcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RDb250YWluZXJcbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICBoZWFkZXJIZWlnaHQ9e2hlYWRlckhlaWdodH1cbiAgICAgICAgcmVmPXsocikgPT4geyB0aGlzLmxpc3RDb250YWluZXJSZWYgPSByOyB9fVxuICAgICAgPlxuICAgICAgICA8SW5maW5pdGVcbiAgICAgICAgICBjb250YWluZXJIZWlnaHQ9e2xpc3RDb250YWluZXJIZWlnaHR9XG4gICAgICAgICAgZWxlbWVudEhlaWdodD17aXRlbUhlaWdodH1cbiAgICAgICAgICB7Li4ucmVhY3RJbmZpbml0ZVByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVySXRlbSgpKSB9XG4gICAgICAgIDwvSW5maW5pdGU+XG4gICAgICA8L0xpc3RDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuIl19