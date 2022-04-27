//Utility functions

function pad(time) {
  return time.toString().padStart(2, '0');
}

function timeDifference(dateBegin,dateEnd){
  const diffMs = dateBegin- dateEnd;
  const diffSec = Math.floor(diffMs / 1000 % 60);
  const diffMin = Math.floor(diffMs / 1000 / 60 % 60);
  const diffHr = Math.floor(diffMs / 1000 / 60 / 60);
  return `${pad(diffHr)}:${pad(diffMin)}:${pad(diffSec)}`
}

module.exports = {
  pad,
  timeDifference
}