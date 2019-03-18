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

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from '@opuscapita/react-checkbox';
import Searchbar from '@opuscapita/react-searchbar';
var HeaderContainer = styled.div(_templateObject());
var CheckboxContainer = styled.div(_templateObject2());
var SearchContainer = styled.div(_templateObject3());
var StyledCheckbox = styled(Checkbox)(_templateObject4());

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
      return React.createElement(CheckboxContainer, {
        style: {
          paddingRight: '10px'
        }
      }, React.createElement(StyledCheckbox, {
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
      return React.createElement(Searchbar, {
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
      return React.createElement(CheckboxContainer, {
        style: {
          paddingLeft: '10px'
        }
      }, React.createElement(StyledCheckbox, {
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
    return React.createElement(HeaderContainer, {
      id: id
    }, !isColumnHeaderVisible && isSelectAllVisible && this.renderSelectAll(), React.createElement(SearchContainer, null, isSearchable && this.renderSearch()), isShowOnlySelectedVisible && this.renderShowOnlySelected());
  };

  return Header;
}(React.PureComponent);

export { Header as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFkZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsIkNoZWNrYm94IiwiU2VhcmNoYmFyIiwiSGVhZGVyQ29udGFpbmVyIiwiZGl2IiwiQ2hlY2tib3hDb250YWluZXIiLCJTZWFyY2hDb250YWluZXIiLCJTdHlsZWRDaGVja2JveCIsIkhlYWRlciIsInByb3BzIiwiaWQiLCJpc0FsbFNlbGVjdGVkIiwib25TZWxlY3RBbGxDaGFuZ2UiLCJ0cmFuc2xhdGlvbnMiLCJwYWRkaW5nUmlnaHQiLCJzZWxlY3RBbGwiLCJzZWFyY2hLZXl3b3JkIiwib25TZWFyY2hDaGFuZ2UiLCJzZWFyY2giLCJpc1Nob3dPbmx5U2VsZWN0ZWQiLCJvblNob3dPbmx5U2VsZWN0ZWRDaGFuZ2UiLCJwYWRkaW5nTGVmdCIsInNob3dPbmx5U2VsZWN0ZWQiLCJyZW5kZXIiLCJpc1NlYXJjaGFibGUiLCJpc1NlbGVjdEFsbFZpc2libGUiLCJpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlIiwiaXNDb2x1bW5IZWFkZXJWaXNpYmxlIiwicmVuZGVyU2VsZWN0QWxsIiwicmVuZGVyU2VhcmNoIiwicmVuZGVyU2hvd09ubHlTZWxlY3RlZCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLDRCQUFyQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsNkJBQXRCO0FBRUEsSUFBTUMsZUFBZSxHQUFHSCxNQUFNLENBQUNJLEdBQVYsbUJBQXJCO0FBS0EsSUFBTUMsaUJBQWlCLEdBQUdMLE1BQU0sQ0FBQ0ksR0FBVixvQkFBdkI7QUFPQSxJQUFNRSxlQUFlLEdBQUdOLE1BQU0sQ0FBQ0ksR0FBVixvQkFBckI7QUFPQSxJQUFNRyxjQUFjLEdBQUdQLE1BQU0sQ0FBQ0MsUUFBRCxDQUFULG9CQUFwQjs7SUFPcUJPLE07Ozs7Ozs7Ozs7Ozs7O3NFQW9CRCxZQUFNO0FBQUEsd0JBTWxCLE1BQUtDLEtBTmE7QUFBQSxVQUVwQkMsRUFGb0IsZUFFcEJBLEVBRm9CO0FBQUEsVUFHcEJDLGFBSG9CLGVBR3BCQSxhQUhvQjtBQUFBLFVBSXBCQyxpQkFKb0IsZUFJcEJBLGlCQUpvQjtBQUFBLFVBS3BCQyxZQUxvQixlQUtwQkEsWUFMb0I7QUFPdEIsYUFDRSxvQkFBQyxpQkFBRDtBQUFtQixRQUFBLEtBQUssRUFBRTtBQUFFQyxVQUFBQSxZQUFZLEVBQUU7QUFBaEI7QUFBMUIsU0FDRSxvQkFBQyxjQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUtKLEVBQUwsZUFESjtBQUVFLFFBQUEsT0FBTyxFQUFFQyxhQUZYO0FBR0UsUUFBQSxRQUFRLEVBQUVDLGlCQUhaO0FBSUUsUUFBQSxLQUFLLEVBQUVDLFlBQVksQ0FBQ0U7QUFKdEIsUUFERixDQURGO0FBVUQsSzs7bUVBRWMsWUFBTTtBQUFBLHlCQU1mLE1BQUtOLEtBTlU7QUFBQSxVQUVqQkMsRUFGaUIsZ0JBRWpCQSxFQUZpQjtBQUFBLFVBR2pCTSxhQUhpQixnQkFHakJBLGFBSGlCO0FBQUEsVUFJakJDLGNBSmlCLGdCQUlqQkEsY0FKaUI7QUFBQSxVQUtqQkosWUFMaUIsZ0JBS2pCQSxZQUxpQjtBQU9uQixhQUNFLG9CQUFDLFNBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBS0gsRUFBTCxlQURKO0FBRUUsUUFBQSxLQUFLLEVBQUVNLGFBRlQ7QUFHRSxRQUFBLFFBQVEsRUFBRUMsY0FIWjtBQUlFLFFBQUEsdUJBQXVCLEVBQUUsQ0FKM0I7QUFLRSxRQUFBLGlCQUFpQixFQUFLSixZQUFZLENBQUNLLE1BQWxCLFFBTG5CO0FBTUUsUUFBQSxZQUFZLEVBQUU7QUFOaEIsUUFERjtBQVVELEs7OzZFQUV3QixZQUFNO0FBQUEseUJBTXpCLE1BQUtULEtBTm9CO0FBQUEsVUFFM0JDLEVBRjJCLGdCQUUzQkEsRUFGMkI7QUFBQSxVQUczQlMsa0JBSDJCLGdCQUczQkEsa0JBSDJCO0FBQUEsVUFJM0JDLHdCQUoyQixnQkFJM0JBLHdCQUoyQjtBQUFBLFVBSzNCUCxZQUwyQixnQkFLM0JBLFlBTDJCO0FBTzdCLGFBQ0Usb0JBQUMsaUJBQUQ7QUFBbUIsUUFBQSxLQUFLLEVBQUU7QUFBRVEsVUFBQUEsV0FBVyxFQUFFO0FBQWY7QUFBMUIsU0FDRSxvQkFBQyxjQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUtYLEVBQUwsc0JBREo7QUFFRSxRQUFBLE9BQU8sRUFBRVMsa0JBRlg7QUFHRSxRQUFBLFFBQVEsRUFBRUMsd0JBSFo7QUFJRSxRQUFBLEtBQUssRUFBRVAsWUFBWSxDQUFDUztBQUp0QixRQURGLENBREY7QUFVRCxLOzs7Ozs7O1NBRURDLE0sR0FBQSxrQkFBUztBQUFBLHVCQU9ILEtBQUtkLEtBUEY7QUFBQSxRQUVMQyxFQUZLLGdCQUVMQSxFQUZLO0FBQUEsUUFHTGMsWUFISyxnQkFHTEEsWUFISztBQUFBLFFBSUxDLGtCQUpLLGdCQUlMQSxrQkFKSztBQUFBLFFBS0xDLHlCQUxLLGdCQUtMQSx5QkFMSztBQUFBLFFBTUxDLHFCQU5LLGdCQU1MQSxxQkFOSztBQVFQLFdBQ0Usb0JBQUMsZUFBRDtBQUNFLE1BQUEsRUFBRSxFQUFFakI7QUFETixPQUdHLENBQUNpQixxQkFBRCxJQUEwQkYsa0JBQTFCLElBQWdELEtBQUtHLGVBQUwsRUFIbkQsRUFJRSxvQkFBQyxlQUFELFFBQ0dKLFlBQVksSUFBSSxLQUFLSyxZQUFMLEVBRG5CLENBSkYsRUFPR0gseUJBQXlCLElBQUksS0FBS0ksc0JBQUwsRUFQaEMsQ0FERjtBQVdELEc7OztFQWhHaUNoQyxLQUFLLENBQUNpQyxhOztTQUFyQnZCLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWNoZWNrYm94JztcbmltcG9ydCBTZWFyY2hiYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3Qtc2VhcmNoYmFyJztcblxuY29uc3QgSGVhZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0MHB4O1xuYDtcblxuY29uc3QgQ2hlY2tib3hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAwIDAgYXV0bztcbiAgbWluLWhlaWdodDogNDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmctdG9wOiA1cHg7XG5gO1xuXG5jb25zdCBTZWFyY2hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxIDEgYXV0bztcbiAgbWluLWhlaWdodDogMHB4O1xuICBtaW4td2lkdGg6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IFN0eWxlZENoZWNrYm94ID0gc3R5bGVkKENoZWNrYm94KWBcbiAgJiYgLmljb24ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGlzU2VhcmNoYWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc1NlbGVjdEFsbFZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc0NvbHVtbkhlYWRlclZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNBbGxTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBzZWFyY2hLZXl3b3JkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaXNTaG93T25seVNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIG9uU2VsZWN0QWxsQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uU2VhcmNoQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uU2hvd09ubHlTZWxlY3RlZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBzZWFyY2g6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzZWxlY3RBbGw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBzaG93T25seVNlbGVjdGVkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gIH1cblxuICByZW5kZXJTZWxlY3RBbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpc0FsbFNlbGVjdGVkLFxuICAgICAgb25TZWxlY3RBbGxDaGFuZ2UsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDaGVja2JveENvbnRhaW5lciBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6ICcxMHB4JyB9fT5cbiAgICAgICAgPFN0eWxlZENoZWNrYm94XG4gICAgICAgICAgaWQ9e2Ake2lkfS1zZWxlY3RhbGxgfVxuICAgICAgICAgIGNoZWNrZWQ9e2lzQWxsU2VsZWN0ZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0QWxsQ2hhbmdlfVxuICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGlvbnMuc2VsZWN0QWxsfVxuICAgICAgICAvPlxuICAgICAgPC9DaGVja2JveENvbnRhaW5lcj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyU2VhcmNoID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgc2VhcmNoS2V5d29yZCxcbiAgICAgIG9uU2VhcmNoQ2hhbmdlLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8U2VhcmNoYmFyXG4gICAgICAgIGlkPXtgJHtpZH0tc2VsZWN0YWxsYH1cbiAgICAgICAgdmFsdWU9e3NlYXJjaEtleXdvcmR9XG4gICAgICAgIG9uU2VhcmNoPXtvblNlYXJjaENoYW5nZX1cbiAgICAgICAgZHluYW1pY1NlYXJjaFN0YXJ0c0Zyb209ezF9XG4gICAgICAgIHNlYXJjaFBsYWNlSG9sZGVyPXtgJHt0cmFuc2xhdGlvbnMuc2VhcmNofS4uLmB9XG4gICAgICAgIHRvb2x0aXBEZWxheT17NTAwMDAwfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyU2hvd09ubHlTZWxlY3RlZCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGlzU2hvd09ubHlTZWxlY3RlZCxcbiAgICAgIG9uU2hvd09ubHlTZWxlY3RlZENoYW5nZSxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENoZWNrYm94Q29udGFpbmVyIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAnMTBweCcgfX0+XG4gICAgICAgIDxTdHlsZWRDaGVja2JveFxuICAgICAgICAgIGlkPXtgJHtpZH0tc2hvd29ubHlzZWxlY3RlZGB9XG4gICAgICAgICAgY2hlY2tlZD17aXNTaG93T25seVNlbGVjdGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNob3dPbmx5U2VsZWN0ZWRDaGFuZ2V9XG4gICAgICAgICAgbGFiZWw9e3RyYW5zbGF0aW9ucy5zaG93T25seVNlbGVjdGVkfVxuICAgICAgICAvPlxuICAgICAgPC9DaGVja2JveENvbnRhaW5lcj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXNTZWFyY2hhYmxlLFxuICAgICAgaXNTZWxlY3RBbGxWaXNpYmxlLFxuICAgICAgaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZSxcbiAgICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEhlYWRlckNvbnRhaW5lclxuICAgICAgICBpZD17aWR9XG4gICAgICA+XG4gICAgICAgIHshaXNDb2x1bW5IZWFkZXJWaXNpYmxlICYmIGlzU2VsZWN0QWxsVmlzaWJsZSAmJiB0aGlzLnJlbmRlclNlbGVjdEFsbCgpfVxuICAgICAgICA8U2VhcmNoQ29udGFpbmVyPlxuICAgICAgICAgIHtpc1NlYXJjaGFibGUgJiYgdGhpcy5yZW5kZXJTZWFyY2goKX1cbiAgICAgICAgPC9TZWFyY2hDb250YWluZXI+XG4gICAgICAgIHtpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlICYmIHRoaXMucmVuZGVyU2hvd09ubHlTZWxlY3RlZCgpfVxuICAgICAgPC9IZWFkZXJDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuIl19