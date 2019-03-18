"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactCheckbox = _interopRequireDefault(require("@opuscapita/react-checkbox"));

var _reactSearchbar = _interopRequireDefault(require("@opuscapita/react-searchbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  && .icon {\n    width: auto;\n    user-select: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1 1 auto;\n  min-height: 0px;\n  min-width: 0px;\n  overflow: hidden;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 0 0 auto;\n  min-height: 40px;\n  width: auto;\n  padding-top: 5px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  height: 40px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var HeaderContainer = _styledComponents.default.div(_templateObject());

var CheckboxContainer = _styledComponents.default.div(_templateObject2());

var SearchContainer = _styledComponents.default.div(_templateObject3());

var StyledCheckbox = (0, _styledComponents.default)(_reactCheckbox.default)(_templateObject4());

var Header =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Header, _React$PureComponent);

  function Header() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "renderSelectAll", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          isAllSelected = _this$props.isAllSelected,
          onSelectAllChange = _this$props.onSelectAllChange,
          translations = _this$props.translations;
      return _react.default.createElement(CheckboxContainer, {
        style: {
          paddingRight: '10px'
        }
      }, _react.default.createElement(StyledCheckbox, {
        id: id + "-selectall",
        checked: isAllSelected,
        onChange: onSelectAllChange,
        label: translations.selectAll
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderSearch", function () {
      var _this$props2 = _this.props,
          id = _this$props2.id,
          searchKeyword = _this$props2.searchKeyword,
          onSearchChange = _this$props2.onSearchChange,
          translations = _this$props2.translations;
      return _react.default.createElement(_reactSearchbar.default, {
        id: id + "-selectall",
        value: searchKeyword,
        onSearch: onSearchChange,
        dynamicSearchStartsFrom: 1,
        searchPlaceHolder: translations.search + "...",
        tooltipDelay: 500000
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderShowOnlySelected", function () {
      var _this$props3 = _this.props,
          id = _this$props3.id,
          isShowOnlySelected = _this$props3.isShowOnlySelected,
          onShowOnlySelectedChange = _this$props3.onShowOnlySelectedChange,
          translations = _this$props3.translations;
      return _react.default.createElement(CheckboxContainer, {
        style: {
          paddingLeft: '10px'
        }
      }, _react.default.createElement(StyledCheckbox, {
        id: id + "-showonlyselected",
        checked: isShowOnlySelected,
        onChange: onShowOnlySelectedChange,
        label: translations.showOnlySelected
      }));
    });

    return _this;
  }

  var _proto = Header.prototype;

  _proto.render = function render() {
    var _this$props4 = this.props,
        id = _this$props4.id,
        isSearchable = _this$props4.isSearchable,
        isSelectAllVisible = _this$props4.isSelectAllVisible,
        isShowOnlySelectedVisible = _this$props4.isShowOnlySelectedVisible,
        isColumnHeaderVisible = _this$props4.isColumnHeaderVisible;
    return _react.default.createElement(HeaderContainer, {
      id: id
    }, !isColumnHeaderVisible && isSelectAllVisible && this.renderSelectAll(), _react.default.createElement(SearchContainer, null, isSearchable && this.renderSearch()), isShowOnlySelectedVisible && this.renderShowOnlySelected());
  };

  return Header;
}(_react.default.PureComponent);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFkZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJIZWFkZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJDaGVja2JveENvbnRhaW5lciIsIlNlYXJjaENvbnRhaW5lciIsIlN0eWxlZENoZWNrYm94IiwiQ2hlY2tib3giLCJIZWFkZXIiLCJwcm9wcyIsImlkIiwiaXNBbGxTZWxlY3RlZCIsIm9uU2VsZWN0QWxsQ2hhbmdlIiwidHJhbnNsYXRpb25zIiwicGFkZGluZ1JpZ2h0Iiwic2VsZWN0QWxsIiwic2VhcmNoS2V5d29yZCIsIm9uU2VhcmNoQ2hhbmdlIiwic2VhcmNoIiwiaXNTaG93T25seVNlbGVjdGVkIiwib25TaG93T25seVNlbGVjdGVkQ2hhbmdlIiwicGFkZGluZ0xlZnQiLCJzaG93T25seVNlbGVjdGVkIiwicmVuZGVyIiwiaXNTZWFyY2hhYmxlIiwiaXNTZWxlY3RBbGxWaXNpYmxlIiwiaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZSIsImlzQ29sdW1uSGVhZGVyVmlzaWJsZSIsInJlbmRlclNlbGVjdEFsbCIsInJlbmRlclNlYXJjaCIsInJlbmRlclNob3dPbmx5U2VsZWN0ZWQiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLDBCQUFPQyxHQUFWLG1CQUFyQjs7QUFLQSxJQUFNQyxpQkFBaUIsR0FBR0YsMEJBQU9DLEdBQVYsb0JBQXZCOztBQU9BLElBQU1FLGVBQWUsR0FBR0gsMEJBQU9DLEdBQVYsb0JBQXJCOztBQU9BLElBQU1HLGNBQWMsR0FBRywrQkFBT0Msc0JBQVAsQ0FBSCxvQkFBcEI7O0lBT3FCQyxNOzs7Ozs7Ozs7Ozs7OztzRUFvQkQsWUFBTTtBQUFBLHdCQU1sQixNQUFLQyxLQU5hO0FBQUEsVUFFcEJDLEVBRm9CLGVBRXBCQSxFQUZvQjtBQUFBLFVBR3BCQyxhQUhvQixlQUdwQkEsYUFIb0I7QUFBQSxVQUlwQkMsaUJBSm9CLGVBSXBCQSxpQkFKb0I7QUFBQSxVQUtwQkMsWUFMb0IsZUFLcEJBLFlBTG9CO0FBT3RCLGFBQ0UsNkJBQUMsaUJBQUQ7QUFBbUIsUUFBQSxLQUFLLEVBQUU7QUFBRUMsVUFBQUEsWUFBWSxFQUFFO0FBQWhCO0FBQTFCLFNBQ0UsNkJBQUMsY0FBRDtBQUNFLFFBQUEsRUFBRSxFQUFLSixFQUFMLGVBREo7QUFFRSxRQUFBLE9BQU8sRUFBRUMsYUFGWDtBQUdFLFFBQUEsUUFBUSxFQUFFQyxpQkFIWjtBQUlFLFFBQUEsS0FBSyxFQUFFQyxZQUFZLENBQUNFO0FBSnRCLFFBREYsQ0FERjtBQVVELEs7O21FQUVjLFlBQU07QUFBQSx5QkFNZixNQUFLTixLQU5VO0FBQUEsVUFFakJDLEVBRmlCLGdCQUVqQkEsRUFGaUI7QUFBQSxVQUdqQk0sYUFIaUIsZ0JBR2pCQSxhQUhpQjtBQUFBLFVBSWpCQyxjQUppQixnQkFJakJBLGNBSmlCO0FBQUEsVUFLakJKLFlBTGlCLGdCQUtqQkEsWUFMaUI7QUFPbkIsYUFDRSw2QkFBQyx1QkFBRDtBQUNFLFFBQUEsRUFBRSxFQUFLSCxFQUFMLGVBREo7QUFFRSxRQUFBLEtBQUssRUFBRU0sYUFGVDtBQUdFLFFBQUEsUUFBUSxFQUFFQyxjQUhaO0FBSUUsUUFBQSx1QkFBdUIsRUFBRSxDQUozQjtBQUtFLFFBQUEsaUJBQWlCLEVBQUtKLFlBQVksQ0FBQ0ssTUFBbEIsUUFMbkI7QUFNRSxRQUFBLFlBQVksRUFBRTtBQU5oQixRQURGO0FBVUQsSzs7NkVBRXdCLFlBQU07QUFBQSx5QkFNekIsTUFBS1QsS0FOb0I7QUFBQSxVQUUzQkMsRUFGMkIsZ0JBRTNCQSxFQUYyQjtBQUFBLFVBRzNCUyxrQkFIMkIsZ0JBRzNCQSxrQkFIMkI7QUFBQSxVQUkzQkMsd0JBSjJCLGdCQUkzQkEsd0JBSjJCO0FBQUEsVUFLM0JQLFlBTDJCLGdCQUszQkEsWUFMMkI7QUFPN0IsYUFDRSw2QkFBQyxpQkFBRDtBQUFtQixRQUFBLEtBQUssRUFBRTtBQUFFUSxVQUFBQSxXQUFXLEVBQUU7QUFBZjtBQUExQixTQUNFLDZCQUFDLGNBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBS1gsRUFBTCxzQkFESjtBQUVFLFFBQUEsT0FBTyxFQUFFUyxrQkFGWDtBQUdFLFFBQUEsUUFBUSxFQUFFQyx3QkFIWjtBQUlFLFFBQUEsS0FBSyxFQUFFUCxZQUFZLENBQUNTO0FBSnRCLFFBREYsQ0FERjtBQVVELEs7Ozs7Ozs7U0FFREMsTSxHQUFBLGtCQUFTO0FBQUEsdUJBT0gsS0FBS2QsS0FQRjtBQUFBLFFBRUxDLEVBRkssZ0JBRUxBLEVBRks7QUFBQSxRQUdMYyxZQUhLLGdCQUdMQSxZQUhLO0FBQUEsUUFJTEMsa0JBSkssZ0JBSUxBLGtCQUpLO0FBQUEsUUFLTEMseUJBTEssZ0JBS0xBLHlCQUxLO0FBQUEsUUFNTEMscUJBTkssZ0JBTUxBLHFCQU5LO0FBUVAsV0FDRSw2QkFBQyxlQUFEO0FBQ0UsTUFBQSxFQUFFLEVBQUVqQjtBQUROLE9BR0csQ0FBQ2lCLHFCQUFELElBQTBCRixrQkFBMUIsSUFBZ0QsS0FBS0csZUFBTCxFQUhuRCxFQUlFLDZCQUFDLGVBQUQsUUFDR0osWUFBWSxJQUFJLEtBQUtLLFlBQUwsRUFEbkIsQ0FKRixFQU9HSCx5QkFBeUIsSUFBSSxLQUFLSSxzQkFBTCxFQVBoQyxDQURGO0FBV0QsRzs7O0VBaEdpQ0MsZUFBTUMsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtY2hlY2tib3gnO1xuaW1wb3J0IFNlYXJjaGJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1zZWFyY2hiYXInO1xuXG5jb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDQwcHg7XG5gO1xuXG5jb25zdCBDaGVja2JveENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZy10b3A6IDVweDtcbmA7XG5cbmNvbnN0IFNlYXJjaENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtaW4taGVpZ2h0OiAwcHg7XG4gIG1pbi13aWR0aDogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuY29uc3QgU3R5bGVkQ2hlY2tib3ggPSBzdHlsZWQoQ2hlY2tib3gpYFxuICAmJiAuaWNvbiB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaXNTZWFyY2hhYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzU2VsZWN0QWxsVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc0FsbFNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHNlYXJjaEtleXdvcmQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpc1Nob3dPbmx5U2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgb25TZWxlY3RBbGxDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25TZWFyY2hDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25TaG93T25seVNlbGVjdGVkQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRyYW5zbGF0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHNlYXJjaDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHNlbGVjdEFsbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHNob3dPbmx5U2VsZWN0ZWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIHJlbmRlclNlbGVjdEFsbCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGlzQWxsU2VsZWN0ZWQsXG4gICAgICBvblNlbGVjdEFsbENoYW5nZSxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENoZWNrYm94Q29udGFpbmVyIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogJzEwcHgnIH19PlxuICAgICAgICA8U3R5bGVkQ2hlY2tib3hcbiAgICAgICAgICBpZD17YCR7aWR9LXNlbGVjdGFsbGB9XG4gICAgICAgICAgY2hlY2tlZD17aXNBbGxTZWxlY3RlZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RBbGxDaGFuZ2V9XG4gICAgICAgICAgbGFiZWw9e3RyYW5zbGF0aW9ucy5zZWxlY3RBbGx9XG4gICAgICAgIC8+XG4gICAgICA8L0NoZWNrYm94Q29udGFpbmVyPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJTZWFyY2ggPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBzZWFyY2hLZXl3b3JkLFxuICAgICAgb25TZWFyY2hDaGFuZ2UsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWFyY2hiYXJcbiAgICAgICAgaWQ9e2Ake2lkfS1zZWxlY3RhbGxgfVxuICAgICAgICB2YWx1ZT17c2VhcmNoS2V5d29yZH1cbiAgICAgICAgb25TZWFyY2g9e29uU2VhcmNoQ2hhbmdlfVxuICAgICAgICBkeW5hbWljU2VhcmNoU3RhcnRzRnJvbT17MX1cbiAgICAgICAgc2VhcmNoUGxhY2VIb2xkZXI9e2Ake3RyYW5zbGF0aW9ucy5zZWFyY2h9Li4uYH1cbiAgICAgICAgdG9vbHRpcERlbGF5PXs1MDAwMDB9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJTaG93T25seVNlbGVjdGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXNTaG93T25seVNlbGVjdGVkLFxuICAgICAgb25TaG93T25seVNlbGVjdGVkQ2hhbmdlLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q2hlY2tib3hDb250YWluZXIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6ICcxMHB4JyB9fT5cbiAgICAgICAgPFN0eWxlZENoZWNrYm94XG4gICAgICAgICAgaWQ9e2Ake2lkfS1zaG93b25seXNlbGVjdGVkYH1cbiAgICAgICAgICBjaGVja2VkPXtpc1Nob3dPbmx5U2VsZWN0ZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uU2hvd09ubHlTZWxlY3RlZENoYW5nZX1cbiAgICAgICAgICBsYWJlbD17dHJhbnNsYXRpb25zLnNob3dPbmx5U2VsZWN0ZWR9XG4gICAgICAgIC8+XG4gICAgICA8L0NoZWNrYm94Q29udGFpbmVyPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpc1NlYXJjaGFibGUsXG4gICAgICBpc1NlbGVjdEFsbFZpc2libGUsXG4gICAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlLFxuICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGVyQ29udGFpbmVyXG4gICAgICAgIGlkPXtpZH1cbiAgICAgID5cbiAgICAgICAgeyFpc0NvbHVtbkhlYWRlclZpc2libGUgJiYgaXNTZWxlY3RBbGxWaXNpYmxlICYmIHRoaXMucmVuZGVyU2VsZWN0QWxsKCl9XG4gICAgICAgIDxTZWFyY2hDb250YWluZXI+XG4gICAgICAgICAge2lzU2VhcmNoYWJsZSAmJiB0aGlzLnJlbmRlclNlYXJjaCgpfVxuICAgICAgICA8L1NlYXJjaENvbnRhaW5lcj5cbiAgICAgICAge2lzU2hvd09ubHlTZWxlY3RlZFZpc2libGUgJiYgdGhpcy5yZW5kZXJTaG93T25seVNlbGVjdGVkKCl9XG4gICAgICA8L0hlYWRlckNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iXX0=