"use client";

import * as THREE from "three";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
  Html,
} from "@react-three/drei";
import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";

import { Suspense, useRef } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

function Model(props) {
  const iframeRef = useRef();
  const group = useRef();
  const { nodes, materials } = useGLTF("/mac-draco.glb");

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

  return (
    <group
      ref={group}
      {...props}
      position={[-2.5, 1.2, -4]} // Keep the position as it is
      scale={[1.5, 1.5, 1.5]}
      rotation={[0, Math.PI, 0]} // Rotate Y-axis by 180 degrees to face forward
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
            {/* Update the Html component here */}
            <Html
              className="content"
              position={[-0.01, 0.1, -0.2]} // Adjusted for better alignment
              rotation-x={-Math.PI / 2}
              rotation-z={0.01} // Minor rotation tweak
              // scale={[0.85, 0.85, 0.85]} // Adjust scale
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
                  //  paddingTop: "56.25%",  Aspect ratio
                }}
              >
                <iframe
                  ref={iframeRef}
                  title="Live Website"
                  src={props.url}
                  allowFullScreen
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    border: "none",
                  }}
                />
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

const Laptop = ({ url }) => {
  return (
    <Canvas camera={{ position: [-5, -10, 10], fov: 70 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[-3, 1, 2]} scale={1.2}>
          <Model url={url} />
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
  );
};

export default Laptop;
