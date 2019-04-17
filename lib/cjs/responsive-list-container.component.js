"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactInfinite = _interopRequireDefault(require("react-infinite"));

var _debounce = require("debounce");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var ListContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return "calc(100% - " + props.headerHeight + "px)";
}, function (props) {
  return props.theme.colors.grey7;
});

var ItemContainer = _styledComponents["default"].div(_templateObject2());

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
        return _react["default"].createElement(ItemContainer, {
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
        reactInfiniteProps = _this$props2.reactInfiniteProps;
    var listContainerHeight = this.state.listContainerHeight;
    var headerHeight = isColumnHeaderVisible ? columnHeaderHeight : 0;
    if (isHeaderVisible) headerHeight += 40;
    return _react["default"].createElement(ListContainer, {
      id: id,
      headerHeight: headerHeight,
      ref: function ref(r) {
        _this2.listContainerRef = r;
      }
    }, _react["default"].createElement(_reactInfinite["default"], _extends({
      containerHeight: listContainerHeight,
      elementHeight: itemHeight
    }, reactInfiniteProps), _react["default"].Children.map(children, this.renderItem())));
  };

  return ResponsiveListContainer;
}(_react["default"].PureComponent);

exports["default"] = ResponsiveListContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTGlzdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaGVhZGVySGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NyIsIkl0ZW1Db250YWluZXIiLCJSZXNwb25zaXZlTGlzdENvbnRhaW5lciIsImxpc3RDb250YWluZXJSZWYiLCJzZXRTdGF0ZSIsImxpc3RDb250YWluZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJkYXRhIiwiaW5kZXgiLCJzdGF0ZSIsImhlaWdodCIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlZnJlc2hFbGVtZW50SGVpZ2h0cyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsImlzQ29sdW1uSGVhZGVyVmlzaWJsZSIsImlzSGVhZGVyVmlzaWJsZSIsImNvbHVtbkhlYWRlckhlaWdodCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNoaWxkcmVuIiwiaWQiLCJpdGVtSGVpZ2h0IiwicmVhY3RJbmZpbml0ZVByb3BzIiwiciIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJyZW5kZXJJdGVtIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBR0MsNkJBQU9DLEdBQVYsb0JBQ1AsVUFBQUMsS0FBSztBQUFBLDBCQUFtQkEsS0FBSyxDQUFDQyxZQUF6QjtBQUFBLENBREUsRUFHRyxVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLEtBQXZCO0FBQUEsQ0FIUixDQUFuQjs7QUFRQSxJQUFN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QXFCLEdBQUdFLGtCQUFILEdBQXdCLENBQWhFO0FBQ0EsUUFBSUQsZUFBSixFQUFxQnJCLFlBQVksSUFBSSxFQUFoQjtBQUNyQixXQUNFLGdDQUFDLGFBQUQ7QUFDRSxNQUFBLEVBQUUsRUFBRTJCLEVBRE47QUFFRSxNQUFBLFlBQVksRUFBRTNCLFlBRmhCO0FBR0UsTUFBQSxHQUFHLEVBQUUsYUFBQzhCLENBQUQsRUFBTztBQUFFLFFBQUEsTUFBSSxDQUFDeEIsZ0JBQUwsR0FBd0J3QixDQUF4QjtBQUE0QjtBQUg1QyxPQUtFLGdDQUFDLHlCQUFEO0FBQ0UsTUFBQSxlQUFlLEVBQUV0QixtQkFEbkI7QUFFRSxNQUFBLGFBQWEsRUFBRW9CO0FBRmpCLE9BR01DLGtCQUhOLEdBS0lFLGtCQUFNQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJQLFFBQW5CLEVBQTZCLEtBQUtRLFVBQUwsRUFBN0IsQ0FMSixDQUxGLENBREY7QUFlRCxHOzs7RUF4R2tESCxrQkFBTUksYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSW5maW5pdGUgZnJvbSAncmVhY3QtaW5maW5pdGUnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdkZWJvdW5jZSc7XG5cbmNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gYGNhbGMoMTAwJSAtICR7cHJvcHMuaGVhZGVySGVpZ2h0fXB4KWB9O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTd9O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG5gO1xuXG5jb25zdCBJdGVtQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMHB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgICBpdGVtSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgY29sdW1uSGVhZGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaXNIZWFkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICByZWFjdEluZmluaXRlUHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSkuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIHJlZnMgZm9yIGRlbGl2ZXJpbmcgY29udGFpbmVyIGFuZCBpdGVtIGhlaWdodHMgdG8gaW5maW5pdGUgbGlzdFxuICAgIHRoaXMubGlzdENvbnRhaW5lclJlZiA9IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3RDb250YWluZXJIZWlnaHQ6IHByb3BzLmhlaWdodCA9PT0gJ2F1dG8nID8gNDAwIDogKHByb3BzLmhlaWdodCAtIDIpLCAvLyAycHggYm9yZGVyc1xuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGhlaWdodCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaGVpZ2h0ID09PSAnYXV0bycpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZSh0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cykpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpOyAvLyBmb3IgbW9iaWxlIHN1cHBvcnRcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc0NvbHVtbkhlYWRlclZpc2libGUsXG4gICAgICBpc0hlYWRlclZpc2libGUsXG4gICAgICBjb2x1bW5IZWFkZXJIZWlnaHQsXG4gICAgICBoZWlnaHQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKFxuICAgICAgKHByZXZQcm9wcy5pc0NvbHVtbkhlYWRlclZpc2libGUgIT09IGlzQ29sdW1uSGVhZGVyVmlzaWJsZSlcbiAgICAgIHx8IChwcmV2UHJvcHMuaXNIZWFkZXJWaXNpYmxlICE9PSBpc0hlYWRlclZpc2libGUpXG4gICAgICB8fCAocHJldlByb3BzLmNvbHVtbkhlYWRlckhlaWdodCAhPT0gY29sdW1uSGVhZGVySGVpZ2h0KVxuICAgICAgfHwgKHByZXZQcm9wcy5oZWlnaHQgIT09IGhlaWdodClcbiAgICApIHtcbiAgICAgIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBoZWlnaHQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGhlaWdodCA9PT0gJ2F1dG8nKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UodGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKTsgLy8gZm9yIG1vYmlsZSBzdXBwb3J0XG4gICAgfVxuICB9XG5cbiAgLy8gUmVmcmVzaCBoZWlnaHRzIGZvciB0aGUgbGlzdFxuICByZWZyZXNoRWxlbWVudEhlaWdodHMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGlzdENvbnRhaW5lclJlZikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxpc3RDb250YWluZXJIZWlnaHQ6IHRoaXMubGlzdENvbnRhaW5lclJlZi5jbGllbnRIZWlnaHQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBMaXN0IGl0ZW1cbiAgcmVuZGVySXRlbSA9ICgpID0+IChkYXRhLCBpbmRleCkgPT4gKFxuICAgIDxJdGVtQ29udGFpbmVyIGtleT17aW5kZXh9PlxuICAgICAgeyBkYXRhIH1cbiAgICA8L0l0ZW1Db250YWluZXI+XG4gIClcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpZCxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICBjb2x1bW5IZWFkZXJIZWlnaHQsXG4gICAgICBpc0hlYWRlclZpc2libGUsXG4gICAgICBpc0NvbHVtbkhlYWRlclZpc2libGUsXG4gICAgICByZWFjdEluZmluaXRlUHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgbGlzdENvbnRhaW5lckhlaWdodCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgaGVhZGVySGVpZ2h0ID0gaXNDb2x1bW5IZWFkZXJWaXNpYmxlID8gY29sdW1uSGVhZGVySGVpZ2h0IDogMDtcbiAgICBpZiAoaXNIZWFkZXJWaXNpYmxlKSBoZWFkZXJIZWlnaHQgKz0gNDA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0Q29udGFpbmVyXG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgaGVhZGVySGVpZ2h0PXtoZWFkZXJIZWlnaHR9XG4gICAgICAgIHJlZj17KHIpID0+IHsgdGhpcy5saXN0Q29udGFpbmVyUmVmID0gcjsgfX1cbiAgICAgID5cbiAgICAgICAgPEluZmluaXRlXG4gICAgICAgICAgY29udGFpbmVySGVpZ2h0PXtsaXN0Q29udGFpbmVySGVpZ2h0fVxuICAgICAgICAgIGVsZW1lbnRIZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgICAgey4uLnJlYWN0SW5maW5pdGVQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckl0ZW0oKSkgfVxuICAgICAgICA8L0luZmluaXRlPlxuICAgICAgPC9MaXN0Q29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==