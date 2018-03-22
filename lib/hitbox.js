exports.left = left
exports.right = right
exports.top = top
exports.bottom = bottom
exports.front = front
exports.back = back
exports.intersects2D = intersects2D
exports.contains2D = contains2D
exports.intersects3D = intersects3D
exports.contains3D = contains3D

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

function back(hitbox, z) {
  if (z === undefined) {
    return hitbox.position[2] - hitbox.halfsize[2]
  }
  hitbox.position[2] = z + hitbox.halfsize[2]
}

function front(hitbox, z) {
  if (z === undefined) {
    return hitbox.position[2] + hitbox.halfsize[2]
  }
  hitbox.position[2] = z - hitbox.halfsize[2]
}

function intersects2D(a, b) {
  return left(a) < right(b)
      && right(a) > left(b)
      && top(a) < bottom(b)
      && bottom(a) > top(b)
}

function contains2D(a, b) {
  return left(b) >= left(a)
      && right(b) <= right(a)
      && top(b) >= top(a)
      && bottom(b) <= bottom(b)
}

function intersects3D(a, b) {
  return left(a) < right(b)
      && right(a) > left(b)
      && top(a) < bottom(b)
      && bottom(a) > top(b)
      && back(a) < front(b)
      && front(a) > back(b)
}

function contains3D(a, b) {
  return left(b) >= left(a)
      && right(b) <= right(a)
      && top(b) >= top(a)
      && bottom(b) <= bottom(b)
      && back(b) >= front(a)
      && front(b) <= back(b)
}
