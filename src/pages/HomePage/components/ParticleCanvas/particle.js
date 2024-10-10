const PARTICLE_WIDTH = 1;
const PARTICLE_HEIGHT_MULTIPLIER = 2;
const SPEED_DIVIDER = 5;
const SPEED_FACTOR = 0.1;
const OPACITY_STEP = 0.008;
const INITIAL_OPACITY = 0.7;

class Particle {
	constructor(canvasWidth, canvasHeight) {
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;

		this.reset();
	}

	reset() {
		this.x = Math.random() * this.canvasWidth;
		this.y = Math.random() * this.canvasHeight;
		this.speed = Math.random() / SPEED_DIVIDER + SPEED_FACTOR;
		this.opacity = INITIAL_OPACITY;
		this.fadeDelay = Math.random() * 600 + 100;
		this.fadeStart = Date.now() + this.fadeDelay;
		this.fadingOut = false;
	}

	update() {
		this.y -= this.speed;
		if (this.y < 0) {
			this.reset();
		}

		if (!this.fadingOut && Date.now() > this.fadeStart) {
			this.fadingOut = true;
		}

		if (this.fadingOut) {
			this.opacity -= OPACITY_STEP;
			if (this.opacity <= 0) {
				this.reset();
			}
		}
	}

	draw(ctx) {
		ctx.fillStyle = `rgba(${255 - (Math.random() * 255) / 2}, 255, 255, ${this.opacity})`;
		ctx.fillRect(this.x, this.y, PARTICLE_WIDTH, Math.random() * PARTICLE_HEIGHT_MULTIPLIER + 1);
	}
}

export default Particle;
