"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("babel-helper-vue-jsx-merge-props"));

var _RLTableRow = _interopRequireDefault(require("./renderless/RLTableRow"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'TableRow',
  props: ['row', 'index'],
  components: {
    RLTableRow: _RLTableRow["default"],
    TableCell: _TableCell["default"]
  },
  render: function render() {
    var h = arguments[0];
    return h("r-l-table-row", {
      attrs: {
        row: this.row,
        index: this.index
      },
      scopedSlots: {
        "default": function _default(props) {
          var childRowToggler = h("td", ["+"]);
          return h("tr", (0, _babelHelperVueJsxMergeProps["default"])([{
            "class": "VueTables__row " + props.rowAttrs["class"]
          }, {
            attrs: props.rowAttrs.attrs
          }, {
            on: {
              "click": props.rowEvents.click
            }
          }]), [childRowToggler, props.columns.map(function (column) {
            return h("table-cell", {
              attrs: {
                column: column
              }
            });
          })]);
        }
      }
    });
  }
};
exports["default"] = _default2;