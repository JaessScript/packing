class SingleObject {
    constructor(x, y, r, image) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = image;
    }

    isOverlapping(other) {
        return dist(this.x, this.y, other.x, other.y) < this.r + other.r;
    }

    show() {
        // ellipse(this.x, this.y, 2 * this.r, 2 * this.r);
        imageMode(CENTER);
        image(this.image, this.x, this.y, 2 * this.r, 2 * this.r);
    }
}