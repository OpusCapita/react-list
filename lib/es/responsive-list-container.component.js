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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJJbmZpbml0ZSIsImRlYm91bmNlIiwiTGlzdENvbnRhaW5lciIsImRpdiIsInByb3BzIiwiaGVhZGVySGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NyIsIkl0ZW1Db250YWluZXIiLCJSZXNwb25zaXZlTGlzdENvbnRhaW5lciIsImxpc3RDb250YWluZXJSZWYiLCJzZXRTdGF0ZSIsImxpc3RDb250YWluZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJkYXRhIiwiaW5kZXgiLCJzdGF0ZSIsImhlaWdodCIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlZnJlc2hFbGVtZW50SGVpZ2h0cyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsImlzQ29sdW1uSGVhZGVyVmlzaWJsZSIsImlzSGVhZGVyVmlzaWJsZSIsImNvbHVtbkhlYWRlckhlaWdodCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNoaWxkcmVuIiwiaWQiLCJjb2x1bW5zIiwiaXRlbUhlaWdodCIsInJlYWN0SW5maW5pdGVQcm9wcyIsInIiLCJDaGlsZHJlbiIsIm1hcCIsInJlbmRlckl0ZW0iLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixnQkFBckI7QUFDQSxTQUFTQyxRQUFULFFBQXlCLFVBQXpCO0FBRUEsSUFBTUMsYUFBYSxHQUFHSCxNQUFNLENBQUNJLEdB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LEdBYUgsS0FBS0ksS0FiRixDQVlMSixtQkFaSztBQWNQLFFBQUlSLFlBQVksR0FBR29CLHFCQUFxQixHQUFHRSxrQkFBSCxHQUF3QixDQUFoRTtBQUNBLFFBQUlELGVBQUosRUFBcUJyQixZQUFZLElBQUksRUFBaEI7QUFDckIsV0FDRSxvQkFBQyxhQUFEO0FBQ0UsTUFBQSxFQUFFLEVBQUUyQixFQUROO0FBRUUsTUFBQSxPQUFPLEVBQUVDLE9BRlg7QUFHRSxNQUFBLFlBQVksRUFBRTVCLFlBSGhCO0FBSUUsTUFBQSxHQUFHLEVBQUUsYUFBQytCLENBQUQsRUFBTztBQUFFLFFBQUEsTUFBSSxDQUFDekIsZ0JBQUwsR0FBd0J5QixDQUF4QjtBQUE0QjtBQUo1QyxPQU1FLG9CQUFDLFFBQUQ7QUFDRSxNQUFBLGVBQWUsRUFBRXZCLG1CQURuQjtBQUVFLE1BQUEsYUFBYSxFQUFFcUI7QUFGakIsT0FHTUMsa0JBSE4sR0FLSXRDLEtBQUssQ0FBQ3dDLFFBQU4sQ0FBZUMsR0FBZixDQUFtQlAsUUFBbkIsRUFBNkIsS0FBS1EsVUFBTCxFQUE3QixDQUxKLENBTkYsQ0FERjtBQWdCRCxHOzs7RUFuR2tEMUMsS0FBSyxDQUFDMkMsYTs7U0FBdEM5Qix1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSW5maW5pdGUgZnJvbSAncmVhY3QtaW5maW5pdGUnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdkZWJvdW5jZSc7XG5cbmNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gYGNhbGMoMTAwJSAtICR7cHJvcHMuaGVhZGVySGVpZ2h0fXB4KWB9O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTd9O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG5gO1xuXG5jb25zdCBJdGVtQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMHB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgICBpdGVtSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcbiAgICBjb2x1bW5IZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBpc0hlYWRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHJlYWN0SW5maW5pdGVQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KS5pc1JlcXVpcmVkLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gcmVmcyBmb3IgZGVsaXZlcmluZyBjb250YWluZXIgYW5kIGl0ZW0gaGVpZ2h0cyB0byBpbmZpbml0ZSBsaXN0XG4gICAgdGhpcy5saXN0Q29udGFpbmVyUmVmID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlzdENvbnRhaW5lckhlaWdodDogcHJvcHMuaGVpZ2h0ID09PSAnYXV0bycgPyA0MDAgOiAocHJvcHMuaGVpZ2h0IC0gMiksIC8vIDJweCBib3JkZXJzXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmhlaWdodCA9PT0gJ2F1dG8nKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UodGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKTsgLy8gZm9yIG1vYmlsZSBzdXBwb3J0XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKFxuICAgICAgKHByZXZQcm9wcy5pc0NvbHVtbkhlYWRlclZpc2libGUgIT09IHRoaXMucHJvcHMuaXNDb2x1bW5IZWFkZXJWaXNpYmxlKSB8fFxuICAgICAgKHByZXZQcm9wcy5pc0hlYWRlclZpc2libGUgIT09IHRoaXMucHJvcHMuaXNIZWFkZXJWaXNpYmxlKSB8fFxuICAgICAgKHByZXZQcm9wcy5jb2x1bW5IZWFkZXJIZWlnaHQgIT09IHRoaXMucHJvcHMuY29sdW1uSGVhZGVySGVpZ2h0KSB8fFxuICAgICAgKHByZXZQcm9wcy5oZWlnaHQgIT09IHRoaXMucHJvcHMuaGVpZ2h0KVxuICAgICkge1xuICAgICAgdGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMoKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5oZWlnaHQgPT09ICdhdXRvJykge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlKHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cyk7IC8vIGZvciBtb2JpbGUgc3VwcG9ydFxuICAgIH1cbiAgfVxuXG4gIC8vIFJlZnJlc2ggaGVpZ2h0cyBmb3IgdGhlIGxpc3RcbiAgcmVmcmVzaEVsZW1lbnRIZWlnaHRzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmxpc3RDb250YWluZXJSZWYpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsaXN0Q29udGFpbmVySGVpZ2h0OiB0aGlzLmxpc3RDb250YWluZXJSZWYuY2xpZW50SGVpZ2h0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gTGlzdCBpdGVtXG4gIHJlbmRlckl0ZW0gPSAoKSA9PiAoZGF0YSwgaW5kZXgpID0+IChcbiAgICA8SXRlbUNvbnRhaW5lciBrZXk9e2luZGV4fT5cbiAgICAgIHsgZGF0YSB9XG4gICAgPC9JdGVtQ29udGFpbmVyPlxuICApXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaWQsXG4gICAgICBjb2x1bW5zLFxuICAgICAgaXRlbUhlaWdodCxcbiAgICAgIGNvbHVtbkhlYWRlckhlaWdodCxcbiAgICAgIGlzSGVhZGVyVmlzaWJsZSxcbiAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZSxcbiAgICAgIHJlYWN0SW5maW5pdGVQcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBsaXN0Q29udGFpbmVySGVpZ2h0LFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBoZWFkZXJIZWlnaHQgPSBpc0NvbHVtbkhlYWRlclZpc2libGUgPyBjb2x1bW5IZWFkZXJIZWlnaHQgOiAwO1xuICAgIGlmIChpc0hlYWRlclZpc2libGUpIGhlYWRlckhlaWdodCArPSA0MDtcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RDb250YWluZXJcbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICBoZWFkZXJIZWlnaHQ9e2hlYWRlckhlaWdodH1cbiAgICAgICAgcmVmPXsocikgPT4geyB0aGlzLmxpc3RDb250YWluZXJSZWYgPSByOyB9fVxuICAgICAgPlxuICAgICAgICA8SW5maW5pdGVcbiAgICAgICAgICBjb250YWluZXJIZWlnaHQ9e2xpc3RDb250YWluZXJIZWlnaHR9XG4gICAgICAgICAgZWxlbWVudEhlaWdodD17aXRlbUhlaWdodH1cbiAgICAgICAgICB7Li4ucmVhY3RJbmZpbml0ZVByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVySXRlbSgpKSB9XG4gICAgICAgIDwvSW5maW5pdGU+XG4gICAgICA8L0xpc3RDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuIl19