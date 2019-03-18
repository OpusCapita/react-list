function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  text-overflow: ellipsis;\n  white-space: ", ";\n  overflow: hidden;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  height: ", "px;\n  /* cursor: pointer; */\n  align-items: center;\n  background: ", ";\n  /* &:hover {\n    background: ", ";\n  } */\n  user-select: none;\n"]);

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
var Row = styled.div(_templateObject(), function (props) {
  return props.height - 1;
}, function (props) {
  return props.selected ? props.theme.colors.grey5 : props.theme.colors.white;
}, function (props) {
  return props.theme.colors.grey4;
});
var DefaultTextContainer = styled.span(_templateObject2(), function (props) {
  return !props.insideTooltip ? 'nowrap' : 'normal';
});

var List =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(List, _React$PureComponent);

  function List() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "renderSelectColumn", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          isSelected = _this$props.isSelected,
          onSelectChange = _this$props.onSelectChange;
      return React.createElement(Column, {
        id: id + "-col-index",
        width: 35,
        alignment: "flex-start"
      }, React.createElement(Checkbox, {
        id: id + "-selectitem",
        checked: isSelected,
        onChange: onSelectChange
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderIndexColumn", function () {
      var _this$props2 = _this.props,
          id = _this$props2.id,
          rowIndex = _this$props2.rowIndex;
      return React.createElement(Column, {
        id: id + "-col-index",
        width: 35,
        alignment: "flex-start"
      }, rowIndex + 1);
    });

    _defineProperty(_assertThisInitialized(_this), "renderItemColumn", function (column) {
      var _this$props3 = _this.props,
          id = _this$props3.id,
          item = _this$props3.item;
      return React.createElement(Column, {
        id: id + "-col-" + column.valueKey,
        key: column.valueKey,
        width: column.width || 200,
        alignment: column.alignment || 'flex-start'
      }, React.createElement(DefaultTextContainer, null, item[column.valueKey]));
    });

    return _this;
  }

  var _proto = List.prototype;

  _proto.render = function render() {
    var _this$props4 = this.props,
        isIndexColumnVisible = _this$props4.isIndexColumnVisible,
        columns = _this$props4.columns,
        itemHeight = _this$props4.itemHeight,
        isSelectable = _this$props4.isSelectable;
    return React.createElement(Row, {
      height: itemHeight
    }, isSelectable && this.renderSelectColumn(), isIndexColumnVisible && this.renderIndexColumn(), columns.map(this.renderItemColumn));
  };

  return List;
}(React.PureComponent);

