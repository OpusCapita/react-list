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
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  height: ", "px;\n  cursor: pointer;\n  align-items: center;\n  background: ", ";\n  &:hover {\n    background: ", ";\n  }\n  user-select: none;\n"]);

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
var Row = styled.div(_templateObject(), function (props) {
  return props.height - 1;
}, function (props) {
  return props.selected ? theme.colors.grey5 : theme.colors.white;
}, theme.colors.grey4);
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

    _defineProperty(_assertThisInitialized(_this), "renderItemColumn", function (column) {
      var _this$props = _this.props,
          id = _this$props.id,
          item = _this$props.item;
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
    var _this$props2 = this.props,
        id = _this$props2.id,
        showIndex = _this$props2.showIndex,
        columns = _this$props2.columns,
        rowIndex = _this$props2.rowIndex,
        itemHeight = _this$props2.itemHeight;
    return React.createElement(Row, {
      height: itemHeight
    }, showIndex && React.createElement(Column, {
      id: id + "-col-index",
      width: 30,
      alignment: "flex-start"
    }, rowIndex + 1), !!columns && columns.map(this.renderItemColumn));
  };

  return List;
}(React.PureComponent);

export { List as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsIkNvbHVtbiIsInRoZW1lIiwiUm93IiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJzZWxlY3RlZCIsImNvbG9ycyIsImdyZXk1Iiwid2hpdGUiLCJncmV5NCIsIkRlZmF1bHRUZXh0Q29udGFpbmVyIiwic3BhbiIsImluc2lkZVRvb2x0aXAiLCJMaXN0IiwiY29sdW1uIiwiaWQiLCJpdGVtIiwidmFsdWVLZXkiLCJ3aWR0aCIsImFsaWdubWVudCIsInJlbmRlciIsInNob3dJbmRleCIsImNvbHVtbnMiLCJyb3dJbmRleCIsIml0ZW1IZWlnaHQiLCJtYXAiLCJyZW5kZXJJdGVtQ29sdW1uIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG9CQUFuQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsU0FBbEI7QUFFQSxJQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksR0FBVixvQkFFRyxVQUFBQyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxNQUFOLEdBQWUsQ0FBcEI7QUFBQSxDQUZSLEVBS08sVUFBQUQsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0UsUUFBTixHQUFpQkwsS0FBSyxDQUFDTSxNQUFOLENBQWFDLEtBQTlCLEdBQXNDUCxLQUFLLENBQUNNLE1BQU4sQ0FBYUUsS0FBeEQ7QUFBQSxDQUxaLEVBT1NSLEtBQUssQ0FBQ00sTUFBTixDQUFhRyxLQVB0QixDQUFUO0FBWUEsSUFBTUMsb0JBQW9CLEdBQUdaLE1BQU0sQ0FBQ2EsSUFBVixxQkFFVCxVQUFBUixLQUFLO0FBQUEsU0FBSyxDQUFDQSxLQUFLLENBQUNTLGFBQVAsR0FBdUIsUUFBdkIsR0FBa0MsUUFBdkM7QUFBQSxDQUZJLENBQTFCOztJQU1xQkMsSTs7Ozs7Ozs7Ozs7Ozs7dUVBVUEsVUFBQ0MsTUFBRCxFQUFZO0FBQUEsd0JBSXpCLE1BQUtYLEtBSm9CO0FBQUEsVUFFM0JZLEVBRjJCLGVBRTNCQSxFQUYyQjtBQUFBLFVBRzNCQyxJQUgyQixlQUczQkEsSUFIMkI7QUFLN0IsYUFDRSxvQkFBQyxNQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUtELEVBQUwsYUFBZUQsTUFBTSxDQUFDRyxRQUQxQjtBQUVFLFFBQUEsR0FBRyxFQUFFSCxNQUFNLENBQUNHLFFBRmQ7QUFHRSxRQUFBLEtBQUssRUFBRUgsTUFBTSxDQUFDSSxLQUFQLElBQWdCLEdBSHpCO0FBSUUsUUFBQSxTQUFTLEVBQUVKLE1BQU0sQ0FBQ0ssU0FBUCxJQUFvQjtBQUpqQyxTQU1FLG9CQUFDLG9CQUFELFFBQ0dILElBQUksQ0FBQ0YsTUFBTSxDQUFDRyxRQUFSLENBRFAsQ0FORixDQURGO0FBWUQsSzs7Ozs7OztTQUVERyxNLEdBQUEsa0JBQVM7QUFBQSx1QkFPSCxLQUFLakIsS0FQRjtBQUFBLFFBRUxZLEVBRkssZ0JBRUxBLEVBRks7QUFBQSxRQUdMTSxTQUhLLGdCQUdMQSxTQUhLO0FBQUEsUUFJTEMsT0FKSyxnQkFJTEEsT0FKSztBQUFBLFFBS0xDLFFBTEssZ0JBS0xBLFFBTEs7QUFBQSxRQU1MQyxVQU5LLGdCQU1MQSxVQU5LO0FBUVAsV0FDRSxvQkFBQyxHQUFEO0FBQ0UsTUFBQSxNQUFNLEVBQUVBO0FBRFYsT0FHR0gsU0FBUyxJQUNSLG9CQUFDLE1BQUQ7QUFDRSxNQUFBLEVBQUUsRUFBS04sRUFBTCxlQURKO0FBRUUsTUFBQSxLQUFLLEVBQUUsRUFGVDtBQUdFLE1BQUEsU0FBUyxFQUFDO0FBSFosT0FLR1EsUUFBUSxHQUFHLENBTGQsQ0FKSixFQVlHLENBQUMsQ0FBQ0QsT0FBRixJQUFhQSxPQUFPLENBQUNHLEdBQVIsQ0FBWSxLQUFLQyxnQkFBakIsQ0FaaEIsQ0FERjtBQWdCRCxHOzs7RUFyRCtCOUIsS0FBSyxDQUFDK0IsYTs7U0FBbkJkLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL2NvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4vdGhlbWUnO1xuXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmhlaWdodCAtIDEpfXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gKHByb3BzLnNlbGVjdGVkID8gdGhlbWUuY29sb3JzLmdyZXk1IDogdGhlbWUuY29sb3JzLndoaXRlKX07XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmdyZXk0fTtcbiAgfVxuICB1c2VyLXNlbGVjdDogbm9uZTtcbmA7XG5cbmNvbnN0IERlZmF1bHRUZXh0Q29udGFpbmVyID0gc3R5bGVkLnNwYW5gXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogJHtwcm9wcyA9PiAoIXByb3BzLmluc2lkZVRvb2x0aXAgPyAnbm93cmFwJyA6ICdub3JtYWwnKX07XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpdGVtOiBQcm9wVHlwZXMuc2hhcGUoe30pLmlzUmVxdWlyZWQsXG4gICAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgc2hvd0luZGV4OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG4gIH1cblxuICByZW5kZXJJdGVtQ29sdW1uID0gKGNvbHVtbikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXRlbSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbHVtblxuICAgICAgICBpZD17YCR7aWR9LWNvbC0ke2NvbHVtbi52YWx1ZUtleX1gfVxuICAgICAgICBrZXk9e2NvbHVtbi52YWx1ZUtleX1cbiAgICAgICAgd2lkdGg9e2NvbHVtbi53aWR0aCB8fCAyMDB9XG4gICAgICAgIGFsaWdubWVudD17Y29sdW1uLmFsaWdubWVudCB8fCAnZmxleC1zdGFydCd9XG4gICAgICA+XG4gICAgICAgIDxEZWZhdWx0VGV4dENvbnRhaW5lcj5cbiAgICAgICAgICB7aXRlbVtjb2x1bW4udmFsdWVLZXldfVxuICAgICAgICA8L0RlZmF1bHRUZXh0Q29udGFpbmVyPlxuICAgICAgPC9Db2x1bW4+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHNob3dJbmRleCxcbiAgICAgIGNvbHVtbnMsXG4gICAgICByb3dJbmRleCxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3dcbiAgICAgICAgaGVpZ2h0PXtpdGVtSGVpZ2h0fVxuICAgICAgPlxuICAgICAgICB7c2hvd0luZGV4ICYmIChcbiAgICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgICBpZD17YCR7aWR9LWNvbC1pbmRleGB9XG4gICAgICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgICAgICBhbGlnbm1lbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cm93SW5kZXggKyAxfVxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICApfVxuICAgICAgICB7ISFjb2x1bW5zICYmIGNvbHVtbnMubWFwKHRoaXMucmVuZGVySXRlbUNvbHVtbil9XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9XG59XG4iXX0=