import "./Header.scss";

import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
// import { models } from "../../constants";
import Typewriter from "typewriter-effect";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  // useGLTF,
  Sphere,
  MeshDistortMaterial,
} from "@react-three/drei";

const Header = () => (
  <div className="app__header app__flex">
    {/* 自介 */}
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-left-container"
    >
      <div className="header-name">
        <p className="p-text-lg">Hello, I am</p>
        <h1 className="name-text">Shuyuan Chuang</h1>
      </div>
      <div className="app__header-work-info">
        <p className="work-info-text">I'm a</p>
        <Typewriter
          options={{
            strings: [
              "Front-end Developer.",
              "UI Designer.",
              "Graphic Designer.",
            ],
            autoStart: true,
            loop: true,
            wrapperClassName: "type-writer",
          }}
        />
      </div>
    </motion.div>

    {/* 個人圖示 */}
    <div className="app__header-right-container">
      <div className='header-model'>
        <Canvas>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#54675E"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Suspense>
        </Canvas>
        {/* <Canvas camera={{ position: [-10, 10, 40], fov: 40 }} flat>
          <hemisphereLight color="white" groundColor="blue" intensity={0.75} />
          <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
          <group position={[0, -10, 0]}>
            <Model position={[0, 0.25, 0]} url={models.tree} />
            <ContactShadows scale={20} blur={10} far={20} />
          </group>
          <OrbitControls />
        </Canvas> */}
      </div>
    </div>

    {/* 提示滑鼠 */}
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-scroll"
    >
      <section>
        <a id="scroll-btn" href="#about" />
      </section>
    </motion.div>
  </div>
);

// function Model({ url }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} />;
// }

export default AppWrap(Header, "home");
