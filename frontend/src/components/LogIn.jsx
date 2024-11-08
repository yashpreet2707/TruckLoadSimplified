import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { RiArrowDownSLine } from '@remixicon/react';
import { Link } from 'react-router-dom';
import logo from "../../public/logo-no-background.png"

const SignUp = () => {
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
    <div className="relative w-full h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-4 border-b border-gray-400">

        <div className="flex items-center space-x-2 w-2/5">
          <img width="200" src={logo} alt="" />
        </div>

        <div className="w-3/5 flex justify-evenly text-xl">
            <ul className="flex items-center gap-x-10 mr-14">
                <Link to=""><li className="flex items-center gap-x-2">Products <RiArrowDownSLine /></li></Link>
                <Link to=""><li className="flex items-center gap-x-2">Solutions <RiArrowDownSLine /></li></Link>
                <Link to=""><li className="flex items-center gap-x-2">Resources <RiArrowDownSLine /></li></Link>
                <Link to=""><li className="flex items-center gap-x-2">Contact</li></Link>
            </ul>
            <ul className="flex gap-x-10">
                <Link to="log-in" className="hover:text-[#2ECC40]"><li>Login</li></Link>
                <Link to="sign-up" className="hover:text-[#2ECC40]"><li>Signup</li></Link>
            </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="h-80 flex items-center justify-center text-center bg-gray-50 opacity-30">
      </div>

      {/* animation */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
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
            opacity={0.5 - i * 0.1} // Decrease opacity for layers behind
          />
        ))}
      </svg>

    </div>
  );
};

export default SignUp;
