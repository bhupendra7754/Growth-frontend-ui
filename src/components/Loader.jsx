import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function Loader({ onFinish }) {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,           // only once
      autoplay: true,
      path: "/animation.json", // file from public folder
    });

    // when animation ends
    anim.addEventListener("complete", () => {
      setTimeout(() => onFinish(), 300);
    });

    // fallback in case animation event fails
    const timer = setTimeout(() => onFinish(), 6000);

    return () => {
      anim.destroy();
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div ref={container} className="w-[300px] h-[300px]" />
    </div>
  );
}

