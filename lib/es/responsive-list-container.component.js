function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 0px;\n  min-width: 0;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n"]);

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
var ItemContainer = styled.div(_templateObject2());

var Item = function Item(_ref) {
  var value = _ref.value;
  return React.createElement(ItemContainer, null, value);
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
      reactInfiniteProps = _ref3.reactInfiniteProps;
  return React.createElement(Infinite, reactInfiniteProps, items.map(function (value, index) {
    return React.createElement(SortableItem, {
      key: "item-" + index // eslint-disable-line
      ,
      index: index,
      value: value
    });
  }));
});
SortableInfiniteList.propTypes = {
  items: PropTypes.array.isRequired,
  // eslint-disable-line
  reactInfiniteProps: PropTypes.shape({}).isRequired
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
      onSortEnd: onSortEnd
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJzb3J0YWJsZUNvbnRhaW5lciIsInNvcnRhYmxlRWxlbWVudCIsIkluZmluaXRlIiwiZGVib3VuY2UiLCJMaXN0Q29udGFpbmVyIiwiZGl2IiwicHJvcHMiLCJoZWFkZXJIZWlnaHQiLCJ0aGVtZSIsImNvbG9ycyIsImdyZXk3IiwiSXRlbUNvbnRhaW5lciIsIkl0ZW0iLCJ2YWx1ZSIsIkluZmluaXRlTGlzdCIsIml0ZW1zIiwicmVhY3RJbmZpbml0ZVByb3BzIiwibWFwIiwiaW5kZXgiLCJTb3J0YWJsZUl0ZW0iLCJTb3J0YWJsZUluZmluaXRlTGlzdCIsInByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsInNoYXBlIiwiUmVzcG9uc2l2ZUxpc3RDb250YWluZXIiLCJsaXN0Q29udGFpbmVyUmVmIiwic2V0U3RhdGUiLCJsaXN0Q29udGFpbmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3RhdGUiLCJoZWlnaHQiLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZWZyZXNoRWxlbWVudEhlaWdodHMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJpc0NvbHVtbkhlYWRlclZpc2libGUiLCJpc0hlYWRlclZpc2libGUiLCJjb2x1bW5IZWFkZXJIZWlnaHQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImlkIiwiaXRlbUhlaWdodCIsImlzU29ydGFibGUiLCJvblNvcnRFbmQiLCJsaXN0UHJvcHMiLCJjb250YWluZXJIZWlnaHQiLCJlbGVtZW50SGVpZ2h0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwiciIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7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NEIsQ0FBeEI7QUFBNEI7QUFINUMsT0FLSVAsVUFBVSxHQUNSLG9CQUFDLG9CQUFELGVBQTBCRSxTQUExQjtBQUFxQyxNQUFBLGFBQWE7QUFBbEQsT0FEUSxHQUVSLG9CQUFDLFlBQUQsRUFBa0JBLFNBQWxCLENBUE4sQ0FERjtBQVlELEc7OztFQTVHa0RwRCxLQUFLLENBQUMwRCxhOztTQUF0QzlCLHVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHNvcnRhYmxlQ29udGFpbmVyLCBzb3J0YWJsZUVsZW1lbnQgfSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xuaW1wb3J0IEluZmluaXRlIGZyb20gJ3JlYWN0LWluZmluaXRlJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnZGVib3VuY2UnO1xuXG5jb25zdCBMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IGBjYWxjKDEwMCUgLSAke3Byb3BzLmhlYWRlckhlaWdodH1weClgfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk3fTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtaW4taGVpZ2h0OiAwcHg7XG4gIG1pbi13aWR0aDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuYDtcblxuY29uc3QgSXRlbSA9ICh7IHZhbHVlIH0pID0+IDxJdGVtQ29udGFpbmVyPnt2YWx1ZX08L0l0ZW1Db250YWluZXI+O1xuSXRlbS5wcm9wVHlwZXMgPSB7XG4gIHZhbHVlOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgSW5maW5pdGVMaXN0ID0gKHsgaXRlbXMsIHJlYWN0SW5maW5pdGVQcm9wcyB9KSA9PiAoXG4gIDxJbmZpbml0ZSB7Li4ucmVhY3RJbmZpbml0ZVByb3BzfT5cbiAgICB7aXRlbXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcbiAgICAgIDxJdGVtXG4gICAgICAgIGtleT17YGl0ZW0tJHtpbmRleH1gfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgLz5cbiAgICApKX1cbiAgPC9JbmZpbml0ZT5cbik7XG5JbmZpbml0ZUxpc3QucHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgcmVhY3RJbmZpbml0ZVByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBTb3J0YWJsZUl0ZW0gPSBzb3J0YWJsZUVsZW1lbnQoSXRlbSk7XG5jb25zdCBTb3J0YWJsZUluZmluaXRlTGlzdCA9IHNvcnRhYmxlQ29udGFpbmVyKCh7IGl0ZW1zLCByZWFjdEluZmluaXRlUHJvcHMgfSkgPT4gKFxuICA8SW5maW5pdGUgey4uLnJlYWN0SW5maW5pdGVQcm9wc30+XG4gICAge2l0ZW1zLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICA8U29ydGFibGVJdGVtXG4gICAgICAgIGtleT17YGl0ZW0tJHtpbmRleH1gfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgLz5cbiAgICApKX1cbiAgPC9JbmZpbml0ZT5cbikpO1xuU29ydGFibGVJbmZpbml0ZUxpc3QucHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgcmVhY3RJbmZpbml0ZVByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zaXZlTGlzdENvbnRhaW5lciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gICAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGlzSGVhZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc0NvbHVtbkhlYWRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNTb3J0YWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICByZWFjdEluZmluaXRlUHJvcHM6IFByb3BUeXBlcy5zaGFwZSh7fSkuaXNSZXF1aXJlZCxcbiAgICBvblNvcnRFbmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvLyByZWZzIGZvciBkZWxpdmVyaW5nIGNvbnRhaW5lciBhbmQgaXRlbSBoZWlnaHRzIHRvIGluZmluaXRlIGxpc3RcbiAgICB0aGlzLmxpc3RDb250YWluZXJSZWYgPSBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaXN0Q29udGFpbmVySGVpZ2h0OiBwcm9wcy5oZWlnaHQgPT09ICdhdXRvJyA/IDQwMCA6IChwcm9wcy5oZWlnaHQgLSAyKSwgLy8gMnB4IGJvcmRlcnNcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBoZWlnaHQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGhlaWdodCA9PT0gJ2F1dG8nKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UodGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKTsgLy8gZm9yIG1vYmlsZSBzdXBwb3J0XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlLFxuICAgICAgaXNIZWFkZXJWaXNpYmxlLFxuICAgICAgY29sdW1uSGVhZGVySGVpZ2h0LFxuICAgICAgaGVpZ2h0LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChcbiAgICAgIChwcmV2UHJvcHMuaXNDb2x1bW5IZWFkZXJWaXNpYmxlICE9PSBpc0NvbHVtbkhlYWRlclZpc2libGUpXG4gICAgICB8fCAocHJldlByb3BzLmlzSGVhZGVyVmlzaWJsZSAhPT0gaXNIZWFkZXJWaXNpYmxlKVxuICAgICAgfHwgKHByZXZQcm9wcy5jb2x1bW5IZWFkZXJIZWlnaHQgIT09IGNvbHVtbkhlYWRlckhlaWdodClcbiAgICAgIHx8IChwcmV2UHJvcHMuaGVpZ2h0ICE9PSBoZWlnaHQpXG4gICAgKSB7XG4gICAgICB0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cygpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChoZWlnaHQgPT09ICdhdXRvJykge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlKHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cyk7IC8vIGZvciBtb2JpbGUgc3VwcG9ydFxuICAgIH1cbiAgfVxuXG4gIC8vIFJlZnJlc2ggaGVpZ2h0cyBmb3IgdGhlIGxpc3RcbiAgcmVmcmVzaEVsZW1lbnRIZWlnaHRzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmxpc3RDb250YWluZXJSZWYpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsaXN0Q29udGFpbmVySGVpZ2h0OiB0aGlzLmxpc3RDb250YWluZXJSZWYuY2xpZW50SGVpZ2h0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaWQsXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgICAgY29sdW1uSGVhZGVySGVpZ2h0LFxuICAgICAgaXNIZWFkZXJWaXNpYmxlLFxuICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlLFxuICAgICAgaXNTb3J0YWJsZSxcbiAgICAgIHJlYWN0SW5maW5pdGVQcm9wcyxcbiAgICAgIG9uU29ydEVuZCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBsaXN0Q29udGFpbmVySGVpZ2h0LFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGxpc3RQcm9wcyA9IHtcbiAgICAgIHJlYWN0SW5maW5pdGVQcm9wczoge1xuICAgICAgICBjb250YWluZXJIZWlnaHQ6IGxpc3RDb250YWluZXJIZWlnaHQsXG4gICAgICAgIGVsZW1lbnRIZWlnaHQ6IGl0ZW1IZWlnaHQsXG4gICAgICAgIC4uLnJlYWN0SW5maW5pdGVQcm9wcyxcbiAgICAgIH0sXG4gICAgICBpdGVtczogUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbiksXG4gICAgICBpc1NvcnRhYmxlLFxuICAgICAgb25Tb3J0RW5kLFxuICAgIH07XG4gICAgbGV0IGhlYWRlckhlaWdodCA9IGlzQ29sdW1uSGVhZGVyVmlzaWJsZSA/IGNvbHVtbkhlYWRlckhlaWdodCA6IDA7XG4gICAgaWYgKGlzSGVhZGVyVmlzaWJsZSkgaGVhZGVySGVpZ2h0ICs9IDQwO1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdENvbnRhaW5lclxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGhlYWRlckhlaWdodD17aGVhZGVySGVpZ2h0fVxuICAgICAgICByZWY9eyhyKSA9PiB7IHRoaXMubGlzdENvbnRhaW5lclJlZiA9IHI7IH19XG4gICAgICA+XG4gICAgICAgIHsgaXNTb3J0YWJsZVxuICAgICAgICAgID8gPFNvcnRhYmxlSW5maW5pdGVMaXN0IHsuLi5saXN0UHJvcHN9IHVzZURyYWdIYW5kbGUgLz5cbiAgICAgICAgICA6IDxJbmZpbml0ZUxpc3Qgey4uLmxpc3RQcm9wc30gLz5cbiAgICAgICAgfVxuICAgICAgPC9MaXN0Q29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==