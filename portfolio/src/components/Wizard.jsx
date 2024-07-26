import {useAnimations,useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import { Suspense,useEffect,useRef,useState } from "react";
import CatScene from "../assets/wizard_cat.glb";

const CatMage = ( {scale, position}) => {

    const catRef = useRef();
    const {scene, animations} = useGLTF(CatScene);
    const {actions} = useAnimations(animations, catRef);
    useEffect(() => {
      actions["Animation"].play();
    }, [actions]);
  return (
    <mesh
        ref={catRef}
        position={position}
        scale={scale}
        rotation={[0.05,-0.7,0]}
    >
        <primitive object={scene} />
    </mesh>
  );
};

const WizardScene = ({scrollContainer}) => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [scale, setScale] = useState([1.66,1.66,1.66]);
  const [position, setPosition] = useState([1.75, -2.75, -0.5])


  const handleScroll = () => {
    const scrollTop = scrollContainer.current.scrollTop;
    const rotationXVal = scrollTop * -0.0006;
    const rotationYVal = scrollTop * -0.00075;
    setRotationX(rotationXVal);
    setRotationY(rotationYVal);
  };

  const handleResize = () => {
    if (window.innderWidth < 768) {
      setScale([1,1,1]);
      setPosition([3, -1.3, -0.5]);
    } else if (window.innerWidth < 1024){
      setScale([1.33,1.33,1.33]);
      setPosition([2.25, -1.5, -0.5]);
    } else if (window.innerWidth < 1280){
      setScale([1.5,1.5,1.5]);
      setPosition([2.0, -1.85, -0.5]);
    } else if (window.innerWidth < 1536) {
      setScale([1.66,1.66,1.66]);
      setPosition([1.75, -2.5, -0.5]);
    } else {
      setScale([2,2,2]);
      setPosition([1.75, -2.75, -0.5])
    } 
  };

  const handleKeyPress = () => {

  };

  useEffect( () => {
    window.addEventListener('keydown',handleKeyPress);
    return () => {
      window.removeEventListener('keydown',handleKeyPress);
    }
    },[handleKeyPress]);

    
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize',handleResize);
    }
  }, [handleResize]);

  useEffect( ()=> {handleResize()},[]);

  return (
    <Canvas 
      camera={{ near: 0.01, far: 1000}} 
    >
      <Suspense>
        <directionalLight position={[1,1,1]} intensity={2}/>
        <ambientLight intensity={0.4}/>
        <pointLight position={[10,5,10]} intensity={2} />
        <spotLight position={[0,50,10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor ="#b1e1ff" groundColor="#000000" intensity={1} />
        <CatMage 
          rotationX={rotationX} 
          rotationY={rotationY}
          scale={scale}
          position={position}
          className={'position: relative; top: 0; left: 9%;'}
        />
      </Suspense>
    </Canvas>
  );
};

export default WizardScene
