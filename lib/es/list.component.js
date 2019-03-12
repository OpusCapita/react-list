function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  height: ", ";\n  width: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ResponsiveListContainer from './responsive-list-container.component';
import ColumnHeader from './column-header.component';
import Row from './row.component';
var ListContainer = styled.div(_templateObject(), function (props) {
  return props.height === 'auto' ? '100%' : props.height + "px";
}, function (props) {
  return props.width === 'auto' ? '100%' : props.width + "px";
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

    _defineProperty(_assertThisInitialized(_this), "renderRow", function (item, rowIndex) {
      var _this$props = _this.props,
          id = _this$props.id,
          idKey = _this$props.idKey,
          itemHeight = _this$props.itemHeight,
          showIndex = _this$props.showIndex,
          columns = _this$props.columns;
      return React.createElement(Row, {
        id: id + "-row-" + rowIndex,
        key: item[idKey],
        item: item,
        rowIndex: rowIndex,
        showIndex: showIndex,
        itemHeight: itemHeight,
        columns: columns
      });
    });

    return _this;
  }

  var _proto = List.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        id = _this$props2.id,
        columns = _this$props2.columns,
        showIndex = _this$props2.showIndex,
        height = _this$props2.height,
        width = _this$props2.width,
        columnHeaderHeight = _this$props2.columnHeaderHeight,
        showColumnHeader = _this$props2.showColumnHeader;
    return React.createElement(ListContainer, {
      height: height,
      width: width
    }, showColumnHeader && React.createElement(ColumnHeader, {
      id: id + "-column-header",
      columns: columns,
      showIndex: showIndex,
      height: columnHeaderHeight
    }), React.createElement(ResponsiveListContainer, this.props, this.props.items.map(this.renderRow)));
  };

  return List;
}(React.PureComponent);

_defineProperty(List, "defaultProps", {
  id: 'oc-react-list',
  className: '',
  height: 'auto',
  width: 'auto',
  itemHeight: 40,
  idKey: 'id',
  columns: [{
    valueKey: 'value',
    title: 'Value'
  }],
  showIndex: false,
  showColumnHeader: false,
  columnHeaderHeight: 40
});

