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
    if (prevProps.isColumnHeaderVisible !== this.props.isColumnHeaderVisible || prevProps.isHeaderVisible !== this.props.isHeaderVisible || prevProps.columnHeaderHeight !== this.props.columnHeaderHeight || prevProps.height !== this.props.height) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTGlzdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaGVhZGVySGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NyIsIkl0ZW1Db250YWluZXIiLCJSZXNwb25zaXZlTGlzdENvbnRhaW5lciIsImxpc3RDb250YWluZXJSZWYiLCJzZXRTdGF0ZSIsImxpc3RDb250YWluZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJkYXRhIiwiaW5kZXgiLCJzdGF0ZSIsImhlaWdodCIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlZnJlc2hFbGVtZW50SGVpZ2h0cyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsImlzQ29sdW1uSGVhZGVyVmlzaWJsZSIsImlzSGVhZGVyVmlzaWJsZSIsImNvbHVtbkhlYWRlckhlaWdodCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNoaWxkcmVuIiwiaWQiLCJpdGVtSGVpZ2h0IiwicmVhY3RJbmZpbml0ZVByb3BzIiwiciIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJyZW5kZXJJdGVtIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBR0MsMEJBQU9DLEdBQVYsb0JBQ1AsVUFBQUMsS0FBSztBQUFBLDBCQUFtQkEsS0FBSyxDQUFDQyxZQUF6QjtBQUFBLENBREUsRUFHRyxVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLEtBQXZCO0FBQUEsQ0FIUixDQUFuQjs7QUFRQSxJQUFN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QjtBQUdFLE1BQUEsR0FBRyxFQUFFLGFBQUM4QixDQUFELEVBQU87QUFBRSxRQUFBLE1BQUksQ0FBQ3hCLGdCQUFMLEdBQXdCd0IsQ0FBeEI7QUFBNEI7QUFINUMsT0FLRSw2QkFBQyxzQkFBRDtBQUNFLE1BQUEsZUFBZSxFQUFFdEIsbUJBRG5CO0FBRUUsTUFBQSxhQUFhLEVBQUVvQjtBQUZqQixPQUdNQyxrQkFITixHQUtJRSxlQUFNQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJQLFFBQW5CLEVBQTZCLEtBQUtRLFVBQUwsRUFBN0IsQ0FMSixDQUxGLENBREY7QUFlRCxHOzs7RUFoR2tESCxlQUFNSSxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBJbmZpbml0ZSBmcm9tICdyZWFjdC1pbmZpbml0ZSc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2RlYm91bmNlJztcblxuY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogJHtwcm9wcyA9PiBgY2FsYygxMDAlIC0gJHtwcm9wcy5oZWFkZXJIZWlnaHR9cHgpYH07XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5N307XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbmA7XG5cbmNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAwcHg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2l2ZUxpc3RDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICAgIGl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjb2x1bW5IZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBpc0hlYWRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHJlYWN0SW5maW5pdGVQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KS5pc1JlcXVpcmVkLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gcmVmcyBmb3IgZGVsaXZlcmluZyBjb250YWluZXIgYW5kIGl0ZW0gaGVpZ2h0cyB0byBpbmZpbml0ZSBsaXN0XG4gICAgdGhpcy5saXN0Q29udGFpbmVyUmVmID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlzdENvbnRhaW5lckhlaWdodDogcHJvcHMuaGVpZ2h0ID09PSAnYXV0bycgPyA0MDAgOiAocHJvcHMuaGVpZ2h0IC0gMiksIC8vIDJweCBib3JkZXJzXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmhlaWdodCA9PT0gJ2F1dG8nKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UodGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKTsgLy8gZm9yIG1vYmlsZSBzdXBwb3J0XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKFxuICAgICAgKHByZXZQcm9wcy5pc0NvbHVtbkhlYWRlclZpc2libGUgIT09IHRoaXMucHJvcHMuaXNDb2x1bW5IZWFkZXJWaXNpYmxlKSB8fFxuICAgICAgKHByZXZQcm9wcy5pc0hlYWRlclZpc2libGUgIT09IHRoaXMucHJvcHMuaXNIZWFkZXJWaXNpYmxlKSB8fFxuICAgICAgKHByZXZQcm9wcy5jb2x1bW5IZWFkZXJIZWlnaHQgIT09IHRoaXMucHJvcHMuY29sdW1uSGVhZGVySGVpZ2h0KSB8fFxuICAgICAgKHByZXZQcm9wcy5oZWlnaHQgIT09IHRoaXMucHJvcHMuaGVpZ2h0KVxuICAgICkge1xuICAgICAgdGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMoKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5oZWlnaHQgPT09ICdhdXRvJykge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlKHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cyk7IC8vIGZvciBtb2JpbGUgc3VwcG9ydFxuICAgIH1cbiAgfVxuXG4gIC8vIFJlZnJlc2ggaGVpZ2h0cyBmb3IgdGhlIGxpc3RcbiAgcmVmcmVzaEVsZW1lbnRIZWlnaHRzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmxpc3RDb250YWluZXJSZWYpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsaXN0Q29udGFpbmVySGVpZ2h0OiB0aGlzLmxpc3RDb250YWluZXJSZWYuY2xpZW50SGVpZ2h0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gTGlzdCBpdGVtXG4gIHJlbmRlckl0ZW0gPSAoKSA9PiAoZGF0YSwgaW5kZXgpID0+IChcbiAgICA8SXRlbUNvbnRhaW5lciBrZXk9e2luZGV4fT5cbiAgICAgIHsgZGF0YSB9XG4gICAgPC9JdGVtQ29udGFpbmVyPlxuICApXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaWQsXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgICAgY29sdW1uSGVhZGVySGVpZ2h0LFxuICAgICAgaXNIZWFkZXJWaXNpYmxlLFxuICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlLFxuICAgICAgcmVhY3RJbmZpbml0ZVByb3BzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGxpc3RDb250YWluZXJIZWlnaHQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGhlYWRlckhlaWdodCA9IGlzQ29sdW1uSGVhZGVyVmlzaWJsZSA/IGNvbHVtbkhlYWRlckhlaWdodCA6IDA7XG4gICAgaWYgKGlzSGVhZGVyVmlzaWJsZSkgaGVhZGVySGVpZ2h0ICs9IDQwO1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdENvbnRhaW5lclxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGhlYWRlckhlaWdodD17aGVhZGVySGVpZ2h0fVxuICAgICAgICByZWY9eyhyKSA9PiB7IHRoaXMubGlzdENvbnRhaW5lclJlZiA9IHI7IH19XG4gICAgICA+XG4gICAgICAgIDxJbmZpbml0ZVxuICAgICAgICAgIGNvbnRhaW5lckhlaWdodD17bGlzdENvbnRhaW5lckhlaWdodH1cbiAgICAgICAgICBlbGVtZW50SGVpZ2h0PXtpdGVtSGVpZ2h0fVxuICAgICAgICAgIHsuLi5yZWFjdEluZmluaXRlUHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJJdGVtKCkpIH1cbiAgICAgICAgPC9JbmZpbml0ZT5cbiAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iXX0=