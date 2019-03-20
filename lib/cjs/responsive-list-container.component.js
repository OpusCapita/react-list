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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTGlzdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaGVhZGVySGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NyIsIkl0ZW1Db250YWluZXIiLCJSZXNwb25zaXZlTGlzdENvbnRhaW5lciIsImxpc3RDb250YWluZXJSZWYiLCJzZXRTdGF0ZSIsImxpc3RDb250YWluZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJkYXRhIiwiaW5kZXgiLCJzdGF0ZSIsImhlaWdodCIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlZnJlc2hFbGVtZW50SGVpZ2h0cyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsImlzQ29sdW1uSGVhZGVyVmlzaWJsZSIsImlzSGVhZGVyVmlzaWJsZSIsImNvbHVtbkhlYWRlckhlaWdodCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNoaWxkcmVuIiwiaWQiLCJjb2x1bW5zIiwiaXRlbUhlaWdodCIsInJlYWN0SW5maW5pdGVQcm9wcyIsInIiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwicmVuZGVySXRlbSIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDBCQUFPQyxHQUFWLG9CQUNQLFVBQUFDLEtBQUs7QUFBQSwwQkFBbUJBLEtBQUssQ0FBQ0MsWUFBekI7QUFBQSxDQURFLEVBR0csVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxLQUF2QjtBQUFBLENBSFIsQ0FBbkI7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RUFBRTJCLEVBRE47QUFFRSxNQUFBLE9BQU8sRUFBRUMsT0FGWDtBQUdFLE1BQUEsWUFBWSxFQUFFNUIsWUFIaEI7QUFJRSxNQUFBLEdBQUcsRUFBRSxhQUFDK0IsQ0FBRCxFQUFPO0FBQUUsUUFBQSxNQUFJLENBQUN6QixnQkFBTCxHQUF3QnlCLENBQXhCO0FBQTRCO0FBSjVDLE9BTUUsNkJBQUMsc0JBQUQ7QUFDRSxNQUFBLGVBQWUsRUFBRXZCLG1CQURuQjtBQUVFLE1BQUEsYUFBYSxFQUFFcUI7QUFGakIsT0FHTUMsa0JBSE4sR0FLSUUsZUFBTUMsUUFBTixDQUFlQyxHQUFmLENBQW1CUixRQUFuQixFQUE2QixLQUFLUyxVQUFMLEVBQTdCLENBTEosQ0FORixDQURGO0FBZ0JELEc7OztFQW5Ha0RILGVBQU1JLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEluZmluaXRlIGZyb20gJ3JlYWN0LWluZmluaXRlJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnZGVib3VuY2UnO1xuXG5jb25zdCBMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IGBjYWxjKDEwMCUgLSAke3Byb3BzLmhlYWRlckhlaWdodH1weClgfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk3fTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuYDtcblxuY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDBweDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zaXZlTGlzdENvbnRhaW5lciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gICAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG4gICAgY29sdW1uSGVhZGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaXNIZWFkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICByZWFjdEluZmluaXRlUHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSkuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIHJlZnMgZm9yIGRlbGl2ZXJpbmcgY29udGFpbmVyIGFuZCBpdGVtIGhlaWdodHMgdG8gaW5maW5pdGUgbGlzdFxuICAgIHRoaXMubGlzdENvbnRhaW5lclJlZiA9IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3RDb250YWluZXJIZWlnaHQ6IHByb3BzLmhlaWdodCA9PT0gJ2F1dG8nID8gNDAwIDogKHByb3BzLmhlaWdodCAtIDIpLCAvLyAycHggYm9yZGVyc1xuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5oZWlnaHQgPT09ICdhdXRvJykge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlKHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cyk7IC8vIGZvciBtb2JpbGUgc3VwcG9ydFxuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cygpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmIChcbiAgICAgIChwcmV2UHJvcHMuaXNDb2x1bW5IZWFkZXJWaXNpYmxlICE9PSB0aGlzLnByb3BzLmlzQ29sdW1uSGVhZGVyVmlzaWJsZSkgfHxcbiAgICAgIChwcmV2UHJvcHMuaXNIZWFkZXJWaXNpYmxlICE9PSB0aGlzLnByb3BzLmlzSGVhZGVyVmlzaWJsZSkgfHxcbiAgICAgIChwcmV2UHJvcHMuY29sdW1uSGVhZGVySGVpZ2h0ICE9PSB0aGlzLnByb3BzLmNvbHVtbkhlYWRlckhlaWdodCkgfHxcbiAgICAgIChwcmV2UHJvcHMuaGVpZ2h0ICE9PSB0aGlzLnByb3BzLmhlaWdodClcbiAgICApIHtcbiAgICAgIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaGVpZ2h0ID09PSAnYXV0bycpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZSh0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cykpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpOyAvLyBmb3IgbW9iaWxlIHN1cHBvcnRcbiAgICB9XG4gIH1cblxuICAvLyBSZWZyZXNoIGhlaWdodHMgZm9yIHRoZSBsaXN0XG4gIHJlZnJlc2hFbGVtZW50SGVpZ2h0cyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5saXN0Q29udGFpbmVyUmVmKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGlzdENvbnRhaW5lckhlaWdodDogdGhpcy5saXN0Q29udGFpbmVyUmVmLmNsaWVudEhlaWdodCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIExpc3QgaXRlbVxuICByZW5kZXJJdGVtID0gKCkgPT4gKGRhdGEsIGluZGV4KSA9PiAoXG4gICAgPEl0ZW1Db250YWluZXIga2V5PXtpbmRleH0+XG4gICAgICB7IGRhdGEgfVxuICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgKVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGlkLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICBjb2x1bW5IZWFkZXJIZWlnaHQsXG4gICAgICBpc0hlYWRlclZpc2libGUsXG4gICAgICBpc0NvbHVtbkhlYWRlclZpc2libGUsXG4gICAgICByZWFjdEluZmluaXRlUHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgbGlzdENvbnRhaW5lckhlaWdodCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgaGVhZGVySGVpZ2h0ID0gaXNDb2x1bW5IZWFkZXJWaXNpYmxlID8gY29sdW1uSGVhZGVySGVpZ2h0IDogMDtcbiAgICBpZiAoaXNIZWFkZXJWaXNpYmxlKSBoZWFkZXJIZWlnaHQgKz0gNDA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0Q29udGFpbmVyXG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgaGVhZGVySGVpZ2h0PXtoZWFkZXJIZWlnaHR9XG4gICAgICAgIHJlZj17KHIpID0+IHsgdGhpcy5saXN0Q29udGFpbmVyUmVmID0gcjsgfX1cbiAgICAgID5cbiAgICAgICAgPEluZmluaXRlXG4gICAgICAgICAgY29udGFpbmVySGVpZ2h0PXtsaXN0Q29udGFpbmVySGVpZ2h0fVxuICAgICAgICAgIGVsZW1lbnRIZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgICAgey4uLnJlYWN0SW5maW5pdGVQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckl0ZW0oKSkgfVxuICAgICAgICA8L0luZmluaXRlPlxuICAgICAgPC9MaXN0Q29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==