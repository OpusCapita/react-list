"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _column = _interopRequireDefault(require("./column.component"));

var _theme = _interopRequireDefault(require("./theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Row = _styledComponents.default.div(_templateObject(), function (props) {
  return props.height - 1;
}, function (props) {
  return props.selected ? _theme.default.colors.grey5 : _theme.default.colors.white;
}, _theme.default.colors.grey4);

var DefaultTextContainer = _styledComponents.default.span(_templateObject2(), function (props) {
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
      return _react.default.createElement(_column.default, {
        id: id + "-col-" + column.valueKey,
        key: column.valueKey,
        width: column.width || 200,
        alignment: column.alignment || 'flex-start'
      }, _react.default.createElement(DefaultTextContainer, null, item[column.valueKey]));
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
    return _react.default.createElement(Row, {
      height: itemHeight
    }, showIndex && _react.default.createElement(_column.default, {
      id: id + "-col-index",
      width: 30,
      alignment: "flex-start"
    }, rowIndex + 1), !!columns && columns.map(this.renderItemColumn));
  };

  return List;
}(_react.default.PureComponent);

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSb3ciLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImhlaWdodCIsInNlbGVjdGVkIiwidGhlbWUiLCJjb2xvcnMiLCJncmV5NSIsIndoaXRlIiwiZ3JleTQiLCJEZWZhdWx0VGV4dENvbnRhaW5lciIsInNwYW4iLCJpbnNpZGVUb29sdGlwIiwiTGlzdCIsImNvbHVtbiIsImlkIiwiaXRlbSIsInZhbHVlS2V5Iiwid2lkdGgiLCJhbGlnbm1lbnQiLCJyZW5kZXIiLCJzaG93SW5kZXgiLCJjb2x1bW5zIiwicm93SW5kZXgiLCJpdGVtSGVpZ2h0IiwibWFwIiwicmVuZGVySXRlbUNvbHVtbiIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLDBCQUFPQyxHQUFWLG9CQUVHLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLE1BQU4sR0FBZSxDQUFwQjtBQUFBLENBRlIsRUFLTyxVQUFBRCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDRSxRQUFOLEdBQWlCQyxlQUFNQyxNQUFOLENBQWFDLEtBQTlCLEdBQXNDRixlQUFNQyxNQUFOLENBQWFFLEtBQXhEO0FBQUEsQ0FMWixFQU9TSCxlQUFNQyxNQUFOLENBQWFHLEtBUHRCLENBQVQ7O0FBWUEsSUFBTUMsb0JBQW9CLEdBQUdWLDBCQUFPVyxJQUFWLHFCQUVULFVBQUFULEtBQUs7QUFBQSxTQUFLLENBQUNBLEtBQUssQ0FBQ1UsYUFBUCxHQUF1QixRQUF2QixHQUFrQyxRQUF2QztBQUFBLENBRkksQ0FBMUI7O0lBTXFCQyxJOzs7Ozs7Ozs7Ozs7Ozt1RUFVQSxVQUFDQyxNQUFELEVBQVk7QUFBQSx3QkFJekIsTUFBS1osS0FKb0I7QUFBQSxVQUUzQmEsRUFGMkIsZUFFM0JBLEVBRjJCO0FBQUEsVUFHM0JDLElBSDJCLGVBRzNCQSxJQUgyQjtBQUs3QixhQUNFLDZCQUFDLGVBQUQ7QUFDRSxRQUFBLEVBQUUsRUFBS0QsRUFBTCxhQUFlRCxNQUFNLENBQUNHLFFBRDFCO0FBRUUsUUFBQSxHQUFHLEVBQUVILE1BQU0sQ0FBQ0csUUFGZDtBQUdFLFFBQUEsS0FBSyxFQUFFSCxNQUFNLENBQUNJLEtBQVAsSUFBZ0IsR0FIekI7QUFJRSxRQUFBLFNBQVMsRUFBRUosTUFBTSxDQUFDSyxTQUFQLElBQW9CO0FBSmpDLFNBTUUsNkJBQUMsb0JBQUQsUUFDR0gsSUFBSSxDQUFDRixNQUFNLENBQUNHLFFBQVIsQ0FEUCxDQU5GLENBREY7QUFZRCxLOzs7Ozs7O1NBRURHLE0sR0FBQSxrQkFBUztBQUFBLHVCQU9ILEtBQUtsQixLQVBGO0FBQUEsUUFFTGEsRUFGSyxnQkFFTEEsRUFGSztBQUFBLFFBR0xNLFNBSEssZ0JBR0xBLFNBSEs7QUFBQSxRQUlMQyxPQUpLLGdCQUlMQSxPQUpLO0FBQUEsUUFLTEMsUUFMSyxnQkFLTEEsUUFMSztBQUFBLFFBTUxDLFVBTkssZ0JBTUxBLFVBTks7QUFRUCxXQUNFLDZCQUFDLEdBQUQ7QUFDRSxNQUFBLE1BQU0sRUFBRUE7QUFEVixPQUdHSCxTQUFTLElBQ1IsNkJBQUMsZUFBRDtBQUNFLE1BQUEsRUFBRSxFQUFLTixFQUFMLGVBREo7QUFFRSxNQUFBLEtBQUssRUFBRSxFQUZUO0FBR0UsTUFBQSxTQUFTLEVBQUM7QUFIWixPQUtHUSxRQUFRLEdBQUcsQ0FMZCxDQUpKLEVBWUcsQ0FBQyxDQUFDRCxPQUFGLElBQWFBLE9BQU8sQ0FBQ0csR0FBUixDQUFZLEtBQUtDLGdCQUFqQixDQVpoQixDQURGO0FBZ0JELEc7OztFQXJEK0JDLGVBQU1DLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL2NvbHVtbi5jb21wb25lbnQnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4vdGhlbWUnO1xuXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmhlaWdodCAtIDEpfXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gKHByb3BzLnNlbGVjdGVkID8gdGhlbWUuY29sb3JzLmdyZXk1IDogdGhlbWUuY29sb3JzLndoaXRlKX07XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmdyZXk0fTtcbiAgfVxuICB1c2VyLXNlbGVjdDogbm9uZTtcbmA7XG5cbmNvbnN0IERlZmF1bHRUZXh0Q29udGFpbmVyID0gc3R5bGVkLnNwYW5gXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogJHtwcm9wcyA9PiAoIXByb3BzLmluc2lkZVRvb2x0aXAgPyAnbm93cmFwJyA6ICdub3JtYWwnKX07XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpdGVtOiBQcm9wVHlwZXMuc2hhcGUoe30pLmlzUmVxdWlyZWQsXG4gICAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHJvd0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgc2hvd0luZGV4OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG4gIH1cblxuICByZW5kZXJJdGVtQ29sdW1uID0gKGNvbHVtbikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgaXRlbSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbHVtblxuICAgICAgICBpZD17YCR7aWR9LWNvbC0ke2NvbHVtbi52YWx1ZUtleX1gfVxuICAgICAgICBrZXk9e2NvbHVtbi52YWx1ZUtleX1cbiAgICAgICAgd2lkdGg9e2NvbHVtbi53aWR0aCB8fCAyMDB9XG4gICAgICAgIGFsaWdubWVudD17Y29sdW1uLmFsaWdubWVudCB8fCAnZmxleC1zdGFydCd9XG4gICAgICA+XG4gICAgICAgIDxEZWZhdWx0VGV4dENvbnRhaW5lcj5cbiAgICAgICAgICB7aXRlbVtjb2x1bW4udmFsdWVLZXldfVxuICAgICAgICA8L0RlZmF1bHRUZXh0Q29udGFpbmVyPlxuICAgICAgPC9Db2x1bW4+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHNob3dJbmRleCxcbiAgICAgIGNvbHVtbnMsXG4gICAgICByb3dJbmRleCxcbiAgICAgIGl0ZW1IZWlnaHQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3dcbiAgICAgICAgaGVpZ2h0PXtpdGVtSGVpZ2h0fVxuICAgICAgPlxuICAgICAgICB7c2hvd0luZGV4ICYmIChcbiAgICAgICAgICA8Q29sdW1uXG4gICAgICAgICAgICBpZD17YCR7aWR9LWNvbC1pbmRleGB9XG4gICAgICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgICAgICBhbGlnbm1lbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cm93SW5kZXggKyAxfVxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICApfVxuICAgICAgICB7ISFjb2x1bW5zICYmIGNvbHVtbnMubWFwKHRoaXMucmVuZGVySXRlbUNvbHVtbil9XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9XG59XG4iXX0=