import { Link } from "@/components";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import { useEffect, useRef } from "react";
// import type { Mesh } from "three";

const ThingBucketModel = () => {
	const mesh = useRef(null);
	const gltf = useGLTF("/thing_bucket.glb");

	useFrame((_state, delta) => {
		if (mesh?.current === null) return;
		// mesh.current!.rotation.x += delta;
		// @ts-ignore
		mesh.current.rotation.y += delta / 2;
	});

	useDrag(
		({ movement: [mx, my] }) => {
			if (mesh?.current === null) return;
			// @ts-ignore
			mesh.current.position.x += mx;
			// @ts-ignore
			mesh.current.position.y += my;
		},
		// {
		// 	domTarget: mesh.current,
		// },
	);

	useEffect(() => {
		if (mesh?.current === null) return;
		// @ts-ignore
		mesh.current.rotation.x = 0.51;
	}, []);

	return (
		<>
			<OrbitControls />
			<mesh ref={mesh} scale={[0.015, 0.015, 0.015]}>
				<primitive object={gltf.scene} position-y={-0.5} />
			</mesh>
		</>
	);
};

export const ThingBucket = () => {
	return (
		<>
			<Link href="">Thingyverse link</Link>
			<Canvas className="h-64">
				<ThingBucketModel />
				<Environment preset="city" />
			</Canvas>
			<p>This is a bucket that holds things</p>
		</>
	);
};
