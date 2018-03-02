# hitbox
> helper functions for handling two-dimensional axis-aligned bounding boxes

If you remember [that one article on collision detection][article] written by the good folks over at Metanet Software, you may recall that we can model an [axis-aligned bounding box] by its central position and its halfsize vectors. If we were to translate this definition over to JavaScript, it might look something like this:

```js
{
  halfsize: [ 8, 12 ],
  position: [ 128, 128 ]
}
```

`hitbox` provides helper functions to enable easier reading and manipulation of these kinds of data structures. For example. the code snippet below employs generous use of these functions in order to simplify collision detection.

```js
for (let block of world.blocks) {
  if (intersects(actor.hitbox, block.hitbox)) {
    if (dx < 0) {
      left(actor.hitbox, right(block.hitbox))
      actor.velocity[0] = 0
    } else if (dx > 0) {
      right(actor.hitbox, left(block.hitbox))
      actor.velocity[0] = 0
    }
    if (dy < 0) {
      top(actor.hitbox, bottom(block.hitbox))
      actor.velocity[1] = 0
    } else if (dy > 0) {
      bottom(actor.hitbox, top(block.hitbox))
      actor.velocity[1] = 0
    }
  }
}
```

## usage
[![npm badge]][npm package]

### `left(hitbox[, x])`
Finds the x-coordinate of the left edge of the hitbox, or sets it if `x` is provided.

```js
left(hitbox) === hitbox.position[0] - hitbox.halfsize[0]
```

### `right(hitbox[, x])`
Finds the x-coordinate of the right edge of the hitbox, or sets it if `x` is provided.

```js
right(hitbox) === hitbox.position[0] + hitbox.halfsize[0]
```

### `top(hitbox[, y])`
Finds the y-coordinate of the top of the hitbox, or sets it if `y` is provided.

```js
top(hitbox) === hitbox.position[1] - hitbox.halfsize[1]
```

### `bottom(hitbox[, y])`
Finds the y-coordinate of the bottom of the hitbox, or sets it if `y` is provided.

```js
bottom(hitbox) === hitbox.position[1] + hitbox.halfsize[1]
```

### `intersects(a, b)`
Determines if hitbox `a` and hitbox `b` are intersecting.

```js
if (intersects(actor.hitbox, enemy.hitbox)) {
  actor.health-- // ouch!
}
```

### `contains(a, b)`
Determines if hitbox `a` contains hitbox `b`.

```js
for (let actor of world.actors) {
  if (contains(viewport, actor.hitbox)) {
    draw(actor)
  }
}
```

[npm package]:               https://npmjs.com/package/hitbox
[npm badge]:                 https://nodei.co/npm/hitbox.png?mini
[article]:                   http://www.metanetsoftware.com/technique/tutorialA.html
[axis-aligned bounding box]: https://en.wikipedia.org/wiki/Axis-aligned_bounding_box
