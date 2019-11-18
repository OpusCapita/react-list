"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactCheckbox = _interopRequireDefault(require("@opuscapita/react-checkbox"));

var _reactSearchbar = _interopRequireDefault(require("@opuscapita/react-searchbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  && .icon {\n    width: auto;\n    user-select: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1 1 auto;\n  min-height: 0px;\n  min-width: 0px;\n  overflow: visible;\n  max-width: 300px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 0 0 auto;\n  min-height: 40px;\n  width: auto;\n  padding-top: 5px;\n  padding-left: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 0 0 auto;\n  min-height: 40px;\n  width: auto;\n  padding-top: 5px;\n  padding-right: 10px;\n  padding-left: 6px;\n"]);

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

var HeaderContainer = _styledComponents["default"].div(_templateObject());

var SelectAllContainer = _styledComponents["default"].div(_templateObject2());

var ShowOnlySelectedContainer = _styledComponents["default"].div(_templateObject3());

var SearchContainer = _styledComponents["default"].div(_templateObject4());

var StyledCheckbox = (0, _styledComponents["default"])(_reactCheckbox["default"])(_templateObject5());

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
      return _react["default"].createElement(SelectAllContainer, null, _react["default"].createElement(StyledCheckbox, {
        id: id + "-selectall",
        checked: isAllSelected,
        onChange: onSelectAllChange,
        label: translations.selectAll
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderSearch", function () {
      var _this$props2 = _this.props,
          id = _this$props2.id,
          onSearchChange = _this$props2.onSearchChange,
          translations = _this$props2.translations;
      return _react["default"].createElement(_reactSearchbar["default"], {
        id: id + "-selectall",
        onSearch: onSearchChange,
        isDynamic: true,
        translations: {
          searchPlaceHolder: translations.search + "..."
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderShowOnlySelected", function () {
      var _this$props3 = _this.props,
          id = _this$props3.id,
          isShowOnlySelected = _this$props3.isShowOnlySelected,
          onShowOnlySelectedChange = _this$props3.onShowOnlySelectedChange,
          translations = _this$props3.translations;
      return _react["default"].createElement(ShowOnlySelectedContainer, null, _react["default"].createElement(StyledCheckbox, {
        id: id + "-showonlyselected",
        name: id + "-showonlyselected",
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
    return _react["default"].createElement(HeaderContainer, {
      id: id
    }, !isColumnHeaderVisible && isSelectAllVisible && this.renderSelectAll(), _react["default"].createElement(SearchContainer, null, isSearchable && this.renderSearch()), isShowOnlySelectedVisible && this.renderShowOnlySelected());
  };

  return Header;
}(_react["default"].PureComponent);

exports["default"] = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFkZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJIZWFkZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJTZWxlY3RBbGxDb250YWluZXIiLCJTaG93T25seVNlbGVjdGVkQ29udGFpbmVyIiwiU2VhcmNoQ29udGFpbmVyIiwiU3R5bGVkQ2hlY2tib3giLCJDaGVja2JveCIsIkhlYWRlciIsInByb3BzIiwiaWQiLCJpc0FsbFNlbGVjdGVkIiwib25TZWxlY3RBbGxDaGFuZ2UiLCJ0cmFuc2xhdGlvbnMiLCJzZWxlY3RBbGwiLCJvblNlYXJjaENoYW5nZSIsInNlYXJjaFBsYWNlSG9sZGVyIiwic2VhcmNoIiwiaXNTaG93T25seVNlbGVjdGVkIiwib25TaG93T25seVNlbGVjdGVkQ2hhbmdlIiwic2hvd09ubHlTZWxlY3RlZCIsInJlbmRlciIsImlzU2VhcmNoYWJsZSIsImlzU2VsZWN0QWxsVmlzaWJsZSIsImlzU2hvd09ubHlTZWxlY3RlZFZpc2libGUiLCJpc0NvbHVtbkhlYWRlclZpc2libGUiLCJyZW5kZXJTZWxlY3RBbGwiLCJyZW5kZXJTZWFyY2giLCJyZW5kZXJTaG93T25seVNlbGVjdGVkIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsR0FBR0MsNkJBQU9DLEdBQVYsbUJBQXJCOztBQUtBLElBQU1DLGtCQUFrQixHQUFHRiw2QkFBT0MsR0FBVixvQkFBeEI7O0FBU0EsSUFBTUUseUJBQXlCLEdBQUdILDZCQUFPQyxHQUFWLG9CQUEvQjs7QUFRQSxJQUFNRyxlQUFlLEdBQUdKLDZCQUFPQyxHQUFWLG9CQUFyQjs7QUFRQSxJQUFNSSxjQUFjLEdBQUcsa0NBQU9DLHlCQUFQLENBQUgsb0JBQXBCOztJQU9xQkMsTTs7Ozs7Ozs7Ozs7Ozs7c0VBbUJELFlBQU07QUFBQSx3QkFNbEIsTUFBS0MsS0FOYTtBQUFBLFVBRXBCQyxFQUZvQixlQUVwQkEsRUFGb0I7QUFBQSxVQUdwQkMsYUFIb0IsZUFHcEJBLGFBSG9CO0FBQUEsVUFJcEJDLGlCQUpvQixlQUlwQkEsaUJBSm9CO0FBQUEsVUFLcEJDLFlBTG9CLGVBS3BCQSxZQUxvQjtBQU90QixhQUNFLGdDQUFDLGtCQUFELFFBQ0UsZ0NBQUMsY0FBRDtBQUNFLFFBQUEsRUFBRSxFQUFLSCxFQUFMLGVBREo7QUFFRSxRQUFBLE9BQU8sRUFBRUMsYUFGWDtBQUdFLFFBQUEsUUFBUSxFQUFFQyxpQkFIWjtBQUlFLFFBQUEsS0FBSyxFQUFFQyxZQUFZLENBQUNDO0FBSnRCLFFBREYsQ0FERjtBQVVELEs7O21FQUVjLFlBQU07QUFBQSx5QkFLZixNQUFLTCxLQUxVO0FBQUEsVUFFakJDLEVBRmlCLGdCQUVqQkEsRUFGaUI7QUFBQSxVQUdqQkssY0FIaUIsZ0JBR2pCQSxjQUhpQjtBQUFBLFVBSWpCRixZQUppQixnQkFJakJBLFlBSmlCO0FBTW5CLGFBQ0UsZ0NBQUMsMEJBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBS0gsRUFBTCxlQURKO0FBRUUsUUFBQSxRQUFRLEVBQUVLLGNBRlo7QUFHRSxRQUFBLFNBQVMsTUFIWDtBQUlFLFFBQUEsWUFBWSxFQUFFO0FBQ1pDLFVBQUFBLGlCQUFpQixFQUFLSCxZQUFZLENBQUNJLE1BQWxCO0FBREw7QUFKaEIsUUFERjtBQVVELEs7OzZFQUV3QixZQUFNO0FBQUEseUJBTXpCLE1BQUtSLEtBTm9CO0FBQUEsVUFFM0JDLEVBRjJCLGdCQUUzQkEsRUFGMkI7QUFBQSxVQUczQlEsa0JBSDJCLGdCQUczQkEsa0JBSDJCO0FBQUEsVUFJM0JDLHdCQUoyQixnQkFJM0JBLHdCQUoyQjtBQUFBLFVBSzNCTixZQUwyQixnQkFLM0JBLFlBTDJCO0FBTzdCLGFBQ0UsZ0NBQUMseUJBQUQsUUFDRSxnQ0FBQyxjQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUtILEVBQUwsc0JBREo7QUFFRSxRQUFBLElBQUksRUFBS0EsRUFBTCxzQkFGTjtBQUdFLFFBQUEsT0FBTyxFQUFFUSxrQkFIWDtBQUlFLFFBQUEsUUFBUSxFQUFFQyx3QkFKWjtBQUtFLFFBQUEsS0FBSyxFQUFFTixZQUFZLENBQUNPO0FBTHRCLFFBREYsQ0FERjtBQVdELEs7Ozs7Ozs7U0FFREMsTSxHQUFBLGtCQUFTO0FBQUEsdUJBT0gsS0FBS1osS0FQRjtBQUFBLFFBRUxDLEVBRkssZ0JBRUxBLEVBRks7QUFBQSxRQUdMWSxZQUhLLGdCQUdMQSxZQUhLO0FBQUEsUUFJTEMsa0JBSkssZ0JBSUxBLGtCQUpLO0FBQUEsUUFLTEMseUJBTEssZ0JBS0xBLHlCQUxLO0FBQUEsUUFNTEMscUJBTkssZ0JBTUxBLHFCQU5LO0FBUVAsV0FDRSxnQ0FBQyxlQUFEO0FBQ0UsTUFBQSxFQUFFLEVBQUVmO0FBRE4sT0FHRyxDQUFDZSxxQkFBRCxJQUEwQkYsa0JBQTFCLElBQWdELEtBQUtHLGVBQUwsRUFIbkQsRUFJRSxnQ0FBQyxlQUFELFFBQ0dKLFlBQVksSUFBSSxLQUFLSyxZQUFMLEVBRG5CLENBSkYsRUFPR0gseUJBQXlCLElBQUksS0FBS0ksc0JBQUwsRUFQaEMsQ0FERjtBQVdELEc7OztFQS9GaUNDLGtCQUFNQyxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1jaGVja2JveCc7XG5pbXBvcnQgU2VhcmNoYmFyIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXNlYXJjaGJhcic7XG5cbmNvbnN0IEhlYWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDBweDtcbmA7XG5cbmNvbnN0IFNlbGVjdEFsbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG5gO1xuXG5jb25zdCBTaG93T25seVNlbGVjdGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMCAwIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG5gO1xuXG5jb25zdCBTZWFyY2hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxIDEgYXV0bztcbiAgbWluLWhlaWdodDogMHB4O1xuICBtaW4td2lkdGg6IDBweDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIG1heC13aWR0aDogMzAwcHg7XG5gO1xuXG5jb25zdCBTdHlsZWRDaGVja2JveCA9IHN0eWxlZChDaGVja2JveClgXG4gICYmIC5pY29uIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpc1NlYXJjaGFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNTZWxlY3RBbGxWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzU2hvd09ubHlTZWxlY3RlZFZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzQWxsU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNTaG93T25seVNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIG9uU2VsZWN0QWxsQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uU2VhcmNoQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uU2hvd09ubHlTZWxlY3RlZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzZWFyY2g6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzZWxlY3RBbGw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzaG93T25seVNlbGVjdGVkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gIH1cblxuICByZW5kZXJTZWxlY3RBbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpc0FsbFNlbGVjdGVkLFxuICAgICAgb25TZWxlY3RBbGxDaGFuZ2UsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RBbGxDb250YWluZXI+XG4gICAgICAgIDxTdHlsZWRDaGVja2JveFxuICAgICAgICAgIGlkPXtgJHtpZH0tc2VsZWN0YWxsYH1cbiAgICAgICAgICBjaGVja2VkPXtpc0FsbFNlbGVjdGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdEFsbENoYW5nZX1cbiAgICAgICAgICBsYWJlbD17dHJhbnNsYXRpb25zLnNlbGVjdEFsbH1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VsZWN0QWxsQ29udGFpbmVyPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJTZWFyY2ggPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBvblNlYXJjaENoYW5nZSxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFNlYXJjaGJhclxuICAgICAgICBpZD17YCR7aWR9LXNlbGVjdGFsbGB9XG4gICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaENoYW5nZX1cbiAgICAgICAgaXNEeW5hbWljXG4gICAgICAgIHRyYW5zbGF0aW9ucz17e1xuICAgICAgICAgIHNlYXJjaFBsYWNlSG9sZGVyOiBgJHt0cmFuc2xhdGlvbnMuc2VhcmNofS4uLmAsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJTaG93T25seVNlbGVjdGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXNTaG93T25seVNlbGVjdGVkLFxuICAgICAgb25TaG93T25seVNlbGVjdGVkQ2hhbmdlLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8U2hvd09ubHlTZWxlY3RlZENvbnRhaW5lcj5cbiAgICAgICAgPFN0eWxlZENoZWNrYm94XG4gICAgICAgICAgaWQ9e2Ake2lkfS1zaG93b25seXNlbGVjdGVkYH1cbiAgICAgICAgICBuYW1lPXtgJHtpZH0tc2hvd29ubHlzZWxlY3RlZGB9XG4gICAgICAgICAgY2hlY2tlZD17aXNTaG93T25seVNlbGVjdGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNob3dPbmx5U2VsZWN0ZWRDaGFuZ2V9XG4gICAgICAgICAgbGFiZWw9e3RyYW5zbGF0aW9ucy5zaG93T25seVNlbGVjdGVkfVxuICAgICAgICAvPlxuICAgICAgPC9TaG93T25seVNlbGVjdGVkQ29udGFpbmVyPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpc1NlYXJjaGFibGUsXG4gICAgICBpc1NlbGVjdEFsbFZpc2libGUsXG4gICAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlLFxuICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGVyQ29udGFpbmVyXG4gICAgICAgIGlkPXtpZH1cbiAgICAgID5cbiAgICAgICAgeyFpc0NvbHVtbkhlYWRlclZpc2libGUgJiYgaXNTZWxlY3RBbGxWaXNpYmxlICYmIHRoaXMucmVuZGVyU2VsZWN0QWxsKCl9XG4gICAgICAgIDxTZWFyY2hDb250YWluZXI+XG4gICAgICAgICAge2lzU2VhcmNoYWJsZSAmJiB0aGlzLnJlbmRlclNlYXJjaCgpfVxuICAgICAgICA8L1NlYXJjaENvbnRhaW5lcj5cbiAgICAgICAge2lzU2hvd09ubHlTZWxlY3RlZFZpc2libGUgJiYgdGhpcy5yZW5kZXJTaG93T25seVNlbGVjdGVkKCl9XG4gICAgICA8L0hlYWRlckNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iXX0=