export { List as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsIkNoZWNrYm94IiwiQ29sdW1uIiwiUm93IiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJzZWxlY3RlZCIsInRoZW1lIiwiY29sb3JzIiwiZ3JleTUiLCJ3aGl0ZSIsImdyZXk0IiwiRGVmYXVsdFRleHRDb250YWluZXIiLCJzcGFuIiwiaW5zaWRlVG9vbHRpcCIsIkxpc3QiLCJpZCIsImlzU2VsZWN0ZWQiLCJvblNlbGVjdENoYW5nZSIsInJvd0luZGV4IiwiY29sdW1uIiwiaXRlbSIsInZhbHVlS2V5Iiwid2lkdGgiLCJhbGlnbm1lbnQiLCJyZW5kZXIiLCJpc0luZGV4Q29sdW1uVmlzaWJsZSIsImNvbHVtbnMiLCJpdGVtSGVpZ2h0IiwiaXNTZWxlY3RhYmxlIiwicmVuZGVyU2VsZWN0Q29sdW1uIiwicmVuZGVySW5kZXhDb2x1bW4iLCJtYXAiLCJyZW5kZXJJdGVtQ29sdW1uIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLDRCQUFyQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsb0JBQW5CO0FBRUEsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLEdBQVYsb0JBRUcsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsTUFBTixHQUFlLENBQXBCO0FBQUEsQ0FGUixFQUtPLFVBQUFELEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNFLFFBQU4sR0FBaUJGLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxNQUFaLENBQW1CQyxLQUFwQyxHQUE0Q0wsS0FBSyxDQUFDRyxLQUFOLENBQVlDLE1BQVosQ0FBbUJFLEtBQXBFO0FBQUEsQ0FMWixFQU9TLFVBQUFOLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNHLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkcsS0FBdkI7QUFBQSxDQVBkLENBQVQ7QUFZQSxJQUFNQyxvQkFBb0IsR0FBR2IsTUFBTSxDQUFDYyxJQUFWLHFCQUVULFVBQUFULEtBQUs7QUFBQSxTQUFLLENBQUNBLEtBQUssQ0FBQ1UsYUFBUCxHQUF1QixRQUF2QixHQUFrQyxRQUF2QztBQUFBLENBRkksQ0FBMUI7O0lBTXFCQyxJOzs7Ozs7Ozs7Ozs7Ozt5RUFhRSxZQUFNO0FBQUEsd0JBS3JCLE1BQUtYLEtBTGdCO0FBQUEsVUFFdkJZLEVBRnVCLGVBRXZCQSxFQUZ1QjtBQUFBLFVBR3ZCQyxVQUh1QixlQUd2QkEsVUFIdUI7QUFBQSxVQUl2QkMsY0FKdUIsZUFJdkJBLGNBSnVCO0FBTXpCLGFBQ0Usb0JBQUMsTUFBRDtBQUNFLFFBQUEsRUFBRSxFQUFLRixFQUFMLGVBREo7QUFFRSxRQUFBLEtBQUssRUFBRSxFQUZUO0FBR0UsUUFBQSxTQUFTLEVBQUM7QUFIWixTQUtFLG9CQUFDLFFBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBS0EsRUFBTCxnQkFESjtBQUVFLFFBQUEsT0FBTyxFQUFFQyxVQUZYO0FBR0UsUUFBQSxRQUFRLEVBQUVDO0FBSFosUUFMRixDQURGO0FBYUQsSzs7d0VBRW1CLFlBQU07QUFBQSx5QkFJcEIsTUFBS2QsS0FKZTtBQUFBLFVBRXRCWSxFQUZzQixnQkFFdEJBLEVBRnNCO0FBQUEsVUFHdEJHLFFBSHNCLGdCQUd0QkEsUUFIc0I7QUFLeEIsYUFDRSxvQkFBQyxNQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUtILEVBQUwsZUFESjtBQUVFLFFBQUEsS0FBSyxFQUFFLEVBRlQ7QUFHRSxRQUFBLFNBQVMsRUFBQztBQUhaLFNBS0dHLFFBQVEsR0FBRyxDQUxkLENBREY7QUFTRCxLOzt1RUFFa0IsVUFBQ0MsTUFBRCxFQUFZO0FBQUEseUJBSXpCLE1BQUtoQixLQUpvQjtBQUFBLFVBRTNCWSxFQUYyQixnQkFFM0JBLEVBRjJCO0FBQUEsVUFHM0JLLElBSDJCLGdCQUczQkEsSUFIMkI7QUFLN0IsYUFDRSxvQkFBQyxNQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUtMLEVBQUwsYUFBZUksTUFBTSxDQUFDRSxRQUQxQjtBQUVFLFFBQUEsR0FBRyxFQUFFRixNQUFNLENBQUNFLFFBRmQ7QUFHRSxRQUFBLEtBQUssRUFBRUYsTUFBTSxDQUFDRyxLQUFQLElBQWdCLEdBSHpCO0FBSUUsUUFBQSxTQUFTLEVBQUVILE1BQU0sQ0FBQ0ksU0FBUCxJQUFvQjtBQUpqQyxTQU1FLG9CQUFDLG9CQUFELFFBQ0dILElBQUksQ0FBQ0QsTUFBTSxDQUFDRSxRQUFSLENBRFAsQ0FORixDQURGO0FBWUQsSzs7Ozs7OztTQUVERyxNLEdBQUEsa0JBQVM7QUFBQSx1QkFNSCxLQUFLckIsS0FORjtBQUFBLFFBRUxzQixvQkFGSyxnQkFFTEEsb0JBRks7QUFBQSxRQUdMQyxPQUhLLGdCQUdMQSxPQUhLO0FBQUEsUUFJTEMsVUFKSyxnQkFJTEEsVUFKSztBQUFBLFFBS0xDLFlBTEssZ0JBS0xBLFlBTEs7QUFPUCxXQUNFLG9CQUFDLEdBQUQ7QUFBSyxNQUFBLE1BQU0sRUFBRUQ7QUFBYixPQUNHQyxZQUFZLElBQUksS0FBS0Msa0JBQUwsRUFEbkIsRUFFR0osb0JBQW9CLElBQUksS0FBS0ssaUJBQUwsRUFGM0IsRUFHR0osT0FBTyxDQUFDSyxHQUFSLENBQVksS0FBS0MsZ0JBQWpCLENBSEgsQ0FERjtBQU9ELEc7OztFQW5GK0JwQyxLQUFLLENBQUNxQyxhOztTQUFuQm5CLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWNoZWNrYm94JztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9jb2x1bW4uY29tcG9uZW50JztcblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5oZWlnaHQgLSAxKX1weDtcbiAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IChwcm9wcy5zZWxlY3RlZCA/IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NSA6IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZSl9O1xuICAvKiAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5NH07XG4gIH0gKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5gO1xuXG5jb25zdCBEZWZhdWx0VGV4dENvbnRhaW5lciA9IHN0eWxlZC5zcGFuYFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6ICR7cHJvcHMgPT4gKCFwcm9wcy5pbnNpZGVUb29sdGlwID8gJ25vd3JhcCcgOiAnbm9ybWFsJyl9O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaXRlbTogUHJvcFR5cGVzLnNoYXBlKHt9KS5pc1JlcXVpcmVkLFxuICAgIGl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICByb3dJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG4gICAgaXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc1NlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgb25TZWxlY3RDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH1cblxuICByZW5kZXJTZWxlY3RDb2x1bW4gPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpc1NlbGVjdGVkLFxuICAgICAgb25TZWxlY3RDaGFuZ2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgaWQ9e2Ake2lkfS1jb2wtaW5kZXhgfVxuICAgICAgICB3aWR0aD17MzV9XG4gICAgICAgIGFsaWdubWVudD1cImZsZXgtc3RhcnRcIlxuICAgICAgPlxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICBpZD17YCR7aWR9LXNlbGVjdGl0ZW1gfVxuICAgICAgICAgIGNoZWNrZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9Db2x1bW4+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckluZGV4Q29sdW1uID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgcm93SW5kZXgsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgaWQ9e2Ake2lkfS1jb2wtaW5kZXhgfVxuICAgICAgICB3aWR0aD17MzV9XG4gICAgICAgIGFsaWdubWVudD1cImZsZXgtc3RhcnRcIlxuICAgICAgPlxuICAgICAgICB7cm93SW5kZXggKyAxfVxuICAgICAgPC9Db2x1bW4+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1Db2x1bW4gPSAoY29sdW1uKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBpdGVtLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGlkPXtgJHtpZH0tY29sLSR7Y29sdW1uLnZhbHVlS2V5fWB9XG4gICAgICAgIGtleT17Y29sdW1uLnZhbHVlS2V5fVxuICAgICAgICB3aWR0aD17Y29sdW1uLndpZHRoIHx8IDIwMH1cbiAgICAgICAgYWxpZ25tZW50PXtjb2x1bW4uYWxpZ25tZW50IHx8ICdmbGV4LXN0YXJ0J31cbiAgICAgID5cbiAgICAgICAgPERlZmF1bHRUZXh0Q29udGFpbmVyPlxuICAgICAgICAgIHtpdGVtW2NvbHVtbi52YWx1ZUtleV19XG4gICAgICAgIDwvRGVmYXVsdFRleHRDb250YWluZXI+XG4gICAgICA8L0NvbHVtbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgICBpc1NlbGVjdGFibGUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3cgaGVpZ2h0PXtpdGVtSGVpZ2h0fT5cbiAgICAgICAge2lzU2VsZWN0YWJsZSAmJiB0aGlzLnJlbmRlclNlbGVjdENvbHVtbigpfVxuICAgICAgICB7aXNJbmRleENvbHVtblZpc2libGUgJiYgdGhpcy5yZW5kZXJJbmRleENvbHVtbigpfVxuICAgICAgICB7Y29sdW1ucy5tYXAodGhpcy5yZW5kZXJJdGVtQ29sdW1uKX1cbiAgICAgIDwvUm93PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==