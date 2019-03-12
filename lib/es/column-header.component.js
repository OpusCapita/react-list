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
import Column from './column.component';
import theme from './theme';
var Header = styled.header(_templateObject(), function (props) {
  return props.height;
}, theme.colors.grey7, theme.colors.grey7, theme.colors.grey7, theme.colors.grey4);
var HeaderColumn = styled(Column)(_templateObject2(), theme.colors.grey7);

var ColumnHeader =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ColumnHeader, _React$PureComponent);

  function ColumnHeader() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = ColumnHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        showIndex = _this$props.showIndex,
        columns = _this$props.columns,
        height = _this$props.height;
    return React.createElement(Header, {
      id: id,
      height: height
    }, showIndex && React.createElement(HeaderColumn, {
      width: 30
    }, "#"), columns && columns.map(ColumnHeader.renderColumn));
  };

  return ColumnHeader;
}(React.PureComponent);

_defineProperty(ColumnHeader, "renderColumn", function (column) {
  return React.createElement(HeaderColumn, {
    key: column.valueKey,
    width: column.width || 200,
    alignment: column.alignment || 'flex-start'
  }, React.createElement("span", null, column.title));
});

export { ColumnHeader as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2x1bW4taGVhZGVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJDb2x1bW4iLCJ0aGVtZSIsIkhlYWRlciIsImhlYWRlciIsInByb3BzIiwiaGVpZ2h0IiwiY29sb3JzIiwiZ3JleTciLCJncmV5NCIsIkhlYWRlckNvbHVtbiIsIkNvbHVtbkhlYWRlciIsInJlbmRlciIsImlkIiwic2hvd0luZGV4IiwiY29sdW1ucyIsIm1hcCIsInJlbmRlckNvbHVtbiIsIlB1cmVDb21wb25lbnQiLCJjb2x1bW4iLCJ2YWx1ZUtleSIsIndpZHRoIiwiYWxpZ25tZW50IiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsb0JBQW5CO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixTQUFsQjtBQUVBLElBQU1DLE1BQU0sR0FBR0gsTUFBTSxDQUFDSSxNQUFWLG9CQUVBLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE1BQVY7QUFBQSxDQUZMLEVBSWNKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxLQUozQixFQUtlTixLQUFLLENBQUNLLE1BQU4sQ0FBYUMsS0FMNUIsRUFNZ0JOLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxLQU43QixFQU9JTixLQUFLLENBQUNLLE1BQU4sQ0FBYUUsS0FQakIsQ0FBWjtBQVVBLElBQU1DLFlBQVksR0FBR1YsTUFBTSxDQUFDQyxNQUFELENBQVQscUJBQ1VDLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxLQUR2QixDQUFsQjs7SUFJcUJHLFk7Ozs7Ozs7Ozs7O1NBa0JuQkMsTSxHQUFBLGtCQUFTO0FBQUEsc0JBTUgsS0FBS1AsS0FORjtBQUFBLFFBRUxRLEVBRkssZUFFTEEsRUFGSztBQUFBLFFBR0xDLFNBSEssZUFHTEEsU0FISztBQUFBLFFBSUxDLE9BSkssZUFJTEEsT0FKSztBQUFBLFFBS0xULE1BTEssZUFLTEEsTUFMSztBQU9QLFdBQ0Usb0JBQUMsTUFBRDtBQUNFLE1BQUEsRUFBRSxFQUFFTyxFQUROO0FBRUUsTUFBQSxNQUFNLEVBQUVQO0FBRlYsT0FJR1EsU0FBUyxJQUFJLG9CQUFDLFlBQUQ7QUFBYyxNQUFBLEtBQUssRUFBRTtBQUFyQixXQUpoQixFQUtHQyxPQUFPLElBQUlBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxZQUFZLENBQUNNLFlBQXpCLENBTGQsQ0FERjtBQVNELEc7OztFQWxDdUNuQixLQUFLLENBQUNvQixhOztnQkFBM0JQLFksa0JBUUcsVUFBQVEsTUFBTTtBQUFBLFNBQzFCLG9CQUFDLFlBQUQ7QUFDRSxJQUFBLEdBQUcsRUFBRUEsTUFBTSxDQUFDQyxRQURkO0FBRUUsSUFBQSxLQUFLLEVBQUVELE1BQU0sQ0FBQ0UsS0FBUCxJQUFnQixHQUZ6QjtBQUdFLElBQUEsU0FBUyxFQUFFRixNQUFNLENBQUNHLFNBQVAsSUFBb0I7QUFIakMsS0FLRSxrQ0FBT0gsTUFBTSxDQUFDSSxLQUFkLENBTEYsQ0FEMEI7QUFBQSxDOztTQVJUWixZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB0aGVtZSBmcm9tICcuL3RoZW1lJztcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodH1weDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmdyZXk3fTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ncmV5N307XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmdyZXk3fTtcbiAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuZ3JleTR9O1xuYDtcblxuY29uc3QgSGVhZGVyQ29sdW1uID0gc3R5bGVkKENvbHVtbilgXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmdyZXk3fTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbHVtbkhlYWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc2hvd0luZGV4OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIH1cblxuICBzdGF0aWMgcmVuZGVyQ29sdW1uID0gY29sdW1uID0+IChcbiAgICA8SGVhZGVyQ29sdW1uXG4gICAgICBrZXk9e2NvbHVtbi52YWx1ZUtleX1cbiAgICAgIHdpZHRoPXtjb2x1bW4ud2lkdGggfHwgMjAwfVxuICAgICAgYWxpZ25tZW50PXtjb2x1bW4uYWxpZ25tZW50IHx8ICdmbGV4LXN0YXJ0J31cbiAgICA+XG4gICAgICA8c3Bhbj57Y29sdW1uLnRpdGxlfTwvc3Bhbj5cbiAgICA8L0hlYWRlckNvbHVtbj5cbiAgKVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHNob3dJbmRleCxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBoZWlnaHQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkZXJcbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgID5cbiAgICAgICAge3Nob3dJbmRleCAmJiA8SGVhZGVyQ29sdW1uIHdpZHRoPXszMH0+IzwvSGVhZGVyQ29sdW1uPn1cbiAgICAgICAge2NvbHVtbnMgJiYgY29sdW1ucy5tYXAoQ29sdW1uSGVhZGVyLnJlbmRlckNvbHVtbil9XG4gICAgICA8L0hlYWRlcj5cbiAgICApO1xuICB9XG59XG4iXX0=