import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Subtle, luxury Three.js ambient geometric wireframe & floating particle field
 * harmonized strictly to the AdWala Logo Palette: Warm Gold (#D49600 / #F5B800) & Charcoal (#111111).
 */
export function HeroThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 680;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 11.5;

    // Subtle floating warm-gold architectural wireframe
    const geo = new THREE.IcosahedronGeometry(2.7, 1);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xd49600,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(-2.3, 0.15, 0);
    scene.add(mesh);

    // Subtle golden + obsidian ambient particles
    const count = 85;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const goldBright = new THREE.Color(0xf5b800);
    const goldDeep = new THREE.Color(0xc98c00);
    const charcoal = new THREE.Color(0x222222);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      const c = i % 4 === 0 ? charcoal : i % 2 === 0 ? goldBright : goldDeep;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.085,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
    });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    let mouseX = 0;
    let mouseY = 0;
    const onPointerMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 1.1;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.7;
    };
    window.addEventListener("mousemove", onPointerMove, { passive: true });

    const onResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || 680;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    let rafId = 0;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      mesh.rotation.x += 0.0018;
      mesh.rotation.y += 0.0028;
      points.rotation.y += 0.0007;
      camera.position.x += (mouseX - camera.position.x) * 0.04;
      camera.position.y += (-mouseY - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
      renderer?.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", onResize);
      geo.dispose();
      mat.dispose();
      pGeo.dispose();
      pMat.dispose();
      renderer?.dispose();
      if (renderer?.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    />
  );
}
