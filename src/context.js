var context = {
  done: function done() {
    return Promise.resolve();
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
