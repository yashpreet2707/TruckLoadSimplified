import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { RiArrowDownDoubleLine } from '@remixicon/react';
import { Link } from 'react-router-dom';

const Home = () => {
  const lineRefs = useRef([]);

  useEffect(() => {
    lineRefs.current.forEach((line, index) => {
      gsap.to(line, {
        x: '100vw',
        duration: 4 + index,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    });
  }, []);
  return (
    <>
      <div className="mt-32 h-80 flex items-center justify-center text-center">
        <div className="p-10">
            <h1 className="text-6xl font-light selection:text-[#2ECC40] cursor-pointer">truck load simplified</h1>
            <p className="text-lg mt-5">One stop solution for all the things related to Load</p>
            <Link to="log-in">
            <button className="mt-6 bg-[#2ECC40] text-white py-2 px-6 rounded-md text-lg font-extrabold">
            Already a Customer? Log-In
            </button>
            </Link>
            <div className="flex justify-center mt-10"><RiArrowDownDoubleLine size={40} /></div>
        </div>
      </div>

      {/* animation */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        {[...Array(5)].map((_, i) => (
          <path
            key={i}
            ref={el => (lineRefs.current[i] = el)}
            d="M0,256 C480,200 960,300 1440,256 L1440,320 L0,320 Z"
            fill="transparent"
            stroke="#00FF00"
            strokeWidth="2"
            opacity={0.5 - i * 0.1} 
          />
        ))}
      </svg>
      </>
  );
};

export default Home;
