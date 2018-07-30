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

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
  var newkitten = [...kittens,name]
  return newkitten
}

function prependKitten(name) {
  var oldkitten = [name,...kittens]
  return oldkitten
}

function removeLastKitten() {
  var kitten2 = kittens.splice(0,kittens.length-1)
  return kitten2
}
