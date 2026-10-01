import { useEffect, useRef } from "react";

function CherryBlossoms() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    const ctx = cv.getContext("2d");
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)");

    let L = 0;
    let A = 0;
    let petalas = [];
    let raf = null;
    let rodando = false;

    function medir() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      L = window.innerWidth;
      A = window.innerHeight;

      cv.width = L * dpr;
      cv.height = A * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function nova(topo) {
      return {
        x: Math.random() * L,
        y: topo ? -20 - Math.random() * A : Math.random() * A,
        t: 6 + Math.random() * 7,
        vy: 0.22 + Math.random() * 0.45,
        fase: Math.random() * Math.PI * 2,
        giro: Math.random() * Math.PI,
        vg: (Math.random() - 0.5) * 0.02,
        balanco: 0.3 + Math.random() * 0.6,
        alfa: 0.35 + Math.random() * 0.35
      };
    }

    function desenhar(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.giro);
      ctx.scale(1, Math.max(0.25, Math.cos(p.fase)));
      ctx.globalAlpha = p.alfa;
      ctx.fillStyle = "#E7B7C0";

      ctx.beginPath();
      ctx.moveTo(0, -p.t);
      ctx.bezierCurveTo(
        p.t * 0.85,
        -p.t * 0.55,
        p.t * 0.62,
        p.t * 0.62,
        0,
        p.t
      );
      ctx.bezierCurveTo(
        -p.t * 0.62,
        p.t * 0.62,
        -p.t * 0.85,
        -p.t * 0.55,
        0,
        -p.t
      );
      ctx.fill();

      ctx.restore();
    }

    function quadro() {
      ctx.clearRect(0, 0, L, A);

      for (const p of petalas) {
        p.y += p.vy;
        p.fase += 0.014;
        p.giro += p.vg;
        p.x += Math.sin(p.fase) * p.balanco;

        if (p.y > A + 24 || p.x < -40 || p.x > L + 40) {
          Object.assign(p, nova(true), { y: -20 });
        }

        desenhar(p);
      }

      raf = requestAnimationFrame(quadro);
    }

    function iniciar() {
      medir();

      if (reduzir.matches) {
        ctx.clearRect(0, 0, L, A);
        cancelAnimationFrame(raf);
        rodando = false;
        return;
      }

      const total = L < 700 ? 8 : 16;

      petalas = Array.from(
        { length: total },
        () => nova(false)
      );

      if (!rodando) {
        rodando = true;
        quadro();
      }
    }

    let t;

    const aoRedimensionar = () => {
      clearTimeout(t);
      t = setTimeout(iniciar, 200);
    };

    const aoMudarPreferencia = () => {
      iniciar();
    };

    const aoMudarVisibilidade = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        rodando = false;
      } else if (!rodando && !reduzir.matches) {
        rodando = true;
        quadro();
      }
    };

    window.addEventListener("resize", aoRedimensionar);
    reduzir.addEventListener?.("change", aoMudarPreferencia);
    document.addEventListener("visibilitychange", aoMudarVisibilidade);

    iniciar();

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);

      window.removeEventListener("resize", aoRedimensionar);
      reduzir.removeEventListener?.("change", aoMudarPreferencia);
      document.removeEventListener("visibilitychange", aoMudarVisibilidade);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="sakura-canvas"
      aria-hidden="true"
    />
  );
}

export default CherryBlossoms;