function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import theme from './theme';
var ListContainer = styled.div(_templateObject(), function (props) {
  return "calc(100% - " + props.headerHeight + "px)";
}, theme.colors.grey7);
var ItemContainer = styled.div(_templateObject2(), theme.colors.grey6);

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
        showColumnHeader = _this$props.showColumnHeader,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "id", "columns", "itemHeight", "columnHeaderHeight", "showColumnHeader"]);

    var listContainerHeight = this.state.listContainerHeight;
    var headerHeight = showColumnHeader ? columnHeaderHeight : 0;
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
    }, props), React.Children.map(children, this.renderItem())));
  };

  return ResponsiveListContainer;
}(React.PureComponent);

export { ResponsiveListContainer as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJJbmZpbml0ZSIsImRlYm91bmNlIiwidGhlbWUiLCJMaXN0Q29udGFpbmVyIiwiZGl2IiwicHJvcHMiLCJoZWFkZXJIZWlnaHQiLCJjb2xvcnMiLCJncmV5NyIsIkl0ZW1Db250YWluZXIiLCJncmV5NiIsIlJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIiwibGlzdENvbnRhaW5lclJlZiIsInNldFN0YXRlIiwibGlzdENvbnRhaW5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImRhdGEiLCJpbmRleCIsInN0YXRlIiwiaGVpZ2h0IiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVmcmVzaEVsZW1lbnRIZWlnaHRzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJpZCIsImNvbHVtbnMiLCJpdGVtSGVpZ2h0IiwiY29sdW1uSGVhZGVySGVpZ2h0Iiwic2hvd0NvbHVtbkhlYWRlciIsInIiLCJDaGlsZHJlbiIsIm1hcCIsInJlbmRlckl0ZW0iLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGdCQUFyQjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsVUFBekI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLFNBQWxCO0FBRUEsSUFBTUMsYUFBYSxHQUFHSixNQUFNLENBQUNLLEdBQVYsb0JBQ1AsVUFBQUMsS0FBSztBQUFBLDBCQUFtQkEsS0FBSyxD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LFFBQU4sQ0FBZUMsR0FBZixDQUFtQlIsUUFBbkIsRUFBNkIsS0FBS1MsVUFBTCxFQUE3QixDQUxKLENBTkYsQ0FERjtBQWdCRCxHOzs7RUFwRmtEdkMsS0FBSyxDQUFDd0MsYTs7U0FBdEMxQix1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSW5maW5pdGUgZnJvbSAncmVhY3QtaW5maW5pdGUnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdkZWJvdW5jZSc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi90aGVtZSc7XG5cbmNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gYGNhbGMoMTAwJSAtICR7cHJvcHMuaGVhZGVySGVpZ2h0fXB4KWB9O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuZ3JleTd9O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG5gO1xuXG5jb25zdCBJdGVtQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMHB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ncmV5Nn07XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgICBpdGVtSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcbiAgICBjb2x1bW5IZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBzaG93Q29sdW1uSGVhZGVyOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gcmVmcyBmb3IgZGVsaXZlcmluZyBjb250YWluZXIgYW5kIGl0ZW0gaGVpZ2h0cyB0byBpbmZpbml0ZSBsaXN0XG4gICAgdGhpcy5saXN0Q29udGFpbmVyUmVmID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlzdENvbnRhaW5lckhlaWdodDogcHJvcHMuaGVpZ2h0ID09PSAnYXV0bycgPyA0MDAgOiAocHJvcHMuaGVpZ2h0IC0gMiksIC8vIDJweCBib3JkZXJzXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmhlaWdodCA9PT0gJ2F1dG8nKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UodGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKTsgLy8gZm9yIG1vYmlsZSBzdXBwb3J0XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5oZWlnaHQgPT09ICdhdXRvJykge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlKHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cyk7IC8vIGZvciBtb2JpbGUgc3VwcG9ydFxuICAgIH1cbiAgfVxuXG4gIC8vIFJlZnJlc2ggaGVpZ2h0cyBmb3IgdGhlIGxpc3RcbiAgcmVmcmVzaEVsZW1lbnRIZWlnaHRzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmxpc3RDb250YWluZXJSZWYpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsaXN0Q29udGFpbmVySGVpZ2h0OiB0aGlzLmxpc3RDb250YWluZXJSZWYuY2xpZW50SGVpZ2h0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gTGlzdCBpdGVtXG4gIHJlbmRlckl0ZW0gPSAoKSA9PiAoZGF0YSwgaW5kZXgpID0+IChcbiAgICA8SXRlbUNvbnRhaW5lciBrZXk9e2luZGV4fT5cbiAgICAgIHsgZGF0YSB9XG4gICAgPC9JdGVtQ29udGFpbmVyPlxuICApXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaWQsXG4gICAgICBjb2x1bW5zLFxuICAgICAgaXRlbUhlaWdodCxcbiAgICAgIGNvbHVtbkhlYWRlckhlaWdodCxcbiAgICAgIHNob3dDb2x1bW5IZWFkZXIsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGxpc3RDb250YWluZXJIZWlnaHQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gc2hvd0NvbHVtbkhlYWRlciA/IGNvbHVtbkhlYWRlckhlaWdodCA6IDA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0Q29udGFpbmVyXG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgaGVhZGVySGVpZ2h0PXtoZWFkZXJIZWlnaHR9XG4gICAgICAgIHJlZj17KHIpID0+IHsgdGhpcy5saXN0Q29udGFpbmVyUmVmID0gcjsgfX1cbiAgICAgID5cbiAgICAgICAgPEluZmluaXRlXG4gICAgICAgICAgY29udGFpbmVySGVpZ2h0PXtsaXN0Q29udGFpbmVySGVpZ2h0fVxuICAgICAgICAgIGVsZW1lbnRIZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVySXRlbSgpKSB9XG4gICAgICAgIDwvSW5maW5pdGU+XG4gICAgICA8L0xpc3RDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuIl19