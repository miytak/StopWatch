var StopWatch = function(){
  this.time = 0;
  this.intervalID = 0;
  this.interval = 10;
  this.disableStart = false;
  this.disableStop = true;
};
StopWatch.prototype.setTime = function(){
  this.time += this.interval;
};
StopWatch.prototype.start = function(){
  if (this.disableStart) return false;
  this.intervalID = setInterval(this.setTime.bind(this), this.interval);
  this.switchDisable();
  return true;
};
StopWatch.prototype.stop = function(){
  if (this.disableStop) return false;
  clearInterval(this.intervalID);
  this.switchDisable();
  return true;
};
StopWatch.prototype.reset = function(){
  this.time = 0;
  this.intervalID = 0;
  this.disableStart = false;
  this.disableStop = true;
  return true;
};
StopWatch.prototype.switchDisable = function(){
  this.disableStart = !this.disableStart;
  this.disableStop = !this.disableStop;
};
