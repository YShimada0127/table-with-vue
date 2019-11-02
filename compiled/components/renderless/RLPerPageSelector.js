"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: "RLPerPageSelector",
  inject: ['opts', 'limit', 'setLimit', 'perPageValues', 'id', 'theme', 'display'],
  render: function render() {
    var _this = this;

    return this.$scopedSlots["default"]({
      perPageValues: this.perPageValues,
      limit: this.limit,
      setLimit: this.setLimit,
      id: this.id,
      selectClass: this.theme.select,
      display: this.display,
      selectAttrs: {
        id: "VueTables__limit_".concat(this.id),
        "class": this.theme.select,
        value: this.limit
      },
      selectEvents: {
        change: function change(e) {
          return _this.setLimit(e);
        }
      }
    });
  }
};
exports["default"] = _default;