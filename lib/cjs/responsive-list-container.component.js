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

var ListContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return "calc(100% - " + props.headerHeight + "px)";
}, function (props) {
  return props.theme.colors.grey7;
});

var ItemContainer = _styledComponents.default.div(_templateObject2(), function (props) {
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
    if (prevProps.isColumnHeaderVisible !== this.props.isColumnHeaderVisible || prevProps.isHeaderVisible !== this.props.isHeaderVisible) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNwb25zaXZlLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTGlzdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaGVhZGVySGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NyIsIkl0ZW1Db250YWluZXIiLCJncmV5NiIsIlJlc3BvbnNpdmVMaXN0Q29udGFpbmVyIiwibGlzdENvbnRhaW5lclJlZiIsInNldFN0YXRlIiwibGlzdENvbnRhaW5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImRhdGEiLCJpbmRleCIsInN0YXRlIiwiaGVpZ2h0IiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVmcmVzaEVsZW1lbnRIZWlnaHRzIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwiaXNDb2x1bW5IZWFkZXJWaXNpYmxlIiwiaXNIZWFkZXJWaXNpYmxlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJpZCIsImNvbHVtbnMiLCJpdGVtSGVpZ2h0IiwiY29sdW1uSGVhZGVySGVpZ2h0IiwicmVhY3RJbmZpbml0ZVByb3BzIiwiciIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJyZW5kZXJJdGVtIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBR0MsMEJBQU9DLEdBQVYsb0JBQ1AsVUFBQUMsS0FBSztBQUFBLDBCQUFtQkEsS0FBSyxDQUFDQyxZQUF6QjtBQUFBLENBREUsRUFHRyxVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLEtBQXZCO0FBQUEsQ0FI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QSxPQUFPLEVBQUVDLE9BRlg7QUFHRSxNQUFBLFlBQVksRUFBRTVCLFlBSGhCO0FBSUUsTUFBQSxHQUFHLEVBQUUsYUFBQ2dDLENBQUQsRUFBTztBQUFFLFFBQUEsTUFBSSxDQUFDekIsZ0JBQUwsR0FBd0J5QixDQUF4QjtBQUE0QjtBQUo1QyxPQU1FLDZCQUFDLHNCQUFEO0FBQ0UsTUFBQSxlQUFlLEVBQUV2QixtQkFEbkI7QUFFRSxNQUFBLGFBQWEsRUFBRW9CO0FBRmpCLE9BR01FLGtCQUhOLEdBS0lFLGVBQU1DLFFBQU4sQ0FBZUMsR0FBZixDQUFtQlQsUUFBbkIsRUFBNkIsS0FBS1UsVUFBTCxFQUE3QixDQUxKLENBTkYsQ0FERjtBQWdCRCxHOzs7RUFqR2tESCxlQUFNSSxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBJbmZpbml0ZSBmcm9tICdyZWFjdC1pbmZpbml0ZSc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2RlYm91bmNlJztcblxuY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogJHtwcm9wcyA9PiBgY2FsYygxMDAlIC0gJHtwcm9wcy5oZWFkZXJIZWlnaHR9cHgpYH07XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5N307XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbmA7XG5cbmNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAwcHg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk2fTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2l2ZUxpc3RDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICAgIGl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGlzSGVhZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc0NvbHVtbkhlYWRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgcmVhY3RJbmZpbml0ZVByb3BzOiBQcm9wVHlwZXMuc2hhcGUoe30pLmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvLyByZWZzIGZvciBkZWxpdmVyaW5nIGNvbnRhaW5lciBhbmQgaXRlbSBoZWlnaHRzIHRvIGluZmluaXRlIGxpc3RcbiAgICB0aGlzLmxpc3RDb250YWluZXJSZWYgPSBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaXN0Q29udGFpbmVySGVpZ2h0OiBwcm9wcy5oZWlnaHQgPT09ICdhdXRvJyA/IDQwMCA6IChwcm9wcy5oZWlnaHQgLSAyKSwgLy8gMnB4IGJvcmRlcnNcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaGVpZ2h0ID09PSAnYXV0bycpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZSh0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cykpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpOyAvLyBmb3IgbW9iaWxlIHN1cHBvcnRcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAoXG4gICAgICAocHJldlByb3BzLmlzQ29sdW1uSGVhZGVyVmlzaWJsZSAhPT0gdGhpcy5wcm9wcy5pc0NvbHVtbkhlYWRlclZpc2libGUpIHx8XG4gICAgICAocHJldlByb3BzLmlzSGVhZGVyVmlzaWJsZSAhPT0gdGhpcy5wcm9wcy5pc0hlYWRlclZpc2libGUpXG4gICAgKSB7XG4gICAgICB0aGlzLnJlZnJlc2hFbGVtZW50SGVpZ2h0cygpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmhlaWdodCA9PT0gJ2F1dG8nKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UodGhpcy5yZWZyZXNoRWxlbWVudEhlaWdodHMpKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMucmVmcmVzaEVsZW1lbnRIZWlnaHRzKTsgLy8gZm9yIG1vYmlsZSBzdXBwb3J0XG4gICAgfVxuICB9XG5cbiAgLy8gUmVmcmVzaCBoZWlnaHRzIGZvciB0aGUgbGlzdFxuICByZWZyZXNoRWxlbWVudEhlaWdodHMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMubGlzdENvbnRhaW5lclJlZikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxpc3RDb250YWluZXJIZWlnaHQ6IHRoaXMubGlzdENvbnRhaW5lclJlZi5jbGllbnRIZWlnaHQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBMaXN0IGl0ZW1cbiAgcmVuZGVySXRlbSA9ICgpID0+IChkYXRhLCBpbmRleCkgPT4gKFxuICAgIDxJdGVtQ29udGFpbmVyIGtleT17aW5kZXh9PlxuICAgICAgeyBkYXRhIH1cbiAgICA8L0l0ZW1Db250YWluZXI+XG4gIClcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpZCxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgICAgY29sdW1uSGVhZGVySGVpZ2h0LFxuICAgICAgaXNIZWFkZXJWaXNpYmxlLFxuICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlLFxuICAgICAgcmVhY3RJbmZpbml0ZVByb3BzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGxpc3RDb250YWluZXJIZWlnaHQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGhlYWRlckhlaWdodCA9IGlzQ29sdW1uSGVhZGVyVmlzaWJsZSA/IGNvbHVtbkhlYWRlckhlaWdodCA6IDA7XG4gICAgaWYgKGlzSGVhZGVyVmlzaWJsZSkgaGVhZGVySGVpZ2h0ICs9IDQwO1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdENvbnRhaW5lclxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgIGhlYWRlckhlaWdodD17aGVhZGVySGVpZ2h0fVxuICAgICAgICByZWY9eyhyKSA9PiB7IHRoaXMubGlzdENvbnRhaW5lclJlZiA9IHI7IH19XG4gICAgICA+XG4gICAgICAgIDxJbmZpbml0ZVxuICAgICAgICAgIGNvbnRhaW5lckhlaWdodD17bGlzdENvbnRhaW5lckhlaWdodH1cbiAgICAgICAgICBlbGVtZW50SGVpZ2h0PXtpdGVtSGVpZ2h0fVxuICAgICAgICAgIHsuLi5yZWFjdEluZmluaXRlUHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJJdGVtKCkpIH1cbiAgICAgICAgPC9JbmZpbml0ZT5cbiAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iXX0=