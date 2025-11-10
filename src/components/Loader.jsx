// import React, { useEffect, useRef } from "react";
// import lottie from "lottie-web";

// export default function Loader({ onFinish }) {
//   const container = useRef(null);

//   useEffect(() => {
//     const anim = lottie.loadAnimation({
//       container: container.current,
//       renderer: "svg",
//       loop: false,
//       autoplay: true,
//       path: "/animation.json", // 👈 public folder path
//     });

//     // when animation completes
//     anim.addEventListener("complete", () => {
//       setTimeout(() => onFinish(), 300);
//     });

//     // fallback (in case animation doesn't trigger "complete")
//     const timer = setTimeout(() => onFinish(), 7000);

//     return () => {
//       anim.destroy();
//       clearTimeout(timer);
//     };
//   }, [onFinish]);

//   return (
//   <div className=" fixed w-full h-fit bg-white object-cover overflow-hidden sm:bottom-0-20">
//   <div
//     ref={container}
//     className="w-full h-full max-w-[100vw] max-h-[100vh] object-cover"
//     style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     }}
//   />
// </div>

//   );
// }



import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function Loader({ onFinish }) {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "/animation.json",
     
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice", 
      },
    });

    // when animation completes
    anim.addEventListener("complete", () => {
      setTimeout(() => onFinish(), 300);
    });

    // fallback (in case animation doesn't trigger "complete")
    const timer = setTimeout(() => onFinish(), 6000);

    return () => {
      anim.destroy();
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-white overflow-hidden">
      <div
        ref={container}
        className="w-full h-full"
        
      />
    </div>
  );
}

