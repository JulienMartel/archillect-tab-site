"use client";

import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Html, useProgress } from "@react-three/drei";
import { Suspense, useState } from "react";
import { motion as motion3d } from "framer-motion-3d";
import { motion } from "framer-motion";
import { Model } from "./model";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

export function Phone() {
  const [spinBool, setSpinBool] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="h-full w-full"
    >
      <Canvas className="h-full w-full">
        <PerspectiveCamera makeDefault position={[0, 0, 0.25]} />
        <ambientLight intensity={0.8} />
        <spotLight
          position={[-10, 10, 20]}
          angle={0.15}
          intensity={0.5}
          penumbra={1}
        />
        <group position={[0, 0, 0]}>
          <motion3d.group
            initial={{ rotateY: 0 }}
            animate={{ rotateY: Math.PI }}
            transition={{ type: "spring", duration: 1 }}
            whileHover={{
              rotateY: Math.PI * (spinBool ? -1 : 1) - Math.PI / 16,
              rotateX: 0 - Math.PI / 24,
              rotateZ: Math.PI / 36,
              x: 0.002,
              y: 0.005,
              z: 0.005,
            }}
            whileTap={{
              rotateY: Math.PI * (spinBool ? -1 : 1),
            }}
            onPointerUp={() => setSpinBool((old) => !old)}
          >
            <Suspense fallback={<Loader />}>
              <Model />
            </Suspense>
          </motion3d.group>
        </group>
      </Canvas>
    </motion.div>
  );
}