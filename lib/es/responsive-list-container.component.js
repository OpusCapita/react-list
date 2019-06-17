function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 0px;\n  min-width: 0;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  z-index: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  height: ", ";\n  width: 100%;\n  border: 1px solid ", ";\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import Infinite from 'react-infinite';
import { debounce } from 'debounce';
var ListContainer = styled.div(_templateObject(), function (props) {
  return "calc(100% - " + props.headerHeight + "px)";
}, function (props) {
  return props.theme.colors.grey7;
});
var ItemContainer = styled.div(_templateObject2(), function (props) {
  return props.dragItemZindex;
});

var Item = function Item(_ref) {
  var value = _ref.value,
      dragItemZindex = _ref.dragItemZindex;
  return React.createElement(ItemContainer, {
    dragItemZindex: dragItemZindex
  }, value);
};

var InfiniteList = function InfiniteList(_ref2) {
  var items = _ref2.items,
      reactInfiniteProps = _ref2.reactInfiniteProps;
  return React.createElement(Infinite, reactInfiniteProps, items.map(function (value, index) {
    return React.createElement(Item, {
      key: "item-" + index // eslint-disable-line
      ,
      index: index,
      value: value
    });
  }));
};

var SortableItem = sortableElement(Item);
var SortableInfiniteList = sortableContainer(function (_ref3) {
  var items = _ref3.items,
      reactInfiniteProps = _ref3.reactInfiniteProps,
      dragItemZindex = _ref3.dragItemZindex;
  return React.createElement(Infinite, reactInfiniteProps, items.map(function (value, index) {
    return React.createElement(SortableItem, {
      key: "item-" + index // eslint-disable-line
      ,
      index: index,
      value: value,
      dragItemZindex: dragItemZindex
    });
  }));
});
SortableInfiniteList.propTypes = {
  items: PropTypes.array.isRequired,
  // eslint-disable-line
  reactInfiniteProps: PropTypes.shape({}).isRequired,
  dragItemZindex: PropTypes.number.isRequired
};

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
        dragItemZindex = _this$props2.dragItemZindex,
        isHeaderVisible = _this$props2.isHeaderVisible,
        isColumnHeaderVisible = _this$props2.isColumnHeaderVisible,
        isSortable = _this$props2.isSortable,
        reactInfiniteProps = _this$props2.reactInfiniteProps,
        onSortEnd = _this$props2.onSortEnd;
    var listContainerHeight = this.state.listContainerHeight;
    var listProps = {
      reactInfiniteProps: _extends({
        containerHeight: listContainerHeight,
        elementHeight: itemHeight
      }, reactInfiniteProps),
      items: React.Children.toArray(children),
      isSortable: isSortable,
      onSortEnd: onSortEnd,
      dragItemZindex: dragItemZindex
    };
    var headerHeight = isColumnHeaderVisible ? columnHeaderHeight : 0;
    if (isHeaderVisible) headerHeight += 40;
    return React.createElement(ListContainer, {
      id: id,
      headerHeight: headerHeight,
      ref: function ref(r) {
        _this2.listContainerRef = r;
      }
    }, isSortable ? React.createElement(SortableInfiniteList, _extends({}, listProps, {
      useDragHandle: true
    })) : React.createElement(InfiniteList, listProps));
  };

  return ResponsiveListContainer;
}(React.PureComponent);

