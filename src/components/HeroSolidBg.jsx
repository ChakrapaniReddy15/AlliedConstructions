import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import PlayBtnSvg from '../assets/images/svg/play-btn.svg';
import DotArrow from '../assets/images/svg/dot-arrow-png.svg';
import RightArrowSvg from '../assets/images/svg/right-arrow-svg.svg';
import SecOneimg1 from '../assets/images/home-page/sec-oneimg1.png';
import { Link } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");

const HeroSolidBg = () => {
    // YouTube Video PopUp 
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);


    // Canvas Bg Animation 
    const canvasRef = useRef(null);
    const pointsRef = useRef([]);
    const targetRef = useRef({});
    const widthRef = useRef(window.innerWidth);
    const heightRef = useRef(window.innerHeight);
    const pointDistance = 45;
    const pointRadius = 2;
    const animateHeader = useRef(true);

    // ----- Helpers -----
    const getDistance = (p1, p2) =>
        Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);

    const drawLines = (ctx, p) => {
        if (p.opacity > 0 && p.closest) {
            p.closest.forEach((neighbor) => {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(neighbor.x, neighbor.y);
                ctx.strokeStyle = `rgba(255,255,255,${p.opacity})`;
                ctx.stroke();
            });
        }
    };

    const shiftPoint = (p) => {
        gsap.to(p, {
            x: p.originX + Math.random() * (pointDistance / 2),
            y: p.originY + Math.random() * (pointDistance / 2),
            duration: 1 + Math.random(),
            ease: "power1.inOut",
            onComplete: () => shiftPoint(p),
        });
    };

    const drawPoints = (ctx) => {
        const { current: points } = pointsRef;
        const target = targetRef.current;
        const w = widthRef.current;
        const h = heightRef.current;

        ctx.clearRect(0, 0, w, h);

        points.forEach((point) => {
            if (target.x !== undefined && target.y !== undefined) {
                const distance = getDistance(target, point);
                point.opacity =
                    distance < 4000
                        ? 0.3
                        : distance < 20000
                            ? 0.1
                            : distance < 40000
                                ? 0.02
                                : 0;
                point.circle.opacity =
                    distance < 4000
                        ? 1
                        : distance < 20000
                            ? 1
                            : distance < 40000
                                ? 0.8
                                : 0.7;
            }
            drawLines(ctx, point);
            point.circle.draw(ctx);
        });
    };

    const initPoints = () => {
        const w = widthRef.current;
        const h = heightRef.current;
        const points = [];

        for (let x = 0; x <= w / pointDistance; x++) {
            for (let y = 0; y <= h / pointDistance; y++) {
                const px = x * pointDistance;
                const py = y * pointDistance;
                points.push({ x: px, originX: px, y: py, originY: py });
            }
        }

        points.forEach((p1) => {
            const closest = [];
            points.forEach((p2) => {
                if (p1 !== p2) {
                    if (closest.length < 5) {
                        closest.push(p2);
                    } else {
                        closest.sort(
                            (a, b) => getDistance(p1, a) - getDistance(p1, b)
                        );
                        if (getDistance(p1, p2) < getDistance(p1, closest[4])) {
                            closest[4] = p2;
                        }
                    }
                }
            });
            p1.closest = closest;
        });

        points.forEach((point) => {
            point.circle = new Circle(point, pointRadius);
            shiftPoint(point);
        });

        pointsRef.current = points;
    };

    // Circle constructor
    function Circle(pos, rad) {
        this.pos = pos;
        this.radius = rad;
        this.opacity = 0;
        this.draw = function (ctx) {
            if (this.opacity > 0) {
                ctx.beginPath();
                ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
                ctx.fill();
            }
        };
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const handleResize = () => {
            widthRef.current = window.innerWidth;
            heightRef.current = window.innerHeight;
            canvas.width = widthRef.current;
            canvas.height = heightRef.current;
            pointsRef.current.forEach((p) => gsap.killTweensOf(p));
            initPoints();
        };

        const handleMouseMove = (e) => {
            targetRef.current = { x: e.clientX, y: e.clientY };
        };

        canvas.width = widthRef.current;
        canvas.height = heightRef.current;
        initPoints();

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        let rafId;
        const animate = () => {
            if (animateHeader.current) drawPoints(ctx);
            rafId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            pointsRef.current.forEach((p) => gsap.killTweensOf(p));
        };
    }, []);
    return (
        <div>
            <div className="background-img-slider-SecOne">
                <div className="slider-section SolidBackground">
                    <canvas ref={canvasRef} id="background-canvas"
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </div>
                <div className="container">
                    <div className="row sec-one-row">
                        <div className="col-xxl-6 col-xl-6 col-lg-9 sec-one-col1 fade_down">
                            <div className="quality-main">
                                <p className="quality">quality handyman service</p>
                            </div>
                            <h1 className="Handyman-main-text">Sustainable Handyman Solution</h1>
                            <h2 className="eget">Eget mi proin sed libero. Egestas sed sed risus pretium quam vulputate
                                dignissim. Tincidunt vitae semper quis lectus nulla at volutpat diam.</h2>
                            <div className="sec-one-buttons">
                                <Link to="/GetQuote" className="btn-main btn1">Get A Quote
                                    <span className="arrow-section">
                                        <img className="arrow" src={RightArrowSvg} alt="right-arrow-svg" />
                                    </span>
                                    <div className="btn-box-left"></div>
                                    <div className="btn-box-right"></div>
                                </Link>
                                <div className="position-relative">
                                    <button className="diamond-btn youtube" onClick={openModal}>
                                        <img src={PlayBtnSvg} alt="play-btn" />
                                    </button>
                                    <div className="right-arrow-svg">
                                        <img src={DotArrow} alt="dot-arrow-png" />
                                        <p className="play-now">Play Now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal
                            isOpen={isOpen}
                            onRequestClose={closeModal}
                            contentLabel="YouTube Video"
                            className="video-modal"
                            overlayClassName="video-overlay"
                        >
                            <div className="video-wrapper">
                                <iframe
                                    width="100%"
                                    height="400"
                                    src="https://www.youtube.com/embed/Hh3MjLaDNG8?autoplay=1"
                                    title="YouTube video"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <button onClick={closeModal} className="close-btn">✖</button>
                        </Modal>
                        <div className="col-xxl-6 col-xl-6 col-lg-12 sec-one-col1 fade_down">
                            <img className="sec-oneimg1" src={SecOneimg1} alt="sec-oneimg1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSolidBg