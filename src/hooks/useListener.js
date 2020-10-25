// import { call } from "file-loader";
// import { useState, useEffect } from "react";

// export const useListener = (listenOn, callback, ref) => {
//   const removeListener = () =>
//     ref
//       ? ref.current.removeEventListener(listenOn, callback)
//       : window.removeEventListener(listenOn, callback);

//   useEffect(() => {
//     if (!ref) window.addEventListener(listenOn, callback);
//     else ref.current.addEventListener(listenOn, callback);

//     return removeListener;
//   }, []);

//   return removeListener;
// };
