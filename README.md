# bag
> Draw random items from a user-defined list

A rough implementation of the classic [**Random Generator**](http://tetris.wikia.com/wiki/Random_Generator) system from Tetris.

```javascript
const Bag = require('bag')

var fruits = ['apple', 'orange', 'banana']
var fruitBasket = Bag(fruits)

for (var i = 0, max = 10; i < max; i++) {
  var fruit = fruitBasket.draw()
  console.log(fruit)
}
```

Internally, each `Bag` instance has a `contents` array which turns out to be a shuffled version of the `items` initially passed. An item is removed from the bag each time `draw` is called. Once the bag is empty, the items are reshuffled and "poured" back into the bag. This process continues indefinitely as long as items are drawn from the bag's contents.

## Installation
```sh
npm install --save semibran/bag
```

## Usage

### Factory
```javascript
var bag = Bag(items, seed)
```

Creates a new `Bag` instance with the following parameters:
- `items`: An `Array` of elements to place into the bag.
- `seed`: A `Number` used to seed the bag's output. Use to coordinate the output of two separate `Bag` instances (e.g. providing the same piece sequence for two Tetris players)

### Methods

#### `draw`
```javascript
var randomItem = bag.draw()
```

#### `fill`
```javascript
bag = bag.fill() // Refill the bag until it is full enough to match `items.length`
```

## License
MIT
