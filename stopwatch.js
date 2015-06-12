Array.prototype.sum = function(){
  var total = 0;
  for (var i = 0; i < this.length; i++){
    if (!isNaN(this[i])) {
      total += Number(this[i]);
    }
  }
  return total;
};
var StopWatch = function(func, delay){
  this.interval = 10;
  this.init();
  this.toID = setTimeout(function(){func()}, delay);
};
StopWatch.prototype.init = function(){
  this.clearTime();
  this.times = [];
  this.isMove = false;
};
StopWatch.prototype.setTime = function(){
  this.time += this.interval;
};
StopWatch.prototype.startTime = function(){
  this.intervalID = setInterval(this.setTime.bind(this), this.interval);
  this.isMove = true;
};
StopWatch.prototype.stopTime = function(){
  clearInterval(this.intervalID);
  this.isMove = false;
};
StopWatch.prototype.clearTime = function(){
  this.time = 0;
};
StopWatch.prototype.stockTime = function(){
  this.times.push(this.time);
  this.clearTime();
};
StopWatch.prototype.start = function(){
  if (this.isMove) return false;
  this.startTime();
  return true;
};
StopWatch.prototype.stop = function(){
  if (!this.isMove) return false;
  this.stopTime();
  return true;
};
StopWatch.prototype.reset = function(){
  this.init();
  return true;
};
StopWatch.prototype.lap = function(){
  if (this.isMove){
    this.stopTime();
    this.stockTime();
    this.startTime();
    return true;
  } else {
    if (this.time !== 0){
      this.stockTime();
      this.startTime();
      return true;
    }
  }
  return false;
};
StopWatch.prototype.getTotalTime = function(){
  return this.times.sum();
};
