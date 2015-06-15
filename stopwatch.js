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
  this.processTime += 10;
};
StopWatch.prototype.startProcess = function(){
  this.intervalID = setInterval(this.addProcess.bind(this), 10);
  this.isActive = true;
};
StopWatch.prototype.stopProcess = function(){
  clearInterval(this.intervalID);
  this.isActive = false;
};
StopWatch.prototype.clearProcess = function(){
  this.processTime = 0;
};
StopWatch.prototype.addLapTime = function(){
  this.lapTimes.push(this.processTime);
  this.clearProcess();
};
