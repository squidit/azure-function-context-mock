var context = {
  done: function done() {
    return Promise.resolve(this.res);
  },
  log: function log(str) {
    console.log(str);
  },
  bindings: {},
  res: {
    status: 200, /* Defaults to 200 */
    body: '',
  },
};

module.exports = context;
