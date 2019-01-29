function ExtendedClock(options) {
  this._template = options.template;
  this._precision = options.precision;
}

ExtendedClock.prototype = Clock.prototype;
ExtendedClock.prototype.constructor = ExtendedClock;
ExtendedClock.prototype.start = function() {
  this._render();
  var self = this;
  this._timer = setInterval(function() {
    self._render();
  }, this._precision);
};