export { ResponsiveListContainer as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJzb3J0YWJsZUNvbnRhaW5lciIsInNvcnRhYmxlRWxlbWVudCIsIkluZmluaXRlIiwiZGVib3VuY2UiLCJMaXN0Q29udGFpbmVyIiwiZGl2IiwicHJvcHMiLCJoZWFkZXJIZWlnaHQiLCJ0aGVtZSIsImNvbG9ycyIsImdyZXk3IiwiSXRlbUNvbnRhaW5lciIsImRyYWdJdGVtWmluZGV4IiwiSXRlbSIsInZhbHVlIiwiSW5maW5pdGVMaXN0IiwiaXRlbXMiLCJyZWFjdEluZmluaXRlUHJvcHMiLCJtYXAiLCJpbmRleCIsIlNvcnRhYmxlSXRlbSIsIlNvcnRhYmxlSW5maW5pdGVMaXN0IiwicHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJudW1iZXIiLCJSZXNwb25zaXZlTGlzdENvbnRhaW5lciIsImxpc3RDb250YWluZXJSZWYiLCJzZXRTdGF0ZSIsImxpc3RDb250YWluZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzdGF0ZSIsImhlaWdodCIsImNvbXBvbmVudERpZE1vdW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlZnJlc2hFbGVtZW50SGVpZ2h0cyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsImlzQ29sdW1uSGVhZGVyVmlzaWJsZSIsImlzSGVhZGVyVmlzaWJsZSIsImNvbHVtbkhlYWRlckhlaWdodCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImNoaWxkcmVuIiwiaWQiLCJpdGVtSGVpZ2h0IiwiaXNTb3J0YWJsZSIsIm9uU29ydEVuZCIsImxpc3RQcm9wcyIsImNvbnRhaW5lckhlaWdodCIsImVsZW1lbnRIZWlnaHQiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJyIiwiUHVy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UWhCQyxNQUFBQSxTQUFTLEVBQVRBLFNBUmdCO0FBU2hCdEMsTUFBQUEsY0FBYyxFQUFkQTtBQVRnQixLQUFsQjtBQVdBLFFBQUlMLFlBQVksR0FBR2lDLHFCQUFxQixHQUFHRSxrQkFBSCxHQUF3QixDQUFoRTtBQUNBLFFBQUlELGVBQUosRUFBcUJsQyxZQUFZLElBQUksRUFBaEI7QUFDckIsV0FDRSxvQkFBQyxhQUFEO0FBQ0UsTUFBQSxFQUFFLEVBQUV3QyxFQUROO0FBRUUsTUFBQSxZQUFZLEVBQUV4QyxZQUZoQjtBQUdFLE1BQUEsR0FBRyxFQUFFLGFBQUNpRCxDQUFELEVBQU87QUFBRSxRQUFBLE1BQUksQ0FBQzVCLGdCQUFMLEdBQXdCNEIsQ0FBeEI7QUFBNEI7QUFINUMsT0FLSVAsVUFBVSxHQUNSLG9CQUFDLG9CQUFELGVBQTBCRSxTQUExQjtBQUFxQyxNQUFBLGFBQWE7QUFBbEQsT0FEUSxHQUVSLG9CQUFDLFlBQUQsRUFBa0JBLFNBQWxCLENBUE4sQ0FERjtBQVlELEc7OztFQS9Ha0R0RCxLQUFLLENBQUM0RCxhOztTQUF0QzlCLHVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHNvcnRhYmxlQ29udGFpbmVyLCBzb3J0YWJsZUVsZW1lbnQgfSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xuaW1wb3J0IEluZmluaXRlIGZyb20gJ3JlYWN0LWluZmluaXRlJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnZGVib3VuY2UnO1xuXG5jb25zdCBMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IGBjYWxjKDEwMCUgLSAke3Byb3BzLmhlYWRlckhlaWdodH1weClgfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk3fTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtaW4taGVpZ2h0OiAwcHg7XG4gIG1pbi13aWR0aDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICB6LWluZGV4OiAke3Byb3BzID0+IHByb3BzLmRyYWdJdGVtWmluZGV4fTtcbmA7XG5cbmNvbnN0IEl0ZW0gPSAoe1xuICB2YWx1ZSxcbiAgZHJhZ0l0ZW1aaW5kZXgsXG59KSA9PiA8SXRlbUNvbnRhaW5lciBkcmFnSXRlbVppbmRleD17ZHJhZ0l0ZW1aaW5kZXh9Pnt2YWx1ZX08L0l0ZW1Db250YWluZXI+O1xuSXRlbS5wcm9wVHlwZXMgPSB7XG4gIHZhbHVlOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBkcmFnSXRlbVppbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgSW5maW5pdGVMaXN0ID0gKHsgaXRlbXMsIHJlYWN0SW5maW5pdGVQcm9wcyB9KSA9PiAoXG4gIDxJbmZpbml0ZSB7Li4ucmVhY3RJbmZpbml0ZVByb3BzfT5cbiAgICB7aXRlbXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcbiAgICAgIDxJdGVtXG4gICAgICAgIGtleT17YGl0ZW0tJHtpbmRleH1gfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgLz5cbiAgICApKX1cbiAgPC9JbmZpbml0ZT5cbik7XG5JbmZpbml0ZUxpc3QucHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgcmVhY3RJbmZpbml0ZVByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBTb3J0YWJsZUl0ZW0gPSBzb3J0YWJsZUVsZW1lbnQoSXRlbSk7XG5jb25zdCBTb3J0YWJsZUluZmluaXRlTGlzdCA9IHNvcnRhYmxlQ29udGFpbmVyKCh7IGl0ZW1zLCByZWFjdEluZmluaXRlUHJvcHMsIGRyYWdJdGVtWmluZGV4IH0pID0+IChcbiAgPEluZmluaXRlIHsuLi5yZWFjdEluZmluaXRlUHJvcHN9PlxuICAgIHtpdGVtcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxuICAgICAgPFNvcnRhYmxlSXRlbVxuICAgICAgICBrZXk9e2BpdGVtLSR7aW5kZXh9YH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgZHJhZ0l0ZW1aaW5kZXg9e2RyYWdJdGVtWmluZGV4fVxuICAgICAgLz5cbiAgICApKX1cbiAgPC9JbmZpbml0ZT5cbikpO1xuU29ydGFibGVJbmZpbml0ZUxpc3QucHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgcmVhY3RJbmZpbml0ZVByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLmlzUmVxdWlyZWQsXG4gIGRyYWdJdGVtWmluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zaXZlTGlzdENvbnRhaW5lciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gICAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGRyYWdJdGVtWmluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaXNIZWFkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc1NvcnRhYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHJlYWN0SW5maW5pdGVQcm9wczogUHJvcFR5cGVzLnNoYXBlKHt9KS5pc1JlcXVpcmVkLFxuICAgIG9uU29ydEVuZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIHJlZnMgZm9yIGRlbGl2ZXJpbmcgY29udGFpbmVyIGFuZCBpdGVtIGhlaWdodHMgdG8gaW5maW5pdGUgbGlzdFxuICAgIHRoaXMubGlzdENvbnRhaW5lclJlZiA9IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3RDb250YWluZXJIZWlnaHQ6IHByb3BzLmhlaWdodCA9PT0gJ2F1dG8nID8gNDAwIDogKHByb3BzLmhlaWdodCAtIDIpLCAvLyAycHggYm9yZGVyc1xuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGhlaWdodCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaGVpZ2h0ID09PSAnYXV0bycpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZSh0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cykpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpOyAvLyBmb3IgbW9iaWxlIHN1cHBvcnRcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc0NvbHVtbkhlYWRlclZpc2libGUsXG4gICAgICBpc0hlYWRlclZpc2libGUsXG4gICAgICBjb2x1bW5IZWFkZXJIZWlnaHQsXG4gICAgICBoZWlnaHQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKFxuICAgICAgKHByZXZQcm9wcy5pc0NvbHVtbkhlYWRlclZpc2libGUgIT09IGlzQ29sdW1uSGVhZGVyVmlzaWJsZSlcbiAgICAgIHx8IChwcmV2UHJvcHMuaXNIZWFkZXJWaXNpYmxlICE9PSBpc0hlYWRlclZpc2libGUpXG4gICAgICB8fCAocHJldlByb3BzLmNvbHVtbkhlYWRlckhlaWdodCAhPT0gY29sdW1uSGVhZGVySGVpZ2h0KVxuICAgICAgfHwgKHByZXZQcm9wcy5oZWlnaHQgIT09IGhlaWdodClcbiAgICApIHtcbiAgICAgIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBoZWlnaHQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGhlaWdodCA9PT0gJ2F1dG8nKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UodGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKTsgLy8gZm9yIG1vYmlsZSBzdXBwb3J0XG4gICAgfVxuICB9XG5cbiAgLy8gUmVmcmVzaCBoZWlnaHRzIGZvciB0aGUgbGlzdFxuICByZWZyZXNoRWxlbWVudEhlaWdodHMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGlzdENvbnRhaW5lclJlZikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxpc3RDb250YWluZXJIZWlnaHQ6IHRoaXMubGlzdENvbnRhaW5lclJlZi5jbGllbnRIZWlnaHQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpZCxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICBjb2x1bW5IZWFkZXJIZWlnaHQsXG4gICAgICBkcmFnSXRlbVppbmRleCxcbiAgICAgIGlzSGVhZGVyVmlzaWJsZSxcbiAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZSxcbiAgICAgIGlzU29ydGFibGUsXG4gICAgICByZWFjdEluZmluaXRlUHJvcHMsXG4gICAgICBvblNvcnRFbmQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgbGlzdENvbnRhaW5lckhlaWdodCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBsaXN0UHJvcHMgPSB7XG4gICAgICByZWFjdEluZmluaXRlUHJvcHM6IHtcbiAgICAgICAgY29udGFpbmVySGVpZ2h0OiBsaXN0Q29udGFpbmVySGVpZ2h0LFxuICAgICAgICBlbGVtZW50SGVpZ2h0OiBpdGVtSGVpZ2h0LFxuICAgICAgICAuLi5yZWFjdEluZmluaXRlUHJvcHMsXG4gICAgICB9LFxuICAgICAgaXRlbXM6IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLFxuICAgICAgaXNTb3J0YWJsZSxcbiAgICAgIG9uU29ydEVuZCxcbiAgICAgIGRyYWdJdGVtWmluZGV4LFxuICAgIH07XG4gICAgbGV0IGhlYWRlckhlaWdodCA9IGlzQ29sdW1uSGVhZGVyVmlzaWJsZSA/IGNvbHVtbkhlYWRlckhlaWdodCA6IDA7XG4gICAgaWYgKGlzSGVhZGVyVmlzaWJsZSkgaGVhZGVySGVpZ2h0ICs9IDQwO1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdENvbnRhaW5lclxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGhlYWRlckhlaWdodD17aGVhZGVySGVpZ2h0fVxuICAgICAgICByZWY9eyhyKSA9PiB7IHRoaXMubGlzdENvbnRhaW5lclJlZiA9IHI7IH19XG4gICAgICA+XG4gICAgICAgIHsgaXNTb3J0YWJsZVxuICAgICAgICAgID8gPFNvcnRhYmxlSW5maW5pdGVMaXN0IHsuLi5saXN0UHJvcHN9IHVzZURyYWdIYW5kbGUgLz5cbiAgICAgICAgICA6IDxJbmZpbml0ZUxpc3Qgey4uLmxpc3RQcm9wc30gLz5cbiAgICAgICAgfVxuICAgICAgPC9MaXN0Q29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==