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
    var height = this.props.height;

    if (height === 'auto') {
      window.addEventListener('resize', debounce(this.refreshElementHeights));
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
      window.removeEventListener('resize', debounce(this.refreshElementHeights));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJJbmZpbml0ZSIsImRlYm91bmNlIiwiTGlzdENvbnRhaW5lciIsImRpdiIsInByb3BzIiwiaGVhZGVySGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NyIsIkl0ZW1Db250YWluZXIiLCJSZXNwb25zaXZlTGlzdENvbnRhaW5lciIsImxpc3RDb250YWluZXJSZWYiLCJzZXRTdGF0ZSIsImxpc3RDb250YWluZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJkYXRhIiwiaW5kZXgiLCJzdGF0ZSIsImhlaWdodCIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlZnJlc2hFbGVtZW50SGVpZ2h0cyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsImlzQ29sdW1uSGVhZGVyVmlzaWJsZSIsImlzSGVhZGVyVmlzaWJsZSIsImNvbHVtbkhlYWRlckhlaWdodCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNoaWxkcmVuIiwiaWQiLCJpdGVtSGVpZ2h0IiwicmVhY3RJbmZpbml0ZVByb3BzIiwiciIsIkNoaWxkcmVuIiwibWFwIiwicmVuZGVySXRlbSIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGdCQUFyQjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsVUFBekI7QUFFQSxJQUFNQyxhQUFhLEdBQUdILE1BQU0sQ0FBQ0ksR0FBVixvQkFDUCxV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QUFBQSxRQU1MRCxlQU5LLGdCQU1MQSxlQU5LO0FBQUEsUUFPTEQscUJBUEssZ0JBT0xBLHFCQVBLO0FBQUEsUUFRTFMsa0JBUkssZ0JBUUxBLGtCQVJLO0FBQUEsUUFXTHJCLG1CQVhLLEdBWUgsS0FBS0ksS0FaRixDQVdMSixtQkFYSztBQWFQLFFBQUlSLFlBQVksR0FBR29CLHFCQUFxQixHQUFHRSxrQkFBSCxHQUF3QixDQUFoRTtBQUNBLFFBQUlELGVBQUosRUFBcUJyQixZQUFZLElBQUksRUFBaEI7QUFDckIsV0FDRSxvQkFBQyxhQUFEO0FBQ0UsTUFBQSxFQUFFLEVBQUUyQixFQUROO0FBRUUsTUFBQSxZQUFZLEVBQUUzQixZQUZoQjtBQUdFLE1BQUEsR0FBRyxFQUFFLGFBQUM4QixDQUFELEVBQU87QUFBRSxRQUFBLE1BQUksQ0FBQ3hCLGdCQUFMLEdBQXdCd0IsQ0FBeEI7QUFBNEI7QUFINUMsT0FLRSxvQkFBQyxRQUFEO0FBQ0UsTUFBQSxlQUFlLEVBQUV0QixtQkFEbkI7QUFFRSxNQUFBLGFBQWEsRUFBRW9CO0FBRmpCLE9BR01DLGtCQUhOLEdBS0lyQyxLQUFLLENBQUN1QyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJOLFFBQW5CLEVBQTZCLEtBQUtPLFVBQUwsRUFBN0IsQ0FMSixDQUxGLENBREY7QUFlRCxHOzs7RUF4R2tEekMsS0FBSyxDQUFDMEMsYTs7U0FBdEM3Qix1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSW5maW5pdGUgZnJvbSAncmVhY3QtaW5maW5pdGUnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdkZWJvdW5jZSc7XG5cbmNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gYGNhbGMoMTAwJSAtICR7cHJvcHMuaGVhZGVySGVpZ2h0fXB4KWB9O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTd9O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG5gO1xuXG5jb25zdCBJdGVtQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMHB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgICBpdGVtSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgY29sdW1uSGVhZGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaXNIZWFkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICByZWFjdEluZmluaXRlUHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSkuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIHJlZnMgZm9yIGRlbGl2ZXJpbmcgY29udGFpbmVyIGFuZCBpdGVtIGhlaWdodHMgdG8gaW5maW5pdGUgbGlzdFxuICAgIHRoaXMubGlzdENvbnRhaW5lclJlZiA9IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3RDb250YWluZXJIZWlnaHQ6IHByb3BzLmhlaWdodCA9PT0gJ2F1dG8nID8gNDAwIDogKHByb3BzLmhlaWdodCAtIDIpLCAvLyAycHggYm9yZGVyc1xuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGhlaWdodCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaGVpZ2h0ID09PSAnYXV0bycpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZSh0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cykpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpOyAvLyBmb3IgbW9iaWxlIHN1cHBvcnRcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc0NvbHVtbkhlYWRlclZpc2libGUsXG4gICAgICBpc0hlYWRlclZpc2libGUsXG4gICAgICBjb2x1bW5IZWFkZXJIZWlnaHQsXG4gICAgICBoZWlnaHQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKFxuICAgICAgKHByZXZQcm9wcy5pc0NvbHVtbkhlYWRlclZpc2libGUgIT09IGlzQ29sdW1uSGVhZGVyVmlzaWJsZSlcbiAgICAgIHx8IChwcmV2UHJvcHMuaXNIZWFkZXJWaXNpYmxlICE9PSBpc0hlYWRlclZpc2libGUpXG4gICAgICB8fCAocHJldlByb3BzLmNvbHVtbkhlYWRlckhlaWdodCAhPT0gY29sdW1uSGVhZGVySGVpZ2h0KVxuICAgICAgfHwgKHByZXZQcm9wcy5oZWlnaHQgIT09IGhlaWdodClcbiAgICApIHtcbiAgICAgIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBoZWlnaHQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGhlaWdodCA9PT0gJ2F1dG8nKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UodGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKTsgLy8gZm9yIG1vYmlsZSBzdXBwb3J0XG4gICAgfVxuICB9XG5cbiAgLy8gUmVmcmVzaCBoZWlnaHRzIGZvciB0aGUgbGlzdFxuICByZWZyZXNoRWxlbWVudEhlaWdodHMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGlzdENvbnRhaW5lclJlZikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxpc3RDb250YWluZXJIZWlnaHQ6IHRoaXMubGlzdENvbnRhaW5lclJlZi5jbGllbnRIZWlnaHQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBMaXN0IGl0ZW1cbiAgcmVuZGVySXRlbSA9ICgpID0+IChkYXRhLCBpbmRleCkgPT4gKFxuICAgIDxJdGVtQ29udGFpbmVyIGtleT17aW5kZXh9PlxuICAgICAgeyBkYXRhIH1cbiAgICA8L0l0ZW1Db250YWluZXI+XG4gIClcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpZCxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICBjb2x1bW5IZWFkZXJIZWlnaHQsXG4gICAgICBpc0hlYWRlclZpc2libGUsXG4gICAgICBpc0NvbHVtbkhlYWRlclZpc2libGUsXG4gICAgICByZWFjdEluZmluaXRlUHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgbGlzdENvbnRhaW5lckhlaWdodCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgaGVhZGVySGVpZ2h0ID0gaXNDb2x1bW5IZWFkZXJWaXNpYmxlID8gY29sdW1uSGVhZGVySGVpZ2h0IDogMDtcbiAgICBpZiAoaXNIZWFkZXJWaXNpYmxlKSBoZWFkZXJIZWlnaHQgKz0gNDA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0Q29udGFpbmVyXG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgaGVhZGVySGVpZ2h0PXtoZWFkZXJIZWlnaHR9XG4gICAgICAgIHJlZj17KHIpID0+IHsgdGhpcy5saXN0Q29udGFpbmVyUmVmID0gcjsgfX1cbiAgICAgID5cbiAgICAgICAgPEluZmluaXRlXG4gICAgICAgICAgY29udGFpbmVySGVpZ2h0PXtsaXN0Q29udGFpbmVySGVpZ2h0fVxuICAgICAgICAgIGVsZW1lbnRIZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgICAgey4uLnJlYWN0SW5maW5pdGVQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckl0ZW0oKSkgfVxuICAgICAgICA8L0luZmluaXRlPlxuICAgICAgPC9MaXN0Q29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==