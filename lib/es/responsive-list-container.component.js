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

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Infinite from 'react-infinite';
import { debounce } from 'debounce';
var ListContainer = styled.div(_templateObject(), function (props) {
  return "calc(100% - " + props.headerHeight + "px)";
}, function (props) {
  return props.theme.colors.grey7;
});
var ItemContainer = styled.div(_templateObject2());

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
        return React.createElement(ItemContainer, {
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
      window.addEventListener('resize', debounce(this.refreshElementHeights));
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
      window.removeEventListener('resize', debounce(this.refreshElementHeights));
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
    return React.createElement(ListContainer, {
      id: id,
      headerHeight: headerHeight,
      ref: function ref(r) {
        _this2.listContainerRef = r;
      }
    }, React.createElement(Infinite, _extends({
      containerHeight: listContainerHeight,
      elementHeight: itemHeight
    }, reactInfiniteProps), React.Children.map(children, this.renderItem())));
  };

  return ResponsiveListContainer;
}(React.PureComponent);

export { ResponsiveListContainer as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJJbmZpbml0ZSIsImRlYm91bmNlIiwiTGlzdENvbnRhaW5lciIsImRpdiIsInByb3BzIiwiaGVhZGVySGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NyIsIkl0ZW1Db250YWluZXIiLCJSZXNwb25zaXZlTGlzdENvbnRhaW5lciIsImxpc3RDb250YWluZXJSZWYiLCJzZXRTdGF0ZSIsImxpc3RDb250YWluZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJkYXRhIiwiaW5kZXgiLCJzdGF0ZSIsImhlaWdodCIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlZnJlc2hFbGVtZW50SGVpZ2h0cyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsImlzQ29sdW1uSGVhZGVyVmlzaWJsZSIsImlzSGVhZGVyVmlzaWJsZSIsImNvbHVtbkhlYWRlckhlaWdodCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNoaWxkcmVuIiwiaWQiLCJpdGVtSGVpZ2h0IiwicmVhY3RJbmZpbml0ZVByb3BzIiwiciIsIkNoaWxkcmVuIiwibWFwIiwicmVuZGVySXRlbSIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGdCQUFyQjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsVUFBekI7QUFFQSxJQUFNQyxhQUFhLEdBQUdILE1BQU0sQ0FBQ0ksR0FBVixvQkFDUCxV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UixZQUFZLEdBQUdvQixxQkFBcUIsR0FBR0Usa0JBQUgsR0FBd0IsQ0FBaEU7QUFDQSxRQUFJRCxlQUFKLEVBQXFCckIsWUFBWSxJQUFJLEVBQWhCO0FBQ3JCLFdBQ0Usb0JBQUMsYUFBRDtBQUNFLE1BQUEsRUFBRSxFQUFFMkIsRUFETjtBQUVFLE1BQUEsWUFBWSxFQUFFM0IsWUFGaEI7QUFHRSxNQUFBLEdBQUcsRUFBRSxhQUFDOEIsQ0FBRCxFQUFPO0FBQUUsUUFBQSxNQUFJLENBQUN4QixnQkFBTCxHQUF3QndCLENBQXhCO0FBQTRCO0FBSDVDLE9BS0Usb0JBQUMsUUFBRDtBQUNFLE1BQUEsZUFBZSxFQUFFdEIsbUJBRG5CO0FBRUUsTUFBQSxhQUFhLEVBQUVvQjtBQUZqQixPQUdNQyxrQkFITixHQUtJckMsS0FBSyxDQUFDdUMsUUFBTixDQUFlQyxHQUFmLENBQW1CTixRQUFuQixFQUE2QixLQUFLTyxVQUFMLEVBQTdCLENBTEosQ0FMRixDQURGO0FBZUQsRzs7O0VBaEdrRHpDLEtBQUssQ0FBQzBDLGE7O1NBQXRDN0IsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEluZmluaXRlIGZyb20gJ3JlYWN0LWluZmluaXRlJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnZGVib3VuY2UnO1xuXG5jb25zdCBMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IGBjYWxjKDEwMCUgLSAke3Byb3BzLmhlYWRlckhlaWdodH1weClgfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk3fTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuYDtcblxuY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDBweDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zaXZlTGlzdENvbnRhaW5lciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gICAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGlzSGVhZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc0NvbHVtbkhlYWRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgcmVhY3RJbmZpbml0ZVByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvLyByZWZzIGZvciBkZWxpdmVyaW5nIGNvbnRhaW5lciBhbmQgaXRlbSBoZWlnaHRzIHRvIGluZmluaXRlIGxpc3RcbiAgICB0aGlzLmxpc3RDb250YWluZXJSZWYgPSBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaXN0Q29udGFpbmVySGVpZ2h0OiBwcm9wcy5oZWlnaHQgPT09ICdhdXRvJyA/IDQwMCA6IChwcm9wcy5oZWlnaHQgLSAyKSwgLy8gMnB4IGJvcmRlcnNcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaGVpZ2h0ID09PSAnYXV0bycpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZSh0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cykpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpOyAvLyBmb3IgbW9iaWxlIHN1cHBvcnRcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAoXG4gICAgICAocHJldlByb3BzLmlzQ29sdW1uSGVhZGVyVmlzaWJsZSAhPT0gdGhpcy5wcm9wcy5pc0NvbHVtbkhlYWRlclZpc2libGUpIHx8XG4gICAgICAocHJldlByb3BzLmlzSGVhZGVyVmlzaWJsZSAhPT0gdGhpcy5wcm9wcy5pc0hlYWRlclZpc2libGUpIHx8XG4gICAgICAocHJldlByb3BzLmNvbHVtbkhlYWRlckhlaWdodCAhPT0gdGhpcy5wcm9wcy5jb2x1bW5IZWFkZXJIZWlnaHQpIHx8XG4gICAgICAocHJldlByb3BzLmhlaWdodCAhPT0gdGhpcy5wcm9wcy5oZWlnaHQpXG4gICAgKSB7XG4gICAgICB0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cygpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmhlaWdodCA9PT0gJ2F1dG8nKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UodGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKTsgLy8gZm9yIG1vYmlsZSBzdXBwb3J0XG4gICAgfVxuICB9XG5cbiAgLy8gUmVmcmVzaCBoZWlnaHRzIGZvciB0aGUgbGlzdFxuICByZWZyZXNoRWxlbWVudEhlaWdodHMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGlzdENvbnRhaW5lclJlZikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxpc3RDb250YWluZXJIZWlnaHQ6IHRoaXMubGlzdENvbnRhaW5lclJlZi5jbGllbnRIZWlnaHQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBMaXN0IGl0ZW1cbiAgcmVuZGVySXRlbSA9ICgpID0+IChkYXRhLCBpbmRleCkgPT4gKFxuICAgIDxJdGVtQ29udGFpbmVyIGtleT17aW5kZXh9PlxuICAgICAgeyBkYXRhIH1cbiAgICA8L0l0ZW1Db250YWluZXI+XG4gIClcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpZCxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICBjb2x1bW5IZWFkZXJIZWlnaHQsXG4gICAgICBpc0hlYWRlclZpc2libGUsXG4gICAgICBpc0NvbHVtbkhlYWRlclZpc2libGUsXG4gICAgICByZWFjdEluZmluaXRlUHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgbGlzdENvbnRhaW5lckhlaWdodCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgaGVhZGVySGVpZ2h0ID0gaXNDb2x1bW5IZWFkZXJWaXNpYmxlID8gY29sdW1uSGVhZGVySGVpZ2h0IDogMDtcbiAgICBpZiAoaXNIZWFkZXJWaXNpYmxlKSBoZWFkZXJIZWlnaHQgKz0gNDA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0Q29udGFpbmVyXG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgaGVhZGVySGVpZ2h0PXtoZWFkZXJIZWlnaHR9XG4gICAgICAgIHJlZj17KHIpID0+IHsgdGhpcy5saXN0Q29udGFpbmVyUmVmID0gcjsgfX1cbiAgICAgID5cbiAgICAgICAgPEluZmluaXRlXG4gICAgICAgICAgY29udGFpbmVySGVpZ2h0PXtsaXN0Q29udGFpbmVySGVpZ2h0fVxuICAgICAgICAgIGVsZW1lbnRIZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgICAgey4uLnJlYWN0SW5maW5pdGVQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckl0ZW0oKSkgfVxuICAgICAgICA8L0luZmluaXRlPlxuICAgICAgPC9MaXN0Q29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==