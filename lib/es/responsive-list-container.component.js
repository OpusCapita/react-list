function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  flex-direction: column;\n  min-height: 0px;\n  min-width: 100%;\n  overflow: hidden;\n  border-bottom: 1px solid ", ";\n  padding: 0;\n  margin: 0;\n"]);

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
var ItemContainer = styled.div(_templateObject2(), function (props) {
  return props.theme.colors.grey6;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJJbmZpbml0ZSIsImRlYm91bmNlIiwiTGlzdENvbnRhaW5lciIsImRpdiIsInByb3BzIiwiaGVhZGVySGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NyIsIkl0ZW1Db250YWluZXIiLCJncmV5NiIsIlJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIiwibGlzdENvbnRhaW5lclJlZiIsInNldFN0YXRlIiwibGlzdENvbnRhaW5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImRhdGEiLCJpbmRleCIsInN0YXRlIiwiaGVpZ2h0IiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVmcmVzaEVsZW1lbnRIZWlnaHRzIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwiaXNDb2x1bW5IZWFkZXJWaXNpYmxlIiwiaXNIZWFkZXJWaXNpYmxlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJpZCIsImNvbHVtbnMiLCJpdGVtSGVpZ2h0IiwiY29sdW1uSGVhZGVySGVpZ2h0IiwicmVhY3RJbmZpbml0ZVByb3BzIiwiciIsIkNoaWxkcmVuIiwibWFwIiwicmVuZGVySXRlbSIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGdCQUFyQjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsVUFBekI7QUFFQSxJQUFNQyxhQUFhLEdBQUdILE1BQU0s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TEosbUJBWks7QUFjUCxRQUFJVCxZQUFZLEdBQUdxQixxQkFBcUIsR0FBR1Msa0JBQUgsR0FBd0IsQ0FBaEU7QUFDQSxRQUFJUixlQUFKLEVBQXFCdEIsWUFBWSxJQUFJLEVBQWhCO0FBQ3JCLFdBQ0Usb0JBQUMsYUFBRDtBQUNFLE1BQUEsRUFBRSxFQUFFMkIsRUFETjtBQUVFLE1BQUEsT0FBTyxFQUFFQyxPQUZYO0FBR0UsTUFBQSxZQUFZLEVBQUU1QixZQUhoQjtBQUlFLE1BQUEsR0FBRyxFQUFFLGFBQUNnQyxDQUFELEVBQU87QUFBRSxRQUFBLE1BQUksQ0FBQ3pCLGdCQUFMLEdBQXdCeUIsQ0FBeEI7QUFBNEI7QUFKNUMsT0FNRSxvQkFBQyxRQUFEO0FBQ0UsTUFBQSxlQUFlLEVBQUV2QixtQkFEbkI7QUFFRSxNQUFBLGFBQWEsRUFBRW9CO0FBRmpCLE9BR01FLGtCQUhOLEdBS0l2QyxLQUFLLENBQUN5QyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJSLFFBQW5CLEVBQTZCLEtBQUtTLFVBQUwsRUFBN0IsQ0FMSixDQU5GLENBREY7QUFnQkQsRzs7O0VBakdrRDNDLEtBQUssQ0FBQzRDLGE7O1NBQXRDOUIsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEluZmluaXRlIGZyb20gJ3JlYWN0LWluZmluaXRlJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnZGVib3VuY2UnO1xuXG5jb25zdCBMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IGBjYWxjKDEwMCUgLSAke3Byb3BzLmhlYWRlckhlaWdodH1weClgfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk3fTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuYDtcblxuY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDBweDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTZ9O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zaXZlTGlzdENvbnRhaW5lciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gICAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG4gICAgY29sdW1uSGVhZGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaXNIZWFkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICByZWFjdEluZmluaXRlUHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSkuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIHJlZnMgZm9yIGRlbGl2ZXJpbmcgY29udGFpbmVyIGFuZCBpdGVtIGhlaWdodHMgdG8gaW5maW5pdGUgbGlzdFxuICAgIHRoaXMubGlzdENvbnRhaW5lclJlZiA9IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3RDb250YWluZXJIZWlnaHQ6IHByb3BzLmhlaWdodCA9PT0gJ2F1dG8nID8gNDAwIDogKHByb3BzLmhlaWdodCAtIDIpLCAvLyAycHggYm9yZGVyc1xuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5oZWlnaHQgPT09ICdhdXRvJykge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlKHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cyk7IC8vIGZvciBtb2JpbGUgc3VwcG9ydFxuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cygpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmIChcbiAgICAgIChwcmV2UHJvcHMuaXNDb2x1bW5IZWFkZXJWaXNpYmxlICE9PSB0aGlzLnByb3BzLmlzQ29sdW1uSGVhZGVyVmlzaWJsZSkgfHxcbiAgICAgIChwcmV2UHJvcHMuaXNIZWFkZXJWaXNpYmxlICE9PSB0aGlzLnByb3BzLmlzSGVhZGVyVmlzaWJsZSlcbiAgICApIHtcbiAgICAgIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaGVpZ2h0ID09PSAnYXV0bycpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZSh0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cykpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpOyAvLyBmb3IgbW9iaWxlIHN1cHBvcnRcbiAgICB9XG4gIH1cblxuICAvLyBSZWZyZXNoIGhlaWdodHMgZm9yIHRoZSBsaXN0XG4gIHJlZnJlc2hFbGVtZW50SGVpZ2h0cyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5saXN0Q29udGFpbmVyUmVmKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGlzdENvbnRhaW5lckhlaWdodDogdGhpcy5saXN0Q29udGFpbmVyUmVmLmNsaWVudEhlaWdodCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIExpc3QgaXRlbVxuICByZW5kZXJJdGVtID0gKCkgPT4gKGRhdGEsIGluZGV4KSA9PiAoXG4gICAgPEl0ZW1Db250YWluZXIga2V5PXtpbmRleH0+XG4gICAgICB7IGRhdGEgfVxuICAgIDwvSXRlbUNvbnRhaW5lcj5cbiAgKVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGlkLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICBjb2x1bW5IZWFkZXJIZWlnaHQsXG4gICAgICBpc0hlYWRlclZpc2libGUsXG4gICAgICBpc0NvbHVtbkhlYWRlclZpc2libGUsXG4gICAgICByZWFjdEluZmluaXRlUHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgbGlzdENvbnRhaW5lckhlaWdodCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgaGVhZGVySGVpZ2h0ID0gaXNDb2x1bW5IZWFkZXJWaXNpYmxlID8gY29sdW1uSGVhZGVySGVpZ2h0IDogMDtcbiAgICBpZiAoaXNIZWFkZXJWaXNpYmxlKSBoZWFkZXJIZWlnaHQgKz0gNDA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0Q29udGFpbmVyXG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgaGVhZGVySGVpZ2h0PXtoZWFkZXJIZWlnaHR9XG4gICAgICAgIHJlZj17KHIpID0+IHsgdGhpcy5saXN0Q29udGFpbmVyUmVmID0gcjsgfX1cbiAgICAgID5cbiAgICAgICAgPEluZmluaXRlXG4gICAgICAgICAgY29udGFpbmVySGVpZ2h0PXtsaXN0Q29udGFpbmVySGVpZ2h0fVxuICAgICAgICAgIGVsZW1lbnRIZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgICAgey4uLnJlYWN0SW5maW5pdGVQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckl0ZW0oKSkgfVxuICAgICAgICA8L0luZmluaXRlPlxuICAgICAgPC9MaXN0Q29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==