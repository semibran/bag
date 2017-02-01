const Random = require('random')

module.exports = function Bag(items, seed) {

  var contents = []
  var rng = Random(seed)

  return {
    items, seed,
    contents, rng,
    draw
  }

  function draw() {
    if (!contents.length)
      contents.push(...rng.shuffle(items))
    var index = rng.get(contents.length)
    var item = contents[index]
    contents.splice(index, 1)
    return item
  }
}
