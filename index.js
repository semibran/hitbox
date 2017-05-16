exports.left = left
exports.top = top
exports.right = right
exports.bottom = bottom
exports.intersects = intersects

function left(hitbox) {
	return hitbox.position.x - hitbox.width / 2
}

function top(hitbox) {
	return hitbox.position.y - hitbox.height / 2
}

function right(hitbox) {
	return hitbox.position.x + hitbox.width / 2
}

function bottom(hitbox) {
	return hitbox.position.y + hitbox.height / 2
}

function intersects(hitbox, other) {
	return left(hitbox) < right(other) && top(hitbox) < bottom(other) && right(hitbox) > left(other) && bottom(hitbox) > top(other)
}
