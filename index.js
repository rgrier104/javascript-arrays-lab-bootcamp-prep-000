// Add your functions and code here
function kittens() {
  var kittens = ["Milo","Otis","Garfield"]
}

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

funtion destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}
