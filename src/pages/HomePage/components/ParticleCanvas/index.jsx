import React from "react";
import S from "./styled";
import Particle from "./particle";

const ParticleCanvas = () => {
	const [particles, setParticles] = React.useState([]);
	const [particleCount, setParticleCount] = React.useState(0);

	const canvasRef = React.useRef(null);
	const animationRef = React.useRef(null);

	React.useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			setParticleCount(calculateParticleCount(canvas));
		};
		resizeCanvas();

		window.addEventListener("resize", resizeCanvas);
		return () => {
			window.removeEventListener("resize", resizeCanvas);
			cancelAnimationFrame(animationRef.current);
		};
	}, []);

	React.useEffect(() => {
		if (particleCount > 0) initParticles();
	}, [particleCount]);

	React.useEffect(() => {
		if (particles.length > 0) animate();
	}, [particles]);

	const initParticles = () => {
		const canvas = canvasRef.current;
		const { width, height } = canvas;
		const newParticles = [];
		for (let i = 0; i < particleCount; i++) {
			newParticles.push(new Particle(width, height));
		}
		setParticles(newParticles);
	};

	const animate = () => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		particles.forEach((particle) => {
			particle.update();
			particle.draw(ctx);
		});
		animationRef.current = requestAnimationFrame(animate);
	};

	const calculateParticleCount = (canvas) => Math.floor((canvas.width * canvas.height) / 6000);

	return <S.Canvas id="particleCanvas" ref={canvasRef}></S.Canvas>;
};

export default ParticleCanvas;