export { List as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJSZXNwb25zaXZlTGlzdENvbnRhaW5lciIsIkNvbHVtbkhlYWRlciIsIlJvdyIsIkxpc3RDb250YWluZXIiLCJkaXYiLCJwcm9wcyIsImhlaWdodCIsIndpZHRoIiwiTGlzdCIsIml0ZW0iLCJyb3dJbmRleCIsImlkIiwiaWRLZXkiLCJpdGVtSGVpZ2h0Iiwic2hvd0luZGV4IiwiY29sdW1ucyIsInJlbmRlciIsImNvbHVtbkhlYWRlckhlaWdodCIsInNob3dDb2x1bW5IZWFkZXIiLCJpdGVtcyIsIm1hcCIsInJlbmRlclJvdyIsIlB1cmVDb21wb25lbnQiLCJjbGFzc05hbWUiLCJ2YWx1ZUtleSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsdUJBQVAsTUFBb0MsdUNBQXBDO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QiwyQkFBekI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLGlCQUFoQjtBQUVBLElBQU1DLGFBQWEsR0FBR0osTUFBTSxDQUFDSyxHQUFWLG9CQUNQLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLE1BQU4sS0FBaUIsTUFBakIsR0FBMEIsTUFBMUIsR0FBc0NELEtBQUssQ0FBQ0MsTUFBNUMsT0FBTDtBQUFBLENBREUsRUFFUixVQUFBRCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDRSxLQUFOLEtBQWdCLE1BQWhCLEdBQXlCLE1BQXpCLEdBQXFDRixLQUFLLENBQUNFLEtBQTNDLE9BQUw7QUFBQSxDQUZHLENBQW5COztJQUtxQkMsSTs7Ozs7Ozs7Ozs7Ozs7Z0VBa0NQLFVBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUFBLHdCQU8xQixNQUFLTCxLQVBxQjtBQUFBLFVBRTVCTSxFQUY0QixlQUU1QkEsRUFGNEI7QUFBQSxVQUc1QkMsS0FINEIsZUFHNUJBLEtBSDRCO0FBQUEsVUFJNUJDLFVBSjRCLGVBSTVCQSxVQUo0QjtBQUFBLFVBSzVCQyxTQUw0QixlQUs1QkEsU0FMNEI7QUFBQSxVQU01QkMsT0FONEIsZUFNNUJBLE9BTjRCO0FBUTlCLGFBQ0Usb0JBQUMsR0FBRDtBQUNFLFFBQUEsRUFBRSxFQUFLSixFQUFMLGFBQWVELFFBRG5CO0FBRUUsUUFBQSxHQUFHLEVBQUVELElBQUksQ0FBQ0csS0FBRCxDQUZYO0FBR0UsUUFBQSxJQUFJLEVBQUVILElBSFI7QUFJRSxRQUFBLFFBQVEsRUFBRUMsUUFKWjtBQUtFLFFBQUEsU0FBUyxFQUFFSSxTQUxiO0FBTUUsUUFBQSxVQUFVLEVBQUVELFVBTmQ7QUFPRSxRQUFBLE9BQU8sRUFBRUU7QUFQWCxRQURGO0FBV0QsSzs7Ozs7OztTQUVEQyxNLEdBQUEsa0JBQVM7QUFBQSx1QkFTSCxLQUFLWCxLQVRGO0FBQUEsUUFFTE0sRUFGSyxnQkFFTEEsRUFGSztBQUFBLFFBR0xJLE9BSEssZ0JBR0xBLE9BSEs7QUFBQSxRQUlMRCxTQUpLLGdCQUlMQSxTQUpLO0FBQUEsUUFLTFIsTUFMSyxnQkFLTEEsTUFMSztBQUFBLFFBTUxDLEtBTkssZ0JBTUxBLEtBTks7QUFBQSxRQU9MVSxrQkFQSyxnQkFPTEEsa0JBUEs7QUFBQSxRQVFMQyxnQkFSSyxnQkFRTEEsZ0JBUks7QUFVUCxXQUNFLG9CQUFDLGFBQUQ7QUFBZSxNQUFBLE1BQU0sRUFBRVosTUFBdkI7QUFBK0IsTUFBQSxLQUFLLEVBQUVDO0FBQXRDLE9BQ0dXLGdCQUFnQixJQUNmLG9CQUFDLFlBQUQ7QUFDRSxNQUFBLEVBQUUsRUFBS1AsRUFBTCxtQkFESjtBQUVFLE1BQUEsT0FBTyxFQUFFSSxPQUZYO0FBR0UsTUFBQSxTQUFTLEVBQUVELFNBSGI7QUFJRSxNQUFBLE1BQU0sRUFBRUc7QUFKVixNQUZKLEVBU0Usb0JBQUMsdUJBQUQsRUFBNkIsS0FBS1osS0FBbEMsRUFDRyxLQUFLQSxLQUFMLENBQVdjLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXFCLEtBQUtDLFNBQTFCLENBREgsQ0FURixDQURGO0FBZUQsRzs7O0VBaEYrQnhCLEtBQUssQ0FBQ3lCLGE7O2dCQUFuQmQsSSxrQkFxQkc7QUFDcEJHLEVBQUFBLEVBQUUsRUFBRSxlQURnQjtBQUVwQlksRUFBQUEsU0FBUyxFQUFFLEVBRlM7QUFHcEJqQixFQUFBQSxNQUFNLEVBQUUsTUFIWTtBQUlwQkMsRUFBQUEsS0FBSyxFQUFFLE1BSmE7QUFLcEJNLEVBQUFBLFVBQVUsRUFBRSxFQUxRO0FBTXBCRCxFQUFBQSxLQUFLLEVBQUUsSUFOYTtBQU9wQkcsRUFBQUEsT0FBTyxFQUFFLENBQUM7QUFBRVMsSUFBQUEsUUFBUSxFQUFFLE9BQVo7QUFBcUJDLElBQUFBLEtBQUssRUFBRTtBQUE1QixHQUFELENBUFc7QUFRcEJYLEVBQUFBLFNBQVMsRUFBRSxLQVJTO0FBU3BCSSxFQUFBQSxnQkFBZ0IsRUFBRSxLQVRFO0FBVXBCRCxFQUFBQSxrQkFBa0IsRUFBRTtBQVZBLEM7O1NBckJIVCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZXNwb25zaXZlTGlzdENvbnRhaW5lciBmcm9tICcuL3Jlc3BvbnNpdmUtbGlzdC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCBDb2x1bW5IZWFkZXIgZnJvbSAnLi9jb2x1bW4taGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgUm93IGZyb20gJy4vcm93LmNvbXBvbmVudCc7XG5cbmNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmhlaWdodCA9PT0gJ2F1dG8nID8gJzEwMCUnIDogYCR7cHJvcHMuaGVpZ2h0fXB4YCl9O1xuICB3aWR0aDogJHtwcm9wcyA9PiAocHJvcHMud2lkdGggPT09ICdhdXRvJyA/ICcxMDAlJyA6IGAke3Byb3BzLndpZHRofXB4YCl9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSksXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSksXG4gICAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpZEtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaG93SW5kZXg6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dDb2x1bW5IZWFkZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaWQ6ICdvYy1yZWFjdC1saXN0JyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgaXRlbUhlaWdodDogNDAsXG4gICAgaWRLZXk6ICdpZCcsXG4gICAgY29sdW1uczogW3sgdmFsdWVLZXk6ICd2YWx1ZScsIHRpdGxlOiAnVmFsdWUnIH1dLFxuICAgIHNob3dJbmRleDogZmFsc2UsXG4gICAgc2hvd0NvbHVtbkhlYWRlcjogZmFsc2UsXG4gICAgY29sdW1uSGVhZGVySGVpZ2h0OiA0MCxcbiAgfVxuXG4gIHJlbmRlclJvdyA9IChpdGVtLCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaWRLZXksXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgICAgc2hvd0luZGV4LFxuICAgICAgY29sdW1ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJvd1xuICAgICAgICBpZD17YCR7aWR9LXJvdy0ke3Jvd0luZGV4fWB9XG4gICAgICAgIGtleT17aXRlbVtpZEtleV19XG4gICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgIHJvd0luZGV4PXtyb3dJbmRleH1cbiAgICAgICAgc2hvd0luZGV4PXtzaG93SW5kZXh9XG4gICAgICAgIGl0ZW1IZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBjb2x1bW5zLFxuICAgICAgc2hvd0luZGV4LFxuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGgsXG4gICAgICBjb2x1bW5IZWFkZXJIZWlnaHQsXG4gICAgICBzaG93Q29sdW1uSGVhZGVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdENvbnRhaW5lciBoZWlnaHQ9e2hlaWdodH0gd2lkdGg9e3dpZHRofT5cbiAgICAgICAge3Nob3dDb2x1bW5IZWFkZXIgJiYgKFxuICAgICAgICAgIDxDb2x1bW5IZWFkZXJcbiAgICAgICAgICAgIGlkPXtgJHtpZH0tY29sdW1uLWhlYWRlcmB9XG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgc2hvd0luZGV4PXtzaG93SW5kZXh9XG4gICAgICAgICAgICBoZWlnaHQ9e2NvbHVtbkhlYWRlckhlaWdodH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8UmVzcG9uc2l2ZUxpc3RDb250YWluZXIgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLml0ZW1zLm1hcCh0aGlzLnJlbmRlclJvdyl9XG4gICAgICAgIDwvUmVzcG9uc2l2ZUxpc3RDb250YWluZXI+XG4gICAgICA8L0xpc3RDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuIl19