var context = {
  done: function done() {
    return Promise.resolve();
  },
  log: function log(str) {
    console.log(str);
  },
  bindings: {},
};

module.exports = context;
