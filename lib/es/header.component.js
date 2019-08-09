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

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from '@opuscapita/react-checkbox';
import Searchbar from '@opuscapita/react-searchbar';
var HeaderContainer = styled.div(_templateObject());
var SelectAllContainer = styled.div(_templateObject2());
var ShowOnlySelectedContainer = styled.div(_templateObject3());
var SearchContainer = styled.div(_templateObject4());
var StyledCheckbox = styled(Checkbox)(_templateObject5());

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
      return React.createElement(SelectAllContainer, null, React.createElement(StyledCheckbox, {
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
      return React.createElement(Searchbar, {
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
      return React.createElement(ShowOnlySelectedContainer, null, React.createElement(StyledCheckbox, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWFkZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsIkNoZWNrYm94IiwiU2VhcmNoYmFyIiwiSGVhZGVyQ29udGFpbmVyIiwiZGl2IiwiU2VsZWN0QWxsQ29udGFpbmVyIiwiU2hvd09ubHlTZWxlY3RlZENvbnRhaW5lciIsIlNlYXJjaENvbnRhaW5lciIsIlN0eWxlZENoZWNrYm94IiwiSGVhZGVyIiwicHJvcHMiLCJpZCIsImlzQWxsU2VsZWN0ZWQiLCJvblNlbGVjdEFsbENoYW5nZSIsInRyYW5zbGF0aW9ucyIsInNlbGVjdEFsbCIsIm9uU2VhcmNoQ2hhbmdlIiwic2VhcmNoUGxhY2VIb2xkZXIiLCJzZWFyY2giLCJpc1Nob3dPbmx5U2VsZWN0ZWQiLCJvblNob3dPbmx5U2VsZWN0ZWRDaGFuZ2UiLCJzaG93T25seVNlbGVjdGVkIiwicmVuZGVyIiwiaXNTZWFyY2hhYmxlIiwiaXNTZWxlY3RBbGxWaXNpYmxlIiwiaXNTaG93T25seVNlbGVjdGVkVmlzaWJsZSIsImlzQ29sdW1uSGVhZGVyVmlzaWJsZSIsInJlbmRlclNlbGVjdEFsbCIsInJlbmRlclNlYXJjaCIsInJlbmRlclNob3dPbmx5U2VsZWN0ZWQiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsNEJBQXJCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQiw2QkFBdEI7QUFFQSxJQUFNQyxlQUFlLEdBQUdILE1BQU0sQ0FBQ0ksR0FBVixtQkFBckI7QUFLQSxJQUFNQyxrQkFBa0IsR0FBR0wsTUFBTSxDQUFDSSxHQUFWLG9CQUF4QjtBQVNBLElBQU1FLHlCQUF5QixHQUFHTixNQUFNLENBQUNJLEdBQVYsb0JBQS9CO0FBUUEsSUFBTUcsZUFBZSxHQUFHUCxNQUFNLENBQUNJLEdBQVYsb0JBQXJCO0FBUUEsSUFBTUksY0FBYyxHQUFHUixNQUFNLENBQUNDLFFBQUQsQ0FBVCxvQkFBcEI7O0lBT3FCUSxNOzs7Ozs7Ozs7Ozs7OztzRUFtQkQsWUFBTTtBQUFBLHdCQU1sQixNQUFLQyxLQU5hO0FBQUEsVUFFcEJDLEVBRm9CLGVBRXBCQSxFQUZvQjtBQUFBLFVBR3BCQyxhQUhvQixlQUdwQkEsYUFIb0I7QUFBQSxVQUlwQkMsaUJBSm9CLGVBSXBCQSxpQkFKb0I7QUFBQSxVQUtwQkMsWUFMb0IsZUFLcEJBLFlBTG9CO0FBT3RCLGFBQ0Usb0JBQUMsa0JBQUQsUUFDRSxvQkFBQyxjQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUtILEVBQUwsZUFESjtBQUVFLFFBQUEsT0FBTyxFQUFFQyxhQUZYO0FBR0UsUUFBQSxRQUFRLEVBQUVDLGlCQUhaO0FBSUUsUUFBQSxLQUFLLEVBQUVDLFlBQVksQ0FBQ0M7QUFKdEIsUUFERixDQURGO0FBVUQsSzs7bUVBRWMsWUFBTTtBQUFBLHlCQUtmLE1BQUtMLEtBTFU7QUFBQSxVQUVqQkMsRUFGaUIsZ0JBRWpCQSxFQUZpQjtBQUFBLFVBR2pCSyxjQUhpQixnQkFHakJBLGNBSGlCO0FBQUEsVUFJakJGLFlBSmlCLGdCQUlqQkEsWUFKaUI7QUFNbkIsYUFDRSxvQkFBQyxTQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUtILEVBQUwsZUFESjtBQUVFLFFBQUEsUUFBUSxFQUFFSyxjQUZaO0FBR0UsUUFBQSxTQUFTLE1BSFg7QUFJRSxRQUFBLFlBQVksRUFBRTtBQUNaQyxVQUFBQSxpQkFBaUIsRUFBS0gsWUFBWSxDQUFDSSxNQUFsQjtBQURMO0FBSmhCLFFBREY7QUFVRCxLOzs2RUFFd0IsWUFBTTtBQUFBLHlCQU16QixNQUFLUixLQU5vQjtBQUFBLFVBRTNCQyxFQUYyQixnQkFFM0JBLEVBRjJCO0FBQUEsVUFHM0JRLGtCQUgyQixnQkFHM0JBLGtCQUgyQjtBQUFBLFVBSTNCQyx3QkFKMkIsZ0JBSTNCQSx3QkFKMkI7QUFBQSxVQUszQk4sWUFMMkIsZ0JBSzNCQSxZQUwyQjtBQU83QixhQUNFLG9CQUFDLHlCQUFELFFBQ0Usb0JBQUMsY0FBRDtBQUNFLFFBQUEsRUFBRSxFQUFLSCxFQUFMLHNCQURKO0FBRUUsUUFBQSxPQUFPLEVBQUVRLGtCQUZYO0FBR0UsUUFBQSxRQUFRLEVBQUVDLHdCQUhaO0FBSUUsUUFBQSxLQUFLLEVBQUVOLFlBQVksQ0FBQ087QUFKdEIsUUFERixDQURGO0FBVUQsSzs7Ozs7OztTQUVEQyxNLEdBQUEsa0JBQVM7QUFBQSx1QkFPSCxLQUFLWixLQVBGO0FBQUEsUUFFTEMsRUFGSyxnQkFFTEEsRUFGSztBQUFBLFFBR0xZLFlBSEssZ0JBR0xBLFlBSEs7QUFBQSxRQUlMQyxrQkFKSyxnQkFJTEEsa0JBSks7QUFBQSxRQUtMQyx5QkFMSyxnQkFLTEEseUJBTEs7QUFBQSxRQU1MQyxxQkFOSyxnQkFNTEEscUJBTks7QUFRUCxXQUNFLG9CQUFDLGVBQUQ7QUFDRSxNQUFBLEVBQUUsRUFBRWY7QUFETixPQUdHLENBQUNlLHFCQUFELElBQTBCRixrQkFBMUIsSUFBZ0QsS0FBS0csZUFBTCxFQUhuRCxFQUlFLG9CQUFDLGVBQUQsUUFDR0osWUFBWSxJQUFJLEtBQUtLLFlBQUwsRUFEbkIsQ0FKRixFQU9HSCx5QkFBeUIsSUFBSSxLQUFLSSxzQkFBTCxFQVBoQyxDQURGO0FBV0QsRzs7O0VBOUZpQy9CLEtBQUssQ0FBQ2dDLGE7O1NBQXJCckIsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtY2hlY2tib3gnO1xuaW1wb3J0IFNlYXJjaGJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1zZWFyY2hiYXInO1xuXG5jb25zdCBIZWFkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDQwcHg7XG5gO1xuXG5jb25zdCBTZWxlY3RBbGxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAwIDAgYXV0bztcbiAgbWluLWhlaWdodDogNDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xuYDtcblxuY29uc3QgU2hvd09ubHlTZWxlY3RlZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuYDtcblxuY29uc3QgU2VhcmNoQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMSAxIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDBweDtcbiAgbWluLXdpZHRoOiAwcHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuYDtcblxuY29uc3QgU3R5bGVkQ2hlY2tib3ggPSBzdHlsZWQoQ2hlY2tib3gpYFxuICAmJiAuaWNvbiB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaXNTZWFyY2hhYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzU2VsZWN0QWxsVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzQ29sdW1uSGVhZGVyVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc0FsbFNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzU2hvd09ubHlTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBvblNlbGVjdEFsbENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblNlYXJjaENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblNob3dPbmx5U2VsZWN0ZWRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdHJhbnNsYXRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc2VhcmNoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc2VsZWN0QWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgc2hvd09ubHlTZWxlY3RlZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KS5pc1JlcXVpcmVkLFxuICB9XG5cbiAgcmVuZGVyU2VsZWN0QWxsID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXNBbGxTZWxlY3RlZCxcbiAgICAgIG9uU2VsZWN0QWxsQ2hhbmdlLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0QWxsQ29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkQ2hlY2tib3hcbiAgICAgICAgICBpZD17YCR7aWR9LXNlbGVjdGFsbGB9XG4gICAgICAgICAgY2hlY2tlZD17aXNBbGxTZWxlY3RlZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RBbGxDaGFuZ2V9XG4gICAgICAgICAgbGFiZWw9e3RyYW5zbGF0aW9ucy5zZWxlY3RBbGx9XG4gICAgICAgIC8+XG4gICAgICA8L1NlbGVjdEFsbENvbnRhaW5lcj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyU2VhcmNoID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgb25TZWFyY2hDaGFuZ2UsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWFyY2hiYXJcbiAgICAgICAgaWQ9e2Ake2lkfS1zZWxlY3RhbGxgfVxuICAgICAgICBvblNlYXJjaD17b25TZWFyY2hDaGFuZ2V9XG4gICAgICAgIGlzRHluYW1pY1xuICAgICAgICB0cmFuc2xhdGlvbnM9e3tcbiAgICAgICAgICBzZWFyY2hQbGFjZUhvbGRlcjogYCR7dHJhbnNsYXRpb25zLnNlYXJjaH0uLi5gLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyU2hvd09ubHlTZWxlY3RlZCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGlzU2hvd09ubHlTZWxlY3RlZCxcbiAgICAgIG9uU2hvd09ubHlTZWxlY3RlZENoYW5nZSxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFNob3dPbmx5U2VsZWN0ZWRDb250YWluZXI+XG4gICAgICAgIDxTdHlsZWRDaGVja2JveFxuICAgICAgICAgIGlkPXtgJHtpZH0tc2hvd29ubHlzZWxlY3RlZGB9XG4gICAgICAgICAgY2hlY2tlZD17aXNTaG93T25seVNlbGVjdGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNob3dPbmx5U2VsZWN0ZWRDaGFuZ2V9XG4gICAgICAgICAgbGFiZWw9e3RyYW5zbGF0aW9ucy5zaG93T25seVNlbGVjdGVkfVxuICAgICAgICAvPlxuICAgICAgPC9TaG93T25seVNlbGVjdGVkQ29udGFpbmVyPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpc1NlYXJjaGFibGUsXG4gICAgICBpc1NlbGVjdEFsbFZpc2libGUsXG4gICAgICBpc1Nob3dPbmx5U2VsZWN0ZWRWaXNpYmxlLFxuICAgICAgaXNDb2x1bW5IZWFkZXJWaXNpYmxlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGVyQ29udGFpbmVyXG4gICAgICAgIGlkPXtpZH1cbiAgICAgID5cbiAgICAgICAgeyFpc0NvbHVtbkhlYWRlclZpc2libGUgJiYgaXNTZWxlY3RBbGxWaXNpYmxlICYmIHRoaXMucmVuZGVyU2VsZWN0QWxsKCl9XG4gICAgICAgIDxTZWFyY2hDb250YWluZXI+XG4gICAgICAgICAge2lzU2VhcmNoYWJsZSAmJiB0aGlzLnJlbmRlclNlYXJjaCgpfVxuICAgICAgICA8L1NlYXJjaENvbnRhaW5lcj5cbiAgICAgICAge2lzU2hvd09ubHlTZWxlY3RlZFZpc2libGUgJiYgdGhpcy5yZW5kZXJTaG93T25seVNlbGVjdGVkKCl9XG4gICAgICA8L0hlYWRlckNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iXX0=