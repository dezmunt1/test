/****************** https://learn.javascript.ru/task/clock-class *****************/

function Clock(options) {

  this.template = options.template;
  this.timer;
}

Clock.prototype.render = function() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let min = date.getMinutes();
    if (min < 10) min = '0' + min;

    let sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    let output = this.template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
  };

Clock.prototype.stop = function() {
    clearInterval(this.timer);
};

Clock.prototype.start = function() {
  let thisRender = this.render.bind(this);
    thisRender();
    this.timer = setInterval(thisRender, 1000);
};

/****************** https://learn.javascript.ru/task/clock-class-extended ******************/

function ExtendedClock(options) {
  this._template = options.template;
  this._precision = options.precision;
}

ExtendedClock.prototype = Object.create(Clock.prototype);
ExtendedClock.prototype.constructor = ExtendedClock;
ExtendedClock.prototype.start = function() {
  this._render();
  var self = this;
  this._timer = setInterval(function() {
    self._render();
  }, this._precision);
};

/***************** https://learn.javascript.ru/task/menu-timer-animated *****************/

// наследник AnimatingMenu

function AnimatingMenu(state) {
  Menu.apply(this, arguments);
}
Menu.STATE_ANIMATING = 2;

AnimatingMenu.prototype = Object.create(Menu.prototype);
AnimatingMenu.prototype.constructor = AnimatingMenu;

AnimatingMenu.prototype.open = function() {
  this._state = Menu.STATE_ANIMATING;
  let self = this;
  this.timerId = setTimeout(function(){
    Menu.prototype.open.apply(self, arguments);
  }, 1000);
}

AnimatingMenu.prototype.close = function() {
  clearTimeout(this.timerId);
  Menu.prototype.close.apply(this, arguments);
}

AnimatingMenu.prototype._stateAsString = function() {
  switch (this._state) {
    case Menu.STATE_ANIMATING:
      return 'анимация';
    default:
    return Menu.prototype._stateAsString.apply(this, arguments);
  }
}

