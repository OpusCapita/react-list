function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  border-right: 1px solid ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  height: ", "px;\n  font-weight: 600;\n  border-top: 1px solid ", ";\n  border-left: 1px solid ", ";\n  border-right: 1px solid ", ";\n  background: ", ";\n"]);

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
import Column from './column.component';
var Header = styled.header(_templateObject(), function (props) {
  return props.height;
}, function (props) {
  return props.theme.colors.grey7;
}, function (props) {
  return props.theme.colors.grey7;
}, function (props) {
  return props.theme.colors.grey7;
}, function (props) {
  return props.theme.colors.grey4;
});
var HeaderColumn = styled(Column)(_templateObject2(), function (props) {
  return props.theme.colors.grey7;
});

var ColumnHeader =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ColumnHeader, _React$PureComponent);

  function ColumnHeader() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "renderSelectAllColumn", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          isAllSelected = _this$props.isAllSelected,
          isSelectAllVisible = _this$props.isSelectAllVisible,
          onSelectAllChange = _this$props.onSelectAllChange;
      return React.createElement(HeaderColumn, {
        width: 35
      }, isSelectAllVisible && React.createElement(Checkbox, {
        id: id + "-selectall",
        checked: isAllSelected,
        onChange: onSelectAllChange
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderColumn", function (column) {
      return React.createElement(HeaderColumn, {
        key: column.valueKey,
        width: column.width || 200,
        alignment: column.alignment || 'flex-start'
      }, React.createElement("span", null, column.title));
    });

    return _this;
  }

  var _proto = ColumnHeader.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        id = _this$props2.id,
        isIndexColumnVisible = _this$props2.isIndexColumnVisible,
        isSelectable = _this$props2.isSelectable,
        columns = _this$props2.columns,
        height = _this$props2.height;
    return React.createElement(Header, {
      id: id,
      height: height
    }, isSelectable && this.renderSelectAllColumn(), isIndexColumnVisible && React.createElement(HeaderColumn, {
      width: 35
    }, "#"), columns && columns.map(this.renderColumn));
  };

  return ColumnHeader;
}(React.PureComponent);

