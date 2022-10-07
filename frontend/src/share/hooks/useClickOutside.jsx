import { useEffect } from "react";

function useClickOutside(ref, fun) {
  // console.log(fun, "fun");
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        // console.log(ref.current, "ref");
        // console.log(e.target, "e");

        return;
      }
      fun();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);
}

export default useClickOutside;
