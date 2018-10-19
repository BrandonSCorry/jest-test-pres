function countdown(time, progressCallback, doneCallback) {
  progressCallback(time);
  setTimeout(function() {
    if( time > 1) {
      countdown(time-1, progressCallback, doneCallback); //<- We've commented out this part!
    } else {
      doneCallback(); //<- And this part also!!
    }
  }, 1000);
}

module.exports = countdown;