// Code your solution in this file!
function distanceFromHqInBlocks(destination) {
  return Math.abs(42 - destination);
}

function distanceFromHqInFeet(destination) {
  return (distanceFromHqInBlocks(destination) * 264);
}

function distanceTravelledInFeet(start, destination) {
  const distance = Math.abs(destination-start);
  return (distance *264);
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance < 400)
    return 0
  
}
