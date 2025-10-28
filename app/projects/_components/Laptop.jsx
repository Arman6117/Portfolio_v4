"use client";

import * as THREE from "three";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
  Html,
} from "@react-three/drei";

import { Canvas, useFrame } from "@react-three/fiber";

import { Suspense, useRef, useState, useEffect } from "react";

function Model(props) {
  const iframeRef = useRef();
  const group = useRef();
  const { nodes, materials } = useGLTF("/mac-draco.glb");
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Reset loading state when URL changes
  useEffect(() => {
    setIframeLoaded(false);

    // Fallback timeout in case onLoad doesn't fire
    const timeout = setTimeout(() => {
      setIframeLoaded(true);
      props.onLoad?.();
    }, 3000); // 3 seconds fallback

    return () => clearTimeout(timeout);
  }, [props.url, props]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 20,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 8) / 50,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-2 + Math.sin(t / 5)) / 2,
      0.5
    );
  });

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    props.onLoad?.();
  };

  return (
    <group
      ref={group}
      {...props}
      position={[-2.5, 1.2, -4]}
      scale={[1.5, 1.5, 1.5]}
      rotation={[0, Math.PI, 0]}
      dispose={null}
    >
      <group rotation-x={-0.15} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube008"].geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes["Cube008_1"].geometry}
          />
          <mesh geometry={nodes["Cube008_2"].geometry}>
            <Html
              className="content"
              position={[-0.01, 0.1, -0.2]}
              rotation-x={-Math.PI / 2}
              rotation-z={0.01}
              transform
              center
              scaleFactor={0.5}
              occlude
            >
              <div
                className="wrapper"
                onPointerDown={(e) => e.stopPropagation()}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                }}
                onClick={() => window.open(props.url, "_blank")}
              >
                <img
                  src={props.thumbnail}
                  alt={props.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    border: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "rgba(0, 0, 0, 0.7)",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "bold",
                    pointerEvents: "none",
                  }}
                >
                  Click to Visit →
                </div>
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube002"].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes["Cube002_1"].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
}

const Laptop = ({ url, thumbnail, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when URL changes
  useEffect(() => {
    setIsLoading(true);
  }, [url]);

  // Fallback timeout to hide overlay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds max wait

    return () => clearTimeout(timeout);
  }, [url]);

  return (
    <div className="relative w-full h-full">
      {/* Global Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-lg">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin" />
            <p className="text-white text-lg font-medium">Loading Project...</p>
          </div>
        </div>
      )}

      <Canvas camera={{ position: [-5, -10, 10], fov: 70 }}>
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Suspense fallback={null}>
          <group rotation={[0, Math.PI, 0]} position={[-3, 1, 2]} scale={1.2}>
            <Model 
              url={url} 
              thumbnail={thumbnail}
              title={title}
              onLoad={() => setIsLoading(false)} 
            />
          </group>

          <Environment preset="studio" />
        </Suspense>
        <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.8} />
        <OrbitControls
          target={[0, 1, 0]}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Laptop;