exports.left = left
exports.right = right
exports.top = top
exports.bottom = bottom
exports.intersects = intersects
exports.contains = contains

function left(hitbox, x) {
  if (x === undefined) {
    return hitbox.position[0] - hitbox.halfsize[0]
  }
  hitbox.position[0] = x + hitbox.halfsize[0]
}

function right(hitbox, x) {
  if (x === undefined) {
    return hitbox.position[0] + hitbox.halfsize[0]
  }
  hitbox.position[0] = x - hitbox.halfsize[0]
}

function top(hitbox, y) {
  if (y === undefined) {
    return hitbox.position[1] - hitbox.halfsize[1]
  }
  hitbox.position[1] = y + hitbox.halfsize[1]
}

function bottom(hitbox, y) {
  if (y === undefined) {
    return hitbox.position[1] + hitbox.halfsize[1]
  }
  hitbox.position[1] = y - hitbox.halfsize[1]
}

function intersects(a, b) {
  return left(a) < right(b)
      && right(a) > left(b)
      && top(a) < bottom(b)
      && bottom(a) > top(b)
}

function contains(a, b) {
  return left(b) >= left(a)
      && right(b) <= right(a)
      && top(b) >= top(a)
      && bottom(b) <= bottom(b)
}
