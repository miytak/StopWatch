Array.prototype.sum = function(){
  var total = 0;
  for (var i = 0; i < this.length; i++){
    if (!isNaN(this[i])) {
      total += Number(this[i]);
    }
  }
  return total;
};

var StopWatch = function(callback, callbackOn){
  this.reset();
  setTimeout(callback, callbackOn);
};

// public methods
StopWatch.prototype.start = function(){
  if (this.isActive) return false;
  this.startProcess();
  return true;
};
StopWatch.prototype.stop = function(){
  if (!this.isActive) return false;
  this.stopProcess();
  return true;
};
StopWatch.prototype.reset = function(){
  this.clearProcess();
  this.lapTimes = [];
  this.isActive = false;
};
StopWatch.prototype.lap = function(){
  if (this.isActive){
    this.addLapTime();
    return true;
  }
  return false;
};
StopWatch.prototype.getTotalTime = function(){
  return this.lapTimes.sum();
};

// private methods
StopWatch.prototype.addProcess = function(){
  this.processTime = Date.now() - this.startTime;
  this.timeoutID = setTimeout(this.addProcess.bind(this), 1);
};
StopWatch.prototype.startProcess = function(){
  this.startTime = Date.now() - this.processTime;
  this.addProcess();
  this.isActive = true;
};
StopWatch.prototype.stopProcess = function(){
  clearTimeout(this.timeoutID);
  this.isActive = false;
};
StopWatch.prototype.clearProcess = function(){
  this.processTime = 0;
};
StopWatch.prototype.addLapTime = function(){
  this.lapTimes.push(this.processTime);
  this.startTime = Date.now();
};
