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
    if (prevProps.isColumnHeaderVisible !== this.props.isColumnHeaderVisible || prevProps.isHeaderVisible !== this.props.isHeaderVisible) {
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
        columns = _this$props.columns,
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
      columns: columns,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJJbmZpbml0ZSIsImRlYm91bmNlIiwiTGlzdENvbnRhaW5lciIsImRpdiIsInByb3BzIiwiaGVhZGVySGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NyIsIkl0ZW1Db250YWluZXIiLCJSZXNwb25zaXZlTGlzdENvbnRhaW5lciIsImxpc3RDb250YWluZXJSZWYiLCJzZXRTdGF0ZSIsImxpc3RDb250YWluZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJkYXRhIiwiaW5kZXgiLCJzdGF0ZSIsImhlaWdodCIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlZnJlc2hFbGVtZW50SGVpZ2h0cyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsImlzQ29sdW1uSGVhZGVyVmlzaWJsZSIsImlzSGVhZGVyVmlzaWJsZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNoaWxkcmVuIiwiaWQiLCJjb2x1bW5zIiwiaXRlbUhlaWdodCIsImNvbHVtbkhlYWRlckhlaWdodCIsInJlYWN0SW5maW5pdGVQcm9wcyIsInIiLCJDaGlsZHJlbiIsIm1hcCIsInJlbmRlckl0ZW0iLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixnQkFBckI7QUFDQSxTQUFTQyxRQUFULFFBQXlCLFVBQXpCO0FBRUEsSUFBTUMsYUFBYSxHQUFHSCxNQUFNLENBQUNJLEdB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LFlBQVksSUFBSSxFQUFoQjtBQUNyQixXQUNFLG9CQUFDLGFBQUQ7QUFDRSxNQUFBLEVBQUUsRUFBRTBCLEVBRE47QUFFRSxNQUFBLE9BQU8sRUFBRUMsT0FGWDtBQUdFLE1BQUEsWUFBWSxFQUFFM0IsWUFIaEI7QUFJRSxNQUFBLEdBQUcsRUFBRSxhQUFDK0IsQ0FBRCxFQUFPO0FBQUUsUUFBQSxNQUFJLENBQUN6QixnQkFBTCxHQUF3QnlCLENBQXhCO0FBQTRCO0FBSjVDLE9BTUUsb0JBQUMsUUFBRDtBQUNFLE1BQUEsZUFBZSxFQUFFdkIsbUJBRG5CO0FBRUUsTUFBQSxhQUFhLEVBQUVvQjtBQUZqQixPQUdNRSxrQkFITixHQUtJdEMsS0FBSyxDQUFDd0MsUUFBTixDQUFlQyxHQUFmLENBQW1CUixRQUFuQixFQUE2QixLQUFLUyxVQUFMLEVBQTdCLENBTEosQ0FORixDQURGO0FBZ0JELEc7OztFQWpHa0QxQyxLQUFLLENBQUMyQyxhOztTQUF0QzlCLHVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBJbmZpbml0ZSBmcm9tICdyZWFjdC1pbmZpbml0ZSc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2RlYm91bmNlJztcblxuY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogJHtwcm9wcyA9PiBgY2FsYygxMDAlIC0gJHtwcm9wcy5oZWFkZXJIZWlnaHR9cHgpYH07XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5N307XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbmA7XG5cbmNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAwcHg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2l2ZUxpc3RDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICAgIGl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGlzSGVhZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc0NvbHVtbkhlYWRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgcmVhY3RJbmZpbml0ZVByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvLyByZWZzIGZvciBkZWxpdmVyaW5nIGNvbnRhaW5lciBhbmQgaXRlbSBoZWlnaHRzIHRvIGluZmluaXRlIGxpc3RcbiAgICB0aGlzLmxpc3RDb250YWluZXJSZWYgPSBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaXN0Q29udGFpbmVySGVpZ2h0OiBwcm9wcy5oZWlnaHQgPT09ICdhdXRvJyA/IDQwMCA6IChwcm9wcy5oZWlnaHQgLSAyKSwgLy8gMnB4IGJvcmRlcnNcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaGVpZ2h0ID09PSAnYXV0bycpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZSh0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cykpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpOyAvLyBmb3IgbW9iaWxlIHN1cHBvcnRcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAoXG4gICAgICAocHJldlByb3BzLmlzQ29sdW1uSGVhZGVyVmlzaWJsZSAhPT0gdGhpcy5wcm9wcy5pc0NvbHVtbkhlYWRlclZpc2libGUpIHx8XG4gICAgICAocHJldlByb3BzLmlzSGVhZGVyVmlzaWJsZSAhPT0gdGhpcy5wcm9wcy5pc0hlYWRlclZpc2libGUpXG4gICAgKSB7XG4gICAgICB0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cygpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmhlaWdodCA9PT0gJ2F1dG8nKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UodGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKTsgLy8gZm9yIG1vYmlsZSBzdXBwb3J0XG4gICAgfVxuICB9XG5cbiAgLy8gUmVmcmVzaCBoZWlnaHRzIGZvciB0aGUgbGlzdFxuICByZWZyZXNoRWxlbWVudEhlaWdodHMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGlzdENvbnRhaW5lclJlZikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxpc3RDb250YWluZXJIZWlnaHQ6IHRoaXMubGlzdENvbnRhaW5lclJlZi5jbGllbnRIZWlnaHQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBMaXN0IGl0ZW1cbiAgcmVuZGVySXRlbSA9ICgpID0+IChkYXRhLCBpbmRleCkgPT4gKFxuICAgIDxJdGVtQ29udGFpbmVyIGtleT17aW5kZXh9PlxuICAgICAgeyBkYXRhIH1cbiAgICA8L0l0ZW1Db250YWluZXI+XG4gIClcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpZCxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgICAgY29sdW1uSGVhZGVySGVpZ2h0LFxuICAgICAgaXNIZWFkZXJWaXNpYmxlLFxuICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlLFxuICAgICAgcmVhY3RJbmZpbml0ZVByb3BzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGxpc3RDb250YWluZXJIZWlnaHQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGhlYWRlckhlaWdodCA9IGlzQ29sdW1uSGVhZGVyVmlzaWJsZSA/IGNvbHVtbkhlYWRlckhlaWdodCA6IDA7XG4gICAgaWYgKGlzSGVhZGVyVmlzaWJsZSkgaGVhZGVySGVpZ2h0ICs9IDQwO1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdENvbnRhaW5lclxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgIGhlYWRlckhlaWdodD17aGVhZGVySGVpZ2h0fVxuICAgICAgICByZWY9eyhyKSA9PiB7IHRoaXMubGlzdENvbnRhaW5lclJlZiA9IHI7IH19XG4gICAgICA+XG4gICAgICAgIDxJbmZpbml0ZVxuICAgICAgICAgIGNvbnRhaW5lckhlaWdodD17bGlzdENvbnRhaW5lckhlaWdodH1cbiAgICAgICAgICBlbGVtZW50SGVpZ2h0PXtpdGVtSGVpZ2h0fVxuICAgICAgICAgIHsuLi5yZWFjdEluZmluaXRlUHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJJdGVtKCkpIH1cbiAgICAgICAgPC9JbmZpbml0ZT5cbiAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iXX0=