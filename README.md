# `hitbox`
> Basic operations for axis-aligned bounding boxes

## usage
A `Hitbox` is a plain object with the fields `width`, `height`, `x`, and `y`. Using these four values, we can infer most all of the data about a bounding box we will need in most situations.

Note that `x` and `y` refer to the center position of the box. To find the top-left point, use the methods `left` and `top`.
```javascript
hitbox.x - left(hitbox) === hitbox.width / 2
hitbox.y - top(hitbox) === hitbox.height / 2
```

- ### `Hitbox`
Creates a new `Hitbox` from the given `width` and `height`.
```javascript
var hitbox = Hitbox(16, 24)
```

- ### `left`
Finds the x-coordinate of a point on the left edge of the hitbox.

- ### `top`
Finds the y-coordinate of a point on top of the hitbox.

- ### `right`
Finds the x-coordinate of a point on the right edge of the hitbox.

- ### `bottom`
Finds the y-coordinate of a point on the bottom of the hitbox.

- ### `intersects`
Determines if two hitboxes are overlapping.
```javascript
if (intersects(hero.hitbox, enemy.hitbox)) {
	// ouch!
}
```


## install
```sh
npm install semibran/hitbox
```


## license
MIT
