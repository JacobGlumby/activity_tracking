//Utility functions

function pad(time) {
  return time.toString().padStart(2, '0');
}

function calculateTimeDifference(dateBegin,dateEnd){
  const diffMs = Math.abs(dateBegin- dateEnd);
  const diffSec = Math.round(diffMs / 1000 % 60);
  const diffMin = Math.round(diffMs / 1000 / 60 % 60);
  const diffHr = Math.round(diffMs / 1000 / 60 / 60);
  return `${pad(diffHr)}:${pad(diffMin)}:${pad(diffSec)}`
}

module.exports = {
  pad,
  calculateTimeDifference
}