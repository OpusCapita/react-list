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
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  height: ", "px;\n  border-bottom: ", ";\n  /* cursor: pointer; */\n  align-items: center;\n  background: ", ";\n  &:hover {\n    background: ", ";\n  }\n  user-select: none;\n"]);

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
  return props.height;
}, function (props) {
  return props.isItemBorderVisible ? "1px solid " + props.theme.colors.grey6 : 'none';
}, function (props) {
  return props.selected ? props.theme.colors.grey5 : props.theme.colors.white;
}, function (props) {
  return props.theme.colors.grey4;
});
var DefaultCellContainer = styled.span(_templateObject2(), function (props) {
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

    _defineProperty(_assertThisInitialized(_this), "renderSelectCell", function () {
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

    _defineProperty(_assertThisInitialized(_this), "renderIndexCell", function () {
      var _this$props2 = _this.props,
          id = _this$props2.id,
          rowIndex = _this$props2.rowIndex;
      return React.createElement(Column, {
        id: id + "-col-index",
        width: 35,
        alignment: "flex-start"
      }, rowIndex + 1);
    });

    _defineProperty(_assertThisInitialized(_this), "renderItemCell", function (column, idx) {
      var _this$props3 = _this.props,
          id = _this$props3.id,
          item = _this$props3.item;
      var key = column.valueKey || idx;
      var cell = null;

      if (typeof column.render === 'function') {
        cell = column.render(item, idx);
      } else if (column.valueKey) {
        cell = React.createElement(DefaultCellContainer, null, item[column.valueKey]);
      }

      return React.createElement(Column, {
        id: id + "-col-" + key,
        key: key,
        width: column.width || 200,
        alignment: column.alignment || 'flex-start'
      }, cell);
    });

    return _this;
  }

  var _proto = List.prototype;

  _proto.render = function render() {
    var _this$props4 = this.props,
        isSelectable = _this$props4.isSelectable,
        isIndexColumnVisible = _this$props4.isIndexColumnVisible,
        isItemBorderVisible = _this$props4.isItemBorderVisible,
        columns = _this$props4.columns,
        itemHeight = _this$props4.itemHeight;
    return React.createElement(Row, {
      height: itemHeight,
      isItemBorderVisible: isItemBorderVisible
    }, isSelectable && this.renderSelectCell(), isIndexColumnVisible && this.renderIndexCell(), columns.map(this.renderItemCell));
  };

  return List;
}(React.PureComponent);

export { List as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsIkNoZWNrYm94IiwiQ29sdW1uIiwiUm93IiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJpc0l0ZW1Cb3JkZXJWaXNpYmxlIiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NiIsInNlbGVjdGVkIiwiZ3JleTUiLCJ3aGl0ZSIsImdyZXk0IiwiRGVmYXVsdENlbGxDb250YWluZXIiLCJzcGFuIiwiaW5zaWRlVG9vbHRpcCIsIkxpc3QiLCJpZCIsImlzU2VsZWN0ZWQiLCJvblNlbGVjdENoYW5nZSIsInJvd0luZGV4IiwiY29sdW1uIiwiaWR4IiwiaXRlbSIsImtleSIsInZhbHVlS2V5IiwiY2VsbCIsInJlbmRlciIsIndpZHRoIiwiYWxpZ25tZW50IiwiaXNTZWxlY3RhYmxlIiwiaXNJbmRleENvbHVtblZpc2libGUiLCJjb2x1bW5zIiwiaXRlbUhlaWdodCIsInJlbmRlclNlbGVjdENlbGwiLCJyZW5kZXJJbmRleENlbGwiLCJtYXAiLCJyZW5kZXJJdGVtQ2VsbCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQiw0QkFBckI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG9CQUFuQjtBQUVBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxHQUFWLG9CQUVHLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE1BQVY7QUFBQSxDQUZSLEVBR1UsVUFBQUQsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0UsbUJBQU4sa0JBQXlDRixLQUFLLENBQUNHLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsS0FB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QUxLLGdCQUtMQSxPQUxLO0FBQUEsUUFNTEMsVUFOSyxnQkFNTEEsVUFOSztBQVFQLFdBQ0Usb0JBQUMsR0FBRDtBQUFLLE1BQUEsTUFBTSxFQUFFQSxVQUFiO0FBQXlCLE1BQUEsbUJBQW1CLEVBQUU1QjtBQUE5QyxPQUNHeUIsWUFBWSxJQUFJLEtBQUtJLGdCQUFMLEVBRG5CLEVBRUdILG9CQUFvQixJQUFJLEtBQUtJLGVBQUwsRUFGM0IsRUFHR0gsT0FBTyxDQUFDSSxHQUFSLENBQVksS0FBS0MsY0FBakIsQ0FISCxDQURGO0FBT0QsRzs7O0VBMUYrQnpDLEtBQUssQ0FBQzBDLGE7O1NBQW5CdEIsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtY2hlY2tib3gnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL2NvbHVtbi5jb21wb25lbnQnO1xuXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xuICBib3JkZXItYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5pc0l0ZW1Cb3JkZXJWaXNpYmxlID8gYDFweCBzb2xpZCAke3Byb3BzLnRoZW1lLmNvbG9ycy5ncmV5Nn1gIDogJ25vbmUnKX07XG4gIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiAocHJvcHMuc2VsZWN0ZWQgPyBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTUgOiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGUpfTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTR9O1xuICB9XG4gIHVzZXItc2VsZWN0OiBub25lO1xuYDtcblxuY29uc3QgRGVmYXVsdENlbGxDb250YWluZXIgPSBzdHlsZWQuc3BhbmBcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiAke3Byb3BzID0+ICghcHJvcHMuaW5zaWRlVG9vbHRpcCA/ICdub3dyYXAnIDogJ25vcm1hbCcpfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGl0ZW06IFByb3BUeXBlcy5zaGFwZSh7fSkuaXNSZXF1aXJlZCxcbiAgICBpdGVtSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgcm93SW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBpc0luZGV4Q29sdW1uVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc0l0ZW1Cb3JkZXJWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG4gICAgaXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBpc1NlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgb25TZWxlY3RDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH1cblxuICByZW5kZXJTZWxlY3RDZWxsID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXNTZWxlY3RlZCxcbiAgICAgIG9uU2VsZWN0Q2hhbmdlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGlkPXtgJHtpZH0tY29sLWluZGV4YH1cbiAgICAgICAgd2lkdGg9ezM1fVxuICAgICAgICBhbGlnbm1lbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgID5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgaWQ9e2Ake2lkfS1zZWxlY3RpdGVtYH1cbiAgICAgICAgICBjaGVja2VkPXtpc1NlbGVjdGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdENoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJJbmRleENlbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICByb3dJbmRleCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbHVtblxuICAgICAgICBpZD17YCR7aWR9LWNvbC1pbmRleGB9XG4gICAgICAgIHdpZHRoPXszNX1cbiAgICAgICAgYWxpZ25tZW50PVwiZmxleC1zdGFydFwiXG4gICAgICA+XG4gICAgICAgIHtyb3dJbmRleCArIDF9XG4gICAgICA8L0NvbHVtbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVySXRlbUNlbGwgPSAoY29sdW1uLCBpZHgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGl0ZW0sXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qga2V5ID0gY29sdW1uLnZhbHVlS2V5IHx8IGlkeDtcbiAgICBsZXQgY2VsbCA9IG51bGw7XG4gICAgaWYgKHR5cGVvZiBjb2x1bW4ucmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjZWxsID0gY29sdW1uLnJlbmRlcihpdGVtLCBpZHgpO1xuICAgIH0gZWxzZSBpZiAoY29sdW1uLnZhbHVlS2V5KSB7XG4gICAgICBjZWxsID0gPERlZmF1bHRDZWxsQ29udGFpbmVyPntpdGVtW2NvbHVtbi52YWx1ZUtleV19PC9EZWZhdWx0Q2VsbENvbnRhaW5lcj47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGlkPXtgJHtpZH0tY29sLSR7a2V5fWB9XG4gICAgICAgIGtleT17a2V5fVxuICAgICAgICB3aWR0aD17Y29sdW1uLndpZHRoIHx8IDIwMH1cbiAgICAgICAgYWxpZ25tZW50PXtjb2x1bW4uYWxpZ25tZW50IHx8ICdmbGV4LXN0YXJ0J31cbiAgICAgID5cbiAgICAgICAge2NlbGx9XG4gICAgICA8L0NvbHVtbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzU2VsZWN0YWJsZSxcbiAgICAgIGlzSW5kZXhDb2x1bW5WaXNpYmxlLFxuICAgICAgaXNJdGVtQm9yZGVyVmlzaWJsZSxcbiAgICAgIGNvbHVtbnMsXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Um93IGhlaWdodD17aXRlbUhlaWdodH0gaXNJdGVtQm9yZGVyVmlzaWJsZT17aXNJdGVtQm9yZGVyVmlzaWJsZX0+XG4gICAgICAgIHtpc1NlbGVjdGFibGUgJiYgdGhpcy5yZW5kZXJTZWxlY3RDZWxsKCl9XG4gICAgICAgIHtpc0luZGV4Q29sdW1uVmlzaWJsZSAmJiB0aGlzLnJlbmRlckluZGV4Q2VsbCgpfVxuICAgICAgICB7Y29sdW1ucy5tYXAodGhpcy5yZW5kZXJJdGVtQ2VsbCl9XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9XG59XG4iXX0=