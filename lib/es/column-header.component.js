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

    _defineProperty(_assertThisInitialized(_this), "renderColumn", function (column, idx) {
      return React.createElement(HeaderColumn, {
        key: column.valueKey || idx,
        width: column.width || 200,
        alignment: column.alignment || 'flex-start'
      }, React.createElement("span", null, column.title || ''));
    });

    return _this;
  }

  var _proto = ColumnHeader.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        id = _this$props2.id,
        isIndexColumnVisible = _this$props2.isIndexColumnVisible,
        isSelectColumnVisible = _this$props2.isSelectColumnVisible,
        columns = _this$props2.columns,
        height = _this$props2.height;
    return React.createElement(Header, {
      id: id,
      height: height
    }, isSelectColumnVisible && this.renderSelectAllColumn(), isIndexColumnVisible && React.createElement(HeaderColumn, {
      width: 35
    }, "#"), columns && columns.map(this.renderColumn));
  };

  return ColumnHeader;
}(React.PureComponent);

export { ColumnHeader as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2x1bW4taGVhZGVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJDaGVja2JveCIsIkNvbHVtbiIsIkhlYWRlciIsImhlYWRlciIsInByb3BzIiwiaGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NyIsImdyZXk0IiwiSGVhZGVyQ29sdW1uIiwiQ29sdW1uSGVhZGVyIiwiaWQiLCJpc0FsbFNlbGVjdGVkIiwiaXNTZWxlY3RBbGxWaXNpYmxlIiwib25TZWxlY3RBbGxDaGFuZ2UiLCJjb2x1bW4iLCJpZHgiLCJ2YWx1ZUtleSIsIndpZHRoIiwiYWxpZ25tZW50IiwidGl0bGUiLCJyZW5kZXIiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImlzU2VsZWN0Q29sdW1uVmlzaWJsZSIsImNvbHVtbnMiLCJyZW5kZXJTZWxlY3RBbGxDb2x1bW4iLCJtYXAiLCJyZW5kZXJDb2x1bW4iLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsNEJBQXJCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixvQkFBbkI7QUFFQSxJQUFNQyxNQUFNLEdBQUdILE1BQU0sQ0FBQ0ksTUFBVixvQkFFQSxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxNQUFWO0FBQUEsQ0FGTCxFQUljLFVBQUFELEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsS0FBdkI7QUFBQSxDQUpuQixFQUtlLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsS0FBdkI7QUFBQSxDQUxwQixFQU1nQixVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLEtBQXZCO0FBQUEsQ0FOckIsRUFPSSxVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJFLEtBQXZCO0FBQUEsQ0FQVCxDQUFaO0FBVUEsSUFBTUMsWUFBWSxHQUFHWCxNQUFNLENBQUNFLE1BQUQsQ0FBVCxxQkFDVSxVQUFBRyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLEtBQXZCO0FBQUEsQ0FEZixDQUFsQjs7SUFJcUJHLFk7Ozs7Ozs7Ozs7Ozs7OzRFQVlLLFlBQU07QUFBQSx3QkFNeEIsTUFBS1AsS0FObUI7QUFBQSxVQUUxQlEsRUFGMEIsZUFFMUJBLEVBRjBCO0FBQUEsVUFHMUJDLGFBSDBCLGVBRzFCQSxhQUgwQjtBQUFBLFVBSTFCQyxrQkFKMEIsZUFJMUJBLGtCQUowQjtBQUFBLFVBSzFCQyxpQkFMMEIsZUFLMUJBLGlCQUwwQjtBQU81QixhQUNFLG9CQUFDLFlBQUQ7QUFBYyxRQUFBLEtBQUssRUFBRTtBQUFyQixTQUNHRCxrQkFBa0IsSUFDakIsb0JBQUMsUUFBRDtBQUNFLFFBQUEsRUFBRSxFQUFLRixFQUFMLGVBREo7QUFFRSxRQUFBLE9BQU8sRUFBRUMsYUFGWDtBQUdFLFFBQUEsUUFBUSxFQUFFRTtBQUhaLFFBRkosQ0FERjtBQVdELEs7O21FQUVjLFVBQUNDLE1BQUQsRUFBU0MsR0FBVDtBQUFBLGFBQ2Isb0JBQUMsWUFBRDtBQUNFLFFBQUEsR0FBRyxFQUFFRCxNQUFNLENBQUNFLFFBQVAsSUFBbUJELEdBRDFCO0FBRUUsUUFBQSxLQUFLLEVBQUVELE1BQU0sQ0FBQ0csS0FBUCxJQUFnQixHQUZ6QjtBQUdFLFFBQUEsU0FBUyxFQUFFSCxNQUFNLENBQUNJLFNBQVAsSUFBb0I7QUFIakMsU0FLRSxrQ0FBT0osTUFBTSxDQUFDSyxLQUFQLElBQWdCLEVBQXZCLENBTEYsQ0FEYTtBQUFBLEs7Ozs7Ozs7U0FVZkMsTSxHQUFBLGtCQUFTO0FBQUEsdUJBT0gsS0FBS2xCLEtBUEY7QUFBQSxRQUVMUSxFQUZLLGdCQUVMQSxFQUZLO0FBQUEsUUFHTFcsb0JBSEssZ0JBR0xBLG9CQUhLO0FBQUEsUUFJTEMscUJBSkssZ0JBSUxBLHFCQUpLO0FBQUEsUUFLTEMsT0FMSyxnQkFLTEEsT0FMSztBQUFBLFFBTUxwQixNQU5LLGdCQU1MQSxNQU5LO0FBUVAsV0FDRSxvQkFBQyxNQUFEO0FBQ0UsTUFBQSxFQUFFLEVBQUVPLEVBRE47QUFFRSxNQUFBLE1BQU0sRUFBRVA7QUFGVixPQUlHbUIscUJBQXFCLElBQUksS0FBS0UscUJBQUwsRUFKNUIsRUFLR0gsb0JBQW9CLElBQUksb0JBQUMsWUFBRDtBQUFjLE1BQUEsS0FBSyxFQUFFO0FBQXJCLFdBTDNCLEVBTUdFLE9BQU8sSUFBSUEsT0FBTyxDQUFDRSxHQUFSLENBQVksS0FBS0MsWUFBakIsQ0FOZCxDQURGO0FBVUQsRzs7O0VBNUR1Qy9CLEtBQUssQ0FBQ2dDLGE7O1NBQTNCbEIsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtY2hlY2tib3gnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL2NvbHVtbi5jb21wb25lbnQnO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTd9O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXk3fTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTd9O1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NH07XG5gO1xuXG5jb25zdCBIZWFkZXJDb2x1bW4gPSBzdHlsZWQoQ29sdW1uKWBcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTd9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sdW1uSGVhZGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpc1NlbGVjdENvbHVtblZpc2libGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaXNTZWxlY3RBbGxWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgaXNBbGxTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBvblNlbGVjdEFsbENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIHJlbmRlclNlbGVjdEFsbENvbHVtbiA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGlzQWxsU2VsZWN0ZWQsXG4gICAgICBpc1NlbGVjdEFsbFZpc2libGUsXG4gICAgICBvblNlbGVjdEFsbENoYW5nZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEhlYWRlckNvbHVtbiB3aWR0aD17MzV9PlxuICAgICAgICB7aXNTZWxlY3RBbGxWaXNpYmxlICYmIChcbiAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgIGlkPXtgJHtpZH0tc2VsZWN0YWxsYH1cbiAgICAgICAgICAgIGNoZWNrZWQ9e2lzQWxsU2VsZWN0ZWR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RBbGxDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvSGVhZGVyQ29sdW1uPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJDb2x1bW4gPSAoY29sdW1uLCBpZHgpID0+IChcbiAgICA8SGVhZGVyQ29sdW1uXG4gICAgICBrZXk9e2NvbHVtbi52YWx1ZUtleSB8fCBpZHh9XG4gICAgICB3aWR0aD17Y29sdW1uLndpZHRoIHx8IDIwMH1cbiAgICAgIGFsaWdubWVudD17Y29sdW1uLmFsaWdubWVudCB8fCAnZmxleC1zdGFydCd9XG4gICAgPlxuICAgICAgPHNwYW4+e2NvbHVtbi50aXRsZSB8fCAnJ308L3NwYW4+XG4gICAgPC9IZWFkZXJDb2x1bW4+XG4gIClcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpc0luZGV4Q29sdW1uVmlzaWJsZSxcbiAgICAgIGlzU2VsZWN0Q29sdW1uVmlzaWJsZSxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBoZWlnaHQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkZXJcbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgID5cbiAgICAgICAge2lzU2VsZWN0Q29sdW1uVmlzaWJsZSAmJiB0aGlzLnJlbmRlclNlbGVjdEFsbENvbHVtbigpfVxuICAgICAgICB7aXNJbmRleENvbHVtblZpc2libGUgJiYgPEhlYWRlckNvbHVtbiB3aWR0aD17MzV9PiM8L0hlYWRlckNvbHVtbj59XG4gICAgICAgIHtjb2x1bW5zICYmIGNvbHVtbnMubWFwKHRoaXMucmVuZGVyQ29sdW1uKX1cbiAgICAgIDwvSGVhZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==