export { ColumnHeader as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2x1bW4taGVhZGVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJDaGVja2JveCIsIkNvbHVtbiIsIkhlYWRlciIsImhlYWRlciIsInByb3BzIiwiaGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NyIsImdyZXk0IiwiSGVhZGVyQ29sdW1uIiwiQ29sdW1uSGVhZGVyIiwiaWQiLCJpc0FsbFNlbGVjdGVkIiwiaXNTZWxlY3RBbGxWaXNpYmxlIiwib25TZWxlY3RBbGxDaGFuZ2UiLCJjb2x1bW4iLCJ2YWx1ZUtleSIsIndpZHRoIiwiYWxpZ25tZW50IiwidGl0bGUiLCJyZW5kZXIiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImlzU2VsZWN0YWJsZSIsImNvbHVtbnMiLCJyZW5kZXJTZWxlY3RBbGxDb2x1bW4iLCJtYXAiLCJyZW5kZXJDb2x1bW4iLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsNEJBQXJCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixvQkFBbkI7QUFFQSxJQUFNQyxNQUFNLEdBQUdILE1BQU0sQ0FBQ0ksTUFBVixvQkFFQSxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxNQUFWO0FBQUEsQ0FGTCxFQUljLFVBQUFELEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsS0FBdkI7QUFBQSxDQUpuQixFQUtlLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsS0FBdkI7QUFBQSxDQUxwQixFQU1nQixVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLEtBQXZCO0FBQUEsQ0FOckIsRUFPSSxVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJFLEtBQXZCO0FBQUEsQ0FQVCxDQUFaO0FBVUEsSUFBTUMsWUFBWSxHQUFHWCxNQUFNLENBQUNFLE1BQUQsQ0FBVCxxQkFDVSxVQUFBRyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLEtBQXZCO0FBQUEsQ0FEZixDQUFsQjs7SUFJcUJHLFk7Ozs7Ozs7Ozs7Ozs7OzRFQVlLLFlBQU07QUFBQSx3QkFNeEIsTUFBS1AsS0FObUI7QUFBQSxVQUUxQlEsRUFGMEIsZUFFMUJBLEVBRjBCO0FBQUEsVUFHMUJDLGFBSDBCLGVBRzFCQSxhQUgwQjtBQUFBLFVBSTFCQyxrQkFKMEIsZUFJMUJBLGtCQUowQjtBQUFBLFVBSzFCQyxpQkFMMEIsZUFLMUJBLGlCQUwwQjtBQU81QixhQUNFLG9CQUFDLFlBQUQ7QUFBYyxRQUFBLEtBQUssRUFBRTtBQUFyQixTQUNHRCxrQkFBa0IsSUFDakIsb0JBQUMsUUFBRDtBQUNFLFFBQUEsRUFBRSxFQUFLRixFQUFMLGVBREo7QUFFRSxRQUFBLE9BQU8sRUFBRUMsYUFGWDtBQUdFLFFBQUEsUUFBUSxFQUFFRTtBQUhaLFFBRkosQ0FERjtBQVdELEs7O21FQUVjLFVBQUFDLE1BQU07QUFBQSxhQUNuQixvQkFBQyxZQUFEO0FBQ0UsUUFBQSxHQUFHLEVBQUVBLE1BQU0sQ0FBQ0MsUUFEZDtBQUVFLFFBQUEsS0FBSyxFQUFFRCxNQUFNLENBQUNFLEtBQVAsSUFBZ0IsR0FGekI7QUFHRSxRQUFBLFNBQVMsRUFBRUYsTUFBTSxDQUFDRyxTQUFQLElBQW9CO0FBSGpDLFNBS0Usa0NBQU9ILE1BQU0sQ0FBQ0ksS0FBZCxDQUxGLENBRG1CO0FBQUEsSzs7Ozs7OztTQVVyQkMsTSxHQUFBLGtCQUFTO0FBQUEsdUJBT0gsS0FBS2pCLEtBUEY7QUFBQSxRQUVMUSxFQUZLLGdCQUVMQSxFQUZLO0FBQUEsUUFHTFUsb0JBSEssZ0JBR0xBLG9CQUhLO0FBQUEsUUFJTEMsWUFKSyxnQkFJTEEsWUFKSztBQUFBLFFBS0xDLE9BTEssZ0JBS0xBLE9BTEs7QUFBQSxRQU1MbkIsTUFOSyxnQkFNTEEsTUFOSztBQVFQLFdBQ0Usb0JBQUMsTUFBRDtBQUNFLE1BQUEsRUFBRSxFQUFFTyxFQUROO0FBRUUsTUFBQSxNQUFNLEVBQUVQO0FBRlYsT0FJR2tCLFlBQVksSUFBSSxLQUFLRSxxQkFBTCxFQUpuQixFQUtHSCxvQkFBb0IsSUFBSSxvQkFBQyxZQUFEO0FBQWMsTUFBQSxLQUFLLEVBQUU7QUFBckIsV0FMM0IsRUFNR0UsT0FBTyxJQUFJQSxPQUFPLENBQUNFLEdBQVIsQ0FBWSxLQUFLQyxZQUFqQixDQU5kLENBREY7QUFVRCxHOzs7RUE1RHVDOUIsS0FBSyxDQUFDK0IsYTs7U0FBM0JqQixZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1jaGVja2JveCc7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4vY29sdW1uLmNvbXBvbmVudCc7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5N307XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTd9O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5N307XG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk0fTtcbmA7XG5cbmNvbnN0IEhlYWRlckNvbHVtbiA9IHN0eWxlZChDb2x1bW4pYFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5N307XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2x1bW5IZWFkZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGlzU2VsZWN0YWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc1NlbGVjdEFsbFZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNJbmRleENvbHVtblZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSkuaXNSZXF1aXJlZCxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBpc0FsbFNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIG9uU2VsZWN0QWxsQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9XG5cbiAgcmVuZGVyU2VsZWN0QWxsQ29sdW1uID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXNBbGxTZWxlY3RlZCxcbiAgICAgIGlzU2VsZWN0QWxsVmlzaWJsZSxcbiAgICAgIG9uU2VsZWN0QWxsQ2hhbmdlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGVyQ29sdW1uIHdpZHRoPXszNX0+XG4gICAgICAgIHtpc1NlbGVjdEFsbFZpc2libGUgJiYgKFxuICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgaWQ9e2Ake2lkfS1zZWxlY3RhbGxgfVxuICAgICAgICAgICAgY2hlY2tlZD17aXNBbGxTZWxlY3RlZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdEFsbENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9IZWFkZXJDb2x1bW4+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckNvbHVtbiA9IGNvbHVtbiA9PiAoXG4gICAgPEhlYWRlckNvbHVtblxuICAgICAga2V5PXtjb2x1bW4udmFsdWVLZXl9XG4gICAgICB3aWR0aD17Y29sdW1uLndpZHRoIHx8IDIwMH1cbiAgICAgIGFsaWdubWVudD17Y29sdW1uLmFsaWdubWVudCB8fCAnZmxleC1zdGFydCd9XG4gICAgPlxuICAgICAgPHNwYW4+e2NvbHVtbi50aXRsZX08L3NwYW4+XG4gICAgPC9IZWFkZXJDb2x1bW4+XG4gIClcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZSxcbiAgICAgIGlzU2VsZWN0YWJsZSxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBoZWlnaHQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkZXJcbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgID5cbiAgICAgICAge2lzU2VsZWN0YWJsZSAmJiB0aGlzLnJlbmRlclNlbGVjdEFsbENvbHVtbigpfVxuICAgICAgICB7aXNJbmRleENvbHVtblZpc2libGUgJiYgPEhlYWRlckNvbHVtbiB3aWR0aD17MzV9PiM8L0hlYWRlckNvbHVtbj59XG4gICAgICAgIHtjb2x1bW5zICYmIGNvbHVtbnMubWFwKHRoaXMucmVuZGVyQ29sdW1uKX1cbiAgICAgIDwvSGVhZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==