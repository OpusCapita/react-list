"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _responsiveListContainer = _interopRequireDefault(require("./responsive-list-container.component"));

var _columnHeader = _interopRequireDefault(require("./column-header.component"));

var _row = _interopRequireDefault(require("./row.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ListContainer = _styledComponents.default.div(_templateObject(), function (props) {
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
      return _react.default.createElement(_row.default, {
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
    return _react.default.createElement(ListContainer, {
      height: height,
      width: width
    }, showColumnHeader && _react.default.createElement(_columnHeader.default, {
      id: id + "-column-header",
      columns: columns,
      showIndex: showIndex,
      height: columnHeaderHeight
    }), _react.default.createElement(_responsiveListContainer.default, this.props, this.props.items.map(this.renderRow)));
  };

  return List;
}(_react.default.PureComponent);

exports.default = List;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTGlzdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiaGVpZ2h0Iiwid2lkdGgiLCJMaXN0IiwiaXRlbSIsInJvd0luZGV4IiwiaWQiLCJpZEtleSIsIml0ZW1IZWlnaHQiLCJzaG93SW5kZXgiLCJjb2x1bW5zIiwicmVuZGVyIiwiY29sdW1uSGVhZGVySGVpZ2h0Iiwic2hvd0NvbHVtbkhlYWRlciIsIml0ZW1zIiwibWFwIiwicmVuZGVyUm93IiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiY2xhc3NOYW1lIiwidmFsdWVLZXkiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBR0MsMEJBQU9DLEdBQVYsb0JBQ1AsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsTUFBTixLQUFpQixNQUFqQixHQUEwQixNQUExQixHQUFzQ0QsS0FBSyxDQUFDQyxNQUE1QyxPQUFMO0FBQUEsQ0FERSxFQUVSLFVBQUFELEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNFLEtBQU4sS0FBZ0IsTUFBaEIsR0FBeUIsTUFBekIsR0FBcUNGLEtBQUssQ0FBQ0UsS0FBM0MsT0FBTDtBQUFBLENBRkcsQ0FBbkI7O0lBS3FCQyxJOzs7Ozs7Ozs7Ozs7OztnRUFrQ1AsVUFBQ0MsSUFBRCxFQUFPQyxRQUFQLEVBQW9CO0FBQUEsd0JBTzFCLE1BQUtMLEtBUHFCO0FBQUEsVUFFNUJNLEVBRjRCLGVBRTVCQSxFQUY0QjtBQUFBLFVBRzVCQyxLQUg0QixlQUc1QkEsS0FINEI7QUFBQSxVQUk1QkMsVUFKNEIsZUFJNUJBLFVBSjRCO0FBQUEsVUFLNUJDLFNBTDRCLGVBSzVCQSxTQUw0QjtBQUFBLFVBTTVCQyxPQU40QixlQU01QkEsT0FONEI7QUFROUIsYUFDRSw2QkFBQyxZQUFEO0FBQ0UsUUFBQSxFQUFFLEVBQUtKLEVBQUwsYUFBZUQsUUFEbkI7QUFFRSxRQUFBLEdBQUcsRUFBRUQsSUFBSSxDQUFDRyxLQUFELENBRlg7QUFHRSxRQUFBLElBQUksRUFBRUgsSUFIUjtBQUlFLFFBQUEsUUFBUSxFQUFFQyxRQUpaO0FBS0UsUUFBQSxTQUFTLEVBQUVJLFNBTGI7QUFNRSxRQUFBLFVBQVUsRUFBRUQsVUFOZDtBQU9FLFFBQUEsT0FBTyxFQUFFRTtBQVBYLFFBREY7QUFXRCxLOzs7Ozs7O1NBRURDLE0sR0FBQSxrQkFBUztBQUFBLHVCQVNILEtBQUtYLEtBVEY7QUFBQSxRQUVMTSxFQUZLLGdCQUVMQSxFQUZLO0FBQUEsUUFHTEksT0FISyxnQkFHTEEsT0FISztBQUFBLFFBSUxELFNBSkssZ0JBSUxBLFNBSks7QUFBQSxRQUtMUixNQUxLLGdCQUtMQSxNQUxLO0FBQUEsUUFNTEMsS0FOSyxnQkFNTEEsS0FOSztBQUFBLFFBT0xVLGtCQVBLLGdCQU9MQSxrQkFQSztBQUFBLFFBUUxDLGdCQVJLLGdCQVFMQSxnQkFSSztBQVVQLFdBQ0UsNkJBQUMsYUFBRDtBQUFlLE1BQUEsTUFBTSxFQUFFWixNQUF2QjtBQUErQixNQUFBLEtBQUssRUFBRUM7QUFBdEMsT0FDR1csZ0JBQWdCLElBQ2YsNkJBQUMscUJBQUQ7QUFDRSxNQUFBLEVBQUUsRUFBS1AsRUFBTCxtQkFESjtBQUVFLE1BQUEsT0FBTyxFQUFFSSxPQUZYO0FBR0UsTUFBQSxTQUFTLEVBQUVELFNBSGI7QUFJRSxNQUFBLE1BQU0sRUFBRUc7QUFKVixNQUZKLEVBU0UsNkJBQUMsZ0NBQUQsRUFBNkIsS0FBS1osS0FBbEMsRUFDRyxLQUFLQSxLQUFMLENBQVdjLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXFCLEtBQUtDLFNBQTFCLENBREgsQ0FURixDQURGO0FBZUQsRzs7O0VBaEYrQkMsZUFBTUMsYTs7OztnQkFBbkJmLEksa0JBcUJHO0FBQ3BCRyxFQUFBQSxFQUFFLEVBQUUsZUFEZ0I7QUFFcEJhLEVBQUFBLFNBQVMsRUFBRSxFQUZTO0FBR3BCbEIsRUFBQUEsTUFBTSxFQUFFLE1BSFk7QUFJcEJDLEVBQUFBLEtBQUssRUFBRSxNQUphO0FBS3BCTSxFQUFBQSxVQUFVLEVBQUUsRUFMUTtBQU1wQkQsRUFBQUEsS0FBSyxFQUFFLElBTmE7QUFPcEJHLEVBQUFBLE9BQU8sRUFBRSxDQUFDO0FBQUVVLElBQUFBLFFBQVEsRUFBRSxPQUFaO0FBQXFCQyxJQUFBQSxLQUFLLEVBQUU7QUFBNUIsR0FBRCxDQVBXO0FBUXBCWixFQUFBQSxTQUFTLEVBQUUsS0FSUztBQVNwQkksRUFBQUEsZ0JBQWdCLEVBQUUsS0FURTtBQVVwQkQsRUFBQUEsa0JBQWtCLEVBQUU7QUFWQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZXNwb25zaXZlTGlzdENvbnRhaW5lciBmcm9tICcuL3Jlc3BvbnNpdmUtbGlzdC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCBDb2x1bW5IZWFkZXIgZnJvbSAnLi9jb2x1bW4taGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgUm93IGZyb20gJy4vcm93LmNvbXBvbmVudCc7XG5cbmNvbnN0IExpc3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmhlaWdodCA9PT0gJ2F1dG8nID8gJzEwMCUnIDogYCR7cHJvcHMuaGVpZ2h0fXB4YCl9O1xuICB3aWR0aDogJHtwcm9wcyA9PiAocHJvcHMud2lkdGggPT09ICdhdXRvJyA/ICcxMDAlJyA6IGAke3Byb3BzLndpZHRofXB4YCl9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKS5pc1JlcXVpcmVkLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSksXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksXG4gICAgXSksXG4gICAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBpZEtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaG93SW5kZXg6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dDb2x1bW5IZWFkZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLFxuICAgIGNvbHVtbkhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaWQ6ICdvYy1yZWFjdC1saXN0JyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgaXRlbUhlaWdodDogNDAsXG4gICAgaWRLZXk6ICdpZCcsXG4gICAgY29sdW1uczogW3sgdmFsdWVLZXk6ICd2YWx1ZScsIHRpdGxlOiAnVmFsdWUnIH1dLFxuICAgIHNob3dJbmRleDogZmFsc2UsXG4gICAgc2hvd0NvbHVtbkhlYWRlcjogZmFsc2UsXG4gICAgY29sdW1uSGVhZGVySGVpZ2h0OiA0MCxcbiAgfVxuXG4gIHJlbmRlclJvdyA9IChpdGVtLCByb3dJbmRleCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaWRLZXksXG4gICAgICBpdGVtSGVpZ2h0LFxuICAgICAgc2hvd0luZGV4LFxuICAgICAgY29sdW1ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJvd1xuICAgICAgICBpZD17YCR7aWR9LXJvdy0ke3Jvd0luZGV4fWB9XG4gICAgICAgIGtleT17aXRlbVtpZEtleV19XG4gICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgIHJvd0luZGV4PXtyb3dJbmRleH1cbiAgICAgICAgc2hvd0luZGV4PXtzaG93SW5kZXh9XG4gICAgICAgIGl0ZW1IZWlnaHQ9e2l0ZW1IZWlnaHR9XG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBjb2x1bW5zLFxuICAgICAgc2hvd0luZGV4LFxuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGgsXG4gICAgICBjb2x1bW5IZWFkZXJIZWlnaHQsXG4gICAgICBzaG93Q29sdW1uSGVhZGVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdENvbnRhaW5lciBoZWlnaHQ9e2hlaWdodH0gd2lkdGg9e3dpZHRofT5cbiAgICAgICAge3Nob3dDb2x1bW5IZWFkZXIgJiYgKFxuICAgICAgICAgIDxDb2x1bW5IZWFkZXJcbiAgICAgICAgICAgIGlkPXtgJHtpZH0tY29sdW1uLWhlYWRlcmB9XG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgc2hvd0luZGV4PXtzaG93SW5kZXh9XG4gICAgICAgICAgICBoZWlnaHQ9e2NvbHVtbkhlYWRlckhlaWdodH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8UmVzcG9uc2l2ZUxpc3RDb250YWluZXIgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLml0ZW1zLm1hcCh0aGlzLnJlbmRlclJvdyl9XG4gICAgICAgIDwvUmVzcG9uc2l2ZUxpc3RDb250YWluZXI+XG4gICAgICA8L0xpc3RDb250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuIl19