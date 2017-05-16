# hitbox
> Basic operations for axis-aligned bounding boxes

## install
```sh
npm install hitbox
```

## usage
A `Hitbox` is any object with the fields `width`, `height`, and `position`.

Note that `position` refers to the box's center point.

### `left`
Finds the x-coordinate of a point on the left edge of the hitbox.
```javascript
left(hitbox) === hitbox.position.x - hitbox.width / 2
```

### `top`
Finds the y-coordinate of a point on top of the hitbox.
```javascript
top(hitbox) === hitbox.position.y - hitbox.height / 2
```

### `right`
Finds the x-coordinate of a point on the right edge of the hitbox.
```javascript
right(hitbox) === hitbox.position.x + hitbox.width / 2
```

### `bottom`
Finds the y-coordinate of a point on the bottom of the hitbox.
```javascript
bottom(hitbox) === hitbox.position.y + hitbox.height / 2
```

### `intersects`
Determines if two hitboxes are overlapping.
```javascript
if (intersects(hero.hitbox, enemy.hitbox)) {
  // ouch!
}
```

## license
MIT
