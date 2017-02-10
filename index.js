const Random = require('random')

module.exports = function Bag(items, seed) {
  // Create a copy of the original array before proceeding
  items = items.slice()

  var contents = []
  var rng = Random(seed)
  var bag = {
    items, seed,
    contents, rng,
    draw, fill
  }

  return bag

  // Draw a random item from the bag
  function draw() {
    if (!contents.length)
      fill()
    return contents.shift()
  }

  // Refill the bag to match `items.length`
  function fill() {
    var remaining
    if (!contents.length)
      remaining = items
    else if (contents.length !== items.length) {
      remaining = []
      for (var item of items)
        if (contents.indexOf(item) === -1)
          remaining.push(item)
    }
    contents.push(...rng.shuffle(remaining))
    return bag
  }
}
